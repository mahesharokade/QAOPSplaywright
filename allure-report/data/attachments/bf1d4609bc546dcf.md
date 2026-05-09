# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientApp.spec.js >> Client app login
- Location: tests\ClientApp.spec.js:3:1

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('[routerlink=\'/dashboard/cart\']')
    - locator resolved to <button tabindex="0" _ngcontent-wlc-c38="" class="btn btn-custom" routerlink="/dashboard/cart">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-wlc-c11="" class="ngx-spinner-overlay ng-tns-c11-1 ng-trigger ng-trigger-fadeIn ng-star-inserted ng-animating">…</div> from <ngx-spinner _nghost-wlc-c11="" _ngcontent-wlc-c39="" class="ng-tns-c11-1 ng-star-inserted">…</ngx-spinner> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-wlc-c11="" class="ngx-spinner-overlay ng-tns-c11-1 ng-trigger ng-trigger-fadeIn ng-star-inserted ng-animating">…</div> from <ngx-spinner _nghost-wlc-c11="" _ngcontent-wlc-c39="" class="ng-tns-c11-1 ng-star-inserted">…</ngx-spinner> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-wlc-c11="" class="ngx-spinner-overlay ng-tns-c11-1 ng-trigger ng-trigger-fadeIn ng-star-inserted">…</div> from <ngx-spinner _nghost-wlc-c11="" _ngcontent-wlc-c39="" class="ng-tns-c11-1 ng-star-inserted">…</ngx-spinner> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <nav _ngcontent-wlc-c38="">…</nav> intercepts pointer events
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
    - text:    
    - generic [ref=e26]:
      - paragraph [ref=e27]: Home | Search
      - heading "Filters" [level=4] [ref=e29]
      - generic [ref=e30]:
        - textbox "search" [ref=e32]
        - generic [ref=e33]:
          - heading "Price Range" [level=6] [ref=e34]
          - generic [ref=e35]:
            - textbox "Min Price" [ref=e37]
            - textbox "Max Price" [ref=e39]
        - generic [ref=e40]:
          - heading "Categories" [level=6] [ref=e41]
          - generic [ref=e43]: 
          - generic [ref=e44]:
            - checkbox [ref=e45]
            - generic [ref=e46]: fashion
          - generic [ref=e47]:
            - checkbox [ref=e48]
            - generic [ref=e49]: electronics
          - generic [ref=e50]:
            - checkbox [ref=e51]
            - generic [ref=e52]: household
        - generic [ref=e53]:
          - heading "Sub Categories" [level=6] [ref=e54]
          - generic [ref=e56]: 
          - generic [ref=e57]:
            - checkbox [ref=e58]
            - generic [ref=e59]: t-shirts
          - generic [ref=e60]:
            - checkbox [ref=e61]
            - generic [ref=e62]: shirts
          - generic [ref=e63]:
            - checkbox [ref=e64]
            - generic [ref=e65]: shoes
          - generic [ref=e66]:
            - checkbox [ref=e67]
            - generic [ref=e68]: mobiles
          - generic [ref=e69]:
            - checkbox [ref=e70]
            - generic [ref=e71]: laptops
        - generic [ref=e72]:
          - heading "Search For" [level=6] [ref=e73]
          - generic [ref=e75]: 
          - generic [ref=e76]:
            - checkbox [ref=e77]
            - generic [ref=e78]: men
          - generic [ref=e79]:
            - checkbox [ref=e80]
            - generic [ref=e81]: women
    - generic [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]:
          - generic [ref=e85]: Showing 3 results |
          - generic [ref=e86]: User can only see maximum 9 products on a page
        - generic [ref=e87]:
          - generic [ref=e89]:
            - img [ref=e90]
            - generic [ref=e91]:
              - heading "ADIDAS ORIGINAL" [level=5] [ref=e92]
              - generic [ref=e94]: $ 11500
              - button "View" [ref=e95] [cursor=pointer]:
                - generic [ref=e96]: 
                - text: View
              - button " Add To Cart" [ref=e97] [cursor=pointer]:
                - generic [ref=e98]: 
                - text: Add To Cart
          - generic [ref=e100]:
            - img [ref=e101]
            - generic [ref=e102]:
              - heading "ZARA COAT 3" [level=5] [ref=e103]
              - generic [ref=e105]: $ 11500
              - button "View" [ref=e106] [cursor=pointer]:
                - generic [ref=e107]: 
                - text: View
              - button " Add To Cart" [active] [ref=e108] [cursor=pointer]:
                - generic [ref=e109]: 
                - text: Add To Cart
          - generic [ref=e111]:
            - img [ref=e112]
            - generic [ref=e113]:
              - heading "iphone 13 pro" [level=5] [ref=e114]
              - generic [ref=e116]: $ 55000
              - button "View" [ref=e117] [cursor=pointer]:
                - generic [ref=e118]: 
                - text: View
              - button " Add To Cart" [ref=e119] [cursor=pointer]:
                - generic [ref=e120]: 
                - text: Add To Cart
      - list "Pagination" [ref=e125]:
        - listitem [ref=e126]:
          - text: «
          - generic [ref=e127]:
            - text: Previous
            - generic [ref=e128]: page
        - listitem [ref=e129]:
          - generic [ref=e130]: You're on page
          - text: "1"
        - listitem [ref=e131]:
          - generic [ref=e132]:
            - text: Next
            - generic [ref=e133]: page
          - text: »
    - generic [ref=e134]: Design and Developed By - Kunal Sharma
  - alert "Product Added To Cart" [ref=e136]
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | 
  3  | test('Client app login', async ({page})=>
  4  | {
  5  |     
  6  |     // const context =await browser.newContext();
  7  |     // const page = await context.newPage();
  8  |    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  9  |    const email = "mahesharokade7@gmail.com";
  10 |    const products = page.locator(".card-body");
  11 |    const productName = 'ZARA COAT 3';
  12 |    await page.locator("#userEmail").fill(email);
  13 |    await page.locator("#userPassword").fill("Mahesh123@");
  14 |    await page.locator("#login").click();
  15 |    await page.waitForLoadState('networkidle');
  16 |    await page.locator(".card-body b").first().waitFor();
  17 |    const titles = await page.locator(".card-body b").allTextContents();
  18 |    console.log(titles);
  19 |    const count = await products.count();
  20 |    for(let i=0;i<count;++i){
  21 |         if(await products.nth(i).locator("b").textContent() === productName){
  22 |             await products.nth(i).locator("text= Add To Cart").click();
  23 |             break;
  24 |         }
  25 |    }
> 26 |    await page.locator("[routerlink='/dashboard/cart']").click();
     |                                                         ^ Error: locator.click: Test timeout of 40000ms exceeded.
  27 |    await page.locator("div li").first().waitFor();
  28 |    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  29 |    expect(bool).toBeTruthy();
  30 |    await page.locator("text=Checkout").click();
  31 |    await page.locator("[placeholder*='Select Country']").pressSequentially("ind");
  32 |    const dropdown = await page.locator(".ta-results.list-group.ng-star-inserted");
  33 |    await dropdown.waitFor();
  34 |    const optionsCount= await dropdown.locator("button").count();
  35 |    for(let i=0; i < optionsCount;++i){
  36 |     const text = await dropdown.locator("button").nth(i).textContent();
  37 |        if( text === " India"){
  38 |          await dropdown.locator("button").nth(i).click();
  39 |          break;
  40 |        }
  41 |    }
  42 |    await expect(page.locator(".user__name.mt-5 [type='text']").first()).toHaveText(email);
  43 |    await page.locator(".action__submit ").click();
  44 |    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  45 |    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  46 |    console.log(orderID)
  47 |    await page.locator("button[routerlink='/dashboard/myorders']").click();
  48 |    await page.locator("tbody").waitFor();
  49 |    const rows = await page.locator("tbody tr");
  50 |    for (let i=0; i<await rows.count(); ++i){
  51 |     const rowOrderid = await rows.nth(i).locator("th").textContent();
  52 |     if(orderID.includes(rowOrderid)){
  53 |         await rows.nth(i).locator("button").first().click();
  54 |         break;
  55 | 
  56 |     }
  57 |    }
  58 |    const orderiddetails = await page.locator(".col-text").textContent();
  59 |    expect(orderID.includes(orderiddetails))
  60 | });
  61 | 
  62 | 
```