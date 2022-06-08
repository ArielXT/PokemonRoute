import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from "@mui/material";
import kanto from './img/kanto.png';
import johto from './img/johto.png';
import hoenn from './img/hoenn.png';
import sinnoh from './img/sinnoh.png';
import hisui from './img/hisui.png';
import teselia from './img/teselia.png';
import kalos from './img/kalos.png';
import alola from './img/alola.png';
import galar from './img/galar.png';
import "./index.css";

const Region = () => {
    return (
        <div className="Rotomdex">
            <Container>
                <br />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1>Regiones de Pokemon : DEVELOPER MODE ACTIVADED</h1>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                src={kanto}
                                title="Some title"
                                component="img"
                                height="140"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Kanto
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    La gran mayoría de las ciudades tiene nombres de colores: Ciudad Verde, Ciudad Carmín, Ciudad Celeste, etc., siendo la más importante por excelencia Ciudad Azafrán, pues en ella se encuentra la sede del centro empresarial más importante de la región, Silph S.A..
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Compartir</Button>
                                <Button size="small">Leer Más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                src={johto}
                                title="Some title"
                                component="img"
                                height="140"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Johto
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Las ciudades y pueblos de Johto comparten nombres de plantas y estaciones referentes a las flores.
                                    Es asi que tenemos a Pueblo Primavera, Ciudad Cerezo, Ciudad Malva, Pueblo Azalea, Ciudad Trigal, Ciudad Iris, Ciudad Olivo, Ciudad Orquídea, Pueblo Caoba, Ciudad Endrino.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Compartir</Button>
                                <Button size="small">Leer Más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                src={hoenn}
                                title="Some title"
                                component="img"
                                height="140"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Hoenn
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Hoenn cuenta con nueve ciudades y seis pueblos, además de numerosas cuevas, montañas, islas, un bosque y un desierto. Sus ciudades y pueblos no siguen una forma de nombramiento común, y en lugar de ello cada una tiene un nombre único por sus características.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Compartir</Button>
                                <Button size="small">Leer Más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <br />

                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                src={sinnoh}
                                title="Some title"
                                component="img"
                                height="140"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Sinnoh
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Presenta una cantidad de climas muy variados pero predominan los fríos. La región es mayormente terrestre, con solo cinco rutas marinas. Sinnoh es una región con un gran número de accidentes geográficos, prueba de ello es el Monte Corona que atraviesa toda la región dividiéndola en dos.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Compartir</Button>
                                <Button size="small">Leer Más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                src={hisui}
                                title="Some title"
                                component="img"
                                height="140"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Hisui
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Hisui se refiere a Sinnoh tal y como se conocía durante su descubrimiento y asentamiento, en un periodo histórico anterior a la Pokemon Platino.
                                    Según Metis, los primeros habitantes humanos de Hisui vivieron uno o dos milenios antes de los acontecimientos de Pokémon Legends: Arceus
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Compartir</Button>
                                <Button size="small">Leer Más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                src={teselia}
                                title="Some title"
                                component="img"
                                height="140"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Unova/Teselia
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Es la primera región basada en penínsulas, está dividida en tres regiones: este, centro y oeste, y es una de las regiones más aisladas de las demás.Está poblada por enormes ciudades llenas de edificios. La región es el epicentro de varias culturas, formas de pensar, gastronomía, orientaciones y artes.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Compartir</Button>
                                <Button size="small">Leer Más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                src={kalos}
                                title="Some title"
                                component="img"
                                height="140"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Kalos
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Muchos lugares de la región reflejan esta inspiración en el país galo: además del paralelismo entre Luminalia y París y la Torre Prisma y la Torre Eiffel, la ruta 7 se relaciona con el Valle de Loira, el Palacio Cénit con el Palacio de Versalles, el Castillo Caduco (en pueblo Vánitas) con el Castillo de Blois, la ruta 10 con los alineamientos de Carnac, la Torre Maestra con el Monte Saint-Michel y ciudad Témpera con Le Havre.Este contenido proviene de wikidex.net, y debe darse atribución a sus autores, tal como especifica la licencia.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Compartir</Button>
                                <Button size="small">Leer Más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                src={alola}
                                title="Some title"
                                component="img"
                                height="140"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Alola
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Es un archipiélago que se divide en cuatro islas principales. Alola está repleta de exuberante vegetación tropical y playas, algunas de sus islas poseen volcanes, grandes terrenos montañosos, pueblos y ciudades en las costas. Su clima es muy cálido, en general, excepto en algunas zonas como el Monte Lanakila, la montaña más alta de la región en la que suele nevar.
                                    Se trata de un destino turístico bastante popular en el mundo Pokémon que atrae a muchos visitantes.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Compartir</Button>
                                <Button size="small">Leer Más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                src={galar}
                                title="Some title"
                                component="img"
                                height="140"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Galar
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    La región de Galar presenta paisajes muy diversos, con zonas rurales, modernas ciudades, bosques frondosos y escarpadas montañas cubiertas de nieve. Humanos y Pokémon viven juntos en esta región y trabajan codo con codo para desarrollar su industria.
                                    <br />
                                    En Galar se observan ciudades grandes con prominente arquitectura clásica de ladrillos, entre otros estilos, así como una enorme ciudad más moderna en la zona norte de la región, sobre unas montañas nevadas.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Compartir</Button>
                                <Button size="small">Leer Más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container >


        </div>
    );
};

export default Region;