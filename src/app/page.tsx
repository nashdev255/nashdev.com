import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <>
      <div className='overflow-hidden'>
        <div className='relative'>
          <Header />
        </div>
        <div className='relative'>
          <Footer />
        </div>
      </div>
    </>
  )
}
