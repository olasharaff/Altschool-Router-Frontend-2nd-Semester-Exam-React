
import { Link } from "react-router-dom";
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import Spinner from "../components/Spinner";
import useFetchQuote from "../hooks/useFetchQuote";

export default function Home() {
const [useQuote, isLoading] = useFetchQuote();

if (isLoading) {
  return <Spinner />;
}

  return (
    <section className="mt-10 ">
      <div className="flex max-w-6xl justify-center mx-auto px-4 space-x-3 gap-11 relative flex-wrap">
        <div className="sticky">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGTFZnFJZ3A4A/profile-displayphoto-shrink_800_800/0/1683621346276?e=2147483647&v=beta&t=PcGRiADjqnQxOCE5uifYVjGnTJ7tsOmSl5syk6_gefk"
            alt="profileImage"
            className="max-w-[200px] rounded-full"
          />
          <h1 className="text-lg ">Sharaf AbdulRahman</h1>
          <p>
            I love riding horse, <code>Coding</code> and love Tea ❤️
          </p>
          <div className="my-3">
            <Link
              to="https://radiant-shortbread-af2dd2.netlify.app/"
              className="font-semibold text-base rounded py-2 px-2 bg-blue-400 text-center hover:shadow-2xl transition duration-150 ease-in-out hover:bg-blue-600 transform hover:scale-x-50"
            >
              Resume
            </Link>
          </div>

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
          <h1 className="text-center font-semibold text-2xl mb-3">Quote</h1>

          <div className="flex relative justify-center flex-col  mx-auto max-w-sm min-w-full border-[2px] h-[250px] px-5 py-[50px] items-center border-blue-400 shadow-lg hover:shadow-2xl cursor-pointer transition duration-150 ease-in-out rounded hover:border-4">
            <q className="py-9 text-center ">{useQuote.quote}</q>
            <div className="flex absolute bottom-4 right-4">
              <cite className=" font-medium">Kanye West</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
