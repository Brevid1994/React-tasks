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
  

  return <p 
    style = { style }>
      Some text
    {props.text} 
    </p>

}

export default TextChanges; 
