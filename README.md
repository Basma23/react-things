
## Overview

- Create a ReactJS web application that displays a list of things, and allows creating new things.

## Feature Tasks and Requirements

- Create a web app with a top level ```App``` component
  - ```App``` component should…
    - have ```thingList``` data stored in its state.
    - render 3 nested components
      - ```Header```
      - ```ThingList```
      - ```Footer```
- ```thingList``` should be an array of plain old JavaScript objects (aka POJO) that represent a thing that has a name.
  - E.g. {name:’rake’}
- ```Header``` component should…
  - receive a ```things count``` as a prop
  - display a heading
  - display the current count of things
- ```ThingList``` component should…
  - receive a ```list of things``` as a prop
  - receive a function to call when a new ```thing``` is created.
  - Display an unordered list composed of ```ThingItem``` components
  - Display a form that allows creation of a ```thing```
  - When user creates new ```thing``` the rest of application should update appropriately.
    - ```Header``` thing count should update
    - ```ThingList``` should add a new ```ThingItem``` to end of list
- ```ThingItem``` component should…
   - receive a name as a prop
- ```Footer``` component should…
  - Display some placeholder text (e.g. lorem ipsum)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
