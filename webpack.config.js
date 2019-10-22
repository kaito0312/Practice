var path = require('path');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'index-bundle.js',
    }
}