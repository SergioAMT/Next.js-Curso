import { MainLayout } from "@/app/components/layout/main-layout"
import '../src/app/styles/general.sass'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>

    </>
  )
}