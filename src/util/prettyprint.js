const pjson = require('prettyjson-256');
module.exports = (msg, data={}) => {
    console.log(pjson.render({
        message: msg,
        ...data
    }));
}
