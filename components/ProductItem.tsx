import Image from "next/image";
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { cutString } from '../helpers/util-functions';
import { IProductItem } from '../types';



export default function ProductItem({ product }: IProductItem) {

  return (
    <Link  href={`/products/${product.id}`}>
      <a>
    <Card sx={{ maxWidth: 345 , margin: "5px" }}>
      <CardHeader
        title={product.title}
        subheader={`${product.price}$`}
        sx={{
          height: 190,
        }}
      />
      <CardMedia 
      component="div"
      sx={{
        height: 200,
      }}>
            <div style={{ position: 'relative', width: '70%', height: '100%',
          
          textAlign: "center",
          margin: "auto"
        }}>
            <Image src={product.image} layout="fill" objectFit="cover" />
          </div>
    
      </CardMedia>
     
      <CardContent sx={{
        position: "relative",
        height: 200,

      }} >
        <Typography variant="body2" color="text.secondary">
          {cutString(product.description)}
        </Typography>
        <Rating value={product.rating.rate} sx={{
          position: "absolute",
          bottom: 10,
          pointerEvents: "none"

        }} 
        precision={0.1}
        />
      </CardContent>
    </Card>
    </a>
    </Link>
  );
}
