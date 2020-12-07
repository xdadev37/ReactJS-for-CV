import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { LoadingContextProvider } from '../../Contexts/Loading/LoadingContext';

export function Layout(props) {
    return <LoadingContextProvider>
        <Header />
        {props.children}
        <Footer />
    </LoadingContextProvider>
}