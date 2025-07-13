import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Box,Container,Typography,Link,IconButton, Grid} from '@mui/material'
const Footer = () => {
    const FooterData = [
        {
            title:"Home",
            links:['Become Affiliate','Go Unlimited','Services']
        },
        {
            title:"Home",
            links:['Design Systems','Themes & Templates','Mockups','Presentations','Wireframes Kits','UI Kits']
        },

        {
            title:"Legals",
            links:['License','Refund Policy','About Us','Contacts']
        },

        {
            title:"Blog",
            links:['Business Stories','Digital Store','Learning','Learning']
        },
    ];
    const socialicon=[
        {icon:<FacebookIcon/>,href:"#"},
        {icon:<TwitterIcon/>,href:"#"},
        {icon:<InstagramIcon/>,href:"#"}
    ]
  return (
    <Box sx={{bgcolor:"#000",color:"#fff",py:6}}>
        <Container maxWidth="lg">
            <Grid container spacing={4} >
                <Grid item xs={12} md={3}>
                <Typography>
                    <img src="/logo.png" alt="" />
                </Typography>

            </Grid>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 mx-auto justify-between'>

                  {
                FooterData.map((section,index)=>(
                    <Grid >
                        <Typography>
                            <div className='text-2xl'>
                                {section.title}
                            </div>
                            

                        </Typography>
                        {section.links.map((item,index)=>(
                            <Box key={index} >
                                <Link href="#" underline='node' color='inherit' display="block" sx={{my:1}}>
                                {
                                    item
                                }
                                </Link>

                            </Box>
                        ))}
                    </Grid>
                ))
            }

            </div>
          
            </Grid>

<hr className='mt-10 mb-2 text-[#C4C4C4]' />
            <Box display="flex" justifyContent="center">
                {
                    socialicon.map((social,index)=>(
                        <IconButton key={index} href={social.href} color='inherit'>
                            {social.icon}

                        </IconButton>
                    ))
                }

            </Box>
            <Box mt={4} textAlign="center">
                <Typography>
                    &copy;{new Date().getFullYear()} sujon,All rights reserved
                </Typography>

            </Box>
            

        </Container>

    </Box>
  )
}

export default Footer
