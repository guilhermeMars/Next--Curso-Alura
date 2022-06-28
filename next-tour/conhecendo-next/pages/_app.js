function MyApp({ Component, pageProps }){
    return (
        <>
        <style>{`
            *{
                font-family: sans-serif;
            }
        `}</style>
        {/* <h2>Texto das páginas</h2> */}
        <Component {...pageProps} />
        </>
    )
}

export default MyApp;
