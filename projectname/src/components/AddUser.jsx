// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   TextField,
//   InputAdornment,
//   SvgIcon, Typography
// } from '@mui/material';
// // import { Search as SearchIcon } from '../../icons/search';
// // import { Upload as UploadIcon } from '../../icons/upload';
// // import { Download as DownloadIcon } from '../../icons/download';

// export const AddUser = (props) => (
//   <Box {...props}>
//     <Box
//       sx={{
//         alignItems: 'center',
//         display: 'flex',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap',
//         m: -1
//       }}
//     >
//       <Typography
//         sx={{ m: 1 }}
//         variant="h4"
//       >
//         Customers
//       </Typography>
//       <Box sx={{ m: 1 }}>
//         <Button
//           // startIcon={(<UploadIcon fontSize="small" />)}
//           sx={{ mr: 1 }}
//         >
//           Import
//         </Button>
//         <Button
//           // startIcon={(<DownloadIcon fontSize="small" />)}
//           sx={{ mr: 1 }}
//         >
//           Export
//         </Button>
//         <Button
//           color="primary"
//           variant="contained"
//         >
//           Add Customers
//         </Button>
//       </Box>
//     </Box>
//     <Box sx={{ mt: 3 }}>
//       <Card>
//         <CardContent>
//           <Box sx={{ maxWidth: 500 }}>
//             <TextField
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SvgIcon
//                       color="action"
//                       fontSize="small"
//                     >
//                       {/* <SearchIcon /> */}
//                     </SvgIcon>
//                   </InputAdornment>
//                 )
//               }}
//               placeholder="Search customer"
//               variant="outlined"
//             />
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   </Box>
// );


import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  // avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

export const AddUser = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* <Avatar
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        /> */}
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.timezone}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
);