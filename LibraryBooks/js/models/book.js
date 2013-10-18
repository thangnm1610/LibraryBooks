var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'image/book.jpg',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'Unknow'
    },
    parse: function( response ) {
        response.id = response._id;
        return response;
    }
});