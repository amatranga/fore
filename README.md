# Fore!

A simple golf score card built using React

# Table of Contents

1. Requirements
1. Development
  1. Installing Dependencies
  1. Running the App
1. Contributing

## Requirements

- Node 7.10.x
- NPM 5.1.x +

## Development

### Installing Dependencies

- Create your own fork of the repository

```
git clone https://github.com/YOUR_USER_NAME/fore.git
cd fore
npm install
```

### Running the App

```
npm build
npm start
```
Note: `npm build` may have to be replaced with `npm run build` on some systems. Running `npm build:watch` (or `npm run build:watch`) will automatically add any changes you make to your build, but will not act to automatically refresh the page.

Application will default to [localhost:3000](http://localhost:3000/)


## Contributing

Create a remote called upstream, pointed to the master branch. 

```
git remote add upstream https://github.com/amatranga/fore.git
```

Create a remote called origin, pointed to your fork of the repository

```
git remote add origin https://github.com/YOUR_USER_NAME/fore.git
```

Make a new branch. Branch names should describe the feature or fix you are working on

```
git checkout -b feat/NAME_OF_NEW_FEATURE
git checkout -b fix/NAME_OF_FIX
```

Commit often. 

When you are ready to create a pull request...

```
git pull --rebase upstream master
git commit
git push origin/YOUR_BRANCH_NAME
```

From your fork, you will be able to open a pull request on the master branch
