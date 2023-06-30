const productData = [
  {
    "id": 0,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-gblbwam5tgovac_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Cao su bọc chân chống xe máy, dùng cho mọi loại xe HOANTHACH SP004648",
    "originPrice": "₫32.902",
    "price": "2.970",
    "sellNumber": "Đã bán 1,9k",
    "location": "Đồng Nai"
  },
  {
    "id": 1,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgbmg16xk5pz6c_tn",
    "name": "Kính Phi Công, UV Tai Gấu, Mèo Chong chóng Các loại sừng Gắn Nón Bảo Hiểm SRT",
    "originPrice": "₫145.000",
    "price": "14.400",
    "sellNumber": "Đã bán 10,6k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 2,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qvfd-lepekz0d6j74ad_tn",
    "name": "Đèn hậu nháy Audi chớp đuổi BLALION 12V 1157 30SMD 3014 LED chớp đuổi chất lượng cao tiện lợi",
    "originPrice": "₫35.714",
    "price": "15.000",
    "sellNumber": "Đã bán 270",
    "location": "Nước ngoài"
  },
  {
    "id": 3,
    "image": "https://down-vn.img.susercontent.com/file/9132667a2177ff5e268effd4a8433874_tn",
    "name": "Đèn led MOSOWORLD gắn phía sau xe đạp có thể sạc lại nhiều màu sắc tùy chọn",
    "originPrice": "₫50.000",
    "price": "41.000",
    "sellNumber": "Đã bán 12,8k",
    "location": "Nước ngoài"
  },
  {
    "id": 4,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfgt5in5cad113_tn",
    "name": "Kẹp Điện Thoại Dán Lên Mặt Đồng Hồ Xe Máy, Có Đế Cài Dễ Tháo Lắp (Kèm Miếng Dán 3M Siêu Dính)-KYWI",
    "originPrice": "₫19.000",
    "price": "16.500",
    "sellNumber": "Đã bán 362",
    "location": "Hà Nội"
  },
  {
    "id": 5,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgbzlo6zg0s7c2_tn",
    "name": "Mũ bảo hiểm nửa đầu SRT ép nhiệt viền lưới ,kính phi công , tặng sticker",
    "originPrice": "₫85.000",
    "price": "32.000",
    "sellNumber": "Đã bán 18,5k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 6,
    "image": "https://down-vn.img.susercontent.com/file/67ae5eb6063388a98230506b1a535c56_tn",
    "name": "Đèn xe đạp thể thao KIOTOOL siêu sáng có còi pin sạc usb led T6 chống nước",
    "originPrice": "₫165.000",
    "price": "19.999",
    "sellNumber": "Đã bán 22,7k",
    "location": "Hà Nội"
  },
  {
    "id": 7,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfg9bfzy0ps4bb_tn",
    "name": "[Mã INBAU15 giảm 15K đơn 99K] Kẹp dán điện thoại lên mặt đồng hồ xe máy - băng dính 3m - KYWI",
    "originPrice": "₫158.000",
    "price": "9.000",
    "sellNumber": "Đã bán 2,4k",
    "location": "Hà Nội"
  },
  {
    "id": 8,
    "image": "https://down-vn.img.susercontent.com/file/af4e369463b68a63e2aead2c6a0d775a_tn",
    "name": "Bạt phủ xe máy KAW chống mưa nắng, bạt trùm xe máy cao cấp vải dù 2 mặt che nắng bảo hành 1 đổi 1",
    "originPrice": "₫15.000",
    "price": "23.000",
    "sellNumber": "Đã bán 3,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 9,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-qmyd3l3urwkve3_tn",
    "name": "[Mã BMLT100 giảm đến 100K đơn 499K] ZHI.PAT W110 - Đèn LED 2 tầng WAVE A/S/RS & Future X, Wave 50cc * Hàng chính hãng",
    "originPrice": "₫125.000",
    "price": "99.000",
    "sellNumber": "Đã bán 915",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 10,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-ix7h88m2luivb0_tn",
    "name": "Bút sửa chữa vết trầy xe hơi SEAMETAL bằng kim loại tiện dụng",
    "originPrice": "₫75.000",
    "price": "159.000",
    "sellNumber": "Đã bán 659",
    "location": "Nước ngoài"
  },
  {
    "id": 11,
    "image": "https://down-vn.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",
    "name": "[Fulfilled by Shopee]Cặp găng tay dài Rockbros thiết kế thoáng mát chống tia UV hiệu quả sử dụng cho thể thao",
    "originPrice": "₫95.000",
    "price": "85.000",
    "sellNumber": "Đã bán 14,8k",
    "location": "Nước ngoài"
  },
  {
    "id": 12,
    "image": "https://down-vn.img.susercontent.com/file/cbe2db0076200a418d003869ca5e1606_tn",
    "name": "Đèn xe đạp gắn van xe Kiotool bộ 2 chiếc",
    "originPrice": "₫78.232",
    "price": "3.000",
    "sellNumber": "Đã bán 5,4k",
    "location": "Hà Nội"
  },
  {
    "id": 13,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-e04zw0owrgkv8e_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Vệ Sinh Kim Phun Buồng Đốt 9985/9986/9997/9916/9942 Senfineco Đức",
    "originPrice": "₫7.801",
    "price": "9.000",
    "sellNumber": "Đã bán 1,3k",
    "location": "Hà Nội"
  },
  {
    "id": 14,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgbmg16xir5j3a_tn",
    "name": "Tai mèo, tai gấu, sừng gắn nón bảo hiểm SRT cute kèm keo 3M",
    "originPrice": "₫15.000",
    "price": "79.000",
    "sellNumber": "Đã bán 2,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 15,
    "image": "https://down-vn.img.susercontent.com/file/79998848141a10a16378939ce35704fe_tn",
    "name": "SEAMETAL Bộ 20 Miếng Dán Phản Quang Cảnh Báo An Toàn Cho Bánh Xe Hơi Xe Máy",
    "originPrice": "₫120.000",
    "price": "150.000",
    "sellNumber": "Đã bán 2,8k",
    "location": "Nước ngoài"
  },
  {
    "id": 16,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-j4mdrus7wcov8b_tn",
    "name": "Tẩu sạc nhanh xe hơi BLALION QC3.0 PD 4 cổng USB 12V 24V 66W đa năng",
    "originPrice": "₫136.000",
    "price": "1.030.000",
    "sellNumber": "Đã bán 3,5k",
    "location": "Nước ngoài"
  },
  {
    "id": 17,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lihhtyhv1rde24_tn",
    "name": "Nước rửa xe Kio Cleaner đậm đặc dành cho ô tô xe máy 500 ml",
    "originPrice": "₫32.600",
    "price": "25.000",
    "sellNumber": "Đã bán 174",
    "location": "Hà Nội"
  },
  {
    "id": 18,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lin529yv9czwcb_tn",
    "name": "Bình xịt bọt tuyết rửa xe Kio Cleaner 2l",
    "originPrice": "",
    "price": "30.000",
    "sellNumber": "Đã bán 547",
    "location": "Hà Nội"
  },
  {
    "id": 19,
    "image": "https://down-vn.img.susercontent.com/file/8473f79607dfa5eddac136508e09f85f_tn",
    "name": "Giá đỡ điện thoại X-TIGER bằng ABS gắn xe máy xe đạp leo núi",
    "originPrice": "",
    "price": "13.000",
    "sellNumber": "Đã bán 824",
    "location": "Nước ngoài"
  },
  {
    "id": 20,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-6r75kld194ivb3_tn",
    "name": "Khăn lau xe Kiotool siêu sạch siêu thấm hút lau ô tô xe máy xe đạp",
    "originPrice": "",
    "price": "162.000",
    "sellNumber": "Đã bán 3,4k",
    "location": "Hà Nội"
  },
  {
    "id": 21,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-jw7ouf13juova7_tn",
    "name": "Set Mèo Thần Tài May Mắn Trang Trí Ô Tô Bàn Làm Việc - Phụ Kiện Decor Taplo Xe Hơi Ruffo Cao Cấp Giá Rẻ",
    "originPrice": "",
    "price": "519.000",
    "sellNumber": "Đã bán 175",
    "location": "Hà Nội"
  },
  {
    "id": 22,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134211-7qukw-lgdipvgsl0qf25_tn",
    "name": "[Mã INBAU15 giảm 15K đơn 99K] Nhông sên dĩa TLT sản xuất bằng công nghệ tại Thái Lan sử dụng 30000km bh 12 tháng",
    "originPrice": "",
    "price": "21.000",
    "sellNumber": "Đã bán 458",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 23,
    "image": "https://down-vn.img.susercontent.com/file/0c87969b738694fbc94b32e697310c2f_tn",
    "name": "[Fulfilled by Shopee]Rockbros Khẩu Trang Chống Nắng Thoáng Khí Nhanh Khô Có Thể Tái Sử Dụng",
    "originPrice": "",
    "price": "39.000",
    "sellNumber": "Đã bán 4,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 24,
    "image": "https://down-vn.img.susercontent.com/file/f0004328a26104fa546350a74ee90d31_tn",
    "name": "Bơm xe máy xe đạp nhỏ gọn Kiotool đầu van đa năng",
    "originPrice": "",
    "price": "12.400",
    "sellNumber": "Đã bán 7,8k",
    "location": "Hà Nội"
  },
  {
    "id": 25,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-73yfwrqvxelv10_tn",
    "name": "Mũ Bảo Hiểm Chạy Điện Thoáng Khí An Toàn Mùa Hè Cho Nam Nữ",
    "originPrice": "",
    "price": "24.800",
    "sellNumber": "Đã bán 72",
    "location": "Nước ngoài"
  },
  {
    "id": 26,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-b5v944z7d5nvba_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Vệ Sinh Kim Phun Buồng Đốt Xe Máy Senfineco 9926 Của Đức 60ml",
    "originPrice": "",
    "price": "48.900",
    "sellNumber": "Đã bán 173",
    "location": "Hà Nội"
  },
  {
    "id": 27,
    "image": "https://down-vn.img.susercontent.com/file/61670c99f195c6326b182be5c2d5908a_tn",
    "name": "Phụ gia vệ sinh buồng đốt và kim phun xăng Caltex Havoline Techron Concentrate Plus [ 75ml ]",
    "originPrice": "",
    "price": "79.900",
    "sellNumber": "Đã bán 223",
    "location": "Hà Nội"
  },
  {
    "id": 28,
    "image": "https://down-vn.img.susercontent.com/file/d076186707999301d33319e32a4d4728_tn",
    "name": "Bóng đèn LED OSRAM HS1 Air Blade, Wave RS, Future Neo, Exciter 135/150, Winner 150, Lead 125 tăng sáng trắng (7285CW)",
    "originPrice": "",
    "price": "52.000",
    "sellNumber": "Đã bán 2,6k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 29,
    "image": "https://down-vn.img.susercontent.com/file/888ce1183f380e0e8f8a2596b4920fff_tn",
    "name": "Mũ Bảo Hiểm 3/4 đầu GRO Helmet V2 có kính, kiểu dáng Honda trẻ trung cho nam và nữ, khóa kim loại chắc chắn - Nhiều màu",
    "originPrice": "",
    "price": "125.000",
    "sellNumber": "Đã bán 3k",
    "location": "Hưng Yên"
  },
  {
    "id": 30,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li2i26jat1oy49_tn",
    "name": "MONQIQI Bộ Chuyển Biến Tần DC 12V/24V Sang Điện AC 220V",
    "originPrice": "",
    "price": "79.000",
    "sellNumber": "Đã bán 237",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 31,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn5w12q4nard8_tn",
    "name": "Cần gạt mưa VTS A8 Thanh Mềm lưỡi Silicone Dùng cho các dòng xe Ford, Honda, Mazda, Kia, Hyundai, Toyota - Vbibom",
    "originPrice": "",
    "price": "9.000",
    "sellNumber": "Đã bán 69",
    "location": "Hà Nội"
  },
  {
    "id": 32,
    "image": "https://down-vn.img.susercontent.com/file/0df6f01226d5795afacddf53d6a2a7f6_tn",
    "name": "Mũ bảo hiểm nửa đầu có kính SUNDY HP-01K an toàn, thời trang, nhiều màu cá tính, Freesize (vòng đầu 55-59cm)",
    "originPrice": "",
    "price": "36.000",
    "sellNumber": "Đã bán 7,9k",
    "location": "Hà Nội"
  },
  {
    "id": 33,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf0kexeex8qy75_tn",
    "name": "Dung dịch tẩy rửa đầu bò, lốc máy Kio Cleaner Kiotool đa năng , tẩy rỉ sét, vỏ xe 500 ml",
    "originPrice": "",
    "price": "90.000",
    "sellNumber": "Đã bán 285",
    "location": "Hà Nội"
  },
  {
    "id": 34,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-7zk04gvwzsiv12_tn",
    "name": "Sáp Thơm Treo Tinh Dầu MESMERIC Khử Mùi Hôi Ẩm Mốc Phòng Ngủ, Phòng Khách, Tủ quần áo, Nhà Vệ Sinh, Treo Xe Ô Tô",
    "originPrice": "",
    "price": "106.000",
    "sellNumber": "Đã bán 1,6k",
    "location": "Hà Nội"
  },
  {
    "id": 35,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhjuue26yitdfe_tn",
    "name": "Camera hành trình ô tô C3 XETABON Full HD 1080 ,Cam hành trình chính hãng 1 đổi 1 Trong 1 năm Bảo Hành 5 Năm",
    "originPrice": "",
    "price": "174.000",
    "sellNumber": "Đã bán 951",
    "location": "Hà Nội"
  },
  {
    "id": 36,
    "image": "https://down-vn.img.susercontent.com/file/98e9b13834acfb392bd50d21909da8dd_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Gạt Mưa BOSCH Chính Hãng Cho Nhiều Dòng Xe Nhiều Kích Cỡ",
    "originPrice": "",
    "price": "70.500",
    "sellNumber": "Đã bán 279",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 37,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfam186dv8ev03_tn",
    "name": "Tai Gấu tai mèo Chong chóng Các loại sừng Gắn Nón Bảo Hiểm kèm keo 3M SRT",
    "originPrice": "",
    "price": "78.000",
    "sellNumber": "Đã bán 3,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 38,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhnkh8qjdk054d_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Đệm Hơi Ô Tô MEEOTO Nệm Hơi Ô Tô Chất Liệu Nhung Êm Mịn",
    "originPrice": "",
    "price": "79.000",
    "sellNumber": "Đã bán 404",
    "location": "Hà Nội"
  },
  {
    "id": 39,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-5pj8yism41jveb_tn",
    "name": "Bộ 10 đinh vít PECHAM chuyên dùng sửa chữa lốp xe máy/xe hơi/xe tải",
    "originPrice": "",
    "price": "229.999",
    "sellNumber": "Đã bán 618",
    "location": "Nước ngoài"
  },
  {
    "id": 40,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-m5a06g7x10jv69_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Dưỡng Sên Senfineco - Mỡ Bôi Trơn Không Văng Chịu Nhiệt 265°C",
    "originPrice": "",
    "price": "337.999",
    "sellNumber": "Đã bán 1,9k",
    "location": "Hà Nội"
  },
  {
    "id": 41,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lff5g2rrlwuc81_tn",
    "name": "Đèn xe đạp thể thao Happy bike Kiotool siêu sáng có còi pin sạc usb",
    "originPrice": "",
    "price": "108.000",
    "sellNumber": "Đã bán 3,1k",
    "location": "Hà Nội"
  },
  {
    "id": 42,
    "image": "https://down-vn.img.susercontent.com/file/20a6ac4711f995e223244d1c70ef2309_tn",
    "name": "Dàn áo nhựa nhám HONDA WINNER 150 V1 (Đen)",
    "originPrice": "",
    "price": "144.000",
    "sellNumber": "Đã bán 706",
    "location": "Vĩnh Phúc"
  },
  {
    "id": 43,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lii7sf9objkic7_tn",
    "name": "Lót ghế ô tô cao cấp Autox chất liệu Silicon 3D thiết kế 2 mảnh giúp thoáng khí êm mông",
    "originPrice": "",
    "price": "65.000",
    "sellNumber": "Đã bán 538",
    "location": "Hà Nội"
  },
  {
    "id": 44,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg1pxijr6aga80_tn",
    "name": "Giá đỡ điện thoại di động KYWI có ô dù che mưa nắng gắn gương chiếu hậu tay lái dành cho xe máy",
    "originPrice": "",
    "price": "160.000",
    "sellNumber": "Đã bán 96",
    "location": "Hà Nội"
  },
  {
    "id": 45,
    "image": "https://down-vn.img.susercontent.com/file/d13335b5381db3be0c2bd17a1ee8b023_tn",
    "name": "Novsight Bóng Đèn Pha  N39 9005 9006 H4 H7 H11 72W 10000LM Thiết Kế Nhỏ Gọn Chuyên Dụng Cho Xe Hơi",
    "originPrice": "",
    "price": "75.000",
    "sellNumber": "Đã bán 1,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 46,
    "image": "https://down-vn.img.susercontent.com/file/ed85b41aba434b2edf52df454054878f_tn",
    "name": "Dây đèn LED LYMOYO 5m trang trí nội thất xe hơi đẹp mắt",
    "originPrice": "",
    "price": "253.000",
    "sellNumber": "Đã bán 1,5k",
    "location": "Nước ngoài"
  },
  {
    "id": 47,
    "image": "https://down-vn.img.susercontent.com/file/534a601905c4ed233f8b9157ac684408_tn",
    "name": "LYMOYO 1 Đèn led T10 6smd 3030 dc12v Chất Lượng Cao",
    "originPrice": "",
    "price": "142.600",
    "sellNumber": "Đã bán 19,4k",
    "location": "Nước ngoài"
  },
  {
    "id": 48,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lff5g2rrj3pgec_tn",
    "name": "Đèn xe đạp đèn chân van Happy bike Kiotool - 2 chiếc",
    "originPrice": "",
    "price": "330.000",
    "sellNumber": "Đã bán 3,5k",
    "location": "Hà Nội"
  },
  {
    "id": 49,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-8fsb1kd3spov5c_tn",
    "name": "Bao tay lau rửa xe Kiotool cho ô tô xe máy  xe đạp chuyên dụng",
    "originPrice": "",
    "price": "15.000",
    "sellNumber": "Đã bán 716",
    "location": "Hà Nội"
  },
  {
    "id": 50,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-4tavcx8io1nve8_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Bình xịt vệ sinh nội thất oto, ghế da ô tô dạng bọt Flamingo F002 650ml",
    "originPrice": "",
    "price": "65.000",
    "sellNumber": "Đã bán 5,5k",
    "location": "Hà Nội"
  },
  {
    "id": 51,
    "image": "https://down-vn.img.susercontent.com/file/57389fa7343a7b6be977e3aa6d94d985_tn",
    "name": "Mũ bảo hiểm nữa đầu có lỗ thông gió thời trang nam nữ",
    "originPrice": "",
    "price": "139.000",
    "sellNumber": "Đã bán 9,2k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 52,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-bnczijwmdoov8a_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Gương xe máy Rizoma H2C - PKX ( Gương trái )",
    "originPrice": "",
    "price": "155.000",
    "sellNumber": "Đã bán 853",
    "location": "Hà Nội"
  },
  {
    "id": 53,
    "image": "https://down-vn.img.susercontent.com/file/aab38ef697a5c0bedbc85c4646f24d6b_tn",
    "name": "Tẩu sạc hai cổng USB 4.2A có công tắc dành cho xe hơi/ xe máy",
    "originPrice": "",
    "price": "49.000",
    "sellNumber": "Đã bán 905",
    "location": "Nước ngoài"
  },
  {
    "id": 54,
    "image": "https://down-vn.img.susercontent.com/file/9aebc3f00c3b7c3cf14dd76e981121d0_tn",
    "name": "Bảng số điện thoại hoại ô tô PECHAM đậu xetạm thời số điện thoại trên ô tô  bằng nhôm dạng xoay tiện dụng cho xe hơi",
    "originPrice": "",
    "price": "79.600",
    "sellNumber": "Đã bán 1k",
    "location": "Nước ngoài"
  },
  {
    "id": 55,
    "image": "https://down-vn.img.susercontent.com/file/c92315060576161b22a0d27ac96a5f3f_tn",
    "name": "Mũ bảo hiểm nửa đầu 1/2 SUNDY cao cấp, kèm kính UV, phi công freesize 55-61cm, nhiều họa tiết thời trang cá tính",
    "originPrice": "",
    "price": "395.000",
    "sellNumber": "Đã bán 2,5k",
    "location": "Hà Nội"
  },
  {
    "id": 56,
    "image": "https://down-vn.img.susercontent.com/file/b2de4f375e58c3979f7e251939a9ce5a_tn",
    "name": "JOYROOM Tẩu Sạc Nhanh Kỹ Thuật Số 9 Trong 1 154W Cho Xe Hơi iPhone",
    "originPrice": "",
    "price": "141.000",
    "sellNumber": "Đã bán 194",
    "location": "Nước ngoài"
  },
  {
    "id": 57,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhjuue272qipb6_tn",
    "name": "Camera Hành Trình ô tô  V8 WIFI XETABON - Full HD có kết nối Điện Thoại Và Màn Hình ANDROID Bảo hành 1 đổi 1 trong 1 năm",
    "originPrice": "",
    "price": "469.000",
    "sellNumber": "Đã bán 68",
    "location": "Hà Nội"
  },
  {
    "id": 58,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qvfj-lgnlfiagufik90_tn",
    "name": "Giá Đỡ Điện Thoại HdoorLink Hít Nam Châm Có Thể Gập Lại Tiện Dụng",
    "originPrice": "",
    "price": "310.000",
    "sellNumber": "Đã bán 18",
    "location": "Nước ngoài"
  }
];

module.exports = productData;