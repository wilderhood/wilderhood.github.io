!function(){function a(a){return a.replace(/\w\S*/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()})}function e(a){if(a)for(var e=0;e<a.length;++e)a[e]=a[e].toLowerCase()}function t(t){for(var n=0;n<t.length;++n){var i=t[n];i.text=a(i.text),e(i.keywords)}}function n(){return location.protocol+"//"+location.hostname+(location.port&&":"+location.port)+"/"}function i(a){for(var e=a.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),n=a[e];a[e]=a[t],a[t]=n}return a}function r(a){var e=document.createElement("div");return e.innerHTML=a,e}function T(a,e,t){t?a.image=n()+"img/seo/"+a.image:a.image=p+a.image;var i=e.render(a);return r(i)}function o(a,e){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];currentMonth=t[e.getMonth()];for(var n=[],i=0;i<a.length;++i){var r=a[i],T=r.months;(!T||T.indexOf(currentMonth)>-1)&&n.push(r)}return n}function A(a,e){return a.keywords?a.keywords.indexOf(e)>-1:!1}function O(a,t){function n(a,e,t){for(var n=a.link,i=0;i<t.length;++i){var r=t[i];if(r.data.link==n)return void(r.priority+=e)}t.push({data:a,priority:e})}function r(a){for(var e=[],t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,r=0;r<a.length;++r){var T=a[r],o=T.priority;t>o&&(t=o),o>n&&(n=o),e[o]||(e[o]=[]),e[o].push(T.data)}for(var A=[],r=n;r>=t;--r){var a=e[r];a&&(A=A.concat(i(a)))}return A}function T(a,e){for(var t=[],n=0;n<a.length;++n){for(var i=!1,r=a[n],T=r.link,o=0;o<e.length;++o)if(e[o].data.link==T){i=!0;break}i||t.push(r)}return t}e(t);for(var o=[],O=t.length,s=0;O>s;++s)for(var h=t[s],g=0;g<a.length;++g){var p=a[g];A(p,h)&&n(p,O-s,o)}var d=r(o),E=d.slice(0,R);if(E.length<R){var u=T(a,o);E=E.concat(i(u).slice(0,R-E.length))}return E}function s(){t(d),t(h);var a=window.seoKeywords||[],e=new Date,n=$("#seoHolder");if(n.length){var A=$("#seoTemplate").html(),s=Hogan.compile(A),p=i(d).slice(0,R),E=O(o(h,e),a),u=document.createDocumentFragment();if(p.length>0){$(u).append(r("<div class='w-seo-sponsored'>SPONSORED</div><hr/>"));for(var I=0;I<p.length;++I){var H=p[I];u.appendChild(T(H,s,!0))}$(u).append(r("<hr style='padding-top:25px'/>"))}else $(u).append(r("<div class='w-seo-sponsored'>RECOMMENDED TRIPS</div><hr/>"));for(var I=0;I<E.length;++I){var H=E[I];H.link=g+H.link,u.appendChild(T(H,s,!1))}n.append(u)}}var R=12,h=[],g="http://www.wilderhood.com/trip/",p="https://az741737.vo.msecnd.net/wilderhood-public/medium/";h.push({link:"EMERALD ISLES - WILDLIFE PHOTOGRAPHY TOUR OF ANDAMAN",image:"Darter/Trip/Andaman/Andaman.jpg",text:"EMERALD ISLES - WILDLIFE PHOTOGRAPHY TOUR OF ANDAMAN",keywords:["Andaman","Birding Destinations","Port Blair","Travel","Exotic"],months:["Jul","Aug","Sep","Oct"]}),h.push({link:"MOUNTAINS AND MONASTERIES - A PHOTOGRAPHY TOUR OF LADAKH",image:"Darter/Trip/Ladakh/Ladakh.jpg",text:"MOUNTAINS AND MONASTERIES - A PHOTOGRAPHY TOUR OF LADAKH",keywords:["Ladakh","Travel Destinations","Landscape Destinations","Leh","Ladakh","Travel","Exotic"],months:["Jul","Aug"]}),h.push({link:"CAMBODIA PHOTOGRAPHY TOUR - TEMPLES OF ANGKOR WAT & BEYOND",image:"Darter/Trip/Cambodia/Cambodia.jpg",text:"CAMBODIA PHOTOGRAPHY TOUR - TEMPLES OF ANGKOR WAT & BEYOND",keywords:["Cambodia","Travel","Landscape Destinations","Exotic"],months:["Jul","Aug","Sep","Oct"]}),h.push({link:"WALK ON THE HILLY SIDE IN BHUTAN",image:"BeyondRoads/Trip/Bhutan/Bhutan.jpg",text:"WALK ON THE HILLY SIDE IN BHUTAN",keywords:["Bhutan","Travel","Landscape Destinations","Exotic"],months:["Jul","Aug","Sep"]}),h.push({link:"BHUTAN TRAVEL ROUTERS TOURS AND TREKS",image:"BeyondRoads/Trip/Bhutan/Bhutan.jpg",text:"BHUTAN TRAVEL ROUTERS TOURS AND TREKS",keywords:["Bhutan","Travel","Landscape Destinations","Exotic"],months:["Jul","Aug","Sep"]}),h.push({link:"CLASSIC MYANMAR - A PHOTOGRAPHY TOUR",image:"Darter/Trip/Myanmar/Myanmar.jpg",text:"CLASSIC MYANMAR - A PHOTOGRAPHY TOUR",keywords:["Myanmar","Travel","Landscape Destinations","Exotic"],months:["Jul","Aug","Sep","Oct"]}),h.push({link:"PHOTOGRAPHY IN NORTH-EAST INDIA AND HORNBILL FESTIVAL",image:"Darter/Trip/Hornbill/Hornbill.jpg",text:"PHOTOGRAPHY IN NORTH-EAST INDIA AND HORNBILL FESTIVAL",keywords:["HORNBILL FESTIVAL","Travel","Landscape Destinations"],months:["Jul","Aug","Sep","Oct","Nov"]}),h.push({link:"FORTS AND DUNES OF RAJASTHAN - A TRAVEL PHOTOGRAPHY TOUR",image:"Darter/Trip/Rajasthan/Rajasthan.jpg",text:"FORTS AND DUNES OF RAJASTHAN - A TRAVEL PHOTOGRAPHY TOUR",keywords:["Travel","Landscape Destinations"],months:["Jul","Aug","Sep","Oct","Nov","Dec"]}),h.push({link:"A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR",image:"Darter/Trip/Ladakh/Ladakh-snow.jpg",text:"A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR",keywords:["Travel","Landscape Destinations"],months:["Jul","Aug","Sep","Oct","Nov","Dec"]}),h.push({link:"A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR",image:"Darter/Trip/Ladakh/Ladakh-snow.jpg",text:"A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR",keywords:["Travel","Landscape Destinations"],months:["Jul","Aug","Sep","Oct","Nov","Dec"]}),h.push({link:"MASAI MARA MIGRATION - SEPT 2015",image:"Sudhir/Trip/Maara/Maara.jpg",text:"MASAI MARA MIGRATION - SEPT 2015",keywords:["Africa","Maara","Great Migration","BigCats"],months:["Jul","Aug","Sep"]}),h.push({link:"MOTHER OF ALL PARKS-SERENGETI",image:"BeyondRoads/Trip/Serengeti/Serengeti.jpg",text:"MOTHER OF ALL PARKS-SERENGETI",keywords:["Africa","Serengeti","Tanzania","Great Migration","BigCats"],months:["Jul","Aug","Sep","Oct","Nov","Dec"]}),h.push({link:"THE PHANTOM AND THE WETLANDS - WILDLIFE PHOTOGRAPHY TOUR",image:"Toehold/Trip/Pantanal/Pantanal.jpg",text:"THE PHANTOM AND THE WETLANDS - WILDLIFE PHOTOGRAPHY TOUR",keywords:["Exotic","Birding Destinations","BigCats"],months:["Jul","Aug","Sep"]}),h.push({link:"GIR - THE LIONS LAST LAIR",image:"BirdWing/Trip/Gir/Gir.jpg",text:"GIR - THE LIONS LAST LAIR",keywords:["Gir","Birding Destinations","BigCats"],months:["Jul","Aug","Sep","Oct","Nov"]}),h.push({link:"WILD WEST - WILDLIFE PHOTOGRAPHY TOUR OF KUTCH",image:"Darter/Trip/Kutch/Kutch.jpg",text:"WILD WEST - WILDLIFE PHOTOGRAPHY TOUR OF KUTCH",keywords:["Gir","Birding Destinations","BigCats"],months:["Jul","Aug","Sep","Oct","Nov","Dec"]}),h.push({link:"OOTY",image:"BeyondRoads/Trip/Ooty/Ooty.jpg",text:"OOTY - Birding trip",keywords:["OOTY","Birding Destinations","Nilgiri"],months:["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb"]}),h.push({link:"RANGANTHITTU-BANDIPUR",image:"BeyondRoads/Trip/Ranganathittu/Ranganathittu.jpg",text:"RANGANTHITTU-BANDIPUR",keywords:["Tiger","Bandipur","Kabini","Ranganathittu","Birding Destinations","BigCats"],months:["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr"]}),h.push({link:"FELINE FORTUNE - TIGER PHOTOGRAPHY TOUR",image:"Toehold/Trip/Tadoba/Tadoba.jpg",text:"FELINE FORTUNE - TIGER PHOTOGRAPHY TOUR",keywords:["Tiger","Tadoba","Pench","Kanha","Bandhavgarh","Tadoba","BigCats"],months:["Jul","Aug","Sep","Oct"]}),h.push({link:"KAZIRANGA ROAM WITH THE RHINOS",image:"BeyondRoads/Trip/Kaziranga/Kaziranga.jpg",text:"KAZIRANGA ROAM WITH THE RHINOS",keywords:["Tiger","Ranthambore","Khaziranga","BigCats","RHINOS"],months:["Jul","Aug","Sep","Oct"]}),h.push({link:"TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR",image:"Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg",text:"TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR",keywords:["Tiger","Bandhavgarh","Pench","Kanha","Tadoba","Bandhavgarh","BigCats"],months:["Jul","Aug","Sep","Oct"]}),h.push({link:"BHANDHAVGARH PHOTO TOUR",image:"MysticWild/Trip/Bandhavgarh/1.jpg",text:"BHANDHAVGARH PHOTO TOUR",keywords:["Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats"],months:["Jul","Aug","Sep","Oct"]}),h.push({link:"TIGER SOLSTICE - FULL-DAY TIGER PHOTOGRAPHY TOUR",image:"Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg",text:"TIGER SOLSTICE - FULL-DAY TIGER PHOTOGRAPHY TOUR",keywords:["Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats"],months:["Jul","Aug","Sep","Oct"]}),h.push({link:"TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR",image:"Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg",text:"TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR",keywords:["Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats"],months:["Jul","Aug","Sep","Oct"]}),h.push({link:"BANDHAVGARH TIGER RESERVE - SUNRISE TO SUNSET DEC 2015",image:"Sudhir/Trip/Bandhavgarh/Bandhavgarh.jpg",text:"BANDHAVGARH TIGER RESERVE - SUNRISE TO SUNSET DEC 2015",keywords:["Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats"],months:["Jul","Aug","Sep","Oct","Nov"]}),h.push({link:"BEAR FEAST IN THE FAR EAST - WILDLIFE PHOTOGRAPHY TOUR",image:"Toehold/Trip/Kamchatka/Kamchatka.jpg",text:"BEAR FEAST IN THE FAR EAST - WILDLIFE PHOTOGRAPHY TOUR",keywords:["Kamchatka","Exotic"],months:["Jul","Aug"]}),h.push({link:"HERPING AND PHOTOGRAPHY TOUR AT THAR DESERT",image:"BikeNHike/Trip/Thar/4.jpg",text:"THAR DESERT - HERPING",keywords:["Thar Desert","HERPING"],months:["Jul","Aug","Sep"]}),h.push({link:"BUTTERFLY WATCHING, BIRD WATCHING AND HERPING TOUR",image:"MysticWild/Trip/Someshwar/collage.jpg",text:"BUTTERFLY WATCHING, BIRD WATCHING AND HERPING TOUR",keywords:["Agumbe","Monsoon"],months:["Aug","Sep"]}),h.push({link:"TADOBA WILDLIFE SAFARI TOUR",image:"MysticWild/Trip/Tadoba/banner.jpg",text:"TADOBA WILDLIFE SAFARI TOUR",keywords:["Tiger","Bandhavgarh","Pench","Kanha","Tadoba","BigCats"],months:["Jul","Aug","Sep","Oct","Nov"]});var d=[];s()}();