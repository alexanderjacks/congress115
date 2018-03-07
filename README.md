# Colors of Crypto :flower_playing_cards::money_with_wings::sparkles:
### a progressive web app boilerplate in React
### widget data courtesy of [coinmarketcap.com](https://coinmarketcap.com/all/views/all/)
### featuring **Font Awesome** & **Bootstrap4** magic

![screenshot](/public/images/sshot2018Feb.png)

## [View project live at colors-crypto.firebaseapp.com/](https://colors-crypto.firebaseapp.com/)

#### :construction: Reconstitute this, to develop it in a new direction:
- [Fork this project](https://help.github.com/articles/fork-a-repo/)
- [clone to your local machine](https://help.github.com/articles/cloning-a-repository/)
- ```cd colors-crypto/```
- ```npm i && yarn start```
 - _In a new Terminal_
 ```cd src && sass --watch App.scss:App.css```

You now have the Sass compiler running, and Bootstrap, Bourbon and Saffron all set to leverage in a React/Webpack/React-Router boilerplate. Enjoy.

#### :rocket: If you wish to deploy this sandbox to firebase:
- follow the ':construction:' steps

- DELETE the .firebaserc file in this project's root directory

- create a new project at [console.firebase.google.com](firebase) called my_trendy_app_name
- ```npm install firebase-tools && firebase login```
- login to firebase
- ```firebase init```
- Current as of FirebaseCLI 3.15: Using Spacebar & Enter, choose
 - Hosting
 - my_trendy_app_name
- Now back to typing
 - ```build``` as directory
 - ```N``` to Single Page App?

- ```npm run build && firebase deploy```
- [View your trendy app project live at https://my_trendy_app_name.firebaseapp.com](https://my_trendy_app_name.firebaseapp.com)

That's all for now. Enjoy React and Sass.

#### [Alexander Jacks SVC](http://alexanderjacks.biz)

_MIT License 2018_
