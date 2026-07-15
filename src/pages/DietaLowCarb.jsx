import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Clock, Shield, 
  Zap, ChevronRight, Headphones, ChevronDown, ShoppingCart, 
  Target, Flame, Coffee, Dumbbell, Brain, Check, X, AlertTriangle, 
  Video, PlayCircle, Apple, PieChart, Utensils, Scale, PlusCircle, Trash2, Droplet, Search
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

const datePublishedISO = "2026-07-15";
const dateModifiedISO = "2026-07-15";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

const artigoCapa = `${githubImgBase}Blog/LowCarb_Capa.jpg`; 

const foodDatabase = [
  { id: 1, name: "Arroz, integral, cozido", carbs: 25.8 },
  { id: 2, name: "Arroz, integral, cru", carbs: 77.5 },
  { id: 3, name: "Arroz, tipo 1, cozido", carbs: 28.1 },
  { id: 4, name: "Arroz, tipo 1, cru", carbs: 78.8 },
  { id: 5, name: "Arroz, tipo 2, cozido", carbs: 28.2 },
  { id: 6, name: "Arroz, tipo 2, cru", carbs: 78.9 },
  { id: 7, name: "Aveia, flocos, crua", carbs: 66.6 },
  { id: 8, name: "Biscoito, doce, maisena", carbs: 75.2 },
  { id: 9, name: "Biscoito, doce, recheado com chocolate", carbs: 70.5 },
  { id: 10, name: "Biscoito, doce, recheado com morango", carbs: 71.0 },
  { id: 11, name: "Biscoito, doce, wafer, recheado de chocolate", carbs: 67.5 },
  { id: 12, name: "Biscoito, doce, wafer, recheado de morango", carbs: 67.4 },
  { id: 13, name: "Biscoito, salgado, cream cracker", carbs: 68.7 },
  { id: 14, name: "Bolo, mistura para", carbs: 84.7 },
  { id: 15, name: "Bolo, pronto, aipim", carbs: 47.9 },
  { id: 16, name: "Bolo, pronto, chocolate", carbs: 54.7 },
  { id: 17, name: "Bolo, pronto, coco", carbs: 52.3 },
  { id: 18, name: "Bolo, pronto, milho", carbs: 45.1 },
  { id: 19, name: "Canjica, branca, crua", carbs: 78.1 },
  { id: 20, name: "Canjica, com leite integral", carbs: 23.6 },
  { id: 21, name: "Cereal matinal, milho", carbs: 83.8 },
  { id: 22, name: "Cereal matinal, milho, com açúcar", carbs: 85.9 },
  { id: 23, name: "Creme de arroz, pó", carbs: 81.6 },
  { id: 24, name: "Farinha, de arroz, enriquecida", carbs: 81.3 },
  { id: 25, name: "Farinha, de centeio, integral", carbs: 73.3 },
  { id: 26, name: "Farinha, de milho, amarela", carbs: 79.4 },
  { id: 27, name: "Farinha, de milho, branca", carbs: 80.8 },
  { id: 28, name: "Farinha, de trigo", carbs: 75.1 },
  { id: 29, name: "Farinha, láctea, de cereais", carbs: 77.0 },
  { id: 30, name: "Lasanha, trigo, crua", carbs: 72.8 },
  { id: 31, name: "Macarrão, instantâneo", carbs: 60.1 },
  { id: 32, name: "Macarrão, trigo, cru", carbs: 77.9 },
  { id: 33, name: "Macarrão, trigo, cru, com ovos", carbs: 76.6 },
  { id: 34, name: "Mingau tradicional, pó", carbs: 86.1 },
  { id: 35, name: "Pão, aveia, forma", carbs: 59.6 },
  { id: 36, name: "Pão, de queijo, cru", carbs: 32.5 },
  { id: 37, name: "Pão, de soja", carbs: 56.5 },
  { id: 38, name: "Pão, francês", carbs: 58.6 },
  { id: 39, name: "Pão, glúten, forma", carbs: 52.4 },
  { id: 40, name: "Pão, hot dog", carbs: 58.7 },
  { id: 41, name: "Pão, leite, forma", carbs: 54.3 },
  { id: 42, name: "Pão, milho, forma", carbs: 56.4 },
  { id: 43, name: "Pão, trigo, forma, integral", carbs: 49.9 },
  { id: 44, name: "Pão, trigo, francês", carbs: 58.6 },
  { id: 45, name: "Pastel, de carne, cru", carbs: 40.7 },
  { id: 46, name: "Pastel, de carne, frito", carbs: 43.1 },
  { id: 47, name: "Pastel, de queijo, cru", carbs: 45.9 },
  { id: 48, name: "Pastel, de queijo, frito", carbs: 48.1 },
  { id: 49, name: "Pipoca, com óleo de soja, sem sal", carbs: 65.0 },
  { id: 50, name: "Polenta, com farinha de milho, não enriquecida", carbs: 11.2 },
  { id: 51, name: "Torrada, de pão francês", carbs: 74.6 },
  { id: 52, name: "Biscoito, doce, recheado com chocolate", carbs: 70.5 },
  { id: 53, name: "Biscoito, doce, recheado com morango", carbs: 71.0 },
  { id: 54, name: "Biscoito, doce, wafer, recheado de chocolate", carbs: 67.5 },
  { id: 55, name: "Biscoito, doce, wafer, recheado de morango", carbs: 67.4 },
  { id: 56, name: "Biscoito, salgado, cream cracker", carbs: 68.7 },
  { id: 57, name: "Bolo, mistura para", carbs: 84.7 },
  { id: 58, name: "Bolo, pronto, aipim", carbs: 47.9 },
  { id: 59, name: "Bolo, pronto, chocolate", carbs: 54.7 },
  { id: 60, name: "Bolo, pronto, coco", carbs: 52.3 },
  { id: 61, name: "Bolo, pronto, milho", carbs: 45.1 },
  { id: 62, name: "Canjica, branca, crua", carbs: 78.1 },
  { id: 63, name: "Canjica, com leite integral", carbs: 23.6 },
  { id: 64, name: "Cereal matinal, milho", carbs: 83.8 },
  { id: 65, name: "Cereal matinal, milho, com açúcar", carbs: 85.9 },
  { id: 66, name: "Creme de arroz, pó", carbs: 81.6 },
  { id: 67, name: "Farinha, de arroz, enriquecida", carbs: 81.3 },
  { id: 68, name: "Farinha, de centeio, integral", carbs: 73.3 },
  { id: 69, name: "Farinha, de milho, amarela", carbs: 79.4 },
  { id: 70, name: "Farinha, de milho, branca", carbs: 80.8 },
  { id: 71, name: "Farinha, de trigo", carbs: 75.1 },
  { id: 72, name: "Farinha, láctea, de cereais", carbs: 77.0 },
  { id: 73, name: "Abóbora, cozida", carbs: 10.8 },
  { id: 74, name: "Abóbora, crua", carbs: 10.8 },
  { id: 75, name: "Abóbora, cabotian, cozida", carbs: 10.8 },
  { id: 76, name: "Abóbora, cabotian, crua", carbs: 10.8 },
  { id: 77, name: "Abóbora, menina brasileira, crua", carbs: 3.3 },
  { id: 78, name: "Abóbora, moranga, refogada", carbs: 6.9 },
  { id: 79, name: "Abóbora, pescoço, crua", carbs: 6.1 },
  { id: 80, name: "Abobrinha, italiana, cozida", carbs: 3.0 },
  { id: 81, name: "Abobrinha, italiana, crua", carbs: 4.3 },
  { id: 82, name: "Abobrinha, italiana, refogada", carbs: 3.6 },
  { id: 83, name: "Abobrinha, paulista, crua", carbs: 6.1 },
  { id: 84, name: "Acelga, crua", carbs: 1.7 },
  { id: 85, name: "Agrião, cru", carbs: 2.2 },
  { id: 86, name: "Aipo, cru", carbs: 6.9 },
  { id: 87, name: "Alface, americana, crua", carbs: 1.7 },
  { id: 88, name: "Alface, crespa, crua", carbs: 1.7 },
  { id: 89, name: "Alface, lisa, crua", carbs: 1.7 },
  { id: 90, name: "Alface, roxa, crua", carbs: 2.5 },
  { id: 91, name: "Alfavaca, crua", carbs: 5.1 },
  { id: 92, name: "Alho, cru", carbs: 23.9 },
  { id: 93, name: "Alho-poró, cru", carbs: 6.9 },
  { id: 94, name: "Almeirão, cru", carbs: 3.3 },
  { id: 95, name: "Almeirão, refogado", carbs: 8.5 },
  { id: 96, name: "Batata, baroa, cozida", carbs: 18.9 },
  { id: 97, name: "Batata, baroa, crua", carbs: 24.0 },
  { id: 98, name: "Batata, doce, cozida", carbs: 18.4 },
  { id: 99, name: "Batata, doce, crua", carbs: 28.2 },
  { id: 100, name: "Batata, frita, tipo chips, industrializada", carbs: 51.5 },
  { id: 101, name: "Batata, inglesa, cozida", carbs: 11.9 },
  { id: 102, name: "Batata, inglesa, crua", carbs: 14.7 },
  { id: 103, name: "Batata, inglesa, frita", carbs: 35.6 },
  { id: 104, name: "Beringela, cozida", carbs: 2.8 },
  { id: 105, name: "Beringela, crua", carbs: 4.4 },
  { id: 106, name: "Beterraba, cozida", carbs: 7.2 },
  { id: 107, name: "Beterraba, crua", carbs: 11.1 },
  { id: 108, name: "Bredo, cru", carbs: 4.8 },
  { id: 109, name: "Brócolis, cozido", carbs: 4.4 },
  { id: 110, name: "Brócolis, cru", carbs: 4.0 },
  { id: 111, name: "Cará, cozido", carbs: 18.6 },
  { id: 112, name: "Cará, cru", carbs: 23.0 },
  { id: 113, name: "Cebola, crua", carbs: 8.9 },
  { id: 114, name: "Cebolinha, crua", carbs: 3.4 },
  { id: 115, name: "Cenoura, cozida", carbs: 6.7 },
  { id: 116, name: "Cenoura, crua", carbs: 7.7 },
  { id: 117, name: "Chicória, crua", carbs: 4.1 },
  { id: 118, name: "Chuchu, cozido", carbs: 4.8 },
  { id: 119, name: "Chuchu, cru", carbs: 4.1 },
  { id: 120, name: "Coentro, folhas, cruas", carbs: 3.6 },
  { id: 121, name: "Couve, manteiga, crua", carbs: 4.3 },
  { id: 122, name: "Couve, manteiga, refogada", carbs: 8.7 },
  { id: 123, name: "Couve-flor, crua", carbs: 5.2 },
  { id: 124, name: "Couve-flor, cozida", carbs: 4.1 },
  { id: 125, name: "Espinafre, cru", carbs: 3.6 },
  { id: 126, name: "Espinafre, refogado", carbs: 4.2 },
  { id: 127, name: "Inhame, cru", carbs: 23.5 },
  { id: 128, name: "Jiló, cru", carbs: 3.9 },
  { id: 129, name: "Jiló, cozido", carbs: 4.5 },
  { id: 130, name: "Mandioca, cozida", carbs: 30.1 },
  { id: 131, name: "Mandioca, crua", carbs: 36.2 },
  { id: 132, name: "Mandioca, farofa, com carne", carbs: 55.4 },
  { id: 133, name: "Mandioca, farofa, com ovo", carbs: 45.4 },
  { id: 134, name: "Mandioca, frita", carbs: 43.1 },
  { id: 135, name: "Mandioquinha, cozida", carbs: 18.9 },
  { id: 136, name: "Maxixe, cru", carbs: 4.9 },
  { id: 137, name: "Mostarda, folha, crua", carbs: 3.2 },
  { id: 138, name: "Nabo, cru", carbs: 7.6 },
  { id: 139, name: "Palmito, cru", carbs: 6.8 },
  { id: 140, name: "Palmito, em conserva", carbs: 4.3 },
  { id: 141, name: "Pepino, cru", carbs: 3.1 },
  { id: 142, name: "Pimentão, amarelo, cru", carbs: 6.0 },
  { id: 143, name: "Pimentão, verde, cru", carbs: 4.9 },
  { id: 144, name: "Pimentão, vermelho, cru", carbs: 5.5 },
  { id: 145, name: "Quiabo, cozido", carbs: 4.3 },
  { id: 146, name: "Quiabo, cru", carbs: 6.4 },
  { id: 147, name: "Rabanete, cru", carbs: 2.7 },
  { id: 148, name: "Repolho, cru", carbs: 3.9 },
  { id: 149, name: "Repolho, roxo, cru", carbs: 7.2 },
  { id: 150, name: "Rúcula, crua", carbs: 2.2 },
  { id: 151, name: "Salsa, crua", carbs: 7.4 },
  { id: 152, name: "Taioba, crua", carbs: 7.3 },
  { id: 153, name: "Tomate, com semente, cru", carbs: 3.1 },
  { id: 154, name: "Tomate, extrato", carbs: 15.0 },
  { id: 155, name: "Tomate, molho industrializado", carbs: 8.5 },
  { id: 156, name: "Tomate, purê", carbs: 8.9 },
  { id: 157, name: "Vagem, crua", carbs: 5.3 },
  { id: 158, name: "Abacate, cru", carbs: 6.0 },
  { id: 159, name: "Abacaxi, cru", carbs: 8.1 },
  { id: 160, name: "Acerola, crua", carbs: 3.3 },
  { id: 161, name: "Ameixa, crua", carbs: 13.8 },
  { id: 162, name: "Ameixa, em calda", carbs: 46.8 },
  { id: 163, name: "Amêndoa, torrada", carbs: 18.7 },
  { id: 164, name: "Banana, da terra, crua", carbs: 33.7 },
  { id: 165, name: "Banana, doce em barra", carbs: 75.7 },
  { id: 166, name: "Banana, figo, crua", carbs: 27.8 },
  { id: 167, name: "Banana, maçã, crua", carbs: 22.3 },
  { id: 168, name: "Banana, nanica, crua", carbs: 26.0 },
  { id: 169, name: "Banana, ouro, crua", carbs: 29.3 },
  { id: 170, name: "Banana, pacovan, crua", carbs: 20.3 },
  { id: 171, name: "Banana, prata, crua", carbs: 26.0 },
  { id: 172, name: "Cacau, cru", carbs: 13.9 },
  { id: 173, name: "Cajá-Manga, cru", carbs: 11.4 },
  { id: 174, name: "Caju, cru", carbs: 10.1 },
  { id: 175, name: "Caju, suco concentrado, envasado", carbs: 10.6 },
  { id: 176, name: "Caqui, chocolate, cru", carbs: 19.3 },
  { id: 177, name: "Carambola, crua", carbs: 19.3 },
  { id: 178, name: "Castanha-de-caju, torrada", carbs: 29.1 },
  { id: 179, name: "Castanha-do-Brasil, crua", carbs: 15.1 },
  { id: 180, name: "Cereja, crua", carbs: 16.5 },
  { id: 181, name: "Coco, água de", carbs: 5.3 },
  { id: 182, name: "Coco, cru", carbs: 10.4 },
  { id: 183, name: "Cupuaçu, cru", carbs: 10.4 },
  { id: 184, name: "Figo, cru", carbs: 17.1 },
  { id: 185, name: "Goiaba, crua", carbs: 11.1 },
  { id: 186, name: "Goiaba, doce em pasta", carbs: 70.8 },
  { id: 187, name: "Grapefruit, crua", carbs: 10.0 },
  { id: 188, name: "Graviola, crua", carbs: 11.4 },
  { id: 189, name: "Jabuticaba, crua", carbs: 15.3 },
  { id: 190, name: "Jaca, crua", carbs: 16.5 },
  { id: 191, name: "Jambo, cru", carbs: 11.4 },
  { id: 192, name: "Jamelão, cru", carbs: 12.0 },
  { id: 193, name: "Kiwi, cru", carbs: 14.6 },
  { id: 194, name: "Laranja, baía, crua", carbs: 11.5 },
  { id: 195, name: "Laranja, baía, suco", carbs: 8.7 },
  { id: 196, name: "Laranja, da terra, crua", carbs: 12.9 },
  { id: 197, name: "Laranja, lima, crua", carbs: 11.5 },
  { id: 198, name: "Laranja, pera, crua", carbs: 8.9 },
  { id: 199, name: "Laranja, pera, suco", carbs: 7.6 },
  { id: 200, name: "Laranja, valência, crua", carbs: 11.5 },
  { id: 201, name: "Laranja, valência, suco", carbs: 9.3 },
  { id: 202, name: "Limão, tahiti, cru", carbs: 11.1 },
  { id: 203, name: "Maçã, Argentina, com casca, crua", carbs: 16.6 },
  { id: 204, name: "Maçã, Fuji, com casca, crua", carbs: 15.2 },
  { id: 205, name: "Macaúba, crua", carbs: 54.3 },
  { id: 206, name: "Mamão, cru", carbs: 10.4 },
  { id: 207, name: "Manga, doce em pasta", carbs: 73.1 },
  { id: 208, name: "Manga, Haden, crua", carbs: 16.7 },
  { id: 209, name: "Manga, Palmer, crua", carbs: 19.4 },
  { id: 210, name: "Manga, Tommy Atkins, crua", carbs: 16.6 },
  { id: 211, name: "Maracujá, cru", carbs: 9.6 },
  { id: 212, name: "Melancia, crua", carbs: 8.1 },
  { id: 213, name: "Melão, cru", carbs: 7.5 },
  { id: 214, name: "Morango, cru", carbs: 6.8 },
  { id: 215, name: "Nêspera, crua", carbs: 11.5 },
  { id: 216, name: "Noz, crua", carbs: 18.4 },
  { id: 217, name: "Pequi, cru", carbs: 12.0 },
  { id: 218, name: "Pera, Williams, crua", carbs: 14.0 },
  { id: 219, name: "Pêssego, cru", carbs: 11.3 },
  { id: 220, name: "Pinhão, cozido", carbs: 43.9 },
  { id: 221, name: "Pitanga, crua", carbs: 11.5 },
  { id: 222, name: "Romã, crua", carbs: 9.0 },
  { id: 223, name: "Tamarindo, cru", carbs: 14.6 },
  { id: 224, name: "Tangerina, Poncã, crua", carbs: 9.3 },
  { id: 225, name: "Tangerina, Poncã, suco", carbs: 8.8 },
  { id: 226, name: "Umbu, cru", carbs: 11.8 },
  { id: 227, name: "Uva, Rubi, crua", carbs: 17.3 },
  { id: 228, name: "Uva, suco concentrado, envasado", carbs: 14.7 },
  { id: 229, name: "Azeite, de dendê", carbs: 0.0 },
  { id: 230, name: "Azeite, de oliva, extra virgem", carbs: 0.0 },
  { id: 231, name: "Manteiga, com sal", carbs: 0.1 },
  { id: 232, name: "Manteiga, sem sal", carbs: 0.0 },
  { id: 233, name: "Margarina, com sal", carbs: 0.0 },
  { id: 234, name: "Margarina, sem sal", carbs: 0.0 },
  { id: 235, name: "Óleo, de girassol", carbs: 0.0 },
  { id: 236, name: "Óleo, de milho", carbs: 0.0 },
  { id: 237, name: "Óleo, de soja", carbs: 0.0 },
  { id: 238, name: "Atum, conserva em óleo", carbs: 0.0 },
  { id: 239, name: "Atum, fresco, cru", carbs: 0.0 },
  { id: 240, name: "Bacalhau, fresco, cru", carbs: 0.0 },
  { id: 241, name: "Badejo, fresco, cru", carbs: 0.0 },
  { id: 242, name: "Cação, cozido", carbs: 0.0 },
  { id: 243, name: "Cação, cru", carbs: 0.0 },
  { id: 244, name: "Camarão, Rio Grande, cru", carbs: 0.0 },
  { id: 245, name: "Caranguejo, cozido", carbs: 0.0 },
  { id: 246, name: "Cascudo, cru", carbs: 0.0 },
  { id: 247, name: "Corimbatá, assado", carbs: 0.0 },
  { id: 248, name: "Corimbatá, cozido", carbs: 0.0 },
  { id: 249, name: "Corvina, assada", carbs: 0.0 },
  { id: 250, name: "Corvina, cozida", carbs: 0.0 },
  { id: 251, name: "Corvina, crua", carbs: 0.0 },
  { id: 252, name: "Dourada, de água doce, crua", carbs: 0.0 },
  { id: 253, name: "Lambari, congelado, cru", carbs: 0.0 },
  { id: 254, name: "Lambari, congelado, frito", carbs: 0.0 },
  { id: 255, name: "Manjuba, com óleo de soja, frita", carbs: 0.0 },
  { id: 256, name: "Merluza, filé, assado", carbs: 0.0 },
  { id: 257, name: "Merluza, filé, cru", carbs: 0.0 },
  { id: 258, name: "Pescada, branca, frita", carbs: 0.0 },
  { id: 259, name: "Pescada, filé, com farinha de trigo, frito", carbs: 5.7 },
  { id: 260, name: "Pintado, assado", carbs: 0.0 },
  { id: 261, name: "Pintado, cru", carbs: 0.0 },
  { id: 262, name: "Porquinho, cru", carbs: 0.0 },
  { id: 263, name: "Salmão, filé, com pele, fresco, grelhado", carbs: 0.0 },
  { id: 264, name: "Salmão, sem pele, fresco, cru", carbs: 0.0 },
  { id: 265, name: "Sardinha, assada", carbs: 0.0 },
  { id: 266, name: "Sardinha, conserva em óleo", carbs: 0.0 },
  { id: 267, name: "Tambaqui, cru", carbs: 0.0 },
  { id: 268, name: "Tucunaré, com óleo de soja, assado", carbs: 0.0 },
  { id: 269, name: "Carne, bovina, acém, moído, cozido", carbs: 0.0 },
  { id: 270, name: "Carne, bovina, acém, moído, cru", carbs: 0.0 },
  { id: 271, name: "Carne, bovina, alcatra, sem gordura, crua", carbs: 0.0 },
  { id: 272, name: "Carne, bovina, capa de contra-filé, com gordura, crua", carbs: 0.0 },
  { id: 273, name: "Carne, bovina, costela, assada", carbs: 0.0 },
  { id: 274, name: "Carne, bovina, costela, crua", carbs: 0.0 },
  { id: 275, name: "Carne, bovina, contra-filé, à milanesa", carbs: 12.2 },
  { id: 276, name: "Carne, bovina, contra-filé, com gordura, cru", carbs: 0.0 },
  { id: 277, name: "Carne, bovina, contra-filé, grelhado", carbs: 0.0 },
  { id: 278, name: "Carne, bovina, coxão duro, sem gordura, cozido", carbs: 0.0 },
  { id: 279, name: "Carne, bovina, coxão mole, sem gordura, cru", carbs: 0.0 },
  { id: 280, name: "Carne, bovina, cupim, assado", carbs: 0.0 },
  { id: 281, name: "Carne, bovina, cupim, cru", carbs: 0.0 },
  { id: 282, name: "Carne, bovina, fígado, cru", carbs: 4.2 },
  { id: 283, name: "Carne, bovina, filé mignon, sem gordura, cru", carbs: 0.0 },
  { id: 284, name: "Carne, bovina, filé mignon, sem gordura, grelhado", carbs: 0.0 },
  { id: 285, name: "Carne, bovina, lagarto, sem gordura, cru", carbs: 0.0 },
  { id: 286, name: "Carne, bovina, maminha, crua", carbs: 0.0 },
  { id: 287, name: "Carne, bovina, músculo, sem gordura, cozido", carbs: 0.0 },
  { id: 288, name: "Carne, bovina, músculo, sem gordura, cru", carbs: 0.0 },
  { id: 289, name: "Carne, bovina, patinho, sem gordura, cru", carbs: 0.0 },
  { id: 290, name: "Carne, bovina, peito, sem gordura, cru", carbs: 0.0 },
  { id: 291, name: "Carne, bovina, picanha, com gordura, crua", carbs: 0.0 },
  { id: 292, name: "Carne, bovina, seca, cozida", carbs: 0.0 },
  { id: 293, name: "Carne, suína, bisteca, crua", carbs: 0.0 },
  { id: 294, name: "Carne, suína, costela, assada", carbs: 0.0 },
  { id: 295, name: "Carne, suína, lombo, assado", carbs: 0.0 },
  { id: 296, name: "Carne, suína, pernil, cru", carbs: 0.0 },
  { id: 297, name: "Carne, suína, salsicha, crua", carbs: 2.1 },
  { id: 298, name: "Frango, carne, com pele, assada", carbs: 0.0 },
  { id: 299, name: "Frango, carne, com pele, crua", carbs: 0.0 },
  { id: 300, name: "Frango, coração, cru", carbs: 0.0 },
  { id: 301, name: "Frango, coxa, com pele, assada", carbs: 0.0 },
  { id: 302, name: "Frango, coxa, com pele, crua", carbs: 0.0 },
  { id: 303, name: "Frango, coxa, sem pele, cozida", carbs: 0.0 },
  { id: 304, name: "Frango, coxa, sem pele, crua", carbs: 0.0 },
  { id: 305, name: "Frango, fígado, cru", carbs: 0.0 },
  { id: 306, name: "Frango, peito, com pele, assado", carbs: 0.0 },
  { id: 307, name: "Frango, peito, com pele, cru", carbs: 0.0 },
  { id: 308, name: "Frango, peito, sem pele, cozido", carbs: 0.0 },
  { id: 309, name: "Frango, peito, sem pele, cru", carbs: 0.0 },
  { id: 310, name: "Coxinha de frango, frita", carbs: 34.5 },
  { id: 311, name: "Croquete, de carne, cru", carbs: 33.3 },
  { id: 312, name: "Croquete, de carne, frito", carbs: 30.6 },
  { id: 313, name: "Empada de frango, pré-cozida, assada", carbs: 47.5 },
  { id: 314, name: "Empada, de frango, crua", carbs: 36.6 },
  { id: 315, name: "Linguiça, frango, crua", carbs: 1.1 },
  { id: 316, name: "Linguiça, porco, crua", carbs: 0.0 },
  { id: 317, name: "Mortadela, carne bovina e suína, crua", carbs: 5.6 },
  { id: 318, name: "Peru, carne, sem pele, assado", carbs: 0.0 },
  { id: 319, name: "Salsicha, frango, crua", carbs: 6.8 },
  { id: 320, name: "Salsicha, suína, crua", carbs: 2.1 },
  { id: 321, name: "Bebida láctea, pêssego", carbs: 11.2 },
  { id: 322, name: "Creme de Leite", carbs: 3.5 },
  { id: 323, name: "Iogurte, natural, desnatado", carbs: 5.8 },
  { id: 324, name: "Iogurte, sabor morango", carbs: 17.0 },
  { id: 325, name: "Leite, condensado", carbs: 57.3 },
  { id: 326, name: "Leite, de cabra", carbs: 5.3 },
  { id: 327, name: "Leite, de vaca, desnatado, pó", carbs: 49.3 },
  { id: 328, name: "Leite, de vaca, desnatado, UHT", carbs: 5.0 },
  { id: 329, name: "Leite, de vaca, integral", carbs: 4.5 },
  { id: 330, name: "Leite, de vaca, integral, pó", carbs: 38.0 },
  { id: 331, name: "Leite, fermentado, maçã", carbs: 15.3 },
  { id: 332, name: "Pudim, de chocolate, pó, preparo com leite integral", carbs: 19.3 },
  { id: 333, name: "Queijo, minas, frescal", carbs: 3.2 },
  { id: 334, name: "Queijo, minas, meia cura", carbs: 2.6 },
  { id: 335, name: "Queijo, mussarela", carbs: 3.0 },
  { id: 336, name: "Queijo, parmesão", carbs: 1.7 },
  { id: 337, name: "Queijo, pasteurizado", carbs: 5.2 },
  { id: 338, name: "Queijo, prato", carbs: 1.9 },
  { id: 339, name: "Requeijão, cremoso", carbs: 2.4 },
  { id: 340, name: "Ovo, de codorna, inteiro, cru", carbs: 0.8 },
  { id: 341, name: "Ovo, de galinha, clara, cozida", carbs: 0.0 },
  { id: 342, name: "Ovo, de galinha, gema, cozida", carbs: 1.2 },
  { id: 343, name: "Ovo, de galinha, inteiro, cozido", carbs: 0.6 },
  { id: 344, name: "Ovo, de galinha, inteiro, cru", carbs: 1.6 },
  { id: 345, name: "Ovo, de galinha, inteiro, frito", carbs: 1.2 },
  { id: 346, name: "Açúcar, cristal", carbs: 99.6 },
  { id: 347, name: "Açúcar, refinado", carbs: 99.5 },
  { id: 348, name: "Chocolate, ao leite", carbs: 59.6 },
  { id: 349, name: "Chocolate, ao leite, com castanha do Pará", carbs: 55.4 },
  { id: 350, name: "Chocolate, meio amargo", carbs: 52.8 },
  { id: 351, name: "Doce, de leite, pastoso", carbs: 59.5 },
  { id: 352, name: "Maria mole", carbs: 83.3 },
  { id: 353, name: "Mel, de abelha", carbs: 84.0 },
  { id: 354, name: "Picolé, sabor limão", carbs: 17.5 },
  { id: 355, name: "Ervilha, semente, crua", carbs: 62.4 },
  { id: 356, name: "Feijão, broto, cru", carbs: 7.8 },
  { id: 357, name: "Feijão, carioca, cozido", carbs: 13.6 },
  { id: 358, name: "Feijão, carioca, cru", carbs: 61.2 },
  { id: 359, name: "Feijão, fradinho, cozido", carbs: 13.0 },
  { id: 360, name: "Feijão, preto, cozido", carbs: 14.0 },
  { id: 361, name: "Feijão, preto, cru", carbs: 60.3 },
  { id: 362, name: "Feijão, roxo, cru", carbs: 60.0 },
  { id: 363, name: "Grão-de-bico, cru", carbs: 57.9 },
  { id: 364, name: "Lentilha, cozida", carbs: 16.3 },
  { id: 365, name: "Lentilha, crua", carbs: 62.0 },
  { id: 366, name: "Paçoca, amendoim", carbs: 50.8 },
  { id: 367, name: "Soja, extrato hidrossolúvel, pó", carbs: 38.6 },
  { id: 368, name: "Soja, farinha", carbs: 32.5 },
  { id: 369, name: "Soja, queijo (tofu)", carbs: 1.4 },
  { id: 370, name: "Soja, semente, crua", carbs: 34.3 },
  { id: 371, name: "Acarajé, cru", carbs: 37.0 },
  { id: 372, name: "Acarajé, frito", carbs: 29.3 },
  { id: 373, name: "Arroz-doce", carbs: 32.7 },
  { id: 374, name: "Baião de dois, arroz e feijão-de-corda", carbs: 20.4 },
  { id: 375, name: "Bife a cavalo, com óleo de soja", carbs: 10.3 },
  { id: 376, name: "Caruru, cru", carbs: 5.6 },
  { id: 377, name: "Charuto, de carne", carbs: 5.2 },
  { id: 378, name: "Churrasco, de carne bovina", carbs: 1.5 },
  { id: 379, name: "Cuscuz, de milho, cozido com sal", carbs: 25.3 },
  { id: 380, name: "Cuscuz, paulista", carbs: 16.6 },
  { id: 381, name: "Cuscuz, tapioca", carbs: 40.9 },
  { id: 382, name: "Dobradinha", carbs: 7.9 },
  { id: 383, name: "Estrogonofe de carne", carbs: 5.0 },
  { id: 384, name: "Estrogonofe de frango", carbs: 5.2 },
  { id: 385, name: "Feijão tropeiro, nordestino", carbs: 21.0 },
  { id: 386, name: "Feijoada", carbs: 11.4 },
  { id: 387, name: "Frango, assado, com pele", carbs: 0.1 },
  { id: 388, name: "Hambúrguer, de carne bovina, frito", carbs: 6.6 },
  { id: 389, name: "Hambúrguer, de carne bovina, grelhado", carbs: 8.4 },
  { id: 390, name: "Misto quente", carbs: 25.4 },
  { id: 391, name: "Omelete, de queijo", carbs: 1.4 },
  { id: 392, name: "Pão de queijo, assado", carbs: 34.2 },
  { id: 393, name: "Pizza, de frango com catupiry", carbs: 26.6 },
  { id: 394, name: "Pizza, mussarela", carbs: 32.2 },
  { id: 395, name: "Quibe, de carne, cru", carbs: 18.0 },
  { id: 396, name: "Quibe, de carne, frito", carbs: 13.9 },
  { id: 397, name: "Quibe, de carne, assado", carbs: 13.5 },
  { id: 398, name: "Sanduíche, buraco quente", carbs: 29.8 },
  { id: 399, name: "Torta, de limão, comercial", carbs: 36.9 },
  { id: 400, name: "Vatapá", carbs: 8.9 }
];


