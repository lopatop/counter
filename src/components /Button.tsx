

type ButtonPropsType = {
    name: string,
    onClick: ()=>void
    className?: string,
    disabled?: boolean
}

export const Button = (props:ButtonPropsType) => {
    const{name, onClick,className,disabled} = props;
    return (
       <button className={className} onClick={onClick} disabled={disabled}>{name}</button>
    );
};

