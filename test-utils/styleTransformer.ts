const path = require('path');

module.exports = {
    process(src: unknown, filename: string) {
        return `module.exports = ${JSON.stringify(path.basename(filename))};`;
    }
};
