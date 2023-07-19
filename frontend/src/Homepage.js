import logo from './logo.svg';
import Banner1 from './components/BannerImages/H2.jpg';
import Banner2 from './components/BannerImages/H3.jpg';
import Banner3 from './components/BannerImages/H1.jpg';
import Banner4 from './components/BannerImages/B1.jpeg';
import Banner from './components/Banner';
import Year from './Year';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import "./Homepage.css"
import { Link } from 'react-router-dom';
import pdf from "./2018_22.pdf";
import pdf1 from "./2019_23.pdf";
import ResumeTipsCard from './ResumeTips';
import Form from './Form';

function Homepage() {
  const bannerImages = [Banner1, Banner2, Banner3, Banner4];
  return (
    <div className="App">
      <Banner images={bannerImages}/>
      <Box mt={8} ml={120} mb={-50} bgcolor='#fff'>
        <Typography variant='h4' color='#00BFFF'>Vignan Placement Analysis</Typography>
        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  2018-22 Report
                </Typography>
                <Link to='/2018'>
                <Button variant='contained'>View Report</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  2019-23 Report
                </Typography>
                <Link to='/2019'>
                <Button variant='contained'>View Report</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Companies (2018-22)
                </Typography>
                <Button variant='contained' href={pdf} download="2018_22.pdf">View Companies</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Companies (2019-23)
                </Typography>
                <Button variant='contained' href={pdf1} download="2019_23.pdf">View Companies</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {/* <Year/> */}
      <br/>
      <br/>
     
      <div><ResumeTipsCard/></div>
      <div><Form/></div>
    </div>
    
    
  );
}

export default Homepage;
