 // prettier-ignore
// react-routers components

import * as React from 'react';

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components

import "./team_name.css";

// Prastuti  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import SendInvite from 'layouts/teams/sendInvite';
import { Grid } from '@mui/material';

function EventInfoList({ title, profiles}) {
  const renderProfiles = profiles.map(({ image, name, description }) => (
    <div>
    <MDBox key={name} component="li" display="flex" alignItems="center" py={2} mb={1} >
      <MDBox mr={2}>
        <MDAvatar src={image} alt="something here" shadow="md" />
      </MDBox>
      <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" px={2} r={3} >
        <MDTypography variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption" color="text">
          {description}
        </MDTypography>
      </MDBox>




  </MDBox>

   </div>

  ));

  return (
    <div>




      <MDBox mb={4} >
        <MDTypography align="center"><div className="team_name">Team Name</div></MDTypography>
      </MDBox>
      <MDBox mt={3} >
            <SendInvite/>
          </MDBox>
      <MDBox mt={3} mb={2} ml={3}>

    <Grid container spacing={1}>



              <Grid item xs={12} xl={7}>

                <MDBox pt={2} px={2}>
                  <MDTypography variant="h6" fontWeight="normal" textTransform="capitalize" color="black" >
                    {title}
                  </MDTypography>
               </MDBox>
               <MDBox p={2}>
                 <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                    {renderProfiles}
                 </MDBox>

               </ MDBox>

             </Grid>
            <Grid item xs={12} xl={5}>

             <MDBox pt={2} px={2}>
               <MDTypography variant="h6" fontWeight="normal" textTransform="capitalize" color="black" >
                    Team Members
               </MDTypography>
             </MDBox>
             <MDBox p={2}>
               <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                    {renderProfiles}
               </MDBox>

               </MDBox>
              </Grid>

  </Grid>
    </MDBox>



</div>



  );
}

// Setting default props for the EventInfoList
EventInfoList.defaultProps = {

};

// Typechecking props for the EventInfoList
EventInfoList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default EventInfoList;
