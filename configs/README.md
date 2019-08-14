# Config README

## Using `npm`

For each new repository:

1. Use `npm init` to create a `package.json` (will also create `package-lock.json`)
1. Install base development dependencies:
    ```sh
    > npm i eslint esm jsdom qunit -D
    ```
1. Add `scripts`:
    ```json
    "scripts": {
        "lint": "eslint .",
        "pretest": "npm run lint",
        "test": "qunit test/index.js"
    },
    ```