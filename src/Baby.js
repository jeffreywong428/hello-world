import React, { useState, useEffect } from 'react';
const Baby = (props) => {
    /* 把state變成useState */
    const [isGetData, setGetData] = useState(false);
    const [Mom, setMom] = useState("");
    const [isRightDad, setRightDad] = useState(false);

    /* 把class 的 member function改成function中的function */
    const ajaxSimulator = () => {
        setTimeout(() => {
            setGetData(true);
            setMom("小美");
        }, 3000)
    }
    const checkDad = () => {
        if (props.dad === "Chang")
            setRightDad(true)
        else
            setRightDad(false)
    }

    useEffect(() => {
        /* 下面是 componentDidMount */

        ajaxSimulator();
        document.getElementById("talk").append('爸!')
        console.log("componentDidMount");
        /* 上面是 componentDidMount */

        return (() => {
            /* 下面是 componentWillUnmount */

            document.getElementById("talk").innerHTML = "";
            console.log("componentWillUnmount");
            /* 上面是 componentWillUnmount */
        })
    }, []);

    useEffect(() => {
        /* 下面是 componentDidMount和componentDidUpdate */

        checkDad();
        console.log("componentDidMount和componentDidUpdate");
        /* 上面是 componentDidMount和componentDidUpdate */

    }, [props.dad]); /* 加入監控的props.dad */

    if (isRightDad === false)
        return (
            <div>他的媽媽，是誰，干你X事</div>
        );
    else if (isGetData === false)
        return (
            <div id="msg">讀取中</div>
        );
    else
        return (
            <div id="msg">他的媽媽是{Mom}</div>
        );
}
export default Baby;