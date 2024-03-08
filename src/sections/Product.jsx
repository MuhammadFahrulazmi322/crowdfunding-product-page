import Button from "../components/Button";
import { backers } from "../constants";
import { logoMastercraft } from "../assets/images";
import { IconBookmark } from "../assets/images/icon-bookmark";
import { useState } from "react";
function Product({ openModal }) {
  const [bookmark, setBookmark] = useState(false);

  return (
    <section className="relative -top-14 rounded-lg  lg:px-40">
      <div className="flex flex-col gap-8">
        <div className="bg-white">
          <div className="flex flex-col justify-center items-center gap-5 lg:gap-10 px-2 relative -top-7">
            <img src={logoMastercraft} alt="" width={56} />
            <div className="flex flex-col gap-2 items-center">
              <h1 className="font-bold text-xl lg:text-2xl xl:text-3xl max-w-[250px] lg:max-w-full text-center">
                Mastercraft Bamboo Monitor Riser
              </h1>
              <p className="max-w-[300px] lg:max-w-full text-center text-sm lg:text-lg text-dark-gray ">
                A beautiful & handcrafted monitor stand to reduce neck and eye
                strain.
              </p>
            </div>
            <div className="flex gap-2 items-center lg:justify-between justify-center w-full">
              <Button label={"Back this project"} onClick={openModal} />
              <div className="flex gap-4 items-center lg:bg-gray-200 lg:rounded-full lg:pr-8">
                <button
                  onClick={() => {
                    setBookmark(!bookmark);
                  }}
                >
                  <IconBookmark
                    bgFill={bookmark ? "fill-dark-gray" : "fill-dark-cyan"}
                    iconFill={bookmark ? "fill-gray-400" : "fill-white"}
                    className={""}
                  />
                </button>
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
          </div>
        </div>

        <div className="bg-white max-container w-full rounded-lg">
          <div className="flex flex-col lg:flex-row items-center lg:p-8 lg:items-start justify-center lg:justify-start gap-4 xl:gap-[20%] lg:gap-[15%] mt-10">
            {backers.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <h2 className="font-bold text-4xl max-md:text-3xl">
                  {item.value}
                </h2>
                <p className="text-dark-gray">{item.label}</p>
                <hr
                  className={`border-solid border-1 text-dark-gray opacity-50 w-[100px] mt-5 lg:hidden ${
                    !item.line && "hidden"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative mt-10 w-10/12 flex  lg:justify-start">
              <div className="absolute w-full bg-gray-200 py-1.5 rounded-full" />
              <div className="absolute w-4/5 bg-moderate-cyan py-1.5 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
