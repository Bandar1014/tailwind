
function NavBar() {
  return (
    <>
    <nav className="flex justify-between px-10 py-5 bg-purple-500 ">
    <div>
        <img className="w-32" src="./src/assets/logo.svg" alt="" />
    </div>
    <ul className="flex gap-10 text-2xl text-white pt-5 ">
        <li><a href="/Home">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/LogIn">LogIn</a></li>
        
    </ul>
    </nav>
    </>
  )
}

export default NavBar