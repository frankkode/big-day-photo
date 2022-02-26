# Wedding Pictures

## Quick Start
### installation

## to run this app locally
1. download or clone github repo

2. got to cloudinary and signup
   - create account on cloudinary [cloudinary](https://cloudinary.com/)
   - follow the step bellow

   1. signup to cloudinary
   ![alt signup](public/cloud0.png)

   2. go to setting --> upload
   ![alt text](public/cloud1.png)

   3. add upload preset
   ![alt text](public/cloud2.png)

   4. choose name of your choice --> set signing mode to unsigned 
   ![alt text](public/cloud3.png)

   5. result will be like this
   ![alt text](public/cloud4.png)

   6. copy credential and pase in the env file
   ![alt text](public/cloud5.png)

   7. create a file `.env.local` into your root
   ![alt text](public/env.png)

3. go to src--> pages --> index.js and add your cloudinary name and upload preset name like this
` 
    formData.append('upload_preset', 'ADD_YOUR_UPLOAD_PRESET_NAME_HERE');

    const data = await fetch('https://api.cloudinary.com/v1_1/ADD_YOUR_CLOUDINARY_NAME_HERE/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
  
  ` 

  - to src--> pages --> index.js and add your cloudinary name and upload preset name like this
   ![alt text](public/code.png) 

4. run `npm install`
5. run `npm run build`
6. run `npm run dev`

## Technology
- react [react](https://reactjs.org/)
- nextjs [nextjs](https://nextjs.org/)
- PWA    [PWA](https://web.dev/progressive-web-apps/)
- typescript [typescript](https://www.typescriptlang.org/)
- cloudinary [cloudinary](https://cloudinary.com/)
- framer-motion [framer-motion](https://www.framer.com/motion/)
- sass [sass](https://sass-lang.com/)





