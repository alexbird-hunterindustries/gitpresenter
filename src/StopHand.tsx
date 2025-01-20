import React from "react";
import { Text } from "ink";
import Gradient from "ink-gradient";

const asciiArt = `
                            .;ldkOKXXNNNXXKOkdl;'                           
                       ,lOXMMMMMMMMMMMMMMMMMMMMMMMNOo;.                     
                   .oKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKo'                  
                .dNMMMMMMMMMMMMMMMMMWNNNWWMMMMMMMMMMMMMMMMNx'               
              ;0MMMMMMMMMMMMXko:'.         .';lkXMMMMMMMMMMMMK:             
            ;XMMMMMMMMMMKo,.                      ,o0MMMMMMMMMMNc           
          'KMMMMMMMMMNc.           cXN0.              :0MMMMMMMMMX;         
         xMMMMMMMMMMMMO.           NMMMx  '.            .dWMMMMMMMMk        
       .XMMMMMMMMMMMMMMMO'    ckk: NMMMx'WMMX              oWMMMMMMMN.      
      .NMMMMMMMKOMMMMMMMMMO' ,MMMM.NMMMxcMMMM               .0MMMMMMMW,     
     'WMMMMMMMx  'OMMMMMMMMM0dMMMM.NMMMxcMMMM .:l,            oMMMMMMMM;    
    .WMMMMMMMl     .OMMMMMMMMMMMMM.NMMMxcMMMM NMMMc            ;MMMMMMMW.   
    0MMMMMMMo        .OMMMMMMMMMMM.NMMMxcMMMM MMMMo             cMMMMMMMX   
   ,MMMMMMMK           'OMMMMMMMMM0WMMMxcMMMM MMMMo              kMMMMMMMc  
   KMMMMMMM.             'OMMMMMMMMMMMMxcMMMM MMMMo              .WMMMMMMN  
  .MMMMMMM0                .OMMMMMMMMMMOcMMMM MMMMo               xMMMMMMM' 
  ;MMMMMMMc                  cMMMMMMMMMMWMMMM MMMMo               ,MMMMMMMc 
  cMMMMMMM,                  ;MMMMMMMMMMMMMMM MMMMo               .MMMMMMMd 
  cMMMMMMM,                  ;MMMMMMMMMMMMMMM0MMMMo               .MMMMMMMo 
  ;MMMMMMMc         oKKd.    ;MMMMMMMMMMMMMMMMMMMMo               ;MMMMMMMc 
  .MMMMMMM0        .WMMMMO,  ;MMMMMMMMMMMMMMMMMMMMo               kMMMMMMM. 
   0MMMMMMM'        .oNMMMMX:lMMMMMMMMMMMMMMMMMMMMX;             .MMMMMMMX  
   'MMMMMMMK           lWMMMMMMMMMMMMMMMMMMMMMMMMMMMK;           OMMMMMMM:  
    OMMMMMMMd            dMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;        lMMMMMMMK   
    .NMMMMMMMo            .OMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;     cMMMMMMMW.   
     .NMMMMMMMk             :WMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;  xMMMMMMMW,    
      .NMMMMMMMX'            .KMMMMMMMMMMMMMMMMMMKxMMMMMMMMMXKMMMMMMMW'     
       .KMMMMMMMMk.            kMMMMMMMMMMMMMMMMO  .xWMMMMMMMMMMMMMMX.      
         oMMMMMMMMMk'           'OMMMMMMMMMMMM0;     .dWMMMMMMMMMMMx        
          .OMMMMMMMMMXl.          .;dOKXXKOd:.       .lXMMMMMMMMMK'         
            ,0MMMMMMMMMMXx;.                     .;dXMMMMMMMMMMX;           
              'OMMMMMMMMMMMMN0dc;..       ..,cdONMMMMMMMMMMMM0,             
                .lKMMMMMMMMMMMMMMMMMMWWWMMMMMMMMMMMMMMMMMMXo.               
                   .cOWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0l.                  
                       'cxKWMMMMMMMMMMMMMMMMMMMMMMXkl'                      
                            .,:ldkO0KKXXK0Okxoc,.`;

export const StopHand = () => (
  <Gradient colors={["red", "red", "yellow", "yellow"]}>
    <Text>{asciiArt}</Text>
  </Gradient>
);
