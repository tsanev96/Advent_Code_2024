import { getData } from "./01_part.ts";

function createNumberMap(numbers: number[]) {
    const map = new Map<number, number>();

    for (const num of numbers) {
        const quantity = map.get(num);
        if (quantity) {
            map.set(num, quantity + 1)
        } else {
            map.set(num, 1)
        }
    }

    return map;
}

export async function main2() {
    const { leftSide, rightSide } = await getData();

    const rightMap = createNumberMap(rightSide);

    return leftSide.reduce((total, num) => {
        const quantity = rightMap.get(num);
        total += quantity !== undefined ? num * quantity : 0;
        return total;
    }, 0);
}

main2().then(result => {
    console.log(result);
    // 23963899
});