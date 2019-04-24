
//OBJECTS BACKBONE
ObjectModel = Backbone.Model.extend({

    exportToJSON: function () {
        var cubeJSON = {};
        cubeJSON.name = this.get("name");
        cubeJSON.uuid = this.get("uuid");
        cubeJSON.posx = this.get("posx");
        cubeJSON.posx = this.get("posy");
        cubeJSON.posx = this.get("posz");
        cubeJSON.posx = this.get("scalex");
        cubeJSON.posx = this.get("scaley");
        cubeJSON.posx = this.get("scalez");
        newDataJSON.portals.push(cubeJSON);
        console.log("Object Exported");
        return cubeJSON;
    },

    initialize : function () {


        console.log("model created");

    }});

ObjectsCollection = Backbone.Collection.extend({

    model: ObjectModel,


});

ObjectView = Backbone.View.extend({
    initialize: function(){
        this.model.bind('change', this.render.bind(this));
    },

    render: function(){

        this.$el.html("uuid : " + this.model.get("uuid") + " =====    "
            + "Name : " + this.model.get("name")  + "   =====        "
            + "Position : " + JSON.stringify(this.model.get("position")) + "   ======    "
            + "Rotation : " + JSON.stringify(this.model.get("rotation"))) ;
        this.$el.attr("data-uuid", this.model.get("uuid"));
        return this;


    }
});

ObjectsView = Backbone.View.extend({

    events: {

        'click .cube': 'onCubeClick'

    },
    onCubeClick: (event) => {
        console.log(event);
    },
    render: function(){


    }


});











//SphereBackbone

PanoramaModel = Backbone.Model.extend({
//exportToJSON

    exportToJSON: function () {
        var panoJSON = {};
        panoJSON.name = this.get("name");
        panoJSON.uuid = this.get("uuid");
        panoJSON.highres = this.get("highres");
        panoJSON.lowres = this.get("lowres");
        newDataJSON.panoramas.push(panoJSON);
        console.log("PanoExported");
        return panoJSON;
    },


    initialize : function () {

        console.log("panorama generated");

    }});

PanoramasCollection = Backbone.Collection.extend({

    model: PanoramaModel,


});

PanoramaView = Backbone.View.extend({
    initialize: function(){

    },

    render: function(){

        this.$el.html("Name : " + this.model.get("name") +"<br>") ;
        this.$el.append("UUID : " + this.model.get("uuid")) ;
        this.$el.append("<hr>") ;
        this.$el.attr("data-uuid", this.model.get("uuid")) ;
        return this;


    }
});

PanoramasView = Backbone.View.extend({

    render: function(){



    }


});

