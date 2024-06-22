import React from 'react';
import NavBar from '@/components/navBar';
import CollapsiblePanels from './CollapsiblePanels';


interface LandingProps {

}

const Landing: React.FC<LandingProps> = () => {
    return (
        <div className="min-h-screen">
            <div className="fixed top-0 left-0 right-0 bottom-0">
                <NavBar />
                <div>
                    <CollapsiblePanels />
                </div>
            </div>
        </div>
    );
};

export default Landing;