# LAB - Class 02

## Project: basic-express-server

### Author: Ryan Eastman

### Problem Domain

This will be another basic server created to practice building a core, standards compliant Express server using best practices.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/DocHolliday13x/basic-express-server/actions/new)
- [back-end server url](https://basic-express-server-l72x.onrender.com/) (deployed on render)


### Collaborators

- Ryan Gallaway - showed me everything I know about this becuase before today, I've literally never seen any of this.

- Reece Renninger - helped me with my ThunderClient testing

- Nick Mullaney - helped me with my UML

- Google - helped me with everything else

### Setup

#### `.env` requirements (where applicable)

- PORT=3001

#### How to initialize/run your application (where applicable)

- create repo on GitHub
- clone repo to local machine
- `npm init -y`
- `npm i`
- `nodemon` or `node index.js` to start server


#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Details of feature
- GET : `/` - specific route to hit
- GET : `/person` - expects aa query string with a name property

#### Tests

- How do you run tests?
  - `nodemon`
  - open thunder client
  - enter url w/ query string
  - hit send
- Any tests of note?
  - 200 status on a proper request
  - 500 status on a bad request
  - 404 status on a bad route
- Describe any tests that you did not complete, skipped, etc
  - I messed up due to unclear directions and created testing files for my logger and validator modules. I didn't have time to go back and fix it, so I left them up. But I achieved my desired output for my 200/404/500 thunder client requests.

#### UML

![lab02UML](/public/images/lab02UML.png)

#### Resources

- [The Software House](https://tsh.io/blog/node-js-logger/)
- [Stack Overflow](https://stackoverflow.com/questions/38239943/difference-between-console-log-and-logger-log-in-node-js)
- [NPM Logger](https://www.npmjs.com/package/logger)
