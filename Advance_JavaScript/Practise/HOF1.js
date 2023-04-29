function eatBreakFast(item, time, doBrush) {
    doBrush();
    console.log("I will eat", item, "as my breakfast at ", time, "a.m.");
}

eatBreakFast("maggi", 9, doBrush())

function doBrush() {
    console.log("Do the Brush");
}