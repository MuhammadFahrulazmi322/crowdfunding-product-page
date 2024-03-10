import { useState } from "react";
import Modal from "./components/Modal";
import About from "./sections/About";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Product from "./sections/Product";
import DialogBox from "./components/DialogBox";
import Backed from "./sections/Backed";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    document.body.classList.add("modal-open");
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.classList.remove("modal-open");
  };
  const handleOpenDialog = () => {
    setModalOpen(false);
    setDialogOpen(true);
    document.body.classList.add("modal-open");
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
    document.body.classList.remove("modal-open");
  };
  return (
    <>
      <main className={` bg-gray-100 max-container`}>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          openDialog={handleOpenDialog}
        />
        <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog} />
        <Nav />
        <Hero />

        <div className="flex flex-col gap-10 relative -translate-y-20">
          <div className=" bg-white w-5/6 lg:w-1/2 lg:px-8  max-container rounded-lg pt-4  ">
            <Product openModal={handleOpenModal} />
          </div>
          <div className=" bg-white w-5/6 lg:w-1/2 max-container rounded-lg pb-10 ">
            <Backed />
          </div>

          <div className=" bg-white w-5/6 lg:w-1/2 m-auto max-container rounded-lg py-10 ">
            <About />
            <Features openDialog={handleOpenDialog} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
