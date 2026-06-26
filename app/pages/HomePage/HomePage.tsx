import { Intro } from "~/components/Intro/Intro";
import { useLang } from "../../hooks/useLang";

export const HomePage = () => {
  const { homepage } = useLang().content.pages;
  return (
    <main className="section">
      <Intro
        title={homepage.intro.title}
        subtitle={homepage.intro.subtitle}
        button1={{ text: homepage.intro.button1, onClick: () => {} }}
        button2={{ text: homepage.intro.button2, onClick: () => {} }}
        badgeText={homepage.intro.badgeText}
        imageSrc={homepage.intro.image}
      />
    </main>
  );
};
