// Loads all page texts from texts/<lang>/<page>.yaml into texts[lang][page].
import fs from "node:fs";
import path from "node:path";
import { load } from "js-yaml";

const root = path.resolve("texts");

export default function () {
  const texts = {};
  for (const lang of fs.readdirSync(root)) {
    texts[lang] = {};
    for (const file of fs.readdirSync(path.join(root, lang))) {
      if (!file.endsWith(".yaml")) continue;
      const source = fs.readFileSync(path.join(root, lang, file), "utf8");
      texts[lang][path.basename(file, ".yaml")] = load(source, { filename: file });
    }
  }
  return texts;
}
