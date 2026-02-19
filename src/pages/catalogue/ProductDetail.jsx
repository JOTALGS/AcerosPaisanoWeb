import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    Typography,
    Box,
    Container,
    useMediaQuery,
    Button,
    Paper
} from "@mui/material";
import { useTheme, styled } from '@mui/material/styles';
import { NavBar } from "../../components/navbar/NavBar1";
import { Footer } from '../../components/footer/Footer';
import { products } from '../../data/productsData';
import gsap from 'gsap';

// Styled components (reused from Catalogue.jsx)
const PageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor: '#000000',
    color: '#ffffff',
    minHeight: '100vh',
    overflow: 'hidden',
}));

const BackButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: '#ffffff',
    textTransform: 'none',
    borderRadius: '2px',
    padding: '8px 18px',
    fontWeight: 500,
    fontSize: '1rem',
    letterSpacing: '0.03em',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.25s ease',
    marginBottom: '24px',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: '#ffffff',
    }
}));

const ProductDetailContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(44, 44, 44, 0.5)',
    borderRadius: '4px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: 'none',
    padding: '32px',
    [theme.breakpoints.down('md')]: {
        padding: '24px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '16px',
    }
}));

const ProductImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: 'auto',
    maxHeight: '500px',
    objectFit: 'cover',
    borderRadius: '2px',
    marginBottom: '24px',
    [theme.breakpoints.down('sm')]: {
        maxHeight: '300px',
    }
}));

const ProductTitle = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 500,
    color: '#e40000',
    letterSpacing: '0.04em',
    marginBottom: '16px',
    fontFamily: "'Archivo', sans-serif",
    textShadow: '0 0 10px rgba(228, 0, 0, 0.4)',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    }
}));

const BrandLogo = styled('img')(({ theme }) => ({
    height: '32px',
    width: 'auto',
    marginRight: '16px',
    opacity: 0.9,
    [theme.breakpoints.down('sm')]: {
        height: '24px',
    }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#ffffff',
    marginBottom: '16px',
    marginTop: '32px',
    fontFamily: "'Inter', sans-serif",
}));

const DescriptionList = styled('ul')(({ theme }) => ({
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px 0',
    '& li': {
        position: 'relative',
        paddingLeft: '22px',
        marginBottom: '12px',
        fontSize: '1.05rem',
        color: '#ffffff',
        lineHeight: 1.7,
        '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: '0.6em',
            width: '7px',
            height: '7px',
            backgroundColor: '#e40000',
            borderRadius: '50%',
        }
    }
}));

const PriceTag = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    color: '#ffffff',
    fontWeight: 500,
    opacity: 0.9,
    marginTop: '24px',
    textAlign: 'center',
}));

const ContactButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#e40000',
    color: '#ffffff',
    textTransform: 'none',
    borderRadius: '2px',
    padding: '12px 32px',
    fontWeight: 500,
    fontSize: '1.1rem',
    letterSpacing: '0.03em',
    boxShadow: 'none',
    transition: 'background-color 0.25s ease',
    marginTop: '32px',
    width: '100%',
    maxWidth: '400px',
    '&:hover': {
        backgroundColor: '#ff2222',
        boxShadow: 'none',
    }
}));

const ArrowLeftIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
    </svg>
);

export function ProductDetail() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    // Find product by slug or id
    const product = products.find(p => p.slug === productId || p.id.toString() === productId);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Animate content on mount
        gsap.fromTo(
            '.product-detail-content',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
        );
    }, [productId]);

    if (!product) {
        return (
            <PageContainer>
                <NavBar />
                <Container maxWidth="lg" sx={{ pt: { xs: 15, md: 20 }, pb: 8, minHeight: '60vh' }}>
                    <BackButton
                        startIcon={<ArrowLeftIcon />}
                        onClick={() => navigate('/productos-y-servicios')}
                    >
                        Volver al catálogo
                    </BackButton>
                    <Box sx={{ textAlign: 'center', mt: 8 }}>
                        <Typography variant="h3" sx={{ color: '#e40000', mb: 2 }}>
                            Producto no encontrado
                        </Typography>
                        <Typography sx={{ color: '#ffffff', opacity: 0.7 }}>
                            El producto que buscas no existe o ha sido removido.
                        </Typography>
                    </Box>
                </Container>
                <Footer />
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <NavBar />

            <Container
                maxWidth="lg"
                sx={{
                    pt: { xs: 15, md: 20 },
                    pb: { xs: 6, md: 8 },
                    px: { xs: 2, md: 4 }
                }}
            >
                <BackButton
                    startIcon={<ArrowLeftIcon />}
                    onClick={() => navigate('/productos-y-servicios')}
                    className="product-detail-content"
                >
                    Volver al catálogo
                </BackButton>

                <ProductDetailContainer className="product-detail-content">
                    {/* Header with logo and title */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <BrandLogo
                            src='/images/paisanologo.png'
                            alt="Aceros Paisano"
                        />
                        <ProductTitle variant="h1">
                            {product.title}
                        </ProductTitle>
                    </Box>

                    {/* Product Image */}
                    <ProductImage
                        src={product.image}
                        alt={product.title}
                    />

                    {/* Price */}
                    <PriceTag>{product.price}</PriceTag>

                    {/* Description */}
                    <SectionTitle>
                        Características
                    </SectionTitle>
                    <DescriptionList>
                        {product.description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </DescriptionList>

                    {/* Extra Info */}
                    {product.extraInfo && (
                        <>
                            <SectionTitle>
                                Información adicional
                            </SectionTitle>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '1rem',
                                    lineHeight: 1.7,
                                    color: '#d0d0d0',
                                    whiteSpace: 'pre-line',
                                    fontWeight: 300,
                                    letterSpacing: '0.01em',
                                    marginBottom: '32px'
                                }}
                            >
                                {product.extraInfo}
                            </Typography>
                        </>
                    )}

                    {/* Contact Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <ContactButton
                            component={Link}
                            to="/contacto"
                        >
                            Solicitar información
                        </ContactButton>
                    </Box>
                </ProductDetailContainer>
            </Container>

            <Footer />
        </PageContainer>
    );
}

export default ProductDetail;
