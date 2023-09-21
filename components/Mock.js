
import { useEffect } from 'react';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { selectTask } from '../features/taskSlice';
export default function Mock () {
const tasks = useSelector(selectTask)
    useEffect(() => {
        const getData = async () => {
            try {
                let data = await AsyncStorage.getItem('@tasks')
                if(data !== null){
                    let tasksData = JSON.parse(data)
                    console.log(data)
                }
            }catch(error){
                console.log(error)
            }
        }; getData()
    },[])

    return (
        <></>
    )
}