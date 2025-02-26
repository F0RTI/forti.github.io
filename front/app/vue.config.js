// filepath: /S:/GIT/forti.github.io/front/app/vue.config.js
const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: '../dist',
    publicPath: process.env.NODE_ENV === 'production' ? '/front/dist/' : '/',
    chainWebpack: (config) => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src'));

        config.module
            .rule('ts')
            .test(/\.ts$/)
            .use('ts-loader')
            .loader('ts-loader')
            .end();

        config.module
            .rule('vue')
            .test(/\.vue$/)
            .use('vue-loader')
            .loader('vue-loader')
            .end();
    },
    configureWebpack: {
        resolve: {
            extensions: ['.ts', '.js', '.vue', '.json'],
        },
    },
});
