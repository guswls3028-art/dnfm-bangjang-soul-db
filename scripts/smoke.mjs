import assert from "node:assert/strict";

import {
  BUILTIN_GUIDES,
  CLASS_GEAR_PROFILES,
  STATIC_INFO_COMMANDS,
} from "../src/domain/knowledge/knowledge-db.mjs";
import { CHAT_STATS_DATA } from "../src/domain/knowledge/chat-stats-data.mjs";

assert.ok(Array.isArray(BUILTIN_GUIDES), "BUILTIN_GUIDES must be an array");
assert.ok(BUILTIN_GUIDES.length > 0, "BUILTIN_GUIDES must not be empty");

assert.ok(STATIC_INFO_COMMANDS && typeof STATIC_INFO_COMMANDS === "object", "STATIC_INFO_COMMANDS must be an object");
assert.ok(Object.keys(STATIC_INFO_COMMANDS).length > 0, "STATIC_INFO_COMMANDS must not be empty");

assert.ok(Array.isArray(CLASS_GEAR_PROFILES), "CLASS_GEAR_PROFILES must be an array");
assert.ok(CLASS_GEAR_PROFILES.length > 0, "CLASS_GEAR_PROFILES must not be empty");

assert.ok(CHAT_STATS_DATA && typeof CHAT_STATS_DATA === "object", "CHAT_STATS_DATA must be an object");
assert.ok(Number(CHAT_STATS_DATA.totalMessages) > 0, "CHAT_STATS_DATA must include message totals");
assert.ok(Array.isArray(CHAT_STATS_DATA.senders), "CHAT_STATS_DATA must include sender rows");
