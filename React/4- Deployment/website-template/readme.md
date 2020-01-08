**how to deploy**


```sh
1- npm init -y 
``` 
```sh
2- npm i gh-pages
``` 
```sh
3-add homepage to package.json : 
"homepage": "https://Mansour-Tumeh@github.io/website",
```
```sh
4- add inside script :
 "deploy": "gh-pages -d dist"
 ```
```sh
 5 create a new repo and name it website
 ```
 ```sh
 6 create .gitignore file and add node_modules 
 ```
 ```sh
 7 git init 
 ```
 ```sh
 8 git add .
 ```
 ```sh

 9 git commit -m "first commit"
 ```
 ```sh
 10 git remote add origin https://github.com/Mansour-Tumeh/website.git 
  ```
 ```sh  
 11 git push -u origin master
 ```
 ```sh
 12 npm run deploy
 ```


