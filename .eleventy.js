const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const robotstxt = require("eleventy-plugin-robotstxt");

module.exports = function(eleventyConfig) {
    // Copy static assets (CSS, JavaScript, images) to the output directory.
    // This ensures they are available to the built site.
    eleventyConfig.addPassthroughCopy("src/assets");
    // Specifically copy sitemap.xml to the root of the output directory.
    eleventyConfig.addPassthroughCopy({ "src/assets/sitemap.xml": "sitemap.xml" });

    // Initialize the Eleventy Navigation plugin to enable easy creation of navigation menus.
    eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));

    // Configure the Markdown parser.
    // Enable HTML tags within Markdown and add anchor links to headings.
    const md = markdownIt({ html: true }).use(markdownItAnchor);
    eleventyConfig.setLibrary("md", md);

    // Register a Nunjucks filter "md" to process Markdown content within Nunjucks templates.
    // This allows dynamic content fetched from data files to be rendered as Markdown.
    eleventyConfig.addNunjucksFilter("md", function(content) {
        if (typeof content === 'string') {
            // Ensure that only string content is processed by the Markdown renderer.
            return md.render(content);
        }
        // Return non-string content as is.
        return content;
    });

    // Configure and add the robots.txt plugin.
    // This plugin generates a robots.txt file to guide web crawlers.
    eleventyConfig.addPlugin(robotstxt, {
        // Define a default policy allowing all user agents to crawl all parts of the site.
        // This is a common permissive setting.
        policy: [
            {
                userAgent: "*", 
                allow: ["/"],         
            }
        ],
        // Specifies the path to the sitemap. It is important that this sitemap exists.
        sitemap: "/sitemap.xml",
        // The 'host' property is commented out to maintain flexibility.
        // It can be uncommented and configured if a specific domain needs to be enforced for the sitemap or other crawler directives.
        // host: "YOUR_SITE_URL_HERE" 
    });

    // Define core Eleventy directory and template engine configurations.
    return {
        // Use Nunjucks as the template engine for Markdown files.
        markdownTemplateEngine: "njk",
        // Use Nunjucks as the default templating engine for HTML files.
        htmlTemplateEngine: "njk",
        // Specify custom directory names for input, output, includes, layouts, and data.
        // This organizes the project structure.
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes", // Partials and reusable components.
            layouts: "_includes",  // Base page structures. (Note: Often a dedicated 'layouts' folder is used, but '_includes' works if preferred)
            data: "_data"      // Global and local data files.
        }
    };
};
