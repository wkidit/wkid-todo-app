interface ButtonsProps {
    buttonType?: "primary" | "secondary";
    onClick?: () => void;
    children: React.ReactNode;
  }
  
  export default function Buttons({ buttonType = "primary", onClick, children }: ButtonsProps) {
    return (
      <button
        onClick={onClick}
        className={`h-[45px] w-full border-[none] rounded-[5px] bg-[#8E3E63] text-[#F6FAB9] text-[16px] cursor-pointer flex justify-center items-center [transition:all_0.2s] hover:bg-[#322618]
   ${buttonType === "secondary" ? "text-[14px] opacity-[0.85]" : ""}`}
      >
        {children}
      </button>
    );
  }
  