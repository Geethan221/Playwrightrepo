import { test } from "@playwright/test";
test("Leaf Taps Login",async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("democsr");
    await page.locator("input[name='PASSWORD']").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    
    await page.locator('text=CRM/SFA').click();
    const pageTitle = await page.title();
    console.log("Page title is: " + pageTitle);

})