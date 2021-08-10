import { useEffect, useRef, useState } from 'react'
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
        <div className="" ref={vantaRef} style={{ width: "100%", height: "300px" }}>
            <Container>
                <Row className="text-white">
                    <h3>Heelo</h3>
                </Row>
            </Container>
        </div>
    )
}

export default header
