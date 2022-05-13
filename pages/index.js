import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow " />
        <meta name="viewport" content="initial-scale=1.0,
        width-device-width" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <title>Site Eventos</title>
        <nav class={styles.icon}>
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-12 text-center">
              <a class="navbar-brand" href="/">
                <img src='/favicon.ico' width="200" height="60" class="blog-header-logo text-dark" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </Head>
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column container">
        <main className={styles.main} class="px-3">
          <h1 className={styles.title}>
            Bem Vindo!
          </h1>
          <p className={styles.description} class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.
            Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.
            Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
          </p>
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-12 text-center">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-light btn-lg"><Link href="/login"><a>Entrar</a></Link></button>
              </div>
            </div>
          </div>
          <h2 className={styles.description} class="lead">Ainda não possui conta? <Link href="/cadastro"><a>Criar Conta</a></Link></h2>
        </main>
      </div >
    </div>
  )
}

export default Home;



