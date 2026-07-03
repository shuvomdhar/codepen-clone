import JSZip from "jszip";
import { saveAs } from "file-saver";

export default function DownloadButton({ html, css, js }) {
    const handleDownload = async () => {
        const zip = new JSZip();

        zip.file("index.html", html);
        zip.file("style.css", css);
        zip.file("script.js", js);

        const content = await zip.generateAsync({
            type: "blob",
        });

        saveAs(content, "codepen-project.zip");
    };

    return (
        <button className="download-btn" onClick={handleDownload}>
            Download ZIP
        </button>
    );
}