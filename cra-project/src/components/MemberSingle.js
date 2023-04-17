import React, {useState, useEffect } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';

const MemberSingle = (props) =>{
    const [Member, getMember] = useState([])

    const {id} = props.match.params;
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/accounts/members_data/${id}`)
        .then(response => response.json())
        .then(data => {
            getMember(data.map(member => <MemberData key={member.id} Member={member}/>))
        })
    },[id])


    const MemberData = (props) =>{
        const random_number = Math.floor(Math.random() * 100);
        const link = `https://api.adorable.io/avatars/250x275/${random_number}`
        const {fname,lname,email,age,username,guardian,g_class,rank,created_on} = props.Member;
        const style = {
            borderRadius: '20%',
            border: '2px solid black'
        }

        return(
            <div>
                <img style={style} src={link} alt="avatar"/>
                <p>User Name: {username}</p>
                <p>Name:{fname} {lname} </p>
                <p>Email: {email}</p>
                <p>Age: {age}</p>
                <p>Guardian: {guardian}</p>
                <p>Class: {g_class}</p>
                <p>Rank: {rank}</p>
                <p>Joined on: {created_on}</p>
            </div>
        )
    }

    return(
        <>
        <Header />
        <div className="container weekly-q">
            <div className="row">
                <div className="group-member">
                <div className="col-sm-4">
                    {Member}
                </div>
                <div className="col-sm-8">
                    <div className="bio">
                        <h2>Bio</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id nihil explicabo, optio molestiae odit. Totam quidem dignissimos consequatur exercitationem, laborum assumenda, rem voluptatum dolorum similique id repellendus maiores. Voluptatum eum exercitationem explicabo dolore eaque mollitia quibusdam dicta tempora numquam. Animi soluta, exercitationem tempora, neque earum fuga fugiat qui cumque obcaecati dolor voluptatem quos doloremque voluptates temporibus, voluptas rerum minima aliquid suscipit. Est blanditiis eaque nostrum harum, aliquid quasi illo dolore non, quidem commodi voluptatum tempore porro, debitis modi. Tenetur harum ad, vitae perspiciatis mollitia reiciendis ipsam voluptate adipisci aperiam atque reprehenderit alias eos sequi enim veritatis. Eligendi, quia corporis!</p>
                    </div>
                    <Link className="btn btn-primary" to='/members'>Back to members</Link>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MemberSingle;
