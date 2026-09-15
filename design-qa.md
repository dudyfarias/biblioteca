# Methodology Design QA - 2026-09-15

final result: passed

## Scope and Evidence

- Request: bring the existing methodology closer to the supplied visual reference, preserve the final taxonomy, and remove FAQ navigation/content.
- Source: `/Users/eduardofariascappia/Downloads/PHOTO-2026-09-14-15-27-59.jpg` (970 x 907 pixels).
- Browser: Codex in-app browser, local Next.js and static HTML versions.
- Capture directory: `/Users/eduardofariascappia/.codex/visualizations/2026/05/18/019e3b5f-e2e9-7690-9e3e-fcea41e0df1c/metodologia-20260915/`.
- `classificacao-desktop.png`: selected first field, six cards, practical example and four collections; viewport override 970 x 1450, delivered image 962 x 1438 pixels.
- `assuntos-desktop.png`: six closed subjects and two-page navigation; viewport override 1440 x 1000, delivered image 1432 x 994 pixels.
- Source and both final captures were opened together for comparison. Browser-delivered captures are slightly smaller than CSS viewport overrides; compare composition and wrapping, not raw pixel equality. No image resampling or generated replacement assets were used.
- Full-view and readable card-level inspection used the same images. No further crop was needed to read the icons, statuses, captions and collection types.

## Findings and Iteration

- [P2, resolved] Closed subject cards had unequal bottom edges with longer titles. Increased desktop summary minimum height to 132 px, with a narrower-desktop adjustment. The final desktop capture and DOM measurements show all six initial summaries at 132 px.
- [P2, prevented] Clipping a rounded subject container can conceal an outer keyboard outline. Summary focus outlines are drawn inside the container.
- An early subject capture was taken during navigation and showed the previous route. It was rejected and replaced after confirming the subject heading and URL.
- No unresolved P0/P1/P2 issues in the changed surfaces.

## Required Design Surfaces

- Typography: retained the existing Futura PT/Montserrat/Verdana hierarchy. Card labels, long titles and captions wrap without viewport overflow. No decorative or futuristic fonts.
- Layout: six desktop classification cards; four equal collection columns; three subject columns. Mobile uses stacked classification disclosures and a single subject column. Card radii remain at or below 8 px.
- Colors: restrained tints of SP palette colors on white. Reference orange/purple were intentionally replaced by approved blue/petroleum/olive accents. Text and written requirement badges remain distinct from decorative field colors.
- Assets: standard Feather/Lucide icons from the installed react-icons dependency; existing official logos preserved. No generated logo, custom SVG illustration or placeholder asset.
- Content: multidimensional structure remains first. Required fields remain Collection, Category and Subject; other fields remain conditional. Sixteen final subjects, four actual collections and the verified price-registration example are preserved. Enunciados is not a fifth collection. FAQ content is retired.

## Interaction Checks

- Next.js and HTML: all six field icons and four collection cards render; End selects Natureza using the keyboard; mobile disclosure opens and closes.
- Next.js and HTML: sixteen subject icons render; expanding the subject list and searching for Internacional works. Economicidade finds the new strategic-performance subject.
- Collection links open the catalog with the intended selection; Jurisprudencia yields its one existing record. No records were invented to populate empty collections.
- Widths 1440, 1024, 970, 768, 390 and 320: no horizontal document overflow or clipped classification/collection/example containers.
- Legacy Next FAQ URL and static FAQ filename both redirect to the methodology main page. Neither active menu includes FAQ.
- No browser warning/error entries reported during the local checks. Lint, production build and all ten taxonomy tests passed.

## Intentional Differences and Limits

- This is a reference-inspired refinement, not a pixel-exact clone. The institutional header, explicit initial structure and in-flow interactive explanations remain.
- Subjects stay on a separate page as previously requested. FAQ removal supersedes its presence in earlier screenshots.
- The source's older taxonomy/counts and misleading example values were not copied.
- Verification covers simulated viewports and keyboard/browser behavior, not physical devices, a full screen-reader audit or WCAG certification.
- Screenshots are local review artifacts outside the Git repository; source code, mirrors and this report are versioned.
