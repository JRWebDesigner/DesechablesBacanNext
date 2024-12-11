import products from '../products.json'
export default function Belen(){
    return(
      <>
				<h1 data-aos='fade-up' className="text-center font-bold text-3xl mt-20">Belen</h1>
        <div className="flex flex-wrap justify-around items-center gap-5 m-10">
				{
        products.filter((prod)=>prod.mark.toUpperCase()==='BELEN').length===0?(
          <div className='flex justify-center items-center text-2xl'>Se nos acabo los Productos de la marca Belen</div>
        ):(
        products
  .filter((prod) => prod.mark.toUpperCase() === 'BELEN')
  .map((prod) => (
    <div 
      key={prod.id} 
      className="flex flex-col justify-center items-center border-blue-950 border-2 w-[240px] p-4 text-xl font-bold gap-3 rounded-3xl hover:scale-[1.05] hover:bg-gray-100 duration-500 translate-y-14 scale-50"
    >
      <img 
        src={prod.img} 
        alt={prod.name} 
      />
      <span>
        {prod.name}
      </span>
      <small 
        className="text-black"
      >
        {prod.mark}
      </small>
      <div className="w-full flex justify-around items-center text-sm gap-3 font-semibold">
        <button className="bg-green-400 p-2 rounded-xl hover:scale-110">AÑADIR</button>
      </div>
    </div>
  )))}
        </div>
      </>
    )
}