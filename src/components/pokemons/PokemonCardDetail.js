import React from 'react';
import * as Styles from './styles';

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
        
    return (
        <Styles.ContainerDetail type={type}>
            <Styles.ImageDetail src={image} alt={name} />
            <Styles.TextNumber>#0{id}</Styles.TextNumber>
            <Styles.TextName>
                {name}
            </Styles.TextName>
            <Styles.Detail> 
                <Styles.TextDescription>Types</Styles.TextDescription>
                <p>{types}</p>
                <Styles.TextDescription>Peso</Styles.TextDescription>
                <p>{`${peso} kg`}</p>
                <Styles.TextDescription>Sprites</Styles.TextDescription>
                <Styles.SpritesContainer>
                    {imagesAdjuntas.length > 0 && imagesAdjuntas.map((iAdjunta, index) => 
                        <Styles.SpriteImage key={index} src={iAdjunta} alt={name}/>
                    )}
                </Styles.SpritesContainer>
                <Styles.TextDescription>Movimientos</Styles.TextDescription>
                <p style={{textAlign: 'justify'}}>{movimientos}</p>
            </Styles.Detail>
        </Styles.ContainerDetail>
    )
}
