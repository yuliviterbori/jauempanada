import axios from 'axios'
import { useEffect, useState } from 'react';
import style from './index.module.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return <div>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://empanadasdonoso.com.py/assets/img/slider/portada_1.jpg" className={style.bdPlaceholderImg} width="100%" height="100%"/>
                <div className="container">
                <div className="carousel-caption text-start">
                    <h1 className='text-dark bg-contrast-black'>Las mejores empanadas del pais.</h1>
                    <p className='text-dark bg-contrast-black'>Unite ahora y empeza a deleitarte.</p>
                    <p><Link className="btn btn-lg btn-primary" to="/login">Ingresar</Link> | <Link className="btn btn-lg btn-primary" to="/register">Crear cuenta</Link></p>
                </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://empanadasdonoso.com.py/assets/img/slider/portada_2.jpg" className={style.bdPlaceholderImg} width="100%" height="100%"/>
                <div className="container">
                <div className="carousel-caption text-start">
                    <h1 className='text-dark bg-contrast-black'>Las mejores empanadas del pais.</h1>
                    <p className='text-dark bg-contrast-black'>Unite ahora y empeza a deleitarte.</p>
                    <p><Link className="btn btn-lg btn-primary" to="/login">Ingresar</Link> | <Link className="btn btn-lg btn-primary" to="/register">Crear cuenta</Link></p>
                </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://empanadasdonoso.com.py/assets/img/slider/portada_3.jpg" className={style.bdPlaceholderImg} width="100%" height="100%"/>
                <div className="container">
                <div className="carousel-caption text-start">
                    <h1 className='text-dark bg-contrast-black'>Las mejores empanadas del pais.</h1>
                    <p className='text-dark bg-contrast-black'>Unite ahora y empeza a deleitarte.</p>
                    <p><Link className="btn btn-lg btn-primary" to="/login">Ingresar</Link> | <Link className="btn btn-lg btn-primary" to="/register">Crear cuenta</Link></p>
                </div>
                </div>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>


        <div className="container marketing mt-3">
            <div className="row">
                <div className="col-lg-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" className="bi bi-heart-fill text-brown" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    <h2 className="fw-normal">Mis favoritos</h2>
                    <p>Tus productos favoritos aqui.</p>
                    <p><Link className="btn btn-primary" to="/favorites">Ver favoritos &raquo;</Link></p>
                </div>
                <div className="col-lg-4">
                    <img src='https://empanadasdonoso.com.py/assets/img/preloader_oso.png' width="140" height="140"></img>
                    <h2 className="fw-normal">Pedir</h2>
                    <p>Hace tu pedido online.</p>
                    <p><Link className="btn btn-primary" to="/products">Comprar ahora &raquo;</Link></p>
                </div>
                <div className="col-lg-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" className="bi bi-box2-heart-fill text-brown" viewBox="0 0 16 16">
                    <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1v3ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                    </svg>
                    <h2 className="fw-normal">Repetir pedido</h2>
                    <p>Tu historial de pedidos.</p>
                    <p><Link className="btn btn-primary" to="/reorder">Ver ultimos pedidos &raquo;</Link></p>
                </div>
            </div>
        </div>
        </div>;
  };
  
  export default Home;