import { useState, useEffect } from 'react';

const styles = {
    fontSize: '2rem',
    color: '#487eb0',
    textAlign: 'center',
}

function FunctionTimer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => count + 1 )
        }, 1000 );

        return () => clearInterval(interval);
    });

    return (
        <div style={styles}>
            <h1>Timer (function component)</h1>
            <h2>{count}s</h2>
        </div>
    );
}

export default FunctionTimer;