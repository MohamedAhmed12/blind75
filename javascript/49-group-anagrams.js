/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (!strs.length) return [];

    map = new Map();

    strs.forEach(function (str) {
        const orderedStr = order(str);
        const value = map.get(orderedStr) || [];

        value.push(str);
        map.set(orderedStr, value);
    });

    return [...map.values()];
};

const order = (str) => str.split('').sort((a,b) => a.localeCompare(b)).join('');
