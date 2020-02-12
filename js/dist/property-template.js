(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['property'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"details\">\n    <h3>Details</h3>\n    <ul>\n        <li>neighbourhood - "
    + alias4(((helper = (helper = lookupProperty(helpers,"neighbourhood") || (depth0 != null ? lookupProperty(depth0,"neighbourhood") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"neighbourhood","hash":{},"data":data,"loc":{"start":{"line":4,"column":28},"end":{"line":4,"column":45}}}) : helper)))
    + "</li>\n        <!-- use helper to format as currency -->\n        <li>Amount - "
    + alias4((lookupProperty(helpers,"currency")||(depth0 && lookupProperty(depth0,"currency"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"total_asmt") : depth0),{"name":"currency","hash":{},"data":data,"loc":{"start":{"line":6,"column":21},"end":{"line":6,"column":46}}}))
    + "</li>\n        <li>Garage - "
    + alias4(((helper = (helper = lookupProperty(helpers,"garage") || (depth0 != null ? lookupProperty(depth0,"garage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"garage","hash":{},"data":data,"loc":{"start":{"line":7,"column":21},"end":{"line":7,"column":31}}}) : helper)))
    + "</li>\n        <li>Latitude - "
    + alias4(((helper = (helper = lookupProperty(helpers,"latitude") || (depth0 != null ? lookupProperty(depth0,"latitude") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latitude","hash":{},"data":data,"loc":{"start":{"line":8,"column":23},"end":{"line":8,"column":35}}}) : helper)))
    + "</li>\n        <li>Longitude - "
    + alias4(((helper = (helper = lookupProperty(helpers,"longitude") || (depth0 != null ? lookupProperty(depth0,"longitude") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"longitude","hash":{},"data":data,"loc":{"start":{"line":9,"column":24},"end":{"line":9,"column":37}}}) : helper)))
    + "</li>\n    </ul>\n</section>";
},"useData":true});
})();