import { useEffect, useState } from "react";
import Feedback from "./Feedback/Feedback.jsx";
import Options from "./Options/Options.jsx";
import Notification from "./Notification/Notification.jsx";


const App = () => {
    const infoTxt = {
        name: 'Sip Happens Café',
        description: 'Please leave your feedback about our service by selecting one of the options below.'
    };

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

    return (
        <>
         <h1>{infoTxt.name}</h1>
         <p>{infoTxt.description}</p>
         <Feedback feedbackData={feedbackData} totalFeedback={totalFeedback} />
         <Options feedbackData={feedbackData} changeHandle={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
         {totalFeedback() === 0 && (
            <Notification/>
         )}
         </>
    )
}

export default App