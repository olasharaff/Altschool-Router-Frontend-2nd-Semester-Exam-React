import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'

export default function Home() {
  const [isBlogs, setIsBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlog(){
      try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "apple",
            from: "2023-10-17",
            to: "2023-10-17",
            sortBy: "popularity",
            apiKey: "2b9d440709094e3aa5a7d6fd5402a37e",
          },
        });
        setIsBlogs(response.data.articles.slice(1, 10));
       
      } catch (error) {
        console.log(error);
      }
       const fetchQuoteTimeout = () => {
        fetchBlog();

         const timeoutId = setTimeout(() => {
           fetchBlog();
         }, 10000);

         return () => clearTimeout(timeoutId);
       };
        fetchQuoteTimeout(); 
    };
   
  }, []);

  return (
    <section className="mt-10">
      <div className="flex max-w-6xl justify-center mx-auto px-4 space-x-3 gap-11">
        <div>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGTFZnFJZ3A4A/profile-displayphoto-shrink_800_800/0/1683621346276?e=2147483647&v=beta&t=PcGRiADjqnQxOCE5uifYVjGnTJ7tsOmSl5syk6_gefk"
            alt="profileImage"
            className="max-w-[200px] rounded-full"
          />
          <h1 className="text-lg ">Sharaf AbdulRahman</h1>
          <bio>
            I love riding horse, <code>Coding</code> and love Tea ❤️
          </bio>
          <div className="flex space-x-2">
            
            <Link>
              <AiOutlineInstagram className="text-2xl text-blue-700 cursor-pointer" />
            </Link>
            <Link>
              <AiOutlineTwitter className="text-2xl text-blue-700 cursor-pointer" />
            </Link>
            <Link>
              <AiOutlineLinkedin className="text-2xl text-blue-700 cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="items-center">
          <h1 className="text-center font-extrabold text-2xl">Daily News</h1>

          <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 ">
            {isBlogs.map((article, index) => (
              <div className="max-w-[330px] mb-3 mt-3  mr-6 border-2  border-blue-500 px-3 rounded-md">
                <li key={index} className="list-none lex flex-col ">
                  <h1 className="font-bold mt-3">{article.title}</h1>
                  <img src={article.urlToImage} alt="" className="mt-3" />
                  <span className="mt-3">
                    {" "}
                    By <cite>{article.author}</cite>
                  </span>
                  <article className="mt-3">{article.description}</article>
                  <button className="border-none bg-blue-300 px-2 py-3 rounded-md my-3 cursor-pointer shadow-sm hover:shadow-lg hover:bg-blue-500">
                    <Link to={article.url}>Read more......</Link>
                  </button>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
