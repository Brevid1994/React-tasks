import React from 'react'

const LoadingProps = ( props ) => {


    return (
      !props.load ? (
            <button className='button'>LOAD</button>
                ) : (
            <div className='loader loader-animated' ></div>
            )
        )
    }

    export default LoadingProps;