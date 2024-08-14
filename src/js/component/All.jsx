import React from "react";
import NavBar from "./home"
import JumBotron from "./jumbotron"
import CardHtml from "./card"


const MyFinalApp = () => {
    return (
        <div>
            <NavBar/>
            <JumBotron/>
            <div className="container">
                <div className="row">
                    <div className="col-3 mb-4">
                    <CardHtml 
                        title = {"Range Rover Sport"}
                        imageurl={"https://cdn.drivek.com/configurator-imgs/cars/es/Original/LAND-ROVER/RANGE-ROVER-SPORT/41091_SUV-5-DOORS/land-rover-range-rover-sport-front-view.jpg"}
                        description = {"Range Rover Sport de nueva generacioón. Un acabado lujoso para el todoterreno de la marca con la que firma un V8 de 575cv."}
                        buttonlabel = {"Range Rover Sport"}
                        link = {"https://www.landrover.es/range-rover/range-rover-sport/index.html"}
                        
                        /> 
                    </div>
                    <div className="col-3 mb-4">
                    <CardHtml 
                        title = {"Cabañita de los árboles"}
                        imageurl={"https://imagenes.elpais.com/resizer/v2/ATJ4ELVFYZOPNGW46TINRKI76Q.jpg?auth=e2f684f0974018bffb56ec68877c1f851254874eccef401d02ce528c1f338095&width=1200"}
                        description = {"Las cabañas en los árboles han cogido polularidad en los últimos años. Es una sitio donde puedes fusionar el confort y el relax."}
                        buttonlabel = {"Reservar Cabañita"}
                        link = {"https://cabanitasdelbosque.com/es"}
                        
                        /> 
                    </div>
                    <div className="col-3 mb-4">
                    <CardHtml 
                        title = {"John Deere 9RX"}
                        imageurl={"https://www.agriculture.com/thmb/Wm6j2b6gDFiUz1c-Ys0NvGo01A4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JohnDeere9RXtractor2-11bc703e144c4cb39726bd60b43b0483.JPG"}
                        description = {"El nuevo John Deere 9RX. Motor de 13.6 L. y 640cv nominales. Ha batido el record de Hectáreas labradas en 740 en 24h. Con sólo un consumo de 3,4 l/ha de gasoil."}
                        buttonlabel = {"Tractor 9RX"}
                        link = {"https://www.deere.es/es/tractores/grande/serie-9/9rx830/"}
                        
                        /> 
                    </div>
                    <div className="col-3 mb-4">
                    <CardHtml 
                        title = {"Cosechadora Serie X-1100"}
                        imageurl={"https://www.deere.es/assets/images/region-2/products/combines/x-series/0_r2g017223_large_large_aa906642d05c2af0aa825faab59106fa80fbf876.jpg"}
                        description = {"Cosechadora John Deere X9. 100 toneladas de capacidad de recoleción por hora gracias a su diseño de motor de 700cv. Disponible con hasta 15 metros de corte."}
                        buttonlabel = {"Cosechadora X9"}
                        link = {"https://www.deere.es/es/cosechadoras/serie-x/"}
                        
                        /> 
                        
                    </div>
                </div>
            </div>        
        </div>
        
    );
};

export default MyFinalApp;