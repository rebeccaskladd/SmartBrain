import React from 'react';

const Navigation = ({ isSignedIn, route, onRouteChange }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    }
    else {
        if (route === 'register') {
            return (
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                </nav>
            );
        }
        else {
            return (
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p className='f2 link dim underline pa3 pointer'></p>
                </nav>
            );
        }
    }
}

export default Navigation;