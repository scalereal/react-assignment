const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "./src/components"),
            "@hooks": path.resolve(__dirname, "./src/hooks "),
            "@theme": path.resolve(__dirname, "./src/theme "),
        },
    },
};
