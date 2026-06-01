import test,{chromium,firefox,webkit} from"@playwright/test";
test("LaunchBrowser",async()=>
{

//To Launch the browser

const browser=await firefox.launch({headless:false})

//to open the window
const context=await browser.newContext()

//to open the page
const page=await context.newPage()

await page.goto("https://www.facebook.com")

const pageTitle=await page.title();
console.log("The page title is : "+pageTitle)
}
)
