import { memo, useEffect } from "react";
import styles from "./DropdownLang.module.scss";
import arrow from "../../images/arrow_down.svg";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { TLangFullnameVal, TLang } from "../../types/lang";
import { setLang } from "../../services/slices/lang";
import { useLocation, useNavigate } from "react-router-dom";

export type TDropdownItemLang = {
  id: number;
  lang: TLangFullnameVal;
  abbr: TLang;
  icon: string;
};

export const DropdownLang = memo(() => {
  const [open, setOpen] = useState<boolean>(false);
  const [needDropdown, setNeedDropdown] = useState<boolean>(true);
  const { languages, lang } = useAppSelector((state) => state.lang);

  const [currentLang, setCurrentLang] = useState<TDropdownItemLang>(
    languages.find(({ abbr }) => abbr === lang) || languages[0]
  );

  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const findLang = languages.find(({ abbr }) => abbr === lang);
    setNeedDropdown(languages.length > 1);
    findLang && setCurrentLang(findLang);
  }, [lang, languages]);

  const handlerClick = (new_lang: TDropdownItemLang) => {
    if (new_lang.abbr !== lang) {
      dispatch(setLang(new_lang.abbr));
      navigate(location.pathname.replaceAll(`/${lang}`, `/${new_lang.abbr}`));
    }
    setOpen(false);
  };

  return (
    <div className={`${styles.dropdown} ${!needDropdown && styles.hidden}`}>
      <button
        className={`${styles.input} ${needDropdown && styles.curs_point}`}
        onClick={() => {
          if (needDropdown) setOpen(!open);
        }}
      >
        {currentLang.abbr.toUpperCase()}
        <img
          className={styles.icon}
          src={currentLang.icon}
          alt={currentLang.lang}
        />{" "}
          <img
            src={arrow}
            className={`${styles.arrow} ${open && styles.open}`}
            alt="arrow dropdown"
          />
      </button>

        <ul className={`${styles.list} ${open && styles.open}`}>
          {languages.map((language) => (
            <li
              className={`${styles.item} ${
                currentLang.id === language.id && styles.current
              }`}
              key={language.id}
              onClick={() => handlerClick(language)}
            >
              {language.abbr.toUpperCase()}
              <img
                className={styles.icon}
                src={language.icon}
                alt={language.lang}
              />
            </li>
          ))}
        </ul>
    </div>
  );
});
