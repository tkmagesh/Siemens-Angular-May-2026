import { Injectable, signal } from "@angular/core";
import { Product } from "../models/Product";
import { IProductsService } from "./Iproducts-services";

@Injectable({
    providedIn : 'root'
})
export class ProductsService /*implements IProductsService*/ {
    products = signal<Product[]>([
        // Electronics & Gadgets
        { id: "prod-001", name: "QuantumX Wireless Earbuds", category: "Electronics" },
        { id: "prod-002", name: "SonicWave Bluetooth Speaker", category: "Electronics" },
        { id: "prod-003", name: "ApexCharge Power Bank", category: "Electronics" },
        { id: "prod-004", name: "TitanView 4K Monitor", category: "Electronics" },
        { id: "prod-005", name: "AeroGlide Wireless Mouse", category: "Electronics" },
        { id: "prod-006", name: "MatrixType Mechanical Keyboard", category: "Electronics" },
        { id: "prod-007", name: "NovaStream HD Webcam", category: "Electronics" },
        { id: "prod-008", name: "HelixHub USB-C Adapter", category: "Electronics" },
        { id: "prod-009", name: "VoltPulse Smartwatch", category: "Electronics" },
        { id: "prod-010", name: "EchoLens VR Headset", category: "Electronics" },
        { id: "prod-011", name: "StellarPad Graphic Tablet", category: "Electronics" },
        { id: "prod-012", name: "PixelDrive 1TB SSD", category: "Electronics" },
        { id: "prod-013", name: "GigaRoute Wi-Fi 6 Router", category: "Electronics" },
        { id: "prod-014", name: "ZenCharge Desktop Stand", category: "Electronics" },
        { id: "prod-015", name: "AuraGlow LED Strip Light", category: "Electronics" },
        { id: "prod-016", name: "CortexLink Smart Plug", category: "Electronics" },
        { id: "prod-017", name: "VividCast Streaming Stick", category: "Electronics" },
        { id: "prod-018", name: "TerraSound Noise-Canceling Headphones", category: "Electronics" },
        { id: "prod-019", name: "AlphaCase Shockproof Phone Cover", category: "Electronics" },
        { id: "prod-020", name: "SolarMax Portable Solar Charger", category: "Electronics" },

        // Home & Kitchen
        { id: "prod-021", name: "AeroBlend Countertop Blender", category: "Home & Kitchen" },
        { id: "prod-022", name: "ThermoBrew Espresso Machine", category: "Home & Kitchen" },
        { id: "prod-023", name: "PureDrip Ceramic Water Filter", category: "Home & Kitchen" },
        { id: "prod-024", name: "CrispFry Air Fryer XL", category: "Home & Kitchen" },
        { id: "prod-025", name: "ChefSlice Damascus Chef Knife", category: "Home & Kitchen" },
        { id: "prod-026", name: "EcoKeep Silicone Food Bags", category: "Home & Kitchen" },
        { id: "prod-027", name: "EverWarm Smart Mug", category: "Home & Kitchen" },
        { id: "prod-028", name: "HydroFlask Insulated Tumbler", category: "Home & Kitchen" },
        { id: "prod-029", name: "SpiceNest Bamboo Rack", category: "Home & Kitchen" },
        { id: "prod-030", name: "FreshSeal Vacuum Sealer", category: "Home & Kitchen" },
        { id: "prod-031", name: "ZestGrind Electric Pepper Mill", category: "Home & Kitchen" },
        { id: "prod-032", name: "BakeForm Silicone Baking Mats", category: "Home & Kitchen" },
        { id: "prod-033", name: "SipStream Glass Straw Set", category: "Home & Kitchen" },
        { id: "prod-034", name: "CoolChill Ice Cube Molds", category: "Home & Kitchen" },
        { id: "prod-035", name: "CleanSweep Cordless Stick Vacuum", category: "Home & Kitchen" },
        { id: "prod-036", name: "PurAir HEPA Room Purifier", category: "Home & Kitchen" },
        { id: "prod-037", name: "BrightBeam Desk Lamp", category: "Home & Kitchen" },
        { id: "prod-038", name: "FlexiMop Microfiber Floor Mop", category: "Home & Kitchen" },
        { id: "prod-039", name: "ComfyRest Ergonomic Seat Cushion", category: "Home & Kitchen" },
        { id: "prod-040", name: "ScentScape Essential Oil Diffuser", category: "Home & Kitchen" },

        // Apparel & Fashion
        { id: "prod-041", name: "AeroWeave Breathable Running Shoes", category: "Apparel & Fashion" },
        { id: "prod-042", name: "TerraTrek Waterproof Hiking Boots", category: "Apparel & Fashion" },
        { id: "prod-043", name: "FlexFit Seamless Gym Leggings", category: "Apparel & Fashion" },
        { id: "prod-044", name: "CloudWalk Cushioned Slippers", category: "Apparel & Fashion" },
        { id: "prod-045", name: "SolShield Polarized Sunglasses", category: "Apparel & Fashion" },
        { id: "prod-046", name: "UrbanPack Anti-Theft Backpack", category: "Apparel & Fashion" },
        { id: "prod-047", name: "MetroSlim Minimalist Wallet", category: "Apparel & Fashion" },
        { id: "prod-048", name: "AllWeather Packable Rain Jacket", category: "Apparel & Fashion" },
        { id: "prod-049", name: "BreezeKnit Casual Loafers", category: "Apparel & Fashion" },
        { id: "prod-050", name: "ToughKnit Crew Socks", category: "Apparel & Fashion" },
        { id: "prod-051", name: "ActiveDry Moisture-Wicking Tee", category: "Apparel & Fashion" },
        { id: "prod-052", name: "ThermoLoft Puffer Vest", category: "Apparel & Fashion" },
        { id: "prod-053", name: "ChronoClassic Leather Watch", category: "Apparel & Fashion" },
        { id: "prod-054", name: "SilkNite Sleep Mask", category: "Apparel & Fashion" },
        { id: "prod-055", name: "EcoTote Canvas Shopping Bag", category: "Apparel & Fashion" },
        { id: "prod-056", name: "DenimFlex Stretch Jeans", category: "Apparel & Fashion" },
        { id: "prod-057", name: "HydroShield Umbrella", category: "Apparel & Fashion" },
        { id: "prod-058", name: "AeroCap Mesh Running Hat", category: "Apparel & Fashion" },
        { id: "prod-059", name: "ComfyLounge Fleece Sweatshirt", category: "Apparel & Fashion" },
        { id: "prod-060", name: "SmartTouch Winter Gloves", category: "Apparel & Fashion" },

        // Beauty & Personal Care
        { id: "prod-061", name: "HydraGlow Hyaluronic Serum", category: "Beauty & Personal Care" },
        { id: "prod-062", name: "PureBotanics Cleansing Oil", category: "Beauty & Personal Care" },
        { id: "prod-063", name: "GlowDew Vitamin C Moisturizer", category: "Beauty & Personal Care" },
        { id: "prod-064", name: "ClayPure Detox Face Mask", category: "Beauty & Personal Care" },
        { id: "prod-065", name: "SupaSmooth Exfoliating Scrub", category: "Beauty & Personal Care" },
        { id: "prod-066", name: "SilkTouch Argan Hair Oil", category: "Beauty & Personal Care" },
        { id: "prod-067", name: "VolumeLift Biotin Shampoo", category: "Beauty & Personal Care" },
        { id: "prod-068", name: "MintFresh Charcoal Toothpaste", category: "Beauty & Personal Care" },
        { id: "prod-069", name: "SunBlocker SPF 50 Mineral Sunscreen", category: "Beauty & Personal Care" },
        { id: "prod-070", name: "ScentMist Sandalwood Body Wash", category: "Beauty & Personal Care" },
        { id: "prod-071", name: "DermaRoll Microneedling Roller", category: "Beauty & Personal Care" },
        { id: "prod-072", name: "BrightEye Caffeine Under-Eye Cream", category: "Beauty & Personal Care" },
        { id: "prod-073", name: "NailCure Cuticle Oil", category: "Beauty & Personal Care" },
        { id: "prod-074", name: "CurlDefine Coconut Cream", category: "Beauty & Personal Care" },
        { id: "prod-075", name: "SootheBalm Lavender Body Lotion", category: "Beauty & Personal Care" },
        { id: "prod-076", name: "FreshDrift Aluminum-Free Deodorant", category: "Beauty & Personal Care" },
        { id: "prod-077", name: "SonicGlow Facial Cleansing Brush", category: "Beauty & Personal Care" },
        { id: "prod-078", name: "VelvetLip Tinted Lip Balm", category: "Beauty & Personal Care" },
        { id: "prod-079", name: "ThermaProtect Heat Styling Spray", category: "Beauty & Personal Care" },
        { id: "prod-080", name: "PureQuench Sheet Mask Set", category: "Beauty & Personal Care" },

        // Fitness & Outdoors
        { id: "prod-081", name: "FlexiBand Resistance Loop Set", category: "Fitness & Outdoors" },
        { id: "prod-082", name: "GripMax Eco Yoga Mat", category: "Fitness & Outdoors" },
        { id: "prod-083", name: "PowerWeight Adjustable Dumbbells", category: "Fitness & Outdoors" },
        { id: "prod-084", name: "SpeedSkip Speed Jump Rope", category: "Fitness & Outdoors" },
        { id: "prod-085", name: "CoreRoll Foam Roller", category: "Fitness & Outdoors" },
        { id: "prod-086", name: "HydroTrack Smart Water Bottle", category: "Fitness & Outdoors" },
        { id: "prod-087", name: "TrailBlaze LED Headlamp", category: "Fitness & Outdoors" },
        { id: "prod-088", name: "CampSleep Inflatable Sleeping Pad", category: "Fitness & Outdoors" },
        { id: "prod-089", name: "PackLight Ultra-Light Hammock", category: "Fitness & Outdoors" },
        { id: "prod-090", name: "WildFold Folding Camp Chair", category: "Fitness & Outdoors" },
        { id: "prod-091", name: "FitTrack Body Fat Scale", category: "Fitness & Outdoors" },
        { id: "prod-092", name: "PeakPulse Finger Pulse Oximeter", category: "Fitness & Outdoors" },
        { id: "prod-093", name: "KnotFree Muscle Massage Gun", category: "Fitness & Outdoors" },
        { id: "prod-094", name: "GlideBoard Balance Trainer", category: "Fitness & Outdoors" },
        { id: "prod-095", name: "VeloLock Heavy Duty Bike Lock", category: "Fitness & Outdoors" },
        { id: "prod-096", name: "GlowPebble Pocket Hand Warmer", category: "Fitness & Outdoors" },
        { id: "prod-097", name: "SafeStep Reflective Running Vest", category: "Fitness & Outdoors" },
        { id: "prod-098", name: "BioFuel Plant-Based Protein Powder", category: "Fitness & Outdoors" },
        { id: "prod-099", name: "FocusNutra Nootropic Capsules", category: "Fitness & Outdoors" },
        { id: "prod-100", name: "ZenMint Organic Herbal Tea", category: "Fitness & Outdoors" },

        { id: "prod-101", name: "Pen", category: "Stationary" }
    ])

    categories = this.products().reduce<Set<string>>((s, p) => s.add(p.category), new Set())

    addNew(newProduct : Product){
        newProduct.id = `prod-${this.products().length + 1}`
        this.products.update(list => [...list, newProduct])
    }
}