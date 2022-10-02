import { useAppState } from "../../../state/app-state";
import { Button, Card } from "antd";
import  { useState, cloneElement } from "react";
import useSaveUserWord from '../../../helpers/hooks/useSaveUserWord'


const SaveWordModal = ({ title, word, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [wordData, setWordData] = useState(null);
 
  const [serverAnswer, isLoading] = useSaveUserWord(word, wordData)
  const [state] = useAppState()

  const openModal = () => {
    console.log("openModal");
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("closeModal");
    setIsOpen(false);
  };

  return (
    <>
      <Button disabled={state.isAuth ? false : true} onClick={openModal}>{title} </Button>
      {isOpen && (
        <Card
          style={{
            position: "fixed",
            top: "15%",
            left: "50%",
            background: "#fff",
            transform: "translateX(-50%)",
            boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
            zIndex: 1000,
          }}
        >
         {cloneElement(children, {title: title, closeModal: closeModal, setWordData: setWordData })}
        </Card>
      )}
      {isOpen && (
        <div
          data-overlay
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.2)",
            zIndex: 980,
          }}
        ></div>
      )}
    </>
  );
};

export default SaveWordModal;