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
        <div className="ok">
            Title<br/>
            <input className="input-text" type="text" name="title" placeholder="Enter your title here" defaultValue={initialValues.title} onChange={(e) => onValueChange('title', e.target.value)} />
        </div>
        <div>
            Start Date<br/>
            <input type="date" name="startDate" placeholder={initialValues.startDate} defaultValue={initialValues.startDate} onChange={(e) => onValueChange('startDate', e.target.value)} />
        </div>
        <div>
            End Date<br/>
            <input type="date" name="endDate" placeholder={initialValues.endDate} defaultValue={initialValues.endDate} onChange={(e) => onValueChange('endDate', e.target.value)} />
        </div>
        <SurveyQuestions questions={initialValues.questions} onQuestionChange={onQuestionChange} />
        <br/>
        <br/>
        <br/>
        <button className="form-builder__question--submit" type="submit" disabled={isSubmitting} onClick={props.handleSubmit}>Submit</button>

        {/* <button type="submit" disabled={isSubmitting} onClick={props.handleSubmit}>Submit</button> */}
    </>)
}

export default SurveyBuilderWrapper;