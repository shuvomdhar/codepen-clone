import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";

import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCompress,
    faExpand,
} from "@fortawesome/free-solid-svg-icons";

export default function Editor({
    language,
    displayName,
    value,
    onChange,
}) {
    const [open, setOpen] = useState(true);

    let extension;

    switch (language) {
        case "html":
            extension = html();
            break;

        case "css":
            extension = css();
            break;

        default:
            extension = javascript();
    }

    return (
        <div className={`editor-container ${open ? "" : "collapsed"}`}>
            <div className="editor-title">
                {displayName}

                <button
                    className="expand-collapse-btn"
                    onClick={() => setOpen(!open)}
                >
                    <FontAwesomeIcon icon={open ? faCompress : faExpand} />
                </button>
            </div>

            {open && (
                <CodeMirror
                    value={value}
                    height="100%"
                    extensions={[extension]}
                    onChange={(val) => onChange(val)}
                    className="code-mirror-wrapper"
                />
            )}
        </div>
    );
}