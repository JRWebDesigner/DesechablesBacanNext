
import { useCarrito } from "../context/CarritoContext";
export default function Modal({ product, closeModal }) {
  const { añadirAlCarrito } = useCarrito();

  const aniadido = () => {
    alert("Agregado correctamente");
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
      <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-wrap justify-center items-center gap-7">
        <button
          onClick={closeModal}
          className="bg-gray-200 top-2 right-2 text-2xl px-4 py-2 rounded-full hover:bg-red-600 absolute hover:text-white"
        >
          X
        </button>
        <img
          src={product.imageUrl}
          alt={product.altText}
          className="w-[300px] md:w-[400px] h-auto rounded"
        />
        <div className="w-[90%] max-w-[500px] min-w-[300px] flex justify-center items-center flex-col">
          <h2 className="text-2xl font-bold mt-4">
            {product.name} ----- {product.price} Bs.
          </h2>
          <small className="text-gray-700 mt-2 uppercase">{product.mark}</small>
          <div>
            <h3>Descripción</h3>
            <p>{product.description}</p>
          </div>
          <div className="mt-4 flex justify-around gap-10">
            <button
              onClick={() => {
                añadirAlCarrito(product);
                aniadido();
              }}
              className="flex justify-center items-center bg-blue-600 px-4 py-2 text-sm rounded-full hover:scale-105 text-white"
            >
              Añadir
            </button>
            <a
              href={`https://wa.me/+59163524798?text=Hola!%20Estoy%20interesado%20en%20${product.name}%20,marca%20${product.mark}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
