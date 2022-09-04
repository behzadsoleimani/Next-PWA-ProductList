import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Meta from '../../../components/Meta';
import { IProduct, IProductItem } from '../../../types';
import productStyles from '../../../styles/Products.module.css';

const Product = ({ product }: IProductItem) => {

  return (
    <>
      <Meta title={product.title} description={product.description} />
      <Card className={productStyles.cardParent}>
        <CardMedia
          component="div"
          sx={{
            height: "100%",
            flexBasis: "30%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          }}>
          <div className={productStyles.imageContainer}>
            <Image src={product.image} layout="fill" objectFit="contain"
              className={productStyles.img} />
          </div>

        </CardMedia>
        <Box sx={{
          display: 'flex', flexDirection: 'column',
          flexBasis: "70%"
        }}>
          <CardContent sx={{
            flex: '1 0 auto',
            flexDirection: "column",
            display: "flex",
            justifyContent: "space-around"
          }}>
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <Grid>
                <Typography component="div" variant="h5">
                  {product.title}
                </Typography>
                <Typography variant="h6" color="text.secondary" component="div">
                  {product.category}
                </Typography>
                <Typography variant="h6" color="text.secondary" component="div">
                  {`${product.price}$`}
                </Typography>
              </Grid>
              <Grid>
                <Rating value={product.rating.rate} sx={{
                  color: "#ea4c89",
                  pointerEvents: "none"
                }}
                  precision={0.1}
                />
              </Grid>

            </Grid>
            <Grid sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column"
            }}>
              <Typography component="div" variant="h5">
                {"DESCRIPTION"}
              </Typography>
              <Typography component="div" variant="body2">
                {product.description}
              </Typography>
            </Grid>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>


          </Box>
        </Box>

      </Card>
    </>
  );
}


export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  )

  const product = await res.json();

  return {
    props: {
      product,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const products = await res.json()

  const ids = products.map((product: IProduct) => product.id)
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default Product
