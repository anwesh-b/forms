import SelectBuilder from './types/SelectBuilder';
import TextAreaBuilder from './types/TextAreaBuilder';
import MultipleChoiceBuilder from './types/MultipleChoiceBuilder';

const QuestionDetail = (props: any) => {
    const { question } = props;
    return (<>
        {question.type === 'text' && <TextAreaBuilder />}
        {question.type === 'select' && <SelectBuilder />}
        {question.type === 'multipleChoice' && <MultipleChoiceBuilder />}
    </>)
}

export default QuestionDetail;
