import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddForm from "./AddForm";
import Buttons from "./Buttons";

export default function Sidebar() {
    const { isAuthenticated, isLoading, user, login, register, logout } = useKindeAuth();
    return (
        <div className="col-[2_/_3] row-[2_/_3] bg-[#CAE6B2] pt-[18px] px-[25px] pb-[28px] flex flex-col justify-between border-l border-l-[rgba(0,0,0,0.08)]">
            <AddForm />

            <div className="space-y-2">
                {isLoading ? null : isAuthenticated ? (
                    <>
                    <p className="text-sm">
                        Logged in as {user?.email}
                    </p>
                    <Buttons 
                    buttonType="secondary" 
                    onClick={() => logout()}>
                        Log out
                    </Buttons>           
                    </>
                ):(
                    <>                    
                    <Buttons
                    buttonType="secondary"
                    onClick={() => login()}
                    >
                        Login
                    </Buttons>
                    <Buttons 
                    buttonType="secondary"
                    onClick={() => register()}
                    >
                        Register
                    </Buttons>
                    </>
                )}
            </div>
        </div>
    )
}