// web sharing detection
document.addEventListener('DOMContentLoaded', () => {
 
    'use strict';
   
    // get page information
    const
      html = document.documentElement,
      canonical = document.querySelector('link[rel=canonical]'),
      desc = document.getElementsByName('description'),
      pageInfo = {
        url: canonical ? canonical.href : location.href,
        title: document.title || '',
        text: desc.length ? desc[0].content : ''
      };
   
     // Web Share API support?
    if (navigator.share) html.classList.add('webshareapi');
   
    // social sharing enabled
    html.classList.add('social');
  
    //...
   
  });