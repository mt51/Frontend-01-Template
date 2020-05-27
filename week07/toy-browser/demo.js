const images = require('images');
const Request = require('./request'); 
const { parseHTML } = require('./parse');
// const render = require('./render');

const client = new Request({
  host: '127.0.0.1',
  port: 8099,
  methods: 'POST',
  path: '/',
  headers: {
    ['x-foo']: 'customer'
  },
  body: {
    name: 'mt51'
  }
})

void async function() {
  console.log('before send');
  try {
    const result = await client.send();
    const dom = parseHTML(result.body)
    // const viewport = images(800, 600);
    // render(viewport, dom);
  } catch(e) {
    console.log(e);
  }
}();

