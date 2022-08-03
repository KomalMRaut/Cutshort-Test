import React from "react";
import { Page1 } from "../components/formPages/Page1";
import { Page2 } from "../components/formPages/Page2";
import { Page3 } from "../components/formPages/Page3";
import { Page4 } from "../components/formPages/Page4";
import { Stepper } from "../components/Stepper";

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
      form: <Page4 />,
      btnTxt: "Launch Eden",
    },
  ];

  const steps = [0, 1, 2, 3];
  return (
    <div className="home">
      <h1 className="home__heading">Eden</h1>
      <Stepper activeStep={activeStep} totalSteps={4} />
      <h1>{formData[activeStep].heading}</h1>
      <p>{formData[activeStep].subHeading}</p>
      {formData[activeStep].form}
      <button
        className="home__btn"
        onClick={() => {
          setActiveStep((prevStep) => prevStep + 1);
        }}
        disabled={activeStep === 3}
      >
        {formData[activeStep].btnTxt}
      </button>
    </div>
  );
};

export default Home;
