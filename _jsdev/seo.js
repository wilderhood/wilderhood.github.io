(function()
{
	var numRecommendedAdsToDisplay = 10;
	
	var adList = [];
	var urlPrefix = "http://www.wilderhood.com/trip/";
	var imgURLPrefix = "https://az741737.vo.msecnd.net/wilderhood-public/medium/";
	//Add another key for restricting the ad to be displayed only in those months --> months:["Jan", "Feb"]
	
	// Ads updated on 5th October'16
	adList.push({link: urlPrefix + "BIRDING AND PHOTOGRAPHY TOUR AT TAL CHHAPAR", image: "BikeNHike/Trip/TalChhapar/1 (8).jpg", text: "BIRDING AND PHOTOGRAPHY TOUR AT TAL CHHAPAR", keywords: ["Raptors", "Birding Destinations", "Wildlife Destinations", "BikeNHike"], months: ["Oct", "Nov"]});
	adList.push({link: urlPrefix + "WILDLIFE PHOTOGRAPHY TOUR AT GIR", image: "BikeNHike/Trip/GIR/1 (7).jpg", text: "WILDLIFE PHOTOGRAPHY TOUR AT Gir", keywords: ["Gir", "Wildlife Destinations", "Birding Destinations", "BikeNHike"], months: ["Oct", "Nov"]});
	adList.push({link: urlPrefix + "BIRDING AND PHOTOGRAPHY TOUR AT BIKANER AND KHEECHAN", image: "BikeNHike/Trip/Bikaner_Kheechan/1 (2).jpg", text: "BIRDING AND PHOTOGRAPHY TOUR AT BIKANER AND KHEECHAN", keywords: ["Raptors", "BIKANER", "Birding Destinations", "BikeNHike"], months: ["Oct", "Nov", "Dec"]});
	adList.push({link: urlPrefix + "BIRDING AND PHOTOGRAPHY TOUR AT LITTLE RANN OF KUTCH", image: "BikeNHike/Trip/Kutch/1 (3).jpg", text: "BIRDING AND PHOTOGRAPHY TOUR AT LITTLE RANN OF KUTCH", keywords: ["Raptors", "LRK", "Birding Destinations", "Wildlife Destinations", "Landscape Destinations", "Kutch"], months: ["Oct", "Nov", "Dec"]});
	adList.push({link: urlPrefix + "BIRDING AND PHOTOGRAPHY TOURS AT LITTLE RANN OF KUTCH ", image: "BikeNHike/Trip/Kutch/1 (3).jpg", text: "BIRDING AND PHOTOGRAPHY TOURS AT LITTLE RANN OF KUTCH", keywords: ["Raptors", "LRK", "Birding Destinations", "Wildlife Destinations", "Landscape Destinations", "Kutch"], months: ["Oct", "Nov", "Dec", "Jan"]});
	adList.push({link: urlPrefix + "BIRDING AND PHOTOGRAPHY TOUR AT DESERT NATIONAL PARK", image: "BikeNHike/Trip/DesertNationalPark/1 (3).jpg", text: "BIRDING AND PHOTOGRAPHY TOUR AT DESERT NATIONAL PARK ", keywords: ["Raptors", "Wildlife Destinations", "Birding Destinations", "DNP"], months: ["Oct", "Nov", "Dec", "Jan"]});
	adList.push({link: urlPrefix + "COUPLE'S RETREAT IN THE WILD - CENTRAL INDIA TIGER PARKS", image: "Wilderhood/Package/Tadoba-Bandhavgarh/Praveen-Bandhavgarh2.jpg", text: "COUPLE'S RETREAT IN THE WILD - CENTRAL INDIA TIGER PARKS", keywords: ["Wildlife Destinations", "Birding Destinations", "DNP"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"]});

	//Previous ones!
	
	adList.push({link: urlPrefix + "EMERALD ISLES - WILDLIFE PHOTOGRAPHY TOUR OF ANDAMAN", image: "Darter/Trip/Andaman/Andaman.jpg", text: "EMERALD ISLES - WILDLIFE PHOTOGRAPHY TOUR OF ANDAMAN", keywords: ["Andaman", "Birding Destinations", "Port Blair", "Travel", "Exotic"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "WALK ON THE HILLY SIDE IN BHUTAN", image: "BeyondRoads/Trip/Bhutan/Bhutan.jpg", text: "WALK ON THE HILLY SIDE IN BHUTAN", keywords: ["Bhutan", "Travel", "Landscape Destinations", "Exotic"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "BHUTAN TRAVEL ROUTERS TOURS AND TREKS", image: "BeyondRoads/Trip/Bhutan/Bhutan.jpg", text: "BHUTAN TRAVEL ROUTERS TOURS AND TREKS", keywords: ["Bhutan", "Travel", "Landscape Destinations", "Exotic"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "CLASSIC MYANMAR - A PHOTOGRAPHY TOUR", image: "Darter/Trip/Myanmar/Myanmar.jpg", text: "CLASSIC MYANMAR - A PHOTOGRAPHY TOUR", keywords: ["Myanmar", "Travel", "Landscape Destinations", "Exotic"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "PHOTOGRAPHY IN NORTH-EAST INDIA AND HORNBILL FESTIVAL", image: "Darter/Trip/Hornbill/Hornbill.jpg", text: "PHOTOGRAPHY IN NORTH-EAST INDIA AND HORNBILL FESTIVAL", keywords: ["HORNBILL FESTIVAL", "Travel", "Landscape Destinations"], months: ["Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: urlPrefix + "FORTS AND DUNES OF RAJASTHAN - A TRAVEL PHOTOGRAPHY TOUR", image: "Darter/Trip/Rajasthan/Rajasthan.jpg", text: "FORTS AND DUNES OF RAJASTHAN - A TRAVEL PHOTOGRAPHY TOUR", keywords: ["Travel", "Landscape Destinations"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: urlPrefix + "A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR", image: "Darter/Trip/Ladakh/Ladakh-snow.jpg", text: "A SNOW FILLED WINTER IN LADAKH - PHOTOGRAPHY TOUR", keywords: ["Travel", "Landscape Destinations"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: urlPrefix + "MASAI MARA MIGRATION - SEPT 2015", image: "Sudhir/Trip/Maara/Maara.jpg", text: "MASAI MARA MIGRATION - SEPT 2015", keywords: ["Africa", "Maara", "Great Migration", "BigCats"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "THE PHANTOM AND THE WETLANDS - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Pantanal/Pantanal.jpg", text: "THE PHANTOM AND THE WETLANDS - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Exotic", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "GIR - THE LIONS LAST LAIR", image: "BirdWing/Trip/Gir/Gir.jpg", text: "GIR - THE LIONS LAST LAIR", keywords: ["Gir", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: urlPrefix + "WILD WEST - WILDLIFE PHOTOGRAPHY TOUR OF KUTCH", image: "Darter/Trip/Kutch/Kutch.jpg", text: "WILD WEST - WILDLIFE PHOTOGRAPHY TOUR OF KUTCH", keywords: ["Gir", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: urlPrefix + "OOTY", image: "BeyondRoads/Trip/Ooty/Ooty.jpg", text: "OOTY - Birding trip", keywords: ["OOTY", "Birding Destinations", "Nilgiri"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"]});
	adList.push({link: urlPrefix + "RANGANTHITTU-BANDIPUR", image: "BeyondRoads/Trip/Ranganathittu/Ranganathittu.jpg", text: "RANGANTHITTU-BANDIPUR", keywords: ["Tiger", "Bandipur", "Kabini", "Ranganathittu", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "FELINE FORTUNE - TIGER PHOTOGRAPHY TOUR", image: "Toehold/Trip/Tadoba/Tadoba.jpg", text: "FELINE FORTUNE - TIGER PHOTOGRAPHY TOUR", keywords: ["Tiger", "Tadoba", "Pench", "Kanha", "Bandhavgarh", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "KAZIRANGA ROAM WITH THE RHINOS", image: "BeyondRoads/Trip/Kaziranga/Kaziranga.jpg", text: "KAZIRANGA ROAM WITH THE RHINOS", keywords: ["Tiger", "Ranthambore", "Khaziranga", "BigCats", "RHINOS"],  months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "Bandhavgarh", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "BHANDHAVGARH PHOTO TOUR", image: "MysticWild/Trip/Bandhavgarh/1.jpg", text: "BHANDHAVGARH PHOTO TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "TIGER SOLSTICE - FULL-DAY TIGER PHOTOGRAPHY TOUR", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "TIGER SOLSTICE - FULL-DAY TIGER PHOTOGRAPHY TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "TIGER CENTRAL - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "BEAR FEAST IN THE FAR EAST - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Kamchatka/Kamchatka.jpg", text: "BEAR FEAST IN THE FAR EAST - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Kamchatka", "Exotic"], months: ["Jul", "Aug"]});
	adList.push({link: urlPrefix + "BUTTERFLY WATCHING, BIRD WATCHING AND HERPING TOUR", image: "MysticWild/Trip/Someshwar/collage.jpg", text: "BUTTERFLY WATCHING, BIRD WATCHING AND HERPING TOUR", keywords: ["Agumbe", "Monsoon"], months: ["Aug", "Sep"]});
	adList.push({link: urlPrefix + "TADOBA WILDLIFE SAFARI TOUR", image: "MysticWild/Trip/Tadoba/banner.jpg", text: "TADOBA WILDLIFE SAFARI TOUR", keywords: ["Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: urlPrefix + "Photo-tour to Kabini", image: "consciouspace/Trip/Kabini/kabini3.jpg", text: "Photo-tour to Kabini", keywords: ["BigCats", "Birding Destinations", "Leopard", "Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats", "Bandipur"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "BIG CAT DIARIES - WILDLIFE PHOTOGRAPHY TOUR AT GIR", image: "BikeNHike/Trip/Gir/1.jpg", text: "BIG CAT DIARIES - WILDLIFE PHOTOGRAPHY TOUR AT GIR", keywords: ["Gir", "Birding Destinations", "BigCats"], months: ["Jul", "Aug", "Sep", "Oct"]});
	adList.push({link: urlPrefix + "RAPTOR MANIA - BIRDING & PHOTOGRAPHY TOUR AT TAL CHAPPAR", image: "BikeNHike/Trip/Tal/1.jpg", text: "RAPTOR MANIA - BIRDING & PHOTOGRAPHY TOUR AT TAL CHAPPAR", keywords: ["TalChappar", "Birding Destinations", "Raptors", "Black bucks"], months: ["Oct", "Nov"]});
	adList.push({link: urlPrefix + "Alibag - Coastal Capers", image: "BirdWing/Trip/Alibag/alibag_terek_sandpiper.jpg", text: "Alibag - Coastal Capers", keywords: ["Alibag", "Birding Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Mangrove Magic - Sundarban wildlife photography tour", image: "Birdwing/Trip/Sundarbans/Sundarbans.jpg", text: "Mangrove Magic - Sundarban wildlife photography tour", keywords: ["Sundarban", "Birding Destinations","Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov", "Dec"]});		
	adList.push({link: urlPrefix + "Keoladeo National Park - Bharatpur", image: "Birdwing/Trip/Bharatpur/Bharatpur.jpg", text: "Keoladeo National Park - Bharatpur", keywords: ["Bharatpur", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb"]});		
	adList.push({link: urlPrefix + "Travel Photography Tour to Bhutan", image: "Darter/Trip/Bhutan/Bhutan.jpg", text: "Travel Photography Tour to Bhutan", keywords: ["Bhutan", "Landscape Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar","Apr","May"]});		
	adList.push({link: urlPrefix + "Heart of the Himalayas - Photography Tour in Lahaul & Spiti", image: "Darter/Trip/Lahaul/Spiti.jpg", text: "Heart of the Himalayas - Photography Tour in Lahaul & Spiti", keywords: ["Lahaul", "Spiti", "Travel Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar","Apr","May", "Jun", "Jul"]});		
	adList.push({link: urlPrefix + "A Snow filled winter in Ladakh - Photography Tour", image: "Darter/Trip/Ladakh/Ladakh-snow.jpg", text: "A Snow filled winter in Ladakh - Photography Tour", keywords: ["Ladakh", "Travel Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar","Apr","May", "Jun", "Jul"]});		
	adList.push({link: urlPrefix + "A Week With The Big Cats - Masai Mara", image: "BeyondRoads/Trip/Maara/Maara.jpg", text: "A Week With The Big Cats - Masai Mara", keywords: ["Masai Mara", "African Destinations", "Landscape Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Serengeti Calving Season -Tanzania", image: "BeyondRoads/Trip/Serengeti/Serengeti.jpg", text: "Serengeti Calving Season -Tanzania", keywords: ["Serengeti", "African Destinations", "Mammal Destinations"], months: ["Oct", "Nov", "Dec", "Jan"]});		
	adList.push({link: urlPrefix + "Land Of The Lion - Tailed Macaque - Valpari", image: "BeyondRoads/Trip/Valparai/valparai.jpg", text: "Land Of The Lion - Tailed Macaque - Valpari", keywords: ["Valparai", "Birding Destinations", "Mammal Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Land Of The Leopards - Kabini", image: "BeyondRoads/Trip/Kabini/Kabini.jpg", text: "Land Of The Leopards - Kabini", keywords: ["Kabini", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov", "Dec"]});		
	adList.push({link: urlPrefix + "Yala Wilpattu", image: "BeyondRoads/Trip/Yala_wilpattu/yala_wilpattu.jpg", text: "Yala Wilpattu", keywords: ["Yala Wilpattu", "Travel Destinations", "Mammal Destinations", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb"]});		
	adList.push({link: urlPrefix + "The Tigers Fortress - Ranthambore", image: "BeyondRoads/Trip/Ranthambore/Ranthambore.jpg", text: "The Tigers Fortress - Ranthambore", keywords: ["Ranthambore", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "The Real Land Of Tigers -Tadoba", image: "BeyondRoads/Trip/Tadoba/Tadoba.jpg", text: "The Real Land Of Tigers -Tadoba", keywords: ["Tadoba", "Tiger Destinations", "Mammal Destinations"], months: ["Oct"]});		
	adList.push({link: urlPrefix + "Spy In The Jungle - Pench", image: "BeyondRoads/Trip/Pench/Pench.jpg", text: "Spy In The Jungle - Pench", keywords: ["Pench", "Tiger Destinations", "Mammal Destinations"], months: ["Oct"]});		
	adList.push({link: urlPrefix + "Kanha National Park", image: "BeyondRoads/Trip/Kanha/Kanha.jpg", text: "Kanha National Park", keywords: ["Kanha", "Tiger Destinations", "Mammal Destinations", "Landscape Destinations"], months: ["Oct"]});		
	adList.push({link: urlPrefix + "Travel To The Country Tiger - Bandhavgarh", image: "BeyondRoads/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "Travel To The Country Tiger - Bandhavgarh", keywords: ["Bandhavgarh", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Dawn To Dusk At Bandhavgarh ", image: "BeyondRoads/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "Dawn To Dusk At Bandhavgarh ", keywords: ["Bandhavgarh", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Home Of One Horned Rhino - Kaziranga ", image: "BeyondRoads/Trip/Kaziranga/Kaziranga.jpg", text: "Home Of One Horned Rhino - Kaziranga", keywords: ["Kaziranga", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov", "Dec", "Jan"]});		
	adList.push({link: urlPrefix + "Bandipur Tiger Reserve", image: "Toehold/Trip/Bandipur/Bandipur.jpg", text: "Bandipur Tiger Reserve", keywords: ["Bandipur", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Leopard Lounge", image: "Toehold/Trip/Kabini/Kabini.jpg", text: "Leopard Lounge", keywords: ["Kabini", "Tiger Destinations", "Mammal Destinations"], months: ["Oct"]});		
	adList.push({link: urlPrefix + "Thar Attraction", image: "Toehold/Trip/Thar/Thar.jpg", text: "Thar Attraction", keywords: ["Thar Desert", "Birding Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Jungle Enclave", image: "Toehold/Trip/Bandipur/Bandipur.jpg", text: "Jungle Enclave", keywords: ["Bandipur", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Jungle Jaunt", image: "Toehold/Trip/Bandipur/Bandipur.jpg", text: "Jungle Jaunt", keywords: ["Bandipur", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Spot Luck", image: "Toehold/Trip/Bera/Bera.jpg", text: "Spot Luck", keywords: ["Bera", "Tiger Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Little Rann of Kutch", image: "Toehold/Trip/Kutch/Kutch.jpg", text: "Little Rann of Kutch", keywords: ["LRK", "Kutch", "Birding Destinations", "Mammal Destinations", "Landscape Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Nature Photography Masterclass- Ranganathittu", image: "Toehold/Trip/Ranganathittu/Ranganathittu.jpg", text: "Nature Photography Masterclass- Ranganathittu", keywords: ["Ranganathittu", "Birding Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "A Big Cat Week - Masai Mara", image: "Toehold/Trip/Masai-mara/masai_mara.jpg", text: "A Big Cat Week - Masai Mara", keywords: ["Masai Mara", "African Destinations", "Travel Destinations"], months: ["Oct", "Nov","Dec"]});		
	adList.push({link: urlPrefix + "Giant Of The FloodPlains", image: "Toehold/Trip/Kaziranga/Kaziranga.jpg", text: "Giant Of The FloodPlains", keywords: ["Kaziranga", "African Destinations", "Travel Destinations"], months: ["Oct", "Nov","Dec", "Jan"]});		
	adList.push({link: urlPrefix + "Wetland Wonders - Bharatpur", image: "Toehold/Trip/Bharatpur/Bharatpur1.jpg", text: "Wetland Wonders - Bharatpur", keywords: ["Bharatpur", "Birding Destinations"], months: ["Oct", "Nov","Dec", "Jan"]});		
	adList.push({link: urlPrefix + "Corbett National Park", image: "Toehold/Trip/Corbett/Corbett.jpg", text: "Corbett National Park ", keywords: ["Corbett", "Mammal Destinations", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb"]});		
	adList.push({link: urlPrefix + "Tiger Fortress-Ranthambore", image: "Toehold/Trip/Ranthambore/Ranthambore.jpg", text: "Tiger Fortress-Ranthambore", keywords: ["Ranthambore", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb"]});		
	adList.push({link: urlPrefix + "Wonders Of Endless Plains-Serengeti", image: "Toehold/Trip/Serengeti/Serengeti.jpg", text: "Wonders Of Endless Plains-Serengeti", keywords: ["Serengeti", "African Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb"]});		
	adList.push({link: urlPrefix + "Grassland Glory - Tal Chappar", image: "Toehold/Trip/Talchapar/Talchapar.jpg", text: "Grassland Glory - Tal Chappar", keywords: ["Talchapar", "Birding Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb"]});		
	adList.push({link: urlPrefix + "Eaglenest Wildlife Sanctuary - Arunachal Pradesh", image: "Toehold/Trip/Arunachal_Pradesh/Arunachal_pradesh.jpg", text: "Eaglenest Wildlife Sanctuary - Arunachal Pradesh", keywords: ["Arunachal Pradesh", "Birding Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar"]});		
	adList.push({link: urlPrefix + "Spring Type Collection - Bandhavgarh", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "Spring Type Collection - Bandhavgarh", keywords: ["Bandhavgarh", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar"]});		
	adList.push({link: urlPrefix + "Whispering Woods - Kanha", image: "Toehold/Trip/Kanha/Kanha.jpg", text: "Whispering Woods - Kanha", keywords: ["Kanha", "Mammal Destinations", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr"]});		
	adList.push({link: urlPrefix + "Teen Sensation - Kenya", image: "Toehold/Trip/Kenya/Kenya.jpg", text: "Teen Sensation - Kenya", keywords: ["Kenya", "Mammal Destinations", "Tiger Destinations", "African Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "Harvest In The Savannah - Kenya", image: "Toehold/Trip/Kenya/Kenya.jpg", text: "Harvest In The Savannah - Kenya", keywords: ["Lake Nakura", "Masai Mara", "Mammal Destinations", "Tiger Destinations", "African Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "Bond With The Birds - Pangot & Sattal", image: "Toehold/Trip/Pangot_Sattal/Pangot_Sattal.jpg", text: "Bond With The Birds - Pangot & Sattal", keywords: ["Pangot", "Sattal","Birding Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun"]});
	adList.push({link: urlPrefix + "Pole Trance - Norway", image: "Toehold/Trip/Svalbard/Svalbard.jpg", text: "Pole Trance - Norway", keywords: ["Svalbard", "Exotic Destinations","Mammal Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]});		
	adList.push({link: urlPrefix + "Bear Feast In The Far East - Kamchatka", image: "Toehold/Trip/Kamchatka/Kamchatka.jpg", text: "Bear Feast In The Far East - Kamchatka", keywords: ["Kamchatka", "Exotic Destinations","Mammal Destinations", "Sea Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul"]});		
	adList.push({link: urlPrefix + "The Phantom And The Wetlands - Brazil", image: "Toehold/Trip/Pantanal/Pantanal.jpg", text: "The Phantom And The Wetlands - Brazil", keywords: ["Pantanal", "Exotic Destinations", "Birding Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});		
	adList.push({link: urlPrefix + "Humming On Cloud Nine - Costa Rica", image: "Toehold/Trip/Costa_Rica/Costa_Rica.jpg", text: "Humming On Cloud Nine - Costa Rica", keywords: ["Costa Rica", "Exotic Destinations", "Birding Destinations"], months: ["Oct", "Nov","Dec", "Jan","Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "Jim Corbett & Pangot and Sattal", image: "MysticWild/Trip/Pangot_sattal.jpg", text: "Jim Corbett & Pangot and Sattal", keywords: ["Pangot", "Sattal", " Corbett", "Exotic Destinations", "Birding Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan"]});		
	adList.push({link: urlPrefix + "Bandhavgarh Tiger Reserve", image: "Sudhir/Trip/Bandhavgarh/Bandhavgarh.jpg", text: "Bandhavgarh Tiger Reserve", keywords: ["Bandhavgarh", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan", "Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "Masai Mara Migration", image: "Sudhir/Trip/Maara/Maara.jpg", text: "Masai Mara Migration", keywords: ["Masai Mara", "African Destinations", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov","Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});		
	adList.push({link: urlPrefix + "Kaziranga Tiger Reserve", image: "Sudhir/Trip/Kaziranga/Kaziranga_photography1.jpg", text: "Kaziranga Tiger Reserve", keywords: ["Kaziranga", "Mammal Destinations", "Tiger Destinations"], months: ["Oct", "Nov","Dec", "Jan", "Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "LITTLE RANN OF KUTCH - BIKENHIKE", image: "BikeNHike/Trip/Little_Rann_of_Kutch/Little_Rann_of_Kutch_photography1.jpg", text: "LITTLE RANN OF KUTCH - BIKENHIKE", keywords: ["LRK", "Kutch", "Birding Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Ranthambhore Wild Wonders - April 2016", image: "Sudhir/Trip/Ranthambore/Ranthambore.jpg", text: "Ranthambhore Wild Wonders - April 2016", keywords: ["Ranthambore", "Tiger Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]});		
	adList.push({link: urlPrefix + "The land Of The Roar and Trumpet - Corbett", image: "BeyondRoads/Trip/Corbett/Corbett.jpg", text: "The land Of The Roar and Trumpet - Corbett", keywords: ["Corbett", "Tiger Destinations"], months: ["Oct", "Nov", "Dec"]});		
	adList.push({link: urlPrefix + "Nagarahole Wildlife Tour and Chomkund Trek", image: "MysticWild/Trip/Nagarahole/Nagarahole_photography1.jpg", text: "Nagarahole Wildlife Tour and Chomkund Trek", keywords: ["Nagarahole", "Tiger Destinations"], months: ["Oct", "Nov"]});		
	adList.push({link: urlPrefix + "Ranganathittu Bird Sanctuary", image: "BirdWing/Trip/Ranganathittu/Ranganathittu_photography1.jpg", text: "Ranganathittu Bird Sanctuary", keywords: ["Ranganathittu", "Birding Destinations"], months: ["Oct", "Nov", "Dec"]});		
	adList.push({link: urlPrefix + "Kaziranga - Land of the Giants", image: "BirdWing/Trip/Kaziranga/Kaziranga_photography1.jpg", text: "Kaziranga - Land of the Giants", keywords: ["Kaziranga", "Tiger Destinations"], months: ["Oct", "Nov", "Dec",  "Jan","Feb", "Mar"]});		
	adList.push({link: urlPrefix + "Chikmagalur - Landscape Photography Tour", image: "BirdWing/Trip/Chikmagaluru/Chikmagaluru_photography1.jpg", text: "Chikmagalur - Landscape Photography Tour", keywords: ["Chikmagalur", "Landscape Destinations"], months: ["Oct", "Nov", "Dec",  "Jan"]});		
	adList.push({link: urlPrefix + "Classic Myanmar - Photography Tour", image: "Darter/Trip/Myanmar/Myanmar_photography1.jpg", text: "Classic Myanmar - Photography Tour", keywords: ["Myanmar", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});		
	adList.push({link: urlPrefix + "Cambodia Photography Tour - Temples of Angkor Wat and Beyond", image: "Darter/Trip/Cambodia/Cambodia_photography1.jpg", text: "Cambodia Photography Tour - Temples of Angkor Wat and Beyond", keywords: ["Cambodia", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});		
	adList.push({link: urlPrefix + "Tanzania - March 2016", image: "Sudhir/Trip/Tanzania/Serengeti_photography1.jpg", text: "Tanzania - March 2016", keywords: ["Tanzania", "Landscape Destinations", "Africa", "African Destinations", "Tiger Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb", "Mar"]});		
	adList.push({link: urlPrefix + "Sattal and Corbett Tiger Reserve - Uttarakhand", image: "Sudhir/Trip/Sattal-Corbett/Sattal-Corbett_photography1.jpg", text: "Sattal and Corbett Tiger Reserve - Uttarakhand", keywords: ["Sattal", "Landscape Destinations", "Corbett", "Pangot"], months: ["Oct", "Nov", "Dec", "Jan","Feb", "Mar"]});		
	adList.push({link: urlPrefix + "Birding Tour to Arunachal Pradesh", image: "consciouspace/Trip/Arunachal-Pradesh/Arunachal-Pradesh_photography1.jpg", text: "Birding Tour to Arunachal Pradesh", keywords: ["Arunachal Pradesh", "Landscape Destinations", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});		
	adList.push({link: urlPrefix + "Cobett, Pangot and Sattal - Treasures of Kumaon", image: "BirdWing/Trip/Sattal-Corbett/Sattal-Corbett_photography.jpg", text: "Cobett, Pangot and Sattal - Treasures of Kumaon", keywords: ["Cambodia", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb"]});		
	adList.push({link: urlPrefix + "Masai Mara - Migration", image: "BirdWing/Trip/Masai-Mara/Masai-Mara_photography.jpg", text: "Masai Mara - Migration", keywords: ["Masai Mara", "Landscape Destinations", "Africa", "African Destinations", "Tiger Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});		
	adList.push({link: urlPrefix + "The Leopard's Lair - Kabini", image: "Toehold/Trip/Kabini/Kabini.jpg", text: "The Leopard's Lair - Kabini", keywords: ["Kabini", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb"]});		
	adList.push({link: urlPrefix + "The Leopard's Lounge - Kabini", image: "Toehold/Trip/Kabini/Kabini.jpg", text: "The Leopard's Lounge - Kabini", keywords: ["Masai Mara", "Landscape Destinations", "Africa", "African Destinations", "Tiger Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb"]});		
	adList.push({link: urlPrefix + "TIGER FORTRESS - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Ranthambore/Ranthambore.jpg", text: "TIGER FORTRESS - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Masai Mara", "Landscape Destinations", "Africa", "African Destinations", "Tiger Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb", "Mar", "Apr", "May", "Jun"]});		
	adList.push({link: urlPrefix + "Birding and Landscaping paradise Uttarakhand", image: "CreativePraveen/Trip/Uttarakhand/Uttarakhand_photography.jpg", text: "Birding and Landscaping paradise Uttarakhand", keywords: ["Uttarakhand", "Landscape Destinations", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb", "Mar"]});		
	adList.push({link: urlPrefix + "Birding Tour to Arunachal Pradesh", image: "consciouspace/Trip/Arunachal-Pradesh/Arunachal-Pradesh_photography1.jpg", text: "Birding Tour to Arunachal Pradesh", keywords: ["Arunachal Pradesh", "Landscape Destinations", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb", "Mar"]});		
	adList.push({link: urlPrefix + "Makkumath-An Unexplored Birding Paradise", image: "CreativePraveen/Trip/Makkumath/Makkumath_photography.jpg", text: "Makkumath-An Unexplored Birding Paradise", keywords: ["Uttarakhand", "Landscape Destinations", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan"]});		
	adList.push({link: urlPrefix + "Photography Tour in Tadoba - Andhari Tiger Reserve", image: "consciouspace/Trip/Tadoba/Tadoba_photography1.jpg", text: "Photography Tour in Tadoba - Andhari Tiger Reserve", keywords: ["Tadoba", "Tiger Destinations"], months: ["Oct", "Nov", "Dec", "Jan","Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "DELTA FORCE", image: "Toehold/Trip/Botswana/Botswana-1.jpg", text: "DELTA FORCE", keywords: ["Botswana", "Exotic Destinations"], months: ["Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "TIGER FORTRESS", image: "Toehold/Trip/Ranthambhore/Ranthambhore-1.jpg", text: "TIGER FORTRESS", keywords: ["Toehold", "Ranthambore", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr", "May","jun"]});
	adList.push({link: urlPrefix + "FELINE FORTUNE", image: "Toehold/Trip/Tadoba/Tadoba-1.jpg", text: "FELINE FORTUNE", keywords: ["Toehold"," Tadoba", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr", "May","Jun"]});
	adList.push({link: urlPrefix + "THE LEOPARDS LAIR", image: "Toehold/Trip/Kabini/Kabini-1.jpg", text: "THE LEOPARDS LAIR", keywords: ["Toehold","Kabini", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "Exploring the Divine Landscapes of Panar and Rudranath", image: "CreativePraveen/Trip/Rudranath/Rudranath-1.jpg", text: "Exploring the Divine Landscapes of Panar and Rudranath", keywords: ["CreativePraveen", "Uttarakhand", "Rudranath", "Landscape Destinations", "Birding Destinations"], months: ["Feb", "Mar", "Apr"]});		
	adList.push({link: urlPrefix + "Deoria Taal and Tungnath-Landscape Expedition", image: "CreativePraveen/Trip/Tungnath/Tungnath-1.jpg", text: "Deoria Taal and Tungnath-Landscape Expedition", keywords: ["CreativePraveen", "Uttarakhand", "Tungnath", "Landscape Destinations", "Birding Destinations"], months: ["Feb", "Mar", "Apr"]});		
	adList.push({link: urlPrefix + "Mussoorie-Landscape Photography Expedition", image: "CreativePraveen/Trip/Mussoorie/Mussoorie-1.jpg", text: "Mussoorie-Landscape Photography Expedition", keywords: ["CreativePraveen", "Uttarakhand", "Mussoorie", "Landscape Destinations", "Birding Destinations"], months: ["Feb", "Mar"]});		
	adList.push({link: urlPrefix + "BANDHAVGARH WILDLIFE PHOTOGRAPHY TOUR", image: "Mysticwild/Trip/Bandhavgarh/Bandhavgarh-1.jpg", text: "BANDHAVGARH WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Mysticwild", "Bandhavgarh", "Tiger Destinations", "Mammal Destinations"], months: ["Feb", "Mar", "Apr"]});		
	adList.push({link: urlPrefix + "THE GREAT MIGRATION", image: "Toehold/Trip/Masai-Mara1/Masai-Mara-1.jpg", text: "THE GREAT MIGRATION", keywords: ["Toehold", "Masai Mara", "Landscape Destinations", "African Destinations"], months: ["Feb", "Mar", "Apr", "May", "June", "Jul", "Aug"]});		
	adList.push({link: urlPrefix + "HIGH ON THE HIMALAYAS", image: "Toehold/Trip/Ladakh/Ladakh-1.jpg", text: "HIGH ON THE HIMALAYAS", keywords: ["Toehold", "Ladakh", "Travel Destinations", "Landscape Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"]});	
	adList.push({link: urlPrefix + "BIG CAT WEEK", image: "Toehold/Trip/Masai-Mara/Masai-Mara-1.jpg", text: "BIG CAT WEEK", keywords: ["Toehold", "Masai Mara", "Landscape Destinations", "African Destinations"], months: ["Feb", "Mar", "Apr", "May"]});	
	adList.push({link: urlPrefix + "FELINE FORTUNE", image: "Toehold/Trip/Tadoba/Tadoba-1.jpg", text: "FELINE FORTUNE", keywords: ["Toehold", "Tadoba", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr", "May"]});		
	adList.push({link: urlPrefix + "TOP CAT TRYST", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh-1.jpg", text: "TOP CAT TRYST", keywords: ["Toehold", "Bandhavgarh", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "LAND OF THE LION", image: "Toehold/Trip/Gir/Gir-photography-1.jpg", text: "LAND OF THE LION", keywords: ["Toehold", "Gir", "Mammal Destinations", "Birding Destinations"], months: ["Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "GIANTS OF THE FLOODPLAINS", image: "Toehold/Trip/Kaziranga/Kaziranga-photography-1.jpg", text: "GIANTS OF THE FLOODPLAINS", keywords: ["Toehold", "Kaziranga", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr"]});
  adList.push({link: urlPrefix + "JUNGLE JAUNT", image: "Toehold/Trip/Bandipur/Bandipur-1.jpg", text: "JUNGLE JAUNT", keywords: ["Toehold", "Bandipur", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar"]});
  adList.push({link: urlPrefix + "DAWN TO DUSK AT BANDHAVGARH", image: "BeyondRoads/Trip/Bandhavgarh/Bandhavgarh-1.jpg", text: "DAWN TO DUSK AT BANDHAVGARH", keywords: ["BeyondRoads", "Bandhavgarh", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: urlPrefix + "Travel To The Country Tiger - Bandhavgarh", image: "BeyondRoads/Trip/Bandhavgarh/Bandhavgarh_photography1.jpg", text: "Travel To The Country Tiger - Bandhavgarh", keywords: ["BeyondRoads", "Bandhavgarh", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]});
  adList.push({link: urlPrefix + "The Real Land Of Tigers -Tadoba", image: "BeyondRoads/Trip/Tadoba/Tadoba_photography1.jpg", text: "The Real Land Of Tigers -Tadoba", keywords: ["BeyondRoads", "Tadoba", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun"]});
  adList.push({link: urlPrefix + "The Tigers Fortress - Ranthambore", image: "BeyondRoads/Trip/Ranthambore/Ranthambore_photography1.jpg", text: "The Tigers Fortress - Ranthambore", keywords: ["BeyondRoads", "Ranthambore", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "Kabini", image: "BeyondRoads/Trip/Kabini/kabini_photography1.jpg", text: "Kabini", keywords: ["BeyondRoads", "Kabini", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr"]});
  adList.push({link: urlPrefix + "YALA WILPATTU", image: "BeyondRoads/Trip/Yala/Yala-1.jpg", text: "YALA WILPATTU", keywords: ["BeyondRoads", "Yala wilpattu", "Mammal Destinations", "Travel Destinations", "Birding Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]});
	adList.push({link: urlPrefix + "Land Of The Leopards - Kabini", image: "BeyondRoads/Trip/Kabini/kabini_photography1.jpg", text: "Land Of The Leopards - Kabini", keywords: ["BeyondRoads", "Kabini", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "BIRDING AT SATTAL AND PANGOT", image: "BeyondRoads/Trip/Pangot/Pangot-1.jpg", text: "BIRDING AT SATTAL AND PANGOT", keywords: ["BeyondRoads", "Pangot", "Birding Destinations"], months: ["Feb", "Mar"]});
	adList.push({link: urlPrefix + "SERENGETI CALVING SEASON - TANZANIA", image: "BeyondRoads/Trip/Tanzania/Tanzania-1.jpg", text: "SERENGETI CALVING SEASON - TANZANIA", keywords: ["BeyondRoads", "Serengeti", "Mammal Destinations", "African Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]});
	adList.push({link: urlPrefix + "A Week With The Big Cats - Masai Mara", image: "BeyondRoads/Trip/Masai-mara/masai_mara_photography1.jpg", text: "A Week With The Big Cats - Masai Mara", keywords: ["BeyondRoads", "Bandhavgarh", "Landscape Destinations", "African Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: urlPrefix + "JOURNEY TO THE MECCA OF WILDLIFE", image: "BeyondRoads/Trip/Maasai-Mara/Maasai-Mara-1.jpg", text: "JOURNEY TO THE MECCA OF WILDLIFE", keywords: ["BeyondRoads", "Masai mara", "Landscape Destinations", "African Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]});
	adList.push({link: urlPrefix + "Rainforest Rendezvous - Photography Tour of Agumbe", image: "Darter/Trip/Agumbe/Agumbe-1.jpg", text: "Rainforest Rendezvous - Photography Tour of Agumbe", keywords: ["Darter photography", "Agumbe", "Monsoon Destinations"], months: ["Feb", "Mar"]});
  adList.push({link: urlPrefix + "Photography in North-East India and Hornbill Festival", image: "Darter/Trip/Hornbill-Festival/hornbill-festival-1.jpg", text: "Photography in North-East India and Hornbill Festival", keywords: ["Darter Photography", "Guwahati", "Travel Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
  adList.push({link: urlPrefix + "Forts and Dunes of Rajasthan - A Travel Photography Tour", image: "Darter/Trip/Rajasthan/rajasthan-1.jpg", text: "Forts and Dunes of Rajasthan - A Travel Photography Tour", keywords: ["Darter Photography", "Jaipur", "Travel Destinations"], months: ["Feb", "Mar", "Apr", "May", "jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: urlPrefix + "Mountains and Monasteries - A Photography Tour of Ladakh", image: "Darter/Trip/Ladakh1/ladakh-1.jpg", text: "Mountains and Monasteries - A Photography Tour of Ladakh", keywords: ["Darter Photography", "Ladakh", "Landscape Destinations", "Travel Destinations"], months: ["Feb", "Mar", "Apr", "May", "jun", "Jul", "Aug"]});
	adList.push({link: urlPrefix + "Glaciers and Starry Nights - Landscape Photography in Zanskar Himalayas", image: "Darter/Trip/Ladakh/ladakh-1.jpg", text: "Glaciers and Starry Nights - Landscape Photography in Zanskar Himalayas", keywords: ["Darter Photography", "Ladakh", "Landscape Destinations", "Travel Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun"]});
	adList.push({link: urlPrefix + "Pangot & Sattal - Birding Haven", image: "Birdwing/Trip/Pangot/Pangot-and-Sattal-1.jpg", text: "Pangot & Sattal - Birding Haven", keywords: ["Birdwing Photography", "Pangot", "Birding Destinations"], months: ["Feb", "Mar", "Apr", "May"]});
	adList.push({link: urlPrefix + "Corbett National Park - Treasure of Kumaon", image: "Birdwing/Trip/Corbett/Corbett-1.jpg", text: "Corbett National Park - Treasure of Kumaon", keywords: ["Birdwing Photography", "Corbett", "Landscape Destinations", "Tiger Destinations", "Mammal Destinations"], months: ["Feb", "Mar", "Apr", "May"]});
	adList.push({link: urlPrefix + "Gir Photography Tour - The Lions' Last Lair", image: "Birdwing/Trip/Gir/Gir-1.jpg", text: "Gir Photography Tour - The Lions' Last Lair", keywords: ["Birdwing Photography", "Gir", "Birding Destinations", "Mammal Destinations"], months: ["Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "Agumbe - Life in the Undergrowth", image: "Birdwing/Trip/Agumbe/Agumbe-1.jpg", text: "Agumbe - Life in the Undergrowth", keywords: ["Birdwing Photography", "Agumbe", "Monsoon Destinations"], months: ["Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "Tadoba - Embrace your Cat Luck", image: "Birdwing/Trip/Tadoba/Tadoba-Birdwing-1.jpg", text: "Tadoba - Embrace your Cat Luck", keywords: ["Birdwing Photography", "Tadoba", "Tiger Destinations", "Mammal Destinations"], months: ["Feb", "Mar"]});
	adList.push({link: urlPrefix + "Ooty - Birding in the Nilgiris", image: "Birdwing/Trip/Ooty/Ooty1.jpg", text: "Ooty - Birding in the Nilgiris", keywords: ["Birdwing Photography", "Ooty", "Birding Destinations", "Landscape Destinations"], months: ["Feb"]});
	adList.push({link: urlPrefix + "Mangrove Magic - Sundarban wildlife photography tour", image: "Birdwing/Trip/Sundarban/sundarban-1.jpg", text: "Mangrove Magic - Sundarban wildlife photography tour", keywords: ["Birdwing Photography", "Sundarban", "Birding Destinations", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar"]});
	adList.push({link: urlPrefix + "Bhadra - Rivertern Rendezvous", image: "Birdwing/Trip/Bhadra/Bhadra-1.jpg", text: "Bhadra - Rivertern Rendezvous", keywords: ["Birdwing Photography", "Bhadra", "Birding Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "Land of the Lion-tailed Macaque - Valparai", image: "BeyondRoads/Trip/Valparai/Valparai-1.jpg", text: "Land of the Lion-tailed Macaque - Valparai", keywords: ["BeyondRoads", "Valparai", "Birding Destinations", "Mammal Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	adList.push({link: urlPrefix + "Spy in the Jungle - Pench", image: "BeyondRoads/Trip/Pench/Pench-1.jpg", text: "Spy in the Jungle - Pench", keywords: ["BeyondRoads", "Pench", "Tiger Destinations", "Mammal Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: urlPrefix + "The land of the Roar and Trumpet - Corbett", image: "BeyondRoads/Trip/Corbett/Corbett-1.jpg", text: "The land of the Roar and Trumpet - Corbett", keywords: ["BeyondRoads", "Corbett", "Landscape Destinations", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: urlPrefix + "Kaziranga - Home of One Horned Rhino", image: "BeyondRoads/Trip/Kaziranga/Kaziranga-1.jpg", text: "Kaziranga - Home of One Horned Rhino", keywords: ["BeyondRoads", "Kaziranga", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
 	adList.push({link: urlPrefix + "FLYING COLOURS OF THE NORTHEAST - BIRD PHOTOGRAPHY TOUR", image: "Toehold/Trip/Sanctuary/Sanctuary-1.jpg", text: "FLYING COLOURS OF THE NORTHEAST - BIRD PHOTOGRAPHY TOUR", keywords: ["Toehold", "Arunachal Pradesh", "Birding Destinations"], months: ["Feb", "Mar"]});
  adList.push({link: urlPrefix + "SPRING STRIPES COLLECTION - WILDLIFE PHOTOGRAPHY TOUR", image: "Toehold/Trip/Bandhavgarh/Bandhavgarh-1.jpg", text: "SPRING STRIPES COLLECTION - WILDLIFE PHOTOGRAPHY TOUR", keywords: ["Toehold", "Bandhavgarh", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar"]});
	adList.push({link: urlPrefix + "Kabini Wildlife Photography Workshop", image: "Sudhir/Trip/Kabini/Kabini-1.jpg", text: "Kabini Wildlife Photography Workshop", keywords: ["Sudhir Shivaram Photography", "Kabini", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "Bandhavgarh Tiger Reserve", image: "Sudhir/Trip/Bandhavgarh/Bandhavgarh-1.jpg", text: "Bandhavgarh Tiger Reserve", keywords: ["Sudhir Shivaram Photography", "Bandhavgarh", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "Bandhavgarh Tiger Reserve - Sunrise to Sunset", image: "Sudhir/Trip/Bandhavgarh1/Bandhavgarh-1.jpg", text: "Bandhavgarh Tiger Reserve - Sunrise to Sunset", keywords: ["Sudhir Shivaram Photography", "Bandhavgarh", "Mammal Destinations", "Tiger Destinations"], months: ["Feb", "Mar", "Apr", "May"]});
	//New additions on 25th May

	adList.push({link: urlPrefix + "LADAKH JOURNEYS", image: "Yourjourneys/Trip/Ladakh/23.JPG", text: "LADAKH JOURNEYS", keywords: ["Ladakh", "Travel", "Travel Destinations"], months: ["Feb", "Mar", "Apr"]});
	adList.push({link: urlPrefix + "DESERT NATIONAL PARK REPTILE JOURNEYS ", image: "Yourjourneys/Trip/DNP/IMG_5357.jpg", text: "DESERT NATIONAL PARK REPTILE JOURNEYS", keywords: ["DNP", "Monsoon Destinations", "Wildlife Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]});
	adList.push({link: urlPrefix + "4 ALTITUDE HIMALAYAN BIRDING JOURNEYS ", image: "Yourjourneys/Trip/Sattal/IMG_8119.jpg", text: "4 ALTITUDE HIMALAYAN BIRDING JOURNEYS", keywords: ["Sattal", "Birding Destinations", "Travel Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]});
	adList.push({link: urlPrefix + "JIM CORBETT NATIONAL PARK", image: "consciouspace/Trip/Corbett/3P3A6112.jpg", text: "JIM CORBETT NATIONAL PARK", keywords: ["Corbett", "Birding Destinations", "Tiger Destinations", "Landscape Destinations"], months: ["Feb", "Mar", "Apr", "May", "Jun"]});
	adList.push({link: urlPrefix + "AGUMBE RAINFORESTS - LIFE AMIDST THE GREENS", image: "consciouspace/Trip/Agumbe/Green-vine-snake-consciouspace.jpg", text: "AGUMBE RAINFORESTS - LIFE AMIDST THE GREENS", keywords: ["Agumbe", "Monsoon Destinations", "Landscape Destinations", "Tiger Destinations"], months: ["Jul", "Aug"]});
	adList.push({link: urlPrefix + "TRIP TO UNEXPLORED WONDER OF WESTERN GHATS - A HOMESTAY NEAR KALASA", image: "RaviPrakashSS/Trip/Trip/Kalasa-Aug-15_32111.jpg", text: "TRIP TO UNEXPLORED WONDER OF WESTERN GHATS - A HOMESTAY NEAR KALASA", keywords: ["Wildlife Destinations", "Monsoon Destinations", "Agumbe"], months: ["Aug", "Sep"]});

	
	//Accommodation properties
	urlPrefix = "http://www.wilderhood.com/accommodation/";

	adList.push({link: urlPrefix + "The Camp", image: "Accommodation/TheCamp/Banner.jpg", text: "Thecamp: Cozy farmhouse setup in Palasambe", keywords: ["Westernghats", "Monsoon", "MacroLife"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Kabini River Lodge", image: "Accommodation/JLR/Kabini/Kabini.jpg", text: "JLR - Kabini River Lodge", keywords: ["BigCats", "Birding Destinations", "Leopard", "Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Bandipur Safari Lodge", image: "Accommodation/JLR/Bandipur/Bandipur.jpg", text: "JLR - Bandipur Safari Lodge", keywords: ["BigCats", "Birding Destinations", "Leopard", "Tiger", "Bandhavgarh", "Pench", "Kanha", "Tadoba", "BigCats", "Bandipur"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Kalinga Centre for Rainforest Ecology", image: "Accommodation/KCRE/1.png", text: "Kalinga Centre for Rainforest Ecology", keywords: ["Monsoon Destinations", "Agumbe"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Seethanadi Nature Camp", image: "Accommodation/Seethanadi/seethanadi.jpg", text: "Seethanadi Nature Camp", keywords: ["Monsoon Destinations", "Agumbe"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Gir Birding Lodge", image: "Accommodation/Gir_Birding_Lodge/Gir_Birding_Lodge.jpg", text: "Gir Birding Lodge", keywords: ["BigCats", "Gir", "Mammal Destinations", "Leopard Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Asiatic Lion Lodge", image: "Accommodation/Asiatic_Lion_Lodge/Asiatic_Lion_Lodge.jpg", text: "Asiatic Lion Lodge", keywords: ["BigCats", "Gir", "Mammal Destinations", "Leopard Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Rann Riders", image: "Accommodation/Rann_Riders/Rann_Riders.jpg", text: "Rann Riders", keywords: ["Kutch", "Landscape Destinations", "Birding Destinations", "Mammal Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "The Serai Resorts - Chikmagalur", image: "Accommodation/The_Serai_Resorts/The_Serai_Resorts.jpg", text: "The Serai Resorts - Chikmagalur", keywords: ["Kabini", "BigCats", "Tiger Destinations", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Orange County - Coorg", image: "Accommodation/Orange_County_Coorg/Orange_County_Coorg2.jpg", text: "Orange County - Coorg", keywords: ["Coorg", "Monsoon Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Red Earth", image: "Accommodation/Red_Earth/Red_Earth.jpg", text: "Red Earth", keywords: ["Kabini", "BigCats", "Tiger Destinations", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "The Serai Resorts - Bandipur", image: "Accommodation/The_Serai_Resorts_Bandipur/The_Serai_Resorts_Bandipur2.jpg", text: "The Serai Resorts - Bandipur", keywords: ["Bandipur", "BigCats", "Tiger Destinations", "Mammal Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "The Serai Resorts - Kabini", image: "Accommodation/The_Serai_Resorts_Kabini/The_Serai_Resorts_Kabini1.jpg", text: "The Serai Resorts - Kabini", keywords: ["Kabini", "Tiger Destinations", "Birding Destinations", "Serai"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Orange County - Kabini", image: "Accommodation/Orange_County_Kabini/Orange_County_Kabini2.jpg", text: "Orange County - Kabini", keywords: ["Kabini", "BigCats", "Tiger Destinations", "Birding Destinations", "Orange County"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Misty Creek - Valparai", image: "Accommodation/Misty_Creek_Valparai/Misty_Creek_Valparai1.jpg", text: "Misty Creek - Valparai", keywords: ["Valparai", "Birding Destinations", "LTM", "Mammal Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Tiger Camp Resort", image: "Accommodation/Tiger_Camp_Resort/Tiger_Camp_Resort1.jpg", text: "Tiger Camp Resort", keywords: [], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Shaheen Bagh", image: "Accommodation/Shaheen_Bagh/Shaheen_Bagh1.jpg", text: "Shaheen Bagh", keywords: [], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Tal Birding Camp", image: "Accommodation/Tal_Birding_Camp/Tal_Birding_Camp1.jpg", text: "Tal Birding Camp", keywords: [], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Iora Guest House", image: "Accommodation/Iora_Guest_House/Iora_Guest_House1.jpg", text: "Iora Guest House", keywords: ["Bharatpur", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Ocean Deck", image: "Accommodation/Ocean_Deck/Ocean_Deck2.jpg", text: "Ocean Deck", keywords: ["Reptiles", "Monsoon Destinations", "Sea Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Wildernest Nature Resorts", image: "Accommodation/Wildernest_Nature_Resorts/Wildernest_Nature_Resorts1.jpg", text: "Wildernest Nature Resorts", keywords: ["Chorla Ghats", "Goa", "Monsoon Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Nature Nest", image: "Accommodation/Nature_Nest/Nature_Nest1.jpg", text: "Nature Nest", keywords: ["Chorla Ghats", "Goa", "Monsoon Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Swapnagandha", image: "Accommodation/Swapnagandha/Swapnagandha1.jpg", text: "Swapnagandha", keywords: ["Chorla Ghats", "Goa", "Monsoon Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Honey Valley", image: "Accommodation/Honey_Valley/Honey_Valley.jpg", text: "Honey Valley", keywords: ["Coorg"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Chingaara", image: "Accommodation/Chingaara/Chingaara.jpg", text: "Chingaara", keywords: ["Coorg"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Nature Herritage", image: "Accommodation/Nature_Herritage/Nature_Herritage.jpg", text: "Nature Herritage", keywords: ["Bandhavgarh", "Tiger Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Tiger Den Resort", image: "Accommodation/Tiger_Den_Resort/Tiger_Den_Resort.jpg", text: "Tiger Den Resort", keywords: ["Bandhavgarh", "Tiger Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Svasvara", image: "Accommodation/Svasvara/Svasvara.jpg", text: "Svasvara", keywords: ["Tadoba", "Tiger Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Camp Sparrow", image: "Accommodation/CampSparrow/Nainital.jpg", text: "Camp Sparrow", keywords: ["Nainital", "Birding Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Tiger Camp Resort - Asian Advenures", image: "Accommodation/Asian-Advenures/Tiger_Camp_Resort/Tiger_Camp_Resort1.jpg", text: "Tiger Camp Resort - Asian Advenures", keywords: ["Corbett", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Jungle Lore Birding Lodge", image: "Accommodation/Asian-Advenures/Jungle_Lore_Birding_Lodge/Jungle_Lore_Birding_Lodge1.jpg", text: "Jungle Lore Birding Lodge", keywords: ["Pangot", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Abbott Mount Cottage", image: "Accommodation/Asian-Advenures/Abbott_Mount_Cottage/Abbott_Mount_Cottage1.jpg", text: "Abbott Mount Cottage", keywords: ["Lohaghat", "Birding Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Van Serai", image: "Accommodation/Asian-Advenures/Van_Serai/Van_Serai1.jpg", text: "Van Serai", keywords: ["Jageshwar", "Birding Destinations", "Landscape Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Walterre", image: "Accommodation/Asian-Advenures/Walterre/Walterre1.jpg", text: "Walterre", keywords: ["Dehradun", "Birding Destinations", "Landscape Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Magpie Cottage", image: "Accommodation/Asian-Advenures/Magpie_Cottage/Magpie_Cottage1.jpg", text: "Magpie Cottage", keywords: ["Corbett", "Tiger Destinations", "Landscape Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Gir Birding Lodge - Asian Advenures", image: "Accommodation/Asian-Advenures/Gir_Birding_Lodge/Gir_Birding_Lodge1.jpg", text: "Gir Birding Lodge - Asian Advenures", keywords: ["Gir", "Mammal Destinations", "Leopard Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Monsoon Forest", image: "Accommodation/Asian-Advenures/Gir_Birding_Lodge/Gir_Birding_Lodge1.jpg", text: "Gir Birding Lodge - Asian Advenures", keywords: ["Gir", "Mammal Destinations", "Leopard Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Mangrove Whistler", image: "Accommodation/Asian-Advenures/Mangrove_Whistler/Mangrove_Whistler1.jpg", text: "Mangrove Whistler", keywords: ["Sundarban", "Mammal Destinations", "Birding Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Kadumane Homestay", image: "Accommodation/Asian-Advenures/Mangrove_Whistler/Mangrove_Whistler1.jpg", text: "Kadumane Homestay", keywords: ["Dandeli", "Birding Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Whistling Woods", image: "Accommodation/Whistling_Woods/Whistling_Woods5.jpg", text: "Whistling Woods", keywords: ["Amboli", "Birding Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Monsoon Forest - Tiger Land", image: "Accommodation/Tiger_Land/Monsoon_Forest/Monsoon_Forest1.jpg", text: "Monsoon Forest - Tiger Land", keywords: ["Bandhavgarh", "Tiger Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Dhikala Forest Lodge - Tiger Land", image: "Accommodation/Tiger_Land/Dhikala_Forest_Lodge/Dhikala_Forest_Lodge1.jpg", text: "Dhikala Forest Lodge - Tiger Land", keywords: ["Corbett", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Country Inn Resort - Tiger Land", image: "Accommodation/Tiger_Land/Country_Inn_Resort/Country_Inn_Resort1.jpg", text: "Country Inn Resort - Tiger Land", keywords: ["Corbett", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "The Riverview Retreat - Tiger Land", image: "Accommodation/Tiger_Land/The_Riverview_Retreat/The_Riverview_Retreat1.jpg", text: "The Riverview Retreat - Tiger Land", keywords: ["Corbett", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "The Tiger Camp - Tiger Land", image: "Accommodation/Tiger_Land/The_Tiger_Camp/The_Tiger_Camp1.jpg", text: "The Tiger Camp - Tiger Land", keywords: ["Corbett", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "The Wild Crest - Tiger Land", image: "Accommodation/Tiger_Land/The_Wild_Crest/The_Wild_Crest1.jpg", text: "The Wild Crest - Tiger Land", keywords: ["Corbett", "Tiger Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Van Serai - Tiger Land", image: "Accommodation/Tiger_Land/Van_Serai/Van_Serai1.jpg", text: "Van Serai - Tiger Land", keywords: ["Jageshwar", "Birding Destinations", "Landscape Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Grand Tiger Resort - Tiger Land", image: "Accommodation/Tiger_Land/Grand_Tiger_Resort/Grand_Tiger_Resort1.jpg", text: "Grand Tiger Resort - Tiger Land", keywords: ["Kanha", "Mammal Destinations", "Landscape Destinations", "Tiger Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Jungle Lore Birding Lodge - Tiger Land", image: "Accommodation/Tiger_Land/Jungle_Lore_Birding_Lodge/Jungle_Lore_Birding_Lodge1.jpg", text: "Jungle Lore Birding Lodge - Tiger Land", keywords: ["Pangot", "Travel Destinations", "Landscape Destinations", "Tiger Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Gir Birding Lodge - Tiger Land", image: "Accommodation/Tiger_Land/Gir_Birding_Lodge/Gir_Birding_Lodge1.jpg", text: "Gir Birding Lodge - Tiger Land", keywords: ["Gir", "Travel Destinations", "Leopard Destinations", "Mammal Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	adList.push({link: urlPrefix + "Horn Bill", image: "Accommodation/Horn_Bill/Horn_Bill1.jpg", text: "Horn Bill", keywords: ["Tadoba", "Tiger Destinations", "Travel Destinations"], months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]});
	

	var numSponsoredAdsToDisplay = 3;
	var sponsoredList = [];
	

	function toTitleCase(str)
	{
	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}
	
	function toLowerCaseList(list)
	{
		if(!list)
			return;
	
		for(var ii=0; ii < list.length; ++ii)
		{
			list[ii] = list[ii].toLowerCase();
		}
	}
	
	function preprocess(dataList)
	{
		for(var ii=0; ii<dataList.length; ++ii)
		{
			var data = dataList[ii];
			data.text = toTitleCase(data.text);
			toLowerCaseList(data.keywords);
		}
	}
	
	function getBaseURL() {
	   return location.protocol + "//" + location.hostname + 
	      (location.port && ":" + location.port) + "/";
	}
	
	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}
	
	function createElementWithString(htmlStr)
	{
		var divNode = document.createElement("div");
		divNode.innerHTML = htmlStr;
		return divNode;
	}
	
	function createElementWithDataObj(data, compiledTemplate, localImage)
	{
		if(localImage)
			data.image = getBaseURL() + "img/seo/" + data.image;
		else
			data.image = imgURLPrefix + data.image;
		
		var renderedTemplate = compiledTemplate.render(data);
		return createElementWithString(renderedTemplate);
	}
	
	function filterListByMonths(dataList, currentDate)
	{
		var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		currentMonth = monthNames[currentDate.getMonth()];
	
		var retList = [];
		for(var ii=0; ii<dataList.length; ++ii)
		{
			var data = dataList[ii];
			var monthsList = data["months"];
			//considered for all months if entry is not present
			//or considered for the months if an entry is present
			if(!monthsList || (monthsList.indexOf(currentMonth) > -1))
				retList.push(data);
		}
		return retList;
	}
	
	function isKeywordInDataEntry(data, keyword)
	{
		if(!data.keywords)
			return false;
		return data.keywords.indexOf(keyword) > -1;
	}
	
	function filterListByKeywords(dataList, keywordsList)
	{
		toLowerCaseList(keywordsList);
		
		//using reverse keyword position in keywordsList as priority
		//if there are two keywords at indices 0, 1 (in a list of length 3)
		//for same data entry, then priority will be (3-0)+(3-1)=5
		var priorityList = [];	//each element is an object with data and priority keys
		
		function pushPriorityDataIntoPriorityList(iData, priority, priorityList)
		{
			var iDataLink = iData.link;
	
			//check if data is already present
			for(var ii=0; ii<priorityList.length; ++ii)
			{
				var dataObj = priorityList[ii];
				if(dataObj.data.link == iDataLink)
				{
					dataObj.priority += priority;
					return;
				}
			}
	
			//not found
			priorityList.push({data: iData, priority: priority});
		}
	
		//sort the priority list based on the priority index in each list entry
		//with randoming entries in same priority zone
		function getPriorityListSorted(priorityList)
		{
			var samePriorityLists = [];		//its a list of list --> priority as the key to list of data entries for that priority
			var lowestPriorityIndex = Number.POSITIVE_INFINITY;
			var highestPriorityIndex = Number.NEGATIVE_INFINITY;
	
			//update lowestPriorityIndex, highestPriorityIndex and samePriorityLists
			for(var ii=0; ii<priorityList.length; ++ii)
			{
				var dataObj = priorityList[ii];
				var priority = dataObj.priority;
				if(lowestPriorityIndex > priority)	lowestPriorityIndex = priority;
				if(highestPriorityIndex < priority)	highestPriorityIndex = priority;
				
				if(!samePriorityLists[priority])	samePriorityLists[priority] = [];
				samePriorityLists[priority].push(dataObj.data);
			}
	
			var retList = [];
			//shuffle same priority lists and update final list
			for(var ii=highestPriorityIndex; ii >= lowestPriorityIndex; --ii)
			{
				var priorityList = samePriorityLists[ii];
				if(!priorityList)
					continue;	//Might not be present as priorities might not be sequential
	
				retList = retList.concat(shuffleArray(priorityList));
			}
			
			return retList;
		}
	
		function getExcludedListFromPriorityList(totalList, priorityList)
		{
			var excludedList = [];
			for(var jj=0; jj<totalList.length; ++jj)
			{
				var found = false;
				var totalListData = totalList[jj];
				var totalListDataLink = totalListData.link;
	
				for(var ii=0; ii<priorityList.length; ++ii)
				{
					if(priorityList[ii].data.link == totalListDataLink)
					{
						found = true;
						break;
					}
				}
	
				if(!found)
					excludedList.push(totalListData);
			}
			return excludedList;
		}
	
	
	
		//keyword order in the post has priority
		var keywordsLength = keywordsList.length;
		for(var jj=0; jj < keywordsLength; ++jj)
		{
			var keyword = keywordsList[jj];
			for(var ii=0; ii<dataList.length; ++ii)
			{
				var data = dataList[ii];
				if(isKeywordInDataEntry(data, keyword))
				{
					//using reverse keyword position as priority
					//if there are two keywords at indices 0, 1 (in a list of length 3),
					//for same data entry, then priority will be (3-0)+(3-1)=5
					pushPriorityDataIntoPriorityList(data, keywordsLength - jj, priorityList);
				}
			}
		}
	
		var filteredDataList = getPriorityListSorted(priorityList);	//we got priority based shuffled list
		var newList = filteredDataList.slice(0, numRecommendedAdsToDisplay);
		if(newList.length < numRecommendedAdsToDisplay)
		{
			var excludedDataList = getExcludedListFromPriorityList(dataList, priorityList);
			newList = newList.concat(shuffleArray(excludedDataList).slice(0, numRecommendedAdsToDisplay - newList.length));
		}
	
		return newList;
	}
	
	function displayAds()
	{
		preprocess(sponsoredList);
		preprocess(adList);
	
		var seoKeywords = window.seoKeywords || [];
		var currentDate = new Date();
	
		var $adHolderDiv = $("#seoHolder");
		if(!$adHolderDiv.length)
			return;
		
		var template = $('#seoTemplate').html();
		var compiledTemplate = Hogan.compile(template);
		
		//randomize and pick first six
		var randomizedSponsoredList = shuffleArray(sponsoredList).slice(0, numSponsoredAdsToDisplay);
		var randomizedAdList = filterListByKeywords(filterListByMonths(adList, currentDate), seoKeywords);
	
		var fragment = document.createDocumentFragment();
		if(randomizedSponsoredList.length > 0)
		{
			$(fragment).append(createElementWithString("<div class='w-seo-sponsored'>SPONSORED</div><hr/>"));
			for(var ii=0; ii<randomizedSponsoredList.length; ++ii)
			{
				var data = randomizedSponsoredList[ii];
				fragment.appendChild(createElementWithDataObj(data, compiledTemplate, true));
			}
			$(fragment).append(createElementWithString("<hr style='padding-top:25px'/>"));
		}
		else
		{
			$(fragment).append(createElementWithString("<div class='w-seo-sponsored'>RECOMMENDED TRIPS</div><hr/>"));
		}
		for(var ii=0; ii<randomizedAdList.length; ++ii)
		{
			var data = randomizedAdList[ii];
			data.link = data.link;
			fragment.appendChild(createElementWithDataObj(data, compiledTemplate, false));
		}
		$adHolderDiv.append(fragment);
	}


	if($(window).width() >= 768)
	{
		setTimeout(displayAds, 1000);
	}
})();