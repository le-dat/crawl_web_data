const productData = [
  {
    "id": 0,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-liclgz4vqcjw80_tn",
    "name": "[Giá dùng thử] Bánh sô cô la mix 8 vị siêu ngon Figo, đồ ăn vặt hot nội địa việt nam",
    "originPrice": "₫30.000",
    "price": "4.750",
    "sellNumber": "Đã bán 4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 1,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-liclgzh38hxu69_tn",
    "name": "Chai gấu Bearbrick đựng trà sữa 500ml Bếp Chè Thái",
    "originPrice": "₫29.000",
    "price": "11.400",
    "sellNumber": "Đã bán 3,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 2,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-liclh1opzys267_tn",
    "name": "[DÙNG THỬ] COMBO CÁC SẢN PHẨM MIX NHIỀU VỊ DARK CHOCOLATE MILK CHOCOLATE FIGO",
    "originPrice": "₫7.000",
    "price": "15.000",
    "sellNumber": "Đã bán 6,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 3,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-l18fijehoriv8b_tn",
    "name": "Bánh đài loan cao cấp tự mix theo sở thích 25-44 vị Bếp của mẹ Onici",
    "originPrice": "₫13.500",
    "price": "4.750",
    "sellNumber": "Đã bán 1,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 4,
    "image": null,
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Hộp 6 gói Rong biển TaoKaeNoi BIG ROLL (3g)",
    "originPrice": "₫21.000",
    "price": "23.750",
    "sellNumber": "Đã bán 16,5k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 5,
    "image": null,
    "name": "[Mã TTGIAM60K giảm đến 60K đơn 50K] (Xâu 10/túi) Bánh tráng sa tế tắc đặc biệt cực ngon bánh tráng Ngọc Trinh",
    "originPrice": "₫11.500",
    "price": "10.800",
    "sellNumber": "Đã bán 5,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 6,
    "image": null,
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] 1 GÓI 3 Miếng Cơm Cháy Chiên Mắm Hành Ớt Giòn Cay loại 1 thương hiệu Mlem Food.",
    "originPrice": "₫99.000",
    "price": "18.000",
    "sellNumber": "Đã bán 72,5k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 7,
    "image": null,
    "name": "[GIÁ DÙNG THỬ] Bar 20g Combo Dark Chocolate ( Kẹo socola đen đắng ) 5 vị 5 loại tự chọn, ĐỒ ĂN VẶT NỘI ĐỊA GIẢM CÂN FIGO",
    "originPrice": "₫34.000",
    "price": "25.000",
    "sellNumber": "Đã bán 7,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 8,
    "image": null,
    "name": "Mì Trộn Phô Mai Ottogi Mini 75g",
    "originPrice": "₫36.000",
    "price": "39.000",
    "sellNumber": "Đã bán 3,9k",
    "location": "Hà Nội"
  },
  {
    "id": 9,
    "image": null,
    "name": "[Mã INBAU15 giảm 15K đơn 99K] Set Nguyên Liệu Trà Sữa Trân Châu 12-15 Ly Trà Thái Xanh, Đỏ, Phúc Long NHALAM FOOD",
    "originPrice": "₫24.000",
    "price": "24.650",
    "sellNumber": "Đã bán 49,1k",
    "location": "Hà Nội"
  },
  {
    "id": 10,
    "image": null,
    "name": "[Mã TTGIAM60K giảm đến 60K đơn 50K] (Xâu 13/túi) Bánh tráng sa tế muối cực ngon bánh tráng Ngọc Trinh",
    "originPrice": "₫2.185.000",
    "price": "5.900",
    "sellNumber": "Đã bán 3,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 11,
    "image": null,
    "name": "Trà gạo lứt Quê Việt thanh lọc gan, giải độc cơ thể nguyên liệu tự nhiên an toàn 30gr",
    "originPrice": "₫27.500",
    "price": "22.000",
    "sellNumber": "Đã bán 4,1k",
    "location": "Vĩnh Phúc"
  },
  {
    "id": 12,
    "image": null,
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Trà thanh lọc cơ thể, tốt cho sức khỏe Camifarm",
    "originPrice": "₫400.000",
    "price": "25.000",
    "sellNumber": "Đã bán 1,4k",
    "location": "Hà Nội"
  },
  {
    "id": 13,
    "image": null,
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Ngũ Cốc Tăng Cân Hiệu Quả Cao Cấp 25 Loại hạt NAKUSO (500Gr)",
    "originPrice": "₫55.000",
    "price": "10.500",
    "sellNumber": "Đã bán 14,2k",
    "location": "Đà Nẵng"
  },
  {
    "id": 14,
    "image": null,
    "name": "500G Bánh tráng siêu to 6 vị nhà Robis, Lẩu thái, phô mai, trứng muối, hành phi, muối tỏi, rong biển. 500G ăn thỏa thích",
    "originPrice": "₫280.000",
    "price": "29.000",
    "sellNumber": "Đã bán 2,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 15,
    "image": null,
    "name": "Kẹo hương dâu tây L'angfarm, 350g, bịch, mẫu kraft 1 mặt trong",
    "originPrice": "₫29.000",
    "price": "99.000",
    "sellNumber": "Đã bán 2,7k",
    "location": "Lâm Đồng"
  },
  {
    "id": 16,
    "image": null,
    "name": "Tokbokki Hàn Quốc O'food ăn liền hộp 105g",
    "originPrice": "₫150.000",
    "price": "17.850",
    "sellNumber": "Đã bán 10,9k",
    "location": "Hà Nội"
  },
  {
    "id": 17,
    "image": null,
    "name": "Rong biển giòn trộn gia vị OFood 30g, vị ngọt vừa ăn, trộn cơm, cháo tiện lợi, ngon miệng",
    "originPrice": "₫9.000",
    "price": "9.500",
    "sellNumber": "Đã bán 14,2k",
    "location": "Hà Nội"
  },
  {
    "id": 18,
    "image": null,
    "name": "Sốt tokbokki / tokpokki Hàn Quốc O'Food 120g, vị truyền thống và phô mai",
    "originPrice": "₫40.000",
    "price": "2.850",
    "sellNumber": "Đã bán 26,3k",
    "location": "Hà Nội"
  },
  {
    "id": 19,
    "image": null,
    "name": "Thùng 24 chai Sữa nước Ensure Abbott 237ml/chai",
    "originPrice": "₫230.000",
    "price": "5.500",
    "sellNumber": "Đã bán 40,7k",
    "location": "Bắc Ninh"
  },
  {
    "id": 20,
    "image": null,
    "name": "Bánh OREO Pie vị dâu, combo 2 hộp x 360g (Tặng kèm 4 thẻ hình BLACKPINK)",
    "originPrice": "₫445.000",
    "price": "150.000",
    "sellNumber": "Đã bán 4,6k",
    "location": ""
  },
  {
    "id": 21,
    "image": null,
    "name": "Set nguyên liệu tự pha trà sữa Phúc Long thơm ngon chuẩn vị - MINASY",
    "originPrice": "₫75.000",
    "price": "155.000",
    "sellNumber": "Đã bán 4,9k",
    "location": "Hà Nội"
  },
  {
    "id": 22,
    "image": null,
    "name": "Trà sữa trân châu Tearoma truyền thống (Hộp 5 ly/ 250g, 5 gói trà sữa x 22g, 5 gói trân châu x 28 g)",
    "originPrice": "₫1.482.000",
    "price": "79.000",
    "sellNumber": "Đã bán 13,7k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 23,
    "image": null,
    "name": "Patê Cột Đèn Hải Phòng 150G Đồ Hộp Hạ Long",
    "originPrice": "₫24.000",
    "price": "31.000",
    "sellNumber": "Đã bán 39,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 24,
    "image": null,
    "name": "Hạt Macca Úc Nứt Vỏ Hộp Kèm Đồ Khui Va'sEco Farm",
    "originPrice": "₫200.000",
    "price": "30.000",
    "sellNumber": "Đã bán 8,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 25,
    "image": "https://down-vn.img.susercontent.com/file/8b52f9845f77da3b5d715d4561310551_tn",
    "name": "Thùng 48 hộp sữa nước Nestle Milo 180ml/ hộp",
    "originPrice": "₫68.000",
    "price": "32.000",
    "sellNumber": "Đã bán 46,7k",
    "location": "Bắc Ninh"
  },
  {
    "id": 26,
    "image": "https://down-vn.img.susercontent.com/file/ac18a582f5e4937dc102a9c83094dfb4_tn",
    "name": "Kẹo cứng Alpenliebe nhiều hương (Gói to)",
    "originPrice": "₫15.000",
    "price": "22.000",
    "sellNumber": "Đã bán 2,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 27,
    "image": "https://down-vn.img.susercontent.com/file/05bee66c95df970298589b065cd649c2_tn",
    "name": "Thùng 24 bịch sữa Uống Dutch Lady Cô Gái Hà Lan Có Đường Cao Khỏe (24X180ml)",
    "originPrice": "",
    "price": "899.000",
    "sellNumber": "Đã bán 4,3k",
    "location": "Bắc Ninh"
  },
  {
    "id": 28,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-3pr0tidwfmkv01_tn",
    "name": "BimBim Que Đậu Hà Lan VIETTINMART 500G",
    "originPrice": "",
    "price": "142.000",
    "sellNumber": "Đã bán 11,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 29,
    "image": null,
    "name": "Dầu Đậu Nành Simply 2L",
    "originPrice": "",
    "price": "38.000",
    "sellNumber": "Đã bán 154",
    "location": "Hà Nội"
  },
  {
    "id": 30,
    "image": null,
    "name": "Thùng 24 Chai Nước Giải Khát Revive (500ml/chai)",
    "originPrice": "",
    "price": "89.000",
    "sellNumber": "Đã bán 654",
    "location": ""
  },
  {
    "id": 31,
    "image": "https://down-vn.img.susercontent.com/file/5d8c4c4e9c96fb6536c6ba66baeafc1f_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] [HCM] Bánh Yến mạch Richy túi 220-250g Mini Bite (Sữa/Phô Mai)",
    "originPrice": "",
    "price": "45.000",
    "sellNumber": "Đã bán 19,5k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 32,
    "image": "https://down-vn.img.susercontent.com/file/71f6e917c5ebf9f2df57ee3e96fbc988_tn",
    "name": "Kẹo dẻo nhân trái cây Alpenliebe Jelly Biển xanh long lanh",
    "originPrice": "",
    "price": "26.200",
    "sellNumber": "Đã bán 1,2k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 33,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22090-cictmswe43hv8f_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Trà Hòa tan Cozy Ice Tea các vị (Hộp 16 gói x 15gr)",
    "originPrice": "",
    "price": "50.000",
    "sellNumber": "Đã bán 2,4k",
    "location": "Hà Nội"
  },
  {
    "id": 34,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhjw0x2urszpc2_tn",
    "name": "Trân châu cầu vồng nguyên liệu trà sữa Bếp Của Mẹ ONICI gói 500g",
    "originPrice": "",
    "price": "230.000",
    "sellNumber": "Đã bán 4,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 35,
    "image": "https://down-vn.img.susercontent.com/file/f8a18d33c7d8cd2e92c0d768f1d775db_tn",
    "name": "Rong biển / lá kim cuốn cơm Hàn Quốc O'food 10g, sử dụng cho các món kimbap, sushi",
    "originPrice": "",
    "price": "360.000",
    "sellNumber": "Đã bán 8,2k",
    "location": "Hà Nội"
  },
  {
    "id": 36,
    "image": "https://down-vn.img.susercontent.com/file/ad58227b8336087e1c128b7f58a4d8c6_tn",
    "name": "[Deal Quà] Ngũ Cốc Granola Giảm Cân Ăn Kiêng Mix Sữa Chua Sấy Khô Siêu Ngon Befresco (300G)",
    "originPrice": "",
    "price": "32.000",
    "sellNumber": "Đã bán 1,5k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 37,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgojf1itsoojbc_tn",
    "name": "Mì Tương Đen Bắc Kinh Ottogi 83g",
    "originPrice": "",
    "price": "35.000",
    "sellNumber": "Đã bán 4,6k",
    "location": "Hà Nội"
  },
  {
    "id": 38,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-r88s9ky4h8mv93_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Nước rau câu Long Hải 95g/cốc đóng vỉ 05 cốc",
    "originPrice": "",
    "price": "300.000",
    "sellNumber": "Đã bán 1,1k",
    "location": "Hà Nội"
  },
  {
    "id": 39,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfi563rmiikk43_tn",
    "name": "Hạt bí xanh Ấn Độ tách vỏ sấy chín Va'sEco Farm",
    "originPrice": "",
    "price": "33.000",
    "sellNumber": "Đã bán 910",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 40,
    "image": "https://down-vn.img.susercontent.com/file/7445587c0250c45bb92063cc161b900a_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Snack rong biển TaoKaeNoi BIG ROLL 3g (12 gói)",
    "originPrice": "",
    "price": "140.000",
    "sellNumber": "Đã bán 6,5k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 41,
    "image": "https://down-vn.img.susercontent.com/file/1848ce9f50117beb69359fd7d1ab3836_tn",
    "name": "1 Xâu Khô Cá Bò Rim Sate Ép Miếng Viettin Mart 80g",
    "originPrice": "",
    "price": "185.000",
    "sellNumber": "Đã bán 2,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 42,
    "image": "https://down-vn.img.susercontent.com/file/bde3d1be949adb4e0af0ae2866ccc6df_tn",
    "name": "Bánh Pía Kim sa Dứa Tân Huê Viên",
    "originPrice": "",
    "price": "25.000",
    "sellNumber": "Đã bán 1,4k",
    "location": "Sóc Trăng"
  },
  {
    "id": 43,
    "image": "https://down-vn.img.susercontent.com/file/a265bdde765433508e9afbc01fd7e3cf_tn",
    "name": "Bánh mix Đài Loan nhiều loại Bếp Của Mẹ ONICI loại 500gr-1000gr",
    "originPrice": "",
    "price": "18.000",
    "sellNumber": "Đã bán 2,8k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 44,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lii9s419eoloab_tn",
    "name": "Trà gạo lứt Quê Việt thanh lọc gan, giải độc cơ thể nguyên liệu tự nhiên an toàn 600gr",
    "originPrice": "",
    "price": "27.000",
    "sellNumber": "Đã bán 37,7k",
    "location": "Vĩnh Phúc"
  },
  {
    "id": 45,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liinof7k711o0e_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Dầu Đậu Nành cao cấp Golden 5 lít",
    "originPrice": "",
    "price": "35.000",
    "sellNumber": "Đã bán 1,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 46,
    "image": "https://down-vn.img.susercontent.com/file/a6f4352c45f414267a1e7f89460338f0_tn",
    "name": "Trân châu trắng, đen nguyên liệu trà sữa Bếp Của Mẹ ONIC 100g,500g,1000g",
    "originPrice": "",
    "price": "50.000",
    "sellNumber": "Đã bán 19,6k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 47,
    "image": "https://down-vn.img.susercontent.com/file/075ec9856f4f8c09f45a2c28595216f4_tn",
    "name": "[GROFFWC -10% max 30k đơn 170k] Lốc 24 Lon Nước Giải Khát Không Đường Coca-Cola Zero 320mlx24",
    "originPrice": "",
    "price": "26.000",
    "sellNumber": "Đã bán 880",
    "location": "Bắc Ninh"
  },
  {
    "id": 48,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhzvxy2gwpl1f6_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Trà sữa Cozy Matcha 3 in 1 (16 gói x 15gr) - Nước giải khát tiện lợi",
    "originPrice": "",
    "price": "99.000",
    "sellNumber": "Đã bán 529",
    "location": "Hà Nội"
  },
  {
    "id": 49,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-sifkjjgyoojvee_tn",
    "name": "Khoai Tây Que Phô Mai Viettin Mart 500G",
    "originPrice": "",
    "price": "7.800",
    "sellNumber": "Đã bán 10,8k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 50,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-s7t43ujah2iv4e_tn",
    "name": "[GROFFWC -10% max 30k đơn 170k] Lốc 24 Lon Nước Tăng Lực Monster Energy (355ml x 24)",
    "originPrice": "",
    "price": "10.000",
    "sellNumber": "Đã bán 980",
    "location": "Bắc Ninh"
  },
  {
    "id": 51,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qvdv-ligh8wm9eebb26_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Bánh gạo lứt chà bông, thanh gạo lứt vị chà bông 500Gr - ăn kiêng, giảm cân, healthy",
    "originPrice": "",
    "price": "35.000",
    "sellNumber": "Đã bán 1,4k",
    "location": "Hà Nội"
  },
  {
    "id": 52,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limiv8cim4sye0_tn",
    "name": "Thùng 24 chai Ensure Vigor HMB 237ml/chai phiên bản mới",
    "originPrice": "",
    "price": "149.000",
    "sellNumber": "Đã bán 19k",
    "location": "Bắc Ninh"
  },
  {
    "id": 53,
    "image": "https://down-vn.img.susercontent.com/file/49929e694d210a181bbad08bebc5c3cb_tn",
    "name": "Sốt gà chiên 2 vị cay và phô mai O'food gói 120g",
    "originPrice": "",
    "price": "53.000",
    "sellNumber": "Đã bán 9,6k",
    "location": "Hà Nội"
  },
  {
    "id": 54,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lik9qh5cuhg2ec_tn",
    "name": "Bột Ngũ Cốc Giảm Cân HENA 500g Tinh Chế Cao Cấp, Ngũ Cốc Ăn Kiêng Giảm Cân An Toàn Hiệu Quả Chuẩn ISO 22000",
    "originPrice": "",
    "price": "78.000",
    "sellNumber": "Đã bán 2,9k",
    "location": "Hà Nội"
  },
  {
    "id": 55,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li2v8sy1dtsc0e_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Bánh que Toppo nhân sô cô la hương Vani 132 g (gói)",
    "originPrice": "",
    "price": "20.600",
    "sellNumber": "Đã bán 1,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 56,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhr5mgd79imd36_tn",
    "name": "[Mẫu thử] Trà Long Nhãn, Táo Đỏ, Kỳ Tử Dưỡng Tâm Mộc Sắc (1 gói) - Siêu thị thiên nhiên",
    "originPrice": "",
    "price": "99.000",
    "sellNumber": "Đã bán 19,1k",
    "location": "Hà Nội"
  }
];

module.exports = productData;