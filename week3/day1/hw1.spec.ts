import { test } from "@playwright/test";

test("Launch Edge",async({page})=>{
    await page.goto("https://www.redbus.in");
    const pageTitle = await page.title();
    const pageURL = page.url();
    console.log("The page title is : "+pageTitle);
    console.log("The page URL is : "+pageURL);
    test.setTimeout(60000);
});