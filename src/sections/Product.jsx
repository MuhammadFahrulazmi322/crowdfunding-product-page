import Button from "../components/Button";
import { backers } from "../constants";
import { logoMastercraft } from "../assets/images";
import { IconBookmark } from "../assets/images/icon-bookmark";
import { useState } from "react";
function Product({ openModal }) {
  const [bookmark, setBookmark] = useState(true);

  return (
    <section className="flex flex-col items-center gap-6 xl:gap-10 relative -translate-y-12">
      <img src={logoMastercraft} alt="" width={56} className="" />
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-extrabold text-xl xl:text-2xl max-w-[250px] lg:max-w-full text-center">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="max-w-[300px] lg:max-w-full text-center text-sm  text-dark-gray ">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="flex gap-2 items-center lg:justify-between justify-center w-full">
        <Button label={"Back this project"} onClick={openModal} />
        <div className="flex gap-4 items-center lg:bg-gray-200 lg:rounded-full lg:pr-8">
          <div
            onClick={() => {
              setBookmark(!bookmark);
            }}
          >
            <IconBookmark
              bgFill={bookmark ? "fill-black" : "fill-dark-cyan"}
              iconFill={bookmark ? "fill-gray-400" : "fill-white"}
              className={""}
            />
          </div>
          <p
            className={`
            ${
              bookmark ? "text-dark-gray" : "text-dark-cyan"
            } text-lg max-lg:hidden lg:block font-bold
             
            `}
          >
            {bookmark ? "Bookmark" : "Bookmarked"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Product;
