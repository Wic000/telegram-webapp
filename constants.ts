import { Product, MainCategory, Language } from './types';

export const TRANSLATIONS: Record<Language, any> = {
  uz: {
    all: "Asosiy", laptops: "Noutbuklar", pc: "Kompyuter", accessories: "Jihozlar",
    cart: "Savatcha", total: "Jami summa", payment: "To'lov", confirm: "Buyurtma",
    order: "Tasdiqlash", buildPc: "PK Konstruktor", buildDesc: "O'z PK-ingizni yig'ing",
    select: "Tanlash", parts: { cpu: "Protsessor", gpu: "Videokarta", ram: "Operativ xotira", storage: "Xotira", psu: "Blok pitaniya" }
  },
  ru: {
    all: "Главная", laptops: "Ноутбуки", pc: "Компьютеры", accessories: "Аксессуары",
    cart: "Корзина", total: "Итоговая сумма", payment: "Оплата", confirm: "В корзину",
    order: "Подтвердить", buildPc: "Конфигуратор ПК", buildDesc: "Соберите свой ПК",
    select: "Выбрать", parts: { cpu: "Процессор", gpu: "Видеокарта", ram: "ОЗУ", storage: "Накопитель", psu: "Блок питания" }
  },
  en: {
    all: "Main", laptops: "Laptops", pc: "Desktop", accessories: "Accessories",
    cart: "Cart", total: "Total Amount", payment: "Payment", confirm: "To Cart",
    order: "Confirm Order", buildPc: "PC Builder", buildDesc: "Configure your PC",
    select: "Select", parts: { cpu: "CPU", gpu: "GPU", ram: "Memory", storage: "Storage", psu: "PSU" }
  }
};

export const PRODUCTS: Product[] = [
  { id: 'l1', name: { uz: 'MacBook Pro 16" M3 Max', ru: 'MacBook Pro 16" M3 Max', en: 'MacBook Pro 16" M3 Max' }, description: { uz: '36GB RAM, 1TB SSD', ru: '36GB RAM, 1TB SSD', en: '36GB RAM, 1TB SSD' }, price: 3450, mainCategory: MainCategory.LAPTOPS, subCategory: 'all', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80' },
  { id: 'l2', name: { uz: 'ASUS ROG Strix G16', ru: 'ASUS ROG Strix G16', en: 'ASUS ROG Strix G16' }, description: { uz: 'i9-13980HX, RTX 4080', ru: 'i9-13980HX, RTX 4080', en: 'i9-13980HX, RTX 4080' }, price: 2100, mainCategory: MainCategory.LAPTOPS, subCategory: 'all', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80' },
  { id: 'pc1', name: { uz: 'Samsung Odyssey G7', ru: 'Samsung Odyssey G7', en: 'Samsung Odyssey G7' }, description: { uz: '27" 240Hz QHD', ru: '27" 240Hz QHD', en: '27" 240Hz QHD' }, price: 650, mainCategory: MainCategory.PC, subCategory: 'monitor', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80' },
  { id: 'acc1', name: { uz: 'Razer Basilisk V3', ru: 'Razer Basilisk V3', en: 'Razer Basilisk V3' }, description: { uz: 'RGB Gaming Mouse', ru: 'RGB Gaming Mouse', en: 'RGB Gaming Mouse' }, price: 85, mainCategory: MainCategory.ACCESSORIES, subCategory: 'other', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80' }
];

export const BUILD_OPTIONS = {
  cpu: [{ id: 'c1', name: 'Core i5-13400', price: 220 }, { id: 'c2', name: 'Core i7-14700K', price: 450 }, { id: 'c3', name: 'Core i9-14900K', price: 620 }],
  gpu: [{ id: 'g1', name: 'RTX 4060 Ti', price: 400 }, { id: 'g2', name: 'RTX 4070 Super', price: 650 }, { id: 'g3', name: 'RTX 4080 Super', price: 1100 }],
  ram: [{ id: 'r1', name: '16GB DDR5', price: 75 }, { id: 'r2', name: '32GB DDR5', price: 140 }, { id: 'r3', name: '64GB DDR5', price: 260 }],
  storage: [{ id: 's1', name: '1TB NVMe SSD', price: 90 }, { id: 's2', name: '2TB NVMe SSD', price: 160 }],
  psu: [{ id: 'p1', name: '750W Gold', price: 110 }, { id: 'p2', name: '1000W Gold', price: 190 }]
};