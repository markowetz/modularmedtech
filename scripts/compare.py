"""Compare two built site folders page by page (tags, attributes, text).

Usage: python3 -I scripts/compare.py <reference_dir> <built_dir> [page ...]
Whitespace differences and empty class attributes are ignored.
"""
import difflib
import pathlib
import re
import sys
from html.parser import HTMLParser


VOID = {"br", "hr", "img", "input", "link", "meta", "source", "wbr"}


class Tokens(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out = []

    def handle_starttag(self, tag, attrs):
        attrs = sorted((k.lower(), v or "") for k, v in attrs if not (k == "class" and not v))
        self.out.append(f"<{tag} " + " ".join(f'{k}="{v}"' for k, v in attrs) + ">")

    def handle_endtag(self, tag):
        if tag not in VOID:
            self.out.append(f"</{tag}>")

    def handle_data(self, data):
        text = re.sub(r"\s+", " ", data).strip()
        if text:
            self.out.append(text)


def tokens(path):
    p = Tokens()
    p.feed(path.read_text(encoding="utf-8"))
    return p.out


ref, built = map(pathlib.Path, sys.argv[1:3])
only = set(sys.argv[3:])
failed = 0
for ref_file in sorted(ref.glob("**/*.html")):
    rel = ref_file.relative_to(ref)
    if only and rel.stem not in only:
        continue
    built_file = built / rel
    if not built_file.exists():
        print(f"MISSING  {rel}")
        failed += 1
        continue
    a, b = tokens(ref_file), tokens(built_file)
    if a == b:
        print(f"OK       {rel}")
        continue
    failed += 1
    print(f"DIFF     {rel}")
    for line in list(difflib.unified_diff(a, b, lineterm="", n=1))[2:30]:
        print("   ", line[:200])
sys.exit(1 if failed else 0)
