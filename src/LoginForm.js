import React, { useState, useEffect } from "react";

const LoginForm = () => {

    const [account, setAccount] = useState("快來輸入我");
    const [nowSelect, setNowSelect] = useState("789");

    useEffect(() => {
        setTimeout(() => { setAccount("用fetch拿到的資料") }, 2000);
    }, [])

    return (
        <div>
            <div>
                <input type="text" value={account} onChange={(e) => { setAccount(e.target.value) }}></input>
                <div>目前account:{account}</div>
                <button onClick={() => { setAccount("") }}>用按鍵取得新的account</button>
            </div>
            <hr />
            <div>
                <select onChange={(e) => { setNowSelect(e.target.value) }}>
                    <option value="123">123</option>
                    <option selected={true} value="456">456</option>
                </select>
                <div>
                    目前select:{nowSelect}
                </div>
                <button onClick={(e) => { setNowSelect("789") }}>改變為789</button>
            </div>
            <hr />

            <div>
                <input type="radio" value="123" checked={nowSelect === "123"} onChange={(e) => { setNowSelect("123") }} />123<br />
                <input type="radio" value="456" checked={nowSelect === "456"} onChange={(e) => { setNowSelect("456") }} />456
            </div>


        </div>
    );
}

export default LoginForm;
