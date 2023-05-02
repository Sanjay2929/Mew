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
            className=" btn-primary position-fixed bottom-0 end-0 me-4 mb-4"
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
