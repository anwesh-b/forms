import { MouseEvent, useState } from 'react';
import QuestionDetail from './QuestionDetail';

const Question = (props: any) => {
    const { question, handleQuestionRemove, qIndex } = props;
    const [questionType, setQuestionType] = useState(question.type || 'text');

    return (
        <div className="form-builder__question">
            <div className="form-builder__question--core">
                {qIndex+1}. <br/>Question :<br/>
                <input className="input-text input-text--full-width" defaultValue={question.question} placeholder="Enter your question here" onChange={(e) => question.question = e.target.value} />
                <br />
                Type:<br/>
                <select defaultValue={questionType} onChange={(e) => {
                    setQuestionType(e.target.value);
                    question.type = e.target.value;
                }}>
                    <option value="text">Text</option>
                    <option value="select">Select</option>
                    <option value="multipleChoice">Multiple Choice</option>

                </select>
                <br />
                <br/>
                <QuestionDetail question={question} />
                <br />
            </div>
            <div className="form-builder__question--delete" onClick={(e: MouseEvent<HTMLElement>) => {
                e.preventDefault();
                handleQuestionRemove(question)
            }
            }>Delete</div>
        </div>
    )
}

export default Question;