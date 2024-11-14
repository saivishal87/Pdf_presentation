import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import { db } from './firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

function PDFViewer() {
  const [pdfUrl] = useState('/probability.pdf');
  const [currentPage, setCurrentPage] = useState(1);
  const [isAdmin] = useState(true);  // for admin (isAdmin=true) for viewer (isAdmin=false)

  useEffect(() => {
    const docRef = doc(db, 'pdf-viewer', 'currentPage');
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const page = doc.data().page;
        setCurrentPage(page);
      }
    });
    return unsubscribe;
  }, []);

  const onPageChange = async (e) => {
    const newPage = e.currentPage;
    if (isAdmin) { 
      const docRef = doc(db, 'pdf-viewer', 'currentPage');
      await setDoc(docRef, { page: newPage });
    }
    setCurrentPage(newPage); 
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f7f9fc',
      color: '#333',
      overflowX: 'hidden',
      padding: '0 20px',
    }}>
      {/* Header */}
      <header style={{
        width: '100%',
        backgroundColor: '#4A90E2',
        color: '#fff',
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        PDF Document Viewer
      </header>

      {/* Viewer Container */}
      <div style={{
        marginTop: '30px',
        padding: '20px',
        width: '80%',
        maxWidth: '900px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{
          color: '#4A90E2',
          fontSize: '20px',
          marginBottom: '10px',
          textAlign: 'center',
          fontWeight: '600',
        }}>Document: Probability Guide</h2>

        <Worker workerUrl={GlobalWorkerOptions.workerSrc}>
          <Viewer 
          // for viewer add this line key={currentPage} 
            fileUrl={pdfUrl} 
            defaultScale={1.5} 
            initialPage={currentPage}
            onPageChange={isAdmin ? onPageChange : undefined} // for viewer remove this line 
            style={{
              width: '100%',
              height: '600px',
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}
          />
        </Worker>

        {/* Page Number Display */}
        <p style={{
          marginTop: '15px',
          fontSize: '14px',
          color: '#666',
        }}>Currently viewing page {currentPage}</p>
      </div>

    
    </div>
  );
}

export default PDFViewer;

