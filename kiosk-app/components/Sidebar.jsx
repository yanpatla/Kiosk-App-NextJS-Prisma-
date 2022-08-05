import Image from "next/image";
import useKiosk from "../hooks/useKioks";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useKiosk();
  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="Img Logo"
      />
      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
