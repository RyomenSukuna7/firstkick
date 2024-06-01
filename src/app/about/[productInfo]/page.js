"use client"
import { useSelector } from "react-redux"
import Image from "next/image"
import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import { Description, Title } from "@mui/icons-material"

export default function details({params}){
    const select=useSelector((data)=>data.user)
    const router=useRouter();
    
    return(
       <>
          <Button onClick={()=>router.push("/")} variant="contained" style={{backgroundColor:"black"}}>Back to home</Button>
            {
                select.map((datas)=>(
                    
                   
                  datas.id==params.productInfo?(
                    <>
                      <div id="imagesData" key={datas.id} style={{display:"flex",justifyContent:"center" ,flexWrap:"wrap",marginTop:"6vh"}}>
                          <Image src={`/${datas.name}`} width="500" height="500"/>
                      </div>
                      <div id="rupess" style={{display:"flex",justifyContent:"center" ,flexWrap:"wrap"}}>
                             <h1>700</h1>
                      </div>
                      <div id="rupess" style={{display:"flex",justifyContent:"center" ,flexWrap:"wrap"}}>
                             <Button variant="contained" color="success">Order Now</Button>
                      </div>
                    </>
                  ):(
                    <h1></h1>
                  )

                    
                   
                ))
            }
        
       </>
    )
}

