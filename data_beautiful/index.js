const productData = [
  {
    "id": 0,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limwvws7b4r6f3_tn",
    "name": "Son bóng CAPPUVINI hiệu ứng gương lâu trôi dưỡng ẩm 3g",
    "originPrice": "₫32.000",
    "price": "19.000",
    "sellNumber": "Đã bán 10,2k",
    "location": "Nước ngoài"
  },
  {
    "id": 1,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limvhdmj2ok26c_tn",
    "name": "Bút Kẻ mắt đen LAMEILA eyeliner chống nước nhanh khô bền vững 2ml",
    "originPrice": "₫9.000",
    "price": "6.000",
    "sellNumber": "Đã bán 117k",
    "location": "Nước ngoài"
  },
  {
    "id": 2,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limwa42zmfo228_tn",
    "name": "Son kem Derf tông màu hổ phách chống dính lâu trôi cao cấp 3g",
    "originPrice": "₫48.000",
    "price": "24.000",
    "sellNumber": "Đã bán 4,4k",
    "location": "Nước ngoài"
  },
  {
    "id": 3,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limui05wqy8iec_tn",
    "name": "Son Kem Lì Bbia Last Velvet Lip Tint Version 5 (5 màu) 5g Bbia Official Store",
    "originPrice": "₫290.000",
    "price": "145.000",
    "sellNumber": "Đã bán 185,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 4,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limucopz6axe3a_tn",
    "name": "Gel rửa mặt Cosrx Good Morning 150ml/50ml chiết xuất trà xanh độ ph thấp",
    "originPrice": "₫109.000",
    "price": "85.000",
    "sellNumber": "Đã bán 107,5k",
    "location": "Hàn Quốc"
  },
  {
    "id": 5,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limucopz3hsi95_tn",
    "name": "Sữa tắm trắng da dưỡng ẩm tẩy da chết GRACE AND GLOW Body Wash 400ml",
    "originPrice": "₫46.000",
    "price": "133.000",
    "sellNumber": "Đã bán 82,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 6,
    "image": null,
    "name": "Nước Hoa Nữ Amour Good Girl Plus Nguyên Liệu Nhập Pháp Hương Thơm Nhẹ Nhàng Cuốn Hút, Dạng Xịt 10ml và 2ml",
    "originPrice": "₫150.000",
    "price": "90.000",
    "sellNumber": "Đã bán 18,3k",
    "location": "Hà Nội"
  },
  {
    "id": 7,
    "image": null,
    "name": "Bông tẩy trang Acosmetics 3 lớp Cotton Pads Túi 222 miếng",
    "originPrice": "₫399.000",
    "price": "15.000",
    "sellNumber": "Đã bán 19k",
    "location": "Bình Định"
  },
  {
    "id": 8,
    "image": null,
    "name": "Son Môi Derf Lì Không Dễ Phai 6 Màu Sắc Lựa Chọn",
    "originPrice": "₫40.000",
    "price": "49.000",
    "sellNumber": "Đã bán 5,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 9,
    "image": null,
    "name": "Cọ tán son môi SUAKE mềm mại cao cấp che khuyết điểm 2 trong 1",
    "originPrice": "₫134.400",
    "price": "1.900",
    "sellNumber": "Đã bán 31,9k",
    "location": "Nước ngoài"
  },
  {
    "id": 10,
    "image": null,
    "name": "Sữa dưỡng thể da sáng tức thì Vaseline 350ml/chai",
    "originPrice": "₫165.000",
    "price": "37.000",
    "sellNumber": "Đã bán 462,8k",
    "location": "Bắc Ninh"
  },
  {
    "id": 11,
    "image": null,
    "name": "Combo Simple Tẩy trang 200ml + Sữa rửa mặt 150ml + Nước hoa hồng 200ml cho da sạch khỏe đàn hồi [CHÍNH HÃNG ĐỘC QUYỀN]",
    "originPrice": "₫100.000",
    "price": "23.000",
    "sellNumber": "Đã bán 47,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 12,
    "image": null,
    "name": "Set 4 mút tán trang điểm hình trứng SUAKE có thể sử dụng khô và ướt tiện dụng (có bán lẻ)",
    "originPrice": "₫70.205",
    "price": "14.000",
    "sellNumber": "Đã bán 16,8k",
    "location": "Nước ngoài"
  },
  {
    "id": 13,
    "image": null,
    "name": "Muối Tắm Sữa Bò Tẩy Tế Bào Chết A Bonne Spa Milk Salt Thái Lan 350gr",
    "originPrice": "₫138.000",
    "price": "15.000",
    "sellNumber": "Đã bán 128,6k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 14,
    "image": null,
    "name": "Bộ 13 Cọ Trang Điểm MAANGE Chuyên Nghiệp",
    "originPrice": "₫440.000",
    "price": "107.000",
    "sellNumber": "Đã bán 106,9k",
    "location": "Nước ngoài"
  },
  {
    "id": 15,
    "image": null,
    "name": "Xịt mọc tóc tinh dầu vỏ bưởi KISS ON 145 ml - Ngăn ngừa rụng tóc, kích mọc tóc, cung cấp dưỡng chất c",
    "originPrice": "₫75.000",
    "price": "209.000",
    "sellNumber": "Đã bán 20,5k",
    "location": "Hà Nội"
  },
  {
    "id": 16,
    "image": null,
    "name": "FOCALSKIN Mặt Nạ Đất Sét RAU MÁ Chăm Sóc Da Dưỡng Ẩm Kiểm Soát Dầu Acne Clay Mask 80g/7g",
    "originPrice": "₫140.000",
    "price": "9.000",
    "sellNumber": "Đã bán 3,2k",
    "location": "Nước ngoài"
  },
  {
    "id": 17,
    "image": null,
    "name": "Son kem trang điểm FOCALLURE màu nhung lì mịn thời trang 16g",
    "originPrice": "₫395.000",
    "price": "32.000",
    "sellNumber": "Đã bán 269,1k",
    "location": "Nước ngoài"
  },
  {
    "id": 18,
    "image": null,
    "name": "Son Kem Lì, Siêu Mịn Hàn Quốc Merzy The First Velvet Tint (V6 Green Vỏ Xanh,V16,V17) 4.5g",
    "originPrice": "₫829.000",
    "price": "23.000",
    "sellNumber": "Đã bán 21,9k",
    "location": "Hà Nội"
  },
  {
    "id": 19,
    "image": null,
    "name": "Kem che khuyết điểm FOCALLURE gồm 7 màu tùy chọn chuyên dụng 10g",
    "originPrice": "₫40.000",
    "price": "69.200",
    "sellNumber": "Đã bán 192,1k",
    "location": "Nước ngoài"
  },
  {
    "id": 20,
    "image": null,
    "name": "Tẩy tế bào chết body cà phê KISS ON 200ml",
    "originPrice": "₫24.000",
    "price": "85.000",
    "sellNumber": "Đã bán 9,3k",
    "location": "Hà Nội"
  },
  {
    "id": 21,
    "image": null,
    "name": "Son Kem Lì Kháng Nước Lâu Trôi 6 Màu Sắc Lựa Chọn",
    "originPrice": "₫132.000",
    "price": "15.000",
    "sellNumber": "Đã bán 2,2k",
    "location": "Nước ngoài"
  },
  {
    "id": 22,
    "image": null,
    "name": "Combo Dầu Gội, Dầu Xả TRESEMME Keratin Smooth Dưỡng tóc khô xơ rối Công thức chuẩn salon Vào Nếp Suôn Mượt 640g, 620g",
    "originPrice": "₫535.000",
    "price": "189.000",
    "sellNumber": "Đã bán 266,7k",
    "location": "Bắc Ninh"
  },
  {
    "id": 23,
    "image": null,
    "name": "Hộp 60 mặt nạ mắt Lanbena vitamin C retinol giảm quầng thâm và nếp nhăn chống lão hóa",
    "originPrice": "₫195.000",
    "price": "50.000",
    "sellNumber": "Đã bán 87,8k",
    "location": "Nước ngoài"
  },
  {
    "id": 24,
    "image": null,
    "name": "Kem Đánh Răng Giúp Trắng Răng, Giảm Ố, Loại Bỏ Mùi Hôi, Chống Sưng Nướu Median Dental IQ 93% Toothpaste 120g",
    "originPrice": "₫199.000",
    "price": "125.000",
    "sellNumber": "Đã bán 19,2k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 25,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-liclgz4vqcjw80_tn",
    "name": "Tẩy Tế Bào Chết Toàn Thân Exclusive Belarus Chiết Xuất Quế Hồi & Cafe (380ml)",
    "originPrice": "₫215.000",
    "price": "159.000",
    "sellNumber": "Đã bán 91,5k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 26,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-liclgzh38hxu69_tn",
    "name": "Son kem siêu lì, chuẩn màu, mịn mướt như bơ Merzy Academia Mellow Tint 4g",
    "originPrice": "₫100.000",
    "price": "42.000",
    "sellNumber": "Đã bán 65,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 27,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-liclh1opzys267_tn",
    "name": "Son Kem Lì 3CE Mịn Màng Như Nhung 3CE Velvet Lip Tint 4g | Official Store Lip Make up Cosmetic",
    "originPrice": "₫100.000",
    "price": "55.000",
    "sellNumber": "Đã bán 60,6k",
    "location": "Hàn Quốc"
  },
  {
    "id": 28,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-l18fijehoriv8b_tn",
    "name": "Bộ Serum & Kem ngày & Kem đêm sáng da tức thì Glycolic Bright L'Oreal Paris",
    "originPrice": "₫40.000",
    "price": "9.900",
    "sellNumber": "Đã bán 26,2k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 29,
    "image": "https://down-vn.img.susercontent.com/file/6477db06d5e9410b9231140d05dbf6df_tn",
    "name": "Muối tắm sữa bò tẩy tế bào chết A Bonne Spa Milk Salt Thái Lan 350gr",
    "originPrice": "₫329.000",
    "price": "27.000",
    "sellNumber": "Đã bán 28k",
    "location": "Hà Nội"
  },
  {
    "id": 30,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lii9s419g364a0_tn",
    "name": "Miếng Dán Lột Mụn Mũi Lanbena 30g Chăm Sóc Da Hiệu Quả (WITH FREE PAPER)",
    "originPrice": "₫8.000",
    "price": "287.000",
    "sellNumber": "Đã bán 46,7k",
    "location": "Nước ngoài"
  },
  {
    "id": 31,
    "image": null,
    "name": "Sữa rửa mặt KUMANO Hatomugi 130g dưỡng ẩm trắng da chiết xuất hạt ý dĩ Nhật - KONNI39",
    "originPrice": "₫239.000",
    "price": "56.000",
    "sellNumber": "Đã bán 15k",
    "location": "Hà Nội"
  },
  {
    "id": 32,
    "image": null,
    "name": "Bộ cà phê Đắk Lắk làm sạch da chết cocoon: da mặt 150ml + cơ thể 200ml",
    "originPrice": "",
    "price": "135.000",
    "sellNumber": "Đã bán 37,7k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 33,
    "image": null,
    "name": "Sữa Rửa Mặt CeraVe SA Smoothing, Hydrating, Foaming Cleanser - Cho Da Dầu Mụn, Khô, Nhạy Cảm 88ml – 236ml – 473ml",
    "originPrice": "",
    "price": "39.000",
    "sellNumber": "Đã bán 14,3k",
    "location": "Hà Nội"
  },
  {
    "id": 34,
    "image": null,
    "name": "Kem tẩy lông OLLIE , tẩy lông vùng kín, nách, tay, chân, triệt lông an toàn không đau rát dung tích 50ml",
    "originPrice": "",
    "price": "89.000",
    "sellNumber": "Đã bán 107,3k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 35,
    "image": null,
    "name": "Nước Tẩy Trang Loreal 400ml",
    "originPrice": "",
    "price": "145.000",
    "sellNumber": "Đã bán 53,1k",
    "location": "Hà Nội"
  },
  {
    "id": 36,
    "image": null,
    "name": "Kẹp bấm mi MAANGE chuyên dụng chất lượng cao",
    "originPrice": "",
    "price": "155.000",
    "sellNumber": "Đã bán 65,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 37,
    "image": null,
    "name": "[COMBO SÁNG GOOD TỐI BAD] Tinh Dầu Nước Hoa Nữ Good Girl Và Good Girl Gone Bad Ngọt Ngào, Quyến Rũ Chai 10ml",
    "originPrice": "",
    "price": "375.250",
    "sellNumber": "Đã bán 2,5k",
    "location": "Hà Nội"
  },
  {
    "id": 38,
    "image": null,
    "name": "Mặt nạ dưỡng da trắng sáng 3W Clinic Fresh Mask Sheet 23ml - 1 miếng",
    "originPrice": "",
    "price": "403.000",
    "sellNumber": "Đã bán 34,7k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 39,
    "image": null,
    "name": "Sữa rửa mặt Simple lành tính sạch thoáng - cho da nhạy cảm 150ml [CHÍNH HÃNG ĐỘC QUYỀN] [DIỆN MẠO MỚI]",
    "originPrice": "",
    "price": "23.000",
    "sellNumber": "Đã bán 287k",
    "location": "Bắc Ninh"
  },
  {
    "id": 40,
    "image": null,
    "name": "[Rom&nd] Son tint nước siêu lì, lâu trôi Hàn Quốc Romand Glasting Water Tint 4g",
    "originPrice": "",
    "price": "78.000",
    "sellNumber": "Đã bán 33,8k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 41,
    "image": null,
    "name": "Kem chống nắng giúp bảo vệ da khỏi tia UVB & UVA dài và giảm bóng nhờn La Roche-Posay Anthelios UV Mune 400 Oil Control",
    "originPrice": "",
    "price": "135.000",
    "sellNumber": "Đã bán 150,6k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 42,
    "image": null,
    "name": "Xịt chống nắng SKINTIFIC SPF50 PA++++ chống tia cực tím cho mặt và cơ thể giúp bảo vệ da suốt cả ngày 50ml/120ml",
    "originPrice": "",
    "price": "49.000",
    "sellNumber": "Đã bán 16,9k",
    "location": "Bình Dương"
  },
  {
    "id": 43,
    "image": null,
    "name": "Nước Hoa Nam Amour Bad Boy Plus Nguyên Liệu Nhập Pháp Hương Thơm Ngọt Ngào, Bí Ẩn, Lôi Cuốn Dạng Xịt 10ml và 2ml",
    "originPrice": "",
    "price": "59.000",
    "sellNumber": "Đã bán 35,8k",
    "location": "Hà Nội"
  },
  {
    "id": 44,
    "image": null,
    "name": "Sữa Rửa Mặt Giảm Mụn Cosrx Low pH Good Morning Gel Cleanser 150ml",
    "originPrice": "",
    "price": "115.000",
    "sellNumber": "Đã bán 19,3k",
    "location": "Hà Nội"
  },
  {
    "id": 45,
    "image": null,
    "name": "Bàn chải điện đa năng thông minh JIASHI, máy đánh răng Sonic X-3 sóng âm tặng kèm 4 đầu thay thế BCD01",
    "originPrice": "",
    "price": "266.800",
    "sellNumber": "Đã bán 11,4k",
    "location": ""
  },
  {
    "id": 46,
    "image": null,
    "name": "Tinh chất chống nắng hiệu chỉnh sắc da Sunplay Skin Aqua Tone Up UV Essence SPF50+ PA++++ 50g",
    "originPrice": "",
    "price": "139.000",
    "sellNumber": "Đã bán 28,1k",
    "location": "Hà Nội"
  },
  {
    "id": 47,
    "image": null,
    "name": "[Mã BMLT30 giảm đến 30K đơn 299K] Gel rửa mặt ngăn ngừa mụn Truesky Centella Cleanser chiết xuất rau má 50g",
    "originPrice": "",
    "price": "369.000",
    "sellNumber": "Đã bán 13,5k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 48,
    "image": null,
    "name": "Sữa Rửa Mặt Nghệ Nhân Sâm MELA Dịu Nhẹ Lành Tính, Hỗ Trợ Làm Sáng Da 200ml - ML08",
    "originPrice": "",
    "price": "55.000",
    "sellNumber": "Đã bán 34,3k",
    "location": "Hà Nội"
  },
  {
    "id": 49,
    "image": null,
    "name": "Son Dưỡng Môi Mediheal Khử Thâm, Dưỡng Ẩm Hiệu Quả Labocare Pantenolips 10ml",
    "originPrice": "",
    "price": "149.000",
    "sellNumber": "Đã bán 11,5k",
    "location": "Hà Nội"
  },
  {
    "id": 50,
    "image": "https://down-vn.img.susercontent.com/file/02bf829d4af8327aadf2518ff67d2e53_tn",
    "name": "Muối tắm sữa bò tẩy tế bào chết A Bonne Spa Milk Salt trắng da 350g",
    "originPrice": "",
    "price": "63.000",
    "sellNumber": "Đã bán 47,3k",
    "location": "Hà Nội"
  },
  {
    "id": 51,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-exesshfuihjvdb_tn",
    "name": "Dưỡng chất cho da dầu mụn Garnier Bright Complete Anti-Acnes Booster Serum 4% [Niacinamide, BHA, AHA, Vitamin C] 30ml",
    "originPrice": "",
    "price": "168.000",
    "sellNumber": "Đã bán 44k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 52,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-24c4pv0v9mnvea_tn",
    "name": "Son Dưỡng chuyên dùng cho môi khô nứt nẻ, thâm, bợt màu, nhợt nhạt Mediheal Labocare Panteno Lips 10ml",
    "originPrice": "",
    "price": "18.000",
    "sellNumber": "Đã bán 46,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 53,
    "image": "https://down-vn.img.susercontent.com/file/b071ba55fbe9eece41e6a92c8b3f8e49_tn",
    "name": "Sữa chống nắng dưỡng trắng cho da dầu Sunplay Skin Aqua Clear White SPF 50+, PA++++ 25g",
    "originPrice": "",
    "price": "59.000",
    "sellNumber": "Đã bán 29,3k",
    "location": "Bắc Ninh"
  },
  {
    "id": 54,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li83gdc8zs3wf0_tn",
    "name": "[Phiên bản tự thắt nơ] Son Kem Lì Merzy The First Velvet Tint 4.5g (V6 green vỏ xanh, Hộp đỏ kèm ruy băng)",
    "originPrice": "",
    "price": "109.000",
    "sellNumber": "Đã bán 199,8k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 55,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lftef5npaiuv97_tn",
    "name": "Miếng dán lột mụn FOCALLURE làm sạch sâu giảm mụn đầu đen cho vùng mũi 2.2g",
    "originPrice": "",
    "price": "5.390",
    "sellNumber": "Đã bán 404,4k",
    "location": "Nước ngoài"
  },
  {
    "id": 56,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-htbzg2cimuivaf_tn",
    "name": "Mặt nạ đất sét ngải cứu SKINTIFIC cấp ẩm hỗ trợ giảm mụn (55g/hũ)",
    "originPrice": "",
    "price": "26.900",
    "sellNumber": "Đã bán 59,7k",
    "location": "Bình Dương"
  },
  {
    "id": 57,
    "image": "https://down-vn.img.susercontent.com/file/da65e9b264873fe3fd6aced691a3b65f_tn",
    "name": "Nước Tẩy Trang làm sạch sâu dịu nhẹ cho mọi loại da - Garnier Micellar Cleansing Water 400ml",
    "originPrice": "",
    "price": "99.000",
    "sellNumber": "Đã bán 273,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 58,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-23010-u8g6wtjr5bmv3c_tn",
    "name": "[CHÍNH HÃNG ĐỘC QUYỀN] Smoothie Tẩy Tế Bào Chết Body Dove Chăm Da Sáng Mịn 298g",
    "originPrice": "",
    "price": "164.000",
    "sellNumber": "Đã bán 62,6k",
    "location": "Bắc Ninh"
  }
];

module.exports = productData;