import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { FC, useCallback, useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Footer } from "../layout";
import { NotFound } from "../../pages/NotFound/NotFound";
import { HomePageEN } from "../../pages/HomePage/HomePage";


export const App: FC = () => {

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Routes>
          <Route
            path={`/*`}
            element={<HomePageEN />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
