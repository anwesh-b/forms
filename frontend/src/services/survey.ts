import http from '../utils/http';

import config from '../config';

export const fetchSurveyQuestions = async (id: number): Promise<any> => {
    const { data } = await http.get(config.routes.form + id)

    return data;
}
