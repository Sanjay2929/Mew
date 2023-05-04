import React from "react";
import { TbArrowBigUpLines } from "react-icons/tb";

const BackToTop = () => {
  const [backTop, setBackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      <div>
        {backTop ? (
          <div
            onClick={moveToTop}
            className=" btn-primary position-fixed bottom-0 end-0 me-sm-4 mb-sm-4 me-2 mb-2"
          >
            <TbArrowBigUpLines />
          </div>
        ) : (
          ""
        )}
        <div></div>
      </div>
    </>
  );
};

export default BackToTop;
