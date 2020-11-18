function solution(K, A) {
    let gridLine = 0;
    let occupiedPlots = [];
    let emptyPlots = [];

    // What is the formula?
    let numberOfPlots = A.length * A[0].length;

    A.forEach((array) => {
        gridLine++;

        for (let i = 0; i < array.length; i++) {
            if (array[i] === 1) {
                // Get the plot points of the plots with houses on them
                occupiedPlots[i] = [gridLine, i + 1];
            } else {
                console.log(array[i]);
                emptyPlots[i] = [gridLine, i + 1];
            }
        }
    });

    // Filter out empty elements due to massive time constraints!
    let o = occupiedPlots.filter(Boolean);

    // So sorry about this
    return emptyPlots.length;

}

solution(1, [[0, 1], [0, 0]]);