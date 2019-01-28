import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine  } from 'react-sparklines';

 export default (props)=>{

   function average(data){
     return (_.round(_.sum(data)/data.length));
   }

   return(
     <div>
       <Sparklines svgWidth={280} Hight={120} data={props.data}>
         <SparklinesLine color={props.colour} />
          <SparklinesReferenceLine type="mean" />
       </Sparklines>
       <div>{average(props.data)} {props.units}</div>
     </div>
   )
 }
