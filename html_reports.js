const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
reportPath: "./reports/cucumber-htmlreport.html",
screenshot: true,
metadata: {
browser: {
name: "chrome",
version: "96",
},
device: "Local test machine",
platform: {
name: "windows",
version: "new",
},
},
});