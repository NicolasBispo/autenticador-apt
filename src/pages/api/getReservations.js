import BookingController from "@/controllers/bookingController";


export default async function getReservations(req, res) {
    if(req.method === 'GET'){
        console.log('Chegou');
        await BookingController.getAllBookings(req,res);
    }
    else{
        res.end()
    }
}