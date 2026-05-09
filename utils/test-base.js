const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
    testdatafororder: {
        username:"mahesharokade7@gmail.com",
    password:"Mahesh123@",
    productName:"ZARA COAT 3"
    }
}
)