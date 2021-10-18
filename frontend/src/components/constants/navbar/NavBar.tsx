import history from "utils/history";
import * as routes from 'constants/routes';

const NavBar = () => {
    return (
        <div>
            <span onClick={() => history.push(routes.BUILDER)}>Builder</span>
            <span onClick={() => history.push(routes.HOME)}>Forms</span>
        </div>
    );
}

export default NavBar;