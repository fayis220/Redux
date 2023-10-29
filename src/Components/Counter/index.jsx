import React, { useEffect, useState } from "react";
import Styles from "./counter.module.scss";
// import {increase, decrease} from '../../action'
import { fetchData, fetchData2} from '../../action'
import {connect} from 'react-redux';
import Image1 from '../../Assests/image1.jpg';
import Image2 from '../../Assests/image2.jpg';
import Image3  from '../../Assests/imag3.jpg';

 const Counter =( { fetchData, fetchData2, data, data2, error})=> {
const [counter , setCounter] = useState(0);


useEffect(()=>{
    fetchData2();
    fetchData();
},[])



const increases =()=>{
    setCounter(counter+1);
}

const decreases =()=>{
    setCounter(counter-1);
}

  return (
      <div className={Styles.container}>
        {JSON.stringify(data2)}
        {JSON.stringify(data)}
        Counter Appa sada sdasdas dasd as
        <div className={Styles.count}>
        <span  className={Styles.aaaa}>counter : {counter}</span>
        {/* <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrese</button> */}

        <button onClick={increases}>increase</button>
        <button onClick={decreases}>decrese</button>
        </div>
        <div className={Styles.parent}>
          <div className={Styles.child1}>dd</div>
          <div className={Styles.child2}>dd</div>
          <div className={Styles.child3}>dd</div>
        </div>
        <div className={Styles.images}>
        <img className={Styles.img} src={Image1} />
        <img className={Styles.img}  src={Image2} />
        <img className={Styles.img} src={Image3} />
        </div>
     
    
      </div>
  )
  
}

const mapStateToProps  = (state)=>{
return {
    data: state?.data?.data,
    error: state?.data?.data,
    data2: state?.data1?.data,
}
}

const mapDispatchToProps={
     fetchData,fetchData2
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(mapStateToProps, {increase, decrease}) (Counter);
