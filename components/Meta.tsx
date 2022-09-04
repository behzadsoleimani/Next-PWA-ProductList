import Head from 'next/head';
import { IMeta } from '../types';

const Meta = ({ title, keywords, description } : IMeta) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Behtarino Productsdd',
  keywords: 'web development, programming',
  description: 'Get the latest products in web dev',
}

export default Meta
