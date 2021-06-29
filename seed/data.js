import db from '../db/connection.js'
import Product from '../models/product.js'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  // products data that we want inserted into database
  const products = [
    {
      title: 'RGB 120 RAM',
      imgURL:
        'https://g9p9r4s8.rocketcdn.me/wp-content/uploads/2020/12/Corsair-RGB-Ram-1024x525.jpg',
      description:
        'DOMINATOR® PLATINUM RGB 16GB (2 x 8GB) DDR4 DRAM 3000MHz C15 Memory Kit',
      price: '145'
    },
    {
      title: 'Asus gaming motherboard',
      imgURL:
        'https://www.quietpc.com/images/products/asus-z390-f-3d-large.jpg',
      description:
        'The ASUS ROG Strix Z390-F Gaming amps the power delivery and stacks a comprehensive set of cooling options to tame Intel’s latest CPUs. ',
      price: '150'
    },
    {
      title: 'cooler master case',
      imgURL:
        'https://img.joomcdn.net/fea1ff95f8f5b515f883787665e4a7f06ac589e4_1024_1024.jpeg',
      description:
        'Cooler Master MB520 ARGB, MasterBox. Format: Midi-Tower Case, Type: PC, Hardware: Plastic, Steel, Tempered glass. Feeding location: Low, Power Form Factors Supported: ATX. Fans installed ',
      price: '90'
    },
    {
      title: 'RTX 2080',
      imgURL:
        'https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=EV224f1',
      description:
        'Graphics Card - 8GB GDDR6 (15500MHz), NVIDIA GeForce, Boost 1815 MHz, PCI Express x16 3.0, 256Bit, DisplayPort,',
      price: '900'
    },
    {
      title: 'ATX power supply',
      imgURL:
        'https://c1.neweggimages.com/NeweggImage/productimage/AHW7S200608Cr8TX.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '70'
    },
  ]
  await Product.insertMany(products)
  console.log('Created products!')

  // close database connection. done.
  db.close()
}

insertData()
