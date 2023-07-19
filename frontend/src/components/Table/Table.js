import React from 'react';
import './table.css';
import {Box, Typography} from "@mui/material";
import { GifBox } from '@mui/icons-material';

function Table() {
  return (
    <div >
        <Box px={10}>
            <Box px={45}>
        <Typography color='#1E90FF' variant='h4' fontWeight="600" mt={2}>
            PLACEMENTS
        </Typography></Box>
        <div >
        <table className='table'>
            <thead className='th'>
                <tr >
                    
                    <th className='th'>Branch</th>
                    <th className='th'>Total Strength</th>
                    <th className='th'>Eligible students</th>
                    <th className='th'>Placed Students</th>
                    <th className='th'>Highest Salary</th>
                    
                </tr>
            </thead>
            <tbody className='td'>
                <tr className='td'>
                    <td className='td'>Civil</td>
                    <td className='td'>144</td>
                    <td className='td'>102</td>
                    <td className='td'>78</td>
                    <td className='td'>6.5</td>
                </tr>
                <tr className='td'>
                    <td className='td'>EEE</td>
                    <td className='td'>173</td>
                    <td className='td'>122</td>
                    <td className='td'>69</td>
                    <td className='td'>6</td>
                </tr>
                <tr className='td'>
                    <td className='td'>ME</td>
                    <td className='td'>227</td>
                    <td className='td'>141</td>
                    <td className='td'>69</td>
                    <td className='td'>6.5</td>
                </tr>
                <tr className='td'>
                    <td className='td'>ECE</td>
                    <td className='td'>197</td>
                    <td className='td'>161</td>
                    <td className='td'>91</td>
                    <td className='td'>22</td>
                </tr>
                <tr className='td'>
                    <td className='td'>CSE</td>
                    <td className='td'>264</td>
                    <td className='td'>219</td>
                    <td className='td'>174</td>
                    <td className='td'>22</td>
                </tr>
                <tr className='td'>
                    <td className='td'>IT</td>
                    <td className='td'>61</td>
                    <td className='td'>42</td>
                    <td className='td'>31</td>
                    <td className='td'>22</td>
                </tr>
                <tr className='td'>
                    <td className='td'>ECM</td>
                    <td className='td'>45</td>
                    <td className='td'>25</td>
                    <td className='td'>23</td>
                    <td className='td'>6</td>
                </tr>
            </tbody> 
                    </table>
                    </div>
                    </Box>
    </div>
  )
}

export default Table