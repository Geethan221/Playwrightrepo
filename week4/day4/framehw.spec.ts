import { test, expect } from "@playwright/test";

test("Handle Iframes in LeafGround", async ({ page }) => {

  // Launch browser in non-headless mode (Playwright config usually handles this)
  test.setTimeout(60000);

  // Navigate
  await page.goto("https://leafground.com/frame.xhtml");

  // -------------------------------
  // 1️⃣ Interact with Click Me inside first frame
  // -------------------------------

  const frame1 = page.frameLocator("iframe[src='frame.xhtml']");
  await frame1.locator("button").click();

  // Assert text changed
  await expect(frame1.locator("#click_result")).toHaveText("Hurray! You Clicked Me.");

  // -------------------------------
  // 2️⃣ Count total frames on the page
  // -------------------------------

  const totalFrames = await page.locator("iframe").count();
  console.log("Total Frames:", totalFrames);

  // -------------------------------
  // 3️⃣ Interact with nested frames
  // -------------------------------

  const outer = page.frameLocator("iframe[src='page.xhtml']");
  const inner = outer.frameLocator("iframe");
  await inner.locator("button").click();
  await expect(inner.locator("#click_result")).toHaveText("Hurray! You Clicked Me.");
});

