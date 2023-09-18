import { useState } from "react";
import AdminLayout from "./adminLayout";
import style from '@/styles/bookingGenerator.module.css'

export default function BookingGenerator(){

    const [qtdPeople, setQtdPeople] = useState(0);
    
    return(
        <AdminLayout>
            <h1 className={style.formTitle}>Criar nova reserva</h1>
            <form className={style.formGenerator}>
                <div className={style.form_flex_group}>
                    <label htmlFor="inputDataEntrada">Data de entrada</label>
                    <input type="date" id="inputDataEntrada" name="bookingEntryDate" placeholder="Data de entrada"></input>
                </div>
                <div className={style.form_flex_group}>
                    <label htmlFor="inputDataSaida">Data de saida</label>
                    <input type="date" id="inputDataSaida" name="bookingLeftDate" placeholder="Data de entrada"></input>
                </div>
                <div className={`${style.form_flex_group}`}>
                    <label htmlFor="inputPessoasAdicionar">Quantidade de pessoas</label>
                    <input type="number" value={qtdPeople} onChange={(e) => setQtdPeople(e.target.value)} id="inputPessoasAdicionar" name="peopleQuantity" placeholder="Quantidade de pessoas"></input>
                </div>
                <div></div>
                
            </form>
        </AdminLayout>
    )
}