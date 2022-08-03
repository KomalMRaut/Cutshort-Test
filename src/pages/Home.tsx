import React from "react";
import { Page1 } from "../components/formPages/Page1";
import { Page2 } from "../components/formPages/Page2";
import { Page3 } from "../components/formPages/Page3";
import { Stepper } from "../components/Stepper";
import Logo from "../assets/Logo.png";

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const formData: {
    heading: string;
    subHeading: string;
    form: JSX.Element;
    btnTxt: string;
  }[] = [
    {
      heading: "Welcome! First things first...",
      subHeading: "You can always change them later.",
      form: <Page1 />,
      btnTxt: "Create Workspace",
    },
    {
      heading: "Let's set up a home for all your work",
      subHeading: "You can always create another workspace later.",
      form: <Page2 />,
      btnTxt: "Create Workspace",
    },
    {
      heading: "How are you planning to use Eden?",
      subHeading: "We'll streamline your setup experience accordingly.",
      form: <Page3 />,
      btnTxt: "Create Workspace",
    },
    {
      heading: "Congratulations, Eren!",
      subHeading:
        "you have completed onboarding, you can start using the Eden!",
      form: <></>,
      btnTxt: "Launch Eden",
    },
  ];
  return (
    <div className="home">
      <div className="home__heading">
        <img src={Logo} alt="logo" />
        <h1>Eden</h1>
      </div>
      <Stepper activeStep={activeStep} totalSteps={4} />
      {activeStep === 3 && <div className="finish">✓</div>}
      <div className="home__form">
        <div className="home__form__heading">
          <h1>{formData[activeStep].heading}</h1>
          <p>{formData[activeStep].subHeading}</p>
        </div>
        <div className="home__form__input">
          {formData[activeStep].form}
          <button
            className="home__btn"
            onClick={() => {
              if (activeStep === 3) {
                setActiveStep(0);
              } else {
                setActiveStep((prevStep) => prevStep + 1);
              }
            }}
          >
            {formData[activeStep].btnTxt}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
