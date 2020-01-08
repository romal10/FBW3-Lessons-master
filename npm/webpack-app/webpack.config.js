const Htmlwebpackplugin = require("html-webpack-plugin");

module.exports =  {
    module: {
        rules : [
            
            {
                test: /\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options: {minimize : true}
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude : /node-modules/,
                use : {
                    loader: "babel-loader"
                }
            },
            {
                test :/\.(png|svg|jpg|gif)/,
                use: {
                    loader : "file-loader"
                }
            }


        ]
    },
    plugins : [
        new Htmlwebpackplugin({
            template:"./src/index.html",
            filename: "./index.html"

        }),
    ]

}
