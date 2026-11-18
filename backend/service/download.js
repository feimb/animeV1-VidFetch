import { spawn } from "child_process";

function downloadVideo(url, filename) {
    const args = ["-v", "-o", `downloads/${filename}.%(ext)s`, url];
    const process = spawn("yt-dlp", args);

    
    console.log("URL:", url);
    console.log("ARGS:", args);
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
