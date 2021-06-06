import {useState,useEffect, useRef} from 'react'


export default function useNearScreen(distance) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()


    useEffect(() => {
        let observer
        const onChange = (entries, observer) =>{
            const element = entries[0]
            if(element.isIntersecting){
                setShow(true)
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import('intersection-observer')
        ).then(()=>{
            observer = new IntersectionObserver(onChange, {
                rootMargin : distance,
                threshold: 0.5
            })
            observer.observe(fromRef.current)
        })

        

        return () => observer && observer.disconnect()
    })

    return {isNearScreen, fromRef}
}