import React, { useState, useEffect, useRef } from 'react';


function LazyLoadImage({ src, alt, ...props }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        // ... (code pour l'Intersection Observer - inchangé)

    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(imageRef.current); // On arrête d'observer l'image une fois qu'elle est visible
        }
        },
        {
        root: null, // Utilise le viewport comme racine d'observation
        rootMargin: '0px', // Marge autour du viewport
        threshold: 0.5, // Seuil de visibilité (0.5 signifie que 50% de l'image doit être visible)
        }
    );

    if (imageRef.current) {
        observer.observe(imageRef.current);
    }

    return () => {
        if (imageRef.current) {
        observer.unobserve(imageRef.current); // On arrête d'observer l'image quand le composant est démonté
        }
    };
    }, []);

    useEffect(() => {
        if (isVisible && !isLoaded) {
        const img = new Image();
        img.onload = () => {
            setIsLoaded(true);
        };
        img.src = src;
        }
    }, [isVisible, isLoaded, src]);

    return (
        <div
        ref={imageRef}
        style={{
            backgroundImage: isLoaded ? `url(${src})` : '', // Applique l'image de fond seulement quand elle est chargée
            // Styles pour la div (par exemple, un effet de flou en attendant le chargement)
            filter: isLoaded ? 'none' : 'blur(5px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'filter 0.5s, opacity 0.5s', // Animation pour un effet de fondu
            ...props.style, // Fusionne les styles supplémentaires
        }}
        {...props} // Transmet les autres props à la div
        >
        {/* Contenu de la div (par exemple, du texte, des icônes) */}
        {props.children}
        </div>
    );
};

export default LazyLoadImage;