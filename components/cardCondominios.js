import CardHolder from "./cardHolder.js";

export default function CardCondominios() {
  return (
    <>
      <CardHolder
        src="/cards/card1.jpeg"
        alt="Exemplo de Cozinha Industrial Montada em São José dos Campos"
        width="314px"
        height="235.5px"
        title="SERVIÇO COMPLETO"
        subTitle="Transparência e praticidade para o síndico"
      >
        Nossa política é transparência total. Desde o contrato até as questões
        mais simples do dia-a-dia, nossa missão é entregar um serviço de
        excelência e que não dê dores de cabeça ao síndico. <br />
        Com confiança não se brinca.
      </CardHolder>
      <CardHolder
        src="/cards/card2.jpg"
        alt="Van para entrega de comidas coletivas em São José dos Campos"
        width="314px"
        height="209.34px"
        title="Segurança e Conforto"
        subTitle="Bem-Estar sem Riscos"
      >
        Aquele papo gostoso com a família não precisa ser em restaurantes caros
        e apenas aos finais de semana. Um ambiente agradável para comer no
        dia-a-dia pode estar a alguns passos de distância do elevador.
      </CardHolder>
      <CardHolder
        src="/cards/card3.jpg"
        title="OCASIÕES ESPECIAIS"
        subTitle="Tudo Pensado para não ter Surpresas"
        alt="Evento de confraternização no condomínio pronto para acontecer em São José dos Campos"
        width="314px"
        height="209.61px"
      >
        Confraternizações e Datas Comemorativas com cardápios variados.
        Decoramos o local em várias ocasiões do ano, tudo para trazer qualidade
        de vida para os condôminos.
      </CardHolder>
      <CardHolder
        src="/cards/card4.jpg"
        title="COFFEE-BREAK"
        subTitle="Café Matinal ou Lanchinho Noturno"
        width="314px"
        height="209.33"
      >
        Servimos os mais variados requintes do dia-a-dia, como bolos, doces,
        salgados, pãezinhos, chás e sucos. Frescos e saborosos. Para começar bem
        aquele dia corrido antes do trabalho ou para adoçar os finais de noite.
      </CardHolder>
    </>
  );
}
