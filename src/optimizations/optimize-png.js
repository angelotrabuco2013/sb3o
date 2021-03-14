const AssetOptimization = require('./asset-optimizer');
const imageminOptiPng = require('imagemin-optipng');

class PNGOptimizer extends AssetOptimization {
  shouldOptimize(asset) {
    return asset.dataFormat === 'png';
  }
  async optimizeAsset(data) {
    const result = await imageminOptiPng()(Buffer.from(data));
    return result;
  }
}

module.exports = PNGOptimizer;