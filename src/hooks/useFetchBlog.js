import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useFetchBlog() {
     const [isBlogs, setIsBlogs] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
       const fetchBlog = async () => {
         try {
           const response = await axios.get(
             "https://newsapi.org/v2/everything",
             {
               params: {
                 q: "apple",
                 from: "2023-10-17",
                 to: "2023-10-17",
                 sortBy: "popularity",
                 apiKey: "2b9d440709094e3aa5a7d6fd5402a37e",
               },
             }
           );
           setIsBlogs(response.data.articles.slice(1, 11));
           setIsLoading(false)
         } catch (error) {
           console.log(error);
          
         }
       };
       fetchBlog();
     }, []);

  return [isBlogs, isLoading]
}
