
export default function ProductoCard({ product, openModal }) {
    return (
      <div
          id={product._id} 
        onClick={() => openModal(product)}
        className="flex flex-col justify-center items-center shadow-xl w-[240px] p-4 text-xl font-bold gap-3 rounded-3xl hover:scale-[1.05] hover:bg-gray-100 duration-500  cursor-pointer"
      >
        <div className="flex flex-col justify-around items-center gap-4">
          <img src={product.image} alt={product.name} />
          <div className="flex justify-center items-center gap-2">
          <span>{product.name}</span>
          <small>{product.price} Bs.</small>
          </div>
        </div>
        <small className="text-black uppercase">{product.mark}</small>
      </div>
    );
  }
  
