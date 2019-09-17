import React from 'react';

function Demo() {
  let data="你好啊";
  var names=["youzi","marisa","kzki"];

  return (   
    <div className="App">
       {
            names.map(function(name){
                return <li>Hello {name} ,{data}！</li>
            })
        }
        <li>Hello {data} ,你好！</li>
    </div>
  );
}

export default Demo;
