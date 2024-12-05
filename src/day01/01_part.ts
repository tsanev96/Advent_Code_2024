export async function getData() {
    const text = await Deno.readTextFile('input.txt');
    const leftSide: number[] = [];
    const rightSide: number[] = [];

    const split = text.split("\n");

    for (let i = 0; i < split.length; i++) {
        const pair = split[i].split("  ");
        const leftNumber = +pair[0];
        const rightNumber = +pair[1];

        leftSide.push(leftNumber);
        rightSide.push(rightNumber);
    }

    return {
        leftSide,
        rightSide
    }
}

function sortArray(numbers: number[]) {
    numbers.sort((a, b) => a - b);
}

function calculateColumnDifference(num1: number, num2: number) {
    return Math.abs(num1 - num2);
}

function getSumColumnDifferences(leftSide: number[], rightSide: number[]) {
    return leftSide.reduce((total, num, index) => total += calculateColumnDifference(num, rightSide[index]), 0)
}

export async function main() {
    const { leftSide, rightSide } = await getData();

    sortArray(leftSide);
    sortArray(rightSide);

    const result = getSumColumnDifferences(leftSide, rightSide)

    return result;
}


main().then(result => {
    console.log(result);
    //2970687
})
/*
3   4
4   3
2   5
1   3
3   9
3   3


*/