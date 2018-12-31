import { HealthModel, HealthData } from './Model/HealthModel';
import { HealthViewController } from './View/HealthViewController';
import { JSONFetchPromise } from './Util/Fetch';
import { ErrorTemplate } from './Template/ErrorMessage';
import { templateManager } from './Template/Template';
import './Style/health-style.scss';
interface Console {
    log( message: string | object ) : void
}
declare function fetch( url: string ) : Promise<any>;
declare const console : Console;

export const createWidget = ( element: HTMLElement ): void => {
    JSONFetchPromise( {
        url: 'https://1xr1img432.execute-api.eu-west-2.amazonaws.com/prod',
        method: 'GET'
    } )
        .then( ( data: HealthData ) => {
            const model: HealthModel = new HealthModel( data );
            const view: HealthViewController = new HealthViewController( element, model );
        } )
        .catch( () => {
            element.innerHTML = templateManager.render( ErrorTemplate, {
                message: 'Sorry! something went wrong when fetching vitals data.'
            } );
        } )
}
