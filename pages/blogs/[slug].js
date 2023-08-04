import fs from 'fs'
import path from 'path'
import BlogNav from '@/components/Blog/BlogNav'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import {
  InfoBox,
  ErrorBox,
  WarningBox,
  ImageBox,
  CodeBox,
  StyleBox
} from '@/components/MdxHelpers/Boxes'
import { Standout } from '@/components/MdxHelpers/Texts'

const components = {
  InfoBox,
  ErrorBox,
  WarningBox,
  ImageBox,
  CodeBox,
  Standout,
  StyleBox
}

function PostPage({
  frontmatter: { title, date, description, header },
  slug,
  mdxSource
}) {
  return (
    <main className='bg-[#dbe1f193]'>
      <Head>
        <meta
          property='og:title'
          content='How to change the address bar color in Chrome, Firefox, Opera, Safari'
        />
        <meta
          property='og:description'
          content='How to change the address bar color in Chrome, Firefox, Opera, Safari'
        />
        <meta
          property='og:url'
          content='srshah.me'
        />
        <meta
          property='og:image'
          content='https://github.com/srshah27/srshah27/blob/master/public/SnehilLogo/Group1.jpg'
        />
        <title>{title}</title>
        <meta name='author' content='Snehil, Snehil Shah, Shah' />
      </Head>
      <BlogNav />
      <img
        src={header}
        alt={'header_img'}
        className='w-full h-60 object-cover'
      />
      <article className='max-w-4xl mx-auto p-5 prose rounded-3xl prose-a:text-emerald-500 text-justify'>
        <div className='font-cabinet'>
          <h1 className='text-5xl mt-10 text-center font-bold mb-0S'>
            {title}
          </h1>
          <h2 className='text-xl font-light text-stone-700 mb-2 mt-1 text-center'>
            {description}
          </h2>
        </div>
        <MDXRemote {...mdxSource} components={components} />
      </article>
    </main>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  )

  const mdxSource = await serialize(markdownWithMeta, {
    parseFrontmatter: true
  })

  const { frontmatter: frontmatter } = mdxSource

  return {
    props: {
      frontmatter,
      slug,
      mdxSource
    }
  }
}

export default PostPage
