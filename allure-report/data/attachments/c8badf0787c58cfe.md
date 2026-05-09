# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client app login for ZARA COAT 3
- Location: tests\ClientAppPO.spec.js:7:1

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.type: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - button " Cart" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22] [cursor=pointer]:
          - button "Sign Out" [ref=e23]:
            - generic [ref=e24]: 
            - text: Sign Out
    - generic [ref=e31]:
      - generic [ref=e32]: Payment Method
      - generic [ref=e33]:
        - generic [ref=e34] [cursor=pointer]: Credit Card
        - generic [ref=e35] [cursor=pointer]: Paypal
        - generic [ref=e36] [cursor=pointer]: SEPA
        - generic [ref=e37] [cursor=pointer]: Invoice
      - generic [ref=e38]:
        - generic [ref=e39]:
          - generic [ref=e40]: Personal Information
          - generic [ref=e42]:
            - generic [ref=e44]:
              - generic [ref=e45]: Credit Card Number
              - textbox [ref=e46]: 4542 9931 9292 2293
            - generic [ref=e47]:
              - generic [ref=e48]:
                - generic [ref=e49]: Expiry Date
                - combobox [ref=e50]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e51]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e52]:
                - generic [ref=e53]: CVV Code ?
                - textbox [ref=e54]
            - generic [ref=e56]:
              - generic [ref=e57]: Name on Card
              - textbox [ref=e58]
            - generic [ref=e59]:
              - generic [ref=e60]:
                - generic [ref=e61]: Apply Coupon
                - textbox [ref=e62]
              - button "Apply Coupon" [ref=e65] [cursor=pointer]
        - generic [ref=e66]:
          - generic [ref=e67]: Shipping Information
          - generic [ref=e69]:
            - generic [ref=e70]: mahesharokade7@gmail.com
            - textbox [ref=e71]: mahesharokade7@gmail.com
            - textbox "Select Country" [ref=e74]
  - alert "Product Added To Cart" [ref=e77]
```

# Test source

```ts
  1  | const { expect } = require("@playwright/test");
  2  | 
  3  | class OrdersReviewPage
  4  | {
  5  | constructor(page)
  6  | {
  7  |     this.page = page;
  8  | this.country = page.locator("[placeholder*='Country']");
  9  | this.dropdown = page.locator(".ta-results");
  10 | this.emailId = page.locator(".user__name [type='text']").first();
  11 | this.submit =  page.locator(".action__submit");
  12 | this.orderConfirmationText = page.locator(".hero-primary");
  13 | this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
  14 | 
  15 | }
  16 | async searchCountryAndSelect(countryCode,countryName)
  17 | {
  18 | 
> 19 |     await this.country.type(countryCode,{delay:100});
     |                        ^ Error: locator.type: Target page, context or browser has been closed
  20 |     await this.dropdown.waitFor();
  21 |     const optionsCount = await this.dropdown.locator("button").count();
  22 |     for(let i =0;i< optionsCount; ++i)
  23 |     {
  24 |       const  text =  await this.dropdown.locator("button").nth(i).textContent();
  25 |         if(text.trim() === countryName)
  26 |         {
  27 |            await this.dropdown.locator("button").nth(i).click();
  28 |            break;
  29 |         }
  30 |     }
  31 | 
  32 | }
  33 | 
  34 | async VerifyEmailId(username)
  35 | {
  36 |     await expect(this.emailId).toHaveText(username);
  37 | }
  38 | 
  39 | async SubmitAndGetOrderId()
  40 | {
  41 |  await this.submit.click();
  42 |  await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
  43 |  return await this.orderId.textContent();
  44 | }
  45 | }
  46 | module.exports = {OrdersReviewPage};
  47 |    
```