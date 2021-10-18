export class PascalTriangle {
    /**
     * 
     * @param rows how many rows
     * @returns array containing the triangle
     */
    getTriangle(rows: number): number[][] {
        let triangle = new Array<Array<number>>();

        for (let row = 0; row < rows; row++) {
            triangle.push(new Array<number>(row));

            for (let col = 0; col <= row; col++) {
                if (col === 0 || col === row) {
                    triangle[row][col] = 1;
                } else {
                    triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
                }
            }
        }

        return triangle;
    }
}
