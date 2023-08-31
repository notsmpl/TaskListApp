interface IButtonProps {
    children: string | JSX.Element | JSX.Element[];
    onClick?: ()=> void;
    color : string;
}
const Button:React.FC<IButtonProps> = ({children,onClick,color}:IButtonProps) => {
    const btnClass = `px-3 py-3 bg-${color}-400 border rounded-full`
    return(
        <button className = {btnClass}  type="submit" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;