import CardHolder from "./cardHolder.js";

export default function CardEmpresas() {
  return (
    <>
      <CardHolder
        src="/cards/card1.jpeg"
        alt="Exemplo de Cozinha Industrial In Loco Montada em São José dos Campos"
        width="314px"
        height="235.5px"
        title="REFEIÇÕES COLETIVAS"
        subTitle="Serviço Completo no Local"
      >
        Atendimento de qualidade dentro de sua empresa. Equipe gabaritada para a
        gestão de sua cozinha com qualidade, higiene e confiança. Tudo em nosso
        espaço industrial.
      </CardHolder>
      <CardHolder
        src="/cards/card2.jpg"
        alt="Van para entrega de comidas coletivas em São José dos Campos"
        width="314px"
        height="209.34px"
        title="REFEIÇÕES TRANSPORTADAS"
        subTitle="Alimento Prático e Embalado"
      >
        Perfeito para empresas que não possuem espaço para o preparo das
        refeições.
        <br />A comida chega pronta para servir.
      </CardHolder>
      <CardHolder
        src="/cards/card3.jpg"
        title="OCASIÕES ESPECIAIS"
        subTitle="Tudo Pensado Para Não Ter Surpresas"
        alt="Evento de confraternização para empresas pronto para acontecer em São José dos Campos"
        width="314px"
        height="209.61px"
      >
        Confraternizações e Datas Comemorativas com cardápios personalizados.
        Seja na empresa ou no Clube de Campo, levamos o prato certo para a
        ocasião.
      </CardHolder>
      <CardHolder
        src="/cards/card4.jpg"
        title="COFFEE-BREAK"
        subTitle="Café Matinal e Lanche da Tarde"
        width="314px"
        height="209.33"
      >
        Servimos os mais variados requintes do dia-a-dia, como bolos, doces,
        salgados, pãezinhos, chás e sucos. Frescos e saborosos. Para começar bem
        o dia ou motivar os finais de tarde, conte com a Sport Center.
      </CardHolder>
    </>
  );
}
