	import * as React from 'react';
	import Avatar from '@mui/material/Avatar';
	import Button from '@mui/material/Button';
	import CssBaseline from '@mui/material/CssBaseline';
	import TextField from '@mui/material/TextField';
	import FormControlLabel from '@mui/material/FormControlLabel';
	import Checkbox from '@mui/material/Checkbox';
	import Link from '@mui/material/Link';
	import Grid from '@mui/material/Grid';
	import Box from '@mui/material/Box';
	import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
	import Typography from '@mui/material/Typography';
	import Container from '@mui/material/Container';
	import { createTheme, ThemeProvider } from '@mui/material/styles';
	import { useHistory } from 'react-router-dom';
	import axios from "axios";

	function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
		<Link color="inherit" href="https://material-ui.com/">
			Your Website
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
		</Typography>
	);
	}

	const theme = createTheme();

	export default function Register() {
		const history = useHistory();

		const handleSubmit = (event) => {
			event.preventDefault();
			const data = new FormData(event.currentTarget);
			// eslint-disable-next-line no-console
			const body = {
				username: data.get('email'),
				password: data.get('password'),
			}
			if(body.username && body.password){
				axios.post("http://localhost:8000/register", body)
				.then(res => {
					if (res.data.message == "sucessfull"){
						console.log(res)
						alert("Register Successful, Now You Can Login")
					}else{
						alert("An Error Occured")
					}
					
				})
			}
		};

		return (
			<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
				>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Register
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="User Name"
					name="email"
					autoComplete="email"
					autoFocus
					/>
					<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
					/>
					<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
					>
					Register
					</Button>
				</Box>
				</Box>
			</Container>
			</ThemeProvider>
		);
	}