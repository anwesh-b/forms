import { Formik } from 'formik';

import SurveyBuilderWrapper from "./components/SurveyBuilderWrapper";

const SurveyBuilder = () => {
    return (<div>
        This is survey builder
        <Formik
            initialValues={{
                title: '',
                startDate: '',
                endDate: '',
                questions: [],
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {(formikProps)=>{
                return (
                    <form >
                        <SurveyBuilderWrapper {...formikProps}/>
                    </form>
                )
            }}
        </Formik>
    </div>)
};

export default SurveyBuilder;