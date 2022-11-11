let variable = 2;

if (variable > 5) {
    console.log("message_x") ; //UNO
    if (variable < 8)  {                     //MAYOR QUE 5 Y  MENOR8
        console.log("message_y") ; //DOS
    } else                                   //MAYOR QUE 5 Y 8
        console.log("message_Z") ; //TRES
} else                                     
    if (variable >1) {                    //MENOR QUE 5 Y MAYOR QUE 1
        console.log("message_y") ;
    } else                                //mENOR QUE 5 Y MENOR QUE 1
        console.log("message_Z") ;
