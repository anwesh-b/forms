import { Formik } from 'formik';

import SurveyBuilderWrapper from "./components/SurveyBuilderWrapper";

const SurveyBuilder = () => {
    return (
        <div className="form-builder">
            <div className="form-builder__header">
                Start building your own form
            </div>
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
                {(formikProps) => {
                    return (
                        <form >
                            <SurveyBuilderWrapper {...formikProps} />
                        </form>
                    )
                }}
            </Formik>
        </div>)
};

export default SurveyBuilder;