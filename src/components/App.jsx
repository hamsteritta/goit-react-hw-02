import { useEffect, useState } from "react";
import Feedback from "./Feedback/Feedback.jsx";
import Options from "./Options/Options.jsx";
import Notification from "./Notification/Notification.jsx";
import Description from "./Description/Description.jsx";


const App = () => {
  

    const defaultData = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    const [feedbackData, setFeedbackData] = useState(() => {
        const saveData = JSON.parse(window.localStorage.getItem('FeedbackData'));
        return saveData ?? defaultData;
    });

    useEffect(()=> {
        window.localStorage.setItem('FeedbackData', JSON.stringify(feedbackData));
    }, [feedbackData]);

    const updateFeedback = feedbackType  => {
        setFeedbackData(prev => ({           
            ...prev,
            [feedbackType ]: prev[feedbackType ] + 1
        }));
    }

    const totalFeedback = () => {
        let total = 0;
        Object.keys(feedbackData).map(function(key) {
            total += feedbackData[key];
        });
        return total;
    }

    const resetFeedback = () => {
        setFeedbackData(defaultData);
    }

    const totalFeedbackNum = totalFeedback();
    const positiveFeedback = Math.round((feedbackData.good / totalFeedbackNum) * 100);

    return (
        <>
            <Description />
            {totalFeedbackNum > 0 && (
                <Feedback feedbackData={feedbackData} totalFeedback={totalFeedbackNum} positiveFeedback={positiveFeedback} />
            )}
            <Options feedbackData={feedbackData} changeHandle={updateFeedback} totalFeedback={totalFeedbackNum} resetFeedback={resetFeedback} />
            {totalFeedbackNum === 0 && (
                <Notification/>
            )}
         </>
    )
}

export default App