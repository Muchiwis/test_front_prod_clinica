import { DatePicker } from "antd";
import locale from "antd/lib/date-picker/locale/es_ES";
import { useState } from "react";
import dayjs from "dayjs";

export default function IconDemo() {
  const [valorHora, setValorHora] = useState("00:00");
  const [valorFecha, setValorFecha] = useState("00-00-0000");
  const [listaHora, setListaHora] = useState(Array().fill(null));

  const listaHorariosUno = [
    { valorHora: "uno", hora: "01:00" },
    { valorHora: "dos", hora: "02:00" },
    { valorHora: "tres", hora: "03:00" },
  ];

  const listaHorariosDos = [
    { valorHora: "one", hora: "13:00" },
    { valorHora: "two", hora: "14:00" },
    { valorHora: "three", hora: "15:00" },
  ];

  function changeHour(date) {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setValorFecha(formattedDate);
    setListaHora(listaHorariosDos);
  }

  function handleInputChange(data) {
    setValorHora(data.target.value);
    //console.log(data.target.value);
  }

  function sendData() {
    console.log(valorHora);
    console.log(valorFecha);
  }
  return (
    <div className="flex justify-center items-center bg-gray-900 h-screen">
      <div className="basis-5/12 mx-2">
        <DatePicker
          className="w-full text-gray-900 placeholder:text-red-900 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Seleccione una fecha"
          onChange={changeHour}
          locale={locale}
        />
      </div>
      <div className="basis-2/12 mx-2">
        <select
          name=""
          id=""
          className="rounded-md py-1"
          onChange={handleInputChange}
        >
          {listaHora.length > 0 ? (
            listaHora.map((item, index) => (
              <option key={index} value={item.valorHora}>
                {item.hora}
              </option>
            ))
          ) : (
            <option value="null">Seleccione una hora</option>
          )}
        </select>
      </div>
      <div className="basis-2/12 mx-2">
        <button
          className="bg-blue-600 text-white py-1 px-4 rounded-md"
          onClick={sendData}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
