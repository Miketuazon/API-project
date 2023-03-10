'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
       ownerId: 1,
       address: '1st random address',
       city: 'DemoCity1',
       state: 'FakeState1',
       country: 'FakeCountry1',
       lat: 29.90242,
       lng: -151.05529,
       name: 'FakeHome1',
       description: 'Fake Description 1',
       price: 9000.00,
      },
      {
        ownerId: 2,
        address: '2nd random address',
        city: 'DemoCity2',
        state: 'FakeState2',
        country: 'FakeCountry2',
        lat: -50.13013,
        lng: 81.57242,
        name: 'FakeHome2',
        description: 'Fake Description 2',
        price: 100.00,
       },
       {
        ownerId: 3,
        address: '3rd random address',
        city: 'DemoCity3',
        state: 'FakeState3',
        country: 'FakeCountry3',
        lat: -50.13013,
        lng: 81.57242,
        name: 'FakeHome3',
        description: 'Fake Description 3',
        price: 1000.00,
       },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      id: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
