import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="col-[1/3] bg-[#D2649A] flex justify-between items-center px-[28px] py-[0]">
            <Logo />
            <Counter />
        </header>
    )
}