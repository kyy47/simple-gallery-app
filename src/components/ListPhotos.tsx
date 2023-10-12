import CardPhotos, { PhotosType } from "./CardPhotos";
export type ListPhotosProps = {
  results: PhotosType[];
};
function ListPhotos({ results }: ListPhotosProps) {
  return (
    <div className=" w-screen justify-center gap-[20px] grid grid-cols-1 grid-flow-row  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-6 py-4">
      {results.map((item) => (
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
