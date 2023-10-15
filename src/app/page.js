import Image from "next/image";
import Section1_header from "../components/Section1_header";
import Section12_footer from "../components/Section12_footer";
import Section11_vacancies from "../components/Section11_vacancies";
import Section3_IQ from "../components/Section3_IQ";
import Section7_EQ from "../components/Section7_EQ";
import Section8_Ever_wonder from "../components/Section8_Ever_wonder";
import Section9_start_test from "../components/Section9_start_test";
import Section10_work_with from "../components/Section10_work_with";
import Section5_meet from "@/components/Section5_meet";
import Section4_animated_box from "../components/Section4_animated_box";
import Section2_promotion from "@/components/Section2_promotion";
import Section6_improvement from "@/components/Section6_improvement";
export default function Home() {
  return (
    <>
      <Section1_header />
      <Section2_promotion />
      <Section3_IQ />
      <Section4_animated_box />
      <Section5_meet />
      <Section6_improvement />
      <Section7_EQ />
      <Section8_Ever_wonder />
      <Section9_start_test />
      <Section10_work_with />
      <Section11_vacancies />
      <Section12_footer />
    </>
  );
}
