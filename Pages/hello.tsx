import React, { useState, useEffect} from 'react';
import {TextInput, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {loginRequest  } from "../Redux/Action/userAction";
import { useDispatch, connect, useSelector } from 'react-redux';

interface Props {
    name: string;
    enthusiasmLevel?: number;
}

 const Hello: React.FC<Props> = props => {

    var dispatch = useDispatch()
    
    const [name, setName] = useState()
    const [salary, setSalary] = useState()
    const [age, setAge] = useState()
    const [id, setID] = useState()
    const data = { name:name, salary:salary, age:age, id:id };
    const newState = useSelector(state => state);

    // this is function calling...
    useEffect(() => { 
        
        
    });
    
    const onSubmitt=()=>{
        for(let i=1;i<=5;i++){
            for(let j=0;j<i;j++){
                console.log("*".repeat(i));
            }
        }
        //  dispatch(loginRequest(data));
         }

  
      return (
        <View style={[styles.root,{flex:1, paddingTop:100}]}>
                <TextInput style={{height:40, width:250, marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="Name" 
                    onChangeText={(value)=>setName(value)}/>
                <TextInput style={{height:40, width:250, marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="Salary" 
                    onChangeText={(value)=>setSalary(value)}/>
                <TextInput style={{height:40, width:250, marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="Age" 
                    onChangeText={(value)=>setAge(value)}/>
                <TextInput style={{height:40, width:250, marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="ID" 
                    onChangeText={(value)=>setID(value)}/>
                <TouchableOpacity style={{height:40, width:200, backgroundColor:"#DDDD"}} onPress={()=>onSubmitt()}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>

                {/* <Text style={{color:'black',fontSize:15,}}>{state}</Text> */}
        </View>
      );

    }

    export default connect()(Hello);


// styles
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        alignSelf: 'center',
    },
});

