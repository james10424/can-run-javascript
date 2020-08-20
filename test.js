const canRunJavascript = require("./can-run-javascript");
if (canRunJavascript()) {
    // your computer can run javascript
    console.log("It works!");
}
else {
    // your computer cannot run javascript
    // or your javascript installation is corrupted
    console.log("Your computer does not seem to support javascript." +
                "Please install/reinstall javascript");
}