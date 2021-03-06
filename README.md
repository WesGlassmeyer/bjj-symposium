# BJJ Symposium

Simplify your search for Brazilian Jiu Jitsu instructional videos. If you find a video you like then add it to the Community Favorites Page.

This repo is the front-end client, built in React. You can see the app live at

https://bjj-symposium.vercel.app/

## Quick App Demo

![](gif/demo.gif)

## Technology

#### Front End

- React
  - Create React App
  - React Router
- HTML5
- CSS3 (scratch - no frameworks)

#### Testing

- Jest

#### Production

- Deployed via Vercel

## Getting Started

Get an API key for YouTube by following the documentation https://developers.google.com/youtube/v3/getting-started

Create an `env` file that includes REACT_APP_API_KEY=<your-api-key>

Run `npm install` to load dependencies

Run `npm test` to ensure a stable build

This is only the front end client, so develop locally you'll need the backend server as well.

To get the backend up and running see https://github.com/wesglassmeyer/bjj-symposium-api

Deployments are handled through Vercel and can be run via `npm run deploy`
