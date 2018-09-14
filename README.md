# US Congress, 115th 🐍🇺🇸🤓
## progressive web app in React, CSS3
### data courtesy of [congress.gov](https://www.congress.gov)

![screenshot](/public/images/sshot2018Feb.png)

## [View project live at us-congress.firebaseapp.com/](https://us-congress.firebaseapp.com//)

#### :construction: Reconstitute this, to develop it in a new direction:
- [Fork this project](https://help.github.com/articles/fork-a-repo/)
- [clone to your local machine](https://help.github.com/articles/cloning-a-repository/)
- ```cd congress115/```
- ```npm i && yarn start```
 - _In a new Terminal_
 ```sass --watch src/App.scss:src/App.css```

You now have the Sass compiler running, and Bootstrap, Bourbon and Saffron all set to leverage in a React/Webpack/React-Router boilerplate. Enjoy.

#### :rocket: If you wish to deploy this sandbox to firebase:
- follow the ':construction:' steps

- ➡️ DELETE the .firebaserc file in this project's root directory

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

### Attribution = Some data and resources from:
- [www.congress.gov](www.congress.gov)
- [www.csvjson.com](https://www.csvjson.com/csv2json)
- [www.amcharts.com/](https://www.amcharts.com/)

## [Alexander Jacks SVC](https://alexanderjacks.info)

_MIT License 2018_
