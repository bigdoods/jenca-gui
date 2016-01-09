# jenca-gui

The front end GUI for jenca-cloud

## install

You need an environment with Docker and make installed

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
