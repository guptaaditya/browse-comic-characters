import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './notfound.scss';

export default function NotFound(props) {
    const [timer, setTime] = useState(5);
    const navigate = useNavigate();
    const interval = useRef();
    const timeRef = useRef(5);

    useEffect(() => {
        function startInterval() {
            interval.current = setInterval(() => {
                if (timeRef.current > 1) {
                    timeRef.current--;
                    setTime(timeRef.current);
                } else {
                    clearInterval(interval.current);
                    navigate('/');
                }
            }, 1000);
        }
        startInterval();
    }, [navigate]);

    return (
        <div className='not-found'>
            You have landed here by mistake and thus will be redirected in {timer} seconds;
        </div>
    );
}