export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "/" });
  eleventyConfig.addWatchTarget("texts/");
  // Texts may contain simple inline HTML (<br>, <em>), so output them unescaped.
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: false });

  return {
    dir: { input: "src", output: "_site" },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
  };
}
