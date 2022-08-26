import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ id, name, thumbnail}) => (
    <Link to={`${id}`}>
        <div className='character-card'>
            <div className='info'>
                <div className='name'>{name}</div>
            </div>
            <img src={thumbnail} alt={name} />
        </div>
    </Link>
);

export default CharacterCard;