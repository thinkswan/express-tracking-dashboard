# express-tracking-dashboard

An Express app that tracks visits in realtime by using a tracking pixel.

Based on the tutorial found at
https://www.airpair.com/javascript/node-js-tutorial.

## How to use

```
git clone git@github.com:thinkswan/express-tracking-dashboard.git
npm install
npm start
```

This will start a server at http://localhost:5000.

To watch the dashboard track visits, open http://localhost:5000/track.gif in a
separate tab. Each time you refresh this new tab, the dashboard will log a new
visit.

## How to deploy

Click the button below to spin up your own copy of the app in a Heroku
instance.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## How it works

The server (`server.js`) runs an Express app that uses Socket.IO to emit a
`visit` event each time the `/track.gif` URL is hit.

The client app (`app.js`) listens for the `visit` event and appends an element
with the visitor's details (time, IP, and user agent) to the dashboard.

The app is stateless, so refreshing the dashboard will clear all visits.

## License

MIT
