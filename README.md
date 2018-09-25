<!-- markdownlint-disable first-line-h1 -->

<!-- [![Build status](https://img.shields.io/travis/MaxMilton/no-zero-days.svg)](https://travis-ci.com/MaxMilton/no-zero-days) -->
[![Build status](https://travis-ci.com/MaxMilton/react.js-no-zero-days.svg?branch=master)](https://travis-ci.com/MaxMilton/no-zero-days)
[![Coverage status](https://img.shields.io/codecov/c/github/MaxMilton/no-zero-days.svg)](https://codecov.io/gh/MaxMilton/no-zero-days)
[![Licence](https://img.shields.io/github/license/MaxMilton/no-zero-days.svg)](https://github.com/MaxMilton/no-zero-days/blob/master/LICENCE)

# 💪 No Zero Days Web App

**NOTE: This project is currently on hold. I plan to start again from scratch but using a more simple setup using Preact.**

A **React.js powered personal productivity system** to help you achieve something every single day and build a habit of daily self improvement.

Live demo: <https://nozerodays.maxmilton.com> _(coming soon)_.

<!-- TODO: Add preview screenshot image -->

___NOTE: The project is still in early development and may not yet be fully functional.___

## Technical overview

This project is a fun way for me to make something substantial using a React based tech stack. I used [Vue.js](https://vuejs.org/) in many projects in the past and I've recently shifted to [Svelte](https://svelte.technology/guide) as my framework of choice. I still use React in client projects but I realised I didn't have open source React projects, hence this concept was born.

**Built using:**

* [React.js](https://reactjs.org/) JavaScript framework
* [Material Deisgn](https://material.io) with [Material Components for React](https://github.com/material-components/material-components-web-react) + [SASS](https://sass-lang.com) CSS preprocessor
* [GraphQL](https://graphql.org/) API with [Apollo](https://www.apollographql.com/) GraphQL server/client
* [MongoDB](https://www.mongodb.com/) NoSQL database
* [Jest](http://jestjs.io) test framework
* [Babel](https://babeljs.io) JavaScript transpiler + [Webpack](https://webpack.js.org) asset bundler
* Microservice architecture using [Docker](https://www.docker.com) containers

<!-- TODO: Add a section about techniques, optimisations (e.g. compile time optimisation with graphql.macro), etc. -->

## How it works

> "It's not always that we need to do more but rather that we need to focus on less."  
> — Nathan W. Morris

<!-- FIXME: Write this section properly. -->

Get out of the rut of feeling like you didn't achieve anything valuable today.

<!-- TODO: Maybe break this into short steps -->
<!-- TODO: Add example images -->

Decide on small tasks you want to achieve daily and how how many points they're worth. Make a commitment to complete tasks every day to a minimum score. It doesn't matter if the tasks are small but they should move you forward towards your personal goals. Lots of little steps each day will add up to big changes over time.

**References:**

* <https://www.reddit.com/r/NonZeroDay/comments/1qbxvz/the_gospel_of_uryans01_helpful_advice_for_anyone/>
* <https://medium.com/@fayadh56/the-concept-of-no-more-zero-days-and-why-motivation-is-fleeting-9c1c307f8948>

## Services

Unit | Functionality
--|--
`packages/frontend-client` | A headless (static) web app users interact with in their browser.
`packages/backend-api-server` | API for the web app to safely and performantly access the database.
`packages/backend-database` | A MongoDB database instance to persist user data.

## Licence

`No Zero Days` is an MIT licensed open source project. See [LICENCE](https://github.com/MaxMilton/no-zero-days/blob/master/LICENCE).

-----

© 2018 [Max Milton](https://maxmilton.com)
