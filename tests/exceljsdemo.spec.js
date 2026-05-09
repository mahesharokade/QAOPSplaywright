const ExcelJs = require('exceljs');
const {test,expect,request} = require('@playwright/test')

async function writeexcelTest(searchText, replaceText,change, filePath) {


    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet("Sheet1");
    const output = await readExcel(worksheet, searchText);

    const cell = worksheet.getCell(output.row, output.column+change.colchange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet, searchText) {
    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            //console.log(cell.value);

            if (cell.value === searchText) {
                console.log(rowNumber);
                console.log(colNumber);
                output.row = rowNumber;
                output.column = colNumber;


            }
        })
    })
    return output;
}
//writeexcelTest("Mango", 350,{rowchange:0,colchange:2}, "C:/work/download.xlsx");
test('test upload download excel validation',async ({page})=>
{
    const textSearch = 'Mango';
  const updateValue = '350';
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const downloadpromise= page.waitForEvent('download');
    await page.getByRole('button',{name:'Download'}).click();
    await downloadpromise;
    writeexcelTest(textSearch, updateValue,{rowchange:0,colchange:2}, "C:/Users/Mahesh/Downloads/download.xlsx");
    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles("C:/Users/Mahesh/Downloads/download.xlsx")
    const desiredRow = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
    await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue);

})