## VanillaJS Single Page App

The goal of this project is to create a Single Page Application without using any frameworks or libraries. Just pure JavaScript.

Project focuses on three main aspects:

- [Router](#router)
- [Templates](#templates)
- [Structure](#structure)

#### Router

The core idea behind the router is the use of the hash `#` symbol in the URL. Whenever browsers hit this character in the URL, they skip everything after it by default. From a browser's perspective `localhost:8080/#/nowhere` and `localhost:8080/#/somewhere` are the same and it will not send a server request to fetch the serverside route. This creates a possibility to create a Single Page App quite easily. The router compares the part of the URL after `#` against defined routes and renders a corresponding page.

#### Templates

Templates are constructed via ES6 template string literal syntax. All templates have a `render` method that is called when a page matches visited URL. The `render` method is asynchronous in order for the page to `fetch` data from external sources when needed.

#### Structure

The `index.html` invokes `index.js` and is told that the app structure is modularized via `type="module"` attribute. The `index.js` contains the core logic and binds all of the pieces together.

The app consists of `components` and `pages`, both included inside `views` directory. The `components` are pieces of HTML that are visible regardless the URL. The `pages` are rendered depending on the URL we visit. They should include the main content.

## Development

As there are no dependencies used, there is no need to install anything. Just type `npm run dev` in your command line to run the app. As simple as that.

The `npx live-server --verbose` command hidden under the `npm run dev` script will execute the app for you using live-server. It will open the app and watch it for changes.

By default, the app is hosted at port 8080 unless specified otherwise. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Production

The app is deployed using Netlify, view it [here](https://vanilla-js-single-page-app.netlify.com).
