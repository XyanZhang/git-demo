const crypto = require('crypto');

function hash(content) {
    const sha1 = crypto.createHash('sha1');
    sha1.update(content);
    return sha1.digest('hex');
}

console.log(hash('blob 3\0hashcontent'))