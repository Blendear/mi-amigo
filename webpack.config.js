// \/ niezbędny pod stworzenie absolute path w "output.path"
const path = require("path");

module.exports = {
  entry: "./src/pages/_app.tsx",
  output: {
    filename: "bundled-mi-amigo.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      { test: /\.tsx$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
    ],
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
};
