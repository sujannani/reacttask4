import Axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useEffect,useState} from 'react';

export function RecordData(){
    const [data, setData] = useState(null);
    useEffect(()=>{
        Axios.get("https://dummyjson.com/users")
        .then((res)=>{
            if(res.status===200){
                setData(res.data.users);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[])
    var rows = () => {
        const rowsArray = [];
        for (let i = 0; i < data.length; i++) {
          rowsArray.push(
            <tr key={i} class="text-start">
              <td class="ps-1">{data[i].id}</td>
              <td class="ps-1"><img src={data[i].image} alt="Profile Pic" style={{width:'60px',height:'60px',backgroundColor:'transparent',}} /></td>
              <td class="ps-1">{data[i].firstName}</td>
              <td class="ps-1">{data[i].lastName}</td>
              <td class="ps-1">{data[i].gender}</td>
              <td class="ps-1">{data[i].email}</td>
              <td class="ps-1">{data[i].username}</td>
              <td class="ps-1">{data[i].domain}</td>
              <td class="ps-1">{data[i].ip}</td>
              <td class="ps-1">{data[i].university}</td>
            </tr>
          );
        }
        return rowsArray;
    };
    return(
        <div className="text-light p-3">
            <table className="table border border-rounded">
                <tr class="border">
                    <th class="p-2">Sno</th>
                    <th class="p-2">Profile Pic</th>        
                    <th class="p-2">First Name</th>        
                    <th class="p-2">Last Name</th>        
                    <th class="p-2">Gender</th>        
                    <th class="p-2">E-mail</th>        
                    <th class="p-2">Username</th>        
                    <th class="p-2">Domain</th>        
                    <th class="p-2">IP</th>        
                    <th class="p-2">University</th>
                </tr>
                {data && data.length > 0 && rows()}
            </table>
        </div>
    )
}