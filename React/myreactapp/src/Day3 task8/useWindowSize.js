import React from 'react';
export default function useWindowSize() 
{
    const [currentWidth, setCurrentWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    const [color, setColor] = React.useState('lightcoral');
    const [deviceType, setDeviceType] = React.useState('Mobile');

    function handleParameters(width, height){
        if (width < 768) {
            setColor("lightcoral");
            setDeviceType("Mobile");
            setHeight(height);
            setCurrentWidth(width);
        } else if (width < 1024) {
            setColor("lightyellow");
            setDeviceType("Tablet");
            setHeight(height);
            setCurrentWidth(width);
        } else {
            setColor("lightgreen");
            setDeviceType("Desktop");
            setHeight(height);
            setCurrentWidth(width);
        }
    }

    React.useEffect(() => {
        const handleResize = () => 
        {
            handleParameters(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {color, currentWidth, height, deviceType};
}