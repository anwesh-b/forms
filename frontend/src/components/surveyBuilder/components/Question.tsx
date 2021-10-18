import { MouseEvent, useState } from 'react';
import QuestionDetail from './QuestionDetail';

const Question = (props: any) => {
    const { question, handleQuestionRemove } = props;
    const [questionType, setQuestionType] = useState(question.type || 'text');

    return (<p>
        Question :
        <input defaultValue={question.question} onChange={(e) => question.question = e.target.value} />
        <br />
        Type:
        <select defaultValue={questionType} onChange={(e) => {
            setQuestionType(e.target.value);
            question.type = e.target.value;
        }}>
            <option value="text">Text</option>
            <option value="select">Select</option>
            <option value="multipleChoice">Multiple Choice</option>

        </select>
        <br />
        <QuestionDetail question={question} />
        <br />
        <button onClick={(e: MouseEvent<HTMLElement>) => {
            e.preventDefault();
            handleQuestionRemove(question)
        }
        }>Delete</button>
    </p>)
}

export default Question;