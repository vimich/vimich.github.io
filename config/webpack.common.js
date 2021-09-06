module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', '.json', '.yml']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env',
                        '@babel/preset-typescript'
                    ],
                    plugins: [
                        '@babel/plugin-transform-runtime',
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|.yml|eot|otf|ttf|woff2?)$/,
                use: 'file-loader'
            }
        ]
    }
};
