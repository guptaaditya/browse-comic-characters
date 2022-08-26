import { useEffect, useState } from 'react';

const baseUri = process.env.REACT_APP_BASE_URI;
export const DEFAULT_LIMIT = 15;

const getCharactersList = async ({filter, sort, limit = DEFAULT_LIMIT, offset = 0}) => { 
    const qs = new URLSearchParams({
        apikey: process.env.REACT_APP_API_KEY,
        ...filter,
        orderBy: sort,
        limit,
        offset,
    }).toString();

    return fetch(`${baseUri}/v1/public/characters?${qs}`).then(
        r => r.json()
    ).then(({code, data}) => code === 200 && ({
        ...data,
    })).catch(e => {
        return e.message || e.msg || e.code || typeof e === 'string' ? e : 'An unknown error occured';
    });
};


const getCharactersData = async ({id = ''}) => { 
    const qs = new URLSearchParams({
        apikey: process.env.REACT_APP_API_KEY,
    }).toString();

    return fetch(`${baseUri}/v1/public/characters/${id}?${qs}`).then(
        r => r.json()
    ).then(({code, data}) => code === 200 && data.results?.[0]).catch(e => {
        return e.message || e.msg || e.code || typeof e === 'string' ? e : 'An unknown error occured';
    });
};

export const useCharactersList = ({filter, sort, limit, offset}) => {
    const [loading, setLoading] = useState(false);
    const [{total, results}, setData] = useState(() => ({ total: 0, results: []}));

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const data = await getCharactersList({filter, sort, limit, offset});
                setData(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [filter, sort, limit, offset]);

    return {
        loading,
        total,
        results
    };
}

export const useCharacterData = ({ id }) => {
    const [loading, setLoading] = useState(false);
    const [characterData, setCharacterData] = useState({});

    useEffect(() => {
        async function getCharacterData() {
            try {
                setLoading(true);
                const data = await getCharactersData({id});
                setCharacterData(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        getCharacterData();
    }, [id]);

    return {
        loading,
        characterData,
    };
}