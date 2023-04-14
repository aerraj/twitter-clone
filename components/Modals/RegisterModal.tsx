import useLoginModal from "@/hooks/useLoginModal";
import { useCallback,useState } from "react";

import useRegisterModal from "@/hooks/useRegisterModal";

import Input from "../Input";
import Modal from "../Modal";



const RegisterModal = () => {

const loginModal = useLoginModal();
const registerModal = useRegisterModal();
const [email,setEmail]=useState('');
const [name,setName]=useState('');
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');
const [isLoading,setIsLoading]=useState(false);

const onSubmit=useCallback(async()=>{
try{
setIsLoading(true);

//TODO Register ADD LOG IN
registerModal.onClose();

}catch(error){
console.log(error);
}finally{
    setIsLoading(false);
}

},[registerModal]);


const onToggle = useCallback(()=>{
if(isLoading){
  return;  
}
registerModal.onClose();
loginModal.onOpen();

},[isLoading, registerModal,loginModal]);


const bodyContent=(
    <div className="flex flex-col gap-4">
        <Input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
        />
                <Input
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
        value={name}
        disabled={isLoading}
        />
                <Input
        placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
        />
         <Input
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
        />
    </div>
)
const footerContent=(

<div className="
text-neutral-400
text-center mt-4">
<p>Have an account already?  

<span>  </span>
<span
onClick={onToggle} className="text-blue-400
cursor-pointer
hover:underline">Sign in</span>
</p>

</div>

)
    return ( 
<Modal
disabled={isLoading}
isOpen={registerModal.isOpen}
title="Create an account"
actionLabel="Sign Up"
onClose={registerModal.onClose}
onSubmit={onSubmit}
body={bodyContent}
footer={footerContent}
/>

     );
}
 
export default RegisterModal;