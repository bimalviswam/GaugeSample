let webDriver = require("selenium-webdriver");



module.exports =  {
 async openBrowser() {
    this.driver = await  new webDriver.Builder().forBrowser("chrome").build();
    return this.driver; 
 }, 
 async navigate(url){
    await this.driver.get(url); 
 },
 async closeBrowser()
 {
   await this.driver.quit(); 
 },
 async findElement(elementBy){
    let eleme= await this.driver.findElement(elementBy); 
    return eleme; 
 } , 
 async sendKey (elementBY , keys){
     element = await this.findElement(elementBY); 
    await element.sendKeys(keys); 
 }, 
 async clickOnelement(elementBY){
     element = await this.findElement(elementBY); 
    await element.click()
 }
}