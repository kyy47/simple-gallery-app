import React from "react";
import CardPhotos, { PhotosType } from "./CardPhotos";
export type ListPhotosProps = {
  result: PhotosType[];
};
function ListPhotos({ result }: ListPhotosProps) {
  return (
    <div className=" w-screen justify-center gap-[20px] grid grid-cols-1 grid-flow-row  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-6 py-4">
      {result.map((item) => (
        <CardPhotos
          key={item.id}
          id={item.id}
          description={item.description}
          urls={item.urls}
        />
      ))}
    </div>
  );
}

export default ListPhotos;
