.PHONY: images test build devimage prodimage build.dist

VERSION = 1.0.0
SERVICE = jenca-gui
HUBACCOUNT = jenca

ROOT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

images: devimage prodimage

# build the docker images
# the dev version includes development node modules
devimage:
	docker rmi $(HUBACCOUNT)/$(SERVICE):$(VERSION)-dev || true
	docker build -f Dockerfile.dev -t $(HUBACCOUNT)/$(SERVICE):latest-dev .
	docker tag $(HUBACCOUNT)/$(SERVICE):latest-dev $(HUBACCOUNT)/$(SERVICE):$(VERSION)-dev
	
prodimage:
	docker rmi $(HUBACCOUNT)/$(SERVICE):$(VERSION) || true
	mkdir -p $(ROOT_DIR)/dist
	docker build -f Dockerfile -t $(HUBACCOUNT)/$(SERVICE):latest .
	docker tag $(HUBACCOUNT)/$(SERVICE):latest $(HUBACCOUNT)/$(SERVICE):$(VERSION)

test:
	docker run -ti --rm \
		$(HUBACCOUNT)/$(SERVICE):$(VERSION)-dev test

build.dist:
	docker run -ti --rm \
	  -v $(ROOT_DIR):/app/code \
		$(HUBACCOUNT)/$(SERVICE):$(VERSION)-dev build

build: build.dist prodimage