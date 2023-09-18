import { useEffect, useState } from "react";
import AdminLayout from "./adminLayout";
import style from '@/styles/bookingListing.module.css'
import moment from "moment/moment";

export default function BookingList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getBookingList()
    }, [])

    function getBookingList() {
        fetch('/api/getReservations', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                console.log('JSON:', json);
                setData(json)
            })
    }

    function loadBookingList(data) {

    }

    return (
        <AdminLayout>

            <table className={style.listTable}>
                <thead className={style.tableHead}>
                    <tr>
                        <th>Id</th>
                        <th>Reserva</th>
                        <th>Data de entrada</th>
                        <th>Data de saida</th>
                        <th>Pessoas</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                
                {data.map((booking, index) => (
                    
                    <tr key={index} className={`${style.tableRow} ${index === data.length -1 ? style.lastRow : ""} ${index % 2 === 1 ? style.rowV1 : style.rowV2}`}>
                        <th>{booking.id}</th>
                        <th>{booking.bookingName}</th>
                        <th>{moment(booking.bookingEntryDate).format('YYYY-MM-DD')}</th>
                        <th>{moment(booking.bookingLeftDate).format('YYYY-MM-DD')}</th>
                        <th>
                            <ul>
                                {booking.people.map((person, personIndex) => (
                                    <li key={personIndex}>{person.name}</li>
                                ))}
                            </ul>
                        </th>
                        <th>
                            <ul className={style.flex_col}>
                                <button className={style.btn_update}>Atualizar</button>
                                <button className={style.btn_delete}>Remover</button>
                            </ul>
                        </th>
                    </tr>
                ))}
            </table>


        </AdminLayout>
    )
}
