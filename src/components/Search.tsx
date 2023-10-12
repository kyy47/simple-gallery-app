import { ChangeEvent } from "react";
import { HiSearch } from "react-icons/hi";
type SearchProps = {
  keyword: string;
  onChangeKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
};
function Search({ keyword, onChangeKeyword }: SearchProps) {
  return (
    <div className="">
      <div className="relative flex items-center">
        <input
          className="px-4 py-2 rounded-full xs:min-w-[250px] outline-none focus:outline-my-black text-lg"
          value={keyword}
          onChange={onChangeKeyword}
        />
        <HiSearch
          className="w-6 h-full
         absolute top-0 right-3 "
        />
      </div>
    </div>
  );
}

export default Search;
