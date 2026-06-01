import { test, expect } from '@playwright/test';

test('Create Lead in Salesforce', async ({ page }) => {

  // 1. Login
  await page.goto('https://login.salesforce.com');
  await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("[name='pw']").fill("TestLeaf@2025");
   await page.locator("input[name='Login']").click();  
   
// 2.Toggle menu
   await page.locator("//div[@class='slds-icon-waffle']").click();

// 3. View All → Sales App Launcher
 await page.locator("//button[@class='slds-button']").click();
 await page.locator("//p[text()='Sales']").click();
  await page.waitForTimeout(3000);
  
// 4. Leads tab
 await page.locator("a[title='Leads']").click();    
 

  // 5. New Lead
  await page.locator("//div[text()='New']").click();


// 6. Salutation
  //await page.click('//button[@name="salutation"]');
  await page.getByRole('combobox', { name: 'Salutation' }).click();
  await page.click('//span[text()="Ms."]');

  // 7. Last Name
  await page.fill('//input[@name="lastName"]', 'Selvamani');

  // 8. Company
  await page.fill('//input[@name="Company"]', 'Automation company');

  // 9. Save
  await page.click('//button[@name="SaveEdit"]');

});
