## About the Users

This App was built with the intention for the user to see how they perform in their games when they start drinking. We all like to have fun, but when does the fun stop being fun and your game starts to slip? Well now the user can track that with this app. The user can track when they started drinking and how many they had during the game. Notes can also be added to the game specifically in order for the user to make mental notes aboutwhat they remembered from the games they played.

## Features:
# CRUD:

 - The User has the ability to create, read, update, and delete the games they have created and played.
 - The user can do the same with the notes they have created on the specific games.

# Drink Tracker

 - The user can track when they started drinking in the app and how many they had by the time of the games end.
 - The user can log what specifically they drank in their notes section.

 # Authentication

  - All users will be required to login through Goggle via Firebase.
### Deploying on Netlify

- Build Command: `yarn build`
- Publish directory: `build`
- **Add Environmental Variables (NOT REQUIRED for Apps that do not use API Keys, etc)**
    - Any Enviromental variables you are using in your `.env.local` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.
- **Update Firebase URL Settings**
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
# Your own learning
If you are interested in setting up your own project for things outside of class, you can run the command to start a React project `npx create-react-app {APP_NAME}` and setup all the files and structures from scratch.
