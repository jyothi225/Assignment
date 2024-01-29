// collections.js
Users = new Mongo.Collection('users');
Transactions = new Mongo.Collection('transactions');

// Define schema for Users collection
Users.attachSchema(new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    unique: true
  },
  roles: {
    type: [String],
    allowedValues: ['admin', 'borrower', 'lender'],
    optional: true
  }
}));

// Define schema for Transactions collection
Transactions.attachSchema(new SimpleSchema({
  userId: {
    type: String
  },
  amount: {
    type: Number
  },
  status: {
    type: String,
    allowedValues: ['pending', 'approved', 'paid'],
    defaultValue: 'pending'
  }
}));
