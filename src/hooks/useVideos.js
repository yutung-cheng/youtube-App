import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

//Custom hook so anytime we can pass in different default term
const useVideos = defaultSearchTerm => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]); //anytime when the list has change, run this function

  const search = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
  };

  //Can return an array or as an object
  return [videos, search];
};

export default useVideos;
