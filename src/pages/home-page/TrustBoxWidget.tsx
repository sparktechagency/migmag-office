"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        Trustpilot?: {
            loadFromElement?: (el: Element | null, deferLoad?: boolean) => void;
        };
    }
}

const TrustBoxWidget = () => {
    useEffect(() => {
        // Load Trustpilot widget after render
        const el = document.getElementById("trustbox-container");
        window.Trustpilot?.loadFromElement?.(el, true);
    }, []);

    return (
        <div
            id="trustbox-container"
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="68f7a976eaa584628cf9be97"
            data-style-height="52px"
            data-style-width="100%"
            data-token="df67fcfc-3c31-401f-983d-3bdebb3ad048"
        >
            <a
                href="https://www.trustpilot.com/review/www.tunem.com"
                target="_blank"
                rel="noopener noreferrer"
                className = {`border-none`}
            >
                Trustpilot
            </a>
        </div>
    );
};

export default TrustBoxWidget;
