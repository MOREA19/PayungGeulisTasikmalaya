import React from 'react';
import { ArrowLeft, Mail, Lock, Eye } from 'lucide-react';

interface CustomerLoginProps {
  onNavigate: (page: string) => void;
}

export function CustomerLogin({ onNavigate }: CustomerLoginProps) {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <div className="font-bold text-xl text-amber-800">Payung Geulis</div>
                <div className="text-xs text-gray-600">Tasikmalaya</div>
              </div>
            </div>
            <button 
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-amber-700 transition-colors hover:bg-amber-50 rounded-lg"
              onClick={() => onNavigate('homepage')}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </button>
          </div>
        </div>
      </header>

      {/* Login Content */}
      <div className="flex items-center justify-center p-12">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Left - Welcome Section */}
            <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-orange-700 p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Selamat Datang Kembali!</h2>
                <p className="text-amber-100 mb-8 leading-relaxed">
                  Masuk ke akun Anda untuk melanjutkan pengalaman belanja payung geulis terbaik dari Tasikmalaya
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                  <div className="aspect-square bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-center opacity-60">
                      <div className="text-6xl mb-2">☂️</div>
                      <div className="text-sm">Ilustrasi Payung</div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-amber-100">
                    Kerajinan Tradisional Berkualitas
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold mb-3">✨ Keuntungan Member:</h3>
                  <div className="space-y-3">
                    {[
                      'Checkout lebih cepat & mudah',
                      'Lacak pesanan real-time',
                      'Simpan alamat pengiriman',
                      'Akses promo eksklusif',
                      'Wishlist produk favorit'
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-amber-900 text-xs">✓</span>
                        </div>
                        <span className="text-amber-50">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Login Form */}
            <div className="p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Login</h3>
                <p className="text-gray-600">
                  Masuk untuk melanjutkan belanja Anda
                </p>
              </div>

              <form className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="nama@email.com"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      placeholder="Masukkan password"
                      className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Eye className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600" />
                    <span className="text-sm text-gray-700">Ingat saya</span>
                  </label>
                  <button className="text-sm text-amber-700 hover:text-amber-800 font-medium">
                    Lupa password?
                  </button>
                </div>

                {/* Login Button */}
                <button 
                  type="button"
                  className="w-full py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 shadow-lg shadow-amber-600/30 transition-all"
                  onClick={() => onNavigate('homepage')}
                >
                  Masuk
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Atau masuk dengan</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all">
                    <div className="w-5 h-5 bg-red-500 rounded"></div>
                    <span className="font-medium text-gray-700">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all">
                    <div className="w-5 h-5 bg-blue-600 rounded"></div>
                    <span className="font-medium text-gray-700">Facebook</span>
                  </button>
                </div>

                {/* Guest Checkout */}
                <button 
                  type="button"
                  className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all"
                  onClick={() => onNavigate('homepage')}
                >
                  Lanjut Tanpa Login
                </button>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-600">
                  Belum punya akun?{' '}
                  <button className="text-amber-700 font-semibold hover:text-amber-800">
                    Daftar Sekarang
                  </button>
                </p>
              </form>

              {/* Security Info */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="text-xs text-blue-900">
                  🔒 <span className="font-medium">Transaksi Aman.</span> Data Anda dilindungi dengan enkripsi SSL 256-bit.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-semibold text-gray-900 mb-2">Transaksi Aman</h4>
              <p className="text-sm text-gray-600">Dilindungi SSL 256-bit</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="font-semibold text-gray-900 mb-2">Pengiriman Terpercaya</h4>
              <p className="text-sm text-gray-600">Ekspedisi terbaik</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-semibold text-gray-900 mb-2">CS 24/7</h4>
              <p className="text-sm text-gray-600">Siap membantu Anda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}