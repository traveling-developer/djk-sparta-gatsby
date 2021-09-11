import * as React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout