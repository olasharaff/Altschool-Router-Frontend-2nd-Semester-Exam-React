
import { Link } from "react-router-dom";
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import useFetchBlog from "../hooks/useFetchBlog";
import Spinner from "../components/Spinner";

export default function Home() {

  const [isBlogs, isLoading] = useFetchBlog();

  if(isLoading){
    return <Spinner/>
  }
  

  return (
    <section className="mt-10 ">
      <div className="flex max-w-6xl justify-center mx-auto px-4 space-x-3 gap-11 relative">
        <div className="sticky">
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

          <ul className="sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
            {isBlogs.map((article, index) => (
              <div className="max-w-[330px] mb-3 mt-3  mr-6 border-2  border-blue-500 px-3 rounded-md hover:shadow-2xl hover:border-blue-700 active:shadow-[50px]">
                <li key={index} className="list-none lex flex-col ">
                  <h1 className="font-bold mt-3 text-lg">{article.title}</h1>
                  <Link to={article.url}>
                    <img
                      src={article.urlToImage}
                      alt=""
                      className="mt-3 rounded hover:scale-90 hover:shadow-lg transition-scale duration-150 ease-out cursor-pointer"
                    />
                  </Link>
                  <span className="mt-3">
                    {" "}
                    By <cite className="text-base">{article.author}</cite>
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
