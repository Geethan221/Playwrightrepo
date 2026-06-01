import test from "@playwright/test";

test("Page Fixture",async({page})=>{
 await page.goto("https://www.google.com");
 const pageTitle = await page.title();
 console.log("The page title is : "+pageTitle);
} );