/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length != t.length) return false;
    return order(s) == order(t);
};

const order = (string) => string.split("").sort().join("");
