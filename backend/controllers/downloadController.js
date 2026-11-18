

async function getInfo(req, res) {
  const url = req.body.url;
  console.log(url);
  res.json({ url: url });
}


async function downloadFile(req, res) {
    res.json({ message: 'Download started' });
}

module.exports = {
    getInfo,
    downloadFile
}