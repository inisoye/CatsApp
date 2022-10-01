# CatsApp

A simple cat breeds directory.

## Features

- Displays a list of cat breeds from [the cat API](https://thecatapi.com).
- Breeds can be liked and removed from likes.
- Liked pets are persisted on user's device.

## Screenshots

### Splash Screen

![Alt text](/screenshots/android-splash.png?raw=true 'Android Splash Screen')
![Alt text](/screenshots/ios-splash.png?raw=true 'Android Splash Screen')

### Cats List Screen

![Alt text](/screenshots/android-list.png?raw=true 'Android Splash Screen')
![Alt text](/screenshots/ios-list.png?raw=true 'Android Splash Screen')

### Liked Cats Screen

![Alt text](/screenshots/android-faves.png?raw=true 'Android Splash Screen')
![Alt text](/screenshots/ios-faves.png?raw=true 'Android Splash Screen')

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_BASE_URL`: https://api.thecatapi.com/v1.

`CAT_API_KEY`: Obtain a new key from [the cat API website](https://thecatapi.com).

## Run Locally

Clone the project

```bash
  git clone https://github.com/inisoye/CatsApp.git
```

Go to the project directory

```bash
  cd CatsApp
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  npm run start
```

Configure iOS pods

```bash
  cd ios && pod install && cd ..
```

Start bunder

```bash
  npx react-native start
```

Run on iOS

```bash
  npx react-native run-ios
```

Run on Android

```bash
  npx react-native run-android
```
