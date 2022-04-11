# webpack-react

Hello World! 
mkdir new-react-app  
cd new-react-app  
git init. No need if you clone repository  
git config user.email "you@example.com"  
git config user.name "Your Name"  
npm init -y  
npm install react react-dom  
npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin  
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader  
npm install --save-dev css-loader style-loader sass-loader  
npm i --save-dev babel-jest jest react-test-renderer

webpack - to bundle all javascript code to single and to build application  
webpack-cli - to run webpack commands  
webpack-dev-server - to run react locally  
babel-loader - webpack loader that will help webpack to use babel transpiler. Loaders tell webpack how to interpret and translate files. The transformation happens on a per-file basis before adding to the dependency graph.  
@babel/core - for transpiling ES6 to ES5
@babel/preset-env - for transpiling ES2015+ syntax  
@babel/preset-react - for transpiling react code (JSX to JS)  
(Note: The order in which webpack apply loaders is from last to first, so as said earlier the css-loader will generate the output string which will be used by the style-loader.)

1. sass-loader loads a Sass/SCSS file and compiles it to CSS.
2. css-loader - will take all the CSS from the CSS file and generate it to a single string and will pass this to style-loader.
3. style-loader: loader that injects styles into the DOM. will take this string and will embed it in the style tag in index.html.  
   sass-loader(\*): loader for SASS/SCSS.

[https://www.toptal.com/react/webpack-react-tutorial-pt-1](https://www.toptal.com/react/webpack-react-tutorial-pt-1)  
[https://www.toptal.com/react/webpack-config-tutorial-pt-2](https://www.toptal.com/react/webpack-config-tutorial-pt-2)  
[How to Create a Production-Ready Webpack 4 Config From Scratch](https://www.freecodecamp.org/news/creating-a-production-ready-webpack-4-config-from-scratch/)  
[Learn Webpack - Full Tutorial for Beginners](https://www.youtube.com/watch?v=MpGLUVbqoYQ)  
[Getting to know Webpack in 2020 - Beginner friendly introduction | Part 1](https://thedeployguy.com/2020-06-07-getting-to-know-webpack/)  
[Webpack. Full Course 2020](https://www.youtube.com/watch?v=eSaF8NXeNsA)  
[https://github.com/bradtraversy/react_webpack_starter](https://github.com/bradtraversy/react_webpack_starter)  
[React & Webpack 4 From Scratch - No CLI](https://www.youtube.com/watch?v=deyxI-6C2u4)  
[React (without Create React App) with Babel 7, Webpack 4, and React 16](https://www.youtube.com/watch?v=Zb2mQyQRwqc)  
[REACT JS Without Create React App - Build Your Own Workflow](https://www.javascriptwillrule.com/reactjs-installation-tutorial-without-create-react-app)  
[Setup react with webpack and babel](https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9)  
[Как с нуля создать проект на React, используя Webpack 4 и Babel](https://medium.com/nuances-of-programming/%D0%BA%D0%B0%D0%BA-%D1%81-%D0%BD%D1%83%D0%BB%D1%8F-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%BD%D0%B0-react-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F-webpack-4-%D0%B8-babel-172c256d228)  
[React setup with webpack for beginners](https://dev.to/deepanjangh/react-setup-with-webpack-for-beginners-2a8k)  
[Create React App without create-react-app !](https://dev.to/riddhiagrawal001/create-react-app-without-create-react-app-2lgd)  
[Creating your React project from scratch without create-react-app: The Complete Guide.](https://dev.to/underscorecode/creating-your-react-project-from-scratch-without-create-react-app-the-complete-guide-4kbc)  
[Setting up CSS and Sass with Webpack!!](https://dev.to/deepanjangh/setting-up-css-and-sass-with-webpack-3cg)  
[Create a react app without create-react-app](https://www.innominds.com/blog/create-a-react-app-without-create-react-app)  
[Handling Images](https://medium.com/a-beginners-guide-for-webpack-2/handling-images-e1a2a2c28f8d)  
[React TypeScript Webpack - Setup From Scratch (1/8)](https://www.youtube.com/watch?v=Elpu7CIuqjY&list=PLC3y8-rFHvwiWPS2RO3BKotLRfgg_8WEo)  
[How to configure SCSS modules for Webpack](https://www.developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/)  
[https://github.com/Colt/webpack-demo-app/blob/master/webpack.prod.js](https://github.com/Colt/webpack-demo-app/blob/master/webpack.prod.js)  
[An in-depth guide to performance optimization with webpack](https://blog.logrocket.com/guide-performance-optimization-webpack/)
