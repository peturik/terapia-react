import { Outlet } from "react-router-dom";
import { AsideLab } from "./aside/AsideLab";
// import { usePathname } from "next/navigation";

export default function LayoutPracownie() {
  //   const pathname = usePathname();

  return (
    <div className="container" id="pracowni">
      <div className="row flex-wrap">
        <AsideLab />
        <div className="main__content col  col__article-pracownie md:rounded-r-2xl">
          <div className="pracowni-container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
