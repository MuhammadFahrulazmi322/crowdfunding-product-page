import React from "react";
import { ic_check } from "../assets/images";
import Button from "./Button";

function DialogBox({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <section className="modal-section">
      <div className="modal-box  translate-y-1.5 lg:w-[30%]">
        <div className="flex flex-col items-center gap-6">
          <img src={ic_check} alt="Icon check" width={80} />
          <h1 className="font-bold text-xl">Thanks for your support!</h1>
          <p className="text-dark-gray text-center">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <Button 
            label={"Got it!"}
            onClick={onClose}
        />
        </div>
      </div>
    </section>
  );
}

export default DialogBox;
