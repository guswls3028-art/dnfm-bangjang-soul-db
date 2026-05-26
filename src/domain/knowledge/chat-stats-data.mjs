import fs from "node:fs";

const dataUrl = new URL("../../../knowledge/chat-stats-data.json", import.meta.url);

export const CHAT_STATS_DATA = JSON.parse(fs.readFileSync(dataUrl, "utf8"));
