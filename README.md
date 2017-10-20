# generator-primavera [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Utility generators for the primavera framework.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-primavera using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-primavera
npm install -g babel-cli
```

Then generate your new project:

```bash
yo primavera
```

## Subgenerators

Now that you already have a working project (really, try npm start! ;)), try adding some services, components and endpoints to it.


```bash
yo primavera:endpoint
```

There are 4 subgenerators available at the moment:
 * component
 * service
 * middleware
 * endpoint
 
This is also the loading order (you can play with it in src/app.js).
If it doesn't make sense for you, just change it.


## Enabling HTTPS

The bootstrap file (src/app.js) is already checking for key.pem and cert.pem.
If you need to run HTTPS locally, then just generate the keys with ssh


```bash
openssl genrsa -out key.pem 2048
openssl req -new -x509 -key key.pem -out cert.pem -days 3650
```

Next time you `npm start`, the HTTPS server will listen on port 3443.


## Learn more!
Go check the primavera framework GitHub:
https://github.com/aambertin/primavera

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Anibal Ambertin]()


[npm-image]: https://badge.fury.io/js/generator-primavera.svg
[npm-url]: https://npmjs.org/package/generator-primavera
[travis-image]: https://travis-ci.org/aambertin/generator-primavera.svg?branch=master
[travis-url]: https://travis-ci.org/aambertin/generator-primavera
[daviddm-image]: https://david-dm.org/aambertin/generator-primavera.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/aambertin/generator-primavera
