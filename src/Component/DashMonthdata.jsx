import { FaArrowUp, FaArrowDown } from "react-icons/fa";


export default function DashMonthdata(){
    return(
        <div className="flex flex-col gap-3 bg-[#fff] p-4 rounded-2xl">
            <div className="flex items-center">

                {/*Data  */}
                <div className="flex flex-col items-start gap-1">
                    <span>1235 <FaArrowUp/></span>
                    <span>Visitors this month</span>
                    
                </div>
                </div>
                <div className="border-[1px] border-gray-100 h-[1px]"></div>
                 {/*Data  */}
                 <div className="flex items-center">

                <div className="flex flex-col items-start gap-1">
                    <span>456 <FaArrowDown/></span>
                    <span>Enquires this month</span>
                    
                </div>
                 </div>
            
        </div>
    )
}