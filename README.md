# worker-app
React Redux Toolkit with Web Workers and Service Workers


React Redux Toolkit with Web Workers and Service Workers

Overview

This project demonstrates the use of React with Redux Toolkit to manage state, along with Web Workers and Service Workers to improve performance and offline capabilities.

Web Workers: Used to run background tasks without blocking the main thread.

Service Workers: Used to enable caching and offline capabilities.


Features

Redux Toolkit: State management and asynchronous data fetching using Redux.

Web Workers: Background data fetching from an API without affecting the UI.

Service Workers: Offline capabilities through caching of static assets.


Getting Started

Prerequisites

To run this project, you'll need to have the following installed:

Node.js

npm (which comes with Node.js)

JSON Server (for mock API)


Installation

1. Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


2. Install dependencies:

npm install


3. Start the React app:

npm start


4. Access the app: Open http://localhost:3000 in your browser.

5. Access the DB server: [Open http://localhost:3000](http://localhost:5000/tasks) in your browser.


Project Structure

src/
├── app/
│   └── store.js          # Redux store setup
├── features/
│   └── taskSlice.js      # Redux slice for task fetching
├── components/
│   └── TaskList.js       # Main component fetching data via Redux and Web Workers
├── worker.js             # Web Worker script in public folder
└── App.js                # Root component of the app
public/
└── worker.js             # Web Worker file
db.json                   # Mock API data (JSON Server)

Usage

1. Web Workers:

The app uses a Web Worker to fetch data from a local JSON server (db.json).

Web Workers run in the background to fetch data independently without blocking the UI.

You can see tasks fetched by both Web Workers and Redux on the UI.



2. Service Workers:

Service Workers are automatically registered by React in production.

You can enable offline mode by modifying src/serviceWorker.js and running a production build:

npm run build

After building, you can serve the static build using:

npx serve -s build



3. Redux:

The state of the tasks fetched via Redux is managed using Redux Toolkit and displayed in the UI.




Live Demo

Once you have started the app:

The app will fetch tasks using both Redux and Web Workers.

You will see tasks displayed in two sections:

Tasks fetched by Redux.

Tasks fetched by Web Workers.



Technologies Used

React: JavaScript library for building user interfaces.

Redux Toolkit: State management for predictable and efficient state handling.

Web Workers: Background thread for non-blocking tasks.

Service Workers: Offline capabilities and caching.

JSON Server: Mock API for data handling.


Example JSON Data (db.json)

{
  "tasks": [
    { "id": 1, "title": "Task 1" },
    { "id": 2, "title": "Task 2" },
    { "id": 3, "title": "Task 3" }
  ]
}
