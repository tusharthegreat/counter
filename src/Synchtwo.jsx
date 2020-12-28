import React, { useState } from 'react';
import './index.css';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
cytoscape.use( dagre );
const Synchtwo = ()=>{
    
    const [c,setC] = useState({
        c1:"",
        c2:""
    });
    const [v1,setV1]= useState({
        v10:"",
        v11:"",
        v12:"",
        v13:""
    });
    const [v2,setV2]= useState({
        v20:"",
        v21:"",
        v22:"",
        v23:""
    });
    const [n1,setN1]= useState({
        n10:"",
        n11:"",
        n12:"",
        n13:""
    });
    const [n2,setN2]= useState({
        n20:"",
        n21:"",
        n22:"",
        n23:""
    });
   const chng=(event)=>{
      const value =event.target.value;
      const name =event.target.name;
      setC((preVal)=>{
        if(name==="cc1"){
            return{c1:value,
            c2:preVal.c2
            };
        };
        if(name==="cc2"){
            return{c2:value,
            c1:preVal.c1
            };
        };
      });
   }
   const evaluate=()=>{
    var vv1 = [0,0,0,0];
    var vv2 = [0,0,0,0];
    var nn1 = [0,0,0,0];
    var nn2 = [0,0,0,0];
       var ss= c.c1;
       var ss2= c.c2;
      var arr1 = ss.split(',').map(function(ss){return Number(ss);});
      var arr2 = ss2.split(',').map(function(ss2){return Number(ss2);});
        for(var i=0;i<=arr1.length;i++){
            vv1[arr1[i]]=1;  
        }
        for(i=0;i<=arr2.length;i++){
            vv2[arr2[i]]=1;  
        }
        setV1({
        v10:vv1[0],
        v11:vv1[1],
        v12:vv1[2],
        v13:vv1[3],
        });
         setV2({
        v20:vv2[0],
        v21:vv2[1],
        v22:vv2[2],
        v23:vv2[3],
        });

        for(i=0;i<=4;i++){
            var x=(i-i%2)/2;
            if(vv1[i]===1){
                if(x===1){
                    nn1[i]=0;
                }
                else{
                    nn1[i]=1;
                }
            }
            else{
                nn1[i]=(x);
            }
            if(vv2[i]===1){
                if(i%2===1){
                    nn2[i]=0;
                }
                else{
                    nn2[i]=1;
                }
            }
            else{
                nn2[i]=(i%2);
            }
        }
        console.log(vv1);
        console.log(vv2);
        console.log(nn1);
        console.log(nn2);
        setN1({
            n10:nn1[0],
            n11:nn1[1],
            n12:nn1[2],
            n13:nn1[3]
            });
        setN2({
            n20:nn2[0],
            n21:nn2[1],
            n22:nn2[2],
            n23:nn2[3]
            });
            
      
   };
   return(
       <>
           <h1>Synchronous 2-bit</h1>
           <div className="form">
            <div className="fflop"> T<sub>A</sub>(A,B)=m( <input type="text" className="inp" id="dff1" placeholder="1,2,3.." name="cc1" onChange={chng} value={c.c1}/> )</div>
            <div className="fflop">T<sub>B</sub>(A,B)= m( <input type="text" className="inp" id="dff2" placeholder="1,2,3.." name="cc2" onChange={chng} value={c.c2}/> )</div>
            <button type="submit" className="clickme" onClick={evaluate} >Go 🙂</button>
           </div>
           <h2>State Table</h2>
           <div className="tab">
            <table className="tg">
            <thead>
            <tr>
                <th className="tg-0pky" colSpan="2">Present State</th>
                <th className="tg-0pky" colSpan="2">Flip-Flop Inputs</th>
                <th className="tg-0pky" colSpan="2">Next State</th>
            </tr>
            <tr>
                <td className="tg-0pky">A</td>
                <td className="tg-0pky">B</td>
                <td className="tg-0pky">T<sub>A</sub></td>
                <td className="tg-0pky">T<sub>B</sub></td>
                <td className="tg-0pky">A(n+1)</td>
                <td className="tg-0pky">B(n+1)</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="tg-0pky">0</td>
                <td className="tg-0pky">0</td>
                <td className="tg-0pky">{v1.v10}</td>
                <td className="tg-0pky">{v2.v20}</td>
                <td className="tg-0pky">{n1.n10}</td>
                <td className="tg-0pky">{n2.n20}</td>
            </tr>
            <tr>
                <td className="tg-0pky">0</td>
                <td className="tg-0pky">1</td>
                <td className="tg-0pky">{v1.v11}</td>
                <td className="tg-0pky">{v2.v21}</td>
                <td className="tg-0pky">{n1.n11}</td>
                <td className="tg-0pky">{n2.n21}</td>
            </tr>
            <tr>
                <td className="tg-0pky">1</td>
                <td className="tg-0pky">0</td>
                <td className="tg-0pky">{v1.v12}</td>
                <td className="tg-0pky">{v2.v22}</td>
                <td className="tg-0pky">{n1.n12}</td>
                <td className="tg-0pky">{n2.n22}</td>
            </tr>
            <tr>
                <td className="tg-0pky">1</td>
                <td className="tg-0pky">1</td>
                <td className="tg-0pky">{v1.v13}</td>
                <td className="tg-0pky">{v2.v23}</td>
                <td className="tg-0pky">{n1.n13}</td>
                <td className="tg-0pky">{n2.n23}</td>
            </tr>
            </tbody>
           </table>
           </div>
       </>
   );
};
export default Synchtwo;