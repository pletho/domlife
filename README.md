# 🌐 DOMLife.js  
**React/Vue 없이도 브라우저 상태·화면·서버 이벤트를 제어하는 초경량 JS 라이브러리**

> made by [Pletho](https://github.com/pletho) | License: MIT  
> Version: 0.2.0 (Korean Edition)

---

## 🧩 DOMLife는?

> “브라우저의 생명주기를 제어하고, DOM을 살아있게 만든다.”

DOMLife는 **단일 HTML 문서**에서도  
브라우저 상태 변화, 서버 이벤트(SSE), 화면 3×3 레이아웃을  
모두 JavaScript로 제어할 수 있게 해주는 작은 코어입니다.

---

## 🚀 빠르게 써보기

```html
<script type="module">
  import { DOMLifeCore } from "https://cdn.jsdelivr.net/gh/pletho/domlife@main/dist/domlife.esm.js";

  const core = new DOMLifeCore()
    .region("mid-center", "#view");

  // 상태 변화 로그
  window.addEventListener("dl:state:enter", e => console.log("→", e.detail.next));

  // 서버 요청
  core.request.run({
    regionId: "mid-center",
    path: "./src/gnu/domlife.ajax.php?action=query",
    body: { ping: "pong" },
    render: (res, regions) => {
      regions.render("mid-center", `<pre>${JSON.stringify(res, null, 2)}</pre>`);
    },
  });
</script>

<div id="view">콘텐츠가 여기에 표시됩니다</div>
```

> 💡 서버 샘플은 `/src/gnu/domlife.ajax.php` 와 `/src/gnu/domlife.stream.php` 포함되어 있습니다.  
> 로컬 PHP 서버에서 바로 작동합니다.

---

## 🧠 DOMLife가 하는 일

| 기능 | 설명 |
|------|------|
| 🌀 **상태머신** | 브라우저의 12단계 상태(Event→Render→Done)를 추적 |
| 🔁 **SSE 스트림** | 서버로부터 실시간 진행률/패치 이벤트 수신 |
| 🧱 **3×3 Region 관리** | 화면을 상·중·하 / 좌·중·우 단위로 분리 제어 |
| 🪄 **SEO 업데이트** | title/meta/json-ld를 JS로 갱신 |
| ⚙️ **GnuBoard 연동** | 관리자모드 CRUD + 상태 이벤트 주입 지원 |

---

## 📁 폴더 구조

```
domlife/
├─ src/        # 코어 JS + PHP 어댑터
├─ samples/    # 실행 가능한 예시 10개
├─ docs/       # 상세 문서
├─ dist/       # 번들 결과 (esm, iife)
└─ README.md   # 이 문서
```

---

## 🔧 빌드 (선택사항)

```bash
npm install
npm run build
```

빌드 결과는 `/dist/domlife.esm.js` 로 생성됩니다.

---

## 💬 주요 샘플

| 샘플 | 설명 |
|------|------|
| `sample1-basic-lifecycle.html` | 전체 상태 흐름 보기 |
| `sample2-sse-stream.html` | 서버 진행률 표시 (SSE) |
| `sample3-region-3x3.html` | 3×3 레이아웃 제어 |
| `sample4-seo-update.html` | SEO 동적 갱신 |
| `sample5-gnu-admin.html` | GnuBoard 연동 테스트 |

> `/samples/advanced/` 폴더에는 Tailwind, Dashboard, Virtual DOM 예시도 포함되어 있습니다.

---

## 📜 License
[MIT](./LICENSE) © 2025 Pletho

---

### ❤️ Support & Star
> DOMLife가 도움이 되셨다면 ⭐️ Star 부탁드려요!  
> [https://github.com/pletho/domlife](https://github.com/pletho/domlife)
