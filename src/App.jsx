import { useState } from "react";
import Modal from "./components/Modal";
import About from "./sections/About";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Product from "./sections/Product";
import DialogBox from "./components/DialogBox";

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
      <main className={`pb-20 bg-gray-100`}>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          openDialog={handleOpenDialog}
        />
        <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog} />
        <Nav />
        <div className="flex flex-col gap-8">
          <Hero />
          <div className=" lg:w-1/2 m-auto max-container rounded-lg py-10">
            <Product openModal={handleOpenModal} />
          </div>
          <div className=" bg-white lg:w-1/2 m-auto max-container rounded-lg py-10">
            <About />
            <Features openDialog={handleOpenDialog} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
