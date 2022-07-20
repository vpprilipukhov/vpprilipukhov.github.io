export const start = (array: string[][], startOne: {y: number ,x: number }) : { y: number, x: number } => {


    let randRow, randColumn
    while (true) {
        randRow = Math.floor(Math.random() * (array.length));
        randColumn = Math.floor(Math.random() * (array[0].length));
        if (array[randRow][randColumn] === '1') {
            if (randRow !== startOne.y && randColumn !== startOne.x )
                return {y: randRow, x: randColumn}
        }
    }

}