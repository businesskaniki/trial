import React from "react";

const Footer = () => {
  return (
    <div className="bg-black-700 h-20 text-white flex justify-center items-center italic font-mono">
      <p>Built and designed by Nicholas Maina @2022</p>
      <style jsx>{`
        @media (max-width: 640px) {
          p {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 768px) {
          div {
            flex-direction: column;
            justify-content: center;
          }

          p {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
