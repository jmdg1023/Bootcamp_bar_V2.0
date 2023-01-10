const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Vodka' },
    { name: 'Gin' },
    { name: 'Tequila' },
    { name: 'Rum' },
    { name: 'Wine' },
    { name: 'Bourbon' },
    { name: 'Mescal' },
    { name: 'Mocktail' },
    { name: 'Yuzu' },
   
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Vampires Attic',
      description:
        'Black Vodka, Lemon Juice, Grape Juice, Club Soda, Dry Ice, Blackberries Garnish',
      image: 'vampires-attic.jpg',
      category: categories[0]._id,
      price: 29,
      quantity: 1
    },
    {
      name: 'All Green',
      description:
        'Finlandia Vodka, lemon juice, bergamot cordial, lemon bitter, cucumber, rosemary, leaves of basil, Egg white',
      image: 'all-green.jpg',
      category: categories[0]._id,
      price: 29,
      quantity: 1
    },
    {
      name: 'fresh pear',
      description:
        ' Fresh Pear Juice, Lime Juice, Rose Water, Orange Bitters',
      image: 'fresh-pear.jpg',
      category: categories[7]._id,
      price: 19,
      quantity: 1
    },
    {
      name: 'Bourbon Swizzle',
      category: categories[5]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'barrell-proof-bourbon-swizzle.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Clover Club',
      category: categories[1]._id,
      description:
        'Gin, fresh lemon juice, simple syrup, egg white, raspberries Garnish: pink rose',
      image: 'clover-club.jpg',
      price: 3.99,
      quantity: 1
    },
    {
      name: 'Butterfly Pea',
      category: categories[2]._id,
      description:
        'butterfly pea tequila, Top with grapefruit soda, lime,',
      image: 'butterfly-pea-paloma.jpg',
      price: 14.99,
      quantity: 1
    },
    {
      name: 'Physalis Rose margarita',
      category: categories[2]._id,
      description:
        ' tequila blanco, lime juice syrup, triple sec, physalis berries, Rose Flower',
      image: 'spicy-physalis-&-rose-margarita',
      price: 399.99,
      quantity: 1
    },
    {
      name: 'Smoke',
      category: categories[6]._id,
      description:
        'Mezcal, Pisco, fresh lime juice, simple syrup, Egg white, cucumber slice',
      image: 'smoke.jpg',
      price: 199.99,
      quantity: 1
    },
    {
      name: 'Monito',
      category: categories[3]._id,
      description:
        'The Real McCoy 3yr old Rum, Lime Juice, Simple Syrup, Blue Curacao, Mint Leaves, Soda Water',
      image: 'monito.jpg',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Mind traveller',
      category: categories[9]._id,
      description: 'Yuzu Liqueur, Campari, Lemon Juice, Angostura Bitters, Aquafaba',
      image: 'mind-traveller.jpg',
      price: 1.99,
      quantity: 1
    },
    {
      name: 'In My heart',
      category: categories[1]._id,
      description:
        'Four Pillars Bloody Shiraz Gin, Fresh Lemon Juice, Hibiscus Syrup,Hibiscus Vanilla Ginger Brew',
      image: 'in-my-heart.jpg',
      price: 2.99,
      quantity: 1
    },
    {
      name: 'Glacier Sour',
      category: categories[1]._id,
      description:
        'Gin, Supasawa,⁣ simple syrup⁣, pine liqueur,⁣ dash woodland bitters,⁣ Electric Sky Spirulina powder⁣',
      image: 'glacier-sour.jpg',
      price: 7.99,
      quantity: 1
    },
    {
      name: 'Grasshopper',
      category: categories[7]._id,
      description:
        '▪️Del Maguey Vida Mezcal,Amaro Branca Menta, AbsintheTempus Fugit White Creme De Menthe, Heavy Cream, Dark Chocolate & Mint Sprig Garnish',
      image: 'grasshopper.jpg',
      price: 9.99,
      quantity: 1
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
