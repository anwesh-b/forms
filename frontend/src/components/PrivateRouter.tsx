import {useContext} from 'react';
import { Route, Redirect } from "react-router";

import * as routes from 'constants/routes';

import { UserContext, IUser } from './App';

const PrivateRouter = (props: any) => {
    const user = useContext(UserContext);

    return (
        user.isHighLevelUser ? <Route {...props} /> : <Redirect to={routes.HOME} {...props}/>
    )
};

export default PrivateRouter;
