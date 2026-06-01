import test from "@playwright/test";
test("Test leaf", async ({ page }) => {
  await page.goto("https://login.salesforce.com/");
    await page.locator("//input[contains(@id, 'user')]").fill("vinmathiravichandran@gmail.com")
    await page.locator("//input[contains(@id, 'pass')]").fill("Vin@12345")
    await page.locator("//input[@id='Login']").click()
    await page.waitForTimeout(3000)
    await page.waitForEvent
})
