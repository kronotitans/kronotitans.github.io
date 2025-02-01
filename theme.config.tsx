import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Krono Titans Whitepaper" />
      <meta name="author" content="Krono Titans" />
      <meta
        name="keywords"
        content="Krono Titans, KTN, KronoTitans Crypto, Krono Titans Blockchain"
      />
      <meta name="robots" content="index, follow" />
      <title>Krono Titans Whitepaper | KTN</title>
    </>
  ),
  logo: <span>Whitepaper | Krono Titans</span>,
  project: {
    link: "https://github.com/kronotitans/kronotitans.github.io",
  },
  docsRepositoryBase: "https://github.com/kronotitans/kronotitans.github.io",
  footer: {
    content: "Krono Titans | KTN",
  },
};

export default config;
