const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    mode: "production",
    entry: {
        index: "./public/index.js",
        db: "./public/db.js"
    },
    output: {
        path: __dirname + "/public/dist",
        filename: "[name].bundle.js"
    },
    plugins: [
        new WebpackPwaManifest({
            fingerprints: false,
            inject: false,
            name: "Budget App",
            short_name: "Budget App",
            description: "An application that allows you to keep track of your budget.",
            background_color: "#ffffff",
            theme_color: "#ffffff",
            start_url: "/",
            icons: [{
                src: path.resolve("public/icons/icon-512x512.png"),
                sizes: [96, 128, 192, 256, 384, 512],
                destination: path.join("icons")
            }]
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js@/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};

module.exports = config;