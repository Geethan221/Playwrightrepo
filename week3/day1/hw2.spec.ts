import { test } from "@playwright/test";

test("Launch Webkit",async({page})=>{
    await page.goto("https://www.flipkart.com");
    const pageTitle = await page.title();
    const pageURL = page.url();
    console.log("The page title is : "+pageTitle);
    console.log("The page URL is : "+pageURL);
    test.setTimeout(60000);
});