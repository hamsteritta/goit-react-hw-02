const Options = ({feedbackData, changeHandle, totalFeedback, resetFeedback}) => {
    return <div>
        {
            Object.keys(feedbackData).map(function(key) {
                return <button key={key} onClick={()=>changeHandle(key)}>{key}</button>;
            })
        } 
        {totalFeedback() > 0 && (
            <button onClick={resetFeedback}>Reset</button>
        )}   
    </div>
}
export default Options;