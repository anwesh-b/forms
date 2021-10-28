import history from "utils/history";
import * as routes from 'constants/routes';

import { UserContext } from 'components/App';
import { useContext, useEffect, useState } from "react";

const NavBar = (props: any) => {
    return (<UserContext.Consumer>
        {user => {
            return <NavBarComponent user={user} {...props} />
        }}
    </UserContext.Consumer>)

}

const NavBarComponent = (props: any) => {
    const { user, toggleUserType } = props;

    return (
        <div className="navbar">
            <div className="navbar__core">
                <span className="navbar__core--item" onClick={() => history.push(routes.HOME)}>Forms</span>
                {user.isHighLevelUser && (
                    <span className="navbar__core--item" onClick={() => history.push(routes.BUILDER)}>Builder</span>
                )}
            </div>
            <div className="navbar__utils" onClick={toggleUserType}>
                {user.isHighLevelUser ? <>Switch to Low Level User</> : <>Switch to High Level User</>}
            </div>
        </div>
    );
}

export default NavBar;