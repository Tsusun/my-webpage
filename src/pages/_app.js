import "@styles/globals.css"

const Noop = ({ children }) => <>{children}</>
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? Noop

  return (
    <section className="w-full h-screen bg-cover bg-back-img dark:bg-gray-900 text-white  ">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </section>
  )
}

export default MyApp