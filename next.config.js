const path = require('path')
module.exports = {
  target: 'serverless',
  webpack: (config, options) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['theme'] = path.join(__dirname, 'theme')
    config.resolve.alias['pages'] = path.join(__dirname, 'pages')

    return config
  }
}
