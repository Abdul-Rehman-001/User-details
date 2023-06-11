import { Avatar, Button, Card, CardContent, Grid,TextField } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export const User=()=>{
    const [data,setData]=useState([])
    const [Cust,setCust]=useState("")
    const [Addre,setAddre]=useState("")
    const [Tel,setTel]=useState("")
    const [Email,setEmail]=useState("")
    const [Date,setDate]=useState("")
    const [Alter,setAlter]=useState("")
    const [Indexnum,setIndexnum]=useState(null)
    const [isEdit, setIsedit]=useState(false)

    const payload={Cust,Addre,Tel,Email,Date,Alter}
    const payload1={setCust,setAddre,setTel,setDate,setAlter}
    
    const handleAdd=()=>{
    // if  (Cust.trim()!=="")
    // if  (Addre.trim()!=="")
    // if  (Tel.trim()!=="")
    // if  (Email.trim()!=="")
    // if  (Date.trim()!=="")
    // if  (Alter.trim()!=="")

        
        if(isEdit==true){
            localStorage.setItem('data', JSON.stringify([...data,payload]));
            data.splice(Indexnum,1,payload)
            setIndexnum(null)
            setIsedit(false)
            setCust("")
            setAddre("")
            setTel("")
            setDate("")
            setAlter("")
            setEmail("")
        }else{
        setData([...data,payload])
        setCust("")
        setAddre("")
        setTel("")
        setDate("")
        setAlter("")
        setEmail("")
        }
        // localStorage.setItem('data', JSON.stringify(data));
        localStorage.setItem('data', JSON.stringify([...data,payload]))
        console.log(data);
    }
    

    const handleDelete=(index)=>{
        const result=data.filter((elem,ind)=>ind !== index)
        setData(result)
        localStorage.setItem('data', JSON.stringify(result))
    }
    const handleEdit=(item,index)=>{
        setCust(item.Cust)
        setAddre(item.Addre)
        setTel(item.Tel)
        setEmail(item.Email)
        setDate(item.Date)
        setAlter(item.Alter)
        setIndexnum(index)
        setIsedit(true)
    }

    useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem('data'));
    setData(storedData);
    },[])
    return(

        <>
        <h1>UserDetails</h1>
        <Card>
            <CardContent>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                < PersonIcon/>

            </Grid>
            <Grid item xs={6} ></Grid>
            <Grid item xs={2} >
                  <EditIcon /> 
            </Grid>
            <Grid item xs={4}>
                <TextField 
                label="Customer Name"
                variant="outlined"
                fullWidth
                onChange={(e)=>setCust(e.target.value)}
                value={Cust}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField 
                label="Adress"
                variant="outlined"
                fullWidth
                onChange={(e)=>setAddre(e.target.value)}
                value={Addre}/>
            </Grid>
            <Grid item xs={4}>
                <TextField 
                label="Telephone Number"
                variant="outlined"
                fullWidth
                onChange={(e)=>setTel(e.target.value)}
                value={Tel}/>
            </Grid>
            <Grid item xs={4}>
                <TextField 
                label="E-mail"
                variant="outlined"
                fullWidth
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={Email}/>
            </Grid>
            <Grid item xs={4}>
                <TextField 
                
                variant="outlined"
                type="date"
                fullWidth
                onChange={(e)=>setDate(e.target.value)}
                value={Date}/>
            </Grid>
            <Grid item xs={4}>
                <TextField 
                label="Alt Telephone Number"
                variant="outlined"
                fullWidth
                onChange={(e)=>setAlter(e.target.value)}
                value={Alter}/>
            </Grid>
            
           <Grid item>
             {isEdit ?
            <Button variant="contained" color="error" onClick={handleAdd}>
    {isEdit ? "Update": "Submit"}
</Button> :
            <Button variant="contained" color="success" onClick={handleAdd}>
    {isEdit ? "Update": "Submit"}
</Button>
}
    </Grid>
       
            

        </Grid>
        <br /><hr />

        <Grid container spacing={2} >
        
            {
                data.length > 0 && data.map((item,index)=>{
                    return(
                        <>
                        <Grid item xs={4}>
                            <Card align="center">
                                <CardContent style={{backgroundColor:"darksalmon"}}>
                                <Avatar />

                        <h1>{item.Cust}</h1>
                        <h2>{item.Alter}</h2>
                        <h2>{item.Tel}</h2>
                        <h2>{item.Addre}</h2>
                        <h2>{item.Email}</h2>
                        <h2>{item.Date}</h2>
                        <h2>{item.Alter}</h2>
                        <DeleteIcon onClick={()=>handleDelete(index)} label="Delete" />
                        <EditIcon onClick={()=>handleEdit(item ,index)}/> 
                        </CardContent>
                        </Card>
                        </Grid>
                        
                        </>
                    )
                })
            }
            </Grid>
        </CardContent>
        </Card>
       

        </>
    )
}