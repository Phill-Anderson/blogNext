import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import NET from "vanta/dist/vanta.net.min"
import WAVES from "vanta/dist/vanta.waves.min"
import * as THREE from 'three'
import { Container, Row } from 'react-bootstrap'

const header = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(WAVES({
                el: vantaRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x7a7a7a,
                shininess: 24.00,
                waveHeight: 7.00,
                waveSpeed: 0.80,
                zoom: 1.02
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <div className="" ref={vantaRef} style={{ width: "100%", minHeight: "300px" }}>
            <Container>
                <Row className="text-white">
                    <div className="col-md-9">
                        <div className="headerText">
                            <h5 className="text-right">Судалж мэдсэн бүхнээ бусадтайгаа хуваалцья!</h5>
                            <p className="text-right">CSS3, TAILWINDCSS, BOOTSTRAP, SASS, JAVASCRIPT, REACT, NEXT, NODEJS, MYSQL, MONGODB, EXPRESSJS, GIT, GITHUB</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="float-right pt-5">
                            <Image src="/images/profile.jpg" width="250" height="200" layout="intrinsic" className="rounded float-right" />
                            <h5>Санжаажамц Энхтайван</h5>
                            <p> MERN STACK хөгжүүлэгч</p>
                        </div>
                    </div>

                </Row>
            </Container>
        </div>
    )
}

export default header
