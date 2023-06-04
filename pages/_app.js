import { MainLayout } from "@/app/components/layout/main-layout"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>

    </>
  )
}