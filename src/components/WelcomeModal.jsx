import PropTypes from "prop-types";
import { useState } from "react";

const WelcomeModal = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const steps = [
    {
      title: "Welcome to Dev-Challenges!",
      content:
        "Welcome to Dev-Challenges, an interactive platform built entirely with APIs. Everything you see here is fetched in real-time from external APIs—no static content!",
      icon: "👋",
    },
    {
      title: "Dynamic Experience",
      content:
        "Every component, from blogs to projects, is loaded dynamically. This ensures you always get the most updated content directly from the source.",
      icon: "⚡",
    },
    {
      title: "Dive deeper",
      content:
        "Want to know how it all works? 📖 Read the blog to understand how the API integration powers this site.",
      icon: "🚀",
    },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handleSkip = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="max-w-xs sm:max-w-md mx-auto bg-white/90 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 relative shadow-xl">
        <button
          onClick={handleSkip}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <div className="text-center mb-4 sm:mb-6">
          <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">
            {steps[currentStep - 1].icon}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
            {steps[currentStep - 1].title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {steps[currentStep - 1].content}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentStep === index + 1 ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
          >
            {currentStep === totalSteps ? "Get Started" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

WelcomeModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default WelcomeModal;
