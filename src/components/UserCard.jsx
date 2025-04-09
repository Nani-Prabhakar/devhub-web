import React from 'react'

const UserCard = ({user}) => {
    //console.log(user)
    const {firstName,age,lastName,photoUrl,gender,about}=user;
  return (
    <div className='flex justify-center my-12'>
        <div className=" rounded-md card bg-base-300 w-96 shadow-sm">
        <figure>
            <img
            src={photoUrl}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName+" "+lastName}</h2>
            {
              age && gender &&  <p>{gender +" "+"("+{age}+")"}</p>
            }
            <p>{about}</p>
            <div className=" flex card-actions justify-center">
            <button className="btn btn-secondary">ignore</button>
            <button className="btn btn-primary">interested</button>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default UserCard