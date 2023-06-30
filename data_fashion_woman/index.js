const productData = [
  {
    "id": 0,
    "image": "https://down-vn.img.susercontent.com/file/f99ecd6b12f9eeb604c8542c73e29c14_tn",
    "name": "XIN LAN YA SHE Đầm Ngắn Tay Cổ Tròn Dáng Chữ A Giả Hai Lớp Phong Cách Hàn Quốc Cho Phụ Nữ Trung Niên",
    "originPrice": "₫173.000",
    "price": "89.000",
    "sellNumber": "Đã bán 1,9k",
    "location": "Nước ngoài"
  },
  {
    "id": 1,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-rfp1n1gqrpovca_tn",
    "name": "DIDIKA Bộ Áo Thun Ngắn Tay + Quần Short Thể Thao Ống Rộng Nhuộm Màu Thời Trang Mùa Hè Cho Nữ",
    "originPrice": "₫165.000",
    "price": "89.216",
    "sellNumber": "Đã bán 4,6k",
    "location": "Nước ngoài"
  },
  {
    "id": 2,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-li49aaffxhfad5_tn",
    "name": "Quần Dài Lưng Cao Ống Rộng Vải chiffon Lụa Lạnh Mỏng Thời Trang Cho Nữ",
    "originPrice": "₫132.000",
    "price": "109.900",
    "sellNumber": "Đã bán 6,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 3,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-23030-t75nzekzmfov19_tn",
    "name": "Xiang Nian Ni Đầm Cổ Búp Bê Thắt Nơ Trước Sau Phong Cách Hàn Quốc Thiết Kế Mỏng Dành Cho Nữ",
    "originPrice": "₫80.000",
    "price": "79.000",
    "sellNumber": "Đã bán 4,1k",
    "location": "Nước ngoài"
  },
  {
    "id": 4,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg2eum7cl7je56_tn",
    "name": "[Mã FATREND02 giảm đến 30k đơn 99k] Quần Ống Loe Lưng Cao Legging UMI Ôm Body P2H Dáng Dài QN04",
    "originPrice": "₫89.000",
    "price": "77.000",
    "sellNumber": "Đã bán 2,3k",
    "location": "Nam Định"
  },
  {
    "id": 5,
    "image": "https://down-vn.img.susercontent.com/file/2abddbe39845caa78e402b782fd891eb_tn",
    "name": "Áo Ngực Không Dây Không Gọng Nâng Ngực Chống Tuột Cài Trước Siêu Quyến Rũ DAN L&U A336",
    "originPrice": "₫123.000",
    "price": "49.000",
    "sellNumber": "Đã bán 26,8k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 6,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lh48x4udflukab_tn",
    "name": "Quần Dài Dáng Rộng Ống Đứng Dễ Phối Đồ Thời Trang Hàn Quốc 2023 Cho Bạn Gái",
    "originPrice": "₫190.000",
    "price": "49.000",
    "sellNumber": "Đã bán 549",
    "location": "Nước ngoài"
  },
  {
    "id": 7,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-nfkj4t7ufvov2f_tn",
    "name": "Áo thun from rộng nam nữ APT Unisex áo phông kiểu dáng Unisex chất liệu cotton khô 100% in hình Con Mèo tạo điểm nhấn",
    "originPrice": "₫30.000",
    "price": "59.000",
    "sellNumber": "Đã bán 4,5k",
    "location": "Thái Nguyên"
  },
  {
    "id": 8,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg7h82yopai21d_tn",
    "name": "[Mã FATREND02 giảm đến 30k đơn 99k] Quần Đùi Nữ Mặc Nhà Short Nữ Tập Gym Yoga P2H QN01",
    "originPrice": "₫38.000",
    "price": "96.900",
    "sellNumber": "Đã bán 5k",
    "location": "Nam Định"
  },
  {
    "id": 9,
    "image": "https://down-vn.img.susercontent.com/file/44b6997b6efcb3c02c4de0850cf12842_tn",
    "name": "Áo Bra không dây có đệm nâng ngực chất Su siêu mát lạnh soảng khoái - Wexuu Design BR06",
    "originPrice": "₫145.000",
    "price": "19.800",
    "sellNumber": "Đã bán 19,1k",
    "location": "Hà Nội"
  },
  {
    "id": 10,
    "image": "https://down-vn.img.susercontent.com/file/d335a04d8ae7286b8b1200528993ee55_tn",
    "name": "Quần đùi ngố kaki trơn Chollima ulzzang phong cách hàn quốc đơn giãn dễ phối đồ QS025",
    "originPrice": "₫270.000",
    "price": "19.000",
    "sellNumber": "Đã bán 21,8k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 11,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lh5m8ros631bd0_tn",
    "name": "Xiang Nian Ni Đầm Dài Tay Hở Vai Ôm Dáng Thiết Kế Ngọt Ngào Kiểu Pháp Cho Nữ",
    "originPrice": "₫70.000",
    "price": "95.600",
    "sellNumber": "Đã bán 1,4k",
    "location": "Nước ngoài"
  },
  {
    "id": 12,
    "image": "https://down-vn.img.susercontent.com/file/5731b7487de6c9d303bd96ccdbfbee37_tn",
    "name": "Áo thun XINLANYASHE dáng ôm tay ngắn họa tiết thêu chữ thời trang phong cách hàn quốc cho nữ",
    "originPrice": "₫120.000",
    "price": "115.000",
    "sellNumber": "Đã bán 5,1k",
    "location": "Nước ngoài"
  },
  {
    "id": 13,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-l6gjhznff2nvb4_tn",
    "name": "[Mã TOPS06 giảm đến 10k đơn 99k] Áo Thun Tay Ngắn Cổ Tròn In Hình Gấu Và Chữ Thời Trang Dành Cho Nữ",
    "originPrice": "₫136.000",
    "price": "38.000",
    "sellNumber": "Đã bán 3,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 14,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-6ir6rxlsp2kv26_tn",
    "name": "Quần Lót Nữ Đúc Su LADI Không Đường May Siêu Mỏng Mát Co Giãn 4 Chiều mẫu 810",
    "originPrice": "₫42.000",
    "price": "68.000",
    "sellNumber": "Đã bán 52,5k",
    "location": "Hà Nội"
  },
  {
    "id": 15,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgc9pgboudbr97_tn",
    "name": "Quần Short Nam Nữ Thêu ESSEFANST NAD Unisex Chất Cotton Tổ Ong - Quần Đùi Unisex Thể Thao Mặc Thoáng Mát QĐ 4",
    "originPrice": "₫336.000",
    "price": "80.000",
    "sellNumber": "Đã bán 1,3k",
    "location": "Hà Nội"
  },
  {
    "id": 16,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-hsftwliubrov57_tn",
    "name": "Bộ đồ ngủ DIDIKA ngắn tay dáng rộng in họa tiết hoạt hình dễ thương phong cách Hàn Quốc dành cho nữ cỡ lớn",
    "originPrice": "₫300.000",
    "price": "12.900",
    "sellNumber": "Đã bán 1,7k",
    "location": "Nước ngoài"
  },
  {
    "id": 17,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lgeqcr2o1c0802_tn",
    "name": "[Mã BTERT6 giảm đến 30k đơn 150k] Áo Thun cotton Tay Ngắn Cổ Tròn Màu Sắc Thời Trang Hàn Quốc Cho Nữ",
    "originPrice": "₫65.000",
    "price": "13.900",
    "sellNumber": "Đã bán 3,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 18,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-l9typ06xuyiv57_tn",
    "name": "XIN LAN YA SEH Bộ Đồ Ngủ Lông Xù Dày Ấm Áp Thoải Mái Dễ Thương Cho Nữ áo khoác lông tim",
    "originPrice": "₫180.000",
    "price": "89.000",
    "sellNumber": "Đã bán 3,5k",
    "location": "Nước ngoài"
  },
  {
    "id": 19,
    "image": "https://down-vn.img.susercontent.com/file/271b2463d4d7eb0fa70c76dbf6394b62_tn",
    "name": "Áo Chống Nắng 2 Lớp Toàn Thân BL Fashion Vải Thun Hạt Xoàn ,thoáng khí ,Túi Có Khoá Kéo",
    "originPrice": "₫198.000",
    "price": "69.900",
    "sellNumber": "Đã bán 18,3k",
    "location": "Hà Nội"
  },
  {
    "id": 20,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh9xkr2d884ye8_tn",
    "name": "Bộ Đồ Nam AVIANO Cổ Tròn Tay Ngắn, Bộ Thể Thao Nam Chất Liệu Poly Coolmax Thấm Hút Mồ Hôi",
    "originPrice": "₫5.800",
    "price": "25.000",
    "sellNumber": "Đã bán 83,1k",
    "location": "Hà Nội"
  },
  {
    "id": 21,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhk7q8rmtbk126_tn",
    "name": "Quần Lót Gen Nịt Bụng Nữ DUDIA Su Đúc Giúp Eo Thon Gọn [N36]",
    "originPrice": "₫152.000",
    "price": "156.000",
    "sellNumber": "Đã bán 39,7k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 22,
    "image": "https://down-vn.img.susercontent.com/file/88d247727b1c027d9ebd9f626bbc6e5d_tn",
    "name": "Quần Ống Rộng FKZ Unisex Chất Tổ Ong Collection Thể Thao Unisex Dày Dặn Phong Cách Ulzzang",
    "originPrice": "₫243.000",
    "price": "75.000",
    "sellNumber": "Đã bán 14,7k",
    "location": "Hà Nội"
  },
  {
    "id": 23,
    "image": "https://down-vn.img.susercontent.com/file/c0c68b5714cb6936eff1f487bcb0d833_tn",
    "name": "[Mã BTERT6 giảm đến 30k đơn 150k] Áo thun nữ form rộng tay lỡ Gấu Lotso 1084 HY STUDIO",
    "originPrice": "₫183.000",
    "price": "99.000",
    "sellNumber": "Đã bán 12,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 24,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg1r5924wv3e91_tn",
    "name": "[Mã INBAU15 giảm 15K đơn 99K] Dây cột tóc scrunchies Tafta bóng nhiều màu CaoCaobycaochen",
    "originPrice": "₫189.000",
    "price": "165.000",
    "sellNumber": "Đã bán 970",
    "location": "Hưng Yên"
  },
  {
    "id": 25,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-64j40lw6mzkvae_tn",
    "name": "XIN LAN YA SHE Áo Croptop Dệt Kim Tay Ngắn In Họa Tiết Quyến Rũ Phong Cách Hàn Quốc Cho Nữ",
    "originPrice": "₫231.667",
    "price": "55.000",
    "sellNumber": "Đã bán 4,1k",
    "location": "Nước ngoài"
  },
  {
    "id": 26,
    "image": "https://down-vn.img.susercontent.com/file/10295598f98733f2a36ad101f2e40c31_tn",
    "name": "[Mã BTERT6 giảm đến 30k đơn 150k] SUXI Áo thun tay ngắn cổ tròn màu sắc đơn giản phong cách mùa hè thời trang cho nữ",
    "originPrice": "₫30.000",
    "price": "139.000",
    "sellNumber": "Đã bán 10,5k",
    "location": "Nước ngoài"
  },
  {
    "id": 27,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfb0cssle73pa0_tn",
    "name": "[Mã TOPS06 giảm đến 10k đơn 99k] Áo Thun Baby Tee Form Fit Chữ B RYSO FASHION Chất Thun Co Dãn Dày dặn ôm body",
    "originPrice": "₫62.000",
    "price": "148.500",
    "sellNumber": "Đã bán 5,8k",
    "location": "Tiền Giang"
  },
  {
    "id": 28,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfajhvcycaei0a_tn",
    "name": "Xiang Nian Ni Quần Short Dáng Rộng Co Giãn In Hình Chú Voi Dễ Thương Mặc Ở Nhà Hàng Mới Dành Cho Nam Và Nữ",
    "originPrice": "₫329.000",
    "price": "2.958",
    "sellNumber": "Đã bán 1,1k",
    "location": "Nước ngoài"
  },
  {
    "id": 29,
    "image": "https://down-vn.img.susercontent.com/file/7f1439f70a35f07db3550dbf24221927_tn",
    "name": "Quần jean DADUHEY ống rộng lưng cao 6 màu sắc tùy chọn thời trang đường phố sành điệu dành cho nữ",
    "originPrice": "₫266.976",
    "price": "76.000",
    "sellNumber": "Đã bán 21,9k",
    "location": "Nước ngoài"
  },
  {
    "id": 30,
    "image": "https://down-vn.img.susercontent.com/file/6ce8359c65b2dfcfb2c10f6df9f5e5d9_tn",
    "name": "Áo kiểu NZN dệt kim tay ngắn cổ tròn họa tiết kẻ sọc ngang thời trang Hàn Quốc dành cho nữ",
    "originPrice": "₫375.552",
    "price": "145.800",
    "sellNumber": "Đã bán 17,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 31,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134211-7qukw-lh1xtjqv1zhvd0_tn",
    "name": "Áo thun đôi nam nữ trái tim sơn hồng unisex tay lỡ from rộng và áo croptop baby tee mặc cặp cotton A101 L66studio",
    "originPrice": "₫12.000",
    "price": "85.000",
    "sellNumber": "Đã bán 2,7k",
    "location": "Hà Nội"
  },
  {
    "id": 32,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfp2ra7ro3w81a_tn",
    "name": "[Mã BTERT6 giảm đến 30k đơn 150k] Áo Thun 100% Cotton Tay Ngắn Dáng Rộng In Họa Tiết Thời Trang Mùa Hè Cho Nữ",
    "originPrice": "₫220.000",
    "price": "89.000",
    "sellNumber": "Đã bán 1,3k",
    "location": "Nước ngoài"
  },
  {
    "id": 33,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgt54xvfq703cc_tn",
    "name": "Bộ jumpsuit liền quần kiểu cổ sơ mi tay ngắn thời trang mặc mùa hè chất vải kaki mềm Deliz ChouChou",
    "originPrice": "₫395.000",
    "price": "137.000",
    "sellNumber": "Đã bán 3,7k",
    "location": "Hà Nội"
  },
  {
    "id": 34,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-cetf9nogwtjv99_tn",
    "name": "【Xiaozhainv】Áo Sơ Mi Tay Dài Dáng Rộng Thời Trang Cho Nữ",
    "originPrice": "₫216.000",
    "price": "153.600",
    "sellNumber": "Đã bán 22,9k",
    "location": "Nước ngoài"
  },
  {
    "id": 35,
    "image": "https://down-vn.img.susercontent.com/file/d09ce32a1ad541d24e7ea852f3936f12_tn",
    "name": "[Mã FATREND02 giảm đến 30k đơn 99k] Quần lót nữ thun lạnh đúc su không đường may cao cấp mặc thoải mái DEVARI A09",
    "originPrice": "₫350.000",
    "price": "75.000",
    "sellNumber": "Đã bán 52,9k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 36,
    "image": "https://down-vn.img.susercontent.com/file/e8f93ab679a682a147c16662c083fdfd_tn",
    "name": "Áo Lót Lụa Không Gọng Thoải Mái Dành Cho Nữ",
    "originPrice": "₫258.000",
    "price": "89.000",
    "sellNumber": "Đã bán 20,8k",
    "location": "Nước ngoài"
  },
  {
    "id": 37,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li48tj5gip5ea2_tn",
    "name": "[Mã BTERT6 giảm đến 30k đơn 150k] Áo thun phông trơn nam nữ cổ tròn FIDE LỌ HOA (TẶNG KÈM HOA TULIP)",
    "originPrice": "₫150.000",
    "price": "75.000",
    "sellNumber": "Đã bán 1,6k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 38,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-ler431ufvnnu0e_tn",
    "name": "Áo Khoác Cardigan Có Mũ Trùm Phối Khóa Kéo Mẫu Mới 2022 Thời Trang Xuân Hè Cho Nữ",
    "originPrice": "₫121.000",
    "price": "199.000",
    "sellNumber": "Đã bán 6,1k",
    "location": "Nước ngoài"
  },
  {
    "id": 39,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-ox47946xloov25_tn",
    "name": "Bộ đồ ngủ DIDIKA tay dài phong cách thời trang tùy chọn màu sắc dành cho nữ",
    "originPrice": "₫29.000",
    "price": "127.416",
    "sellNumber": "Đã bán 4,1k",
    "location": "Nước ngoài"
  },
  {
    "id": 40,
    "image": "https://down-vn.img.susercontent.com/file/ba212bf1226098dc130eecb987102ddb_tn",
    "name": "[Mã FATREND02 giảm đến 30k đơn 99k] Quần lót nữ đúc su thun lạnh cao cấp kháng khuẩn Tahe",
    "originPrice": "₫190.000",
    "price": "215.000",
    "sellNumber": "Đã bán 3k",
    "location": "Hà Nội"
  },
  {
    "id": 41,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lib2a8nulmvg7f_tn",
    "name": "[Mã TOPS06 giảm đến 10k đơn 99k] Áo Thun in Charm chữ Calem.Club - Áo phông tay lỡ form unisex brand Calem chính hãng",
    "originPrice": "₫263.636",
    "price": "235.000",
    "sellNumber": "Đã bán 2,8k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 42,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lidyssaj8atucc_tn",
    "name": "Miếng dán ngực cài trước siêu nâng ngực siêu dính, Áo bra dán Ngực Silicon bàn tay hở lưng Eva Bra 0127",
    "originPrice": "₫518.000",
    "price": "125.000",
    "sellNumber": "Đã bán 51,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 43,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-levcep7y8j8723_tn",
    "name": "Quần Jean xuông HAZEE chất liệu cotton co giãn mặc thoải mái cho nam và nữ phom Ống Rộng Dáng Suông",
    "originPrice": "₫65.000",
    "price": "149.000",
    "sellNumber": "Đã bán 1,9k",
    "location": "Hà Nội"
  },
  {
    "id": 44,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qvd2-lfrj9q45k9mt87_tn",
    "name": "NRVP Áo Thun 100% Cotton Tay Ngắn Dáng Rộng Phong Cách Hàn Quốc Thời Trang Mùa Hè Mới Cho Nữ",
    "originPrice": "₫60.900",
    "price": "15.500",
    "sellNumber": "Đã bán 649",
    "location": "Nước ngoài"
  },
  {
    "id": 45,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lf00son6z3wqed_tn",
    "name": "Quần ống loe Choobe lưng cạp cao 2 cúc baggy vải nữ dài suông loe culottes màu đen nâu",
    "originPrice": "",
    "price": "31.880",
    "sellNumber": "Đã bán 16,6k",
    "location": "Hà Nội"
  },
  {
    "id": 46,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf5am8o00vpmb9_tn",
    "name": "Hoodie chui đầu TEM SU - Áo Nỉ Chui đầu brand Calem.Club form unisex nam nữ",
    "originPrice": "",
    "price": "199.000",
    "sellNumber": "Đã bán 4,1k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 47,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf29nkej1itm9f_tn",
    "name": "Bộ Quần Áo Thể Thao Nam Mùa Hè Polo Chất Thun Cá Sấu Co Giãn J9",
    "originPrice": "",
    "price": "139.900",
    "sellNumber": "Đã bán 3,4k",
    "location": "Hà Nội"
  },
  {
    "id": 48,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-zyvf0vn0j6nvd7_tn",
    "name": "Áo sơ mi đi biển, bộ đồ đôi hoa quả hoạ tiết nam nữ quan ao hawaii Kate Thái - ALIBU",
    "originPrice": "",
    "price": "189.900",
    "sellNumber": "Đã bán 41,2k",
    "location": "Hà Nội"
  },
  {
    "id": 49,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-zsysiq6kwvov4d_tn",
    "name": "[Mã TOPS06 giảm đến 10k đơn 99k] Áo thun Unisex 5 màu FKZ Unisex phông cotton nam nữ tay lỡ oversize form rộng",
    "originPrice": "",
    "price": "6.000",
    "sellNumber": "Đã bán 1,9k",
    "location": "Hà Nội"
  },
  {
    "id": 50,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfdqrqjux4sk1c_tn",
    "name": "[Mã BMLTA35 giảm đến 35K đơn 99K] Áo Khoác Dù Nam Nữ Cổ Đứng Phối Sọc Và Logo Tay In Chữ Trước Mẫu Mới - CLITUS",
    "originPrice": "",
    "price": "159.000",
    "sellNumber": "Đã bán 1,6k",
    "location": "Đắk Lắk"
  },
  {
    "id": 51,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lhpwfdk2oecebf_tn",
    "name": "Quần Đi Bộ Đi Bộ!! Quần Ngủ Dài Dáng Rộng Thoáng Khí Thời Trang Xuân Thu Hàng Mới Dành Cho Bạn Nữ Mặc Ở Nhà / Ngoài Trời",
    "originPrice": "",
    "price": "22.000",
    "sellNumber": "Đã bán 349",
    "location": "Nước ngoài"
  },
  {
    "id": 52,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-leqmob8rikkze4_tn",
    "name": "Quần lót nữ cotton kẻ sọc cao cấp kháng khuẩn tôn dáng gợi cảm, họa tiết dễ thương và cute DEVARI L861",
    "originPrice": "",
    "price": "65.000",
    "sellNumber": "Đã bán 13,4k",
    "location": "TP. Hồ Chí Minh"
  },
  {
    "id": 53,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lh2q46q2c8rgb4_tn",
    "name": "XIN LAN YA SHE Quần Yếm Denim Ngắn Dáng Rộng Thời Trang Hàn Quốc 2023 Dễ Thương Cho Nữ",
    "originPrice": "",
    "price": "197.500",
    "sellNumber": "Đã bán 1,9k",
    "location": "Nước ngoài"
  },
  {
    "id": 54,
    "image": "https://down-vn.img.susercontent.com/file/b15c65cd77c740791959780cecc9b9bd_tn",
    "name": "Quần short denim JSC lưng cao ôm dáng phong cách Hàn Quốc thời trang mùa hè 2023",
    "originPrice": "",
    "price": "99.000",
    "sellNumber": "Đã bán 2,5k",
    "location": "Nước ngoài"
  },
  {
    "id": 55,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhmstkwahv414c_tn",
    "name": "Bộ Đồ Nam AVIANO Viền Vai Kẻ Sọc, Bộ Thể Thao Nam Cổ Tròn Tay Ngắn Chất Liệu Poly Coolmax Thấm Hút Mồ Hôi",
    "originPrice": "",
    "price": "209.000",
    "sellNumber": "Đã bán 714",
    "location": "Hà Nội"
  },
  {
    "id": 56,
    "image": "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lgd1xk7ssolaff_tn",
    "name": "Quần Short Mặc Ở Nhà Dáng Rộng In Họa Tiết Hoạt Hình Thời Trang Mùa Hè Cho Nữ",
    "originPrice": "",
    "price": "219.000",
    "sellNumber": "Đã bán 1,4k",
    "location": "Nước ngoài"
  },
  {
    "id": 57,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lifgw7fy7tvw4a_tn",
    "name": "Váy sơ mi liền thân DELIZ tiểu thư mặc đi tiệc nhiều màu phong cách hàn quốc",
    "originPrice": "",
    "price": "219.000",
    "sellNumber": "Đã bán 4k",
    "location": "Hà Nội"
  },
  {
    "id": 58,
    "image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfa3im19xh0712_tn",
    "name": "Váy ngủ 2 dây lụa satin cao cấp 4Lova mềm mịn, quyến rũ",
    "originPrice": "",
    "price": "139.000",
    "sellNumber": "Đã bán 20,3k",
    "location": "Hà Nội"
  },
  {
    "id": 59,
    "image": "https://down-vn.img.susercontent.com/file/sg-11134201-7qvds-lhfx4gk714ha62_tn",
    "name": "Áo nịt Lovito thoáng khí in chữ L00004 (màu đen/be)",
    "originPrice": "",
    "price": "39.000",
    "sellNumber": "Đã bán 24,8k",
    "location": "Nước ngoài"
  }
];

module.exports = productData;