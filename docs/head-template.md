# Head Template for New Pages

Use this snippet when creating a new page. Replace placeholders in ALL_CAPS.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="PAGE_DESCRIPTION" />
  <meta name="author" content="Robert Królikowski" />
  <meta name="keywords" content="KEYWORD_1, KEYWORD_2, KEYWORD_3" />
  <meta property="og:title" content="PAGE_TITLE - Robert Królikowski" />
  <meta property="og:description" content="PAGE_OG_DESCRIPTION" />
  <meta
    property="og:image"
    content="https://robertkrolikowski.github.io/PortfolioStrona/assets/OG_IMAGE_FILE"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://robertkrolikowski.github.io/PortfolioStrona/PAGE_PATH"
  />

  <title>PAGE_TITLE</title>

  <link rel="stylesheet" href="style.css" />
  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="assets/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="assets/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="assets/favicon-16x16.png"
  />
  <link rel="manifest" href="assets/site.webmanifest" />
</head>
```

## Quick checklist

- Description is specific to THIS page.
- OG title and description are not copy-paste duplicates.
- OG image exists in assets and has a meaningful preview.
- OG URL points to the final page path.
- Page title is short and readable.
