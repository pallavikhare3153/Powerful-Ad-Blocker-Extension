// Background script to manage ad blocking
const adBlockRules = [
    { urlPattern: "*://*.doubleclick.net/*" },
    { urlPattern: "*://*.googlesyndication.com/*" },
    { urlPattern: "*://*.adservices.google.com/*" },
    { urlPattern: "*://*.ads.yahoo.com/*" },
];

chrome.declarativeNetRequest.onBeforeRequest.addListener(
    (details) => {
        return { cancel: true };
    },
    { urls: adBlockRules.map(rule => rule.urlPattern) },
    ["blocking"]
);
