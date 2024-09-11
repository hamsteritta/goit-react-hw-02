const Feedback = ({feedbackData, totalFeedback, positiveFeedback}) => {

   

    return <>
    { positiveFeedback > 0 && (
        <ul>
        {
            Object.keys(feedbackData).map(function(key) {
                return <li key={key}>{key}: {feedbackData[key]}</li>;
            })
        } 
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>   
    </ul>
    )}
    </>
}
export default Feedback;