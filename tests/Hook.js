let count = 0; 
let webDriver = require("selenium-webdriver");
let By = webDriver.By;
let Key = webDriver.Key;
let utils = require("./CommonUtils")


beforeScenario(async ()=>{
  await utils.openBrowser(); 
});

afterScenario(async () => {
  
  await utils.closeBrowser(); 
  
  });
