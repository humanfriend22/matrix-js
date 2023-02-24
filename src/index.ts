export type Matrix<T> = T[][];

/**
 * Generates a new matrix from an array with a specified divisor
 * @param array An array of anything
 * @param divisor This will determine how many uniform rows will be made for the matrix & what is left over
 * @returns boolean
 * @example
 * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * 
 * const matrix = generateMatrix(array, 4);
 * 
 * console.log(matrix);
 * // [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]] 
 */
export const generateMatrix = <T>(array: T[], divisor: number): Matrix<T> => {
    if (array.length < divisor) {
        return array.length === 0 ? [] : [array];
    };

    let final: T[][] = [],
        temp: T[] = [];

    for (let i = 0; i < array.length; i++) {
        temp.push(array[i]);

        // Check if 'i' is a multiple of 'divisor'
        if ((i + 1) % divisor === 0) {
            final.push(temp);
            temp = [];
        };
    };

    // Handling for remainders
    if (temp.length !== 0) final.push(temp);

    return final;
};

/**
 * Checks if a given array is a perfect matrix which would mean every single element must be an array of equal length. (No remainder)
 * @param array An possible matrix
 * @returns boolean
 * @example
 * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * 
 * const matrix = generateMatrix(array, 4);
 * 
 * console.log(isPerfectMatrix(matrix));
 * // false
 * 
 * @example
 * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * 
 * const matrix = generateMatrix(array, 5);
 * 
 * console.log(isPerfectMatrix(matrix));
 * // true
 * 
 */
export const isPerfectMatrix = (array: any[]): boolean => {
    if (!Array.isArray(array)) return false;

    const lengths = new Set(array.map(array => array.length));
    return lengths.size === 1;
};

/**
 * 
 * @param array 
 * @returns 
 */
export const isMatrix = (array: any[]): boolean => {
    if (!Array.isArray(array)) return false;

    const local = [...array];

    if (array[0].length !== array[array.length - 1].length) local.pop();

    return isPerfectMatrix(local);
};

export const retrieveNthChildren = <T>(matrix: Matrix<T>, n: number) => {
    let children = [];
    for (const row of matrix) children.push(row[n]);
    return children;
};