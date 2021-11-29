const faker = require('faker');

const db = require('../config/connection');
const { Job, User } = require('../models');

db.once('open', async () => {
  await Job.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create thoughts
  let createdJobs = [];
//   for (let i = 0; i < 20; i += 1) {
//     const jobtitle = `software Engineer` +`Level` +[i];
//     const description = faker.lorem.words(Math.round(Math.random() * 30) + 1);
//     const company = `Test` + faker.lorem.words(Math.round(Math.random() * 30) + 1);
//     const requirements = `my requirements` + faker.lorem.words(Math.round(Math.random() * 30) + 1);
//     const roletype = `Full Time`;
//     const salary =  Math.round(Math.random() * 10) + 1 * 100000 ;

//     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//     const { username, _id: userId } = createdUsers.ops[randomUserIndex];

//     const createdJob = await Job.create({ jobtitle, username, description, company, requirements, roletype, salary});

//     const updatedUser = await User.updateOne(
//       { _id: userId },
//       { $push: { jobs: { jobtitle, username , description, company, salary, requirements, roletype} } },
//       // { runValidators: true }
//     );

//     createdJobs.push(createdJob);
//   }
//  console.log('created jobs', createdJobs);
//   console.log('all done!');
//   process.exit(0);
// });
for (let i = 0; i < 100; i += 1) {
  const jobtitle = faker.name.jobTitle();
  const description = faker.name.jobDescriptor();
  const company = faker.company.companyName();
  const requirements = `my requirements` + faker.random.words();
  const roletype = faker.random.arrayElement(['Full Time','Part Time','Seasonal/Temp','Contract']);
  const salary =  Math.round(Math.random() * 10) + 1 * 100000 ;

  const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  const { username, _id: userId } = createdUsers.ops[randomUserIndex];

  const createdJob = await Job.create({ jobtitle, username, description, company, requirements, roletype, salary});

  const updatedUser = await User.updateOne(
    { _id: userId },
    { $push: { jobs: { jobtitle, username , description, company, salary, requirements, roletype} } },
    // { runValidators: true }
  );

  createdJobs.push(createdJob);
}
console.log('created jobs', createdJobs);
console.log('all done!');
process.exit(0);
});
