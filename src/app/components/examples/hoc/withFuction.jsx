import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const withFunctions = (Component) => (props) => {
    const onLogin = () => {
        localStorage.setItem("user", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
    };
    const isAuth = !!localStorage.getItem("user");
    return (
        <CardWrapper>
            <SmallTitle>HOC</SmallTitle>
            <Component
                onLogOut={onLogOut}
                onLogin={onLogin}
                isAuth={isAuth}
                {...props}
            />
        </CardWrapper>
    );
};
export default withFunctions;
