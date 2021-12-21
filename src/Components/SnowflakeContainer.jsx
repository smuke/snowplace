import styled from "styled-components";

import SnowflakeItem from "./SnowflakeItem";
import AddSnowflakeItem from "./AddSnowflakeItem";
import { useState } from "react";

const Div = styled.div`
    margin-top: 100px;
`;

export default function SnowflakeContainer() {
    const [items, setItems] = useState([
        {
            difference: "Error",
            fastest: true
        },
        {
            difference: "Error"
        },
        {
            difference: "Error"
        }
    ])

    return (
        <Div>
            {items.map((item, index) => {
                return <SnowflakeItem key={index} id={index} difference={item.difference} fastest={item.fastest && true}/>;
            })}
            <AddSnowflakeItem>+ Add</AddSnowflakeItem>
        </Div>
    );
}