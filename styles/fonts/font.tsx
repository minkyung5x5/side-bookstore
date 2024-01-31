import { Noto_Serif_KR, Single_Day } from "next/font/google";

const sumClass = (...classnames: string[]) => {
  return classnames.join(" ");
};

const noto_sans_kr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"], 
  variable: "--noto_sans_kr",
  display: "swap",
});

// const single_day = Single_Day({
//   weight: ["400"],
//   variable: "--single_day",
//   display: "swap",
// });

export const FontClassNames = sumClass(noto_sans_kr.className);//, single_day.variable);