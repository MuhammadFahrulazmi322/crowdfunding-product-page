import Button from "../components/Button";
import { backers } from "../constants";
import { ic_bookmark, logoMastercraft } from "../assets/images";

function Product() {
  return (
    <section className=" relative -top-14 bg-white rounded-lg ">
      <div className="flex flex-col justify-center items-center gap-5 px-2 relative -top-7">
        <img src={logoMastercraft} alt="" width={56} />
        <h1 className="font-bold text-xl max-w-[250px] text-center">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="max-w-[300px] text-center text-sm text-dark-gray ">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex gap-2">
          <Button label={"Back this project"} />
          <img src={ic_bookmark} alt="bookmark" />
        </div>
      </div>
      {backers.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-4 mt-10"
        >
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-bold text-4xl max-md:text-3xl">{item.value}</h2>
            <p className="text-dark-gray">{item.label}</p>
            <hr
              className={`border-solid border-1 text-dark-gray opacity-50 w-[100px] mt-5 ${
                !item.line && "hidden"
              }`}
            />
          </div>
        </div>
      ))}
      <div className="relative mt-10 w-10/12 flex justify-center">
        <div className="absolute w-full bg-gray-200 py-1.5 rounded-full" />
        <div className="absolute w-4/5 bg-moderate-cyan py-1.5 rounded-full" />
      </div>
    </section>
  );
}

export default Product;
