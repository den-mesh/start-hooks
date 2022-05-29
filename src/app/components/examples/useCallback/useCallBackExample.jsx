import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // WithOut Callback
    const validateWithOutCallback = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    // With Callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p> Render withOutCallback: {withOutCallback.current}</p>
            <p> Render withCallback: {withCallback.current}</p>
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                className="form-control mb-3"
                type="email"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
