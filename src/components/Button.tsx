

interface Props {
    name?: string
}

export const Button = (props: Props) => {
    return (
        <div style={{
            backgroundColor: "blue",
            color: 'white',
        }}>Button</div>
    )
}
