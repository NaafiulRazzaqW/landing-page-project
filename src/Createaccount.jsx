import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Createaccount() {
  const navigate = useNavigate();
  // const [name, email, alternateEmail, countryCode, cityCode, phoneNumber, mobilePhone,
  // portalAddress, country, password, reEnterPassword , setName] = useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`Your Name: ${name}`);
  //   alert(`Your Email: ${email}`);
  //   alert(`Your Alternate Email: ${alternateEmail}`);
  //   alert(`Your Country Code: ${countryCode}`);
  //   alert(`Your City Code: ${cityCode}`);
  //   alert(`Your Phone Number: ${phoneNumber}`);
  //   alert(`Your Mobile Phone: ${mobilePhone}`);
  //   alert(`Your Portal Address: ${portalAddress}`);
  //   alert(`Your Country: ${country}`);
  //   alert(`Your Password: ${password}`);
  //   alert(`Your Re-Enter Password: ${reEnterPassword}`);

  // }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  

  const handleSubmit = () => {
    
    alert(
      `
      Your Name: ${name}
      Your Email: ${email}
      `);
    
  }

  return (
    <div>
      <div className="flex justify-start">
        <h3>
          {" "}
          <b> Create Account-Register</b>
        </h3>
        <br />
        <br />
      </div>
      <div className="flex justify-center ">
        <div className="w-48 h-[510px] bg-auto bg-blue-700 border-2 border-stone-400 flex justify-end text-right px-1">
          Your Name:
          <br />
          E-mail ID:
          <br />
          Alternate E-mail ID:
          <br />
          <br />
          <br />
          Your Phone:
          <br />
          Mobile Phone:
          <br />
          Your Portal Address:
          <br />
          <br />
          <br />
          <br />
          <br />
          Country:
          <br />
          Password:
          <br />
          Re-Enter-Password:
        </div>

        <div className="w-[520px] h-[510px] bg-auto border-l-0 b border-2 border-stone-400 ">
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                className="flex justify-end border-2 border-stone-400"
              />
            </label>
          </form>
          <form onSubmit={handleSubmit} >
            <label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                className="flex justify-end border-2 border-stone-400"
              />
            </label>
          </form>
          <form>
            <label>
              <input
                
                type="text"
                className="flex justify-end border-2 border-stone-400"
              />
            </label>
          </form>
          Country Code-------------------City Code--------------Phone Number
          <div className="flex row">
            <form >
              <label>
                <input
                  
                  type="text"
                  className="flex justify-end border-2 border-stone-400 w-[180px]"
                />
              </label>
            </form>
            <form>
              <label>
                <input
                  type="text"
                  className="flex justify-end border-2 border-stone-400 ml-1 w-[180px]"
                />
              </label>
            </form>
            <form>
              <label>
                <input
                  type="text"
                  className="flex justify-end border-2 border-stone-400 ml-1 w-[130px]"
                />
              </label>
            </form>
          </div>
          <form>
            <label>
              <input
                type="text"
                className="flex justify-end border-2 border-stone-400"
              />
            </label>
          </form>
          <textarea
            name="textrich"
            id=""
            cols="30"
            rows="4"
            className="flex justify-end border-2 border-stone-400"
          ></textarea>
          <br />
          <select name="cars" id="cars" 
          className="flex justify-end border-2 border-stone-400">
            <option value="">------Select One-----</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Belgia">Belgia</option>
            <option value="Jerman">Jerman</option>
            <option value="Japan">Japan</option>
          </select>
          <form>
            <label>
              <input
                type="text"
                className="flex justify-end border-2 border-stone-400"
              />
            </label>
          </form>
          <form>
            <label>
              <input
                type="text"
                className="flex justify-end border-2 border-stone-400"
              />
            </label>
          </form>
          <label className="flex justify-start">
            <input type="checkbox" />
            I accept the  <a href="">
              <font className="ml-1"color="0802A3">
              <u>Terms of Use</u>
              </font>
              </a>
          </label>
          <div className="flex justify-start ml-2">
            <button
              onClick={() => handleSubmit()}
              className="bg-slate-200 w-[130px] rounded-md"
            >
              Continue&gt;&gt;
            </button>
            <button className="bg-slate-200 w-[130px] rounded-md ml-3">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createaccount;
