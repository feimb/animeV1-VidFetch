import axios from 'axios';
import * as cheerio from 'cheerio';

async function scrapperUrl(url) {
    try{
        let seguir = true;
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        const videoUrl =  $("iframe").attr("src");  
        console.log(videoUrl);


        return videoUrl;

    }catch (error) {
        // console.error('Error scraping URL:', error);
    }
}

export { scrapperUrl };
