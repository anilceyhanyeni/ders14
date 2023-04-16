import { memo, useState } from "react";

function Todos({ todos }) {

    console.log("Todos Comp")

    return (
        <>
            <h2>Yapılacaklar</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>

    )
}


export default memo(Todos)