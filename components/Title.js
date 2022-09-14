import React from 'react'
import Styles from '../styles/Title.module.css'

export default function Title(props){
    return (

        <><div>Welcome <span className={Styles.title_name}>{props.name}</span> to the next_box</div></>


)

}