import React, { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Package Guard`;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }
  }, [title, description]);

  return null;
};
