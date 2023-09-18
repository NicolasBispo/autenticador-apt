import { useEffect, useState } from "react";
import AdminLayout from "./adminLayout";
import style from "@/styles/bookingGenerator.module.css";

export default function BookingGenerator() {
    const [qtdPeople, setQtdPeople] = useState(0);
    const [htmlPeople, setHtmlPeople] = useState([]);

    function loadHtmlPeople() {
        const htmlPeopleArray = [];
        for (let i = 0; i < parseInt(qtdPeople); i++) {
            htmlPeopleArray.push(
                <>
                    <h1 className={style.h1Hospede}>{`${i + 1}`}ª Hóspede</h1>
                    <div className={style.form_flex_group}>
                        <label htmlFor={`inputNomeHospede${i}`}>Nome</label>
                        <input
                            type="text"
                            id={`inputNomeHospede${i}`}
                            name={`nomeHospede${i}`}
                            placeholder={`Nome do hóspede ${i + 1}`}
                        ></input>
                    </div>
                    <div className={style.form_flex_group}>
                        <label htmlFor={`inputRgHospede${i}`}>RG</label>
                        <input
                            type="text"
                            id={`inputRgHospede${i}`}
                            name={`rgHospede${i}`}
                            placeholder={`RG do hóspede ${i + 1}`}
                        ></input>
                    </div>
                    <div className={style.form_flex_group}>
                        <label htmlFor={`inputCpfHospede${i}`}>CPF</label>
                        <input
                            type="text"
                            id={`inputCpfHospede${i}`}
                            name={`cpfHospede${i}`}
                            placeholder={`CPF do hóspede ${i + 1}`}
                        ></input>
                    </div>
                </>
            );
        }
        setHtmlPeople(htmlPeopleArray);
    }

    useEffect(function () {
        loadHtmlPeople();
    }, [qtdPeople]);

    return (
        <AdminLayout>
            <h1 className={style.formTitle}>Criar nova reserva</h1>
            <form className={style.formGenerator}>
                <div className={style.form_flex_group}>
                    <label htmlFor="inputDataEntrada">Data de entrada</label>
                    <input
                        type="date"
                        id="inputDataEntrada"
                        name="bookingEntryDate"
                        placeholder="Data de entrada"
                    ></input>
                </div>
                <div className={style.form_flex_group}>
                    <label htmlFor="inputDataSaida">Data de saída</label>
                    <input
                        type="date"
                        id="inputDataSaida"
                        name="bookingLeftDate"
                        placeholder="Data de saída"
                    ></input>
                </div>
                <div className={`${style.form_flex_group}`}>
                    <label htmlFor="inputPessoasAdicionar">Quantidade de pessoas</label>
                    <input
                        type="number"
                        value={qtdPeople}
                        onChange={(e) => setQtdPeople(e.target.value)}
                        id="inputPessoasAdicionar"
                        name="peopleQuantity"
                        placeholder="Quantidade de pessoas"
                    ></input>
                </div>
                <div className={style.voidDiv}></div>
                
                {htmlPeople.map((htmlPerson, index) => (
                    <div key={index} className={style.form_grid_3}>{htmlPerson}</div>
                    
                ))}
            </form>
        </AdminLayout>
    );
}
