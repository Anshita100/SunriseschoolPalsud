import React, { useEffect } from 'react';

export default function SEO({
  title = 'Sunrise School - Excellence in Education',
  description = 'Empowering minds, inspiring futures. A premier educational institution offering world-class education.',
  keywords = 'Sunrise School, education, IB curriculum, boarding school, academics, admissions',
  image = '/images/banner.jpg',
  url = 'https://sunriseschool.edu/',
  author = 'Sunrise School',
  twitterHandle = '@SunriseSchool',
  children,
}) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const metaTags = {
      'description': description,
      'keywords': keywords,
      'author': author,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'og:type': 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:site': twitterHandle,
    };
    
    // Update existing meta tags or create new ones
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta;
      
      if (name.startsWith('og:')) {
        meta = document.querySelector(`meta[property="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', name);
          document.head.appendChild(meta);
        }
      } else {
        meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
      }
      
      meta.setAttribute('content', content);
    });
    
    // Cleanup function
    return () => {
      document.title = 'Sunrise School - Excellence in Education';
    };
  }, [title, description, keywords, image, url, author, twitterHandle]);

  return <>{children}</>;
} 