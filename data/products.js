export const products = [
  {
    id: 1,
    name: "48V Extended Range Battery",
    price: 299.99,
    category: "batteries",
    description: "Extended range battery pack for Freego X2 Pro. 50+ mile range per charge.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=400&fit=crop",
    specs: {
      voltage: "48V",
      capacity: "20Ah",
      range: "50+ miles",
      weight: "6.5 lbs"
    }
  },
  {
    id: 2,
    name: "1000W Rear Hub Motor",
    price: 549.99,
    category: "motors",
    description: "High-performance 1000W motor for increased acceleration and hill climbing power.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
    specs: {
      power: "1000W",
      type: "Rear Hub",
      torque: "80 Nm",
      maxSpeed: "45 mph"
    }
  },
  {
    id: 3,
    name: "All-Terrain Tires (Set)",
    price: 189.99,
    category: "tires",
    description: "Premium all-terrain tires with enhanced grip and puncture resistance.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=400&fit=crop",
    specs: {
      size: "20x3.0",
      type: "All-Terrain",
      punctureResistance: "Enhanced",
      treadPattern: "Aggressive"
    }
  },
  {
    id: 4,
    name: "Hydraulic Disc Brake Set",
    price: 159.99,
    category: "brakes",
    description: "Professional-grade hydraulic disc brakes with excellent stopping power.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=400&h=400&fit=crop",
    specs: {
      type: "Hydraulic Disc",
      size: "180mm",
      power: "High",
      maintenance: "Low"
    }
  },
  {
    id: 5,
    name: "LED Smart Headlight",
    price: 79.99,
    category: "lights",
    description: "Intelligent LED headlight with adaptive brightness. Charges via USB-C.",
    image: "https://images.unsplash.com/photo-1578359381514-2c373ae80ecf?w=400&h=400&fit=crop",
    specs: {
      brightness: "800 Lumens",
      battery: "USB-C Rechargeable",
      runtime: "8 hours",
      modes: "5"
    }
  },
  {
    id: 6,
    name: "LED Tail Light",
    price: 39.99,
    category: "lights",
    description: "Ultra-bright rear LED light for enhanced visibility and safety.",
    image: "https://images.unsplash.com/photo-1578359381514-2c373ae80ecf?w=400&h=400&fit=crop",
    specs: {
      brightness: "200 Lumens",
      battery: "USB-C Rechargeable",
      runtime: "10 hours",
      modes: "3"
    }
  },
  {
    id: 7,
    name: "Suspension Fork Upgrade",
    price: 399.99,
    category: "suspension",
    description: "Air suspension fork with 100mm travel for smooth off-road performance.",
    image: "https://images.unsplash.com/photo-1576435728678-68d191286c72?w=400&h=400&fit=crop",
    specs: {
      travel: "100mm",
      type: "Air Suspension",
      adjustable: "Yes",
      weight: "1.8 lbs"
    }
  },
  {
    id: 8,
    name: "Digital Display Controller",
    price: 149.99,
    category: "electronics",
    description: "Color LCD display with real-time data monitoring and customizable settings.",
    image: "https://images.unsplash.com/photo-1609042231298-612fd99d27e9?w=400&h=400&fit=crop",
    specs: {
      screen: "Color LCD 3.5\"",
      data: "Speed, Distance, Battery, Temp",
      connection: "Wireless",
      waterproof: "IP65"
    }
  }
]

export const categories = [
  { id: 'batteries', name: 'Batteries', icon: '🔋' },
  { id: 'motors', name: 'Motors', icon: '⚡' },
  { id: 'tires', name: 'Tires', icon: '🛞' },
  { id: 'brakes', name: 'Brakes', icon: '🛑' },
  { id: 'lights', name: 'Lights', icon: '💡' },
  { id: 'suspension', name: 'Suspension', icon: '🏔️' },
  { id: 'electronics', name: 'Electronics', icon: '📱' }
]
