import ResumenProducto from "../components/ResumenProducto";
import useKiosk from "../hooks/useKioks";
import Layout from "../layout/Layout";
export default function Resumen() {
  const { pedido } = useKiosk();
  return (
    <Layout pagina={"Resumen"}>
      <h1 className="text-4xl font-black">Sumary</h1>
      <p className="text-2xl my-10">Check your order</p>

      {pedido.length === 0 ? (
        <p className="text-center text-2xl ">
          There are no items in your order
        </p>
      ) : (
        pedido?.map((producto) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
