import Layout from "../layout/Layout";
import { useCallback, useEffect } from "react";
import useKiosk from "../hooks/useKioks";
import { formatearDinero } from "../helpers";
export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useKiosk();
  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);
  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina={"Resumen"}>
      <h1 className="text-4xl font-black">Total</h1>
      <p className="text-2xl my-10">Confirm your Order Below</p>
      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Name
          </label>
          <input
            type="text"
            id="nombre"
            className="bg-gray-300 w-full lg:w-1/3 mt-3  p-2 rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total Payable
            <span className="font-bold"> {formatearDinero(total)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`${
              comprobarPedido()
                ? "bg-indigo-100 hover:cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-800 cursor-pointer"
            }  w-full lg:w-auto px-5 py-2 rounded font-bold uppercase text-white text-center`}
            value="Confirm Order"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
