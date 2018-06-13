# Build AWS Proxy Response
A module to build response for 'AWS Proxy' type of response.

## System requirements

This module was developed in [version 8.10](https://nodejs.org/en/blog/release/v8.10.0/) of [Node.js](https://nodejs.org/en/), we recommend that you install it using [Node Version Manager (`nvm`)](https://github.com/creationix/nvm);

## Installation

This section is about how to add this into your **package.json** file.

**IMPORTANT**: This is not a npm module but will work the same way.

You can install the module from the terminal.

```shell-script
$ npm i --save git+https://github.com/SunsetRiders/build-proxy-response.git
```

You can also add the dependency manually and then run ```npm install``` command to place it inside the **node_modules** folder.

```javascript
"dependencies": {
  ...
  "build-proxy-response": "git@github.com:SunsetRiders/build-proxy-response.git"
}
 ```
 
## Usage

In order to build a AWS Proxy response for your Lambda function, you'll have to insert the code:

```javascript
const buildProxyResponse = require('build-proxy-response');

exports.handler = (event, context, callback) => {
  // ...
  const proxyResponse = buildProxyResponse(statusCode, bodyObject);
  return callback(null, proxyResponse);
};
```

## How to Test

You can test it locally by simply typing this command in the terminal (after cloning the repository):

```shell-script
$ npm test
```
