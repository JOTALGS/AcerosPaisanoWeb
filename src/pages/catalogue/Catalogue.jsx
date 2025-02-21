import React, { useEffect, useRef, useState } from 'react';
import './Catalogue.css';
import { NavBar } from "../../components/navbar/NavBar";
import ButtonHoverBg from '../../components/CustomButton/ButtonHoverBg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Typography, Box } from "@mui/material";
import { Footer } from '../../components/footer/Footer';

gsap.registerPlugin(ScrollTrigger);

export function Catalogue() {
    const [viewMode, setViewMode] = useState('list');
    const filtersRef = useRef(null);
    const titleRef = useRef(null);
    const containerRef = useRef(null);

    const products = [
        {
            id: 1,
            title: 'Malla Electrosoldada (a medida)',
            description: 'Mallas electrosoldadas para hormigón. Certificadas bajo norma UNIT 845:1995. Medidas estándar de 600x240cm en stock. Todos los diámetros, combinados de hasta 12 +12 mm. Presentación en paños y rollos. Diseño de mallas especiales que se adapten a los requerimientos del proyecto. Largos especiales que evitan empalmes y minimizan desperdicios. Bigotes y entramados especiales. Largos de hasta 12m. Atillado de paquetes identificados con etiquetas. Cortado de mallas a medida con guillotina.',
            price: 'Entregas a todo el Pais',
            image: './images/mallaElectrosoldada.jpg',
        },
        {
            id: 2,
            title: 'Malla Plegada',
            description: 'Combina las ventajas del cortado y doblado + mallas. Diseños a medida. Alta precisión. Proceso industrializado con plegadora automatizada. Optimiza el uso de hierro en obra. Evita empalmes y atado manual. Evita el armado de estructuras en obra. Refuerzos de borde.',
            price: 'Consultar',
            image: './images/mallaPlegada.jpg',
        },
        {
            id: 3,
            title: 'Barras Lisas (superficie uniforme y lisa)',
            description: 'Barras de acero de alta calidad con superficie lisa, ideales para proyectos estructurales y de construcción. Certificadas bajo normas UNIT 34:1995 Y UNIT 845:1995, Barras cortadas a medida.',
            price: 'Entregas a todo el Pais',
            image: './images/barrasLisas.jpg',
        },
        {
            id: 4,
            title: 'Barras Conformadas (superficie rugosa)',
            description: 'Barras de acero con textura rugosa, diseñadas para un mejor agarre en concreto y estructuras reforzadas. Certificadas bajo normas UNIT 34:1995 Y UNIT 845:1995',
            price: 'Entregas a todo el Pais',
            image: './images/barrasConformadas.jpg',
        },
        {
            id: 5,
            title: 'Hierro Cortado y Doblado (a medida)',
            description: 'Sistema industrial de corte y doblado de varillas de acero. Permite cumplir con las especifiaciones del proyecto. Asesoramiento y seguimiento de obra por técnicos especializados. Entregas en obra según cronograma definido. Procesos de calidad garantizada. Pedidos diseñados y validados en software especializado. Pedidos identificados con colores por elemento estructural. Entrega del pedido en paquetes identificados con doble etiquetado. Diagramas y guías de armado en obra a petición. Todos los diámetros y dimensiones. Ventajas para nuestros clientes: Cero desperdicio de acero, economía de tiempo y mano de obra, Dimensiones precisas según necesidades del proyecto, Identificación de los paquetes facilitando su uso y armado, Entrega del material de acuerdo al cronograma, Controles de carga y descarga en obra mediante planillas, Asistencia técnica permanente.',
            price: 'Entregas a Todo el Pais',
            image: './images/cortadoYdoblado.jpg',
        },
        {
            id: 6,
            title: 'Clavos de Acero',
            description: 'Clavos de acero de 2" y 2 1/2".',
            price: 'Entregas a todo el Pais',
            image: './images/clavos.jpg',
        },
        {
            id: 7,
            title: 'Alambres Recocidos',
            description: 'Alambres Recocidos, ISWG 14, ISWG 16, ISWG 18',
            price: 'Entregas a todo el país',
            image: './images/alambresRecocidos.jpg',
        },
    ];

    useEffect(() => {
        // Timeline for synchronized animations
        const tl = gsap.timeline({ delay: 0.5 });

        // Title animation - starts from being hidden above
        tl.fromTo(
            titleRef.current,
            { 
                y: "0",
                opacity: 0 
            },
            { 
                y: "0",
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        // Container animation - slides down after title appears
        tl.fromTo(
            containerRef.current,
            { 
                y: "0" 
            },
            { 
                y: "180px",
                duration: 1.5,
                ease: "power3.out"
            },
            "-=0.5" // Start slightly before the title animation ends
        );

        const trigger = ScrollTrigger.create({
            trigger: filtersRef.current,
            start: "top 10%",
            end: "+=120%",
            pin: true,
            scrub: 5,
            pinSpacing: true,
            markers: false,
            onEnter: () => {
                console.log("Element pinned");
            },
            onLeave: () => {
                console.log("Element unpinned");
            }
        });

        return () => {
            trigger.kill();
        };
    }, []);

    const handleOpenModal = (modalId) => {
        console.log(`Opening modal: ${modalId}`);
    };

    return (
        <section className='catalogue'>
            <NavBar />
            <Box position="absolute" zIndex={0}>
                <Typography 
                    ref={titleRef}
                    variant="h2" 
                    sx={{
                        fontSize: '120px',
                        fontFamily: "Outfit",
                        fontWeight: 300,
                        color: '#fff'
                    }}
                >
                    Productos y Servicios
                </Typography>
            </Box>

            <div ref={containerRef} className="catalogue-container">
                <div className="catalogue-filters">
                    <div ref={filtersRef} className={`filters-container`}>
                        <div className="filters">
                            <div className="filter-subcontainer">
                                <label>
                                </label>
                                <Link to={"/contact"}>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="catalogue-products">
                    <div className="view-toggle">
                        <button className='view-toggle-button' onClick={() => setViewMode('grid')}>
                            <svg viewBox="0 0 16 16" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1H1V7H7V1ZM7 9H1V15H7V9ZM9 1H15V7H9V1ZM15 9H9V15H15V9Z" fill="#000000"></path>
                                </g>
                            </svg>
                            Grid View
                        </button>
                        <button className='view-toggle-button' onClick={() => setViewMode('list')}>
                            <svg fill="#000000" viewBox="-4 0 32 32" width="30" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>list</title>
                                    <path d="M4.031 8.844c0-1.125-0.875-2-2-2s-2.031 0.875-2.031 2 0.906 2.031 2.031 2.031 2-0.906 2-2.031zM6.375 10.5h17.625v-3.25h-17.625v3.25zM4.031 16c0-1.125-0.875-2.031-2-2.031s-2.031 0.906-2.031 2.031 0.906 2 2.031 2 2-0.875 2-2zM6.375 17.625h17.625v-3.25h-17.625v3.25zM4.031 23.125c0-1.125-0.875-2-2-2s-2.031 0.875-2.031 2 0.906 2.031 2.031 2.031 2-0.906 2-2.031zM6.375 24.719h17.625v-3.219h-17.625v3.219z"></path>
                                </g>
                            </svg>
                            List View
                        </button>
                    </div>
                    <div className={`products-list ${viewMode}`}>
                        {products.map((product) => (
                            <div className={`product-item ${viewMode}`} key={product.id}>
                                <img src={product.image} alt={product.title} />
                                <div className="product-info" style={{ maxWidth: viewMode === 'grid' ? '100%' : undefined }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                            <img 
                                                style={{ 
                                                    backgroundColor: '#e40000', 
                                                    padding: '5px', 
                                                    border: 'none', 
                                                    width: '150px', 
                                                    margin: '0px', 
                                                    marginRight: '15px' 
                                                }} 
                                                src='./images/paisanologo.png' 
                                                alt="Logo" 
                                            />
                                            <h3 className="product-title">{product.title}</h3>
                                        </div>
                                        <p className="product-description">{product.description}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span className="product-price">{product.price}</span>
                                        {product.id === 1 && (
                                            <button 
                                                style={{ 
                                                    backgroundColor: 'transparent', 
                                                    border: 'none', 
                                                    padding: '10px', 
                                                    cursor: 'pointer' 
                                                }} 
                                                onClick={() => { 
                                                    handleOpenModal("industrias"); 
                                                    window.scrollTo(0, 2000); 
                                                }}
                                            >
                                                Ver mas
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Catalogue;