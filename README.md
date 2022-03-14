# Progressive web app
# Wedding Pictures

This is a wedding pictures app where each user submits pictures of the bride and groom. This app catches caches using service worker and next js PWA, so it works both online and offline. The users can see pictures and upload pictures even if there is no internet connection.

this app can be installed as a native app, on android, ios and desktops

this app displays 10 pics on screen a user can press the button down to road more pictures.

## HOME

This App is progressive web app (PWA)
   ![alt text](public/pwa.png)


Image capture (Live App)
   ![alt text](public/camera.png)

pop up app installation (Live App)
   ![alt text](public/test6.jpg)

ask if you are sure to install(Live App)
   ![alt text](public/test7.jpg)

Install on the phone (Live App)
   ![alt text](public/test8.jpg)


## Quick Start
### installation

## to run this app locally
1. download or clone github repo

2. got to cloudinary and signup
   - create account on cloudinary [cloudinary](https://cloudinary.com/)
   - follow the step bellow

   1. signup to cloudinary.

   ![alt signup](public/cloud0.png)

   2. go to setting in up right corner --> upload.
   ![alt text](public/cloud1.png)

   3. add upload preset.
   ![alt text](public/cloud2.png)

   4. choose name of your choice --> set signing mode to unsigned.

   ![alt text](public/cloud3.png)

   5. result will be like this.

   ![alt text](public/cloud4.png)

   6.Go to dashbord copy credential.

   ![alt text](public/cloud5.png)

   7. create a file `.env.local` into your root add credential in env file.

   ![alt text](public/env.png)

3. go to src--> components -->ClCamera --> index.js and add your cloudinary name and upload preset name like this:

   ![alt text](public/code.png) 

4. run `npm install`
5. run `npm run build`
6. run `npm run dev`


### Live app
- live app on phone

  ![alt text](public/home.png)

- live app on computer

  ![alt text](public/home2.png)

- live app and image model

  ![alt text](public/model.gif)

- service worker

  ![alt text](public/service.png)

- offline notification

  ![alt text](public/offline.png)

- offline persistance

 ![alt text](public/offline2.gif)

- manifest

 ![alt text](public/iconinsta.png)

- installed app on mac

 ![alt text](public/install.png)

- open installed app

 ![alt text](public/install.gif)



## Technology
- react [react](https://reactjs.org/)
- nextjs [nextjs](https://nextjs.org/)
- PWA    [PWA](https://web.dev/progressive-web-apps/)
- typescript [typescript](https://www.typescriptlang.org/)
- cloudinary [cloudinary](https://cloudinary.com/)
- framer-motion [framer-motion](https://www.framer.com/motion/)
- sass [scss](https://sass-lang.com/documentation/syntax)

## Test

This app was tested on macbook pro 2019
and iphone 12
### Test on real Camera

 ![alt text](public/testa4.png)

 -----------------------------------

### test on front camera

 ![alt text](public/testa2.png)

 -----------------------------------

### test for offline notification

 ![alt text](public/testa3.png)

 -----------------------------------

### test for permission notification

![alt text](public/testa1.png)

------------------------------------

### test offline persistance(pwa)

![alt text](public/testa5.png)

------------------------------------






