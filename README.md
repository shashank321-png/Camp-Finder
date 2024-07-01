# Camp-Finder

Camp-Finder is a web application that allows users to explore and review campgrounds.

## Features

- Users can view a list of campgrounds.
- Users can view details and reviews for each campground.
- Users can add new campgrounds.
- Users can add reviews for campgrounds.
- User authentication and authorization system.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine.
- MongoDB installed and running locally or accessible via MongoDB Atlas.
- Basic knowledge of web development technologies including HTML, CSS, JavaScript, and Node.js.

## Setup

1. Clone the repository:
   
    git clone[https://github.com/shashank321-png/Camp-Finder]
   

2. Navigate to the project directory:

    cd Camp-Finder
  
3. Install dependencies:
  
    npm install
   
4. Create a `.env` file in the root directory and add the following environment variables:
  
    PORT=3000
    DATABASE_URL=mongodb://localhost/Camp-FInder
    SESSION_SECRET=your_session_secret
    

5. Start the server:

    npm start

6. Open your web browser and navigate to `http://localhost:3000` to access the application.

7. Register for an account and start exploring campgrounds!

## Usage

- Browse the list of campgrounds.
- Click on a campground to view details and reviews.
- Add new campgrounds with descriptions and images.
- Add reviews and ratings for existing campgrounds.
- Edit or delete your own campgrounds and reviews.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js (for authentication)
- EJS (Embedded JavaScript templates)
