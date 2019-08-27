var width=300,
    height=300,
    padding=30;

d3.select('.button_Dropdown')
    .text('work site')

function getUsersBy(parameter){
return USERS__d3.find(el=>el.groupBy===parameter);
}

let {users:usersByWorkSite}=getUsersBy('work site');
let workSites=usersByWorkSite.map(el=>el.site)

let {users:usersByDepartment}=getUsersBy('department');
let departments=usersByDepartment.map(el=>el.Department)

let {users:usersByRole}=getUsersBy('role');
let roles=usersByRole.map(el=>el.role)



        
function reRender(groupBy, usersList){
    let key = Object.keys(usersList[0])[0]
    
d3.select(".pieChart").selectAll('svg').remove();
var svg=d3.select('.pieChart')
            .append('svg')
                .attr("width",width)
                .attr("height",height)
            .append('g')
                .attr('transform',`translate(${width/2},${height/2})`)
                .classed("pieChart", true);


var colorScale = d3.scaleOrdinal()
    .domain(groupBy)
    .range(d3.schemeCategory20);
    
var arcs = d3.pie()
                .sort(null)
                .value(d=>d.numberOfUsers)
                (usersList)

var path = d3.arc()
                .outerRadius(width/2-20)
                .innerRadius(0)
                .cornerRadius(10);

svg
    .selectAll('.arc')
    .data(arcs)
    .enter()
    .append('path')
    .classed('arc',true)
    .attr("fill",d=>colorScale(d.data[key]))
    .attr("opacity",0.8)
    .attr("stroke",'black')
    .transition()
    .delay(function(d,i) {
        return i * 500; })
    .duration(500)
    .attrTween('d', d=>{
        var i = d3.interpolate(d.startAngle+0.01, d.endAngle);
        return t=> {
            d.endAngle = i(t); 
            return path(d)
            }
        });

        
        svg
        .selectAll('.arc')
        .append("text")
    .attr("transform", function (d) {
    return "translate(" + path.centroid(d) + ")";
})
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text(function (d) {
    return d.data.site ;
});

}

reRender(workSites,usersByWorkSite);

