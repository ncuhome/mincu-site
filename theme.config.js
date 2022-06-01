// theme.config.js
export default {
  projectLink: 'https://github.com/ncuhome/mincu-site', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/ncuhome/mincu-site/blob/master', // base URL for the docs repository
  titleSuffix: ' – Mincu',
  floatTOC: true,
  nextLinks: true,
  prevLinks: true,
  search: true,
  unstable_flexsearch: true,
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © NCUHOME.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>👏 Mincu - 南大家园 WEB JS API</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Mincu" />
      <meta name="og:title" content="Mincu" />
    </>
  ),
}