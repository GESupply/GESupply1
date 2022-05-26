

var objects = [
	[
		{	
			name: "Samsung Galaxy A22 5G",
			img: "https://m.media-amazon.com/images/I/71K0mKapWyS._AC_SX679_.jpg",
			link: "https://amzn.to/3NuKqsv",
			price: "205.00",
			txt: ""
		},
		{
			name: "Samsung Galaxy A12 Black, 64GB, 4 GB",
			img: "https://m.media-amazon.com/images/I/819stUwa7RL._AC_SX679_.jpg",
			link: "https://amzn.to/3NqcEEK",
			price: "169.99",
			txt: ""
		},
		{
			name: "Xiaomi Redmi Note 10 Pro",
			img: "https://m.media-amazon.com/images/I/51HAPlM7auL._AC_SX679_.jpg",
			link: "https://amzn.to/3LrUdhz",
			price: "269.99",
			txt: ""
		},
		{
			name: "Xiaomi Redmi Note 11 Pro",
			img: "https://m.media-amazon.com/images/I/51MZ60K4gzL._AC_SX569_.jpg",
			link: "https://amzn.to/3yUJv0t",
			price: "289.99",
			txt: ""
		},
		{
			name: "Poco M4 PRO 4G",
			img: "https://m.media-amazon.com/images/I/51p30bB-SkL._AC_SX679_.jpg",
			link: "https://amzn.to/3G2JTLL",
			price: "261.00",
			txt: ""
		},
		{
			name: "Poco X4 Pro 5G, 128GB, 6GB ",
			img: "https://m.media-amazon.com/images/I/51s0ZlhE9UL._AC_SX679_.jpg",
			link: "https://amzn.to/3LrVmFT",
			price: "308.00",
			txt: ""
		},
		{
			name: "Huawei nova 9 SE, 128GB, 8GB",
			img: "https://m.media-amazon.com/images/I/51BbBrflLVL._AC_SX679_.jpg",
			link: "https://amzn.to/3wxfz92",
			price: "397.00",
			txt: ""
		},
		{
			name: "Huawei P30, 128GB, 6GB",
			img: "https://m.media-amazon.com/images/I/61jJeZBliWL._AC_SX466_.jpg",
			link: "https://amzn.to/3lv2TJo",
			price: "526.88",
			txt: ""
		}
	], // Phone
	[
		{
			name: "Acer swift 3",
			img: "https://m.media-amazon.com/images/I/618GEuHt8ML._AC_SX679_.jpg",
			link: "https://amzn.to/3NrKTvj",
			price: "679.99",
			txt: ""
		},
		{
			name: "Acer Spin 5",
			img: "https://m.media-amazon.com/images/I/61LHj2XV1wL._AC_SX425_.jpg",
			link: "https://amzn.to/3Pz0Q4P",
			price: "938.68",
			txt: ""
		},
		{
			name: "Acer Aspire 5",
			img: "https://m.media-amazon.com/images/I/71MSptSmTCL._AC_SX569_.jpg",
			link: "https://amzn.to/3wGOuyT",
			price: "699.99",
			txt: ""
		},
		{
			name: "Lenovo Ideapad 3",
			img: "https://m.media-amazon.com/images/I/71eLIuDmIgL._AC_SX466_.jpg",
			link: "https://amzn.to/3LNKW3D",
			price: "524.97",
			txt: ""
		},
		{
			name: "Lenovo e15 Professional Laptop ",
			img: "https://m.media-amazon.com/images/I/61oWqHJmifL._AC_SX569_.jpg",
			link: "https://amzn.to/3sKNbh5",
			price: "739.99",
			txt: ""
		},
		{
			name: "Lenovo Legion 5 15 Gaming Laptop",
			img: "https://m.media-amazon.com/images/I/81PbOX7ZtaL._AC_SX466_.jpg",
			link: "https://amzn.to/38HB3Xx",
			price: "1192.32",
			txt: ""
		},
		{
			name: "ASUS VivoBook Flip 14",
			img: "https://m.media-amazon.com/images/I/716uKzhnAvL._AC_SX466_.jpg",
			link: "https://amzn.to/3MCW4Bh	",
			price: "",
			txt: "901.03"
		},
		{
			name: "ASUS ExpertBook",
			img: "https://m.media-amazon.com/images/I/71sP1m34-1L._AC_SX466_.jpg",
			link: "https://amzn.to/3yY1keK",
			price: "486.66",
			txt: ""
		}
	], // Laptops
	[
		{
			name: "Magnetic Phone Holder for Car",
			img: "https://m.media-amazon.com/images/I/71kHoyNmj0L._AC_SX569_.jpg",
			link: "https://amzn.to/3NwJ0NS",
			price: "10.75",
			txt: ""
		},
		{
			name: "Vehicle Rear View Mirror Phone Holder",
			img: "https://m.media-amazon.com/images/I/71bopOOBhIL._AC_SX679_.jpg",
			link: "https://amzn.to/3NFwrQK",
			price: "9.99",
			txt: ""
		},
		{
			name: "Car Cup Holder Phone Mount",
			img: "https://m.media-amazon.com/images/I/61ykL1utbBL._AC_SX679_.jpg",
			link: "https://amzn.to/3wS31YM",
			price: "22.99",
			txt: ""
		},
		{
			name: "Car Phone Holder Mount",
			img: "https://m.media-amazon.com/images/I/71kyVH7yC8L._AC_SX679_.jpg",
			link: "https://amzn.to/3lN2AcW",
			price: "9.20",
			txt: ""
		},
		{
			name: "Portable Steering Wheel Phone Holder",
			img: "https://m.media-amazon.com/images/I/51DVRMcBQwL._AC_.jpg",
			link: "https://amzn.to/3wOgqCh",
			price: "1.88",
			txt: ""
		},
		{
			name: "LED Ring Light Kit",
			img: "https://m.media-amazon.com/images/I/61lQWcbaw7L._AC_SX466_.jpg",
			link: "https://amzn.to/3sXbybQ",
			price: "189.00",
			txt: ""
		},
		{
			name: "JBL Flip 4 Bluetooth Speaker",
			img: "https://m.media-amazon.com/images/I/61d5F64UDpL._AC_SX466_.jpg",
			link: "https://amzn.to/3x9OFTR",
			price: "84.95",
			txt: ""
		},
		{
			name: "Sony Bluetooth Portable Speaker",
			img: "https://m.media-amazon.com/images/I/81NfNapLYxL._AC_SX679_.jpg",
			link: "https://amzn.to/3PCFFyV",
			price: "128.00",
			txt: ""
		},
		{
			name: "Sony On-Ear Headphones",
			img: "https://m.media-amazon.com/images/I/416mZ6bkTyL._AC_SX679_.jpg",
			link: "https://amzn.to/3yXr1fJ",
			price: "19.99",
			txt: ""
		},
		{
			name: "Skullcandy Crusher Wireless Over-Ear Headphones",
			img: "https://m.media-amazon.com/images/I/71QbbvhjDcL._AC_SX679_.jpg",
			link: "https://amzn.to/3NFnfvl",
			price: "53.99",
			txt: ""
		},
		{
			name: "",
			img: "",
			link: "",
			price: "",
			txt: ""
		}
	], // Phone acc
	[
		{
			name: "Adjustable Laptop Stand",
			img: "https://m.media-amazon.com/images/I/61KhwXu0z4L._AC_SX466_.jpg",
			link: "https://amzn.to/3ad1zs8",
			price: "69.99",
			txt: ""
		},
		{
			name: "Lap Desk",
			img: "https://m.media-amazon.com/images/I/81uMy2bv84L._AC_SX466_.jpg",
			link: "https://amzn.to/3yWBtnx",
			price: "64.17",
			txt: ""
		},
		{
			name: "17.3 Inch Sleeve Bag",
			img: "https://m.media-amazon.com/images/I/41HAJbWINHL._AC_SX466_.jpg",
			link: "https://amzn.to/38RRT5Z",
			price: "10.99",
			txt: ""
		},
		{
			name: "LED Adjustable Speed Control Cooling Pad",
			img: "https://m.media-amazon.com/images/I/919B55ca9bL._AC_SX466_.jpg",
			link: "https://amzn.to/3PFI9wm",
			price: "44.22",
			txt: ""
		},
		{
			name: "USB Powered Stereo Speaker System",
			img: "https://m.media-amazon.com/images/I/81DYmH9mLsL._AC_SX466_.jpg",
			link: "https://amzn.to/38K5xZa",
			price: "15.11",
			txt: ""
		},
		{
			name: "SanDisk 128GB",
			img: "https://m.media-amazon.com/images/I/61TuPtmTScL._AC_SX466_.jpg",
			link: "https://amzn.to/3NyoU60",
			price: "24.21",
			txt: ""
		},
		{
			name: "",
			img: "",
			link: "",
			price: "",
			txt: ""
		},
		{
			name: "",
			img: "",
			link: "",
			price: "",
			txt: ""
		}
	] // Computer acc
]



/*

{
	name: "",
	img: "",
	link: "",
	price: "",
	txt: ""
}


*/