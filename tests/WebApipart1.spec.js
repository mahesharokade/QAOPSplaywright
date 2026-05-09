const {test,expect,request} = require('@playwright/test')
const {APIUtils}= require("../utils/APIUtils.js")
const loginPayLoad = {userEmail:"mahesharokade7@gmail.com",userPassword:"Mahesh123@"}
const orderPayload= {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]}

let response;
test.beforeAll( async ()=>
{
    const apiContext = await request.newContext();
    const apiUtils= new APIUtils(apiContext,loginPayLoad);
    response= await apiUtils.createOrder(orderPayload);
    
});
test('Client app login', async ({page})=>
{
    
    // const context =await browser.newContext();
    // const page = await context.newPage();
    
  
   const email = "mahesharokade7@gmail.com";
await page.addInitScript(value =>{
    window.localStorage.setItem('token',value);
}, response.token);
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   const products = page.locator(".card-body");
   const productName = 'ZARA COAT 3';
   await page.locator("button[routerlink='/dashboard/myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
   for (let i=0; i<await rows.count(); ++i){
    const rowOrderid = await rows.nth(i).locator("th").textContent();
    if(response.orderIdapi.includes(rowOrderid)){
        await rows.nth(i).locator("button").first().click();
        break;

    }
   }
   const orderiddetails = await page.locator(".col-text").textContent();
   await page.pause();
   
   expect(response.orderIdapi.includes(orderiddetails))
});