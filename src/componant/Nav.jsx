import React from "react"
import {Grid} from "@mui/material"
import { Link } from "react-router-dom"

export const Nav=()=>{

    return(
        <div className="ul">
        <Grid container spacing={1}>
            <Grid item xs={1} >
           <Link to="/" >HOME</Link>
            </Grid>
            <Grid item xs={1} >
           <Link to="/UserDetail" >USER</Link>
            </Grid>

        </Grid>
        </div>
    )
}