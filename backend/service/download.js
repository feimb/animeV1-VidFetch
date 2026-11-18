import { spawn } from "child_process";

function downloadVideo(url, filename) {
    const process = spawn("yt-dlp", [
        "-o",
        `downloads/${filename}.%(ext)s`,
        "--add-headers",
        "Sec-Fetch-Site: same-origin",
        "--extractor-args",
        "generic:impersonate",
        url,
    ]);

    process.stdout.on("data", (data) => {
        console.log(data.toString());
    });

    process.stderr.on("data", (data) => {
        console.log(data.toString());
    });

    process.on("close", (code) => {
        console.log(`Descarga finalizada. Código: ${code}`);
    });

    return process;
}

export { downloadVideo };
