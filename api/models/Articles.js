/**
 * Article.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    link_article: {
      type: 'string'
    },
    name_article: {
      type: 'string'
    },
    arr_restaurant: {
        collection: 'article',
        via:'articles'
    }
  },

};

