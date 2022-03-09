import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layout from '@components/Layout';
import Container from '@components/Container';
import Modal from '@components/Model';
import Button from '@components/Button';
import { motion } from 'framer-motion';

import Camera from "@components/Camera";
import { search, mapImageResources } from '../lib/cloudinary';
import styles from '@styles/Home.module.scss'


export default function Home({ images: defaultImages, nextCursor: defaultNextCursor }) {
  const [images, setImages] = useState(defaultImages);
  const [selectedImg, setSelectedImg] = useState(null);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  const refreshPage = () => {
    window.location.reload();
  }


  async function handleOnLoadMore(e) {
    e.preventDefault();

    const results = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor
      })
    }).then(r => r.json());

    const { resources, next_cursor: updatedNextCursor } = results;

    const images =
      mapImageResources(resources);

    setImages(prev => {
      return [
        ...prev,
        ...images
      ]
    });
    setNextCursor(updatedNextCursor);
    setSelectedImg(selectedImg);

  }
  // return to main page

  return (
    <Layout>
      <Container>
        <h1 className="sr-only">My Images</h1>

        <div className={styles.container}>
          <Head>
            <title>wedding images</title>
            <meta name="description" content="Upload your image to Cloudinary!" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/manifest.json" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>
              Wedding Images
            </h1>
            <Camera />
            <button className='closeButton' onClick={refreshPage}>Close Camera</button>

          </main>
        </div>

        <motion.ul className={styles.images}>
          {images.map(image => {
            return (
              <motion.li className={styles.imgwrap} key={image.id} onClick={() => setSelectedImg(image.image)} layout
                whileHover={{ opacity: 2.5 }}>
                <a href={image.link} rel="noreferrer">
                  <motion.div className={styles.imageImage} initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}>
                    <Image className={styles.imageMain} src={image.image}
                      width="400"
                      height="280"
                      responsive_placeholder="blank" alt="image" />
                  </motion.div>
                </a>
              </motion.li>

            )
          })}
        </motion.ul>
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}></Modal>}
        <div className={styles.button}>
          <Button onClick={handleOnLoadMore}>Load More</Button>
        </div>
      </Container>
    </Layout>
  )
}


export async function getStaticProps() {
  const results = await search();

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);
  return {
    props: {
      images,
      nextCursor: nextCursor || false
    }
  }
}

