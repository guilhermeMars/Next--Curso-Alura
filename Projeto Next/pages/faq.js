import Head from "next/head";
import Link from "next/link";
// import { useEffect } from "react";
// import { useState } from "react";

//    -- StaticProps (SSG) --
// O next, por debaixo dos panos, tenta renderizar essas StaticProps e os dados junto do resto do documento e mostra no View Page Source
// Ainda por cima ele gera um html estático com todo o conteúdo direto, sem ter tempo de loading
// Roda SOMENTE em build time (Apenas em modo DEV que sempre roda)
// Por ser algo estático, ele apenas gera a página dessa forma e não aceita nada dinâmico (já que precisa buildar a página inteira quando algo é modificado)

//    -- ServerSidePros (SSR) --
// Atualização dinâmica da página, ela verifica o server a cada vez que a página é recarregada
// Tente fazer ao máximo a página estática, faça dinâmica somente se for necessário na página
// Estático sempre tem uma resposta mais rápida
export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
  return {
    props: {
      // Qualquer coisa passada aqui irá para as props do componente
      qualquerCoisa: "Vamo ve se vai memo",
      faq,
    },
  };
}

export default function FaqPage({ faq }) {
  //   const [faq, setFaq] = useState([]);
  //   useEffect(() => {

  //   }, []);

  return (
    <div>
      <Head>
        <title>FAQ - Dúvidas Frequentes</title>
      </Head>
      <h1>Teste de Troca de páginas</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
