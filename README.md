# husky-talisman

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

---

> Update 2021-11-03: I wrote this over 3 years ago in while on a very security-strict client. I'm glad that this has seen some use and that there is still a demand.

> I still believe there is a need for a node-wrapped taliman package with zero dependencies. I will update this package shortly. In the meanwhile [node-talisman](https://www.npmjs.com/package/node-talisman) may offer some relief, although it's obviously not acceptable for zero-dependecy environments.

## TODO

-   [M1 support](https://github.com/thoughtworks/talisman/releases/tag/v1.23.0).
-   [Checksum implementation](https://nodejs.org/api/crypto.html).
-   Automated updates and smoke testing.
-   Implement GH Action releasing.
-   Move to [node https](https://nodejs.org/api/https.html) instead of curl.
-   Support for [husky's new hook system](https://blog.typicode.com/husky-git-hooks-javascript-config/).
-   Clarifying the difference between this package and [node-talisman](https://www.npmjs.com/package/node-talisman).
-   Move to [os api](https://nodejs.org/api/os.html) instead of [process](https://nodejs.org/api/process.html) parsing.
-   [ncc](https://github.com/vercel/ncc) instead of pika.
-   Ensure package is compatible to latest Talisman v1.x. (v0.x had a very different API to the current release!).

---

> NOTE: this package doesn't actually require [husky] to run, but plans full support.

This is an [npm] package that downloads and sets up Thoughtwork's [talisman] tool for use in your node project.

## Requires

-   Node 8+
-   [curl]

## Features

-   [husky] supported
-   Linux, MacOS and Windows (PowerShell) support
-   Zero npm package dependencies

## To Install

The following is recommended to keep compatibility across various OS's.

> If you have a preferred method feel free to use it.

1. Add package

    ```sh
    npm install --save-dev husky-talisman
    ```

1. Add a script to package.json

    ```js
    {
      "scripts" : {
        "husky-talisman": "husky-talisman",
        ...
      }
      ...
    }
    ```

1. Add githook

    Run the following via your githook tool

    ```sh
    npm run husky-talisman [pre-commit|pre-push]
    ```

    Alternatively add to your [husky] githooks in your `package.json` or `.huskyrc` file.

    ```js
    {
      ...
      "husky": {
        "hooks": {
          ...
          "pre-commit": "npm run husky-talisman -- pre-commit",
          "pre-push": "npm run husky-talisman -- pre-push"
        }
      }
    }
    ```

## Resources

-   [husky]
-   [talisman]

<!-- References -->

[curl]: https://curl.haxx.se/
[husky]: https://github.com/typicode/husky
[npm]: https://www.npmjs.com/
[talisman]: https://github.com/thoughtworks/talisman
