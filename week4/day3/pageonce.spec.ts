import test from "@playwright/test";

test("Handle alert with Page.Once", async ({ page }) => {
    page.once('dialog', alertType => {
        const type=alertType.type()
        console.log(type)

        const message=alertType.message()
        console.log(message)
        alertType.accept()
    })



    await page.goto("https://www.leafground.com/alert.xhtml")

    await page.locator("(//span[text()='Show'])[2]").click()
    await page.waitForTimeout(3000);
    await page.locator("(//span[text()='Show'])[3]").click()
    await page.waitForTimeout(3000);

})