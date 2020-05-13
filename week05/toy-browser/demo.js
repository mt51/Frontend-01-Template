const Request = require('./request');

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
  const result = await client.send();
  console.log(result);
}();
