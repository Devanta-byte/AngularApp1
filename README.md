# AngularApp1

A simple student profile dashboard for MWD4B Angular Assignment 1. It shows a profile card, an online/offline status button, and an editable bio.

## Run the app

Install the packages and start the Angular development server:

```bash
npm install
npm start
```

Open `http://localhost:4200/` in a browser. To create a production build, run:

```bash
npm run build
```

## How the components work

- `UserCardComponent` receives the profile details from the parent app.
- `UserStatusComponent` sends status changes to the parent with an output event.
- `UserBioComponent` lets the user edit the bio and sends the saved text to the parent.
- `User` in `src/app/models/user.ts` describes the profile data.

Each component has its own template and CSS file. The parent app keeps the shared profile data and passes it to the three components.
