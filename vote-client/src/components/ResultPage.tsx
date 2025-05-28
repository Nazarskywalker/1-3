import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ResultPage = () => {
  const { questionId } = useParams();
  const [votes, setVotes] = useState<number[]>([0, 0, 0]);
  
  const getOptions = (id: string | undefined) => {
    switch(id) {
      case '0': // What is your favorite language?
        return ['JavaScript', 'Python', 'Java'];
      case '1': // Best frontend framework?
        return ['React', 'Angular', 'Vue'];
      case '2': // Best worker?
        return ['Full-time', 'Part-time', 'Freelancer'];
      default:
        return ['Option 1', 'Option 2', 'Option 3'];
    }
  };

  const options = getOptions(questionId);

  // Load votes from localStorage when component mounts
  useEffect(() => {
    const savedVotes = localStorage.getItem(`votes_${questionId}`);
    if (savedVotes) {
      setVotes(JSON.parse(savedVotes));
    }
  }, [questionId]);

  const handleVote = (optionIndex: number) => {
    const newVotes = [...votes];
    newVotes[optionIndex]++;
    setVotes(newVotes);
    // Save to localStorage
    localStorage.setItem(`votes_${questionId}`, JSON.stringify(newVotes));
  };

  return (
    <div className="result-page">
      <h1>Voting Results</h1>
      <div className="options-list">
        {options.map((option, index) => (
          <div key={index} className="option-container">
            <button
              className="vote-button"
              onClick={() => handleVote(index)}
            >
              {option}
            </button>
            <div className="vote-count">
              Votes: {votes[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
