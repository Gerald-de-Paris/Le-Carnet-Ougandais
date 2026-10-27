# Lesson 3 French Audio Audit

## Scope and method

- Repository: `Gerald-de-Paris/Le-Carnet-Ougandais`
- Audited source: `track-3.html` and the shared speech implementation in `script.js`, based on `main` at the time of this audit.
- Lesson coverage: all ten sections, 3.1–3.10.
- Audio implementation: browser Web Speech API (`SpeechSynthesisUtterance`); no recorded audio files or `<audio>` elements were found in `track-3.html`.
- Static inventory: 76 non-empty `data-audio` mappings were found. The dedicated utterances are French text and the shared listener sets `utterance.lang = "fr-FR"`. Interface language is stored separately in `data-lang`; example audio is sourced from the fixed `data-audio` attribute rather than the translated label or English translation.

## Summary of findings

- **Items inventoried:** 76.
- **Sections covered:** 3.1–3.10 (all ten).
- **Audio/display mismatch found:** the Track 3 language-toggle helper replaced the first five Quick Reference items in each section with older translation strings while leaving each item's `data-audio` unchanged. This made visible examples and spoken text disagree. The stale replacement is now removed so the authored French example and its own audio mapping remain together.
- **Playback startup issue corrected:** restored the voice-list setup, the startup registration for example buttons, and the story-audio initializer. Pending-speech cancellation, error cleanup, and page-exit cancellation are also in place.
- **Pronunciation/listening status:** not verified by listening. A source mapping and a JavaScript syntax check cannot establish that the installed browser voice sounds natural or that audio completed successfully on a device. Manual listening remains required for every item.

## Corrections made in `script.js`

1. Restore the voice-list setup and register the example-button initializer on `DOMContentLoaded`, so speaker buttons are attached during page startup.
2. Stop assigning older `t3_*_ex*` translations to the first five Quick Reference items. Those strings did not match the newer French examples or their `data-audio` values, causing the wrong sentence to play relative to what the learner saw.
3. Cancel both speaking and pending utterances before starting another example and clear any stale `is-playing` state.
4. Clear the playing state on `end` and `error`, and log playback errors for diagnosis.
5. Cancel speech and clear the visible playing state on `pagehide`; restore the French story-audio initializer used elsewhere on the site.
5. Preserve the dedicated French `data-audio` text and `fr-FR` locale; no French learning text or translations were rewritten.

## Section counts

| Section | Title | Audio items |
| --- | --- | ---: |
| 3.1 | Négations avancées | 11 |
| 3.2 | Ne...que & réponses courtes | 6 |
| 3.3 | Pronoms toniques | 8 |
| 3.4 | Verbes réfléchis | 5 |
| 3.5 | Réfléchis : négation, questions & ordres | 7 |
| 3.6 | Pronoms objets | 8 |
| 3.7 | Verbes irréguliers clés | 10 |
| 3.8 | Pouvoir, vouloir, devoir | 8 |
| 3.9 | Poser des questions | 8 |
| 3.10 | Adverbes & mots indéfinis | 5 |
| **Total** | **All of Lesson 3** | **76** |

## Complete item checklist

Each row below records a source-level mapping check. The last column intentionally does not claim a listening test.

