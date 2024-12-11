import products from './products.json'

export default function Productos() {
    return (
        <>
			<h1 className="text-center uppercase font-bold text-3xl mt-10">Todos nuestros productos</h1>
            <div className="flex flex-wrap justify-center items-center gap-7 m-10">
            {
                products.map((prod)=>(
                    <div 
      key={prod.id} 
      className="flex flex-col justify-center items-center border-blue-950 border-2 w-[240px] p-4 text-xl font-bold gap-3 rounded-3xl hover:scale-[1.05] hover:bg-gray-100 duration-500"
    >
      <img 
        src={prod.img} 
        alt={prod.name} 
      />
      <span>
        {prod.name}
      </span>
      <small 
        className="text-black uppercase"
      >
        {prod.mark}
      </small>
      <div className="w-full flex justify-around items-center text-sm gap-3 font-semibold">
        <button className="bg-green-400 p-2 rounded-xl hover:scale-110">AÑADIR</button>
      </div>
    </div>
                ))
            }
            </div>
        </>
    )
}