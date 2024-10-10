import React from 'react';
export const Profile = (props) => {
  return (
    <>
      <div className="user-card-container ">
        <div className="user-card ">
          <h4 className='marg-bot'>{props.title}</h4>


          <img src={props.imgAdd} alt="" />
          <p><b> FirstName:</b> {props.name}</p>
          <p><b>Lastname:</b>{props.lastname}</p>
          <p><b>Email:</b>{props.Email}</p>


          <button style={{
            color:props.color,
            borderRadius:props.borderRadius,
            border:props.border,
            backgroundColor:props.backgroundColor,
            padding:props.padding,
            width:props.width,
            marginBlock:props.marginBlock,
            fontSize:props.fontSize,
            cursor:props.cursor

          }}>Read More</button>
        </div>

      </div>


    </>

  )
}
export default Profile;
