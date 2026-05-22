//Assignment a 
launchBrowser("chrome")
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
    } else {
        console.log("Chrome browser is not launched");
    }
}

//Assignment b
runTests("sanity")
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests");
            break;

        case "regression":
            console.log("Running regression tests");
            break;
        case "sanity":
            console.log("Running sanity tests");
            break;

        default:
            console.log("Unknown test type");
            break;
    }
}