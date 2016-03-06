# jenca-gui

The front end GUI for jenca-cloud

## install

You need an environment with Docker and make installed

NOTE: if you want to run the build locally (i.e. outside of Docker) - you need the latest node.js `5.2.0`.

An easy way to do this (on Linux at least) is to use [nvm](https://github.com/creationix/nvm)

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
$ nvm install 5.4.0
$ nvm use 5.4.0
```

## build

First build the images then run `make build` - the code will be output into `/dist` (which is `.gitignored`)

```bash
$ make images
$ make build
```

## test

The makefile will run the tests:

```bash
$ make test
```

## preview

This command will serve a dev version of the gui on port 80 of the Vagrant VM:

```bash
$ make start
```

## local development

If you want to have file watchers active for automatic rebuild - you need to run the build locally:

```
$ npm install
$ npm run build
$ npm run watch
$ npm test
```

## state shape

The following is an example of the state tree we pass to redux:

```js
var state = {
  
  projects:{
    loaded: '{boolean,notnull}',
    loading: '{boolean,notnull}',
    error: '{string}',
    data: '{array}
  },

  user:{
    loaded: '{boolean,notnull}',
    loading: '{boolean,notnull}',
    error: '{string}',
    data: '{object}
  }
}
```