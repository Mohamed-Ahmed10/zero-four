import { useState, useEffect, useRef } from 'react'
import { Spin } from 'antd';
export default function Loader() {
    const [percent, setPercent] = useState(-50);
    const timerRef = useRef();
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setPercent((v) => {
                const nextPercent = v + 5;
                return nextPercent > 150 ? -50 : nextPercent;
            });
        }, 100);
        return () => clearTimeout(timerRef.current);
    }, [percent]);

    return <Spin percent={percent} size="large" />
}
