# angular2Seed

A seed project for Angular 2 apps.

`angular2Seed` provides the following features:

- Ready to go, statically typed build system working with TypeScript.
- Sample unit tests with Jasmine and Karma including code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
- Basic HTTP Service Worker
- Two way binding example

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

You must have `ts-node` and `http-server` installed as global. If you don't, use:

```bash
npm install -g ts-node
npm install -g http-server
```

In order to start the seed use:


```bash
git clone --depth 1 https://github.com/gsopu8065/angular2Seed.git
cd angular2Seed
# install the project's dependencies
npm install
# start your application
npm run-script start
```

To run test cases:

```bash
npm run-script test
```

To see the test coverage

```bash
npm run-script coverage
```
