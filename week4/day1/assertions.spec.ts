import test, { expect } from "@playwright/test";


test("Auto Retry Assertions",async({page})=>{

    await page.goto("https://www.leafground.com/input.xhtml")

    const enable= page.locator("//input[@placeholder='Babu Manickam']")
    //Hard asset -> if condition is failed ,it will not go to next line of code
    //await expect(enable).toBeDisabled({timeout:10000})

    //soft asset-> if condition is failed ,it will go to next line of code
    await expect.soft(enable).toBeDisabled()
    console.log("After Assertion")

})

test.only("Non Retry assertion",async({page})=>{

        await page.goto("https://www.leafground.com/input.xhtml")
        const title=await page.title()
        console.log(title)
        
         expect.soft(title).toBe("Input components")

        console.log("After Assertion")

})