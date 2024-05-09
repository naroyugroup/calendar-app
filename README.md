# Example App

## Running application locally

To run the application on your local machine, follow these steps:

- Clone this repository.
- Install dependencies by running `npm install`.
- Start the development server with `npm run dev`.

**Tip:** It's possible to install the Biome.js extension in your IDE to format code using shortcuts or automatically upon saving.

## Environmentals

  > VITE_API_URL

## Documentation

Here are some useful scripts you can run:

- `npm run dev`: runs application in development mode.
- `biome:check`: runs Biome.js to:
  - format files
  - lint files
  - organize imports
- `setup-husky`: installs Husky, configures the commit-msg hook to run commitlint, and configures the pre-commit hook to run lint-staged
