const Bookings = require("@/models/Bookings")
const Database = require('@/models/Database')
const BookingController = {
    
    async getAllBookings(req,res){
        try{
            await Database.sync()
            const bookingsList = await Bookings.findAll();
            res.status(200).json(bookingsList);
        }
        catch(error){
            console.log('Error:', error)
            res.status(400).json(error);
        }
    }
}
module.exports = BookingController;