// Every template in src/pages is rendered once per language.
const pageKey = (data) => data.page.filePathStem.split("/").pop();

export default {
  pagination: { data: "site.languages", size: 1, alias: "lang" },
  permalink: (data) => `${data.site.dir[data.lang]}${pageKey(data)}.html`,
  eleventyComputed: {
    key: pageKey,
    t: (data) => data.texts[data.lang][pageKey(data)],
    c: (data) => data.texts[data.lang].common,
    r: (data) => data.site.root[data.lang],
    other: (data) => (data.lang === "de" ? "en" : "de"),
  },
};
