import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Instagram, Menu, X, Mail } from 'lucide-react';

// Importando as páginas exclusivas
import Home from './pages/Home';
import Certificacoes from './pages/Certificacoes';
import Blog from './pages/Blog';
import Antropometria from './pages/Antropometria';
import Bioimpedancia from './pages/Bioimpedancia';
import VitaminaA from './pages/VitaminaA';
import Frutose from './pages/Frutose';
import EfeitoSanfona from './pages/EfeitoSanfona';
import Eritropoetina from './pages/Eritropoetina';


const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png';

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const baseUrl = 'https://www.nutricaocommarco.com.br';

    const seoData = {
      '/': { 
        title: 'Nutrição com Marco | Performance e Ciência', 
        desc: 'Especialista em Nutrição e Antropometria no RJ e Online. Performance física e saúde baseada em evidências científicas.' 
      },
      '/certificacoes': { 
        title: 'Currículo e Certificações | Nutrição com Marco', 
        desc: 'Conheça a trajetória técnica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr.' 
      },
      '/blog': { 
        title: 'Blog de Nutrição e Ciência | Nutrição com Marco', 
        desc: 'Conteúdo científico sobre antropometria, bioimpedância e emagrecimento real.' 
      },
      '/o_que_e_antropometria': { 
        title: 'O que é Antropometria? A Ciência Exata da Avaliação | Nutrição com Marco', 
        desc: 'Descubra o que é Antropometria e como a avaliação física ISAK revela sua real composição corporal, muito além da balança.' 
      },
      '/a_balanca_de_bioimpedancia_e_confiavel': { 
        title: 'A balança de bioimpedância é confiável? | Nutrição com Marco', 
        desc: 'Entenda se a balança de bioimpedância é confiável, como ela funciona e o que altera o seu percentual de gordura.' 
      },
      '/vitamina_a_para_que_serve': { 
        title: 'Vitamina A para que serve? | Nutrição com Marco', 
        desc: 'Entenda as diferenças entre retinol, retinal e ácido retinóico, e descubra como a Vitamina A atua no seu metabolismo muito além da visão.' 
      },
      '/quantas_frutas_posso_comer': { 
        title: 'Quantas frutas posso comer por dia? | Nutrição com Marco', 
        desc
