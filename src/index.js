import React from 'react';
import ReactDOM from 'react-dom'

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {}
            </button>
        );
    }
}
class Board extends React.Component {
    renderSquare(i) {
        return <Square />
    }
    render() {
        const status = 'New player: x';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="gmae-info">
                    <div>{ /*status */}</div>
                    <div>{ /*todo*/}</div>

                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
)