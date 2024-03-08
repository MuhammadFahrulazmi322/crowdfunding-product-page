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
    document.body.classList.add('modal-open');
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.classList.remove('modal-open');

  };
  const handleOpenDialog = () => {
    setModalOpen(false)
    setDialogOpen(true);
    document.body.classList.add('modal-open');
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
    document.body.classList.remove('modal-open');

  };
  return (
    <>


      <main className={`pb-20`}>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} openDialog={handleOpenDialog}/>
        <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog}/>
        <Nav />
        <Hero />
        <div className="w-4/5 m-auto max-container">
          <Product openModal={handleOpenModal} />
          <About />
          <Features openDialog={handleOpenDialog}/>
        </div>
      </main>
    </>
  );
}

export default App;
