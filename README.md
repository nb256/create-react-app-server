# Create-react-app with index.html replacer server

This repo serves as a companion to the [blog post](https://talentra.net/blog/React-Uygulamalarina-Meta-Etiketleri-Eklemek-877/).

## Getting Started

```shell
git clone https://github.com/nb256/create-react-app-server.git
cd create-react-app-server
npm run build
npm install
node server
```

and replace the index.html of build:

```shell
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="/manifest.json" />
    <title>React App</title>
    <link href="/static/css/main.13ce3bc5.chunk.css" rel="stylesheet">

    <meta property="og:title" content="$OG_TITLE" />
    <meta property="og:description" content="$OG_DESCRIPTION" />
    <meta property="og:image" content="$OG_IMAGE" />
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="/static/js/2.5bf9b2cd.chunk.js"></script>
    <script src="/static/js/main.1431fa0f.chunk.js"></script>
</body>
</html>
```

It is running on http://localhost:5000/
