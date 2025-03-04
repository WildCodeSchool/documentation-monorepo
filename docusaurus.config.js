// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Monorepo JS - Documentation",
	tagline:
		"Prise en main du framework Monorepo JS proposé par la Wild Code School",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://documentation-js-template.vercel.app",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "Anthony Gorski", // Usually your GitHub org/user name.
	projectName: "Monorepo JS", // Usually your repo name.

	onBrokenLinks: "ignore",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/GorskiAnthony/documentation-js-template/blob/main/",
				},

				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Monorepo JS - Documentation",
				logo: {
					alt: "logo wild code school",
					src: "img/wcs.png",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Introduction",
					},
					{
						href: "https://github.com/WildCodeSchool/create-Monorepo JS",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorial",
								to: "/docs/architecture-monorepo",
							},
						],
					},
					{
						title: "Communauté",
						items: [
							{
								label: "Github",
								href: "https://github.com/WildCodeSchool/documentation-Monorepo JS",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/WildCodeSchool",
							},
						],
					},
					{
						title: "Auteur",
						items: [
							{
								label: "𝕏: @GorskiAnthony",
								href: "https://twitter.com/Gorski_anthony",
							},
							{
								label: "Github: @AnthonyGorski",
								href: "https://github.com/GorskiAnthony",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
