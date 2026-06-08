import test from "@playwright/test";

test("Handle Native Locators",async({page})=>{


    await page.goto("https://parabank.parasoft.com/parabank/index.htm")

    await page.getByText("Admin Page").click()
    
    await page.getByAltText("ParaBank").click()
    
    await page.getByRole("link",{name:'Forgot login info?'}).click()
})