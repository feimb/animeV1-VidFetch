import puppeteer from "puppeteer";

async function scrapperUrl(url) {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: true,
            defaultViewport: {
                width: 992,
                height: 1080,
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

        const iframeHandle = await page.$("iframe.player_conte");

        const playerFrame = await iframeHandle.contentFrame();

        await playerFrame.waitForSelector("iframe");

        const videoUrl = await playerFrame.$eval("iframe", (iframe) =>
            iframe.getAttribute("src"),
        );


        return videoUrl;

    } catch (error) {
        console.error("Error scraping URL:", error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

export { scrapperUrl };
