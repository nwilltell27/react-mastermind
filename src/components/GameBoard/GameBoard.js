import GuessRow from '../GuessRow/GuessRow';

const GameBoard = (props) => (
    <div className="component" id="gameBoard">
        GameBoard
        <GuessRow rowNum={1} />
        <GuessRow rowNum={2} />
    </div>
);

export default GameBoard;