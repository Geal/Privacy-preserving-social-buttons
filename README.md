Privacy preserving social buttons
==================================

The social networks provide easy ways to integrate with their services and share content on their platform, often under the appearance of a button. They provide some code easy to integrate in pages to include those buttons. But these pieces of code include foreign Javascript files in your page and make calls to unknown webservices to load the button code. They're a security risk (you don't know the code in those files), a privacy risk (even without clicking the social buttons, the script loading is traced) and they slow the page laoding.

This library will help you overcome those risks by proposing an emulation of those social buttons with a script and CSS that you can store on your server. They're as easy to integrate as Twitter buttons (they use unobstrusive Javascript and data-* attributes).

For now, the library provides Twitter, Facebook, Reddit and Google+ buttons. More will be added soon. Be aware that these are sharing buttons, not "Like" or "+1". If anyone knows a way to emulate them without loading an iframe to their servers, feel free to tell me (or better, send me a patch!).


Usage
-------
    <html>
    <head>
        <title>Privacy preserving social buttons</title>
        <link rel="stylesheet" type="text/css" href="css/twitter.css" />
        <link rel="stylesheet" type="text/css" href="css/reddit.css" />
        <link rel="stylesheet" type="text/css" href="css/facebook.css" />
        <link rel="stylesheet" type="text/css" href="css/gplus.css" />
    </head>
    <body>
        <span class="pp-twitter"  data-url="http%3A%2F%2Funhandledexpression.com" data-via="gcouprie" data-text="blog">clickme</span>
        <span class="pp-reddit"   data-url="http%3A%2F%2Funhandledexpression.com" data-via="gcouprie" data-text="blog">clickme</span>
        <span class="pp-facebook" data-url="http%3A%2F%2Funhandledexpression.com" data-via="gcouprie" data-text="blog">clickme</span>
        <span class="pp-gplus"    data-url="http%3A%2F%2Funhandledexpression.com" data-via="gcouprie" data-text="blog">clickme</span>
        <script type="text/javascript" src="ppsb.js"></script>
    </body>
    </html>

License
-------
MIT
