import test from "@playwright/test"

test('dropdown',async({page})=>{
 await page.goto("https://www.telerik.com/contact")

 await page.selectOption('#Dropdown-1', {value: 'Invoicing/Billing'})
 await page.waitForTimeout(5000)

 await page.selectOption('#Dropdown-2',{value: 'Kendo UI'})
 await page.waitForTimeout(5000)

 await page.selectOption('#Country-1',{value: 'United States'})
 

})

