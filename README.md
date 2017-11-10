# CreateJS boilerplate

This boilerplate allows you to write HTML5 application in CreateJS/ES6 using webpack. ~~CreateJS stuff (EaselJS, PreloadJS, SoundJS, TweenJS) come from bower packages, because there is no official package on npm.~~ Hurra! Time has come we have NPM package but still ES5 so it cannot be used with imports. So right now createjs is used as global variable (until new ES6 release come).

## Quick start

1. Clone this repo using `git clone https://github.com/eskab/createjs-boilerplate.git`
2. Run `yarn setup` to clear repository and initialize new repository.
3. Run `yarn` to install dependencies.
4. Now you can run
  - `yarn start` and see example app at <http://localhost:8080>
  - `yarn build` to build package (dist)

## Todo

Task                               | Status
---------------------------------- | ------
Local CreateJS package             | ✔
Starter classes                    | ✔
Testing                            |
Description/instruction            | ✔
Prod/dev environment               |
Script for clean environment setup | ✔
Add post-setup script              | ✔
