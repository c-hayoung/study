import React from 'react';

// function Food(props){
//   /* JSX에서 지정한 props를 인자로 받아온다. */
//   console.log(props.fav)
//   return <h1>I like Potato</h1>;
// }

function Food({fav}){
  /* JSX에서 지정한 props를 인자로 받아오고, 그 안의 fav값을 직접 인자로 적용하는 방법. */
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food 
        fav="kimchi" 
        something={true} 
        papapapa={["hello",1,2,3,4,true]} /> 
      {/* jsx, 임의 지정한 속성(property)을 따옴표와 텍스트로 지정 가능. */}
      {/* fav라는 property에 kimchi라는 value */}
      {/* property와 value들을 props라고 부름. */}
      <Food fav="ramen"/>
      <Food fav="samgiopsal"/>
      <Food fav="chukumi"/>
    </div>
  );
}

export default App;
