const net = require('net');
const { ResponseParser } = require('./response');

class Request {
  constructor(options) {
    const { methods = 'GET', url, host, port = 80, headers = {}, body = {}, path = '/' } = options;
    this.methods = methods;
    this.url = url;
    this.host = host;
    this.port = port;
    this.body = body;
    this.headers = headers;
    this.path = path;

    if (!this.headers['Content-Type']) {
      this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (this.headers['Content-Type'] === 'application/json') {
      this.bodyText = JSON.stringify(this.body);
    } else if (this.headers['Content-Type'] ===  'application/x-www-form-urlencoded') {
      this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
    }
    
    this.headers['Content-Length'] = this.bodyText.length;
  }

  toString() {
    return `${this.methods} ${this.path} HTTP/1.1\r\n${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r\n\r\n${this.bodyText}`
    return `POST / HTTP/1.1\r\nContent-Type: application/x-www-form-urlencoded\r\nContent-Length: 30\r\n\r\nfiled1=123`
  }

  send(connection) {
    return new Promise((resolve, reject) => {
      const parser = new ResponseParser();
      if (connection) {
        connection.write(this.toString());
      } else {
        connection = net.createConnection({
          host: this.host,
          port: this.port
        }, () => {
          connection.write(this.toString());
        })
      }
  
      connection.on('data', (data) => {
        parser.receive(data.toString());
        if (parser.isFinished) {
          resolve(parser.response);
        }
        connection.end();
      })
    
      
      connection.on('error', (err) => {
        console.log('error');
        reject(err);
      })
    })
  }
}

module.exports = Request;
