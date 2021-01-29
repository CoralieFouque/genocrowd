# Genocrowd

[![Lint and test](https://github.com/annotons/genocrowd/workflows/Lint%20and%20test/badge.svg)](https://github.com/annotons/genocrowd/actions)
[![Docker Repository on Quay](https://quay.io/repository/annotons/genocrowd/status "Docker Repository on Quay")](https://quay.io/repository/annotons/genocrowd)
[![Documentation Status](https://readthedocs.org/projects/genocrowd/badge/?version=latest)](https://genocrowd.readthedocs.io/en/latest/?badge=latest)

Genocrowd is a web app aiming to ease manual genome annotation curation by citizens.

It is still under heavy development.

## Documentation

All documentation, included installation instruction will be [here](https://genocrowd.readthedocs.io/en/latest/) when it's written

## Running it with Docker

### Production mode

First, if running in production, make sure to change default password and secret keys in `./docker/genocrowd.ini` and `docker-compose.prod.yml`.

Then build the Genocrowd container, and run all containers like this:

```
docker-compose build
docker-compose -f docker-compose.prod.yml up -d
```

Browse to http://localhost:9100/

### Development mode

To run in dev mode (code auto reload, non-minified js), do as above, but use the corresponding default docker-compose config:

```
docker-compose up -d
```

## Running tests

Run the app with docker-compose, then run this:

```
docker-compose exec genocrowd pytest
```

If you need more details and debug logs:

```
docker-compose exec genocrowd pytest -v --log-cli-level debug
```

To run some specific tests:

```
docker-compose exec genocrowd pytest -v --log-cli-level debug tests/test_api.py
docker-compose exec genocrowd pytest -v --log-cli-level debug tests/test_api.py -k test_start
```
