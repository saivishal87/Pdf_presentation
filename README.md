# PDF Presentation App

A web application built with React and Firebase that allows users to view and navigate through PDFs in real-time. This app supports collaborative PDF viewing, where changes made by an admin (such as moving to a new page) are synced and reflected for all viewers. 

## Features

- **Real-time PDF Viewing**: The app uses Firestore to sync the current page in real-time, allowing multiple users to stay in sync as they navigate the PDF.
- **Admin and Viewer Roles**: Admins can change pages, and the viewers' PDF view automatically updates to match the admin's page.
- **Smooth Page Navigation**: The PDF Viewer uses a customizable scale and navigation to provide an easy-to-use reading experience.

## Demo

[![Demo Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)]([https://www.youtube.com/watch?v=YOUR_VIDEO_I](https://drive.google.com/file/d/1ImzGCG_Y9vUD39ybU94fRWBvTyExo0DZ/view?usp=sharinghttps://drive.google.com/file/d/1ImzGCG_Y9vUD39ybU94fRWBvTyExo0DZ/view?usp=sharing)

Click the thumbnail above to watch a demo of the app in action.

## Technologies Used

- **React**: For building the interactive front-end user interface.
- **Firebase Firestore**: Real-time database for syncing PDF page updates between admin and viewers.
- **PDF.js**: To render PDFs within the application.
- **Firebase Storage**: Optional, for storing PDF files (not used in this example but can be added for file uploads).

## Getting Started

To get a local copy of this project up and running, follow these steps.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **Firebase Project**: Set up a Firebase project and Firestore database, then copy your Firebase configuration details.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saivishal87/Pdf_presentation.git
   cd Pdf_presentation
   
2. Install dependencies:
     ```bash
     npm install
     
3. Create a .env file in the root directory and add your Firebase configuration:
     ```bash
     REACT_APP_API_KEY=your-api-key
     REACT_APP_AUTH_DOMAIN=your-auth-domain
     REACT_APP_PROJECT_ID=your-project-id
     REACT_APP_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_APP_ID=your-app-id

 4. Start the development server:
      ```bash
      npm start

The app will be available at http://localhost:3000.


### Usage

## Admin View:
If logged in as an admin, the user can navigate through the PDF, and the current page will be updated in Firestore.

## Viewer View:
Viewers connected to the app will automatically follow the page the admin is on, thanks to the Firestore sync feature.

### Project Structure
src/components/PDFViewer.js: Main PDF viewer component, which handles the rendering of the PDF and syncing page updates.
src/firebase.js: Firebase configuration and initialization.
public/probability.pdf: The sample PDF file placed in the public folder (can be replaced with any PDF).


### module description
- **React PDF Viewer**: A React library for displaying PDFs within the application.
- **Firebase.js**:  A real-time database service used for syncing the current page between users and managing authentication if needed.
- **PDF.js**:  A library by Mozilla for rendering PDFs directly in the browser.


      


