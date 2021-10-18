import { MouseEvent, useState } from 'react';
import Question from './Question';

const SurveyQuestions = (props: any) => {
    const { questions, onQuestionChange } = props;
    const [questionsState,setQuestionsState] = useState(questions||[]);
    const [questionIndex, setquestionIndex] = useState(0);

    const defaultQuestion = {
        question: 'Is this it',
        label: '',
        type: 'text',
        data: {},
        isRequired: false,
    }

    const generateDefaultQuestion = () => {
        return {id: questionIndex, ...defaultQuestion};
    }

    const handleQuestionAdd = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const current = [...questionsState];
        setquestionIndex(questionIndex+1);
        current.push(generateDefaultQuestion());
        onQuestionChange(current);
        setQuestionsState(current);
    }

    const handleQuestionRemove = (value: number) => {
        const current = [...questionsState];
        const index = current.indexOf(value);
        current.splice(index, 1);
        onQuestionChange(current);
        setQuestionsState(current);
    }

    return (
        <>
            <button onClick={handleQuestionAdd} >Add Question</button>
            {questionsState.map((question: Object, index:Number) => {
                return <Question question={question} key={index} handleQuestionRemove={handleQuestionRemove}/>
            })}
        </>
    )
}

export default SurveyQuestions;
