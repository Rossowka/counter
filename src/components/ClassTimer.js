import React from 'react';

const styles = {
    fontSize: '2rem',
    color: '#273c75',
    textAlign: 'center',
}

class ClassTimer extends React.Component {
    state = {
        count: 0
    };

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000 );
    };

    componentWillUnmount(){
        clearInterval(this.interval);
    }


    render() {
        const { count } = this.state;

        return(
            <div style={styles}>
                <h1>Timer (class component):</h1>
                <h2>{count}s</h2>
            </div>
        )
    }
}

export default ClassTimer;