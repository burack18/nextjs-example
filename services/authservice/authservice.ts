import { SignInRequest } from '@/types/requestTypes/SignInRequest';
import { SignUpRequest } from '@/types/requestTypes/SignUpRequest';
import axios from 'axios';
import useSWR from 'swr';

const singUp = async(request:SignUpRequest):Promise<{isSucceS:boolean,User:any,message?:string}>=>{
    const baseapi=process.env.APP_BASE_API;
    try{
        const {data}=await axios.post(`${baseapi}/auth/signup`,request);
        return {isSucceS:true,User:data}
    }catch(err:any){
        return {isSucceS:false,User:{},message:err.message}
    }

}
const singIn = async(request:SignInRequest):Promise<{isSucceS:boolean,User:any,message?:string}>=>{
    const baseapi=process.env.APP_BASE_API;
    try{
        const {data}=await axios.post(`${baseapi}/auth/login`,request,{
            withCredentials:true
        });
        return {isSucceS:true,User:data.user}
    }catch(err:any){
        return {isSucceS:false,User:{},message:err.message}
    }

}
export const AuthService = {singUp,singIn}  