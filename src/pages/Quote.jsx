import useFetchQuote from "../hooks/useFetchQuote";
import Spinner from "../components/Spinner";

export default function Quote() {
  const [useQuote, isLoading] = useFetchQuote()

  if(isLoading){
    return <Spinner/>
  }
  
  

  return (
    <section className="mt-[13%] px-4">
      <div className="flex relative justify-center flex-col  mx-auto max-w-sm border-[2px] h-[250px] px-5 py-[50px] items-center border-lime-500 shadow-lg hover:shadow-2xl cursor-pointer transition duration-150 ease-in-out">
        <q className="py-9 text-center ">
          {useQuote.quote}
        </q>
        <div className="flex absolute bottom-4 right-4">
          <cite className=" font-medium">Kanye West</cite>
        </div>
      </div>
      {/* <button onClick={handleChange}>Fetch</button> */}
    </section>
  );
}
