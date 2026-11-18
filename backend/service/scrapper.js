
import puppeteer from "puppeteer";

async function scrapperUrl(url) {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: true,
            defaultViewport: {
                width: 992, // Define el ancho de la ventana
                height: 1080, // Define el alto de la ventana
            },
        });
        const page = await browser.newPage();
        
        browser.on("targetcreated", async (target) => {
            if (target.type() === "page") {
                const popup = await target.page();

                if (popup && popup !== page) {
                    await popup.close().catch(() => {});
                }
            }
        });

        await page.goto(url);
        for (let i = 0; i < 3; i++) {
            await page.waitForSelector("#btn-show-9");

            await page.click("#btn-show-9");

        }
        await page.waitForSelector("iframe");
        const videoUrl = await page.evaluate(() => {
            if(!document.querySelector("iframe")) {
                return null;
            }
            const videoElement = document
                .querySelector("iframe")
                .getAttribute("src");
            return videoElement;
        });
        return videoUrl;
    } catch (error) {
        console.error('Error scraping URL:', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

export { scrapperUrl };
