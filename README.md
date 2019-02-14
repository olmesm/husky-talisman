# [husky]-[talisman]

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

---

> NOTE: this package doesn't actually require [husky] to run, but plans full support.

[npm] package to download and allow running of Thoughtworks [talisman] tool via node.

## Features

- [husky] supported
- Linux, MacOS and Windows support
- Zero package dependencies

## To Install

The following is recommended to keep compatibility across various OS's.

If you have a preferred method feel free to use it.

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

- [husky]
- [talisman]

<!-- References -->

[husky]: https://github.com/typicode/husky
[npm]: https://www.npmjs.com/
[talisman]: https://github.com/thoughtworks/talisman
