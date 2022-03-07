import React from 'react'


interface Props {
    backgorundColor: string;
    textColor?: string;
    name?: string;
    onClick?: () => void;
}
const Button = ({ name,
    onClick,
    backgorundColor,
    textColor = "grey", }: Props) => {

    return (
        <div onClick={onClick}
            style={{
                backgroundColor: backgorundColor,
                color: textColor,
                borderRadius: 20,
                padding: "10px 30px",
                width: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>{name}</div>
    )
}

export default Button