import { useEffect } from 'react';
import { isClient } from '@/utilities/browser';

export const useKeyboardNavigationDetection = () => {
    if (isClient()) {
        document.body.className = 'using-mouse';
    }

    const handleDocumentTab = (event) => {
        if (event.keyCode === 9) {
            document.body.classList.remove('using-mouse');
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleDocumentTab);

        return () => {
            document.removeEventListener('keydown', handleDocumentTab);
        };
    });
};
