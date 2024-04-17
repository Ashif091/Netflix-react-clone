import {Link, useNavigate} from "react-router-dom"
import {UserAuth} from "../context/AuthContext"

function Navbar() {
  const auth = UserAuth()
  if (!auth) {
    throw new Error("Auth context is null")
  }
  const {user, logOut} = auth
  const navigate = useNavigate()
  const hadleLogOut = async () => {
    try {
      await logOut()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to={"/"}>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="flex flex-col justify-center items-center sm:flex-row  item-center">
          <Link to={"/account"}>
            <button className="text-white pr-4">Account</button>
          </Link>

          <button onClick={hadleLogOut} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            LogOut
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center sm:flex-row  item-center">
          <Link to={"/login"}>
            <button className="text-white pr-4">Sign IN</button>
          </Link>
          <Link to={"/signUp"}>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sign up</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
