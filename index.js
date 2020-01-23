const pw = require("playwright");

main("https://monitor.firefox.com/breaches");

async function main(url, engines = ["chromium", "firefox"]) {
  console.log(`Checking ${url}`);
  for (let engine of engines) {
    const browser = await pw[engine].launch();
    const context = await browser.newContext({
      viewport: { width: 1280, height: 1024 }
    });
    const filename = `example-${engine}.png`;
    const page = await context.newPage();
    await page.goto(url);
    console.log(`Writing ${filename}`);
    await page.screenshot({ path: filename, fullPage: true });
    await browser.close();
  }
}
