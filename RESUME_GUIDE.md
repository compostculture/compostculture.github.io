# Compost Science Lab — GitHub Push Resume Guide

## Status: PAUSED (Oct 14, ~5:30 PM EDT)

### ✅ Already pushed to GitHub master branch:
- `articles/01-introduction-to-compost-culture.html` (9.4 KB, 118 lines)
- `articles/02-microbial-succession-in-composting.html` (10.6 KB, 135 lines)

### ✅ Just committed by user:
- `index.html` — landing page scaffold (confirmed via snapshot after manual commit click)

### ⏳ Still need to push:
- `README.md`
- `PROJECT_PLAN.md`
- `articles/template.html`
- `src/styles/layout.css`
- `src/styles/theme.css`

---

## What Worked (BrowserOS Neo "Create new file" flow):
1. Navigate to `/compostculture/compost-science-lab/new/master/<filename>`
2. Click "Create new..." button → CodeMirror editor opens
3. Fill **File name** field with exact filename (e.g., `index.html`) — this enables the Commit button
4. Click Edit mode button (ref=e48) to switch from Preview to Edit
5. Fill textarea ref=e64 with full HTML content via `act(fill)` or `fill_input`
6. Click "Commit changes..." button → modal dialog appears → click "Commit" in modal

## What Failed:
- **REST API push** (`fetch()` from page context): Always returns `"r is not defined"` — session cookies are HttpOnly, so GitHub's auth fails for REST calls made from the browser tab.
- **Git CLI push**: Fails with `fatal: could not read Password` because remote URL has no valid credentials (SSH key belongs to different account).
- **Upload path** (`/upload/master`): "Choose your files" opens native OS file picker — non-automatable.

## Key Refs for Page 5 (GitHub tab):
- e44 = File name field
- e47 = Commit changes... button (enabled when filename is filled)
- e64 = Editable textarea (CodeMirror editor surface)
- e48 = Edit mode toggle button
- e9 = "Create new..." button

## Local file paths:
All files in `/mnt/h/Hermes/compost-science-lab/` — working tree is clean (all committed locally).

---

## To resume tomorrow:
1. Open BrowserOS Neo tab 5 (GitHub repo)
2. Navigate to each remaining file's edit URL: `https://github.com/compostculture/compost-science-lab/new/master/<filename>`
3. Click "Create new..." → fill File name → Edit mode → fill textarea → Commit changes...
4. Repeat for README.md, PROJECT_PLAN.md, articles/template.html, src/styles/layout.css, src/styles/theme.css
