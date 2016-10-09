'use strict';

var webpack = require('webpack');

module.exports = {
	'context' : __dirname + '/app',
	'entry' : {
		'vendor' : [ 'angular' ]
	},
	'output': {
		'path':  __dirname + '/js',
		'filename' : 'app.bundle.js'
	},

	'devServer' : {
	'inline' : true,
	'port' : 8080,
	'proxy': [ {
		'path': '/api',
		    'target': 'https://testapi.nzfsg.co.nz/',
		    'changeOrigin' : true,
		    'pathRewrite' : {
			'^/api' : ''
		    }
		} ]
    },

	'plugins' : [
		new webpack.optimize.CommonsChunkPlugin( /* chunkName= */"vendor", /* filename= */"vendor.bundle.js" )
	]
};