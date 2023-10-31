import { Navigate, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <div className="bg-slate-900 flex grid-rows-2 justify-center h-screen w-auto p-5">
          <div className="text-white text-center ">
            <h1 className="text-4xl font-bold font-sans">
              <label className="text-purple-700">Gallery</label> Razz <br />
              Selamat Datang Di{" "}
              <label className="text-purple-700">Gallery</label> Razz
            </h1>
            <div className=" mt-5 grid max-sm:grid-flow-row grid-flow-col auto-cols-auto ">
              <div >
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2"
              onClick={() => navigate('/login')}>Form Login</button>
              </div>
              <div>
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => navigate('/create-account')}>Form Register</button>
              </div>
              <div>
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => navigate('/form-perpustakaan')}>Form Formulir Pendaftaran</button>
              </div>
              <div >
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => navigate('form-pendaftaran')}>Formulir Keanggotaan</button>
              </div>
              <div className="">
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => navigate('/todo')}>List Todo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
