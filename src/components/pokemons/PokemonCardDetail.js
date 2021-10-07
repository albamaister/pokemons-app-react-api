import React from 'react';
import './styles.css';

export const PokemonCardDetail = (props) => {

    const id = props.selectedPokemon.id;
    const image = props.selectedPokemon.sprites.other.dream_world.front_default;
    const name = props.selectedPokemon.name;
    const type = props.selectedPokemon.types[0].type.name;
    const types = props.selectedPokemon.types.map( type => type.type.name ).join(" ");
    const peso = props.selectedPokemon.weight;
    const movimientos = props.selectedPokemon.moves.slice(0 , 6).map( move => move.move.name ).join(" ");
    const sprites = props.selectedPokemon.sprites;
    const imagesAdjuntas = [];
    for (const prop in sprites) {
        if (sprites[prop] !== null && sprites[prop] !== undefined && typeof sprites[prop] === 'string') imagesAdjuntas.push(sprites[prop]);
    }
    console.log("\n\nimaes", imagesAdjuntas)
    // const sprite1 = sprites.back_default;
    // const sprite2 = sprites.back_female;
    // const sprite3 = sprites.back_shiny;
    // const sprite4 = sprites.back_shiny_female;
    // const sprite5 = sprites.front_default;
    // const sprite6 = sprites.front_female;
    // const sprite7 = sprites.front_shiny;
    // const sprite8 = sprites.front_shiny_female;

    
    const style = type + " containerDetail";
    
    return (
        <div className={style}>
                <img src={image} alt={name} />
                <div className="number"><small>#0{id}</small></div>
                <div className="detail-wrapper">
                    <h3>{name}</h3>
                </div>
                <div className="detail"> 
                    <h5>Types</h5>
                    <p>{types}</p>
                    <h5>Peso</h5>
                    <p>{`${peso} kg`}</p>
                    <h5>Sprites</h5>
                    <div>
                        {imagesAdjuntas.length > 0 && imagesAdjuntas.map((iAdjunta, index) => 
                            <img key={index} src={iAdjunta} alt={name} style={{width: 60, height: 60}}/>
                        )}
                    </div>
                    <h5>Movimientos</h5>
                    <p style={{textAlign: 'justify'}}>{movimientos}</p>
                </div>
        </div>
    )
}
