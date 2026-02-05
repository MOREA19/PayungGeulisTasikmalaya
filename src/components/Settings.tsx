import React from 'react';
import { Package, ShoppingBag, Users, TrendingUp, LogOut, BarChart3, Plus, Store, Settings as SettingsIcon, Save, User, Mail, Phone, MapPin, Lock, Bell, Palette, Globe } from 'lucide-react';

interface SettingsProps {
  onNavigate: (page: string) => void;
}

export function Settings({ onNavigate }: SettingsProps) {
  return (
    <div className="bg-[#F0FDF4] min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <div className="font-bold text-xl text-emerald-800">Dashboard Penjual</div>
                <div className="text-xs text-gray-600">Payung Geulis Tasikmalaya</div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-right">
                <div className="text-sm text-gray-600">Login sebagai:</div>
                <div className="font-semibold text-gray-900">Admin Payung Geulis</div>
              </div>
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                onClick={() => onNavigate('sellerLogin')}
              >
                <LogOut className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700 font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-gray-200 min-h-screen sticky top-0">
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Menu Utama</h3>
              <div className="space-y-1">
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('sellerDashboard')}
                >
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                  Dashboard
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('manageProducts')}
                >
                  <Package className="w-5 h-5 text-gray-600" />
                  Kelola Produk
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('manageOrders')}
                >
                  <ShoppingBag className="w-5 h-5 text-gray-600" />
                  Kelola Pesanan
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('manageCustomers')}
                >
                  <Users className="w-5 h-5 text-gray-600" />
                  Kelola Pelanggan
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-emerald-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('salesReport')}
                >
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  Laporan Penjualan
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium shadow-lg">
                  <SettingsIcon className="w-5 h-5" />
                  Pengaturan
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Akses Cepat</h3>
              <div className="space-y-1">
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors font-medium"
                  onClick={() => onNavigate('addProduct')}
                >
                  <Plus className="w-5 h-5" />
                  Tambah Produk
                </button>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-lg transition-colors"
                  onClick={() => onNavigate('homepage')}
                >
                  <Store className="w-5 h-5 text-gray-600" />
                  Lihat Toko
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Pengaturan</h1>
            <p className="text-gray-600">Kelola preferensi dan konfigurasi toko Anda</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Settings Menu */}
            <div className="col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-4 sticky top-6">
                <div className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-emerald-50 text-emerald-700 rounded-lg font-medium">
                    <User className="w-5 h-5" />
                    Profil Toko
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                    <Lock className="w-5 h-5 text-gray-600" />
                    Keamanan
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                    <Bell className="w-5 h-5 text-gray-600" />
                    Notifikasi
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                    <Palette className="w-5 h-5 text-gray-600" />
                    Tampilan
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                    <Globe className="w-5 h-5 text-gray-600" />
                    Bahasa & Region
                  </button>
                </div>
              </div>
            </div>

            {/* Settings Content */}
            <div className="col-span-2 space-y-6">
              {/* Store Profile */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Profil Toko</h3>
                
                {/* Store Logo */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Logo Toko
                  </label>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-3xl">PG</span>
                    </div>
                    <div className="flex-1">
                      <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors mb-2">
                        Upload Logo Baru
                      </button>
                      <p className="text-xs text-gray-600">Format: PNG, JPG. Maksimal 2MB</p>
                    </div>
                  </div>
                </div>

                {/* Store Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Toko <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue="Payung Geulis"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deskripsi Toko
                    </label>
                    <textarea
                      rows={4}
                      defaultValue="Pusat kerajinan payung geulis khas Tasikmalaya dengan berbagai motif batik dan desain custom berkualitas tinggi."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Toko <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          defaultValue="info@payunggeulis.com"
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          defaultValue="0265-123456"
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat Lengkap <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        rows={3}
                        defaultValue="Jl. Pahlawan No. 123, Kecamatan Cihideung, Kota Tasikmalaya, Jawa Barat 46126"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Jam Operasional</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Senin', hours: '08:00 - 17:00', open: true },
                    { day: 'Selasa', hours: '08:00 - 17:00', open: true },
                    { day: 'Rabu', hours: '08:00 - 17:00', open: true },
                    { day: 'Kamis', hours: '08:00 - 17:00', open: true },
                    { day: 'Jumat', hours: '08:00 - 17:00', open: true },
                    { day: 'Sabtu', hours: '08:00 - 14:00', open: true },
                    { day: 'Minggu', hours: 'Tutup', open: false },
                  ].map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <input type="checkbox" defaultChecked={schedule.open} className="w-5 h-5 rounded border-gray-300 text-emerald-600" />
                        <span className="font-medium text-gray-900 w-24">{schedule.day}</span>
                      </div>
                      <div className="text-gray-700">{schedule.hours}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Metode Pembayaran</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Transfer Bank', enabled: true },
                    { name: 'E-Wallet (OVO, GoPay)', enabled: true },
                    { name: 'COD', enabled: true },
                    { name: 'Kartu Kredit/Debit', enabled: false },
                  ].map((method, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg">
                      <span className="text-gray-900 font-medium">{method.name}</span>
                      <label className="relative inline-block w-12 h-6">
                        <input type="checkbox" defaultChecked={method.enabled} className="sr-only peer" />
                        <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:bg-emerald-600 transition-colors"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end gap-4">
                <button 
                  className="px-6 py-3 border-2 border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                  onClick={() => onNavigate('sellerDashboard')}
                >
                  Batal
                </button>
                <button className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg">
                  <Save className="w-5 h-5" />
                  <span>Simpan Perubahan</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
