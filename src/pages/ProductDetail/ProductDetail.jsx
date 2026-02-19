import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavBar } from '../../components/navbar/NavBar1';
import { Footer } from '../../components/footer/Footer';
import ProductGallery from '../../components/ProductComponents/ProductGallery';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet';
import './ProductDetail.css';

gsap.registerPlugin(ScrollTrigger);

// Products data
const productsData = {
  'mallas-electrosoldadas': {
    id: '01',
    title: 'Mallas Electrosoldadas',
    subtitle: 'Refuerzo estructural certificado',
    description: 'Mallas electrosoldadas para hormigón certificadas bajo norma UNIT 845:1995. Solución integral para el refuerzo de estructuras de hormigón con la más alta calidad.',
    specifications: [
      'Certificadas bajo norma UNIT 845:1995',
      'Medidas estándar de 600x240cm en stock permanente',
      'Medidas especiales fabricadas a pedido',
      '3.5mm en 15x15cm en rollos de 50m',
      '3.5mm en 20x20cm en rollos de 50m',
      '4.2mm en 15x15cm en paños de 600x245cm',
      '4.2mm en 15x15cm en rollos de 25m y 50m',
      '5.5mm en 15x15cm en paños de 600x245cm',
      'Todos los diámetros, combinados de hasta 12+12 mm',
    ],
    features: [
      'Presentación en paños y rollos',
      'Diseño de mallas especiales adaptadas a requerimientos del proyecto',
      'Largos especiales que evitan empalmes y minimizan desperdicios',
      'Bigotes y entramados especiales con largos de hasta 12m',
      'Atillado de paquetes identificados con etiquetas',
      'Cortado de mallas a medida con guillotina',
      'Entrega del material según cronograma',
      'Controles de carga y descarga mediante planillas',
      'Asistencia técnica permanente',
    ],
    technicalInfo: {
      'Norma': 'UNIT 845:1995',
      'Formato': 'Paños y rollos',
      'Medidas': '600x240cm',
      'Stock': 'Permanente',
      'Diámetros': 'Hasta 12+12mm',
      'Entrega': 'Programada'
    },
    availability: 'Entregas a todo el país',
    images: [
      { src: '/images/mallaElectrosoldada.jpg', alt: 'Mallas Electrosoldadas' },
      { src: '/images/mallas2.jpg', alt: 'Mallas Electrosoldadas detalle' },
      { src: '/images/mallas3.jpg', alt: 'Mallas Electrosoldadas proceso' },
      { src: '/images/mallas4.jpg', alt: 'Mallas Electrosoldadas medidas' },
      { src: '/images/mallas6.jpg', alt: 'Mallas Electrosoldadas aplicación' }
    ]
  },
  'mallas-plegadas': {
    id: '02',
    title: 'Mallas Plegadas',
    subtitle: 'Innovación en prefabricación de armaduras',
    description: 'Combina las ventajas del cortado y doblado con las mallas tradicionales. Proceso industrializado con plegadora automatizada.',
    specifications: [
      'Diseños a medida con alta precisión dimensional',
      'Proceso industrializado con plegadora automatizada',
      'Optimización del uso de hierro en obra',
      'Eliminación de empalmes y atado manual',
      'Refuerzos de borde integrados',
      'Adaptables a cualquier geometría estructural',
    ],
    features: [
      'Evita el armado de estructuras en obra',
      'Reduce mano de obra en un 60%',
      'Entrega según cronograma de obra',
      'Controles de carga y descarga mediante planillas',
      'Asistencia técnica permanente',
      'Trazabilidad completa del material',
    ],
    technicalInfo: {
      'Proceso': 'Automatizado',
      'Reducción MO': '60%',
      'Entrega': 'Programada',
      'Geometría': 'Adaptable',
      'Trazabilidad': 'Completa'
    },
    availability: 'Entregas a todo el país',
    images: [
      { src: '/images/plegada.jpg', alt: 'Mallas Plegadas' },
      { src: '/images/plegada1.jpg', alt: 'Mallas Plegadas proceso' },
      { src: '/images/plegada2.jpg', alt: 'Mallas Plegadas optimización' },
      { src: '/images/plegada3.jpg', alt: 'Mallas Plegadas formatos' },
      { src: '/images/plegada6.jpg', alt: 'Mallas Plegadas diseño' }
    ]
  },
  'hierro-cortado-doblado': {
    id: '03',
    title: 'Hierro Cortado y Doblado',
    subtitle: 'Sistema industrial de corte y doblado',
    description: 'Sistema industrial de corte y doblado de varillas de acero que permite cumplir con las especificaciones exactas del proyecto.',
    specifications: [
      'Procesos de calidad garantizada ISO 9001',
      'Pedidos diseñados y validados en software especializado',
      'Pedidos identificados con colores por elemento estructural',
      'Entrega en paquetes con doble etiquetado',
      'Todos los diámetros disponibles 6mm a 32mm',
    ],
    features: [
      'Cero desperdicio de acero',
      'Economía de tiempo y mano de obra',
      'Dimensiones precisas según proyecto',
      'Identificación de paquetes para fácil armado',
      'Diagramas y guías de armado incluidos',
      'Asesoramiento por técnicos especializados',
      'Entrega según cronograma',
      'Asistencia técnica permanente',
    ],
    technicalInfo: {
      'Calidad': 'ISO 9001',
      'Desperdicio': '0%',
      'Diámetros': '6-32mm',
      'Software': 'Especializado',
      'Identificación': 'Por colores'
    },
    availability: 'Entregas a todo el país',
    images: [
      { src: '/images/cortadoYdoblado.jpg', alt: 'Hierro Cortado y Doblado' },
      { src: '/images/doblado2.jpg', alt: 'Proceso de doblado' },
      { src: '/images/doblado4.jpg', alt: 'Cero desperdicio' },
      { src: '/images/doblado5.jpg', alt: 'Asistencia técnica' },
      { src: '/images/doblado6.jpg', alt: 'Control de calidad' },
      { src: '/images/doblado7.jpg', alt: 'Economía de tiempo' }
    ]
  },
  'barras-lisas': {
    id: '04',
    title: 'Barras Lisas',
    subtitle: 'Calidad certificada para construcción',
    description: 'Barras de acero de alta calidad con superficie lisa, certificadas bajo normas UNIT 34:1995 y UNIT 845:1995.',
    specifications: [
      'Certificadas bajo normas UNIT 34:1995 y UNIT 845:1995',
      'Diámetros disponibles: 6, 8, 10, 12, 16, 20, 25mm',
      'Barras cortadas a medida según necesidad',
      'Longitudes estándar de 12 metros',
      'Acero calidad AL-220',
    ],
    features: [
      'Facilidad en el transporte',
      'Optimización de recursos en obra',
      'Calidad garantizada con certificación',
      'Stock permanente',
    ],
    technicalInfo: {
      'Norma': 'UNIT 34:1995',
      'Calidad': 'AL-220',
      'Diámetros': '6-25mm',
      'Longitud': '12m',
      'Stock': 'Permanente'
    },
    availability: 'Entregas a todo el país',
    images: [
      { src: '/images/barrasLisas.jpg', alt: 'Barras Lisas' },
      { src: '/images/barras1.jpg', alt: 'Barras de calidad' },
      { src: '/images/barras2.jpg', alt: 'Medidas precisas' },
      { src: '/images/barras3.jpg', alt: 'Optimización de recursos' }
    ]
  },
  'barras-conformadas': {
    id: '05',
    title: 'Barras Conformadas',
    subtitle: 'Máxima adherencia para hormigón armado',
    description: 'Barras de acero de alta calidad con superficie corrugada para máxima adherencia al hormigón.',
    specifications: [
      'Certificadas bajo normas UNIT 34:1995 y UNIT 845:1995',
      'Diámetros disponibles: 6, 8, 10, 12, 16, 20, 25, 32mm',
      'Barras cortadas a medida',
      'Longitudes estándar de 12 metros',
      'Acero calidad ADN-420',
    ],
    features: [
      'Superficie corrugada para máxima adherencia',
      'Facilidad en el transporte',
      'Optimización de recursos en obra',
      'Calidad garantizada con certificación',
      'Stock permanente',
    ],
    technicalInfo: {
      'Norma': 'UNIT 34:1995',
      'Calidad': 'ADN-420',
      'Diámetros': '6-32mm',
      'Longitud': '12m',
      'Stock': 'Permanente'
    },
    availability: 'Entregas a todo el país',
    images: [
      { src: '/images/barras.jpg', alt: 'Barras Conformadas' },
      { src: '/images/barras1.jpg', alt: 'Alta adherencia' },
      { src: '/images/barras2.jpg', alt: 'Certificación garantizada' },
      { src: '/images/barras3.jpg', alt: 'Optimización en obra' },
      { src: '/images/barras5.jpg', alt: 'Logística optimizada' }
    ]
  }
};

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const productData = productsData[slug];
    if (!productData) {
      navigate('/productos-y-servicios');
      return;
    }
    setProduct(productData);

    // Scroll to top
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  useEffect(() => {
    if (!product) return;

    // GSAP animations
    const ctx = gsap.context(() => {
      // Animate hero section
      gsap.fromTo('.product-hero',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Animate content sections
      gsap.fromTo('.product-content-section',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.product-content-section',
            start: 'top 80%',
            once: true
          }
        }
      );

      // Animate tech specs
      gsap.fromTo('.spec-row',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.tech-specs-container',
            start: 'top 80%',
            once: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [product]);

  if (!product) return null;

  return (
    <>
      <Helmet>
        <title>{product.title} | Aceros Paisano</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.title} | Aceros Paisano`} />
        <meta property="og:description" content={product.description} />
      </Helmet>

      <div className="product-detail-wrapper" ref={containerRef}>
        <NavBar />

        <Container maxWidth="xl">
          {/* Breadcrumbs */}
          <nav className="breadcrumbs">
            <Link to="/">INICIO</Link>
            <span className="separator">/</span>
            <Link to="/productos-y-servicios">PRODUCTOS</Link>
            <span className="separator">/</span>
            <span className="current">{product.title.toUpperCase()}</span>
          </nav>

          {/* Hero Section */}
          <div className="product-hero">
            <div className="hero-header">
              <span className="product-id">[{product.id}]</span>
              <h1 className="product-title">{product.title}</h1>
              <p className="product-subtitle">{product.subtitle}</p>
            </div>

            {/* Main Grid - Gallery left, Info right */}
            <div className="main-grid">
              <div className="gallery-section">
                <ProductGallery
                  images={product.images}
                  productTitle={product.title}
                />
              </div>

              <div className="info-section">
                <div className="info-card">
                  <div className="info-header">
                    <span className="info-label">CATEGORÍA</span>
                    <h3 className="info-value">Productos de Acero</h3>
                  </div>

                  <div className="info-description">
                    <span className="info-label">DESCRIPCIÓN</span>
                    <p>{product.description}</p>
                  </div>

                  <div className="info-availability">
                    <span className="availability-indicator"></span>
                    <span className="availability-text">{product.availability}</span>
                  </div>

                  {/* Single CTA Button */}
                  <button className="cta-button primary" onClick={() => navigate('/contacto')}>
                    <span className="cta-text">SOLICITAR INFORMACIÓN</span>
                    <span className="cta-arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Section */}
          <section className="tech-specs-section product-content-section">
            <div className="section-header">
              <h2 className="section-title">Ficha Técnica</h2>
              <span className="section-subtitle">ESPECIFICACIONES TÉCNICAS</span>
            </div>

            <div className="tech-specs-container">
              <div className="specs-grid">
                {Object.entries(product.technicalInfo).map(([key, value], index) => (
                  <div className="spec-row" key={key}>
                    <span className="spec-index">[{String(index + 1).padStart(2, '0')}]</span>
                    <span className="spec-label">{key}</span>
                    <span className="spec-separator"></span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
              <div className="specs-footer">
                <span className="certification-badge">
                  <span className="badge-icon">✓</span>
                  <span className="badge-text">CERTIFICADO</span>
                </span>
              </div>
            </div>
          </section>

          {/* Features Section */}
          {product.features && (
            <section className="features-section product-content-section">
              <div className="section-header">
                <h2 className="section-title">Características</h2>
                <span className="section-subtitle">VENTAJAS DEL PRODUCTO</span>
              </div>

              <div className="features-grid">
                {product.features.map((feature, i) => (
                  <div className="feature-item" key={i}>
                    <span className="feature-icon">✓</span>
                    <p className="feature-text">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Specifications Section */}
          {product.specifications && (
            <section className="specifications-section product-content-section">
              <div className="section-header">
                <h2 className="section-title">Especificaciones</h2>
                <span className="section-subtitle">DETALLES TÉCNICOS</span>
              </div>

              <div className="specifications-grid">
                {product.specifications.map((spec, i) => (
                  <div className="specification-item" key={i}>
                    <span className="spec-number">{String(i + 1).padStart(2, '0')}</span>
                    <p className="spec-text">{spec}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h3 className="cta-title">¿Necesita más información?</h3>
              <p className="cta-description">
                Nuestro equipo técnico está disponible para asesorarlo sobre este producto
              </p>
              <button className="cta-button primary large" onClick={() => navigate('/contacto')}>
                <span className="cta-text">SOLICITAR INFORMACIÓN</span>
                <span className="cta-arrow">→</span>
              </button>
            </div>
          </section>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;