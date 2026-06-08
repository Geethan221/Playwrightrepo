import test from "@playwright/test";

test ("Auto Dismiss alert", async ({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml")

    await page.locator("(//span[text()='Show'])[4]").click()


})