import Dashnav from "../../Component/Dashnav"
import MessagesDashboard from "../../Component/MessageDashboard"
export default function MessagesPage(){
    return(
        <section className="flex flex-col gap-2">
<Dashnav/>
<MessagesDashboard />
        </section>
    )
}