"use strict";
function test(holder, input) {
    if (typeof holder === "number") {
        console.log("holder is a number");
    }
    return holder + input;
}
test("test", "inp");
