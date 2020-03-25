<h1 align="center">
  <img alt="Express" title="Express" src="https://expressjs.com/images/express-facebook-share.png" width="200px" />
</h1>
<h3 align="center">
  A Rest API that deals with register of patients.
</h3>

<p align="center">
  <a href="#rocket-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ballot_box_with_check-goals">Goals</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#checkered_flag-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#incoming_envelope-routes">Routes</a>
</p>

## :rocket: About the project
An API Rest made with Express to register patients and detect Corona symptoms. The file system API provided by Node was used to persist patients data, since the goal of this app was to focus on Express Fundamentals and not to set up a database.

## :ballot_box_with_check: Goals
Understand how to create a server with Express, setting the routes an separating the entity operations.

## :checkered_flag: Installation
First of all, make sure that you have Node.js installed on your machine. Choose a package manager (NPM or Yarn)

Now, to install the dependencies

```
    yarn install
```

To start the application
```
    yarn dev
```

## :incoming_envelope: Routes
| Path | HTTP Method | Description |
| :--- | :--- | :--- |
| "/patients" | `GET` | Returns all patients as Json response |
| "/patients" | `POST` | Requires patient infos in body to create a new patient |
| "/patients/:id" | `PUT` | Updates a patient with given id, also needs info to change in body |
| "/patients/:id" | `DELETE` | Deletes the pacient with given id |