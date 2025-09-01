
import SplashText from '../../../public/images/splashimagetext.png'
import Image from "next/image";
import '../(routes)/intro.scss'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='intro-container'>

        <div className='intro-logo'>
          <Image src={SplashText} alt="" priority></Image>
        </div>
        <div className='intro__btncontainer'>
          <Link href="/loginpage" className='intro__btncontainer-btn'>Kom i gang</Link>
        </div>
      </div>
    </>
  );
}
