import React, {useEffect, useState} from 'react';
import { Survey } from 'survey-react';

import { fetchSurveyQuestions } from 'services/survey';

const CustomSurvey = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [surveyQuestion, setSurveyQuestion] = useState({});

    useEffect(() => {
        setIsLoading(true);
        (async function() {
            try {
                const surveyJson:any = await fetchSurveyQuestions(1);
                setSurveyQuestion(surveyJson);
            } catch (e) {
                console.error(e);
            }finally {
                setIsLoading(false);
            }
        })();
    }, []);

    const complete = (data: any) => {
        console.log(data);
        console.log(data.data);
    }

    return (
        <>
            {isLoading ? (<div>Loading...</div>):<Survey json={surveyQuestion} onComplete={complete} /> }
            {/* <Survey json={surveyQuestion} onComplete={complete} /> */}
            
            Das ist Survey
        </>
    )
};

export default CustomSurvey;