export default (html, state) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Redux: End to End</title>
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
      <link rel="stylesheet" href="/assets/app.css" />
    </head>
    <body>
      <div id="app">${html}</div>
    </body>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
    </script>
    <script src="/assets/bundle.js"></script>
  </html>
`
