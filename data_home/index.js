const productData = [
  {
    "id": 0,
    "image": "https://down-vn.img.susercontent.com/file/06f6ec804e4f2e46c1f13a43dfb5cd48_tn",
    "name": "Ga gối Poly Cotton, Bộ Drap Ga Giường Mẫu Đẹp ZingZingMart (Được chọn mẫu - Gồm 1 Ga + 2 Vỏ gối nằm)",
    "originPrice": "₫20.000",
    "price": "24.000",
    "sellNumber": "Đã bán 11,5k",
    "location": "Hà Nội"
  },
  {
    "id": 1,
    "image": "https://down-vn.img.susercontent.com/file/9c18a70eb06202416ef3d9f24f9e3217_tn",
    "name": "Kệ Góc Nhà Tắm - Chất Liệu Thép Không Gỉ, Kệ Tam Giác Nhà Bếp Dán Tường Siêu Dính Chịu Lực - Kệ Nhà Tắm Cao Cấp",
    "originPrice": "₫29.000",
    "price": "88.000",
    "sellNumber": "Đã bán 6,7k",
    "location": "Hà Nội"
  },
  {
    "id": 2,
    "image": "https://down-vn.img.susercontent.com/file/375eaf4ff5d084330a21e7555f67be5f_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Đèn ngủ cảm ứng ánh sáng tự động tắt mở MiKaKo. MKM-DN170",
    "originPrice": "₫1.132.000",
    "price": "28.000",
    "sellNumber": "Đã bán 9,3k",
    "location": "Hà Nội"
  },
  {
    "id": 3,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhd9itoi1ecz3e_tn",
    "name": "Ly Giữ Nhiệt Melli Iced Americano Inox 304 Cao Cấp Không Gỉ Cốc Uống Nước Giữ Nhiệt Tặng Kèm Ống Hút Siêu Tiện Lợi",
    "originPrice": "₫32.000",
    "price": "58.000",
    "sellNumber": "Đã bán 1,6k",
    "location": "Hà Nội"
  },
  {
    "id": 4,
    "image": "https://down-vn.img.susercontent.com/file/2bc85bad778c3df70dbb9db533da1e83_tn",
    "name": "[Mã ELSUNHL6 Giảm 10% đơn từ 450K] Chảo chống dính vân đá KHÔNG TỪ SUNHOUSE Size 18-30 CT18-30 PLUS",
    "originPrice": "₫45.000",
    "price": "11.500",
    "sellNumber": "Đã bán 7,1k",
    "location": "Hà Nội"
  },
  {
    "id": 5,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-ipoihn4cr0jv4c_tn",
    "name": "Bàn Chải Cọ Lưng Nhật Bản Loại 1 Nhật Bản size 35cm RIEM",
    "originPrice": "₫120.000",
    "price": "20.000",
    "sellNumber": "Đã bán 3,3k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 6,
    "image": "https://down-vn.img.susercontent.com/file/ba0806b75ddc3b2f9f3d1277a449a68c_tn",
    "name": "Rèm cửa dán tường 2 lớp LEVIKA họa tiết dễ thương, không khoan đục, chắc chắn, giá rẻ",
    "originPrice": "₫88.000",
    "price": "69.000",
    "sellNumber": "Đã bán 33,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 7,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limt18534g0ceb_tn",
    "name": "[LIFEMCMBP4 -12% đơn 250K] Bộ Nồi Inox 5 Đáy SUNHOUSE Đáy Từ SH781 16, 20, 24 cm",
    "originPrice": "₫230.000",
    "price": "87.000",
    "sellNumber": "Đã bán 4,5k",
    "location": "Bắc Ninh"
  },
  {
    "id": 8,
    "image": "https://down-vn.img.susercontent.com/file/22e0fbcda98bbeb6f77c31751a636562_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Khăn Mặt Khô Animerry 100% cotton dùng 1 lần",
    "originPrice": "₫93.000",
    "price": "195.000",
    "sellNumber": "Đã bán 5,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 9,
    "image": "https://down-vn.img.susercontent.com/file/bbea9dd51c06e8182bc8e8078f2cc548_tn",
    "name": "Giá treo quần áo YTC xào đồ kệ áo quần cao cấp",
    "originPrice": "₫599.000",
    "price": "14.500",
    "sellNumber": "Đã bán 7,8k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 10,
    "image": "https://down-vn.img.susercontent.com/file/fd49e952e425e24822c503770cab0836_tn",
    "name": "Tinh Dầu Thơm Phòng Thiên Nhiên MAIBA 50ml Bản Sang Trọng Màu Đen Que Gỗ Tự Khuếch Tán Thanh Lọc Khử Mùi Không Khí MB50",
    "originPrice": "₫32.538",
    "price": "43.000",
    "sellNumber": "Đã bán 26,9k",
    "location": "Thái Nguyên"
  },
  {
    "id": 11,
    "image": "https://down-vn.img.susercontent.com/file/0f00af872488d03af1b44d23b5b5c3fd_tn",
    "name": "Thảm Lau Chân Nhà Bếp chùi chân trải sàn SHOUSE hình thú phòng khách phòng tắm 3d chống trượt cao cấp đế cao su hút nước",
    "originPrice": "₫269.000",
    "price": "175.000",
    "sellNumber": "Đã bán 9,3k",
    "location": "Hà Nội"
  },
  {
    "id": 12,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf99a1ntpxzr65_tn",
    "name": "Ly giữ nhiệt LocknLock 550ml LHC3249 - Hàng chính hãng, mở nắp một chạm, chất liệu thép không gỉ miệng ly rộng - JoyMall",
    "originPrice": "₫170.000",
    "price": "662.000",
    "sellNumber": "Đã bán 48,3k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 13,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf95gflz28wa02_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Bát cơm Thương Hiệu Gosu men sáng bóng rẻ đẹp Hàng Loại 1",
    "originPrice": "₫17.500",
    "price": "19.000",
    "sellNumber": "Đã bán 5,4k",
    "location": "Hà Nội"
  },
  {
    "id": 14,
    "image": "https://down-vn.img.susercontent.com/file/91e53c23c89c2879641fffd12c20cd2a_tn",
    "name": "Khăn Tắm Hàn Quốc Cao Cấp 70x140 cm Chất Bông Siêu Mềm Mịn Thấm Nước RIEM",
    "originPrice": "₫29.000",
    "price": "175.000",
    "sellNumber": "Đã bán 5,7k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 15,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qvg8-lifayi5u0g3712_tn",
    "name": "Bàn học gấp gọn, Bàn học gấp gọn ngồi bệt, bàn chân nhựa cứng 40x60cm mặt gỗ MDF loại đẹp Chính hãng Fujika",
    "originPrice": "₫400.000",
    "price": "289.000",
    "sellNumber": "Đã bán 2,3k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 16,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-0yuz8yt1m8hv91_tn",
    "name": "Túi vải đựng quần áo Hộp đựng đồ lót tất vớ tiện dụng xếp quần áo gọn gàng nhiều size",
    "originPrice": "₫15.010",
    "price": "34.000",
    "sellNumber": "Đã bán 38,6k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 17,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limx768rnk7g5e_tn",
    "name": "Máy sấy tóc mini  JIASHI gấp gọn tạo kiểu tóc chuyên nghiệp công suất lớn 1500w bảo hành 6 tháng - MST02",
    "originPrice": "₫75.000",
    "price": "69.000",
    "sellNumber": "Đã bán 56,5k",
    "location": ""
  },
  {
    "id": 18,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-gd8ohe0nzcjvbc_tn",
    "name": "Thảm lót cửa chùi chân MENGNI thấm hút tốt chống trượt dành cho phòng tắm/ phòng ngủ",
    "originPrice": "",
    "price": "264.000",
    "sellNumber": "Đã bán 7,8k",
    "location": "Nước ngoài"
  },
  {
    "id": 19,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-uxtkmgsynfkvc9_tn",
    "name": "Bộ chăn ga gối cotton poly cute mẫu mới ETAMI miễn phí bo chun ga trải giường",
    "originPrice": "",
    "price": "319.000",
    "sellNumber": "Đã bán 1,4k",
    "location": "Hà Nội"
  },
  {
    "id": 20,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lenwa7x6qx0za5_tn",
    "name": "Túi Vải Đựng Quần Áo Chăn Màn Khung Thép JYoohome Thùng Hộp Vải Để Đồ Chơi Đa Năng Kích Thước Lớn Chịu Lực Cao Cấp",
    "originPrice": "",
    "price": "10.000",
    "sellNumber": "Đã bán 10,5k",
    "location": "Hà Nội"
  },
  {
    "id": 21,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-hk7zxm0vxinv69_tn",
    "name": "Cây lau nhà phun sương thông minh Aurora đa năng có bình xịt nước dung tích 350ml - HUY TUONG",
    "originPrice": "",
    "price": "50.000",
    "sellNumber": "Đã bán 977",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 22,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li9zbdt73ggc39_tn",
    "name": "Khăn Tắm, Khăn Gội Đầu, Khăn Lau Mặt LOTUS TOWEL 100% Cotton Cao Cấp Mềm Mịn, Thấm Hút, Không Ra Màu",
    "originPrice": "",
    "price": "15.000",
    "sellNumber": "Đã bán 6,2k",
    "location": "Thái Bình"
  },
  {
    "id": 23,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-8vgxpfk4kpoved_tn",
    "name": "Bộ cây lau nhà tự vắt thông minh Pulito đầu xoay 360 độ tặng thêm 2 bông lau BLN-R",
    "originPrice": "",
    "price": "37.500",
    "sellNumber": "Đã bán 18,5k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 24,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgj3hky0xboq50_tn",
    "name": "Dụng cụ xay tỏi ớt Lock&Lock mini - Hàng chính hãng lưỡi xay bén, kéo tay đơn giản, dễ vệ sinh - JoyMall",
    "originPrice": "",
    "price": "79.000",
    "sellNumber": "Đã bán 27,7k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 25,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-leux6q7yb97b2d_tn",
    "name": "Bàn làm việc ngồi bệt đa năng gỗ MDF phủ melamin thương hiệu IGA - GA15",
    "originPrice": "",
    "price": "99.000",
    "sellNumber": "Đã bán 394",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 26,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-23020-96plttalt5mv1b_tn",
    "name": "Tấm Làm mềm đệm Topper Bo Decor phối mẫu mới 2023 dày dặn Chất liệu Cotton",
    "originPrice": "",
    "price": "11.000",
    "sellNumber": "Đã bán 2,3k",
    "location": "Hà Nội"
  },
  {
    "id": 27,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg33e30lqupj41_tn",
    "name": "Bộ 2 Nhả Kem Đánh Răng Tự Động OENON - Kệ Treo Bàn Chải Lắp Đặt Dán Tường Gạch Men Kèm Cốc Hút Nam Châm",
    "originPrice": "",
    "price": "54.500",
    "sellNumber": "Đã bán 22,6k",
    "location": "Hà Nội"
  },
  {
    "id": 28,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-8nwsngifgqlvf8_tn",
    "name": "Bộ Nhả Kem Đánh Răng Thông Minh, kệ để đồ phòng tắm, bộ lấy kem đánh răng thông minh Parroti Morning",
    "originPrice": "",
    "price": "79.000",
    "sellNumber": "Đã bán 2,4k",
    "location": ""
  },
  {
    "id": 29,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg6cnacm5roq6b_tn",
    "name": "Tinh dầu thơm CODEDECO Good Girl ngọt ngào, gợi cảm - 10ml",
    "originPrice": "",
    "price": "119.000",
    "sellNumber": "Đã bán 40k",
    "location": "Hà Nội"
  },
  {
    "id": 30,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qvda-lfkl2vl14wjl11_tn",
    "name": "Zuogua Đèn Ngủ Bóng Thủy Tinh Hệ Mặt Trời Trang Trí Bàn Học Sinh Cho Bạn Gái",
    "originPrice": "",
    "price": "46.000",
    "sellNumber": "Đã bán 465",
    "location": "Nước ngoài"
  },
  {
    "id": 31,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-prfv0jxpehjvcd_tn",
    "name": "[LIFEMCMBP4 -12% đơn 250K] Bộ nồi chảo chống dính Baby Elmich EL-1168OL đáy từ size 16cm",
    "originPrice": "",
    "price": "50.000",
    "sellNumber": "Đã bán 2,5k",
    "location": "Hà Nội"
  },
  {
    "id": 32,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-3opexgzi4cjv5a_tn",
    "name": "Set 50 Miếng Giấy Lót Nồi Chiên Thỏ Trắng Hình Khuôn Bánh - Giảm Thiểu Tối Đa Dầu Mỡ Bám Vào Nồi Chiên",
    "originPrice": "",
    "price": "244.000",
    "sellNumber": "Đã bán 11,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 33,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhopl8khkpz9d3_tn",
    "name": "Kệ Góc Nhà Tắm Dán Tường KIVA Để Đồ Đa Năng Chất Liệu Nhôm Hàng Không, Lắp Đặt Không Cần Khoan, Bảo Hành 15 Năm.",
    "originPrice": "",
    "price": "39.000",
    "sellNumber": "Đã bán 689",
    "location": "Hà Nội"
  },
  {
    "id": 34,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgd8rsn6paev05_tn",
    "name": "Máy Đánh Trứng Sữa Tạo Bọt Cafe Cầm Tay Mini Pin Sạc Cao Cấp MIFAN 2023 - Nhựa ABS, thép không gỉ - Hàng Chính Hãng",
    "originPrice": "",
    "price": "83.000",
    "sellNumber": "Đã bán 4,8k",
    "location": "Hà Nội"
  },
  {
    "id": 35,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-g2t7oxzp0xjvc9_tn",
    "name": "Chiếu Ngủ Văn Phòng Đa Năng ETAMI Cách Nhiệt  Loại Dày 3.5mm(viền ngẫu nhiên)",
    "originPrice": "",
    "price": "14.800",
    "sellNumber": "Đã bán 15,4k",
    "location": "Hà Nội"
  },
  {
    "id": 36,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134211-7qukw-lgoymf9k4iyb54_tn",
    "name": "Gương toàn thân dán tường vuông cao cấp Vạn Bình An - dán tủ sẵn keo khách hàng về lột dán bao đẹp ( hỏa tốc )",
    "originPrice": "",
    "price": "74.000",
    "sellNumber": "Đã bán 1,2k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 37,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg3wufmqquzu6e_tn",
    "name": "Lẻ bộ nồi inox bếp từ 5 đáy cao cấp SUNHOUSE SHG788-16-SHG788-24-2022 16 20 24 CM hàng chính hãng bảo hành toàn quốc",
    "originPrice": "",
    "price": "9.900",
    "sellNumber": "Đã bán 1,8k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 38,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qvft-lfjamdbvigrmb3_tn",
    "name": "Tạp Dề Nhà Bếp Chống Thấm Nước Dễ Thương Có Túi Lớn Cho Nam Và Nữ 2023 SG.DECOR  Tạp Dề bếp nấu ăn thời trang",
    "originPrice": "",
    "price": "79.000",
    "sellNumber": "Đã bán 13,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 39,
    "image": "https://down-vn.img.susercontent.com/file/59dafe229e633682a1a64ddf1d3fe64b_tn",
    "name": "Móc Dán Tường Siêu Dính Chịu Lực Siêu Bền Mifan - Loại keo dày siêu chắc chất lượng cao",
    "originPrice": "",
    "price": "159.000",
    "sellNumber": "Đã bán 97,9k",
    "location": "Hà Nội"
  },
  {
    "id": 40,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-fmjlghmu6bjv4c_tn",
    "name": "Hộp cơm giữ nhiệt văn phòng Yummy Kamn inox 304 - 1500ml, 4 ngăn chống tràn, 4 màu hiện đại, hâm nóng đơn giản",
    "originPrice": "",
    "price": "219.000",
    "sellNumber": "Đã bán 9,9k",
    "location": "Hà Nội"
  },
  {
    "id": 41,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf6qvg555hfude_tn",
    "name": "Bàn đa năng HAJI bàn làm việc khung sắt chân tròn sơn tĩnh điện độ bền cao, chắc chắn C62 dài 120cm",
    "originPrice": "",
    "price": "86.000",
    "sellNumber": "Đã bán 2,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 42,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-euh2tj6avyiv66_tn",
    "name": "Bộ chăn ga gối cotton tici Lidaco cotton đũi trơn dày decor phòng ngủ vintage đủ mọi cỡ nệm",
    "originPrice": "",
    "price": "108.000",
    "sellNumber": "Đã bán 12,3k",
    "location": "Hà Nội"
  },
  {
    "id": 43,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-bveqje8jceov22_tn",
    "name": "Bộ Cây Lau Nhà Tự Vắt, Chổi Lau Nhà Thông Minh Xoay 360 Độ Tách Nước Bẩn Tặng Kèm 2 Bông Lau",
    "originPrice": "",
    "price": "147.000",
    "sellNumber": "Đã bán 4,5k",
    "location": "Hà Nội"
  },
  {
    "id": 44,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qve5-lh610vh1u9rr1d_tn",
    "name": "Zuoguan Áo Mưa Dài Toàn Thân Không Thể Đục Lỗ Sử Dụng Pin Cho Xe Đạp / Xe Máy / Xe Hơi",
    "originPrice": "",
    "price": "303.000",
    "sellNumber": "Đã bán 173",
    "location": "Nước ngoài"
  },
  {
    "id": 45,
    "image": "https://down-vn.img.susercontent.com/file/80fd98097bcf24e8f0e24b58685393bf_tn",
    "name": "Rèm cửa dán tường 2 lớp Levika họa tiết dễ thương, không khoan đục, chắc chắn",
    "originPrice": "",
    "price": "438.750",
    "sellNumber": "Đã bán 5,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 46,
    "image": "https://down-vn.img.susercontent.com/file/d654d313fb64826c26793a90f68f8bf3_tn",
    "name": "Móc Treo Quần Áo Dán Tường 6 Chấu - Treo Khăn Lau, Đồ Dùng Nhà Bếp, Phòng Tắm Đa Năng MIFAN 2021 - Chịu Lực 15kg",
    "originPrice": "",
    "price": "119.000",
    "sellNumber": "Đã bán 22,6k",
    "location": "Hà Nội"
  },
  {
    "id": 47,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-prvv9jqkgbjvc7_tn",
    "name": "Nến Thơm Heny Garden Mini Cho Làm Việc Và Phòng Nhỏ Mùi Hương Dễ Ngủ, Thư Giãn",
    "originPrice": "",
    "price": "279.000",
    "sellNumber": "Đã bán 9,7k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 48,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qveo-lfqb0z5c74jl0e_tn",
    "name": "[Mã INBAU15 giảm 15K đơn 99K] Hoa Tulip giả trang trí chất liệu cao su PU cao cấp 34cm -Lily's decor house",
    "originPrice": "",
    "price": "109.000",
    "sellNumber": "Đã bán 16,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 49,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-b58xv4l5dxnv5c_tn",
    "name": "Đèn Dây Led Rgb 16 Triệu Màu Asaki Nháy Theo Nhạc Điều Khiển Bằng Điện Thoại Trang Trí Phòng Ngủ",
    "originPrice": "",
    "price": "259.000",
    "sellNumber": "Đã bán 2,5k",
    "location": "Hà Nội"
  },
  {
    "id": 50,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-x7d9eg1hpsnvb8_tn",
    "name": "Màn chụp người lớn tự bung đỉnh vuông mùng chụp chống muỗi cho bé gấp gọn KINH ĐÔ rộng1m 1m2 1m4 1m6 1m8dài2m khung inox",
    "originPrice": "",
    "price": "195.000",
    "sellNumber": "Đã bán 6,5k",
    "location": "Hà Nội"
  },
  {
    "id": 51,
    "image": "https://down-vn.img.susercontent.com/file/6da22787134ccfce21e3e0000ec0bb1a_tn",
    "name": "Hộp đựng thực phẩm trữ đông đựng cơm nhựa inochi trong tủ lạnh nhiều size có nắp kín khí",
    "originPrice": "",
    "price": "56.000",
    "sellNumber": "Đã bán 6,4k",
    "location": "Hà Nội"
  },
  {
    "id": 52,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-rwkjgakaz7nv84_tn",
    "name": "Găng tay cao su siêu dai rửa chén bát giặt đồ Ponny Premium Home không mùi hôi tiện lợi",
    "originPrice": "",
    "price": "299.000",
    "sellNumber": "Đã bán 2,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 53,
    "image": "https://down-vn.img.susercontent.com/file/ab3846864bab8ade693ea48b68c94116_tn",
    "name": "Chiếu Điều Hòa Sợi Mây Tự Nhiên HOMIES Viền Vải - Chất Liệu Thiên Nhiên Cao Cấp Mát Lạnh Mùa Hè, Chống Thấm Nước",
    "originPrice": "",
    "price": "16.269",
    "sellNumber": "Đã bán 2,9k",
    "location": "Hà Nội"
  },
  {
    "id": 54,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lftucannfppz25_tn",
    "name": "Chiếu Cao Su Non 3D Bo Decor hoa tiet dễ Thương Tặng kèm 2 vỏ gối cùng màu",
    "originPrice": "",
    "price": "95.000",
    "sellNumber": "Đã bán 1,9k",
    "location": "Hà Nội"
  },
  {
    "id": 55,
    "image": "https://down-vn.img.susercontent.com/file/b9629ee1e479a83e637338a1326b8d98_tn",
    "name": "Hạt giống hoa sen nhật mini Greenhome, gói 10 hạt, nhiều màu, dễ trồng, tặng kèm hướng dẫn H01",
    "originPrice": "",
    "price": "475.000",
    "sellNumber": "Đã bán 7,3k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 56,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-qj2upm11xejv00_tn",
    "name": "Cây Chà Sàn Nhà Tắm Thiết Kế Đầu Gạt Nước Và Đầu Chổi Xoay 120 Độ Quét Nhà Siêu Sạch Mọi Góc Bẩn RIN",
    "originPrice": "",
    "price": "129.000",
    "sellNumber": "Đã bán 5,5k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 57,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhmwdvi1x8cl98_tn",
    "name": "Gương Tròn Treo Tường VUADECOR viền gỗ cao cấp nhiều kích thước (tặng dây thừng và đinh treo)",
    "originPrice": "",
    "price": "149.000",
    "sellNumber": "Đã bán 955",
    "location": "Hà Nội"
  },
  {
    "id": 58,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-23010-s5sgk1hyxymv37_tn",
    "name": "Đèn ngủ 3D theo tên yêu cầu Decor trang trí phòng ngủ Quà tặng sinh nhật valentine Ledlin",
    "originPrice": "",
    "price": "7.500",
    "sellNumber": "Đã bán 1,3k",
    "location": "Nghệ An"
  }
];

module.exports = productData;