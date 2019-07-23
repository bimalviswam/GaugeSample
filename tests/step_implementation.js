let webDriver = require("selenium-webdriver");
let By = webDriver.By;
let Key = webDriver.Key;
let driver = require("./CommonUtils"); 
step("print <message>",  async (message) => {
  await driver.navigate("https://google.com"); 
  await driver.sendKey(By.css("[name='q']"), message); 
  await driver.sendKey(By.css("[name='q']"), Key.ENTER); 
});

step("list <message>",  async (message) => {
 console.log("second scenario")
});

