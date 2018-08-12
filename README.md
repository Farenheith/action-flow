# Action-flow (WIP)

Project aimed at first to help volunteers of National Societies Red Cross to use the FLANSWERS tool. Its purpose is to show the recommended order to register tasks and activities.

This is a Working In Progress

# Instructions to build

This project uses a Google Cloud Firestore database to get the actions data. In order to build it, therefore, you need to create the file src/environments/environment.ts to put your google firebase key and other infos. If you create a project on firebase, you can get it from the there, in the HTML instructions. Your environment.ts should look something like this:

```
export const environment = {
  production: false,
  application: 'path in your database to your application collection'
  firebase: {
    apiKey: 1your key',
    authDomain: 'your firebase domain',
    databaseURL: 'your database url',
    projectId: 'your project id',
    storageBucket: 'your store bucket',
    messagingSenderId: 'your messagingSenderId'
  }
};
```

# Hot to setup firestore database

This application need to point out to a collection in the database with the following documents:

* **cenario**: where the different users scenarios are setted. Sorry for the typo in the field, I will correct it someday;
* **config**: where the action types are setted. This option will be used to fill up the types glossary, an menu option with the only purpose to clarify things for the app user. The types must be listed in a sub-collection named **type**;

# About the document cenario

This document will have a subcollection for each user scenario available for the application case. Also, the following field is needed:

* **list**: An array of objects containing details about each scenario. The elements of this array must obey the following structure:
```
{
  id: "String. The collection name of the scenario",
  title: "String. The title of the scenario. It will be showed at the combobox where the app user will select what scenario he wants to simulate"
}
```

# About the scenario collection

Each scenario will have just one document: ref. This document must have the following fields:

* **description**: String. Description of the purpose of this scenario. For what it is applied and by who it must be used?
* **initialActions**: Array. It will have the document name of each action that can start a action flow. This actions will be used to create de lateral menu of the app. Each element must be in the following format:
```
{
  id: "string. the name of the action document name",
  title: "string. A title that will be used in the lateral menu"
}
```

Alsso, the document 'ref' must have a collection named **action** containing all the initial actions pointed out in the property 'initialActions'.

# The type document structure

Each type document must have the following structure:
```
{
  desciption: "String. The purpose of this type, what it represents",
  endsFlow: Boolean. If this type represent a closure of action flow,
  name: "string. The name of the type"
}
```

# The action structure

Each action must have the following structure:
```
{
  description: "String. The purpose of the action",
  name: "String. The name of the action",
  next: [Array of strings. The name of each action document that can follow the flow imediately after this one],
  title: "String. The title of the action. This will be used in the radio group selection when the flowing will be simulated, so must be short",
  type: "The name of the type document of the action. This name will be showed between brackets when the flowing will be simulated"
}
```

# About initial actions

In addition to the structure described above, initial actions also must have a sub-collection named **history** where all the following actions will be described. So, this solution is very strictly about this: if you want to create an common secondary action between two initial actions, just duplicate the document for each one.