# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client app login for ZARA COAT 3
- Location: tests\ClientAppPO.spec.js:7:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot" [ref=e11] [cursor=pointer]:
      - /url: http://qasummit.org/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e26]:
    - generic [ref=e27]:
      - heading "My Cart" [level=1] [ref=e28]
      - button "Continue Shopping❯" [ref=e29] [cursor=pointer]
    - list [ref=e31]:
      - listitem [ref=e32] [cursor=pointer]:
        - generic [ref=e33]:
          - generic [ref=e34]:
            - paragraph [ref=e35]: "#6960eac0c941646b7a8b3e68"
            - heading "ZARA COAT 3" [level=3] [ref=e36]
            - paragraph [ref=e37]: MRP $ 11500
            - paragraph [ref=e38]: In Stock
          - paragraph [ref=e40]: $ 11500
          - generic [ref=e41]:
            - button "Buy Now❯" [ref=e42]
            - button "❯" [ref=e43]:
              - generic [ref=e44]: 
              - text: ❯
    - list [ref=e46]:
      - listitem [ref=e47]:
        - generic [ref=e48]: Subtotal
        - generic [ref=e49]: $11500
      - listitem [ref=e50]:
        - generic [ref=e51]: Total
        - generic [ref=e52]: $11500
      - listitem [ref=e53]:
        - button "Checkout❯" [ref=e54] [cursor=pointer]
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | class CartPage
  3  | {
  4  | constructor(page)
  5  | {
  6  |     this.page = page;
  7  |     //this.cartProducts = page.locator("div li").first();
  8  |     this.productsText = page.locator(".card-body b");
  9  |     this.cart =  page.locator("[routerlink*='cart']");
  10 |     this.orders = page.locator("button[routerlink*='myorders']");
  11 |     this.checkout = page.locator("text=Checkout");
  12 | 
  13 | }
  14 | 
  15 | async VerifyProductIsDisplayed(productName)
  16 | {
  17 |    
  18 |    // await this.cartProducts.waitFor();
  19 |     const bool =await this.getProductLocator(productName).isVisible();
> 20 |     expect(bool).toBeTruthy();
     |                  ^ Error: expect(received).toBeTruthy()
  21 | 
  22 | }
  23 | 
  24 | async Checkout()
  25 | {
  26 |     await this.checkout.click();
  27 | }
  28 | 
  29 |  getProductLocator(productName)
  30 | {
  31 |     return  this.page.locator("h3:has-text('"+productName+"')");
  32 | }
  33 | 
  34 | }
  35 | module.exports = {CartPage};
```