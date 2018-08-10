# action-flow (WIP)

Project aimed at first to help volunteers of National Societies Red Cross to use the FLANSWERS tool. Its purpose is to show the recommended order to register tasks and activities.

This is a Working In Progress

# instructions to build

This project uses a Google Cloud Firestore database to get the actions data. In order to build it, therefore, you need to create the file app/environments/environment.ts in order to put your google firebase key and other infos. If you create a project on firebase, you can get it from the there, in the HTML instructions. Your environment.ts should look something like this:

```
export const environment = {
  production: false,
  firebase: {
    apiKey: "your key",
    authDomain: "your firebase domain",
    databaseURL: "your database url",
    projectId: "your project id",
    storageBucket: "yoru store bucket",
    messagingSenderId: "your messagingSenderId"
  }
};
```
