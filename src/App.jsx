import { useState, useEffect } from "react";
import Editor from "./components/Editor";
import useLocalStorage from "./hooks/useLocalStorage";
import DownloadButton from "./components/DownloadButton";

export default function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              ${css}
            </style>
          </head>
        <body>

          ${html}

        <script>
          ${js}
        </script>

        </body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="toolbar">
        <DownloadButton
          html={html}
          css={css}
          js={js}
        />
      </div>

      <div className="pane top-pane">
        <Editor
          language="html"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />

        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />

        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>

      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="Output"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation-by-user-activation"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}