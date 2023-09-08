import Link from 'next/link'
import Layout from './../Layout';

const Footer = () => {
    return (
        <footer
        className='w-full text-gray-400 font-medium text-xs'
        >
            <Layout
            styles='!py-8 flex items-center justify-between'
            >
                <span>{ new Date().getFullYear() } &copy; All Rights Reserved</span>
                <div>
                    Build with <Link href={'/'}>nashdev255</Link>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer;
