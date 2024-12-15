"use client";
import { useEffect, useState } from 'react';
import Qr from './qrcode';

export default function InstallButton() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handler = (e : any) => {
            e.preventDefault();
            console.log(e);
            
            setDeferredPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstall = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const choiceResult = await deferredPrompt.userChoice;
            if (choiceResult.outcome === 'accepted') {
                console.log('PWA installé');
            }
            setDeferredPrompt(null);
        }else{
            alert('PWA non installé');
        }
    };

    return (
        <>
            <Qr />
            <button onClick={handleInstall} className="install-button px-4 py-2 bg-white text-black rounded-lg">
                Installer l’application
            </button>
        </>
    );
}
