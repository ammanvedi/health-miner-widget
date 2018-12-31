import { createWidget } from './CreateWidget';

document.addEventListener( 'DOMContentLoaded', () => {
    const element: HTMLElement = document.getElementById( 'health' );

    if ( element ) {
        createWidget( element );
    }
} );
