module.exports = {
	entry: "./src/app.js",
	resolve: {
		extensions: [".jsx", ".js", '...']
	},
	module: {
		rules: [
			{
			  test: /\.(js|jsx)$/,
			  exclude: /node_modules/,
			  use: ["babel-loader", "js-loader"],
			},
		]
 	},
};