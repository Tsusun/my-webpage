import "@styles/globals.css"

const Noop = ({ children }) => <>{children}</>
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? Noop

  return (
    <section
      className="w-full h-screen bg-cover font-sans dark:text-white"
      style={{
        backgroundImage: "url(/Moving-Backgrounds-For-Tumblr-Www-Pixshark-Com-Images-Bing-.gif)",
        width: "100%",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </section>
  )
}

export default MyApp
