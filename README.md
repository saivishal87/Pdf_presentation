# PDF Presentation App

A web application built with React and Firebase that allows users to view and navigate through PDFs in real-time. This app supports collaborative PDF viewing, where changes made by an admin (such as moving to a new page) are synced and reflected for all viewers. 

## Features

- **Real-time PDF Viewing**: The app uses Firestore to sync the current page in real-time, allowing multiple users to stay in sync as they navigate the PDF.
- **Admin and Viewer Roles**: Admins can change pages, and the viewers' PDF view automatically updates to match the admin's page.
- **Smooth Page Navigation**: The PDF Viewer uses a customizable scale and navigation to provide an easy-to-use reading experience.

## Demo

[![Demo Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

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
