// Создать компонент Text который можно настраивать по четырем параметрам
// - выводить с его помощью разный текст
// - изменять размер текста, задавая его целым числом
// - изменять цвет текста
// - возможность делать текст подчеркнутым - передавая true или false проп

import React from 'react'


const TextChanges = ( props ) => {

  const style = {
      fontSize: `${props.size}px`, 
      color: `${props.color}`, 
      textDecoration: props.underline,
      padding: props.space,
  };
  

  return(
    <div className='dif-text'>
      <p style = { style }>
      {props.text} 
      </p>
    </div>

  ) 

}

export default TextChanges; 
