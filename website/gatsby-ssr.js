const React = require("react");
const { Helmet } = require("react-helmet");

const { SEOData } = require("./src/components/SEO");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <Helmet>
      <html lang="en" />
      <title>{SEOData.title}</title>
      <meta name="description" content={SEOData.description} />
      <meta name="keywords" content={SEOData.keywords.join(", ")} />
      <meta property="og:title" content={SEOData.title} />
      <meta property="og:description" content={SEOData.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={SEOData.image} />
      <meta property="og:url" content={SEOData.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEOData.twitterUsername} />
      <meta name="twitter:title" content={SEOData.title} />
      <meta name="twitter:description" content={SEOData.description} />
      <meta name="twitter:image" content={SEOData.image} />
    </Helmet>,
  ]);
};