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

To publish the package to npm:

```bash
npm publish
```

For prerelease versions (like the current 4.6.2-2), you must specify a tag:

```bash
npm publish --tag beta
```

If you want to publish a new version:

```bash
# Update version in package.json first
npm version patch|minor|major
npm publish
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