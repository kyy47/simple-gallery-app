import { ChangeEvent, useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import ListPhotos, { ListPhotosProps } from "./ListPhotos";
import { PhotosType } from "./CardPhotos";
import Icon from "./Icon";
import axios from "axios";
function GalleryApp() {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ListPhotosProps>();
  const changeKeywordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    if (!keyword) {
      getData("shirt");
    } else {
      getData(keyword);
    }
    const myTimeOut = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(myTimeOut);
    };
  }, [keyword]);

  const getData = (query: string) => {
    setTimeout(() => {
      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${
            import.meta.env.VITE_MY_UNSPLASH_KEY
          }&query=${query}`
        )
        .then(({ data }) => setResults(data));
    }, 1500);
  };
  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-blue-primary ">
      <Header>
        <Icon />
        <Search keyword={keyword} onChangeKeyword={changeKeywordHandler} />
      </Header>
      {loading && <p>Loading...</p>}
      {!loading && results && (
        <ListPhotos results={results.results as PhotosType[]} />
      )}
      {!loading && !results?.results.length && <p>{keyword} not found..</p>}
    </div>
  );
}

export default GalleryApp;
