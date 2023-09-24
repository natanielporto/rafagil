import { LandingSlice } from "./components/LandingSlice";
import { RelocationSlice } from "./components/RealocationSlice";
import { GreenBanner } from "./components/GreenBanner";
import { LinkedinSlice } from "./components/LinkedinSlice";
import { CVSlice } from "./components/CVSlice";
import { CarreerBoostSlice } from "./components/CarreerBoostSlice";
import { ValueSlice } from "./components/ValuesSlice";
import { WorldSlice } from "./components/WorldSlice";
import { TestimonialSlice } from "./components/TestimonialsSlice";
import { FinalSlice } from "./components/FinalSlice";

export const Page = () => {
  return (
    <>
      <LandingSlice />
      <RelocationSlice />
      <GreenBanner
        title="plano de recolocação"
        cta="Inscreva-se agora"
        mainInfo="Descubra as estratégias essenciais para sua recolocação profissional"
        description="Domine as estratégias necessárias para a sua recolocação e crie um plano de carreira sólido que o torne altamente desejado no mercado de trabalho. Domine as estratégias necessárias para a sua recolocação e crie um plano de carreira sólido que o torne altamente desejado no mercado de trabalho."
      />
      <LinkedinSlice />
      <GreenBanner
        title="upgrade no seu LinkedIn"
        cta="Inscreva-se agora"
        mainInfo="Descubra as estratégias essenciais para sua recolocação profissional"
        description="Domine as estratégias necessárias para a sua recolocação e crie um plano de carreira sólido que o torne altamente desejado no mercado de trabalho. Domine as estratégias necessárias para a sua recolocação e crie um plano de carreira sólido que o torne altamente desejado no mercado de trabalho."
      />
      <CVSlice />
      <GreenBanner
        title="o cv irresistivel"
        cta="Inscreva-se agora"
        mainInfo="Descubra as estratégias essenciais para sua recolocação profissional"
        description="Domine as estratégias necessárias para a sua recolocação e crie um plano de carreira sólido que o torne altamente desejado no mercado de trabalho. Domine as estratégias necessárias para a sua recolocação e crie um plano de carreira sólido que o torne altamente desejado no mercado de trabalho."
      />
      <CarreerBoostSlice />
      <GreenBanner
        title="acelerador de carreira"
        cta="Inscreva-se agora"
        mainInfo="Descubra as estratégias essenciais para sua recolocação profissional"
        description="Domine as estratégias necessárias para a sua recolocação e crie um plano de carreira sólido que o torne altamente desejado no mercado de trabalho. Domine as estratégias necessárias para a sua recolocação e crie um plano de carreira sólido que o torne altamente desejado no mercado de trabalho."
      />
      <ValueSlice />
      <WorldSlice />
      <TestimonialSlice />
      <FinalSlice />
    </>
  );
};
