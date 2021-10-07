import React from 'react';

export const PokemonCard = (props) => {

    const id = props.pokemon.id;
    const image = props.pokemon.sprites.other.dream_world.front_default;
    const name = props.pokemon.name;
    const type = props.pokemon.types[0].type.name;

    const style = type + " thumb-container";
    return (
        <div className={style} style={{cursor: 'pointer'}} onClick={() => props.handleClick(props.pokemon)} >
            <img src={image} alt={name} />
            <div className="number"><small>#0{id}</small></div>
            <div className="detail-wrapper">
                <h3>{name}</h3>
            </div>
        </div>
    )
}
