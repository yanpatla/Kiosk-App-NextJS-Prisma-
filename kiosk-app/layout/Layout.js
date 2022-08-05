import Head from "next/head"

const Layout = ({children,pagina}) => {
  return(
    <>
    <Head>
        <title>Cafe - pepe</title>
        <meta name='description' content='Kiosk Cafe'/>
    </Head>

    <div className="md:flex">
        <aside className="md:w-4/12">
                <h1>Side Bar</h1>
        </aside>
        <main className="md:w-8/12">
                {children}
        </main>
    </div>
    </>
  )
}

export default Layout