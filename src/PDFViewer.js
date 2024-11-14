
import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import { db } from './firebase'; // Import the configured Firestore instance
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

// Set the worker source path directly from pdfjs-dist
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

function PDFViewer() {
  const [pdfUrl] = useState('/probability.pdf'); // Ensure this file is exactly named and placed in the `public` folder
  const [currentPage, setCurrentPage] = useState(1);
  const [isAdmin] = useState(true); // Set to true for admin, false for viewer

  // Real-time listener for Firestore changes (for viewers)
  useEffect(() => {
    const docRef = doc(db, 'pdf-viewer', 'currentPage');

    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const page = doc.data().page;
        setCurrentPage(page);
        console.log("Real-time page from Firestore:", page); // Log the current page from Firestore
      } else {
        console.log("Document does not exist in Firestore.");
      }
    });

    return unsubscribe;
  }, []);

  // Function to update the current page in Firestore based on scroll position (for admin only)
  const onPageChange = async (e) => {
    const newPage = e.currentPage;

    // Only update Firestore if this is the admin tab
    if (isAdmin) { 
      const docRef = doc(db, 'pdf-viewer', 'currentPage');
      await setDoc(docRef, { page: newPage });
      console.log("Page updated in Firestore to:", newPage); // Confirm Firestore update
    }
    
    // Set the page locally for both admin and viewer
    setCurrentPage(newPage); 
  };

  return (
    <div style={{ width: '100%', height: '600px' }}>
      
      <Worker workerUrl={GlobalWorkerOptions.workerSrc}>
        <Viewer 
          fileUrl={pdfUrl} 
          defaultScale={1.5} 
          initialPage={currentPage-1} // Viewer is zero-indexed
          onPageChange={isAdmin ? onPageChange : undefined} // Only attach onPageChange for admin
        />
      </Worker>
    </div>
  );
}

export default PDFViewer;


