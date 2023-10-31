import { useState } from "react";
import Swal from "sweetalert2";

export default function Register() {
  const [nama, setNama] = useState("");
  const [noPekerja, setNoPekerja] = useState("");
  const [noHandphone, setHandphone] = useState("");
  const [noRumah, setNoRumah] = useState("");
  const [noKantor, setNoKantor] = useState("");
  const [unit, setUnit] = useState("");
  const [departemen, setDepartemen] = useState("");
  const [tempat, setTempat] = useState("");
  const [date, setDate] = useState("");
  const [alamat, setAlamat] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!image) return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tolong Isi Image Anda!",
      });
    if (!noHandphone && !noRumah && !noKantor)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tolong Masukkan Nomer Telephone",
      });
    Swal.fire({
      icon: "success",
      title: "Success",
      html:
        `<p>Nama Anda: ${nama}</p>` +
        `<p>Nomer Pekerja Anda: ${noPekerja}</p>` +
        (!noHandphone == false
          ? `<p>Nomer Handphone Anda: ${noHandphone}</p>`
          : "") +
        (!noKantor == false ? `<p>Nomer Rumah Anda: ${noRumah} </p>` : "") +
        (!noKantor == false ? `<p>Nomer No Kantor: ${noKantor} </p>` : "") +
        `<p>Unit Anda: ${unit} </p>` +
        `<p>Departemen Anda: ${departemen} </p>` +
        `<p>Tempat Lahir Anda: ${tempat} </p>` +
        `<p>Tanggal Lahir Anda: ${date} </p>` +
        `<p>Alamat Anda: ${alamat} </p>`,
      imageUrl: `${image}`,
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="shadow-md  bg-blue-100 rounded-md">
          <div className="p-10 flex justify-center text-start font-sans font-semibold">
            <form onSubmit={handleSubmit} className="">
              <div className="grid grid-cols-2 gap-3">
                <h1 className="col-span-2 text-[30px] font-bold">
                  Formulir Pengerjaan
                </h1>
                <h3 className="col-span-2 text-gray-400 font-semibold">
                  Isikan data dibawah dengan benar!
                </h3>
                <div>
                  <label htmlFor="" className="">
                    Nama:
                    <input
                      type="text"
                      className="flex justify-end border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                      onChange={(e) => {
                        setNama(e.target.value);
                      }}
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="">
                    No Pekerja:
                  </label>
                  <input
                    type="number"
                    onChange={(e) => {
                      setNoPekerja(e.target.value);
                    }}
                    className=" border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    required
                  />
                </div>
                <div className=" text-center col-span-2">No Telephone:</div>
                <div className="text-center">
                  <input
                    type="number"
                    className="flex justify-end border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    placeholder="Hp"
                    onChange={(e) => {
                      setHandphone(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col text-center">
                  <input
                    type="number"
                    className=" border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    onChange={(e) => {
                      setNoRumah(e.target.value);
                    }}
                    placeholder="Rumah"
                  />
                </div>
                <div className="text-center col-span-2 ">
                  <input
                    type="number"
                    className=" border-2 border-stone-400 w-full drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    placeholder="Kantor"
                    onChange={(e) => {
                      setNoKantor(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="">
                    Unit:
                  </label>
                  <input
                    type="text"
                    className=" border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    required
                    onChange={(e) => {
                      setUnit(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="">
                    Departemen:
                  </label>
                  <input
                    type="text"
                    className="border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    required
                    onChange={(e) => {
                      setDepartemen(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="">
                    Tempat Lahir:
                  </label>
                  <input
                    type="text"
                    className=" border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    required
                    onChange={(e) => {
                      setTempat(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="">
                    Date:
                  </label>
                  <input
                    type="date"
                    className=" border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    required
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="" className="">
                    Alamat:
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="50"
                    rows="3"
                    onChange={(e) => {
                      setAlamat(e.target.value);
                    }}
                    className="flex justify-end border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <label for="img">Select Image:</label>
                  <input
                    className="flex justify-end "
                    type="file"
                    id="img"
                    onChange={(e) => {
                      if (!e.target.files[0])
                        return Swal.fire({
                          icon: "error",
                          title: "Oops...",
                          text: "Tolong Image Anda!",
                        });
                      setImage(URL.createObjectURL(e.target.files[0]));
                    }}
                  />
                  <img src={image} className="max-h-[200px] w-[320px]" />
                </div>
                <div className="col-span-2">
                  <div className="flex justify-center">
                    <button
                      className="bg-transparent hover:bg-blue-500 
               text-blue-700 font-semibold 
               hover:text-white py-2 px-4 border 
               border-blue-700 
               hover:border-transparent rounded"
                    >
                      Submit
                    </button>
                    <button
                      className="ml-4 bg-transparent hover:bg-blue-500 
               text-blue-700 font-semibold 
               hover:text-white py-2 px-4 border 
               border-blue-700 
               hover:border-transparent rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
