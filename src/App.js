import { useState } from "react";
import "./styles.css";

export default function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) return setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) return setStep((step) => step + 1);
  }

  return (
    <>
      <div
        style={{ fontSize: "20px", textAlign: "right" }}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        x
      </div>
      {isOpen && (
        <div className="App">
          <div className="step">
            <div className={`${step > 0 ? "one common" : "one"}`}>1</div>
            <div className={`${step > 1 ? "one common" : "one"}`}>2</div>
            <div className={`${step > 2 ? "one common" : "one"}`}>3</div>
          </div>
          <div className="messages">
            Step {step}: {messages[step - 1]}
          </div>
          <div className="button">
            <Button bgColor="#7950f2" onClick={handlePrevious}>
              PREVIOUS
            </Button>
            <Button bgColor="#7950f2" onClick={handleNext}>
              NEXT <span>dfd</span>
              {/* // we also use span under the button component using childre props */}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function Button({ bgColor, onClick, text, children }) {
  return (
    <button style={{ backgroundColor: bgColor }} onClick={onClick}>
      {/* here we use childre props so lecture no 90 */}
      <span>{children}</span>
    </button>
  );
}
