import { assertEquals } from "@std/assert";
import { main } from "./01_part.ts";
// import txt from "./input.txt";
import * as mod from "node:fs";

Deno.test("part 1, input example", async () => {
    try {
        const text = await mod.readFileSync("input.txt");

        // const data = await Deno.readFile("./input.txt");
        // const text = new TextDecoder("utf-8").decode(data);
        console.log("text", text)
    } catch (Err) {
        console.log("err", Err)
    }

    const x = 1 + 2;
    assertEquals(x, 3);
});

