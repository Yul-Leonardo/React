import {React, useState} from 'react';

function Nav() {
    
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='navbar'>
                <button onClick={showSidebar}>
                    Click Me!
                </button>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            </nav>
        
        </>
    );
}

export default Nav;