// You should implement your task here.

module.exports = function towelSort(matrix) {
    let emptyArray = [];

    if (matrix === undefined) {
        return emptyArray;
    } else {
        matrix.reduce((acc, cur, i) => {
            cur.sort((a, b) => (!(i & 1) ? a - b : b - a)).map((e) =>
                acc.push(e)
            );
            return acc;
        }, []);
        return matrix.flat();
    }
};
