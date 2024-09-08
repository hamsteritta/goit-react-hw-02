const Feedback = ({feedbackData, totalFeedback}) => {

    const positiveFeedback = () => {
        return Math.round((feedbackData.good / totalFeedback()) * 100);
    }

    return <>
    { totalFeedback() > 0 && (
        <ul>
        {
            Object.keys(feedbackData).map(function(key) {
                return <li key={key}>{key}: {feedbackData[key]}</li>;
            })
        } 
        <li>Total: {totalFeedback()}</li>
        <li>Positive: {positiveFeedback()}%</li>   
    </ul>
    )}
    </>
}
export default Feedback;