import Link from "next/link";

function HomePage() {
  return(
      <div>
          Bem vindo a minha Home!
          <ul>
              <li>
                  <Link href="/sobre">
                    <a>Ir para sobre</a>
                  </Link>
              </li>
              <li>
                  <Link href="/posts/post">
                    <a>Ir para posts</a>
                  </Link>
              </li>
          </ul>
        <img src="/images/guilhermeMars.png" /> {/* Melhor forma de importar imagens */}
      </div>
  );
}

export default HomePage;
