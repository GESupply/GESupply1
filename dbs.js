

var objects = [
	[
		{	
			name: "Logitech Wireless Combo MK270",
			img: "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SL1500_.jpg",
			link: "https://www.amazon.com/Logitech-MK270-Wireless-Keyboard-Mouse/dp/B079JLY5M5/ref=lp_16225009011_1_10"
		},
		{
			name: "Sceptre 24\" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA",
			img: "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SL1257_.jpg",
			link: "https://www.amazon.com/Sceptre-E248W-19203R-Monitor-Speakers-Metallic/dp/B0773ZY26F/ref=lp_16225009011_1_12"
		},
		{
			name: "HyperX Cloud II - Gaming Headset, 7.1 Surround Sound, Memory Foam Ear Pads",
			img: "https://m.media-amazon.com/images/I/71g5MRbP52L._AC_SL1500_.jpg",
			link: "https://www.amazon.com/HyperX-Cloud-Gaming-Headset-KHX-HSCP-RD/dp/B00SAYCXWG/ref=sr_1_35?qid=1652872878&rnid=541966&s=electronics&sr=1-35&th=1"
		},
		{
			name: "SAMSUNG Galaxy A53 5G A Series Smartphone",
			img: "https://m.media-amazon.com/images/I/71HN4P-pd5L._AC_SX466_.jpg",
			link: "https://www.amazon.com/SAMSUNG-Smartphone-Factory-Unlocked-Android/dp/B09R6FJWWS/ref=sr_1_49?qid=1652970581&s=electronics&sr=1-49&th=1"
		},
		{
			name: "Acer A515-46-R3CZ Professional Laptop",
			img: "https://m.media-amazon.com/images/I/71FoZZ2mGtL._AC_SX466_.jpg",
			link: "https://www.amazon.com/Acer-A515-46-R3UB-Display-Quad-Core-Processor/dp/B09JPK5VJR/ref=sr_1_50?qid=1652970581&s=electronics&sr=1-50&th=1"
		},
		{
			name: "Logitech G920 Driving Force Racing Wheel and Floor Pedals",
			img: "https://m.media-amazon.com/images/I/61O7HHu181L._AC_SX466_.jpg",
			link: "https://www.amazon.com/Logitech-Dual-Motor-Feedback-Driving-Responsive/dp/B00Z0UWV98/ref=sr_1_1?crid=2AXBSR7LHP5N3&keywords=steering+wheel&qid=1652970759&refinements=p_36%3A1253507011&rnid=386442011&s=electronics&sprefix=steering+whe%2Celectronics-intl-ship%2C204&sr=1-1"
		}
	], //tech
	[
		{	
			name: "Foldable Free Standing PullUp Bar Stand Sturdy PowerTower Workout Station",
			img: "https://m.media-amazon.com/images/I/61XbtVEuC5L._AC_SL1232_.jpg",
			link: "https://www.amazon.com/KT-Foldable-Adjustable-Equipment-Multifunctional/dp/B07H25C9XR/ref=sr_1_1?keywords=work+from+home+fitness&pd_rd_r=1d94f488-3841-4716-88d8-046dc8e7403b&pd_rd_w=R6HeM&pd_rd_wg=O5WNG&pf_rd_p=d6dae0b5-d3cf-4be0-8934-83385f36bcc9&pf_rd_r=V62TKQXNT0WFPXKXX488&qid=1652881359&sr=8-1"
		},
		{	
			name: "Foldable Manual Walking Treadmill",
			img: "https://m.media-amazon.com/images/I/71WrzY1JpTS._AC_SL1500_.jpg",
			link: "https://www.amazon.com/Sunny-Health-Fitness-SF-T1407M-Treadmill/dp/B00QIM5CMK/ref=sr_1_6?keywords=work+from+home+fitness&pd_rd_r=1d94f488-3841-4716-88d8-046dc8e7403b&pd_rd_w=R6HeM&pd_rd_wg=O5WNG&pf_rd_p=d6dae0b5-d3cf-4be0-8934-83385f36bcc9&pf_rd_r=V62TKQXNT0WFPXKXX488&qid=1652881359&sr=8-6"
		},
		{	
			name: "Resistance Band 11PC Fitness Exercise Workout from Home Set",
			img: "https://m.media-amazon.com/images/I/71+hji+OIlL._AC_SL1500_.jpg",
			link: "https://www.amazon.com/Resistance-Band-Fitness-Exercise-Workout/dp/B00R4UO852/ref=sr_1_10?keywords=work+from+home+fitness&pd_rd_r=1d94f488-3841-4716-88d8-046dc8e7403b&pd_rd_w=R6HeM&pd_rd_wg=O5WNG&pf_rd_p=d6dae0b5-d3cf-4be0-8934-83385f36bcc9&pf_rd_r=V62TKQXNT0WFPXKXX488&qid=1652881359&sr=8-10"
		},
		{	
			name: "Bowflex SelectTech 552 Adjustable Dumbbell",
			img: "https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_SX679_.jpg",
			link: "https://www.amazon.com/Bowflex-SelectTech-Adjustable-Dumbbells-Pair/dp/B001ARYU58/ref=sr_1_8?keywords=work+from+home+fitness&pd_rd_r=d3e75fd1-08fc-4bf1-909a-8a6a667becdd&pd_rd_w=PlFq5&pd_rd_wg=GpbwW&pf_rd_p=d6dae0b5-d3cf-4be0-8934-83385f36bcc9&pf_rd_r=CP4VG3FKYR0HD7H218VF&qid=1652970856&refinements=p_36%3A10000-&rnid=386589011&s=sporting-goods&sr=1-8"
		},
		{	
			name: "Fitness Reality Squat Rack Power Cage with J-Hooks",
			img: "https://m.media-amazon.com/images/I/71BUFKcBoRL._AC_SX679_.jpg",
			link: "https://www.amazon.com/Fitness-Reality-Multi-Function-Adjustable-Power/dp/B08LFZGBQ4/ref=sr_1_11?keywords=work+from+home+fitness&pd_rd_r=d3e75fd1-08fc-4bf1-909a-8a6a667becdd&pd_rd_w=PlFq5&pd_rd_wg=GpbwW&pf_rd_p=d6dae0b5-d3cf-4be0-8934-83385f36bcc9&pf_rd_r=CP4VG3FKYR0HD7H218VF&qid=1652970856&refinements=p_36%3A10000-&rnid=386589011&s=sporting-goods&sr=1-11"
		},
		{	
			name: "Exercise Bike Indoor Cycling Bike Fitness Stationary",
			img: "https://m.media-amazon.com/images/I/71WA3gidcyL._AC_SX679_.jpg",
			link: "https://www.amazon.com/RELIFE-REBUILD-YOUR-LIFE-All-inclusive/dp/B081YRWCTV/ref=sr_1_57?keywords=work+from+home+fitness&pd_rd_r=d3e75fd1-08fc-4bf1-909a-8a6a667becdd&pd_rd_w=PlFq5&pd_rd_wg=GpbwW&pf_rd_p=d6dae0b5-d3cf-4be0-8934-83385f36bcc9&pf_rd_r=CP4VG3FKYR0HD7H218VF&qid=1652971381&refinements=p_36%3A10000-&rnid=386589011&s=sporting-goods&sr=1-57"
		}

	], //workout
	[
		{	
			name: "Double Pet Bowls Dog Food Water Feeder",
			img: "https://m.media-amazon.com/images/I/41v5WIDOsqS._AC_SL1001_.jpg",
			link: "https://www.amazon.com/dp/B0B1MDS9XR/ref=sr_1_1?crid=3IF5TSVMY5YRB&keywords=pet+supplies&pd_rd_r=1d94f488-3841-4716-88d8-046dc8e7403b&pd_rd_w=WK9zU&pd_rd_wg=O5WNG&pf_rd_p=79c53563-a88d-4c11-8a2d-5dd0d5cc9901&pf_rd_r=V62TKQXNT0WFPXKXX488&qid=1652881572&sprefix=pet+sup%2Caps%2C268&sr=8-1"
		},
		{	
			name: "Plush Dog Beds for Small Medium Dog",
			img: "https://m.media-amazon.com/images/I/51C+GGdCjOL._AC_SL1024_.jpg",
			link: "https://www.amazon.com/SCDZS-Supplies-Accessoires-Products-Animals/dp/B0B1DH5NYL/ref=sr_1_44?crid=3IF5TSVMY5YRB&keywords=pet+supplies&pd_rd_r=1d94f488-3841-4716-88d8-046dc8e7403b&pd_rd_w=WK9zU&pd_rd_wg=O5WNG&pf_rd_p=79c53563-a88d-4c11-8a2d-5dd0d5cc9901&pf_rd_r=V62TKQXNT0WFPXKXX488&qid=1652881572&sprefix=pet+sup%2Caps%2C268&sr=8-44"			
		},
		{	
			name: "Modern Pet Bathing Tool Comfortable Massager",
			img: "https://m.media-amazon.com/images/I/518g3R8+V6L._AC_SX466_.jpg",
			link: "https://www.amazon.com/Comfortable-Massager-Cleaning-Sprayers-Supplies/dp/B0B1BZM2X4/ref=sr_1_46?crid=3IF5TSVMY5YRB&keywords=pet+supplies&pd_rd_r=1d94f488-3841-4716-88d8-046dc8e7403b&pd_rd_w=WK9zU&pd_rd_wg=O5WNG&pf_rd_p=79c53563-a88d-4c11-8a2d-5dd0d5cc9901&pf_rd_r=V62TKQXNT0WFPXKXX488&qid=1652881572&sprefix=pet+sup%2Caps%2C268&sr=8-46"
		},
		{	
			name: "Backpack Pet Travel Portable",
			img: "https://m.media-amazon.com/images/I/61zDusizFwL._AC_SX679_.jpg",
			link: "https://www.amazon.com/zxcvbn-Backpack-Portable-Foldable-Dissipation/dp/B0B1LX98QD/ref=sr_1_6?crid=3IF5TSVMY5YRB&keywords=pet%2Bsupplies&pd_rd_r=cbf9d61b-23b3-461c-b3bb-ddbfa4bb52c7&pd_rd_w=DfFcD&pd_rd_wg=2uqj2&pf_rd_p=79c53563-a88d-4c11-8a2d-5dd0d5cc9901&pf_rd_r=06VJ108VTS0BB0HADYF8&qid=1652971533&refinements=p_36%3A5000-&rnid=2661611011&sprefix=pet%2Bsup%2Caps%2C268&sr=8-6&th=1"
		},
		{	
			name: "Lightweight Pet Water Bottle Feeder",
			img: "https://m.media-amazon.com/images/I/41QffvGcOTL._AC_SL1024_.jpg",
			link: "https://www.amazon.com/GPPZM-Lightweight-Drinking-Dispenser-Material/dp/B0B1B1THZ2/ref=sr_1_27?crid=3IF5TSVMY5YRB&keywords=pet%2Bsupplies&pd_rd_r=cbf9d61b-23b3-461c-b3bb-ddbfa4bb52c7&pd_rd_w=DfFcD&pd_rd_wg=2uqj2&pf_rd_p=79c53563-a88d-4c11-8a2d-5dd0d5cc9901&pf_rd_r=06VJ108VTS0BB0HADYF8&qid=1652971533&refinements=p_36%3A5000-&rnid=2661611011&sprefix=pet%2Bsup%2Caps%2C268&sr=8-27&th=1"
		},
		{	
			name: "Pet Playpen Portable Indoor Metal Wire",
			img: "https://m.media-amazon.com/images/I/719jiWihr0L._AC_SX679_.jpg",
			link: "https://www.amazon.com/Playpen-2-Layer-Portable-Assemble-Supplies/dp/B09YV2LTX8/ref=sr_1_104?crid=3IF5TSVMY5YRB&keywords=pet+supplies&pd_rd_r=cbf9d61b-23b3-461c-b3bb-ddbfa4bb52c7&pd_rd_w=DfFcD&pd_rd_wg=2uqj2&pf_rd_p=79c53563-a88d-4c11-8a2d-5dd0d5cc9901&pf_rd_r=06VJ108VTS0BB0HADYF8&qid=1652971710&refinements=p_36%3A4000-&rnid=2661611011&sprefix=pet+sup%2Caps%2C268&sr=8-104"
		}
	] //pets
]

