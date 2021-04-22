# Jobby

## Description

Job-board like website to advertise job offers and demands through posts created by users. The focus is the audience with a hobby which they can share with the world and get a profit in return.

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **landing-page** - As a user I want to be able to access the landingpage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the website to interact with all job offers and services posted by other users
- **login** - As a user I want to be able to log in on the website to create posts offering and requiring services from other individuals
- **logout** - As a user I want to be able to log out from the webpage to make sure no one will access my account
- **postings** - As a user I want to see all the postings available and interact with them
- **post create** - As a user I want to create postings of the services I can use or offer
- **post details** - As a user I want to see the post details to contact whoever posts anything of my interest

## Backlog

List of other features outside of the MVPs scope

### Administration:

- create admin accounts to moderate the content

### Authentication:

- email validation

### User profile:

- upload a profile picture or choose from a default image
- revise forms for better functioning

### Geo Location:

- show results based on geo-location to keep the network local for each city

### Posts

- revise forms for better functioning
- only post authors can edit them
- evaluate advertised activity
- add the date when post was created
- view pictures if any
- choose between offering or searching for service

### Messaging

- messaging function among registered users

### About, FAQ, Contact

- create routes and pages

- ...

## ROUTES

### IF NOT LOGGED IN:

> - GET /
>   > - renders index.hbs

> - GET /auth/signup
>   > - renders signup.hbs

> - POST /auth/signup
>   > - body:
>   >   > - name
>   >   > - city
>   >   > - email
>   >   > - password

> - GET /auth/login
>   > - renders login.hbs

> - POST /auth/login
>   > - body:
>   >   > - email
>   >   > - password

### - ONLY WHEN LOGGED IN:

> - GET /posting/result
>   > - renders post-results.hbs

> - GET /posting/new
>   > - renders post-form.hbs

> - POST /posting/new
>   > - body:
>   >   > - title
>   >   > - description
>   >   > - location
>   >   > - date
>   >   > - adress
>   >   > - phoneNumber
>   >   > - insurance
>   >   > - hourlyFee
>   >   > - image

> - GET /posting/view
>   > - renders post.hbs

> - GET /posting/edit
>   > - renders edit-post.hbs

> - POST /posting/edit
>   > - body:
>   >   > - title
>   >   > - description
>   >   > - location
>   >   > - date
>   >   > - address
>   >   > - phoneNumber
>   >   > - insurance
>   >   > - hourlyFee
>   >   > - image

> - POST /posting/delete
>   > - body: (empty)
>   > - redirects to profile.hbs

> - GET /profile
>   > - renders profile.hbs
> - GET /profile/edit
>   > - renders edit-profile.hbs

> - POST /profile/edit
>   > - body:
>   >   > - firstName
>   >   > - lastName
>   >   > - location
>   >   > - email

> - POST /auth/logout
>   > - body: (empty)

## Models

### User model

```
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  location: {
    type: String,
    default: "Berlin",
    enum: LOCATION_ENUM,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posting: [Object],



```

### Posting model

```

title: {
    type: String,
    required: true,
    min: 5,
  },
  description: {
    type: String,
    required: true,
    min: 20,
    max: 100,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  adress: {
    type: Object,
  },
  phoneNumber: {
    type: String,
  },
  insurance: {
    enum: ["true", "false"],
  },
  hourlyFee: {
    type: String,
  },
  image: {
    type: [String],
    default: [""],
  },
    postedBy: { type: Schema.Types.ObjectId, ref: "UserModel" },

```

## Links

### APIs where some of the seeded fake data came from

[dataatwork](http://api.dataatwork.org/)

[fakerapi](https://fakerapi.it/)

[pipl](https://pipl.ir/)

### Figma

[Wireframe](https://www.figma.com/file/750wTgnt6w0jgAsUNPbhfd/Figma-Wireframe-Kit-Free-Community?node-id=6%3A72)

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Praa199/Jhobby.git)

[Deploy Link](http://jhobby.heroku.com)

### Slides

The url to your presentation slides

[Slides](https://docs.google.com/presentation/d/1Hfa7HRnoqGItm5pdfzFYYjhRZ6WKM_yG6vc_1PxU6OM/edit?usp=sharing)