| # | Section | French utterance associated with the button | Source/mapping review | Actual audio listening |
| ---: | --- | --- | --- | --- |
| 1 | 3.1 — Négations avancées | Je ne travaille pas le dimanche. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 2 | 3.1 — Négations avancées | Je ne vais plus là-bas. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 3 | 3.1 — Négations avancées | Je ne vais jamais là-bas. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 4 | 3.1 — Négations avancées | Je ne fais rien ce soir. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 5 | 3.1 — Négations avancées | Je ne vois personne. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 6 | 3.1 — Négations avancées | Je n'ai pas encore fini. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 7 | 3.1 — Négations avancées | Je ne trouve mon sac nulle part. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 8 | 3.1 — Négations avancées | Je n'ai aucun rendez-vous lundi. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 9 | 3.1 — Négations avancées | Tu vas encore au club ? Non, je n'y vais plus. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 10 | 3.1 — Négations avancées | Tu as déjà payé ? Non, pas encore. Il reste vingt euros. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 11 | 3.1 — Négations avancées | Personne ne vient ce soir, mais rien ne presse. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 12 | 3.2 — Ne...que & réponses courtes | Je n'ai que cinq euros. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 13 | 3.2 — Ne...que & réponses courtes | Je ne bois que de l'eau. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 14 | 3.2 — Ne...que & réponses courtes | Il ne travaille que le matin. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 15 | 3.2 — Ne...que & réponses courtes | Tu as de l'argent ? Je n'ai que quinze euros. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 16 | 3.2 — Ne...que & réponses courtes | Qui vient ? Personne. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 17 | 3.2 — Ne...que & réponses courtes | Tu as fini le deuxième exercice ? Pas encore. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 18 | 3.3 — Pronoms toniques | Je viens avec toi, mais sans lui. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 19 | 3.3 — Pronoms toniques | Moi, je préfère partir lundi. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 20 | 3.3 — Pronoms toniques | Elle est plus grande que moi. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 21 | 3.3 — Pronoms toniques | C'est moi. Ce sont eux. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 22 | 3.3 — Pronoms toniques | Ces livres sont à elle. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 23 | 3.3 — Pronoms toniques | Tu viens chez nous samedi ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 24 | 3.3 — Pronoms toniques | Lui, il travaille à huit heures ; elle, elle commence à neuf heures. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 25 | 3.3 — Pronoms toniques | Cette voiture est à moi, mais le vélo est à eux. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 26 | 3.4 — Verbes réfléchis | Je me lève. Tu te lèves. Il se lève. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 27 | 3.4 — Verbes réfléchis | Nous nous levons. Vous vous levez. Ils se lèvent. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 28 | 3.4 — Verbes réfléchis | Je me réveille à sept heures. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 29 | 3.4 — Verbes réfléchis | Le lundi, je me lève tôt. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 30 | 3.4 — Verbes réfléchis | Je me couche à vingt-trois heures. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 31 | 3.5 — Réfléchis : négation, questions & ordres | Tu te lèves. Tu ne te lèves pas. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 32 | 3.5 — Réfléchis : négation, questions & ordres | Est-ce que tu te lèves tôt ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 33 | 3.5 — Réfléchis : négation, questions & ordres | Te lèves-tu tôt ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 34 | 3.5 — Réfléchis : négation, questions & ordres | Lève-toi ! Levez-vous ! Levons-nous ! | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 35 | 3.5 — Réfléchis : négation, questions & ordres | Ne te lève pas ! Ne vous levez pas ! Ne nous levons pas ! | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 36 | 3.5 — Réfléchis : négation, questions & ordres | Dépêche-toi, le cours commence à huit heures ! | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 37 | 3.5 — Réfléchis : négation, questions & ordres | Ne vous inquiétez pas, le bus arrive dans dix minutes. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 38 | 3.6 — Pronoms objets | Je vois Marie. Je la vois. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 39 | 3.6 — Pronoms objets | Je parle à Marie. Je lui parle. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 40 | 3.6 — Pronoms objets | Je donne le livre à Marie. Je le lui donne. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 41 | 3.6 — Pronoms objets | Je montre la photo à mes amis. Je la leur montre. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 42 | 3.6 — Pronoms objets | Tu as la clé ? Oui, je l'ai. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 43 | 3.6 — Pronoms objets | Je ne la vois pas aujourd'hui. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 44 | 3.6 — Pronoms objets | Tu peux me le donner ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 45 | 3.6 — Pronoms objets | Donne-le-moi, s'il te plaît. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 46 | 3.7 — Verbes irréguliers clés | Je pars, tu pars, il part, nous partons, vous partez, ils partent. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 47 | 3.7 — Verbes irréguliers clés | Je viens, tu viens, il vient, nous venons, vous venez, ils viennent. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 48 | 3.7 — Verbes irréguliers clés | Je dis, tu dis, il dit, nous disons, vous dites, ils disent. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 49 | 3.7 — Verbes irréguliers clés | Je lis, tu lis, il lit, nous lisons, vous lisez, ils lisent. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 50 | 3.7 — Verbes irréguliers clés | J'écris, tu écris, il écrit, nous écrivons, vous écrivez, ils écrivent. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 51 | 3.7 — Verbes irréguliers clés | Je mets, tu mets, il met, nous mettons, vous mettez, ils mettent. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 52 | 3.7 — Verbes irréguliers clés | Je pars lundi et je viens en septembre. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 53 | 3.7 — Verbes irréguliers clés | Qu'est-ce que vous dites ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 54 | 3.7 — Verbes irréguliers clés | Elle lit le message et elle écrit la réponse. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 55 | 3.7 — Verbes irréguliers clés | Tu mets le livre sur la table ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 56 | 3.8 — Pouvoir, vouloir, devoir | Je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 57 | 3.8 — Pouvoir, vouloir, devoir | Je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 58 | 3.8 — Pouvoir, vouloir, devoir | Je dois, tu dois, il doit, nous devons, vous devez, ils doivent. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 59 | 3.8 — Pouvoir, vouloir, devoir | Je ne peux pas venir. Je ne veux pas sortir. Je ne dois pas partir. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 60 | 3.8 — Pouvoir, vouloir, devoir | Je peux vous aider ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 61 | 3.8 — Pouvoir, vouloir, devoir | Vous voulez un café ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 62 | 3.8 — Pouvoir, vouloir, devoir | Vous devez attendre dix minutes. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 63 | 3.8 — Pouvoir, vouloir, devoir | Je voudrais venir, mais je dois travailler jusqu'à dix-huit heures. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 64 | 3.9 — Poser des questions | Tu viens demain ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 65 | 3.9 — Poser des questions | Est-ce que tu viens demain ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 66 | 3.9 — Poser des questions | Viens-tu demain ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 67 | 3.9 — Poser des questions | Quel jour sommes-nous ? Quelle date sommes-nous ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 68 | 3.9 — Poser des questions | À quelle heure commence le cours ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 69 | 3.9 — Poser des questions | Combien coûte ce livre ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 70 | 3.9 — Poser des questions | Quand est-ce que tu arrives ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 71 | 3.9 — Poser des questions | Qu'est-ce qui se passe ? | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 72 | 3.10 — Adverbes & mots indéfinis | Elle travaille bien, mais elle parle parfois trop vite. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 73 | 3.10 — Adverbes & mots indéfinis | Nous avons quelques rendez-vous mardi. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 74 | 3.10 — Adverbes & mots indéfinis | Tout le monde arrive en septembre. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 75 | 3.10 — Adverbes & mots indéfinis | Je cherche quelqu'un, mais je ne vois personne. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |
| 76 | 3.10 — Adverbes & mots indéfinis | Aucune place n'est libre et rien ne change. | Checked against its associated French example in source | Not listened to in a browser; manual listening required |

