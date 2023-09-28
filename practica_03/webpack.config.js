const path = require('path');
const webpack = require('webpack');

module.exports = {
    // Punto de entrada de tu aplicación
    entry: './src/index.js',

    output: {
        // Nombre del archivo de salida
        filename: 'bundle.js',
        // Ruta absoluta al directorio de salida
        path: path.resolve(__dirname, 'dist'),
    },
    externals: {
        express: 'express',
    },

    // Configuración de módulos
    module: {
        rules: [
            {
                // Regla para archivos CSS
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                // Regla para cargar imágenes
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    // Configuración de resolución de módulos

    resolve: {
        extensions: ['.js', '.json'],
        fallback: {
            "buffer": require.resolve('buffer'),
            "util": require.resolve('util'),
            "stream": require.resolve('stream-browserify'),
            "events": require.resolve('events'),
            "fs": false,
            "assert": false,
            "constants": false,
            "tls": false,
            "url": false,
            "timers": false,
            "http": false,
            "path": false,


            crypto: false,
        },
    },

    // Modo de construcción (development o production)
    mode: 'development',


    // Otras configuraciones de plugins, optimización, etc.
    // ...
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
            resource.request = resource.request.replace(/^node:/, '');
        }),
    ],


};

