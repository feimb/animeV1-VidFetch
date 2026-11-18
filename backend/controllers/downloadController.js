var scrapper = require("../service/scrapper");
var { downloadVideo } = require("../service/download");
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
            if (videoUrl === undefined) {
                seguir = false;
            }
            console.log(videoUrl);
            // console.log(seguir);
        }
        res.json({ name: name, episodios: arrEpisodios });
    } catch (error) {
        console.error("Error in getInfo:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function videoFetch(req, res) {
    const { url, filename } = req.body;

    if (!url || !filename) {
        return res.status(400).json({
            error: "Falta la URL o el nombre del archivo",
        });
    }
    

    downloadVideo(url, filename);

    res.status(202).json({
        message: "Descarga iniciada",
        filename,
    });
}

module.exports = {
    getInfo,
    videoFetch,
};
