import React from 'react';
const asisten = {
 name : 'RPLBK K-32',
 jurusan : 'Teknik Komputer 2020'
};
function greetings(asisten){
 return asisten.name + ' dari ' + asisten.jurusan;
}
//menggunakan JSX
const ReactJSX = () => {
 return (
 <div>
 <h1>Tugas Modul II</h1>
 <h2>Praktikum--- {greetings(asisten)}</h2>

 </div>
 );
}
//tidak menggunakan JSX
const ReactNoJSX = () => {
    return React.createElement('div', null, 
    React.createElement('h1', null, 'Halo Praktikan Yohoho ho ho'),
    React.createElement('h2', null, 'Kami dari Kelompok 32', ), 
    React.createElement('h3', null, greetings(asisten) ),
 )
   } 
   export default ReactJSX;
   export {ReactNoJSX};