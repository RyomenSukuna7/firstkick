"use client"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { checkUser } from './reduxcode/slice';

export default function Cards(){
    const send=useDispatch();
    const nid=nanoid();
    const images=["design1.jpeg","design2.jpeg","design3.jpeg","design4.jpeg","design5.jpeg","design6.jpeg","design7.jpeg","design9.jpeg"]
    return(
        <div style={{display:"flex",flexWrap:"wrap",paddingLeft:"50px"}}>
        {  images.map((imagess,index)=>(

          
                  <Card key={index} sx={{ marginLeft:"8vw",marginTop:"6vh",minWidth:"14vw",maxWidth:"16vw"}}>
                  <CardActionArea>
                    
                    <CardMedia
                      // style={{padding:"10px"}}
                      component="img"
                      height="140"
                      image={imagess}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        699 <del style={{position:"absolute",right:"6px"}}>999</del>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" style={{paddingTop:"4vh",marginLeft:"-0.7vw"}}>
                      <Link href={`/about/${nid}`} style={{color:"black"}} onClick={()=>send(checkUser({images,nid,index}))}>check</Link>
                    </Button>
                  </CardActions>
                  </Card>
            

        ))
           
         }
      </div>
    )
}