import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FAQ } from "../../Config";

const Section = ({id, title, description, isVisible, setIsVisible }) => {
  
  return (
    
    <div className="flex flex-col shadow rounded-md p-2.5 m-2.5">
      <div className="flex justify-between items-center fonts"> 
        <h3 className="text-lg text-title">{title}</h3>
        {
        isVisible ? (
        <SlArrowUp onClick={() => setIsVisible(false)} className="cursor-pointer" />
      ) : (
        <SlArrowDown onClick={() => setIsVisible(true)} className="cursor-pointer" />
      )}
      </div>
      {isVisible && <p className=" fonts text-gray-500 font-thin">{description}</p>}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] = useState(""); /* Initially description of all questions are hidden */

  return (
    <div className="max-w-[1200px] mx-auto pt-24">
      <div className="card-container">
      <h1 className="flex justify-center items-center text-2xl pb-5 font"> FAQ</h1>
      {FAQ.map((question) => {
        return (
          <Section key={question.id} id={question.id} title={question.title} description={question.description}
          isVisible={visibleSection === question.id }
          setIsVisible={(display) => {
            if(display) {
              setVisibleSection(question.id);
            } else {
              setVisibleSection(" ");
            }
          }
          } />
  
        )
      }
      )}
      </div>
    </div>
  );
};

export default Help;