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

### User profile:

- upload a profile picture or choose from a default image

### Geo Location:

- show results based on geo-location to keep the network local for each city

### Posts

- evaluate advertised activity

### Messaging

- messaging function among registered users

- ...

## ROUTES:

    ### - IF NOT LOGGED IN:

> - GET /
>   > - renders index.hbs
> - GET /auth/signup
>   > - renders signup.hbs
> - POST /auth/signup
>   > - body:

    - name
    - city
    - email
    - password

> - GET /auth/login
>   > - renders login.hbs
> - POST /auth/login
>   > - body:

    - email
    - password

    ### - ONLY WHEN LOGGED IN:

> - GET /posting/result
>   > - renders post-results.hbs
> - GET /posting/new
>   > - renders post-form.hbs
> - POST /posting/new
>   > - body:

    - title
    - description
    - location
    - date
    - adress
    - phoneNumber
    - insurance
    - hourlyFee
    - image

> - GET /posting/view
>   > - renders post.hbs
> - GET /posting/edit
>   > - renders edit-post.hbs
> - POST /posting/edit
>   > - body:

    - title
    - description
    - location
    - date
    - address
    - phoneNumber
    - insurance
    - hourlyFee
    - image

> - POST /posting/delete
>   > - body: (empty)
>   > - redirects to profile.hbs
> - GET /profile
>   > - renders profile.hbs
> - GET /profile/edit
>   > - renders edit-profile.hbs
> - POST /profile/edit
>   > - body:

    - firstName
    - lastName
    - location
    - email
    - image

> - GET /message/inbox
>   > - renders inbox.hbs
> - GET /message/new

> > - renders write-message.hbs
>
> - POST /auth/logout

> > - body: (empty)

## Models

### User model

```
firstName: String,
lastName: String,
location: [ENUM], required
image: String,
email: String, required, unique
password: String, required
posting: [String]



```

### Posting model

```

title: String, required
description: String, required
location: [ENUM], required
date: Date, default
adress: String, required
phoneNumber: String
insurance: [ENUM]
hourlyFee: String
image: [String]
postedBy: User

```

## Links

http://api.dataatwork.org/

https://fakerapi.it/

https://pipl.ir/

https://www.figma.com/file/750wTgnt6w0jgAsUNPbhfd/Figma-Wireframe-Kit-Free-Community?node-id=6%3A72

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Praa199/Jobby.git)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
