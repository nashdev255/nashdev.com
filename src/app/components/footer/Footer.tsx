import Link from 'next/link'
import Layout from './../Layout';

const Footer = () => {
    return (
        <footer>
            <Layout>
                <span>{ new Date().getFullYear() } & copy; All Rights Reserved</span>
                <div>
                    Build width<Link href={'/'}>nashdev255</Link>
                </div>
            </Layout>
        </footer>
    )
}