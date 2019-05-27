path = require('path')


module.exports = ({ config, mode }) => {

	config.resolve.alias = {
		'../../theme.config$': '../../../../src/semantic-ui/theme.config'
	}


	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('babel-loader'),
		options: {
			presets: [['react-app', { flow: false, typescript: true }]],
		},
	});

	config.module.rules.push({
		test: /\.less$/,
		loaders: ["style-loader", "css-loader", "less-loader"]
	})

	console.log(config.resolve)
	config.resolve.extensions.push('.ts', '.tsx', '.less');
	return config;
};