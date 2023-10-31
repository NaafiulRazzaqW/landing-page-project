import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()

    return (
  
      <div>
        <div className="flex justify-start">
          <h3> <b> Already Registered? Login Here</b></h3>
          <br />
          <br />
        </div>
        <div className="flex justify-center ">
          <div className="w-96 h-[110px] bg-auto bg-blue-700 border-2 border-stone-400 flex justify-end text-right">
            Email:
            <br />
            Password:
          </div>
  
          <div className="w-96 h-[110px] bg-auto border-l-0 b border-2 border-stone-400 ">
            <form action="" onSubmit={() => navigate('/Createaccount')}>
                <input type="text" className="flex justify-end border-2 border-stone-400" required />
                <input type="text" className="flex justify-end border-2 border-stone-400" required />
                <label className="flex justify-start">
              <input type="checkbox" />
              Save my email and password
            </label>
            <div className="flex justify-start ml-2">
            <button  type="submit" className="bg-slate-200 w-[130px] rounded-md">
              Continue&gt;&gt;
            </button>
            <button className="bg-slate-200 w-[130px] rounded-md ml-3">
              Reset
            </button>
            </div>
            </form>
            
              
            
            
            
  
          </div>
  
        </div>
      </div>
  
    );
  }
  
  export default Login;