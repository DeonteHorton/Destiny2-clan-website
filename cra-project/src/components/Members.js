import React,{Component} from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'

const Loading = ()=>{
    let big = {
        fontSize:'72px',
        margin:'240px'
    }
    return <h1 style={big}>Loading Members</h1>
}

class Members extends Component{
    state = {
        account:[],
        loading:true
    }

    MemberData = (props) =>{
        const random_number = Math.floor(Math.random() * 100);
        // free Avatar api...... gives random avatars to use
        const link = `https://api.adorable.io/avatars/275/${random_number}`
        const style = {
            borderRadius: '20%',
            border: '2px solid black'
        }
    
        const {id,username,guardian,g_class,rank,created_on} = props.account
    
        return(
            <>
            <Link to={`/members/${id}`} className="group">
                <img style={style} src={link} alt="image from adorable api" />
                <p><strong>User name:</strong>{username}</p>
                <p><strong>Guardian:</strong>{guardian}</p>
                <p><strong>Class:</strong>{g_class}</p>
                <p><strong>Rank:</strong>{rank}</p>
                <p><strong>Joined on:</strong>{created_on}</p>
            </Link>
            </>
        )
    }

   
    componentDidMount(){
        fetch('http://localhost:3006/api/accounts/members_data')
        .then(response => response.json())
        .then(data =>{
            this.setState({
                account: data,
                loading:false
            })
        })
    }
    
    render(){
        const Members =this.state.loading ? <Loading /> : this.state.account.map(member => <this.MemberData key={member.id} account={member}/>)

        return (
            <>
            <Header />
            <div className="container weekly-q">
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                     {Members}
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Members