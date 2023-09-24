import React from 'react';
const asisten = {
 name : 'Anas Noor Hakim',
 jurusan : 'Teknik Komputer 2020'
};
function greetings(asisten){
 return asisten.name + ' dari ' + asisten.jurusan;
}
//menggunakan JSX
const ReactJSX = () => {
 return (
 <div>
 <h1>Belajar JSX</h1>
 <h2>Belajar JSX --- {greetings(asisten)}</h2>
 <p style={{color:'#00ffff'}}>ini adalah contoh 
menggunakan JSX</p>
 </div>
 );
}
//tidak menggunakan JSX
const ReactNoJSX = () => {
    return React.createElement('div', null, 
    React.createElement('h1', null, 'Halo Praktikan hehe'),
    React.createElement('h2', null, 'Kami dari Kelompok 32', ), 
    React.createElement('h3', null, greetings(asisten) ),
    React.createElement('p2', {style:{color:'#ff0000'}}, 'ini adalah contoh tanpa JSX')
 )
   } 
   export default ReactJSX;
   export {ReactNoJSX};