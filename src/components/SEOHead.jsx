import React, { useEffect } from 'react';

const SEOHead = ({ 
  title = "Clínica Equilíbrio Mental - Saúde Mental e Bem-estar",
  description = "Clínica especializada em saúde mental com equipe multidisciplinar. Oferecemos consultas psiquiátricas, psicoterapia, terapia de casal e familiar.",
  keywords = "psiquiatra, psicólogo, saúde mental, terapia, consulta psiquiátrica, psicoterapia, ansiedade, depressão, telemedicina",
  canonical = "https://equilibriomental.com.br/"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonical);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
  }, [title, description, keywords, canonical]);

  return null; // This component doesn't render anything
};

export default SEOHead;

