import React from "react";
import ImageSlider from "./ImageSlider";
export default function Slide(){
    const slides = [
        { url: "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*", title: "Car" },
        { url: "https://www.topgear.com/sites/default/files/images/big-read/header-image/2022/09/284236066b9bd165fccc1bf6511ea6fc/DSC00147.jpg", title: "Car" },
        { url: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1674040280/autoexpress/2023/01/McLaren%20Artura.jpg", title: "Car" },
        { url: "https://hips.hearstapps.com/roa.h-cdn.co/assets/16/02/1452961328-mclaren-570s-coupe-2016-1600x1200-wallpaper-22-1.jpg", title: "Car" },
        { url: "https://imageio.forbes.com/specials-images/imageserve/5f962d31e7b04bbfd2f68758/Bugatti-Chiron-Super-Sport-300--Driving/960x0.jpg?height=473&width=711&fit=bounds", title: "Car" },
      ];
      const containerStyles = {
        width: "100vw",
        height: "60vh",
        margin: "0 auto",
      };
      return (
        <div>
          <div style={containerStyles}>
             <ImageSlider slides={slides} />
          </div>
        </div>
      );
}