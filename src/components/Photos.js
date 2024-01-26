
import lia1 from '../assets/about/lia1.jpg'
import lia2 from '../assets/about/lia2.jpg'
import lia3 from '../assets/about/lia3.jpg'
import lia8 from '../assets/about/lia8.jpg'
import lia4 from '../assets/about/lia4.png'
import lia6 from '../assets/about/lia6.jpg'
import lia5 from '../assets/about/lia5.jpg'
import lia7 from '../assets/about/lia7.jpg'
import lia9 from '../assets/about/lia9.jpg'
import lia10 from '../assets/about/lia10.jpg'
import lia11 from '../assets/about/lia14.jpg'
import lia12 from '../assets/about/lia12.jpg'
import lia13 from '../assets/about/lia13.jpg'
import lia14 from '../assets/about/tema-vitalik.jpg'
import lia15 from '../assets/about/tema-herdao.jpg'
import lia16 from '../assets/about/coedia1.jpg'
import lia17 from '../assets/about/coedia.jpg'
import lia18 from '../assets/about/hack-3.jpg'
import lia19 from '../assets/about/denver.jpeg'
import lia20 from '../assets/about/denver1.jpeg'

import lia21 from '../assets/about/argentina.jpeg'
import lia22 from '../assets/about/argentina1.jpeg'
import lia23 from '../assets/about/argentina2.jpeg'
import lia24 from '../assets/about/argentina3.jpeg'
import lia25 from '../assets/about/argentina4.jpeg'

import './photos.css'
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'

export const Photos = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Hackathons</h2>
                        <p></p>
                        <Accordion defaultActiveKey={['0']} alwaysOpen >
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header >Colombia</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
                                    <h3>EthBogota finalists #ethglobal</h3>
                                    <p>
                                        Decentralized social network to solve code problems using an open source help-and-earn framework to build a larger, stronger and more united Devs community
                                    </p>
                                    <div class="container">
                                        <div class="row text-center">
                                            <div class="col-md-4">
                                                <img src={lia17} class="img-rounded" alt="Image 1" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia16} class="img-rounded" alt="Image 2" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia2} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia4} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia8} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia6} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia7} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia15} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia14} class="img-rounded" alt="Image 3" />
                                            </div>
                                        </div>
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Brasil</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
                                    <h3>Eth Rio de Janeiro / ETH Samba</h3>
                                    <p>
                                        Tools in Spanish to boost your learning path in Blockchain and web3                                    </p>
                                    <div class="container">
                                        <div class="row text-center">
                                            <div class="col-md-4">
                                                <img src={lia9} class="img-rounded" alt="Image 1" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia10} class="img-rounded" alt="Image 2" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia3} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia5} class="img-rounded" alt="Image 3" />
                                            </div>
                                        </div>
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Argentina</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
                                    <h3>ETHArgentina</h3>
                                    <p>
                                        decentralized platform for project management that offers a secure and efficient solution for managing projects and teams. It provides project managers with tools to manage their projects, including the ability to create and manage teams, communicate with contributors, and securely store and access project information. Meanwhile, contributors can easily join projects, track their work, and receive payment through the platform's use of scrow smart contracts and point equivalent system. All information is stored on the Filecoin network, ensuring secure and reliable data storage. With its user-friendly interface and robust features, Toshare streamlines project management and provides a better experience for both project managers and contributors.                                    </p>

                                    <div class="container">
                                        <div class="row text-center">
                                            <div class="col-md-4">
                                                <img src={lia21} class="img-rounded" alt="Image 1" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia22} class="img-rounded" alt="Image 2" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia23} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia24} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia25} class="img-rounded" alt="Image 3" />
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>EEUU</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
                                    <h3>ETHDenver HACKATHON</h3>
                                    <p>
                                        we develop a Dapp (social media implemented with AI) on #LensProtocol
                                        VeriLens, is a web3 social network to verify the quality of content that users post
                                    </p>

                                    
                                    <div class="container">
                                        <div class="row text-center">
                                          
                                            <div class="col-md-4">
                                                <img src={lia13} class="img-rounded" alt="Image 2" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia19} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia20} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia11} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia18} class="img-rounded" alt="Image 3" />
                                            </div>
                                            <div class="col-md-4">
                                                <img src={lia12} class="img-rounded" alt="Image 1" />
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Peru</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
                                    <h3>1 place in Metahackathon Andino dao</h3>
                                    <p>
                                        With a crypto art project “Meta-Artesanias” that seeks to generate an impact on the Andean communities of the region, revaluing their art and culture, with the implementation of blockchain technology in the creation of NFT collections.
                                    </p>

                                    <h3>2nd Place of all Cibertec in "INNOVATION CHALLENGE"</h3>
                                    <p>
                                        A university experience in innovation contests, where I led the strategic planning for the creation of an application in Cibertec that was carried out at the PUCP
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Online</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
                                    <h3>FVM Space Warp hackathon</h3>
                                    <p>
                                        We develop a defi project
                                        ToShare
                                        is a decentralized platform for project management that offers a secure and efficient solution for managing projects and teams. It provides project managers with tools to manage their projects, including the ability to create and manage teams, communicate with contributors, and securely store and access project information. Meanwhile, contributors can easily join projects, track their work, and receive payment through the platform's use of scrow smart contracts and point equivalent system. All information is stored on the Filecoin network, ensuring secure and reliable data storage. With its user-friendly interface and robust features, Toshare streamlines project management and provides a better experience for both project managers and contributors.                                    </p>


                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}
