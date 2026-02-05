import React from 'react';
import { Search, ShoppingCart, User, Star } from 'lucide-react';
import { SearchModal } from './SearchModal';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('Semua');
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Search Modal */}
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => onNavigate('homepage')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <div className="font-bold text-xl text-amber-800">Payung Geulis</div>
                <div className="text-xs text-gray-600">Tasikmalaya</div>
              </div>
            </button>
            
            <nav className="hidden md:flex gap-8">
              <button 
                onClick={() => onNavigate('homepage')}
                className="text-gray-700 hover:text-amber-800 transition-colors"
              >
                Beranda
              </button>
              <button 
                onClick={() => onNavigate('products')}
                className="text-amber-800 font-semibold border-b-2 border-amber-600 pb-1"
              >
                Produk
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="text-gray-700 hover:text-amber-800 transition-colors"
              >
                Tentang
              </button>
            </nav>

            <div className="flex gap-3">
              <button className="p-2 hover:bg-amber-50 rounded-lg transition-colors" onClick={() => setSearchOpen(true)}>
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                className="p-2 hover:bg-amber-50 rounded-lg transition-colors relative"
                onClick={() => onNavigate('cart')}
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              <button 
                className="p-2 hover:bg-amber-50 rounded-lg transition-colors"
                onClick={() => onNavigate('customerProfile')}
              >
                <User className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-amber-600/10 rounded-full mb-4">
              <span className="text-amber-800 text-sm font-semibold">Koleksi Terbaru</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Katalog <span className="text-amber-700">Payung Geulis</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai pilihan payung geulis dengan motif batik yang indah dan kualitas terbaik
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Sort */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="flex gap-3 flex-wrap">
              <button className="px-6 py-2 bg-amber-600 text-white rounded-lg font-semibold shadow-md">
                Semua Produk
              </button>
              <button className="px-6 py-2 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-semibold hover:border-amber-600 transition-colors">
                Payung Mini
              </button>
              <button className="px-6 py-2 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-semibold hover:border-amber-600 transition-colors">
                Payung Sedang
              </button>
              <button className="px-6 py-2 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-semibold hover:border-amber-600 transition-colors">
                Payung Besar
              </button>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-sm text-gray-600">Urutkan:</span>
              <select className="px-4 py-2 border-2 border-gray-200 rounded-lg text-gray-700 font-semibold focus:outline-none focus:border-amber-600">
                <option>Terbaru</option>
                <option>Harga Terendah</option>
                <option>Harga Tertinggi</option>
                <option>Terlaris</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Payung Batik Parang', price: 'Rp 350.000', stock: 25, category: 'Sedang' },
              { name: 'Payung Batik Mega Mendung', price: 'Rp 450.000', stock: 18, category: 'Besar' },
              { name: 'Payung Batik Kawung', price: 'Rp 400.000', stock: 30, category: 'Sedang' },
              { name: 'Payung Batik Sekar Jagad', price: 'Rp 500.000', stock: 12, category: 'Besar' },
              { name: 'Payung Mini Bordir', price: 'Rp 250.000', stock: 40, category: 'Mini' },
              { name: 'Payung Jumbo Classic', price: 'Rp 650.000', stock: 8, category: 'Besar' },
              { name: 'Payung Custom Design', price: 'Rp 750.000', stock: 5, category: 'Sedang' },
              { name: 'Payung Eksklusif Gold', price: 'Rp 850.000', stock: 3, category: 'Besar' },
              { name: 'Payung Mini Floral', price: 'Rp 275.000', stock: 35, category: 'Mini' },
              { name: 'Payung Batik Truntum', price: 'Rp 425.000', stock: 20, category: 'Sedang' },
              { name: 'Payung Classic Brown', price: 'Rp 325.000', stock: 28, category: 'Sedang' },
              { name: 'Payung Premium Silk', price: 'Rp 950.000', stock: 2, category: 'Besar' }
            ].map((product, index) => (
              <button
                key={index}
                onClick={() => onNavigate('product')}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-amber-900 opacity-30 text-center">
                    <div className="text-5xl mb-2">☂️</div>
                    <div className="text-sm font-semibold">{product.name}</div>
                  </div>
                  {/* Badge */}
                  {product.stock < 10 && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-red-600 text-white text-xs rounded-full font-semibold">
                      Stok Terbatas
                    </div>
                  )}
                  {index < 2 && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-amber-600 text-white text-xs rounded-full font-semibold">
                      Terlaris
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5 text-left">
                  <div className="text-xs text-amber-700 font-semibold mb-2">{product.category}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-600 text-amber-600" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-700">{product.price}</span>
                    <span className="text-xs text-gray-500">Stok: {product.stock}</span>
                  </div>
                  <div className="mt-4 w-full py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold text-center group-hover:bg-amber-700 transition-colors">
                    Lihat Detail
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-12">
            <button className="w-10 h-10 bg-amber-600 text-white rounded-lg font-semibold">1</button>
            <button className="w-10 h-10 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:border-amber-600 transition-colors">2</button>
            <button className="w-10 h-10 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:border-amber-600 transition-colors">3</button>
            <button className="w-10 h-10 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:border-amber-600 transition-colors">→</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PG</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Payung Geulis</div>
                  <div className="text-xs text-gray-400">Tasikmalaya</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kerajinan payung tradisional berkualitas tinggi dari Tasikmalaya, Jawa Barat.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Kategori</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Payung Mini</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Payung Sedang</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Payung Besar</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Custom Design</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Bantuan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Cara Pemesanan</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Pengiriman</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Kebijakan Retur</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Kontak</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>📧 info@payunggeulis.com</li>
                <li>📱 +62 821-xxxx-xxxx</li>
                <li>📍 Tasikmalaya, Jawa Barat</li>
              </ul>
              <div className="flex gap-3 mt-6">
                <div className="w-10 h-10 bg-gray-700 hover:bg-amber-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span>f</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 hover:bg-amber-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span>ig</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 hover:bg-amber-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <span>wa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Payung Geulis Tasikmalaya. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <button className="hover:text-amber-400 transition-colors">Syarat & Ketentuan</button>
              <button className="hover:text-amber-400 transition-colors">Kebijakan Privasi</button>
              <button 
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                onClick={() => onNavigate('sellerLogin')}
              >
                <span>🔐</span>
                <span>Portal Penjual</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}