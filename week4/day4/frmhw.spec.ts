import { test, expect } from "@playwright/test";

test("Handle Iframes", async ({ page }) => {

  test.setTimeout(60000);

  await page.goto("https://leafground.com/frame.xhtml");
  //await frame1.locator("button").waitFor();

  // First frame
  const frame1 = page.frameLocator("iframe[src='frame.xhtml']");
  await frame1.locator("button").click();
  await frame1.locator("button").waitFor();

  await expect(frame1.locator("#click_result")).toHaveText("Hurray! You Clicked Me.");

  // Count frames
  //const totalFrames = await page.locator("iframe").count();
  //console.log("Total Frames:", totalFrames);

  // Nested frame
  const outer = page.frameLocator("iframe[src='page.xhtml']");
  const inner = outer.frameLocator("iframe");
  await inner.locator("button").click();
  await expect(inner.locator("#click_result")).toHaveText("Hurray! You Clicked Me.");
});
