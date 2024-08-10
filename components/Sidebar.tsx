import AddForm from "./AddForm";
import Button from "./Button";

export default function Sidebar() {
    return (
        <div className="col-[2_/_3] row-[2_/_3] bg-[#CAE6B2] pt-[18px] px-[25px] pb-[28px] flex flex-col justify-between border-l border-l-[rgba(0,0,0,0.08)">
            <AddForm />

            <div className="space-y-2">
                <Button>
                    Login
                </Button>
                <Button>
                    Register
                </Button>
            </div>
        </div>
    )
}