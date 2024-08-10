export default function AddForm() {
    return (
        <form>
            <h2 className="text-[#8E3E63] text-[16px] font-bold">
                Add a todo
            </h2>
            <input 
            type="text"
            className="h-[45px] w-full border-[1px] border-[rgba(0,0,0,0.12)] rounded-[5px] ml-[0] mr-[0] my-[9px] px-[16px] py-[9] text-[14px]"
            />
        </form>
    )
}