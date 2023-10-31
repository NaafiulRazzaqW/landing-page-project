import { useState } from "react";
import Swal from "sweetalert2";

export default function Perpustakaan() {
  const [nama, setNama] = useState("");
  const [npm, setNPM] = useState("");
  const [semester, setSemester] = useState("");
  const [noHp, setNoHp] = useState("");
  const [email, setEmail] = useState("");
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
    Swal.fire({
      icon: "success",
      title: "Success",
      html:
        `<p>Nama Anda: ${nama}</p>` +
        `<p>Tempat Lahir Anda: ${tempat} </p>` +
        `<p>Tanggal Lahir Anda: ${date} </p>` +
        `<p>Alamat Anda: ${alamat} </p>` +
        `<p>NPM Anda: ${npm}</p>` +
        `<p>Tingkatan/Semester Anda: ${semester} </p>` +
        `<p>No.HP Anda: ${noHp} </p>` +
        `<p>Email Anda: ${email} </p>` 
        ,
        
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
                  Formulir Perpustakaan
                </h1>
                <h3 className="col-span-2 text-gray-400 font-semibold">
                  Isikan data dibawah dengan benar!
                </h3>
                <div className="flex flex-col col-span-2">
                  <label htmlFor="" className="">
                    Nama:
                  </label>
                  <input
                    type="text"
                    className=" border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    onChange={(e) => {
                      setNama(e.target.value);
                    }}
                    required
                    placeholder="Masukkan Nama Anda"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="">
                    Tempat Lahir:
                  </label>
                  <input
                    type="text"
                    className="placeholder placeholder:text-[14px] border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    required
                    onChange={(e) => {
                      setTempat(e.target.value);
                    }}
                    placeholder="Masukkan Tempat Lahir Anda"
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
                <div className="flex flex-col col-span-2">
                  <label htmlFor="" className="">
                    Alamat:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setAlamat(e.target.value);
                    }}
                    className=" border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    required
                    placeholder="Masukkan Alamat Anda"
                  />
                </div>
                <div className="flex flex-col col-span-2">
                  <label htmlFor="" className="">
                    NPM:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setNPM(e.target.value);
                    }}
                    className=" border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    required
                    placeholder="Masukkan NPM Anda"
                  />
                </div>
                <div className="flex flex-col col-span-2">
                  <label htmlFor="" className="">
                    Tingkat/Semester :
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setSemester(e.target.value);
                    }}
                    className=" border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    required
                    placeholder="Masukkan Tingkat/Semester Anda"
                  />
                </div>
                <div className="flex flex-col col-span-2">
                  <label htmlFor="" className="">
                    No.HP :
                  </label>
                  <input
                    type="number"
                    onChange={(e) => {
                      setNoHp(e.target.value);
                    }}
                    className=" border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    required
                    placeholder="Masukkan Nomer Anda"
                  />
                </div>
                <div className="flex flex-col col-span-2">
                  <label htmlFor="" className="">
                    E-Mail :
                  </label>
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className=" border-2 border-stone-400 drop-shadow-md focus:drop-shadow-xl focus:outline-blue-500"
                    required
                    placeholder="yourname@example.com"
                  />
                </div>
                <div className="col-span-2">
                  <label for="img">Select Image:</label>
                  <input
                    className="flex justify-end "
                    type="file"
                    id="img"
                    onChange={(e) => {
                        if(!e.target.files[0]) return
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Tolong Isi Image Anda!",
                          });
                      setImage(URL.createObjectURL(e.target.files[0] ?? null));
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
