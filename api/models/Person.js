/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {   
    name: {
      type: "string"
    },
    
    age: {
      type: "number"
    },
    
    worksFor: {
      collection: 'User',
      via: 'supervises'
    },

    birthDate: {
      type: 'ref',
      columnType: 'datetime'
   },

  },

  getInvalidIdMsg: function (opts) {
    
    // if (typeof opts.id === "undefined" || isNaN(parseInt(opts.id)))
    //   return "Person id not specified or with incorrect type.";
    
    return null;        // falsy
}   
};

