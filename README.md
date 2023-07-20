# image-finder-app


![Image Finder App Logo](app-logo.png)

The Image Finder App, created by Hanu Singh, is a powerful and user-friendly application designed to help users discover and explore a vast collection of images. This app utilizes modern web technologies and follows a client-server architecture to deliver a seamless experience.

## Features

- Search for images based on keywords or topics.
- Filter images by category, color, size, and more.
- Explore trending and popular images.
- User-friendly and intuitive interface.
- Responsive design for various devices.
- Fast and efficient image retrieval.
- Secure backend powered by Sanity.io.

## Tech Stack

The Image Finder App is built using the following technologies:

### Frontend

- React.js - A popular JavaScript library for building user interfaces.
- React DOM - Used for rendering React components in the browser.
- React Router - Enables client-side routing and navigation in the application.

### Backend

The backend of the Image Finder App is powered by **Sanity.io**, a headless Content Management System (CMS) that provides a robust and flexible backend for managing and delivering content. Sanity.io handles the storage and retrieval of images, making the app's backend highly scalable and reliable.

## Getting Started

To run the Image Finder App locally on your machine, follow these steps:

### Prerequisites

- Node.js and npm installed on your computer.
- A Sanity.io account to access the backend services.

### Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/hanusingh/image-finder-app.git
```

2. Navigate to the project directory.

```bash
cd image-finder-app
```

3. Install the frontend dependencies.

```bash
npm install
```

4. Run the app locally.

```bash
npm start
```

5. Access the app in your browser at `http://localhost:3000`.

### Backend Setup

The backend of the Image Finder App is managed by Sanity.io. Before running the app, you need to set up your Sanity.io account and configure the required data models and APIs.

1. Sign up for a free account on [Sanity.io](https://www.sanity.io/).

2. Create a new Sanity.io project and set up the required data schemas and content types.

3. Obtain your Sanity.io project ID and API token, which will be required in the app's configuration.

4. Update the configuration file in the frontend code to connect to your Sanity.io backend.

```javascript
// src/config.js

const config = {
  sanity: {
    projectId: 'YOUR_PROJECT_ID',
    dataset: 'YOUR_DATASET_NAME',
    token: 'YOUR_API_TOKEN',
  },
};

export default config;
```

5. Now, your Image Finder App is ready to use with your own backend.

## Contribution

Contributions to the Image Finder App are welcome! If you encounter any bugs, have feature requests, or want to contribute code, please feel free to open an issue or submit a pull request on the GitHub repository.

## License

The Image Finder App is open-source and distributed under the [MIT License](LICENSE).

---

Thank you for using the Image Finder App! If you have any questions or need further assistance, please don't hesitate to contact Hanu Singh at iknowaditya22@gmail.com. Happy exploring! 📸
