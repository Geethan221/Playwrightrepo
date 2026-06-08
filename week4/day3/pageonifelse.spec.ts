import { test } from "@playwright/test";

test("Handle with pageon", async ({ page }) => {

   
  page.on("dialog", async (handlealert) => {
    const type = handlealert.type();
    console.log("Alert Type: " + type);

    const msg = handlealert.message();
    console.log("Alert Message: " + msg);

    if (msg === "I am simple alert.") {
      await handlealert.accept();
    } 
    else if (msg === "Did you call me?") {
      await handlealert.dismiss();
    } 
    
  });

  // Simple Alert - Accept
 // await page.locator("(//span[text()='Show'])[1]").click();
   //test.setTimeout(2000);

  // Confirm Alert - Dismiss
 // await page.locator("(//span[text()='Show'])[2]").click();
  // test.setTimeout(2000);


  // Prompt Alert - Accept with text
  //await page.locator("(//span[text()='Show'])[5]").click();
   // test.setTimeout(2000);

});
