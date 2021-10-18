import SurveyQuestions from './SurveyQuestions';

const SurveyBuilderWrapper = (props: any) => {
    const {
        initialValues,
        isSubmitting,
        setFieldValue,
    } = props;

    const onValueChange = (index: string, value: any) => {
        setFieldValue(index, value)
    }

    const onQuestionChange = (question:Array<any>) => {
        setFieldValue('questions', question)
    }

    return (<>
        <div>
            Survey Title
            <input type="text" name="title" placeholder="Title" defaultValue={initialValues.title} onChange={(e) => onValueChange('title', e.target.value)} />
        </div>
        <div>
            Start Date
            <input type="date" name="startDate" placeholder="Start Date" defaultValue={initialValues.startDate} onChange={(e) => onValueChange('startDate', e.target.value)} />
        </div>
        <div>
            End Date
            <input type="date" name="endDate" placeholder="End Date" defaultValue={initialValues.endDate} onChange={(e) => onValueChange('endDate', e.target.value)} />
        </div>
        <SurveyQuestions questions={initialValues.questions} onQuestionChange={onQuestionChange} />
        <br/>
        <br/>
        <br/>
        <button type="submit" disabled={isSubmitting} onClick={props.handleSubmit}>Submit</button>
    </>)
}

export default SurveyBuilderWrapper;