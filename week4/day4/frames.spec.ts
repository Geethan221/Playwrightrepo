import test from "@playwright/test"

test("Handle frames", async ({page}) => {
    page.on("dialog", alertType => {

        const Type= alertType.type()
        console.log("Alert type is :" + Type)

        const msg = alertType.message()
        console.log("Alert message is :" + msg) 

        
        alertType.accept()
    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    await page.frameLocator("//iframe[@name = 'iframeResult']").locator("//button[text()='Try it']").click()
    

    })