## Checks performed

- JavaScript source compilation check on `script.js`: passed before changes.
- JavaScript source compilation check on the corrected `script.js`: passed in the editing environment before commit.
- Confirmed the updated script contains `cachedVoices`, registers `initListenButtons` on `DOMContentLoaded`, and restores `initStoryAudio`.
- Lesson 3 inventory: 76 non-empty audio mappings across all ten sections.
- Shared-helper regression inventory: Track 1 has 29 `data-audio` items and Track 2 has 55; all were non-empty. These pages share `initListenButtons()`; no content changes were made to either.
- Source-level language check: Lesson 3's audio listener uses the explicit French mapping and sets `fr-FR`, independent of the interface toggle.
- Translation integrity check: the language-toggle helper no longer overwrites French example rows with stale text. One remaining row had explanatory words interrupting the phrase being spoken; its displayed example has now been simplified so the visible French and spoken sentence match.
- Not performed: real-browser click-through, audible pronunciation verification, desktop/mobile interaction testing, console inspection, and verification of a deployed Vercel preview. The connected GitHub API does not provide a browser/audio listening environment.

## Remaining manual validation

Listen to each of the 76 buttons in a browser, starting with the first five items in 3.1 and all six in 3.2, then continue through 3.3–3.10. Repeat in both interface modes (FR and EN), test selecting another item while speech is starting and while it is speaking, navigate away mid-utterance, and check desktop/mobile behavior. Record actual pronunciation and completion results separately from the static source checks.
