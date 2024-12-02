import { useState } from "react";
import EgazatSection from "../../Components/Egazat/EgazatSection";
import Books from "../../Components/books/books";
import Read from "../../Components/read/read";
import Visible from "../../Components/Visible/Visible";
import Voice from "../../Components/Itsvoice/voice";
import img from '../../assets/images/general/hh.png'
import img2 from '../../assets/images/general/design1.png'

export const ItsLibrary = () => {
    const [activeTab, setActiveTab] = useState("books");

    const renderContent = () => {
        switch (activeTab) {
          case "voice":
            return <Voice />;
          case "Visible":
            return <Visible />;
          case "read":
            return <Read /> ;
          case "books":
            return <Books /> ;
          default:
            return <p>يرجى اختيار قسم</p>;
        }
      };

  return (
    <div className="w-full relative overflow-hidden">
        <div className="buttons bg-[--secound-bg-color] p-5 flex justify-center items-center gap-1 md:gap-3 mt-10">
        <button  onClick={() => setActiveTab("voice")} className="globalButton text-[8px] md:text-xl">
          التلاوات الصوتيه
        </button>
        <button onClick={() => setActiveTab("Visible")} className="globalButton text-[8px] md:text-xl">
        التلاوات المرئية
        </button>
        <button onClick={() => setActiveTab("read")} className="globalButton text-[8px] md:text-xl">
        المصاحف المقروءة بالتفسير
        </button>
        <button onClick={() => setActiveTab("books")} className="globalButton text-[8px] md:text-xl">
        الكتب
        </button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      <img className="absolute top-1 right-[-2px] z-[-10]" src={img} alt="img" />
      <img className="absolute bottom-96 left-[-70px] z-[-10]" src={img2} alt="img" />
        <EgazatSection />
    </div>
  )
}
