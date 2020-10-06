module.exports = function towelSort(matrix) {
    function compare(a, b) {
        return a - b;
    }

    if (!matrix) return [];

    return matrix.reduce((acc, el, i) => {
        if (el instanceof Array) {
            return i % 2 === 0
                ? [...acc, ...el.flat().sort(compare)]
                : [...acc, ...el.flat().sort(compare).reverse()];
        }
    }, []);
}
