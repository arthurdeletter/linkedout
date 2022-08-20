import './button.css';

export const Button = ({variant = "primary" || "secondary" || "tertiary", text, onClick, icon:Icon, ...props}) => {
    return (
        <button className='button' data-variant={variant} onClick={onClick} {...props}>
            {
                Icon && <Icon/>
            }
            <span>{text}</span>
        </button>
    )
}