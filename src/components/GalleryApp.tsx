import React from "react";
import Header from "./Header";
import Search from "./Search";
import ListPhotos from "./ListPhotos";
import { datas } from "../data";
import { PhotosType } from "./CardPhotos";
import Icon from "./Icon";
function GalleryApp() {
  const { results } = datas;
  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-blue-primary ">
      <Header>
        <Icon />
        <Search />
      </Header>
      <ListPhotos result={results as PhotosType[]} />
    </div>
  );
}

export default GalleryApp;
