import React from 'react'

const LoadingProps = ( props ) => {


    return (
        <div className = 'spiner-block'>{
            !props.load ? (
            <button className='button'>LOAD</button>
                ) : (
            <div className='loader loader-animated' ></div>
            )}
        </div>
        )
    }

    export default LoadingProps;