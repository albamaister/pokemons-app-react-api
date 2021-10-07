import React from 'react';
import './styles.css';

export const Pagination = (props) => {
    return (
        <div className='pagination'>
            <button onClick={props.onIzquierdaClick} className='btn btn-primary'>
            {'< Atras'}
            </button>

            <button onClick={props.onDerechaClick} className='btn btn-primary'>
            {'Adelante >'}
            </button>
            
        </div>
    )
}
