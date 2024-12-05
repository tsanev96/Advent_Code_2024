type LevelReport = "increasing" | "decreasing" | "none";

export async function getData() {
    const text = await Deno.readTextFile('input.txt');
    const split = text.split("\n");
    return split.reduce<number[][]>((res, row) => {
        const result = row.split(" ").map(num => +num);
        res.push(result);
        return res;
    }, []);
}

function isValidDifferenceNumbers(num1: number, num2: number) {
    const diff = Math.abs(num1 - num2);
    return diff <= 3 && diff !== 0;
}


function getLevelReport(num1: number, num2: number): LevelReport {
    if (num1 === num2) {
        return "none"
    }

    return num1 > num2 ? "decreasing" : "increasing";
}

export async function main() {
    const numbers = await getData();

    let result = 0;
    for (const row of numbers) {
        const levelReport = getLevelReport(row[0], row[row.length - 1]);

        for (let i = 0; i < row.length - 1; i++) {
            const prevNumber = row[i];
            const nextNum = row[i + 1];
            const validDiff = isValidDifferenceNumbers(prevNumber, nextNum);

            const decreasing = levelReport === "decreasing" && prevNumber > nextNum && validDiff;
            const increasing = levelReport === "increasing" && prevNumber < nextNum && validDiff;

            const isLastIteration = row.length === i + 2;
            const directionMismatch = !(decreasing || increasing);
            if (directionMismatch) {
                break
            } else if (isLastIteration) {
                result += 1;
            }
        }
    }

    console.log(result)
    return result; // 369
}

main();