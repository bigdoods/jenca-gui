.PHONY: images test build

VERSION = 1.0.0
SERVICE = jenca-gui
HUBACCOUNT = jenca

ROOT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

# build the docker images
# the dev version includes development node modules
images:
	docker build -t $(HUBACCOUNT)/$(SERVICE):latest .
	docker tag -f $(HUBACCOUNT)/$(SERVICE):latest $(HUBACCOUNT)/$(SERVICE):$(VERSION)

test:
	docker run -ti --rm \
		$(HUBACCOUNT)/$(SERVICE):$(VERSION) test

build:
	docker run -ti --rm \
		-v $(ROOT_DIR)/dist:/app/dist \
		$(HUBACCOUNT)/$(SERVICE):$(VERSION) build
