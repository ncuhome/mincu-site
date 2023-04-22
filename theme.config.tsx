// theme.config.js
import type { DocsThemeConfig} from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/ncuhome/mincu'
  },
  docsRepositoryBase: 'https://github.com/ncuhome/mincu-site/tree/main/pages',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Mincu'
    }
  },
  toc: {
    float: true,
  },
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: true,
  footer: {
    text: <span>MIT {new Date().getFullYear()} © <a href="https://team.ncuos.com" target="_blank">NCUHOME</a>.</span>
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  logo: (
    <>
      <span>👏 mincu - 南大家园 WEB JS API</span>
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

export default config;