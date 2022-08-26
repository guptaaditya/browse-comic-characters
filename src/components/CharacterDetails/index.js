import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCharacterData } from 'datahooks';

import './characterdetails.scss';

const Listing = ({listData}) => (
    <ul>{listData.map(({name}, index) => <li key={`${name}-${index}`}>{name}</li>)}</ul>
);

export default function CharacterDetails(props) {
    const { characterId } = useParams();
    const { loading = false, characterData: data } = useCharacterData({ id: characterId });
    const navigate = useNavigate();

    const handleBack = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (
        <div className='container'>
            {!loading && !data.id && `No record found`}
            {!loading && data.id && (
                <>
                    <div>
                        {loading && `Loading details...`}
                        {!loading && !data && `No record found`}
                    </div>
                    {!loading && data && (
                        <div>
                            <button type='button' onClick={handleBack}>Back to list</button>
                        </div>
                    )}
                    <div className='details'>
                        <div className='info'>
                            <h1><u>{data.name}</u></h1>
                            {data.description && <p>{data.description}</p>}
                            {data.stories.available > 0 && (
                                <div> 
                                    <b>Stories:</b>
                                    <Listing listData={data.stories.items} />
                                </div>
                            )}
                            {data.events.available > 0 && (
                                <div> 
                                    <b>Events:</b>
                                    <Listing listData={data.events.items} />
                                </div>
                            )}
                            {data.series.available > 0 && (
                                <div> 
                                    <b>Series:</b>
                                    <Listing listData={data.series.items} />
                                </div>
                            )}
                            </div>
                        <div className='graphics'>
                            <img src={`${data.thumbnail.path}.${data?.thumbnail.extension}`} alt={data.name} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}