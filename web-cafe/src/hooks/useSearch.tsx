import { useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState<string>("");
  return { search, setSearch };
};

export default useSearch;
