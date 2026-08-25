# Deasa

Your own flashcard app - real spaced repetition, cram mode, streaks, fully offline, no accounts, no fees. All data stays on your device.

## Put it online (GitHub Pages, ~3 minutes)

1. Go to **github.com** → click **+** (top right) → **New repository**.
2. Name it (e.g. `deasa`), keep it **Public**, click **Create repository**.
3. On the new repo page, click **uploading an existing file**, then drag in **all the files from this folder** (`index.html`, `sw.js`, `manifest.json`, `README.md`, and the three `.png` icons). Click **Commit changes**.
4. Go to the repo's **Settings → Pages** (left sidebar). Under *Branch*, pick **main**, folder **/ (root)**, click **Save**.
5. Wait ~1 minute, refresh that page - GitHub shows your live link:
   `https://YOURUSERNAME.github.io/deasa/`

### Already have it deployed under the old name?

Just re-upload these files over the existing ones (same repo, same filenames - GitHub will ask to replace them). Two things won't update automatically:
- **The home screen icon's label** - iOS sets that at the moment you add it, so delete the old home screen icon and re-add it (Safari → open the link → Share → Add to Home Screen) to see "Deasa" on the icon.
- **The cached app version on your phone** - this update already bumped the internal cache version for you, so opening the app once while online will pull the new version automatically. If it still looks old, fully close the app (swipe away in the app switcher) and reopen it.

Your saved decks and progress are untouched by any of this - they live separately from the app code.

## Install it on your iPhone

1. Open that link in **Safari** (must be Safari, not Chrome).
2. Tap the **Share** button → **Add to Home Screen** → **Add**.
3. It's now an app icon. Open it once while online - after that it works **fully offline**, airplane mode included.

Same idea on Android: open the link in Chrome → menu → **Add to Home screen**.

## Important: back up

Your decks live only in this device's browser storage. If you clear Safari's website data (or delete the app icon *and* clear storage), your cards are gone. The app reminds you, but make it a habit:

**Settings (⚙) → Download backup** - saves a `.json` file. Restore it anytime from the same screen, on any device.

## Everyday use

- **Tap ? anytime** for an in-app guide - categories, cloze cards, ratings, cram, backup, all in one place.
- **Add cards** inside a deck - normal term/definition, or fill-in-the-blank by wrapping the hidden part in `{{double braces}}`.
- **Bulk import** - paste lines like `la mesa - the table` (also accepts tab, comma, or semicolon separators).
- **Flip or type** - each deck has an "Answer by" setting. Flipping is quicker; typing forces you to actually produce the answer, which is better for vocabulary. Spelling is matched loosely, so typos and missing articles won't fail you.
- **Rate honestly - Again / Close / Easy.** The schedule only works if the ratings are true. Again resets it, Close pushes it out moderately, Easy pushes it out fast.
- **Cram** ignores the schedule and cycles a whole deck until every card is answered right once - for the night before an exam. It doesn't touch your long-term scheduling.
- **⚡ Study all due** mixes due cards from every deck - interleaving, which beats studying one deck at a time.
- Desktop shortcuts: **space** flip · **1–3** rate · **u** undo.

## Updating the app later

Replace the changed files in the GitHub repo (upload again with the same names). The service worker caches aggressively, so after an update, close and reopen the app twice, or bump the `CACHE` version string in `sw.js` (e.g. `deasa-v3`) as part of the update.
