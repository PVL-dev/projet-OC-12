<p align="center">
  <img src="/src/assets/logo/fullLogo.png" width="520px" alt="Sportsee logo"/>
</p>



[![](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)
[![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](/)
[![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://fr.reactjs.org/)
[![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![](https://img.shields.io/badge/-AXIOS-61DAFB?style=for-the-badge)](https://axios-http.com/)
[![](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)


# Projet OC12 - SportSee

SportSee is an application for view and manage your sports statistics.

This app use React, React Router, Axios, and Recharts.


Design based for a Desktop version of minimum 1024px x 780px. There is no Tablet/Mobile version yet.

### Resources
- [UI Design Mockup](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)
- [Kanban Notion](https://www.notion.so/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e?pvs=4)



## Prerequisites
### Editor / IDE :
- [Visual Studio code](https://code.visualstudio.com/)

### Others :
- [nodeJS](https://nodejs.org/fr/) (version 14.17.1)
- [npm](https://www.npmjs.com/) (version 1.22.19)
- [Yarn](https://yarnpkg.com/) (version 1.22.19)


### Dependencies

- [React](https://fr.reactjs.org/) v18.2.0
- [React-dom](https://www.npmjs.com/package/react-dom) v18.2.0
- [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start) v6.6.2
- [Axios](https://axios-http.com/) v1.2.3
- [Recharts](https://recharts.org/en-US/) v2.3.2



## Installation
### Step 1 : Installing and launching back-end

- Clone the Back-End repository : `git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard`
- Launch new terminal and install dependencies : `yarn install`
- In app/index.js, change Back-End port from 3000 to 3005 (const port) and save
- Launch Back-End : `yarn dev`


### Step 2 : Installing and launching front-end

- Clone the Front-End repository : `git clone https://github.com/PVL-dev/projet-OC-12`
- Launch new terminal and install dependencies : `npm install`
- Launch Front-End on port 3000 (default port): `npm start`


## Use

Front-End is now accessible at this address : `http://localhost:3000`.

The Back-End API only contains data for users with IDs 12 and 18.

To use the app normally you must access the address : `http://localhost:3000/dashboard/12` or `http://localhost:3000/dashboard/18`.

Other IDs will return an error 404.


Thanks for reading !

