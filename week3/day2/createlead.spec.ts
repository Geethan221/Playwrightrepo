import { test, expect } from '@playwright/test';

test("Create Lead in Leaftaps", async ({ page }) => {

  await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("democsr");
    await page.locator("input[name='PASSWORD']").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();

  // 5. Click CRM/SFA
      await page.locator('text=CRM/SFA').click();


  // 6. Click Leads
  await page.locator('a:has-text("Leads")').click();

  // 7. Click Create Lead
  await page.locator('a:has-text("Create Lead")').click();

  // 8. Fill Company Name
  await page.locator('#createLeadForm_companyName').fill('Automation Company');

  // 9. Fill First Name
  await page.locator('#createLeadForm_firstName').fill('Vinmathi');

  // 10. Fill Last Name
  await page.locator('#createLeadForm_lastName').fill('Selvamani');

  // 11. Fill Salutation
  await page.locator('#createLeadForm_personalTitle').fill('Ms.');

  // 12. Fill Title
  await page.locator('#createLeadForm_generalProfTitle').fill('QA Engineer');

  // 13. Fill Annual Revenue
  await page.locator('#createLeadForm_annualRevenue').fill('900000');

  // 14. Fill Department
  await page.locator('#createLeadForm_departmentName').fill('Quality Assurance');

  // 15. Fill Phone Number
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('9840012345');

  // 16. Click Create Lead button
  await page.click('.smallSubmit');
 await page.waitForTimeout(3000);
  // Verification: Check Lead name appears on the result page
  const firstName = await page.textContent('#viewLead_firstName_sp');
  const lastName = await page.textContent('#viewLead_lastName_sp');

  
});