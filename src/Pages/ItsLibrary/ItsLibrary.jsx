import { useState } from "react";
import EgazatSection from "../../Components/Egazat/EgazatSection";
import Books from "../../Components/books/books";
import Read from "../../Components/read/read";
import Visible from "../../Components/Visible/Visible";
import Voice from "../../Components/Itsvoice/voice";


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
    <div className="w-full">
        <div className="buttons bg-[--secound-bg-color] p-5 flex justify-center items-center gap-3 mt-10">
        <button onClick={() => setActiveTab("voice")} className="globalButton">
          التلاوات الصوتيه
        </button>
        <button onClick={() => setActiveTab("Visible")} className="globalButton">
        التلاوات المرئية
        </button>
        <button onClick={() => setActiveTab("read")} className="globalButton">
        المصاحف المقروءة بالتفسير
        </button>
        <button onClick={() => setActiveTab("books")} className="globalButton">
        الكتب
        </button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
        <EgazatSection />
    </div>
  )
}
