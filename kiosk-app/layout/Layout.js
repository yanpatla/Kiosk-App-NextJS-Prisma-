import Head from "next/head"

const Layout = ({children,pagina}) => {
    console.log(pagina,'pagina' )
    console.log(children,'children')

    return(
    <>
    <Head>
        <title>Cafe - {pagina} </title>
        <meta name='description' content='Kiosk Cafe'/>
    </Head>

    <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                <h1>Side Bar</h1>
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                {children}
        </main>
    </div>
    </>
  )
}

export default Layout   