const productData = [
  {
    "id": 0,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-3k7kildmoeivee_tn",
    "name": "Giày nam KATEZAG49 cổ thấp phong cách Hàn Quốc trẻ trung năng động dễ phối đồ full size, Giày thể thao nam KTZ49",
    "originPrice": "₫274.000",
    "price": "199.000",
    "sellNumber": "Đã bán 6,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 1,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134211-23010-1ncc9hdkfxmvb0_tn",
    "name": "Giày thể thao RENBEN đế dày đơn giản thời trang cho nữ",
    "originPrice": "₫359.858",
    "price": "359.000",
    "sellNumber": "Đã bán 6,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 2,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-x3ypjiv233nvc4_tn",
    "name": "Dép Quai Ngang ATINO Đúc Nguyên Khối Tăng Chiều Cao Thêm 3cm Chất Liệu EVA Êm Chân Không Ngấm Nước D2.9808",
    "originPrice": "₫360.000",
    "price": "137.000",
    "sellNumber": "Đã bán 8k",
    "location": "Hà Nội"
  },
  {
    "id": 3,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134211-7qukw-lhhpc44l9t3yb1_tn",
    "name": "Giày Thể Thao Đế Dày Tăng Chiều Cao Thời Trang Hàn Quốc",
    "originPrice": "₫399.000",
    "price": "60.000",
    "sellNumber": "Đã bán 360",
    "location": "Nước ngoài"
  },
  {
    "id": 4,
    "image": "https://down-vn.img.susercontent.com/file/a304c608fea7d694d1a49c246cc21418_tn",
    "name": "IELGY Xăng đan Đế Xuồng Thời Trang Đơn Giản Dành Cho Nữ",
    "originPrice": "₫331.666",
    "price": "40.000",
    "sellNumber": "Đã bán 2,2k",
    "location": "Nước ngoài"
  },
  {
    "id": 5,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134211-23010-g5418hdkfxmv98_tn",
    "name": "Giày thể thao RENBEN dệt tăng chiều cao thời trang cho cặp đôi",
    "originPrice": "₫159.000",
    "price": "179.000",
    "sellNumber": "Đã bán 2,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 6,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li3uot513bv679_tn",
    "name": "Bình xịt khử mùi hôi giày dép nano bạc Shoes 2h lọ 260ml, chuyên dùng làm thơm tủ dầy, quần áo, tất, vớ chân.",
    "originPrice": "₫399.000",
    "price": "198.000",
    "sellNumber": "Đã bán 21,8k",
    "location": ""
  },
  {
    "id": 7,
    "image": "https://down-vn.img.susercontent.com/file/b5277ccf99cc575ccb57955d636196e4_tn",
    "name": "[Mã BMLT30 giảm đến 30K đơn 299K] Giày da chelsea boots Inichi G1071 da loại tốt, có may đế",
    "originPrice": "₫55.000",
    "price": "180.000",
    "sellNumber": "Đã bán 10,6k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 8,
    "image": "https://down-vn.img.susercontent.com/file/6020c6028f115371127a0e7bfaaaf520_tn",
    "name": "Dép đi trong nhà / ngoài trời thiết kế hình cá mập đáng yêu chống trượt mới dành cho nam và nữ AYUER",
    "originPrice": "₫116.000",
    "price": "27.000",
    "sellNumber": "Đã bán 28,8k",
    "location": "Nước ngoài"
  },
  {
    "id": 9,
    "image": "https://down-vn.img.susercontent.com/file/6974c949bd54cfb2ea6a96f86f30b114_tn",
    "name": "Xăng đan Atikota đế dày mềm quai chéo thời trang mùa hè cổ điển cho nữ",
    "originPrice": "₫266.000",
    "price": "55.000",
    "sellNumber": "Đã bán 2,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 10,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-n6grtz4qgnnv23_tn",
    "name": "[Mã FATREND02 giảm đến 30k đơn 99k] Dép đúc quai ngang vân gỗ nam, nữ siêu nhẹ DUWA - Hàng chính hãng - SH211",
    "originPrice": "₫55.000",
    "price": "225.000",
    "sellNumber": "Đã bán 3,7k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 11,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-mzmttl7na6kva0_tn",
    "name": "[Mã BMLT30 giảm đến 30K đơn 299K] Giày derby da nam thời trang INICHI G1115 thiết kế da lì đế cao",
    "originPrice": "₫595.000",
    "price": "125.000",
    "sellNumber": "Đã bán 391",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 12,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhq30eedp9kx3c_tn",
    "name": "Chai xịt khử mùi hôi giày dép công nghệ nano bạc Ag+ Shoes 2h 1 lọ 260ml, bình làm thơm tủ để giầy, quần áo, vớ chân.",
    "originPrice": "₫102.000",
    "price": "169.000",
    "sellNumber": "Đã bán 2,1k",
    "location": ""
  },
  {
    "id": 13,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lgygbkmvlnj00d_tn",
    "name": "Renben Dép Quai Ngang Thời Trang Mùa Hè Cho Nam Nữ",
    "originPrice": "₫230.000",
    "price": "170.140",
    "sellNumber": "Đã bán 375",
    "location": "Nước ngoài"
  },
  {
    "id": 14,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134211-23020-y3z42z5yrlnvbb_tn",
    "name": "Giày Thể Thao canvas Cột Dây Viền Bèo Dễ Thương Cho Bé Gái",
    "originPrice": "₫450.000",
    "price": "89.500",
    "sellNumber": "Đã bán 2,2k",
    "location": "Nước ngoài"
  },
  {
    "id": 15,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhyh6xcyzn2d04_tn",
    "name": "Bình xịt khử mùi hôi giày dép Nano Bạc diệt khuẩn, chai sịt làm thơm tủ quần áo, hết mùi tất chân, vớ chân lưu hương lâu",
    "originPrice": "₫429.000",
    "price": "225.000",
    "sellNumber": "Đã bán 216",
    "location": ""
  },
  {
    "id": 16,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-2n016mo20tov63_tn",
    "name": "Giày Tây Nam Dây Buộc Giá Rẻ SIGOURNEY Kiểu Dáng Derby Dành Cho Dân Công Sở Màu Đen SIG-04 Bảo Hành 18 Tháng",
    "originPrice": "₫310.000",
    "price": "19.000",
    "sellNumber": "Đã bán 753",
    "location": "Đà Nẵng"
  },
  {
    "id": 17,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qvg8-lf4uluivcfjj8e_tn",
    "name": "Dép Lê Đế Xuồng Chống Trượt Thoải Mái Thời Trang Cho Nam",
    "originPrice": "₫360.000",
    "price": "58.000",
    "sellNumber": "Đã bán 1,1k",
    "location": "Nước ngoài"
  },
  {
    "id": 18,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qvf4-lhcqu1xgpme4e0_tn",
    "name": "Giày Thể Thao Đế Dày Màu Trắng Mũi Vỏ Sò Thời Trang Mùa Xuân Dễ Phối Đồ",
    "originPrice": "₫204.000",
    "price": "133.000",
    "sellNumber": "Đã bán 158",
    "location": "Nước ngoài"
  },
  {
    "id": 19,
    "image": "https://down-vn.img.susercontent.com/file/df10db2282364d308a279aaefa99bb07_tn",
    "name": "Dây Giày Classic 1970s Cổ Cao 160cm và Thấp Chính Hãng MINSU M1409 Chuyên dùng Cho Giày Converse, Xvessel, Rick owen",
    "originPrice": "₫520.000",
    "price": "19.000",
    "sellNumber": "Đã bán 3,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 20,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfrtzwm0xy479f_tn",
    "name": "Giày thể thao nam sneaker trắng ZAVAS bằng da thời trang đế cao 4cm form giày gọn gàng dễ mặc đồ đi êm chân - S423",
    "originPrice": "₫265.000",
    "price": "297.000",
    "sellNumber": "Đã bán 155",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 21,
    "image": "https://down-vn.img.susercontent.com/file/e31cf4a280d7a9ebada33184a612f536_tn",
    "name": "Giày sneaker nam đế độn chuẩn đẹp SL1078 StarLord",
    "originPrice": "₫316.000",
    "price": "51.000",
    "sellNumber": "Đã bán 826",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 22,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-li0zime2cijn59_tn",
    "name": "Giày Thể Thao Đế Bằng Phong Cách Retro Đức Thời Trang Xuân Thu Cho Nữ",
    "originPrice": "₫170.000",
    "price": "147.000",
    "sellNumber": "Đã bán 40",
    "location": "Nước ngoài"
  },
  {
    "id": 23,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lhwrq5sl49zyff_tn",
    "name": "Giày thể thao RENBEN phong cách Hàn Quốc năng động trẻ trung cho nữ",
    "originPrice": "₫100.000",
    "price": "25.000",
    "sellNumber": "Đã bán 1,1k",
    "location": "Nước ngoài"
  },
  {
    "id": 24,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lh8qtepwc9und0_tn",
    "name": "Giày thể thao RENBEN phong cách Hàn Quốc thời trang mùa thu cao cấp cho nam",
    "originPrice": "₫60.000",
    "price": "55.000",
    "sellNumber": "Đã bán 1,2k",
    "location": "Nước ngoài"
  },
  {
    "id": 25,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-6so0icub4tnv28_tn",
    "name": "Giày nam sneaker G2 kiểu dáng thể thao trắng độn đế tăng chiều cao bằng da microfiber trống nhăn",
    "originPrice": "₫299.000",
    "price": "319.000",
    "sellNumber": "Đã bán 1,1k",
    "location": "Hà Nội"
  },
  {
    "id": 26,
    "image": "https://down-vn.img.susercontent.com/file/ad6d7ebb4030b47d5fe3573d9e6823bd_tn",
    "name": "[Mã FATREND02 giảm đến 30k đơn 99k] Dép Quai Ngang Nam Nữ Laceva Chống Hôi Chân DP65",
    "originPrice": "₫685.000",
    "price": "229.000",
    "sellNumber": "Đã bán 5,3k",
    "location": "Hà Nội"
  },
  {
    "id": 27,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lhcvbimssov338_tn",
    "name": "Giày Thể Thao RENBEN Màu Trắng Đế Dày Thời Trang Thường Ngày",
    "originPrice": "₫307.272",
    "price": "132.000",
    "sellNumber": "Đã bán 95",
    "location": "Nước ngoài"
  },
  {
    "id": 28,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lhcxb3jxigc2c2_tn",
    "name": "[Mã FATREND02 giảm đến 30k đơn 99k] Giày Sneaker Vải Canvas Unisex C40 Off/white Dincox Đơn Giản Tinh Tế",
    "originPrice": "₫102.000",
    "price": "180.000",
    "sellNumber": "Đã bán 3,6k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 29,
    "image": "https://down-vn.img.susercontent.com/file/296a70762d3141d5e724541199853655_tn",
    "name": "Giày nam thời trang thoáng khí PETTINO - PZS03",
    "originPrice": "₫499.000",
    "price": "188.000",
    "sellNumber": "Đã bán 9,7k",
    "location": "Hà Nội"
  },
  {
    "id": 30,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134211-7qukw-lhzyiuqo5girf4_tn",
    "name": "Giày Thể Thao Đế Bằng Thời Trang Retro Đức Cho Nữ",
    "originPrice": "₫15.000",
    "price": "210.000",
    "sellNumber": "Đã bán 193",
    "location": "Nước ngoài"
  },
  {
    "id": 31,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-23010-2sk8pzkbffmv02_tn",
    "name": "Atikota Dép Sandal Mũi Vuông Đế Dày Mềm Mại Chống Trượt Thời Trang Mùa Hè Dành Cho Nữ",
    "originPrice": "₫169.000",
    "price": "700.000",
    "sellNumber": "Đã bán 2k",
    "location": "Nước ngoài"
  },
  {
    "id": 32,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-23030-hhyct6v7fzovf9_tn",
    "name": "Giày Thể Thao Vải canvas Đế Mềm Thời Trang Cho Nam",
    "originPrice": "₫151.888",
    "price": "69.000",
    "sellNumber": "Đã bán 79",
    "location": "Nước ngoài"
  },
  {
    "id": 33,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-81aj3xeqtznvf2_tn",
    "name": "Giày thể thao nam G2 kiểu sneaker trắng cổ mid bằng da microfiber cao cấp chống nhăn độn đế tăng chiều cao",
    "originPrice": "₫470.000",
    "price": "99.000",
    "sellNumber": "Đã bán 639",
    "location": "Hà Nội"
  },
  {
    "id": 34,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lgyiyk5jpfbzd0_tn",
    "name": "Dép Sandal Đế Dày Phong Cách Hàn Quốc Thời Trang Mùa Hè Cho Nữ",
    "originPrice": "₫244.000",
    "price": "102.000",
    "sellNumber": "Đã bán 150",
    "location": "Nước ngoài"
  },
  {
    "id": 35,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-975klubgrfjva4_tn",
    "name": "Giày lười nam Penny loafer kiểu giày da nam đế cao, Loafer đen trắng kiểu mọi bằng da bò nappa cao cấp",
    "originPrice": "₫150.000",
    "price": "390.000",
    "sellNumber": "Đã bán 1,2k",
    "location": "Hà Nội"
  },
  {
    "id": 36,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-li9l9q7g0tq2fc_tn",
    "name": "Dép Đi Trong Nhà / Ngoài Trời Họa Tiết Hoạt Hình Đơn Giản Cho Cặp Đôi",
    "originPrice": "₫159.000",
    "price": "139.000",
    "sellNumber": "Đã bán 53",
    "location": "Nước ngoài"
  },
  {
    "id": 37,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhpmz6rehy85d3_tn",
    "name": "[Mã FATREND02 giảm đến 30k đơn 99k] Min's Shoes - Giày Thể Thao Cao Cấp Phối Màu Trẻ Trung TT182",
    "originPrice": "₫259.000",
    "price": "148.000",
    "sellNumber": "Đã bán 1,3k",
    "location": "Hà Nội"
  },
  {
    "id": 38,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-wwedyztgvnlv3c_tn",
    "name": "Giày Thể Thao Nam Biti's Hunter Street Vintage Black DSMH04000DEN (Đen)",
    "originPrice": "₫181.000",
    "price": "138.000",
    "sellNumber": "Đã bán 1,3k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 39,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-kh4wbckjwnlv93_tn",
    "name": "Giày Thể Thao Nam - Nữ Bitis Hunter X Dune DSMH10701KEM/DSWH10701KEM (Kem)",
    "originPrice": "₫116.000",
    "price": "148.000",
    "sellNumber": "Đã bán 558",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 40,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-qp329020d4mv07_tn",
    "name": "Giày sandal Atikota thiết kế hở ngón phối quai chéo màu trơn xinh xắn thời trang cho nữ",
    "originPrice": "₫21.000",
    "price": "100.300",
    "sellNumber": "Đã bán 9,9k",
    "location": "Nước ngoài"
  },
  {
    "id": 41,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134211-7qukw-lhm04mom0l262d_tn",
    "name": "Dép Quai Ngang Chống Trượt Thoải Mái Thời Trang Cho Nam",
    "originPrice": "₫250.000",
    "price": "789.000",
    "sellNumber": "Đã bán 6,2k",
    "location": "Nước ngoài"
  },
  {
    "id": 42,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-h5jidqa3zdlvcd_tn",
    "name": "Giày chunky derby da cột dây thời trang INICHI G1112 da lì chống nhăn đế chunky thời trang",
    "originPrice": "₫179.000",
    "price": "53.000",
    "sellNumber": "Đã bán 1,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 43,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-ynompzm3vnlvd9_tn",
    "name": "Giày Biti's HunterX2k20 Multi Layer Forest DSMH02800DEN/DSWH02800DEN",
    "originPrice": "₫311.667",
    "price": "499.000",
    "sellNumber": "Đã bán 10,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 44,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-sqpdzxozb7hve1_tn",
    "name": "Giày Clog Nữ Crocs Platform Classic",
    "originPrice": "",
    "price": "789.000",
    "sellNumber": "Đã bán 210",
    "location": "Đồng Nai"
  },
  {
    "id": 45,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhtvc1b9h6td78_tn",
    "name": "[Mã FATREND02 giảm đến 30k đơn 99k] Lót Giày Êm Chân Unisex BLUEWIND Siêu Nhẹ Dùng Cho Các Loại Giày 9305",
    "originPrice": "",
    "price": "30.000",
    "sellNumber": "Đã bán 53,6k",
    "location": "Hà Nội"
  },
  {
    "id": 46,
    "image": "https://down-vn.img.susercontent.com/file/f647238b6ffb2537654e0dfb7a54aba5_tn",
    "name": "Dép quai ngang nam da bò 100%, DONAVY cao cấp May Quai cá sấu, Hàng HANDMADE chắc chắn bao đi nước d.csdn",
    "originPrice": "",
    "price": "179.910",
    "sellNumber": "Đã bán 1,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 47,
    "image": "https://down-vn.img.susercontent.com/file/e7a12dd722daf62b23f5dd5782375b87_tn",
    "name": "Dép sandal IELGY thời trang mùa hè cho nữ",
    "originPrice": "",
    "price": "651.000",
    "sellNumber": "Đã bán 2,1k",
    "location": "Nước ngoài"
  },
  {
    "id": 48,
    "image": "https://down-vn.img.susercontent.com/file/2bdb5821f95a487f6d0ba4a75260e64a_tn",
    "name": "Giày Sneaker Vải Canvas Unisex Chính Hãng DINCOX C20 Black Sang Trọng Tinh Tế Đơn Giản",
    "originPrice": "",
    "price": "1.047.000",
    "sellNumber": "Đã bán 2,6k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 49,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lhe7n9vzazfj8c_tn",
    "name": "Giày thể thao RENBEN cổ thấp thời trang Hàn Quốc cho nữ",
    "originPrice": "",
    "price": "1.090.000",
    "sellNumber": "Đã bán 151",
    "location": "Nước ngoài"
  },
  {
    "id": 50,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134211-7qukw-lh0nbqdkf273da_tn",
    "name": "Dép Mũi Vuông Quai Mảnh Thời Trang Xuân Hè Phong Cách Hàn Quốc Cho Nữ",
    "originPrice": "",
    "price": "169.000",
    "sellNumber": "Đã bán 417",
    "location": "Nước ngoài"
  },
  {
    "id": 51,
    "image": "https://down-vn.img.susercontent.com/file/461112d0601b0c4a9adc5e7d2dc75dbf_tn",
    "name": "Giày nam oxford công sở da bò nappa cao cấp màu đen G103- Bụi leather- hộp sang trọng -Bảo hành 12 tháng",
    "originPrice": "",
    "price": "49.000",
    "sellNumber": "Đã bán 4k",
    "location": "Hà Nội"
  },
  {
    "id": 52,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-ldj8qwdugnnv92_tn",
    "name": "[Mã FATREND02 giảm đến 30k đơn 99k] Dép quai ngang nam nữ siêu nhẹ DUWA - Hàng chính hãng - SH9048",
    "originPrice": "",
    "price": "299.000",
    "sellNumber": "Đã bán 3,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 53,
    "image": "https://down-vn.img.susercontent.com/file/ff83ffffda6db8b1b0032cd25ca1a887_tn",
    "name": "Dép da nam quai ngang MMANS màu đen da tấm đế 2 lớp cao cấp tinh tế đơn giản êm ái sang trọng",
    "originPrice": "",
    "price": "873.000",
    "sellNumber": "Đã bán 522",
    "location": "Hà Nội"
  },
  {
    "id": 54,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-23030-1pyekk7uncove5_tn",
    "name": "Giày thể thao GUDETU thoáng khí theo phong cách Đức cổ điển thời trang cho nữ",
    "originPrice": "",
    "price": "940.000",
    "sellNumber": "Đã bán 277",
    "location": "Nước ngoài"
  },
  {
    "id": 55,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-li1e9f76x3oj0d_tn",
    "name": "Renben Dép Đi Trong Nhà Đế Dày Bằng EVA Hình Trái Sầu Riêng Dành Cho Nữ",
    "originPrice": "",
    "price": "1.795.000",
    "sellNumber": "Đã bán 106",
    "location": "Nước ngoài"
  },
  {
    "id": 56,
    "image": "https://down-vn.img.susercontent.com/file/a7694d2f8453c1c73ad46566daf26196_tn",
    "name": "Dép xỏ ngón nam chất liệu xốp thời trang Latoma TA0751 (Trắng phối xanh)",
    "originPrice": "",
    "price": "11.000",
    "sellNumber": "Đã bán 7,8k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 57,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134211-7qukw-lggl7ff8c77id2_tn",
    "name": "Giày Thể Thao Vải canvas Đế Dày Tăng Chiều Cao Thời Trang Mùa Xuân Mới Cho Nữ",
    "originPrice": "",
    "price": "99.000",
    "sellNumber": "Đã bán 248",
    "location": "Nước ngoài"
  },
  {
    "id": 58,
    "image": "https://down-vn.img.susercontent.com/file/bd48d4724a8e50436d47e1c400249cf8_tn",
    "name": "[Mã FATREND02 giảm đến 30k đơn 99k] Dép đúc quai ngang nam, nữ siêu nhẹ DUWA - Hàng chính hãng - SH193",
    "originPrice": "",
    "price": "119.000",
    "sellNumber": "Đã bán 9,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 59,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qvg4-lhkbrxs10vzob1_tn",
    "name": "FEIJIANU dép sandal nữ dép đế cao giày sandal nữ đi biển Thoải Mái Xinh Xắn 060313",
    "originPrice": "",
    "price": "352.500",
    "sellNumber": "Đã bán 146",
    "location": "Nước ngoài"
  }
];

module.exports = productData;