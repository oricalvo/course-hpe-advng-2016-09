var appModule = angular.module("myApp");

appModule.directive("myGrid", function($http, $q, $parse, $compile, $rootScope) {
    var ddo = {
        terminal: true,
        compile: function(element, attrs) {
            console.log("myGrid.compile");

            var columns = [];
            
            element.find("column").each(function() {
                var column = $(this);

                var title = column.attr("title");
                console.log(title);

                var template = column.html();
                console.log(template);

                var templateFn = $compile(template);

                columns.push({
                    title: title,
                    template: template,
                    templateFn: templateFn,
                });
            });

            element.empty();

            var table = $("<table />");
            element.append(table);

            var thead = $("<thead />");
            table.append(thead);

            var tbody = $("<tbody />");
            table.append(tbody);

            var tr = $("<tr />");
            thead.append(tr);

            columns.forEach(function(column) {
                var td = $("<td />");
                tr.append(td);
                td.text(column.title);
            });

            var itemsExpr = attrs.items;
            //var itemsExprParseFn = $parse(itemsExpr);

            return function link(scope, element, attrs) {
                console.log("myGrid.link");

                var tbody = element.find("tbody");
                var scopes = [];

                scope.$watch(itemsExpr, function(items) {
                    console.log(items);

                    scopes.forEach(function(scope) {
                        scope.$destroy();
                    });
                    scopes = [];

                    tbody.empty();

                    items.forEach(function(item) {
                        var tr = $("<tr />");
                        tbody.append(tr);

                        var itemScope = scope.$new();
                        scopes.push(itemScope);
                        itemScope[attrs.item] = item;

                        columns.forEach(function(column) {
                            var td = $("<td />");
                            tr.append(td);

                            column.templateFn(itemScope, function(clone) {
                                td.append(clone);
                            });
                        });
                    });
                });

                //var items = itemsExprParseFn(scope);
            }
        }
    };
    
    return ddo;
});