const {test, expect} = require('@playwright/test');

test('First Playwright test', async ({browser})=>
{
    
    const context =await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("input#username");
    const signIn = page.locator("[id='signInBtn']");
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill("Rahulshetty");
    await page.locator("[id='password']").fill("Learning@830$3mK2");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.nth(1).textContent());
    console.log(await cardTitles.first().textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});


test('page Playwright test', async ({page})=>
    {
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("input#username");
    const signIn = page.locator("[id='signInBtn']");
    const cardTitles = page.locator(".card-body a");
    const dropdown =  page.locator("select.form-control");
    const documentsLink = page.locator("[href*='documents']");
    await dropdown.selectOption("consult");
   
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    console.log(await page.locator(".radiotextsty").last().isChecked());
   // await page.pause();
   await page.locator("#terms").click();
   await expect(page.locator("#terms")).toBeChecked();
   await page.locator("#terms").uncheck();
   expect(await page.locator("#terms").isChecked()).toBeFalsy();
    
   await expect(documentsLink).toHaveAttribute("class","blinkingText");
});
test('child windows handling', async ({browser})=>
{
    const context =await browser.newContext();
    const page = await context.newPage();
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     const userName = page.locator("input#username");
     const documentsLink = page.locator("[href*='documents']");
   const [newPage] = await Promise.all(
     [context.waitForEvent('page'),
     documentsLink.click(),])
      const text = await newPage.locator('.red').textContent();
     const arrayText =  text.split("@");
     const domain = arrayText[1].split(" ")[0];
     // console.log(domain);
      userName.type(domain);
     // await page.pause();
     console.log( await userName.inputValue());

     

});
