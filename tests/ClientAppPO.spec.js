const { test, expect } = require('@playwright/test');
const {customtest} = require('../utils/test-base')
const { POManager } = require('../pageobejcts/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/placeOrderdata.json')));

for(const data of dataset){
test(`Client app login for ${data.productName}`, async ({ page }) => {

    // const context =await browser.newContext();
    // const page = await context.newPage();
    const poManager = new POManager(page);
    // const username = "mahesharokade7@gmail.com";
    // const password = "Mahesh123@";
    // const productName = 'ZARA COAT 3';
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCartPage();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);
    await dashboardPage.navigateToOrders();
    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();


});
}
customtest('Client app login test', async ({ page,testdatafororder}) => {

    // const context =await browser.newContext();
    // const page = await context.newPage();
    const poManager = new POManager(page);
    // const username = "mahesharokade7@gmail.com";
    // const password = "Mahesh123@";
    // const productName = 'ZARA COAT 3';
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testdatafororder.username, testdatafororder.password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(testdatafororder.productName);
    await dashboardPage.navigateToCartPage();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(testdatafororder.productName);
    await cartPage.Checkout();
})


