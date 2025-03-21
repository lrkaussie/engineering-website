import { useState, useEffect } from 'react';

export function useTextAnimation(phrases: string[], options = {
  typingSpeed: 80,
  deletingSpeed: 40,
  delayAfterPhrase: 2500,
  delayAfterDelete: 200  // Reduced delay after delete
}) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      const currentPhrase = phrases[currentIndex];

      if (!isDeleting && isTyping) {
        if (currentText.length < currentPhrase.length) {
          // Typing
          timeout = setTimeout(() => {
            setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          }, options.typingSpeed);
        } else {
          // Finished typing, wait before deleting
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, options.delayAfterPhrase);
        }
      } else if (isDeleting) {
        if (currentText.length > 0) {
          // Deleting
          timeout = setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, options.deletingSpeed);
        } else {
          // Finished deleting
          setIsDeleting(false);
          // Update index first
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          // Then set typing after a brief delay
          timeout = setTimeout(() => {
            setIsTyping(true);
          }, options.delayAfterDelete);
        }
      }
    };

    timeout = setTimeout(animateText, 50);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping, isDeleting, phrases, options]);

  return {
    text: currentText,
    isTyping: isTyping && !isDeleting,
    currentIndex
  };
} 