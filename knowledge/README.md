# Kakao Bot Knowledge Assets

This directory stores generated knowledge data that is required at runtime but should not live inside `src`.

- `chat-stats-data.json` is generated from a KakaoTalk export by `npm run generate-chat-stats -- <export.txt>`.
- `src/domain/knowledge/chat-stats-data.mjs` is intentionally only a loader.
- Do not hand-edit generated JSON. Regenerate it from the source export when the chat statistics need to change.
