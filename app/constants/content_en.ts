import logo from "../assets/images/logo.svg";
import pages_homepage_intro from "../assets/images/homepage/intro/trading.png";
export const content_en = {
  title: "Finorbis",
  logo,
  components: {
    header: {},
  },
  pages: {
    homepage: {
      meta: {
        title: "Finorbis - Regulated Crypto Infrastructure for Institutional Investors",
        description:
          "Trading, custody, staking, and asset management through a single licensed platform in Switzerland.",
      },
      intro: {
        title: "Regulated Crypto\nInfrastructure for\nInstitutional Investors",
        badgeText: "Join the our crypto exchange",
        subtitle:
          "Trading, custody, staking, and asset management through a single licensed platform in Switzerland.",
        button1: "Become a Client",
        button2: "Contact Sales",
        image: pages_homepage_intro,
      },
    },
    notFound: {
      meta: {
        title: "Page Not Found - Finorbis",
        description: "The page you are looking for does not exist.",
      },
      title: "Page Not Found",
      subtitle: "The page you are looking for does not exist.",
      button: "Go to Homepage",
    },
    terms: {
      meta: {
        title: "Terms and Conditions - Finorbis",
        description: "Read the terms and conditions of using Finorbis services.",
      },
    },
    privacy: {
      meta: {
        title: "Privacy Policy - Finorbis",
        description: "Read the privacy policy of Finorbis.",
      },
    },
    cookies: {
      meta: {
        title: "Cookie Policy - Finorbis",
        description: "Read the cookie policy of Finorbis.",
      },
    },
  },
};
export type ContentType = typeof content_en;
