
function LogIn() {
  return (
    <>
    <div className="flex flex-col items-center  gap-3">
    <input className="border border-black w-fit " type="text" placeholder="User name" />
    <input className="border border-black w-fit" type="text" placeholder="Password" />
    <button>LogIn</button>
    </div>
    </>
  )
}

export default LogIn