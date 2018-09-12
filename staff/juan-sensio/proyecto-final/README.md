# Pose2Pose

[Pose2Pose](link) is a web applications that lets you upload videos and extract the pose from it using the machine learning model [posenet](https://www.npmjs.com/package/@tensorflow-models/posenet). Then, you can use the pose from your video to sintetize new content with a pre-trained [pix2pix](https://github.com/affinelayer/pix2pix-tensorflow) machine learning model.

The result is a video featuring the new content but with the movement from you uploaded video. Possible applications of this webapp include easy and fast creation of character animations, visual effects for character creation and many more.

## Instructions

### Running the API

To run this application, first clone the repository.

```bash
git clone REPO_NAME
```

To start the API, go into the api folder, install the required npm packages and run the api.

```bash
cd api
npm install
npm start
```

Note that you will need to start mongo in order to allow the use of the data models.

```bash
sudo mongod
```

To run the tests

```bash
npm run test-logic
```

### Running the APP

To run the application, go into the app folder, install the required npm packages and run the app.

```bash
cd app
npm install
npm start
```

To run the tests

```bash
npm run test-logic
```

## Technical documentation

### API

[README.md](link)

### APP

[README.md](link)

## Public URL

[Pose2Pose](link)

## Author

Juan Sensio - juansensio03@gmail.com -