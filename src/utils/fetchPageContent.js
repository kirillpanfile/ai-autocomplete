"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPageTextContent = void 0;
const node_fetch_1 = require("node-fetch");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
function fetchPageTextContent(url) {
    return new Promise((resolve, reject) => {
        return node_fetch_1.default(url)
            .then(rs => rs.text())
            .then(textContent => resolve({ textContent, url }))
            .catch(reject);
    });
}
exports.fetchPageTextContent = fetchPageTextContent;
