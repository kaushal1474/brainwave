import ButtonSvg from "../assets/svg/ButtonSvg"

const Button = ({ href, className, children, onClick, px, white }) => {

    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

    const spanClasses = "relative z-10";


    const rendorButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    )

    const rendorLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )

    return href ? rendorLink() : rendorButton();
}

export default Button