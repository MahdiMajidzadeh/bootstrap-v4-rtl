# Publishing to npm

This document provides instructions for publishing the bootstrap-v4-rtl package to the npm registry.

## Prerequisites

1. You need an npm account. If you don't have one, create it at [npmjs.com](https://www.npmjs.com/signup).
2. You need to be logged in to npm on your local machine.

## Publishing Process

### 1. Prepare the package

Before publishing, make sure your package is ready:

```bash
# Build the distribution files
npm run dist
```

### 2. Login to npm

If you're not already logged in:

```bash
npm login
```

### 3. Publish the package

Versions follow `<bootstrap version>-<release>` (e.g. `4.6.2-5`). npm treats these as prereleases, so it requires an explicit tag. Use `latest` so `npm i bootstrap-v4-rtl` installs the new release:

```bash
npm publish --tag latest
```

To prepare a new release:

```bash
# Update the version everywhere (package.json, lockfile, dist banners), then rebuild
node build/change-version.js 4.6.2-5 4.6.2-6
npm run dist
```

After publishing, tag the release commit on `main` and push the tag:

```bash
git tag v4.6.2-6
git push origin v4.6.2-6
```

### 4. Verify the publication

After publishing, verify that your package is available on npm:

```bash
npm view bootstrap-v4-rtl
```

You can also check the package page at: https://www.npmjs.com/package/bootstrap-v4-rtl

## Notes

- The `files` field in package.json determines which files are included in the published package.
- Make sure the version number in package.json is updated before publishing a new version.
- If you're updating an existing package, make sure to follow semantic versioning principles.