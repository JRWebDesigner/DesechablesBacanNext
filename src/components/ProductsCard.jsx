
export default function ProductoCard({ product, openModal }) {
    return (
      <div
        onClick={() => openModal(product)}
        className="flex flex-col justify-center items-center shadow-xl w-[240px] p-4 text-xl font-bold gap-3 rounded-3xl hover:scale-[1.05] hover:bg-gray-100 duration-500 translate-y-14 scale-50 cursor-pointer"
      >
        <img src={product.imageUrl} alt={product.altText} />
        <div className="flex justify-around items-center gap-4">
          <span>{product.name}</span>
          <small>{product.price} Bs.</small>
        </div>
        <small className="text-black uppercase">{product.mark}</small>
      </div>
    );
  }
  