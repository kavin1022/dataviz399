	import * as React from 'react';
	import Avatar from '@mui/material/Avatar';
	import Button from '@mui/material/Button';
	import CssBaseline from '@mui/material/CssBaseline';
	import TextField from '@mui/material/TextField';
	import Link from '@mui/material/Link';
	import Grid from '@mui/material/Grid';
	import Box from '@mui/material/Box';
	import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
	import Typography from '@mui/material/Typography';
	import Container from '@mui/material/Container';
	import { createTheme, ThemeProvider } from '@mui/material/styles';
	import { useHistory } from 'react-router-dom';
	import axios from "axios";
	import CircularProgress from '@material-ui/core/CircularProgress';
	import { useState } from 'react';
import setDate from 'date-fns/setDate';

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

	export default function SignIn(props) {
		const history = useHistory();
		const [isPending, setIsPending] = useState(false);

		const handleSubmit = (event) => {
			setIsPending(true);
			event.preventDefault();
			const data = new FormData(event.currentTarget);
			// eslint-disable-next-line no-console
			const body = {
				username: data.get('email'),
				password: data.get('password'),
			}
			axios.post("http://localhost:8000/api/auth/login", body)
			.then(res => {
				console.log(res);
				if (res.data.message == "login success"){
					alert("login success")
					props.setLoggedIn(true);
					props.setDate("2020-03-30")
					console.log(props.date);
					history.push("/")
				}else if(res.data.message == "wrong credentials"){
					alert("Incorrect Password")
				}else{
					alert("An Error Occured")
				}
				setIsPending(false);
			})
			/*history.push("/")*/
		};

		return (
			<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				
				<Box sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
				}}>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
						
					</Avatar>
					
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					{isPending && <CircularProgress/>}
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Username"
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
						Sign In
						</Button>
						
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
								Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="/register" variant="body2">
								{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
						
					</Box>
				</Box>
			</Container>
			
			</ThemeProvider>
			
		);
	}