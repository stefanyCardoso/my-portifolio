import './styles.scss';

export const Container = (props: any) => {
    return(
        <div className="div-container-fixed">
            {props.children}
        </div>
    )
}