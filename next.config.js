const locales = {
  en: true,
  fr: true,
  ru: true,
};

module.exports = {
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === "string"
        ? process.env.LOCALE_SUBPATHS
        : "none"
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const locale = Object.keys(locales);
    const pages = {};
    Object.keys(defaultPathMap).map(url => {
      if (url.indexOf("[locale]") >= 0) {
        locale.forEach(lang => {
          const url_locale = url.replace(/\[locale\]/, lang);
          pages[url_locale] = Object.assign(
            { query: { locale: lang } },
            defaultPathMap[url]
          );
        });
      } else {
        pages[url] = defaultPathMap[url];
      }
    });
    console.log(pages);
    return pages;
  }
};
