import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import MMResume from '../../Assets/MM_Resume_Final.pdf'
import Particles from 'react-particles-js';
export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <Particles
      params={{
        "particles": {
            "number": {
                "value": 10,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "speed": 1,
                "out_mode": "out"
            },
            "shape": {
                "type": [
                    "image",
                    "circle"
                ],
                "image": [
                    {
                        "src": "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
                        "height": 60,
                        "width":50
                    },
                    {
                        "src":  "https://res.cloudinary.com/dsjwujdgd/image/upload/v1611027200/Web%20Dev%20Portfolio/icons/reactjs-ar21_vcu4gt.svg",
                        "height": 50,
                        "width": 50
                    },
                    {
                        "src": 'https://res.cloudinary.com/dsjwujdgd/image/upload/v1611027200/Web%20Dev%20Portfolio/icons/reactjs-ar21_vcu4gt.svg',
                        "height": 20,
                        "width": 20
                    }
                ]
            },
            "color": {
                "value": "#CCC"
            },
            "size": {
                "value": 30,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 10,
                    "sync": false
                }
            }
        },
        "retina_detect": false
    }} />
  );
}
