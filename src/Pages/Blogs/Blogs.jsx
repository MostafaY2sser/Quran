



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import like from '../../assets/images/general/wishList.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    // State For Search input
    const [searchText, setSearchText] = useState('');

    // Blogs List 
    const [blogs, setBlogs] = useState([]);

    const navigate = useNavigate()

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://quran.codecraft1.com/api/articles');
                setBlogs(response.data.data);  // Update to access 'data' from the response
                // console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Function To Search Blogs
    const filteredData = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className='w-full'>

{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="head flex items-center justify-between mb-5 lg:mb-10 mx-2 lg:mx-10 mt-5 lg:mt-20">
                <div className="text-[24px] md:text-[30px] font-[700] text-[--main-dark-color] border-b-2 border-b-[--main-border-color]">مقالات مميزة</div>
                <div className="w-[50%] md:w-[30%] border-2 border-[--main-dark-color] rounded-[10px] overflow-hidden py-2 px-2 md:px-3 flex items-center gap-3">
                    <FontAwesomeIcon className="text-[--main-dark-color]" icon={faSearch} />
                    <input
                        className="w-[90%] bg-[transparent] border-[none] outline-[0]"
                        type="text"
                        placeholder="اكتب اسم القراءة"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>

{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="slider w-[100%] p-3 lg:p-10 bg-[--main-bgLight-color] overflow-x-scroll flex gap-5 scroll-smooth flex-row-reverse"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {filteredData.slice(0, 10).map((blog, index) => (
                    <div className="box min-w-[80%] md:min-w-[60%] lg:min-w-[28%] p-5 md:p-10 bg-[--main-dark-color] flex flex-col items-center gap-2 lg:gap-3 rounded-[15px] relative" key={index}>
                        <img className="" src={`https://quran.codecraft1.com/public/${blog.image}`} alt={blog.title} />
                        <h4 className="text-[30px] text-[white]">{blog.title}</h4>
                        <p className="text-[white] text-center">{blog.content}</p>
                        <button 
                            className='globalButton bg-[--body-bg-color] text-[--main-dark-color] text-[22px]'
                            onClick={() => navigate(`/blogsdetails/${blog.id}`, { state: blog })}
                        >قراءة المزيد</button>
                        <img className="absolute top-[1px] lg:top-[10px] left-[1px] lg:left-[10px] w-[40px] cursor-pointer" src={like} alt="" />
                    </div>
                ))}
            </div>

{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="my-10 lg:my-20 w-[100%] flex gap-5 flex-wrap justify-between">
                {filteredData.slice(10).map((blog, index) => (
                    <div className="box w-[100%] md:w-[48%] lg:w-[32%] p-10 mb-5 bg-[--main-bgLight-color] flex flex-col items-center gap-3 rounded-[15px] shadow-lg relative" key={index}>
                        <img className="" src={`https://quran.codecraft1.com/public/${blog.image}`} alt={blog.title} />
                        <h4 className="text-[30px]">{blog.title}</h4>
                        <p className="text-center">{blog.content}</p>
                        <button 
                            className='globalButton text-[22px]'
                            onClick={() => navigate(`/blogsdetails/${blog.id}`, { state: blog })}
                        >قراءة المزيد</button>
                        <img className="absolute top-[10px] left-[10px] w-[40px] cursor-pointer" src={like} alt="" />
                    </div>
                ))}
            </div>



        </div>
    );
}

export default Blogs;

