import React, { useEffect, useRef, useState } from 'react';
import { NavBar } from "../../components/navbar/NavBar1";
import styles from './Catalogue.module.css';
import ButtonHoverBg from '../../components/CustomButton/ButtonHoverBg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Typography, Box, Modal } from "@mui/material";
import { Footer } from '../../components/footer/Footer';

gsap.registerPlugin(ScrollTrigger);

export function Catalogue() {
    const [viewMode, setViewMode] = useState('list');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const filtersRef = useRef(null);
    const titleRef = useRef(null);
    const containerRef = useRef(null);

    const products = [
        {
            id: 1,
            title: 'Malla Electrosoldada (a medida)',
            description: [
                'Mallas electrosoldadas para hormigón certificadas bajo norma UNIT 845:1995',
                'Medidas estándar de 600x240cm en stock',
                'Todos los diámetros, combinados de hasta 12+12 mm',
                'Presentación en paños y rollos',
                'Diseño de mallas especiales adaptadas a los requerimientos del proyecto',
                'Largos especiales que evitan empalmes y minimizan desperdicios',
                'Bigotes y entramados especiales con largos de hasta 12m',
                'Atillado de paquetes identificados con etiquetas',
                'Cortado de mallas a medida con guillotina',
                'Entrega del material de acuerdo al cronograma',
                'Controles de carga y descarga en obra mediante planillas',
                'Asistencia técnica permanente'
            ],
            extraInfo: 'Las mallas electrosoldadas son fundamentales para reforzar estructuras de hormigón. Nuestra capacidad de fabricarlas a medida permite optimizar el uso de material, reducir desperdicios y acelerar los procesos constructivos.',
            price: 'Entregas a todo el País',
            image: './images/mallaElectrosoldada.jpg',
            showModal: true
        },
        {
            id: 2,
            title: 'Malla Plegada',
            description: [
                'Combina las ventajas del cortado y doblado + mallas',
                'Diseños a medida con alta precisión',
                'Proceso industrializado con plegadora automatizada',
                'Optimiza el uso de hierro en obra',
                'Evita empalmes y atado manual',
                'Evita el armado de estructuras en obra',
                'Refuerzos de borde',
                'Entrega del material de acuerdo al cronograma',
                'Controles de carga y descarga en obra mediante planillas',
                'Asistencia técnica permanente'
            ],
            extraInfo: 'Las mallas plegadas representan un avance significativo en la prefabricación de armaduras para hormigón, reduciendo tiempos de obra y garantizando mayor precisión estructural.',
            price: 'Entregas a todo el País',
            image: './images/plegada.jpg',
            showModal: true
        },
        {
            id: 3,
            title: 'Barras Lisas (superficie uniforme y lisa)',
            description: [
                'Barras de acero de alta calidad con superficie lisa',
                'Ideales para proyectos estructurales y de construcción',
                'Certificadas bajo normas UNIT 34:1995 y UNIT 845:1995',
                'Barras cortadas a medida',
                'Entrega del material de acuerdo al cronograma',
                'Controles de carga y descarga en obra mediante planillas',
                'Asistencia técnica permanente'
            ],
            price: 'Entregas a todo el País',
            image: './images/barrasLisas.jpg',
            showModal: false
        },
        {
            id: 4,
            title: 'Barras Conformadas (superficie rugosa)',
            description: [
                'Barras de acero de alta calidad con textura rugosa',
                'Diseñadas para un mejor agarre en concreto y estructuras reforzadas',
                'Certificadas bajo normas UNIT 34:1995 y UNIT 845:1995',
                'Barras cortadas a medida',
                'Entrega del material de acuerdo al cronograma',
                'Controles de carga y descarga en obra mediante planillas',
                'Asistencia técnica permanente'
            ],
            price: 'Entregas a todo el País',
            image: './images/barras.jpg',
            showModal: false
        },
        {
            id: 5,
            title: 'Hierro Cortado y Doblado (a medida)',
            description: [
                'Sistema industrial de corte y doblado de varillas de acero',
                'Procesos de calidad garantizada',
                'Pedidos diseñados y validados en software especializado',
                'Pedidos identificados con colores por elemento estructural',
                'Entrega del pedido en paquetes identificados con doble etiquetado',
                'Diagramas y guías de armado en obra a petición',
                'Todos los diámetros y dimensiones'
            ],
            extraInfo: 'Ventajas para nuestros clientes:\n• Cero desperdicio de acero\n• Economía de tiempo y mano de obra\n• Dimensiones precisas según necesidades del proyecto\n• Identificación de los paquetes facilitando su uso y armado\n• Entrega del material de acuerdo al cronograma\n• Controles de carga y descarga en obra mediante planillas\n• Asistencia técnica permanente',
            price: 'Entregas a Todo el País',
            image: './images/cortadoYdoblado.jpg',
            showModal: true
        },
        {
            id: 6,
            title: 'Clavos de Acero',
            description: [
                'Clavos de acero de 2" y 2 1/2"',
                'Alta resistencia y durabilidad',
                'Entrega del material de acuerdo al cronograma',
            ],
            price: 'Entregas a todo el País',
            image: './images/clavos.jpg',
            showModal: false
        },
        {
            id: 7,
            title: 'Alambres Recocidos',
            description: [
                'Alambres Recocidos, ISWG 14, ISWG 16, ISWG 18',
                'Alta flexibilidad y resistencia',
                'Entrega del material de acuerdo al cronograma',
                'Controles de carga y descarga en obra mediante planillas',
                'Asistencia técnica permanente'
            ],
            price: 'Entregas a todo el país',
            image: './images/alambrerecocido2.jpg',
            showModal: false
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
                y: "200px",
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

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <section className={styles.catalogue}>
            <NavBar />
            <Box position="absolute" zIndex={0} marginTop={"8vh"}>
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

            <div ref={containerRef} className={styles.catalogueContainer}>
                <div className={styles.catalogueFilters}>
                    <div ref={filtersRef} className={styles.filtersContainer}>
                        <div className={styles.filters}>
                            <div className={styles.filterSubcontainer}>
                                <label></label>
                                <Link to={"/contact"}></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.catalogueProducts}>
                    <div className={styles.viewToggle}>
                        <button className={styles.viewToggleButton} onClick={() => setViewMode('grid')}>
                            <svg viewBox="0 0 16 16" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 1H1V7H7V1ZM7 9H1V15H7V9ZM9 1H15V7H9V1ZM15 9H9V15H15V9Z" fill="#000000"></path>
                            </svg>
                            Grid View
                        </button>
                        <button className={styles.viewToggleButton} onClick={() => setViewMode('list')}>
                            <svg fill="#000000" viewBox="-4 0 32 32" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.031 8.844c0-1.125-0.875-2-2-2s-2.031 0.875-2.031 2 0.906 2.031 2.031 2.031 2-0.906 2-2.031zM6.375 10.5h17.625v-3.25h-17.625v3.25zM4.031 16c0-1.125-0.875-2.031-2-2.031s-2.031 0.906-2.031 2.031 0.906 2 2.031 2 2-0.875 2-2zM6.375 17.625h17.625v-3.25h-17.625v3.25z"></path>
                            </svg>
                            List View
                        </button>
                    </div>
                    <div className={`${styles.productsList} ${styles[viewMode]}`}>
                        {products.map((product) => (
                            <div className={`${styles.productItem} ${styles[viewMode]}`} key={product.id}>
                                <img src={product.image} alt={product.title} />
                                <div className={styles.productInfo}>
                                    <div>
                                        <div className={styles.productHeader}>
                                            <img
                                                style={{ height: "2vw", width: "5vw", objectFit: "contain", padding: "0px 2px" }}
                                                className={styles.logoImage} 
                                                src='./images/paisanologo.png' 
                                                alt="Logo" 
                                            />
                                            <h3 className={styles.productTitle}>{product.title}</h3>
                                        </div>
                                        <ul className={styles.productDescriptionList}>
                                            {product.description.slice(0, 4).map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.productFooter}>
                                        <span className={styles.productPrice}>{product.price}</span>
                                        {product.showModal && (
                                            <button 
                                                className={styles.verMasBtn}
                                                onClick={() => handleOpenModal(product)}
                                            >
                                                Ver más
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal open={modalOpen} onClose={handleCloseModal}>
                <div className={styles.productModal}>
                    {selectedProduct && (
                        <>
                            <div className={styles.modalHeader}>
                                <h2>{selectedProduct.title}</h2>
                                <button className={styles.closeModalBtn} onClick={handleCloseModal}>×</button>
                            </div>
                            <div className={styles.modalContent}>
                                <div className={styles.modalLeft}>
                                    <img src={selectedProduct.image} alt={selectedProduct.title} />
                                    <p className={styles.modalPrice}>{selectedProduct.price}</p>
                                </div>
                                <div className={styles.modalRight}>
                                    <h3>Características:</h3>
                                    <ul className={styles.modalDescriptionList}>
                                        {selectedProduct.description.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    {selectedProduct.extraInfo && (
                                        <div className={styles.modalExtraInfo}>
                                            <h3>Información adicional:</h3>
                                            <p>{selectedProduct.extraInfo}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.modalFooter}>
                                <Link to="/contact">
                                    <button className={styles.contactBtn}>Solicitar información</button>
                                </Link>
                                <button className={styles.closeBtn} onClick={handleCloseModal}>Cerrar</button>
                            </div>
                        </>
                    )}
                </div>
            </Modal>

            <Footer />
        </section>
    );
}

export default Catalogue;