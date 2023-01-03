const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
// DON'T DEFINE PORT
// const port = process.env.PORT || 3000

// REMOVE PORT
// const app = next({ dev, hostname, port })
const app = next({ dev, hostname })
const handle = app.getRequestHandler()

const requireHTTPS = (req, res) => {
    if (!req.secure && process.env.NODE_ENV !== "development") {
      return res.redirect('https://' + req.get('host') + req.url);
    }
  }

app.use(requireHTTPS);

app.prepare().then(() => {
    const server = createServer(async (req, res) => {
        try {
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        if (pathname === '/a') {
            await app.render(req, res, '/a', query)
        } else if (pathname === '/b') {
            await app.render(req, res, '/b', query)
        } else {
            await handle(req, res, parsedUrl)
        }
        } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
        }
    });

    const app = server.listen(0, () => {
    console.log('Example app listening at http://localhost:', app.address().port);
    });

})