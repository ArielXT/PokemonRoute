import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";

const Home = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        apellido: "",
        telefono: "",
        dni: "",
        pais: "",
        ciudad: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSendData = (event) => {
        event.preventDefault();
        console.log(values)
    };

    return (
        <Container>
            <form action="" onSubmit={handleSendData}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1>Home : DEVELOPER MODE ACTIVADED</h1>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Ingrese su Correo" name="email"  fullWidth onChange={handleInputChange}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Ingrese su Nombre" name="name" fullWidth onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Ingrese su Apellido" name="apellido" fullWidth onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Ingrese su Telefono" name="telefono" fullWidth onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Ingrese su DNI" name="dni" fullWidth onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Ingrese su Pais" name="pais" fullWidth onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Ingrese su Ciudad" name="ciudad" fullWidth onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" color="primary" variant="contained">
                            Home Button
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};
export default Home;