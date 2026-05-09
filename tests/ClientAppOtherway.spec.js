const {test, expect} = require('@playwright/test');

test('@web Client app login', async ({page})=>
{
    
    // const context =await browser.newContext();
    // const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   const email = "mahesharokade7@gmail.com";
   const products = page.locator(".card-body");
   const productName = 'ZARA COAT 3';
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Mahesh123@");
   await page.getByRole('button',{name: "Login"}).click();
    
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();

   await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
   .getByRole("button",{name: "Add to Cart"}).click();
   
     await page.getByRole("listitem").getByRole('button',{name: "Cart"}).click();


   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
   
   await page.getByRole("button",{name:"Checkout"}).click();
   
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
   await page.getByRole("button",{name:"India"}).nth(1).click();
   
   
   await page.getByText("PLACE ORDER").click();
await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();


   
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

