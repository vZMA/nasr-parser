/**
 * Return whether any of a provided array of strings are the first characters of another string
 *
 * @param {string} data - the string to examine
 * @param {array<string>} queryList - an array of strings to look for in `data`
 */
export function startsWith(data, queryList) {
    if (typeof data !== 'string') {
        return false;
    }

    return queryList.some((queryText) => {
        const characters = queryText.length;

        if (characters > data.length) {
            return false;
        }

        const dataText = data.substr(0, characters);

        return queryText === dataText;
    });
}
