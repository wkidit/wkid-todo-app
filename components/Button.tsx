import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
}, ref) => {
    return (
        <button
        type={type}
        className={twMerge(`h-[45px] w-full border-[none] bg-[#8E3E63] rounded-[5px] text-[#F6FAB9] cursor-pointer flex justify-center items-center [transition:all_0.25s] hover:bg-[#D2649A] hover:opacity-75`,
            disabled && 'opacity-75 cursor-not-allowed', className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button";

export default Button;

