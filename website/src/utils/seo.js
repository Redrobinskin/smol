const axios = require('axios');

const SEOData = require('../components/SEO.js');

async function updateSEO(newData) {
  SEOData.title = newData.title || SEOData.title;
  SEOData.description = newData.description || SEOData.description;
  SEOData.keywords = newData.keywords || SEOData.keywords;
  SEOData.author = newData.author || SEOData.author;
  SEOData.image = newData.image || SEOData.image;
  SEOData.url = newData.url || SEOData.url;
  SEOData.siteName = newData.siteName || SEOData.siteName;
}

async function getSEO() {
  return SEOData;
}

async function analyzeSEO() {
  const response = await axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${SEOData.url}&strategy=desktop`);
  return response.data;
}

module.exports = {
  updateSEO,
  getSEO,
  analyzeSEO
};