const {test, expect} = require('@playwright/test');

test('@web Client app login', async ({page})=>
{
    
    // const context =await browser.newContext();
    // const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   const email = "mahesharokade7@gmail.com";
   const products = page.locator(".card-body");
   const productName = 'ZARA COAT 3';
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Mahesh123@");
   await page.locator("#login").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);
   const count = await products.count();
   for(let i=0;i<count;++i){
        if(await products.nth(i).locator("b").textContent() === productName){
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
   }
   await page.locator("[routerlink='/dashboard/cart']").click();
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
   await page.locator("[placeholder*='Select Country']").pressSequentially("ind");
   const dropdown = await page.locator(".ta-results.list-group.ng-star-inserted");
   await dropdown.waitFor();
   const optionsCount= await dropdown.locator("button").count();
   for(let i=0; i < optionsCount;++i){
    const text = await dropdown.locator("button").nth(i).textContent();
       if( text === " India"){
         await dropdown.locator("button").nth(i).click();
         break;
       }
   }
   await expect(page.locator(".user__name.mt-5 [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit ").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderID)
   await page.locator("button[routerlink='/dashboard/myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
   for (let i=0; i<await rows.count(); ++i){
    const rowOrderid = await rows.nth(i).locator("th").textContent();
    if(orderID.includes(rowOrderid)){
        await rows.nth(i).locator("button").first().click();
        break;

    }
   }
   const orderiddetails = await page.locator(".col-text").textContent();
   expect(orderID.includes(orderiddetails))
});

