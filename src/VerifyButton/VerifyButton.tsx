import {ButtonProps, message, Button} from 'antd'
import { useEffect, useRef, useState } from 'react'
import styles from "./index.module.scss"


interface VerifyButtonProps extends Omit<ButtonProps, 'onClick'>{
    onClick: ()=>Promise<void>
}

const COUNT_DOWN_SECONDS = 60;

const VerifyButton =({onClick, ...restProps}: VerifyButtonProps)=>{
    let timerRef = useRef<ReturnType<typeof setInterval>>()
    const [time, setTime] = useState<number>(0)

    useEffect(()=>{
        timerRef.current && clearInterval(timerRef.current)
        return ()=>timerRef.current && clearInterval(timerRef.current)
    },[])

    useEffect(()=>{
        if(time === COUNT_DOWN_SECONDS) timerRef.current = setInterval(()=>setTime(time => --time), 1000)
        else if(time === 0) timerRef.current && clearInterval(timerRef.current)
    },[time])

    const onVerificationClicked = async ()=>{
        try{
            await onClick()
            setTime(COUNT_DOWN_SECONDS)
        }catch(err){
            message.error(err?.message||err)
        }
    }

    return (
        <Button {...restProps} disabled={!!time} onClick={onVerificationClicked} className={styles.verification_button}>
            {time? `Resend in (${time})s`:"Get Verification Code"}
        </Button>
    )

}

export default VerifyButton