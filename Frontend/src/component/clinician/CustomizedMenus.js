import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
	))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 250,
		color:
			theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
		boxShadow:
			'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity,
				),
			},
		},
	},
}));

export default function CustomizedMenus(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const history = useHistory();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleLogin = (pName) => {
		props.setChangingPatient(true);
		const body = {
			username: pName,
			password: pName
		}
		axios.post("http://localhost:8000/api/auth/login", body)
		.then(res => {
			console.log(res);
			if (res.data.message == "login success"){
				props.setDate("2020-03-31")
				props.setChangingPatient(false);
				history.push("/clinician-summary")
			}else{
				alert("An Error Occured")
			}
			
		})
	}

	const handleClose = (pName) => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="demo-customized-button"
				aria-controls="demo-customized-menu"
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				variant="contained"
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
			>
				Select Patient
			</Button>
			<StyledMenu
				id="demo-customized-menu"
				MenuListProps={{
					'aria-labelledby': 'demo-customized-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem onClick={() => handleLogin("p01")} disableRipple>
					<AssignmentIndIcon />
					Patient 1
				</MenuItem>
				<MenuItem onClick={() =>handleLogin("p02")} disableRipple>
					<AssignmentIndIcon />
					Patient 2
				</MenuItem>
				<MenuItem onClick={() =>handleLogin("p03")} disableRipple>
					<AssignmentIndIcon />
					Patient 3
				</MenuItem>
				<MenuItem onClick={() =>handleLogin("p04")} disableRipple>
					<AssignmentIndIcon />
					Patient 4
				</MenuItem>
			</StyledMenu>
		</div>
	);
}