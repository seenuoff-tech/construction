'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Search, X } from 'lucide-react';
import { getApartments } from '@/lib/apartments';

export default function AdminApartmentsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  useEffect(() => {
    // In a real app, this would be an API call
    // For this demo, we'll fetch via a server action or just use initial data if passed, 
    // but we can't call getApartments directly in a client component easily without an API route.
    // So we'll fetch via an API route. Let's create one.
    fetch('/api/admin/apartments')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(console.error);
  }, []);

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    
    // Optimistic update for demo
    if (editingItem) {
      setItems(items.map(item => item.slug === editingItem.slug ? { ...item, ...data } : item));
    } else {
      setItems([{ ...data, slug: data.name.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-') }, ...items]);
    }
    
    setIsModalOpen(false);
    setEditingItem(null);
    alert(`Successfully ${editingItem ? 'updated' : 'added'} property! (Demo Mode)`);
  };

  const handleDelete = (slug: string) => {
    if (confirm('Are you sure you want to delete this property?')) {
      setItems(items.filter(item => item.slug !== slug));
      alert('Property deleted! (Demo Mode)');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Manage Apartments</h1>
        <button 
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
          className="bg-[#142B6D] hover:bg-[#0f2052] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add New
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search apartments..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#142B6D] focus:border-[#142B6D]"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
                <th className="px-6 py-4 font-medium">Property Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Location</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Approvals</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredItems.map((item) => (
                <tr key={item.slug} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium capitalize
                      ${item.category === 'new-launch' ? 'bg-red-100 text-red-700' : 
                        item.category === 'ready-to-move' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}
                    `}>
                      {item.category?.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{item.location}</td>
                  <td className="px-6 py-4 text-gray-500">{item.type}</td>
                  <td className="px-6 py-4 text-gray-500">{item.approvals}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => { setEditingItem(item); setIsModalOpen(true); }}
                      className="text-[#142B6D] hover:bg-blue-50 p-2 rounded-lg transition-colors mr-2"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(item.slug)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredItems.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No properties found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-gray-900">
                {editingItem ? 'Edit Apartment' : 'Add New Apartment'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Name</label>
                  <input name="name" defaultValue={editingItem?.name} required className="w-full px-4 py-2 border rounded-lg focus:ring-[#142B6D] focus:border-[#142B6D] text-gray-900 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select name="category" defaultValue={editingItem?.category || 'ongoing'} className="w-full px-4 py-2 border rounded-lg focus:ring-[#142B6D] focus:border-[#142B6D] text-gray-900 bg-white">
                    <option value="ongoing" className="text-gray-900">Ongoing</option>
                    <option value="new-launch" className="text-gray-900">New Launch</option>
                    <option value="ready-to-move" className="text-gray-900">Ready to Move</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input name="location" defaultValue={editingItem?.location} required className="w-full px-4 py-2 border rounded-lg focus:ring-[#142B6D] focus:border-[#142B6D] text-gray-900 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type (BHK)</label>
                  <input name="type" defaultValue={editingItem?.type} placeholder="e.g. 2, 3" className="w-full px-4 py-2 border rounded-lg focus:ring-[#142B6D] focus:border-[#142B6D] text-gray-900 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Size Range (Sq.ft)</label>
                  <input name="sizeRange" defaultValue={editingItem?.sizeRange} placeholder="e.g. 1000 - 1500" className="w-full px-4 py-2 border rounded-lg focus:ring-[#142B6D] focus:border-[#142B6D] text-gray-900 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Approvals</label>
                  <input name="approvals" defaultValue={editingItem?.approvals} placeholder="e.g. RERA, CMDA" className="w-full px-4 py-2 border rounded-lg focus:ring-[#142B6D] focus:border-[#142B6D] text-gray-900 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Handover Date</label>
                  <input name="handOverDate" defaultValue={editingItem?.handOverDate} className="w-full px-4 py-2 border rounded-lg focus:ring-[#142B6D] focus:border-[#142B6D] text-gray-900 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Launch Date</label>
                  <input name="launchDate" defaultValue={editingItem?.launchDate} placeholder="e.g. PRELAUNCH" className="w-full px-4 py-2 border rounded-lg focus:ring-[#142B6D] focus:border-[#142B6D] text-gray-900 bg-white" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Images</label>
                  <input type="file" name="images" multiple accept="image/*" className="w-full px-4 py-2 border rounded-lg focus:ring-[#142B6D] focus:border-[#142B6D] text-gray-900 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#142B6D]/10 file:text-[#142B6D] hover:file:bg-[#142B6D]/20" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">About Text</label>
                <textarea name="aboutText" defaultValue={editingItem?.aboutText} rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-[#142B6D] focus:border-[#142B6D] text-gray-900 bg-white"></textarea>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-6 py-2 bg-[#142B6D] text-white hover:bg-[#0f2052] rounded-lg transition-colors">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
