var scrapper = require("../service/scrapper");

async function getInfo(req, res) {
    try {
        const name = req.body.url.split("/")[3];

        let seguir = true;
        const arrEpisodios = [];


        let index = 1;
        let videoUrl = await scrapper.scrapperUrl(`${req.body.url}/${index}`);
        while (seguir) {
            arrEpisodios.push({ videoUrl, index });
            index++;
            videoUrl = await scrapper.scrapperUrl(`${req.body.url}/${index}`);
            if(videoUrl === undefined){
                seguir = false;
            }
            // console.log(videoUrl);
            // console.log(seguir);
        }
        res.json({ name: name, episodios: arrEpisodios });
    } catch (error) {
        console.error("Error in getInfo:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function downloadFile(req, res) {
    res.json({ message: "Download started" });
}

module.exports = {
    getInfo,
    downloadFile,
};
