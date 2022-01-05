import * as React from 'react';
import Footer from './footer';
import Header from './header';
import * as containerStyles from './layout.module.css';


const Layout = ({ pageTitle, children }) => {
    return (
        <div className={containerStyles.container}>
            <title>{pageTitle}</title>
            <Header />
            <main className={containerStyles.content}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout