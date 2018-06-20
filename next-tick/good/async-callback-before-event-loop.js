console.log("H!");
setTimeout(() => console.log("Node.Js"), 0);
process.nextTick(() => console.log("Glad to working with you"));
