import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../services/hooks";
import { dataFooter } from "./constants";

export const Footer: FC = () => {
  const lang = useAppSelector((state) => state.lang.lang);
  const [content, setContent] = useState(dataFooter[lang]);

  useEffect(() => {
    setContent(dataFooter[lang]);
  }, [lang]);
  return (
    <></>
  );
};
