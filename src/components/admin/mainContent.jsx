
import BookingGenerator from "../../pages/admin/bookingGenerator";
import BookingList from "../../pages/admin/bookingListing";




export default function MainContent(props) {

    return (
        <>
            <Routes>
                <Route path="/admin/gerarReservas"><BookingGenerator></BookingGenerator></Route>
                <Route path="/admin/visualizarReservas"><BookingList></BookingList></Route>
            </Routes>
        </>
    )




}