interface img {
    src:string
    
}

function Card(props:img) {
  return (
    <>
    
        <div className='  w-96 h-96 h-fit drop-shadow-lg rounded-xl border-r'>
            <img className="w-full object-cover h-3/4 p-2 rounded-t-xl" src={props.src} alt="" />
            <p className='p-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptatibus veritatis tenetur ut doloribus voluptates, quisquam dolore, similique eveniet recusandae dolorum! Architecto ea cupiditate nihil sapiente repellendus similique est deleniti!</p>

            

        </div>
    </>
  )
}

export default Card