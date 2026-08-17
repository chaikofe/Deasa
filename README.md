# Study Desk

Your own flashcard app — real spaced repetition, cram mode, streaks, fully offline, no accounts, no fees. All data stays on your device.

## Put it online (GitHub Pages, ~3 minutes)

1. Go to **github.com** → click **+** (top right) → **New repository**.
2. Name it (e.g. `study-desk`), keep it **Public**, click **Create repository**.
3. On the new repo page, click **uploading an existing file**, then drag in **all the files from this folder** (`index.html`, `sw.js`, `manifest.json`, `README.md`, and the three `.png` icons). Click **Commit changes**.
4. Go to the repo's **Settings → Pages** (left sidebar). Under *Branch*, pick **main**, folder **/ (root)**, click **Save**.
5. Wait ~1 minute, refresh that page — GitHub shows your live link:
   `https://YOURUSERNAME.github.io/study-desk/`

## Install it on your iPhone

1. Open that link in **Safari** (must be Safari, not Chrome).
2. Tap the **Share** button → **Add to Home Screen** → **Add**.
3. It's now an app icon. Open it once while online — after that it works **fully offline**, airplane mode included.

Same idea on Android: open the link in Chrome → menu → **Add to Home screen**.

## Important: back up

Your decks live only in this device's browser storage. If you clear Safari's website data (or delete the app icon *and* clear storage), your cards are gone. The app reminds you, but make it a habit:

**Settings (⚙) → Download backup** — saves a `.json` file. Restore it anytime from the same screen, on any device.

## Everyday use

- **Add cards** inside a deck — normal term/definition, or fill-in-the-blank by wrapping the hidden part in `{{double braces}}`.
- **Bulk import** — paste lines like `la mesa - the table` (also accepts tab, comma, or semicolon separators).
- **New cards ask you to explain them first** — that's deliberate; explaining before drilling is what makes the drilling stick.
- **Rate honestly** (Again → Very easy). The schedule only works if the ratings are true.
- **Cram** ignores the schedule and cycles a whole deck until every card is answered right once — for the night before an exam. It doesn't touch your long-term scheduling.
- **⚡ Study all due** mixes due cards from every deck — interleaving, which beats studying one deck at a time.
- Desktop shortcuts: **space** flip · **1–5** rate · **u** undo · **enter** check typed answers.

## Updating the app later

Replace the changed files in the GitHub repo (upload again with the same names). The service worker caches aggressively, so after an update, close and reopen the app twice, or bump the `CACHE` version string in `sw.js` (e.g. `studydesk-v2`) as part of the update.
