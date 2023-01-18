const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Vodka' },
    { name: 'Gin' },
    { name: 'Tequila' },
    { name: 'Rum' },
    { name: 'Bourbon' },
    { name: 'Mezcal' },
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
      name: 'All Greengit',
      description:
        'Finlandia Vodka, lemon juice, bergamot cordial, lemon bitter, cucumber, rosemary, leaves of basil, Egg white',
      image: 'all-green.jpg',
      category: categories[0]._id,
      price: 29,
      quantity: 1
    },
    {
      name: 'Clover Club',
      category: categories[1]._id,
      description:
        'Gin, fresh lemon juice, simple syrup, egg white, raspberries Garnish: pink rose',
      image: 'clover-club.jpg',
      price: 19,
      quantity: 1
    },
    {
      name: 'In My heart',
      category: categories[1]._id,
      description:
        'Four Pillars Bloody Shiraz Gin, Fresh Lemon Juice, Hibiscus Syrup,Hibiscus Vanilla Ginger Brew',
      image: '/images/in-my-heart.jpg',
      price: 29,
      quantity: 1
    },
    {
      name: 'Glacier Sour',
      category: categories[1]._id,
      description:
        'Gin, Supasawa,⁣ simple syrup⁣, pine liqueur,⁣ dash woodland bitters,⁣ Electric Sky Spirulina powder⁣',
      image: '/images/glacier-sour.jpg',
      price: 29,
      quantity: 1
    },

    {
      name: 'Butterfly Pea',
      category: categories[2]._id,
      description:
        'butterfly pea tequila, Top with grapefruit soda, lime,',
      image: '/images/butterfly-pea-paloma.jpg',
      price: 24,
      quantity: 1
    },
    {
      name: 'Physalis Rose margarita',
      category: categories[2]._id,
      description:
        ' tequila blanco, lime juice syrup, triple sec, physalis berries, Rose Flower',
      image: '/images/spicy-physalis-&-rose-margarita',
      price: 30,
      quantity: 1
    },
    {
      name: 'Monito',
      category: categories[3]._id,
      description:
        'The Real McCoy 3yr old Rum, Lime Juice, Simple Syrup, Blue Curacao, Mint Leaves, Soda Water',
      image: '/images/monito.jpg',
      price: 29,
      quantity: 1
    },
    {
      name: 'Bourbon Swizzle',
      category: categories[4]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: '/images/barrell-proof-bourbon-swizzle.jpg',
      price: 29,
      quantity: 20
    },
    {
      name: 'Smoke',
      category: categories[5]._id,
      description:
        'Mezcal, Pisco, fresh lime juice, simple syrup, Egg white, cucumber slice',
      image: '/images/smoke.jpg',
      price: 19,
      quantity: 1
    },
    {
      name: 'Grasshopper',
      category: categories[5]._id,
      description:
        '▪️Del Maguey Vida Mezcal,Amaro Branca Menta, AbsintheTempus Fugit White Creme De Menthe, Heavy Cream, Dark Chocolate & Mint Sprig Garnish',
      image: '/images/grasshopper.jpg',
      price: 29,
      quantity: 1
    },
    {
      name: 'fresh pear',
      description:
        ' Fresh Pear Juice, Lime Juice, Rose Water, Orange Bitters',
      image: '/images/fresh-pear.jpg',
      category: categories[6]._id,
      price: 19,
      quantity: 1
    },
    {
      name: 'Mind traveller',
      category: categories[7]._id,
      description: 'Yuzu Liqueur, Campari, Lemon Juice, Angostura Bitters, Aquafaba',
      image: '/images/mind-traveller.jpg',
      price: 19,
      quantity: 1
    },


  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'John',
    lastName: 'Smith',
    email: 'johns@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janed@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