export default function DietaLowCarb() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  // Estados da Calculadora
  const [carbLimit, setCarbLimit] = useState(130);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [foodQty, setFoodQty] = useState('');
  const [plate, setPlate] = useState([]);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredFoods = foodDatabase.filter(food => 
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectFood = (food) => {
    setSelectedFood(food);
    setSearchTerm(food.name);
    setIsDropdownOpen(false);
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    if (!selectedFood || !foodQty) return;
    const carbsForQty = (selectedFood.carbs * parseFloat(foodQty)) / 100;
    
    setPlate([...plate, { ...selectedFood, qty: parseFloat(foodQty), totalCarbs: carbsForQty, idInstance: Date.now() }]);
    setFoodQty('');
    setSearchTerm('');
    setSelectedFood(null);
  };

  const handleRemoveFood = (idInstance) => {
    setPlate(plate.filter(item => item.idInstance !== idInstance));
  };

  const totalCarbsInPlate = plate.reduce((acc, curr) => acc + curr.totalCarbs, 0);
  const progressPercentage = Math.min((totalCarbsInPlate / carbLimit) * 100, 100);

  const faqs = [
    { pergunta: "Posso comer frutas na Dieta Low Carb?", resposta: "Sim! Na dieta low carb não há exclusão total de frutas, mas prioriza-se aquelas com menor densidade de açúcar e maior teor de fibras." },
    { pergunta: "A dieta low carb faz perder massa muscular?", resposta: "Não, desde que você consuma proteínas adequadamente. A base da dieta low carb permite uma boa ingestão de carnes, ovos e laticínios." },
    { pergunta: "Preciso contar calorias fazendo low carb?", resposta: "No início, muitas pessoas emagrecem apenas pelo aumento da saciedade. Porém, para continuar perdendo gordura, o déficit calórico ainda é importante." },
    { pergunta: "Dieta low carb dá dor de cabeça?", resposta: "Nos primeiros dias, o corpo elimina muito glicogênio e água. Aumentar a ingestão de água mineral e o sal na comida resolve rapidamente." }
  ];

  return (
    <>
      <Helmet>
        <title>O Que é Dieta Low Carb? Guia, Diferenças e Cardápio</title>
        <meta name="description" content="Aprenda o que é dieta low carb. Descubra a diferença entre low carb e cetogênica, como começar, cardápio e os mitos da gordura saturada vs insaturada." />
        <link rel="canonical" href={`https://www.nutricaocommarco.com.br${pathname}`} />
      </Helmet>

    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">
          
          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Dietas da Moda</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O Que é Dieta Low Carb? A Diferença para a Cetogênica e Como Começar
          </h1>
          
          <div className="mb-10 p-6 md:p-10 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-6 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
                <Target className="text-green-600 shrink-0" /> Resposta Direta: O que é Dieta Low Carb?
            </h2>
            <p className="mt-4 text-lg md:text-xl text-green-950 font-medium leading-relaxed m-0">
                Saber <strong>o que é dieta low carb</strong> significa entender que ela é uma estratégia alimentar focada na redução inteligente do consumo de carboidratos diários (geralmente entre 50g e 130g por dia). Diferente das dietas convencionais que muitas vezes abusam de farinhas e açúcares, a dieta low carb prioriza o consumo de proteínas de alto valor biológico, vegetais ricos em fibras e gorduras saudáveis para fornecer energia. O objetivo não é "zerar" o carboidrato, mas sim melhorar a sensibilidade à insulina, controlar a saciedade atuando diretamente nos <Link to="/hormonios_da_fome_emagrecimento" className="text-green-800 font-bold hover:underline">hormônios da fome</Link> e facilitar o uso da gordura estocada como combustível, promovendo um emagrecimento sustentável e de longo prazo.
            </p>
          </div>

          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none" title="Áudio explicando o que é dieta low carb">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/low-carb.mp3" type="audio/mpeg" />
                O seu navegador não suporta o áudio.
              </audio>
            </div>
          </div>

          <div className="mb-12 border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden bg-slate-50">
            <button 
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group"
              aria-label="Abrir Índice do Conteúdo sobre o que é dieta low carb"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-600 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                  <Activity size={18} />
                </div>
                <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</h3>
              </div>
              <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-600' : ''}`} />
            </button>

            <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1200px] opacity-100 border-t border-slate-200' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
              <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                <li><a href="#historia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="História da Dieta Low Carb"><Clock size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A História da Restrição</a></li>
                <li><a href="#diferenca" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="Diferença entre low carb e cetogênica"><Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Diferença: Low Carb x Keto</a></li>
                <li><a href="#calculadora" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="Calculadora de Carboidratos da Dieta Low Carb"><PieChart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Calculadora de Carboidratos</a></li>
                <li><a href="#gorduras" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="Gordura saturada vs insaturada na Dieta Mediterrânea"><Droplet size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Gorduras e Dieta Mediterrânea</a></li>
                <li><a href="#como-comecar" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="Como começar a fazer dieta low carb"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como Começar na Low Carb</a></li>
                <li><a href="#video-lowcarb" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="Vídeo: O que é dieta low carb"><Video size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vídeo Explicativo</a></li>
                <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="FAQ sobre o que é dieta low carb"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
              </ul>
            </div>
          </div>

          <p className="text-xl text-slate-600 font-medium mb-10 border-l-4 border-green-600 pl-4">
            Em um mundo hoje amplamente dominado por alimentos ultraprocessados, é muito comum que nós, como sociedade, confundamos a sede de nutrientes reais do nosso corpo com a clássica <Link to="/o-que-e-fome-emocional" className="text-green-600 font-bold hover:underline">fome emocional</Link>. Diante desse cenário de adoecimento metabólico, a <strong>dieta low carb</strong> surge não como uma restrição chata e severa, mas como um verdadeiro retorno à base da biologia humana. Entender de uma vez por todas o que é dieta low carb é o primeiro passo para resgatar a sua saúde, melhorar seus exames e perder peso sem precisar viver escravo da balança e contando os gramas de uma folha de alface.
          </p>

          <figure className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative">
            <img 
              src={artigoCapa} 
              alt="Descubra o que é dieta low carb, a diferença entre low carb e cetogênica e como começar a fazer hoje mesmo." 
              title="O que é Dieta Low Carb"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
              onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"; }}
            />
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-sm md:text-base text-slate-600 font-medium italic m-0">
                Aprender o que é dieta low carb vai muito além de apenas cortar o pão pela manhã; é aprender a priorizar a verdadeira densidade nutricional.
              </p>
            </figcaption>
          </figure>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <h2 id="historia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Clock className="text-green-600"/> A História: Como a Low Carb Ganhou o Mundo
            </h2>
            <p>
              Para mergulhar no conceito de o que é dieta low carb, precisamos voltar um pouco no tempo. Ao contrário do que muitos imaginam, a restrição de carboidratos não é uma invenção da era moderna ou de influenciadores do Instagram. Já no longínquo ano de 1862, o britânico William Banting publicou a sua "Carta sobre a Corpulência". Foi um dos primeiros e mais famosos relatos documentados na história sobre como a redução drástica do consumo de pães, açúcares, batatas e cerveja o ajudou a tratar a obesidade que, na época, ameaçava a sua própria vida. Banting popularizou tanto essa estratégia alimentar que, em algumas partes do mundo, a palavra "banting" virou sinônimo do ato de "fazer dieta".
            </p>
            <p>
              Esse movimento de restrição de carboidratos ganhou cada vez mais respaldo científico ao longo do século XX e literalmente explodiu em popularidade entre as décadas de 70 e 90 com a polêmica dieta do Dr. Atkins. Embora a abordagem original do Atkins fosse muito voltada para a <Link to="/o-que-e-dieta-cetogenica" className="text-green-600 font-bold hover:underline">dieta cetogênica</Link> severa (cortando quase totalmente os carboidratos), a ciência da nutrição moderna evoluiu muito. 
            </p>
            <p>
               Hoje, entendemos perfeitamente o que é dieta low carb e sabemos com clareza que <strong>não é necessário entrar em cetose profunda</strong> para conseguir colher os excelentes benefícios da regulação da nossa insulina. A dieta low carb atual, que é recomendada pelos melhores profissionais, é perfeitamente equilibrada, focada em alimentos integrais e amplamente apoiada por estudos sérios para o tratamento do diabetes tipo 2, para a melhora geral do nosso metabolismo e, claro, para garantir o emagrecimento de longo prazo, fugindo finalmente do terrível <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-bold hover:underline">efeito sanfona</Link>.
            </p>

            <h2 id="diferenca" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Qual a Diferença Entre Low Carb e Cetogênica?
            </h2>
            <p>
              Sem dúvida alguma, essa é a maior confusão entre as pessoas que começam a estudar nutrição e buscam melhorar o corpo. Ambas as estratégias restringem os carboidratos, sim, mas os propósitos biológicos e, principalmente, as margens de tolerância do que você pode comer no dia a dia são completamente diferentes. A verdadeira <strong>diferença entre low carb e cetogênica</strong> reside na quantidade total de carboidratos permitida em um dia e na resposta exata que o seu fígado dará a essa restrição.
            </p>

            <div className="my-8 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left min-w-[600px] m-0">
                <caption className="sr-only">Tabela explicativa comparando a diferença entre low carb e cetogênica e o que é dieta low carb</caption>
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 uppercase tracking-widest text-xs font-black">
                  <tr>
                    <th className="p-5 w-1/4">Característica</th>
                    <th className="p-5 w-1/3 text-green-700">Dieta Low Carb</th>
                    <th className="p-5 w-1/3 text-orange-600">Dieta Cetogênica (Keto)</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Limite de Carboidratos</td>
                    <td className="p-5">Permite o consumo flexível entre <strong>50g e 130g</strong> por dia.</td>
                    <td className="p-5">Muito restrito. Limite inferior a <strong>30g a 50g</strong> por dia.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Flexibilidade</td>
                    <td className="p-5">É alta. Permite que você encaixe frutas um pouco mais doces (como uma maçã ou banana ocasional) e o uso de raízes ou tubérculos, servindo até para saber se o <Link to="/diabetico_pode_comer_beterraba" className="text-green-600 hover:underline">diabético pode comer beterraba</Link> na sua rotina.</td>
                    <td className="p-5">É baixíssima. É focada quase que exclusivamente no consumo de gorduras, muitos vegetais folhosos e em proteínas que devem ser rigorosamente calculadas.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Estado Metabólico</td>
                    <td className="p-5">O corpo usa tanto a gordura quanto a glicose de forma mesclada, melhorando muito a sua sensibilidade à insulina.</td>
                    <td className="p-5">O corpo é forçado a entrar em um estado de <strong>Cetose</strong>, produzindo no fígado os chamados corpos cetônicos para gerar energia.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Sustentabilidade</td>
                    <td className="p-5">É muito mais fácil de ser mantida no longo prazo e permite uma ótima adaptação em festas ou viagens de férias.</td>
                    <td className="p-5">Bastante difícil de manter. É uma dieta geralmente usada de forma terapêutica por períodos determinados de tempo.</td>
                  </tr>
                </tbody>
              </table>
            </div>

          {/* CALCULADORA DE CARBOIDRATOS COM BUSCA E META */}
          <h2 id="calculadora" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <PieChart className="text-green-600"/> Calculadora Low Carb: Entenda os Carboidratos
          </h2>
          <p className="mb-6">
              A melhor forma de aprender na prática o que é dieta low carb é visualizando. Por isso, desenvolvi esta ferramenta interativa exclusiva para você. O limite clássico de uma Dieta Low Carb mais flexível é de aproximadamente <strong>130 gramas de carboidratos por dia</strong>, mas você pode ajustar a sua meta de acordo com o seu objetivo. Brinque à vontade adicionando os alimentos da gigantesca lista da Tabela TACO Brasileira abaixo e veja o quão rápido você atinge o seu limite metabólico!
          </p>

          <div className="my-10 bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-visible p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 mb-8 relative">
                
                {/* Input de Busca */}
                <div className="flex-1 bg-slate-50 p-6 rounded-3xl border border-slate-200 relative" ref={dropdownRef}>
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-widest mb-4">Adicionar Alimento</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Busque um alimento..." 
                      value={searchTerm} 
                      onChange={(e) => { setSearchTerm(e.target.value); setIsDropdownOpen(true); }}
                      onFocus={() => setIsDropdownOpen(true)}
                      className="w-full bg-white border border-slate-200 p-3 rounded-xl outline-none font-medium text-slate-700 pl-10"
                    />
                    <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
                  </div>

                  {isDropdownOpen && searchTerm && (
                    <ul className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-48 overflow-y-auto left-0">
                      {filteredFoods.length > 0 ? filteredFoods.map(food => (
                        <li key={food.id} onClick={() => handleSelectFood(food)} className="p-3 hover:bg-green-50 cursor-pointer text-sm font-bold text-slate-700 border-b border-slate-50">
                          {food.name}
                        </li>
                      )) : <li className="p-3 text-sm text-slate-400 italic">Nenhum alimento encontrado</li>}
                    </ul>
                  )}

                  <form onSubmit={handleAddFood} className="flex gap-4 mt-4">
                    <input 
                      type="number" 
                      placeholder="Qtd (g)" 
                      value={foodQty} 
                      onChange={(e) => setFoodQty(e.target.value)}
                      className="w-full bg-white border border-slate-200 p-3 rounded-xl outline-none font-medium text-slate-700"
                    />
                    <button type="submit" className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition w-12 h-12 flex items-center justify-center shrink-0">
                      <PlusCircle size={20} />
                    </button>
                  </form>
                </div>

                {/* Resumo do Prato e Meta de Carboidratos */}
                <div className="flex-1 bg-slate-900 p-6 rounded-3xl border border-slate-800 text-white flex flex-col">
                  
                  {/* SELETOR DE META DIÁRIA */}
                  <div className="mb-6 border-b border-slate-700 pb-5">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Selecione sua meta Low Carb Diária:</p>
                    <div className="flex gap-2">
                      {[50, 80, 100, 130].map(limit => (
                        <button
                          key={limit}
                          type="button"
                          onClick={() => setCarbLimit(limit)}
                          className={`flex-1 py-2 rounded-xl text-xs font-black transition-all duration-300 ${carbLimit === limit ? 'bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.4)] scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}`}
                        >
                          {limit}g
                        </button>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white uppercase tracking-widest mb-4 flex items-center justify-between">
                    <span>Meu Cardápio</span>
                    <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-sm">{totalCarbsInPlate.toFixed(1)}g</span>
                  </h3>
                  
                  <div className="flex-1 overflow-y-auto max-h-[150px] pr-2 space-y-2 mb-4">
                    {plate.length === 0 ? (
                      <p className="text-slate-400 text-sm italic">O prato está vazio. Busque e adicione alimentos ao lado.</p>
                    ) : (
                      plate.map(item => (
                        <div key={item.idInstance} className="flex justify-between items-center bg-slate-800 p-3 rounded-xl border border-slate-700">
                          <div>
                            <p className="font-bold text-sm m-0 leading-none">{item.name}</p>
                            <span className="text-[11px] text-slate-400">{item.qty}g</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-black text-green-400 text-sm">{item.totalCarbs.toFixed(1)}g</span>
                            <button onClick={() => handleRemoveFood(item.idInstance)} className="text-red-400 hover:text-red-300">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Barra de Progresso com Limite Variável */}
                  <div className="mt-auto pt-4 border-t border-slate-700">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                      <span className="text-slate-400">0g</span>
                      <span className="text-slate-300">Limite Diário ({carbLimit}g)</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden relative">
                      <div 
                        className={`h-full transition-all duration-500 ${totalCarbsInPlate > carbLimit ? 'bg-red-500' : 'bg-green-500'}`} 
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    {totalCarbsInPlate > carbLimit && (
                      <p className="text-red-400 text-xs font-bold mt-3 text-center flex items-center justify-center gap-1 bg-red-900/30 py-2 rounded-lg">
                        <AlertTriangle size={14}/> Você ultrapassou a sua meta de {carbLimit}g!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <h2 id="gorduras" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Droplet className="text-green-600"/> Gordura Saturada vs Insaturada e a Dieta Mediterrânea
            </h2>
            <p>
              Quando reduzimos de fato a quantidade dos carboidratos seguindo a dieta low carb, a principal fonte de energia que assume o protagonismo na sua alimentação passa a ser a gordura. É exatamente aqui que entra um dos debates mais intensos da nutrição: o embate da <strong>gordura saturada vs insaturada</strong>. O medo clássico, alimentado por conselhos antigos, é de pensar que, por exemplo, se você <Link to="/comer-ovo-todo-dia-aumenta-o-colesterol" className="text-green-600 font-bold hover:underline">comer ovo todo dia, seu colesterol vai estourar</Link>. A boa notícia é que a nutrição clínica atual já evoluiu muito nesse aspecto.
            </p>
            <p>
              As gorduras saturadas (que são aquelas normalmente encontradas na carne vermelha, na manteiga, no óleo de coco e nos laticínios) definitivamente não são o grande veneno que se acreditava nas cartilhas médicas dos anos 80, mas, claro, elas devem ser consumidas com equilíbrio e moderação. No entanto, o verdadeiro segredo do sucesso na nossa alimentação saudável está nas famosas gorduras insaturadas. É exatamente aqui que a dieta Low Carb faz as pazes e bebe da fonte da maravilhosa **dieta mediterrânea**, que hoje é amplamente considerada como uma das melhores e mais seguras estratégias do mundo todo para promover a saúde do coração e garantir uma vida longa (longevidade).
            </p>
            <p>
              A <strong>dieta mediterrânea</strong> não é estritamente uma dieta "low carb", mas ela nos ensina a priorizar carboidratos complexos de excelente qualidade e nos orienta a abusar de alimentos como o azeite de oliva extravirgem, o abacate, os peixes gordos (como o salmão e a sardinha, ambos riquíssimos no protetor ômega-3) e de diversas nozes e castanhas. Ao mesclar o brilhante conceito de restrição inteligente de amidos da low carb com essa altíssima qualidade de lipídios ensinada na dieta mediterrânea, você acaba criando um padrão alimentar que é um anti-inflamatório formidável e altamente promotor de saciedade.
            </p>

            <h2 id="como-comecar" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-green-600"/> Como Começar a Fazer Dieta Low Carb Hoje
            </h2>
            <p>
              Muita gente acha complicado, mas saber <strong>como começar a fazer dieta low carb</strong> de verdade não exige que você crie planos mirabolantes ou gaste horas na cozinha. O primeiro grande passo é, de longe, o mais simples: a temida "limpeza da despensa". Lembre-se, a sua dieta sempre começa dentro do supermercado. Inicie removendo da sua casa (ou comprando muito menos) alimentos como pães brancos refinados, refrigerantes normais, biscoitos, macarrão comum e aquele açúcar branco de mesa. O grande objetivo imediato nas suas primeiras semanas é apenas parar de estimular grandes picos de insulina que, inevitavelmente, causarão letargia e aquela famosa "fome de rebote" em pouquíssimas horas.
            </p>

            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-green-100 my-8 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 mb-4 italic flex items-center gap-2">
                <Check className="text-green-600" /> 3 Passos Essenciais para Começar:
              </h3>
              <ol className="space-y-5 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-200 text-green-800 font-black flex items-center justify-center shrink-0 mt-0.5">1</div>
                  <div>
                    <strong className="block text-slate-900">Garantir a Ingestão de Proteína:</strong> 
                    Foque nisso em todas as suas refeições principais (consuma ovos, carnes magras, frango, iogurtes proteicos etc.). Esse consumo é inegociável, pois é ele que vai preservar a sua preciosa massa magra e ditar o ritmo da sua saciedade ao longo do dia.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-200 text-green-800 font-black flex items-center justify-center shrink-0 mt-0.5">2</div>
                  <div>
                    <strong className="block text-slate-900">Abusar dos Vegetais Folhosos:</strong> 
                    Não tenha medo de encher o prato com rúcula, espinafre, alface e brócolis. Eles fornecem muito volume ao prato, são riquíssimos em vitaminas e minerais, e a melhor parte é que praticamente não contam como "carboidratos limitantes" devido ao seu alto e poderoso teor de fibras protetoras.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-200 text-green-800 font-black flex items-center justify-center shrink-0 mt-0.5">3</div>
                  <div>
                    <strong className="block text-slate-900">Dominar o Balanço Calórico:</strong> 
                    A dieta low carb é fantástica, mas não quebra as leis básicas da física e da biologia. Comer um quilo inteiro de queijo e nozes por dia achando que está "saudável" ainda vai fazer você engordar. Para secar de vez, você deve calcular e respeitar <strong><Link to="/quantas-calorias-gasto-por-dia" className="text-green-600 hover:underline">quantas calorias gasta por dia</Link></strong> e operar em um déficit calórico leve. Fazer um acompanhamento utilizando a <Link to="/o_que_e_antropometria" className="text-green-600 font-bold hover:underline">antropometria clínica</Link> é o cenário ideal para acompanhar seus resultados.
                  </div>
                </li>
              </ol>
            </div>

            <p>
              Aliado a toda essa mudança alimentar inicial, é interessante observar que muitas pessoas também decidem, de forma natural, começar a praticar o <Link to="/o-que-e-jejum-intermitente" className="text-green-600 font-bold hover:underline">jejum intermitente</Link>. E o motivo é simples: a ausência total daqueles temidos picos de insulina provocada pela dieta low carb torna absurdamente mais fácil, natural e indolor conseguir passar 14 ou 16 horas do dia sem precisar se alimentar.
            </p>

            <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
                <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                    <Zap size={14} className="fill-white" />
                    <span>O Pingus Aprova!</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                        <img 
                            src={`${githubImgBase}logoN_pingus.png`} 
                            alt="O Pingus aprova a medição exata para entender o que é dieta low carb" 
                            title="Dieta Low Carb de precisão"
                            className="w-full h-full object-contain" 
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                            Balança Digital de Precisão para Cozinha <span className="text-green-700">Aliada Low Carb</span>
                        </h4>

                        <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-white p-2">
                            <img 
                                src={`${githubImgBase}Afiliado/BalancaDigital.jpg`} 
                                alt="Balança digital de cozinha ideal para a dieta low carb." 
                                className="w-full h-auto object-contain" 
                                onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1590845947376-28f0904323e0?auto=format&fit=crop&q=80&w=400"; }}
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            Se você brincou e montou pratos com a nossa calculadora de carboidratos, percebeu rapidamente que **o peso real do alimento importa muito**. Subestimar apenas "no olho" o tamanho real de uma maçã ou o peso da porção de arroz no seu prato pode tirar você da margem de carboidratos segura do dia de forma imperceptível. E adivinhe se <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 font-bold hover:underline">a balança de bioimpedância do seu banheiro é confiável</Link> para julgar seus resultados iniciais? Sim, ela ajuda a ter um norte, mas a pequena balança de precisão que fica em cima da sua pia da cozinha é essencial! Ter uma balança digital barata em casa é, sem dúvidas, a ferramenta número 1 para garantir o seu sucesso metabólico.
                        </p>

                        <a 
                            href="https://meli.la/2E9d1zF" 
                            rel="sponsored noopener noreferrer" 
                            target="_blank"
                            aria-label="Comprar Balança de Precisão no Mercado Livre para medir a dieta low carb"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Comprar no Mercado Livre
                        </a>
                    </div>
                </div>
            </div>

            <h2 id="video-lowcarb" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Video className="text-green-600"/> O Que É Dieta Low Carb na Prática?
            </h2>
            <p className="mb-6">
              Ainda ficou com algumas dúvidas de como formatar seus macros e entender o conceito a fundo para começar ainda hoje? O excelente vídeo abaixo faz uma imersão muito mais prática para garantir e te provar que você não vai precisar seguir nenhum terrorismo nutricional estressante, mas sim uma ciência aplicável, leve e inteligente que cabe na correria do dia a dia:
            </p>

            <div className="my-10 p-6 md:p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-slate-800">
                <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-xl shrink-0 bg-black border-4 border-slate-700 relative">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/5F_T2hQ40gQ"
                        title="Explicação definitiva sobre O que é Dieta Low Carb e como fazer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-black text-white italic uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
                        <PlayCircle className="text-green-500" /> A Base Metabólica
                    </h3>
                    <p className="text-slate-300 font-medium leading-relaxed mb-6">
                        Assista para derrubar de vez os temidos mitos sobre as gorduras que ouvimos desde a infância e consolidar sua jornada de emagrecimento sem a necessidade de passar fome. Lembre-se, o equilíbrio entre a qualidade dos macronutrientes e a ingestão calórica diária é o que verdadeiramente dita a sua saúde e disposição a longo prazo.
                    </p>
                </div>
            </div>

            <div className="mb-12 border-t border-slate-200 pt-8 mt-12">
              <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-4 flex items-center gap-3">
                <Target className="text-green-600"/> Conclusão: Dieta Low Carb é para você?
              </h2>
              <p>
                No final das contas, compreender a fundo o que é dieta low carb nos liberta enormemente da contagem neurótica de calorias puras, permitindo que a gente foque muito mais na qualidade e no impacto profundo que cada alimento causa nos nossos hormônios. Se você busca desesperadamente diminuir a sua vontade de doce, melhorar os perfis dos seus exames sanguíneos e ter um processo de emagrecimento mais sólido, quer ele seja associado (ou não) a treinos em academias e ao uso de suplementos e medicamentos inovadores como a <Link to="/retatrutida_o_que_e" className="text-green-600 font-bold hover:underline">Retatrutida</Link> e a famosa <Link to="/tirzepatida-para-que-serve" className="text-green-600 font-bold hover:underline">Tirzepatida</Link> sob rigorosa orientação e acompanhamento médico, saiba que a dieta Low Carb é, sem dúvidas, um alicerce primoroso para a sua jornada!
              </p>
            </div>

            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      aria-expanded={openFaqIndex === index}
                      className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <h3 className={`text-lg font-black mb-0 italic transition-colors ${openFaqIndex === index ? 'text-green-600' : 'text-slate-800 group-hover:text-green-600'}`}>
                        {faq.pergunta}
                      </h3>
                      <ChevronDown className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-600' : ''}`} size={24} />
                    </button>
                    <div className={`transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
                      <p className="text-slate-600 m-0 leading-relaxed border-t border-green-100/60 pt-4">{faq.resposta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Newsletter />
          </div>
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img 
              src={`${githubImgBase}Eu_1.png`} 
              alt="Marco Aurélio Jr. que desvenda o que é dieta low carb na prática" 
              title="Marco Aurélio Jr. - Estudante de Nutrição e Avaliador ISAK 1"
              className="w-full h-full object-cover" 
              onError={(e) => { e.target.onerror = null; e.target.src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' x='50' font-size='50' text-anchor='middle' dominant-baseline='middle'>👨‍⚕️</text></svg>"; }}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Estudante dedicado da bioquímica nutricional e monitor no laboratório de nutrição da Unicesumar Tijuca. Marco descomplica a ciência do emagrecimento ensinando na prática o que é dieta low carb, focando em traduzir evidências densas (ISAK Nível 1) em estratégias sustentáveis para o seu dia a dia.
            </p>
            <a href="https://instagram.com/Nutricao_com_Marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
