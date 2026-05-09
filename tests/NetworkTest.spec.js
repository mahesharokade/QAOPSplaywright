const { test, expect, request } = require('@playwright/test')
const { APIUtils } = require("../utils/APIUtils.js")
const loginPayLoad = { userEmail: "mahesharokade7@gmail.com", userPassword: "Mahesh123@" }
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] }
const Fakepayload = { data: [], message: "No Orders" };

let response;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayLoad);
    response = await apiUtils.createOrder(orderPayload);

});
test('@API Network test', async ({ page }) => {

    // const context =await browser.newContext();
    // const page = await context.newPage();


    const email = "mahesharokade7@gmail.com";
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            const response = await page.request.fetch(route.request());
            let body = JSON.stringify(Fakepayload);
            route.fulfill({
                response,
                body,
            })
        }
    );
    const products = page.locator(".card-body");
    const productName = 'ZARA COAT 3';
    await page.locator("button[routerlink='/dashboard/myorders']").click();

    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator(".mt-4").textContent());

});