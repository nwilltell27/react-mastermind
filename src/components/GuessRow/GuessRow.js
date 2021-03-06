import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';

const GuessRow = (props) => (
    <div className="component" id="guessRow">
        Guess Row {props.rowNum}
        <GuessPegs />
        <GuessScore />
    </div>
);

export default GuessRow;