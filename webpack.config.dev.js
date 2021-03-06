const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	devtool:"#source-map",
	devServer:{
		contentBase: path.join(__dirname,'dist')
	}
});
