import './styles.scss';

export const Box = (props: any) => {

    return (
        <div className={`div-box zigzag sombra ${props.className}`}>
            {props.children}
        </div>
    )
}