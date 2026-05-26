# DNFM Bangjang Soul DB

방장의 영혼 카카오봇에서 쓰는 지식 DB 분리 저장소입니다.

## Contents

- `src/domain/knowledge/knowledge-db.mjs` - static knowledge commands, guide links, class gear profiles, aliases, and reply data.
- `src/domain/knowledge/chat-stats-data.mjs` - runtime loader for the generated chat statistics JSON.
- `knowledge/chat-stats-data.json` - generated KakaoTalk chat statistics data.

## Usage

```js
import {
  BUILTIN_GUIDES,
  CLASS_GEAR_PROFILES,
  STATIC_INFO_COMMANDS,
} from "./src/domain/knowledge/knowledge-db.mjs";
```

Run a quick import check:

```powershell
npm test
```

This repository is a delivery snapshot for developers. Do not hand-edit generated chat stats JSON; regenerate it from the source export when chat statistics need to change.
