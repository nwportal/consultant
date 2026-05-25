// Auto-extracted from index.html — do not edit by hand if you also edit inline
window.QUESTIONS = [
  // ========== PART 1: A. Item Tracking ==========
  { id: 1, section: "A. Item Tracking & Truy xuất nguồn gốc", q: "Để bắt buộc tracking Lot + hạn dùng cho mặt hàng thực phẩm, setup nào trong BC là cần thiết?",
    options: [
      "Bật \"Lot No.\" và \"Expiration Date Required\" trong Item Tracking Code, sau đó gán cho Item Card",
      "Tạo Variant Code cho mỗi lô",
      "Tạo SKU riêng cho mỗi lô",
      "Nhập số lô trong trường Description của Item"
    ], correct: 0, exp: [
      "A đúng: Item Tracking Code (Setup → Inventory) quy định Item nào yêu cầu Lot/Serial, có Expiration Date Required, cho phép thay đổi sau posting (Man. Expir. Date Entry Reqd.), kiểm tra hạn khi xuất (SN/Lot Specific Tracking). Gán Item Tracking Code vào Item Card.",
      "B sai: Variant Code dùng cho biến thể (hương vị, size đóng gói), không track từng lô và không liên kết hạn dùng.",
      "C sai: SKU là cấu hình tồn kho theo Location/Variant, không thay thế Lot.",
      "D sai: Ghi Description không phục vụ truy xuất tự động qua Item Tracing."
    ]},
  { id: 2, section: "A. Item Tracking & Truy xuất nguồn gốc", q: "Bật \"Strict Expiration Posting\" trên Item Tracking Code có tác dụng gì?",
    options: [
      "Cho phép xuất kho hàng đã hết hạn nhưng cảnh báo",
      "Cấm posting bất kỳ giao dịch xuất nào liên quan đến Lot đã quá hạn",
      "Tự động xóa Lot hết hạn",
      "In hạn dùng lên hóa đơn"
    ], correct: 1, exp: [
      "B đúng: Strict Expiration Posting chặn hoàn toàn việc post Sales/Transfer/Consumption với lô quá ngày hạn dùng tại thời điểm posting. Kiểm soát bắt buộc cho thực phẩm/dược.",
      "A sai: Chưa bật strict, BC chỉ cảnh báo. Bật strict mới chặn hoàn toàn.",
      "C sai: BC không tự xóa Lot. Lô quá hạn vẫn tồn cho đến khi Item Reclassification hoặc Negative Adjustment.",
      "D sai: In Expiration là cấu hình Report Layout, không liên quan Strict Expiration."
    ]},
  { id: 3, section: "A. Item Tracking & Truy xuất nguồn gốc", q: "Khách đặt lô sữa cận date (còn 5 ngày), kho còn lô 20 ngày. Picker quét lô 20 ngày và BC cho phép xuất. Tại sao và cách khắc phục?",
    options: [
      "BC mặc định không enforce FEFO — cần bật \"Pick According to FEFO\" trong Warehouse Setup hoặc dùng Calculate Pick để gợi ý đúng lô",
      "BC tự FEFO — đây là lỗi hệ thống",
      "Phải cấu hình bằng AL extension",
      "Phải nâng cấp lên Premium"
    ], correct: 0, exp: [
      "A đúng: FEFO không bật mặc định. Bật Pick According to FEFO ở Warehouse Setup hoặc Location Card. Khi tạo Pick từ SO, hệ thống gợi ý lô có Expiration Date sớm nhất.",
      "B sai: Không có FEFO mặc định — phải bật setup.",
      "C sai: Tính năng có sẵn trong BC standard.",
      "D sai: Tính năng có cả Essentials và Premium."
    ]},

  // ========== B. Warehouse & UoM ==========
  { id: 4, section: "B. Warehouse & Multi-UoM", q: "Sữa tươi 1L: mua theo thùng (12 chai), lưu thùng, bán siêu thị theo thùng, bán tạp hóa theo chai. Setup BC?",
    options: [
      "Tạo 2 Item riêng (thùng và chai)",
      "1 Item, Base UoM = PCS (chai), thêm Item UoM \"BOX\" Qty per UoM = 12; Purchase UoM = BOX, Sales UoM linh hoạt theo Customer/Order line",
      "Dùng Variant Code",
      "Dùng SKU riêng cho thùng"
    ], correct: 1, exp: [
      "B đúng: BC hỗ trợ Item Unit of Measure đa cấp. Base UoM = đơn vị nhỏ nhất (PCS). BOX có Qty per UoM = 12. Mua 100 BOX → tồn kho 1,200 PCS.",
      "A sai: Tách 2 Item phình master data, không quản lý tồn thống nhất.",
      "C sai: Variant cho biến thể đặc tính, không phải UoM.",
      "D sai: SKU theo location, không liên quan UoM."
    ]},
  { id: 5, section: "B. Warehouse & Multi-UoM", q: "BC tính giá vốn nhập thùng nhưng xuất chai như thế nào?",
    options: [
      "Phải nhập giá riêng cho từng UoM",
      "Cost lưu theo Base UoM; xuất theo UoM khác, BC tự quy đổi theo Qty per UoM",
      "BC không quy đổi được — cần custom",
      "Xuất chai luôn dùng Standard Cost"
    ], correct: 1, exp: [
      "B đúng: Unit Cost trên Item Card luôn lưu theo Base UoM. Mua 100 BOX × 1,200,000 VND/BOX → cost/PCS = 100,000 VND. Tự động.",
      "A/C/D sai: Không cần thiết hoặc trái nguyên lý."
    ]},
  { id: 6, section: "B. Warehouse & Multi-UoM", q: "Catch Weight (thịt, hải sản — mua bán theo cân thực) trong BC standard:",
    options: [
      "Hỗ trợ native, chỉ cần bật flag",
      "KHÔNG hỗ trợ native — cần ISV (Aptean Food & Beverage, BMS Vision, LS Central Food) hoặc custom AL",
      "Hỗ trợ qua module Service",
      "Hỗ trợ qua Assembly"
    ], correct: 1, exp: [
      "B đúng: BC tính tồn kho và giá vốn theo một con số duy nhất mỗi line. Catch weight cần 2 đơn vị độc lập (số con + kg). Không có trong BC core — cần ISV ngành.",
      "A/C/D sai: Không có cơ chế track 2 đơn vị độc lập trên cùng line trong BC core."
    ]},
  { id: 7, section: "B. Warehouse & Multi-UoM", q: "Kho có 3 vùng: thường, mát, lạnh. Gợi ý put-away đúng vùng theo đặc tính item:",
    options: [
      "Item Category",
      "Warehouse Class Code gán cho Bin + Item, kết hợp Put-away Template",
      "Variant Code",
      "Location Code khác nhau"
    ], correct: 1, exp: [
      "B đúng: Warehouse Class Code (Setup → Warehouse) phân loại class (Ambient/Chill/Frozen). Gán Class cho Bin và Item. Put-away chỉ gợi ý bin có Class trùng.",
      "A sai: Item Category cho báo cáo, không drive logic put-away.",
      "C sai: Variant không liên quan logic kho.",
      "D sai: Tách Location phải Transfer Order mọi giao dịch nội bộ — tốn kém."
    ]},
  { id: 8, section: "B. Warehouse & Multi-UoM", q: "Khác biệt Inventory Pick (Basic WH) vs Warehouse Pick (Advanced WH)?",
    options: [
      "Giống nhau",
      "Inventory Pick = 1 bước (post pick = post shipment); Warehouse Pick = 2 bước (Pick → Shipment), hỗ trợ bin, zone, multi-order",
      "Inventory Pick chỉ cho hàng dược",
      "Warehouse Pick chỉ cho production"
    ], correct: 1, exp: [
      "B đúng: Inventory Pick phù hợp kho nhỏ, không bin (Location \"Require Pick\"). Warehouse Pick (Location \"Directed Put-away and Pick\" + Bin Mandatory) tách Pick và Shipment, hỗ trợ Wave, Cross-dock, Bin Ranking."
    ]},

  // ========== C. Planning ==========
  { id: 9, section: "C. Planning & Replenishment", q: "Sữa A tiêu thụ ~500 thùng/tuần, lead time 3 ngày, biến động ±20%. Reordering Policy?",
    options: [
      "Fixed Reorder Qty. với Reorder Point + Reorder Quantity",
      "Lot-for-Lot không có safety",
      "Order (SO-driven, không stock)",
      "Maximum Qty. với Min = 0"
    ], correct: 0, exp: [
      "A đúng: Hàng nhu cầu đều → Fixed Reorder Qty. với RP (Safety + LT demand) và RQ (EOQ/lot size vendor). Thêm Safety Stock Quantity chống biến động.",
      "B sai: Lot-for-Lot cho nhu cầu rời rạc/dự án, tạo quá nhiều PO nhỏ với FMCG.",
      "C sai: Order tạo PO riêng cho từng SO — không stock.",
      "D sai: Maximum Qty chỉ ổn khi nhu cầu cực ổn định."
    ]},
  { id: 10, section: "C. Planning & Replenishment", q: "Stockkeeping Unit (SKU) trong BC dùng khi nào?",
    options: [
      "Khi cùng Item có chính sách replenishment khác nhau theo Location (HCM vendor X, HN vendor Y; reorder point khác)",
      "Khi cần track Lot",
      "Khi cần variant",
      "Khi muốn đổi tên Item"
    ], correct: 0, exp: [
      "A đúng: SKU là \"phân thân\" Item theo Location/Variant. Set riêng Reordering Policy, Vendor, Lead Time, Safety Stock, RP, RQ theo từng kho. Planning Worksheet ưu tiên SKU nếu có."
    ]},
  { id: 11, section: "C. Planning & Replenishment", q: "Vendor nhập khẩu lead time 30 ngày + 7 ngày kiểm dịch. Cấu hình BC tính đúng:",
    options: [
      "Lead Time Calculation trên Item Card (hoặc SKU) = \"37D\"; thêm Safety Lead Time để buffer",
      "Tăng Reorder Point lên cao",
      "Đặt Min = 30 ngày tồn kho",
      "Tạo Sales Order ảo"
    ], correct: 0, exp: [
      "A đúng: Lead Time Calculation là datetime formula (\"37D\"). Safety Lead Time là buffer. Có thêm Inbound Whse. Handling Time.",
      "B sai: Tăng RP phình tồn, không sửa được sai lệch ngày."
    ]},
  { id: 12, section: "C. Planning & Replenishment", q: "Vendor giao 1 lần/tuần (thứ Tư). Để Planning không đề xuất PO ngoài thứ Tư:",
    options: [
      "Order Modifier kết hợp Shipping Agent calendar",
      "Cấu hình Base Calendar + Customized Calendar cho Vendor; thứ Tư = working, các ngày khác = non-working",
      "Xóa Vendor",
      "Không làm được trong BC"
    ], correct: 1, exp: [
      "B đúng: BC có Base Calendar + Customized Calendar gán cho Company/Location/Customer/Vendor/Shipping Agent. Planning tự dời Order Date về ngày Vendor working."
    ]},

  // ========== D. Pricing ==========
  { id: 13, section: "D. Pricing, Discount & Promotion", q: "Khách Big M giá đặc biệt cho 50 mã. BC 19+ cấu hình:",
    options: [
      "Tạo Price List loại Sales, Source Type = Customer, Source No. = Big M, thêm dòng cho 50 Item với Unit Price/Discount % và date range",
      "Sửa Unit Price trên Item Card",
      "Tạo Customer mới",
      "Dùng Variant Code"
    ], correct: 0, exp: [
      "A đúng: BC 19+ dùng Price Lists (thay Sales Prices/Line Discounts cũ). Có Source, date range, currency, status. Nhập hàng loạt qua Suggest Lines.",
      "B sai: Sửa Unit Price ảnh hưởng tất cả khách."
    ]},
  { id: 14, section: "D. Pricing, Discount & Promotion", q: "Khuyến mãi \"Mua 5 thùng tặng 1 thùng cùng loại\" — BC standard:",
    options: [
      "Native hoàn toàn, có form khai báo BOGO",
      "KHÔNG có UI BOGO native. Dùng Sales Line Discount theo bậc Min Qty (mua 6 tính tiền 5 → giảm 16.67%) hoặc ISV (LS Central, Insight Works)",
      "Dùng Assembly",
      "Tạo Bundle Item"
    ], correct: 1, exp: [
      "B đúng: BC standard không có UI BOGO. Phổ biến: Sales Line Discount Min Qty 6 → giảm 16.67%. Hoặc dòng tặng phẩm thủ công (chú ý thuế VAT theo TT 219/2013). Hoặc ISV."
    ]},
  { id: 15, section: "D. Pricing, Discount & Promotion", q: "Khách FMCG yêu cầu Rebate cuối năm (mua đủ 10 tỷ → trả lại 2%). BC core:",
    options: [
      "Có module Rebate sẵn",
      "Cần ISV (Aptean Food, JustFood, Insight Works Rebate Management) hoặc custom trên Customer Ledger + report",
      "Dùng Sales Discount",
      "Ghi nhận thủ công cuối kỳ"
    ], correct: 1, exp: [
      "B đúng: Rebate (accrual theo doanh số, settlement định kỳ) không có BC core. Cần ISV chuyên ngành hoặc tự xây extension lưu Rebate Agreement + job accrual + Credit Memo cuối kỳ."
    ]},

  // ========== E. Tài chính & VN ==========
  { id: 16, section: "E. Tích hợp Tài chính & Đặc thù VN", q: "Post Sales Shipment cho 1 SO, BC sinh giao dịch nào?",
    options: [
      "Item Ledger Entry (Negative), Value Entry (COGS), CHƯA tạo Customer Ledger / G/L Entry doanh thu (chỉ khi post Invoice)",
      "Cả COGS và doanh thu cùng lúc khi ship",
      "Chỉ Item Ledger Entry",
      "Tạo Bank Ledger Entry"
    ], correct: 0, exp: [
      "A đúng: BC tách Ship và Invoice. Ship: ILE + Value Entry (COGS Interim & Inventory Interim nếu Automatic Cost Posting bật). Invoice: G/L Sales + AR + VAT + chuyển COGS Interim sang final."
    ]},
  { id: 17, section: "E. Tích hợp Tài chính & Đặc thù VN", q: "Hóa đơn điện tử (NĐ 123, TT 78) tích hợp BC, cách thông dụng:",
    options: [
      "BC core có sẵn e-Invoice VN",
      "Connector/extension từ NCC Việt Nam (Viettel SInvoice, MISA meInvoice, VNPT, FPT eInvoice) qua API — đẩy Posted Sales Invoice → ký số → gửi CQT",
      "Xuất Excel rồi nhập tay",
      "Không cần e-invoice nếu khách hàng nội bộ"
    ], correct: 1, exp: [
      "B đúng: BC core chỉ hỗ trợ PEPPOL/OIOUBL. VN cần connector localization. Extension đọc Posted Sales Invoice, mapping XML, ký số HSM, gửi qua NCC, nhận mã CQT.",
      "D sai: Mọi giao dịch bán hàng phải có e-invoice (trừ một số miễn)."
    ]},
  { id: 18, section: "E. Tích hợp Tài chính & Đặc thù VN", q: "Truy xuất nguồn gốc theo Lot trong BC dùng tool nào?",
    options: [
      "Report \"Inventory – List\"",
      "Item Tracing page (lookup theo Lot No.) — trace upstream (về PO/Vendor) và downstream (tới Sales Shipment/Customer)",
      "SQL trực tiếp",
      "Excel pivot"
    ], correct: 1, exp: [
      "B đúng: Item Tracing nhập Lot No., chọn Trace Method (Origin → Usage / Usage → Origin), trả về cây giao dịch đầy đủ. Tool quyết định recall."
    ]},

  // ========== F. Vận hành ==========
  { id: 19, section: "F. Vận hành & Suy luận", q: "Tồn kho hệ thống 100, đếm thực 95. Xử lý chuẩn:",
    options: [
      "Sửa trực tiếp số trên Item Card",
      "Physical Inventory Journal (Calculate Inventory → nhập số đếm thực → Post). Hệ thống sinh adjustment, ảnh hưởng COGS/Inventory G/L",
      "Xóa item",
      "Tạo Negative Sales Order"
    ], correct: 1, exp: [
      "B đúng: Phys. Inventory Journal là quy trình chuẩn audit. Calculate Inventory snapshot → user điền Qty (Phys. Inventory) → Post sinh ILE adjustment + G/L (Inventory Adjustment Account). Bin-controlled: Whse. Phys. Inventory Journal."
    ]},
  { id: 20, section: "F. Vận hành & Suy luận", q: "Item Reclassification Journal vs Item Journal khác nhau?",
    options: [
      "Giống nhau",
      "Reclassification đổi thuộc tính (Location, Bin, Variant, Lot, Expiration) KHÔNG đổi số lượng/giá vốn; Item Journal +/- số lượng",
      "Reclassification chỉ cho production",
      "Item Journal chỉ cho Sales"
    ], correct: 1, exp: [
      "B đúng: Reclass = \"đổi tên/đổi vị trí\" trên cùng số lượng (chuyển Bin, đổi sai Lot, gia hạn Expiration). Item Journal Adjustment = thay đổi số lượng. Cả 2 đều post ILE nhưng entry type khác."
    ]},
  { id: 21, section: "F. Vận hành & Suy luận", q: "Vendor tăng giá nhập (Invoice cao hơn PO). Average Costing xử lý chênh lệch:",
    options: [
      "Tự động cập nhật Unit Cost trung bình; chạy Adjust Cost – Item Entries để cập nhật ngược các giao dịch xuất đã post",
      "Báo lỗi",
      "Bỏ qua chênh lệch",
      "Tự tạo Credit Memo"
    ], correct: 0, exp: [
      "A đúng: Average Costing tính lại Unit Cost mỗi Inbound. Adjust Cost – Item Entries redistribute chênh lệch lên Outbound entries liên kết, cập nhật COGS và G/L. Bật Automatic Cost Adjustment hoặc chạy định kỳ."
    ]},
  { id: 22, section: "F. Vận hành & Suy luận", q: "Item Charge (cước vận chuyển, customs, kiểm dịch) dùng để:",
    options: [
      "Tính cước cho khách",
      "Phân bổ chi phí phụ vào giá vốn (landed cost) — Assign vào Purchase Receipt lines theo Amount/Equally/Weight/Volume",
      "Tính lương",
      "Tính chiết khấu"
    ], correct: 1, exp: [
      "B đúng: Item Charge là cơ chế landed cost BC. Tạo PI cho dịch vụ → assign Item Charge sang Receipt lines → Value Entry update, chi phí vào Inventory cost. Quan trọng với hàng NK thực phẩm."
    ]},
  { id: 23, section: "F. Vận hành & Suy luận", q: "Đơn < 5 triệu cộng phí ship 200k. BC standard?",
    options: [
      "Tự động qua Order Charge dynamic theo Subtotal",
      "KHÔNG có rule tự động theo subtotal native — workflow/extension hoặc thủ công thêm dòng \"Shipping Fee\" trên SO",
      "Sales Discount âm",
      "Tự sinh khi post"
    ], correct: 1, exp: [
      "B đúng: BC không có rule \"if subtotal < X then add charge Y\". Phương án: (1) Thêm dòng SO G/L Account/Resource \"Shipping\" thủ công; (2) Workflow validate; (3) ISV add-on."
    ]},
  { id: 24, section: "F. Vận hành & Suy luận", q: "Drop Shipment vs Special Order khác nhau:",
    options: [
      "Drop Shipment: hàng đi thẳng Vendor → Customer (không qua kho mình), từ SO link sang PO; Special Order: hàng về kho mình rồi mới giao, PO reserved cho SO cụ thể",
      "Giống nhau",
      "Drop Shipment chỉ cho dịch vụ",
      "Special Order chỉ cho hàng tồn"
    ], correct: 0, exp: [
      "A đúng: Drop Shipment đánh dấu trên Sales Line, PO sinh với Sell-to = customer cuối, Vendor giao thẳng. Special Order: hàng về kho mình trước, reserved cho SO từ khi PO tạo."
    ]},
  { id: 25, section: "F. Vận hành & Suy luận", q: "Sample/biếu khách (giảm tồn kho, không doanh thu). BC chuẩn:",
    options: [
      "Tạo Sales Order giá 0",
      "Item Journal Negative Adjmt., G/L Account = chi phí Marketing/Sample, hoặc SO giá 0 (chú ý VAT TT 219/2013: hàng biếu tặng phải xuất hóa đơn với giá tính thuế = giá thị trường)",
      "Xóa khỏi tồn kho bằng SQL",
      "Bỏ qua"
    ], correct: 1, exp: [
      "B đúng: 2 cách hợp lệ: (1) Item Journal Neg. Adjmt. + G/L \"Chi phí biếu tặng\"; (2) SO giá 0 cho customer \"Khuyến mãi\". Xuất hóa đơn cho hàng biếu tặng là yêu cầu pháp lý VN. Tách Posting Group để hạch toán đúng."
    ]},

  // ========== Suy luận nâng cao ==========
  { id: 26, section: "F. Vận hành & Suy luận", q: "Bia chai 330ml đóng thùng 24 chai và lốc 6 chai. Cùng 1 chai vật lý. Setup BC?",
    options: [
      "Tạo 3 Item: chai, lốc, thùng",
      "1 Item, Base UoM = PCS, 2 Item UoM: SIXPACK (Qty=6), CASE (Qty=24)",
      "Variant: SIXPACK, CASE",
      "SKU theo UoM"
    ], correct: 1, exp: [
      "B đúng: Cùng 1 chai vật lý, chỉ khác cách đóng gói tính tiền. Base = PCS, UoM khác là conversion. Mua/bán linh hoạt, chỉ 1 tồn kho theo PCS.",
      "A sai: Phình master data.",
      "C sai: Variant cho biến thể đặc tính, không phải gói."
    ]},
  { id: 27, section: "F. Vận hành & Suy luận", q: "Hàng NK cần C/O form D, ATIGA ưu đãi thuế. BC lưu thông tin C/O ở đâu?",
    options: [
      "Description trên PO line",
      "Document Attachments trên PO/Receipt + custom field \"C/O No.\" trên Lot No. Information (gắn từng Lot)",
      "File ngoài Excel",
      "Comments của Vendor"
    ], correct: 1, exp: [
      "B đúng: BC có Document Attachment native (đính file PDF C/O). Custom field \"C/O Number\", \"C/O Form\", \"Country of Origin\" trên Lot No. Information Card → Lot mang theo thông tin C/O suốt vòng đời."
    ]},
  { id: 28, section: "F. Vận hành & Suy luận", q: "Báo cáo P&L theo kênh (MT/GT/Online) chuẩn nhất qua:",
    options: [
      "Tạo 3 Company khác nhau",
      "Setup Dimension \"CHANNEL\" + Default Dimension trên Customer Card; giao dịch tự flow Dimension; Account Schedule filter theo Dimension",
      "Sửa COA thêm tài khoản từng kênh",
      "Excel pivot từ Sales History"
    ], correct: 1, exp: [
      "B đúng: BC support 8 global dimensions. Setup CHANNEL = MT/GT/ONL, Default Dimension trên Customer → SO/Invoice tự fill → G/L Entry có Dimension → Account Schedule cho ra P&L kênh."
    ]},
  { id: 29, section: "F. Vận hành & Suy luận", q: "Khách từ chối hàng tại cửa kho (đã Ship, chưa Invoice). Đơn giản nhất:",
    options: [
      "Hủy SO và tạo mới",
      "Undo Shipment trên Posted Sales Shipment (đảo ngược, đưa hàng về kho)",
      "Tạo Sales Return Order",
      "Item Journal Positive Adjmt."
    ], correct: 1, exp: [
      "B đúng: Đã Ship NHƯNG chưa Invoice → Undo Shipment đảo ngược entry, đưa hàng về kho, không nghiệp vụ rườm rà. Yêu cầu: chưa Invoice và chưa applied to invoice line."
    ]},
  { id: 30, section: "F. Vận hành & Suy luận", q: "Job Queue chạy Adjust Cost – Item Entries hàng đêm để:",
    options: [
      "Tạo backup",
      "Đảm bảo Inventory G/L cân với Inventory Value; Item Charge, Avg cost adjustments lan tỏa tới Outbound entries kịp thời",
      "Đóng kỳ kế toán",
      "Tự động sinh báo cáo"
    ], correct: 1, exp: [
      "B đúng: Adjust Cost – Item Entries redistribute cost từ Inbound (Receipt + Item Charge + Invoice giá thay đổi) sang Outbound entries liên kết. Không chạy → Inventory Valuation report lệch G/L Inventory. Job Queue đêm + Post Inventory Cost to G/L tiếp theo."
    ]},
  { id: 31, section: "F. Vận hành & Suy luận", q: "Lô cần Quality Hold (chờ QC) sau receive, không cho xuất:",
    options: [
      "Xóa lô khỏi tồn kho",
      "Receive vào Bin \"QA-HOLD\" có Block Movement = Outbound; sau QC pass, Item Reclassification chuyển sang Bin sellable",
      "Negative Adjmt.",
      "Variant \"On Hold\""
    ], correct: 1, exp: [
      "B đúng: Bin Card có Block Movement (None/Inbound/Outbound/All). \"Outbound\" cho QA-HOLD: nhận vào được, không pick ra cho Sales/Transfer. QC pass: Movement Worksheet hoặc Item Reclassification."
    ]},
  { id: 32, section: "F. Vận hành & Suy luận", q: "Cross-docking trong BC:",
    options: [
      "Không hỗ trợ",
      "Bật \"Use Cross-Docking\" trên Location; function \"Cross-Dock Opportunities\" gợi ý SO matching; Pick từ Receiving Bin sang Shipping Bin",
      "Phải qua Bulk Storage trước",
      "Cần ISV"
    ], correct: 1, exp: [
      "B đúng: Location có Cross-Docking setup. Warehouse Receipt được tạo → Cross-Dock Opportunities match qty với open SO. Put-away đi thẳng Cross-Dock Bin → Pick ra Shipping. Yêu cầu Location \"Directed Put-away and Pick\"."
    ]},
  { id: 33, section: "F. Vận hành & Suy luận", q: "3 công ty (HCM, HN, ĐN) — 3 BC database. Bán hàng nội bộ:",
    options: [
      "Manual transfer + manual invoice",
      "Intercompany Setup: IC Partner, COA map, Document Sending; Sales Invoice từ HCM tự tạo Purchase Invoice ở HN qua IC Inbox",
      "Bán đứt giữa 3 đơn vị",
      "Power Automate"
    ], correct: 1, exp: [
      "B đúng: BC Intercompany Setup: IC Partner mapping, COA mapping, Dimension mapping. HCM post Sales Invoice với Sell-to = IC Partner HN → gửi document qua IC Outbox → IC Inbox HN → tự nhận Purchase Invoice. Cần đồng bộ Item No. và sync master."
    ]},
  { id: 34, section: "F. Vận hành & Suy luận", q: "Tỷ giá ngoại tệ: Vendor PO USD, Invoice cách Receipt 30 ngày. Xử lý chênh lệch:",
    options: [
      "Bỏ qua",
      "Item Cost lock theo tỷ giá Receipt; AP Liability dùng tỷ giá Invoice. Payment sinh Realized FX. Định kỳ Adjust Exchange Rates cho AP balance (Unrealized FX)",
      "Phải sửa tỷ giá Receipt",
      "Tự xóa entry cũ"
    ], correct: 1, exp: [
      "B đúng: BC tách 2 dòng: (1) Inventory cost lock theo Receipt date. (2) AP post theo Invoice date; balance còn lại revalue qua Adjust Exchange Rates job → Unrealized FX. Payment → Realized FX."
    ]},
  { id: 35, section: "F. Vận hành & Suy luận", q: "Khách order hàng cần lô Expiration > 60 ngày. Đảm bảo BC pick đúng lô:",
    options: [
      "Liệt kê lô tại Customer Card",
      "Trên Sales Line, Reserve Lot manually hoặc Item Tracking Lines với Lot Filter Expiration Date ≥ Order Date + 60D",
      "Đổi Item",
      "Tạo SKU mới"
    ], correct: 1, exp: [
      "B đúng: Sales Line → Reserve → Available – Item Ledger Entries → chọn lô (filter Expiration). Hoặc Item Tracking Lines → chọn Lot. Reservation lock lô cho SO, picker không pick lô khác. Có thể automate qua extension."
    ]},
  { id: 36, section: "F. Vận hành & Suy luận", q: "Đóng kỳ kế toán, thứ tự jobs chạy:",
    options: [
      "Adjust Cost – Item Entries → Post Inventory Cost to G/L → Adjust Exchange Rates → Inventory Period Close → G/L Posting Period Close",
      "Tùy ý",
      "Chỉ G/L Close",
      "Chỉ Inventory Close"
    ], correct: 0, exp: [
      "A đúng: (1) Adjust Cost lan tỏa cost. (2) Post Inventory Cost to G/L đồng bộ subledger. (3) Adjust Exchange Rates revalue AR/AP/Bank ngoại tệ. (4) Inventory Period đóng kỳ Inventory subledger. (5) G/L Posting Period khóa periods. Sai thứ tự → Inventory G/L lệch, FX sai, audit fail."
    ]},

  // ========== PART 3: Mapping → Exam ==========
  { id: 37, section: "G. Master Data & Tracking (Mapping)", q: "Bột mì Hoa Ngọc Lan mua theo bao 25kg, lưu kho theo bao, bán công nghiệp theo bao và bán lẻ theo gói 1kg. Cấu hình UoM ở đâu?",
    options: [
      "Tab General trên Item Card, trường \"Unit of Measure\"",
      "Item Unit of Measure page (Item Card → Related → Units of Measure), khai báo nhiều UoM với Qty per UoM",
      "Tạo SKU riêng cho từng UoM",
      "Tạo Variant Code GAU/BAO"
    ], correct: 1, exp: [
      "B đúng: Item Unit of Measure là bảng phụ, mỗi dòng định nghĩa 1 UoM với Qty per Unit of Measure quy về Base UoM. Base nên là đơn vị nhỏ nhất (KG hoặc gói 1kg).",
      "A sai: Base Unit of Measure chỉ là default.",
      "C sai: SKU cho replenishment theo location.",
      "D sai: Variant cho biến thể đặc tính."
    ]},
  { id: 38, section: "G. Master Data & Tracking (Mapping)", q: "Sữa chua 4 hương vị, cùng giá, cùng kho, cùng vendor. Quản lý gọn nhất:",
    options: [
      "Tạo 4 Item riêng",
      "1 Item với 4 Item Variant — mua bán, tồn kho, Item Tracking đều theo Variant",
      "1 Item, dùng Lot No. đại diện hương vị",
      "Tạo 4 SKU"
    ], correct: 1, exp: [
      "B đúng: Item Variant cho 1 Item nhiều biến thể (hương vị, màu, size) chia sẻ master (giá, vendor, costing). Mọi giao dịch có cột Variant Code. Tồn kho tính riêng theo Variant.",
      "C sai: Lot No. để truy xuất lô sản xuất, không phân loại biến thể."
    ]},
  { id: 39, section: "G. Master Data & Tracking (Mapping)", q: "Ép buộc nhập số lô + ngày hết hạn khi receive mọi giao dịch, setup ở đâu?",
    options: [
      "Inventory Setup → tab General",
      "Tạo Item Tracking Code với Lot Specific Tracking + Expiration Date Required = Yes, gán vào Item Card",
      "Permission Set",
      "Workflow"
    ], correct: 1, exp: [
      "B đúng: Item Tracking Code là master quy định rule tracking. Lot Specific Tracking → mọi giao dịch phải gán Lot No. Expiration Date Required → Lot mới phải có ngày HSD. Gán vào field \"Item Tracking Code\" trên Item Card."
    ]},
  { id: 40, section: "G. Master Data & Tracking (Mapping)", q: "Lưu thông tin Country of Origin \"New Zealand\", số C/O form D \"AANZ-2026-001234\" gắn với từng lô:",
    options: [
      "Description trên Item Card",
      "Lot No. Information Card (Item Tracking → Lot No. Information List), điền các trường (custom \"C/O No.\", \"C/O Form\", \"Country of Origin\"); Document Attachment đính scan C/O",
      "Excel sheet ngoài",
      "Comment trên Purchase Order"
    ], correct: 1, exp: [
      "B đúng: Lot No. Information Card là master record cho từng lô, gắn liền Lot No. Mọi giao dịch dùng lot trace ngược về Lot Info. Document Attachment đính file PDF C/O."
    ]},
  { id: 41, section: "G. Master Data & Tracking (Mapping)", q: "Truy xuất khẩn: lô SM2026-005 đã bán cho khách nào?",
    options: [
      "Customer List",
      "Item Tracing (Search → Item Tracing), nhập Lot = SM2026-005, Trace Method = Origin → Usage, Show Components = Yes",
      "Item Ledger Entries → filter Item No.",
      "Sales History"
    ], correct: 1, exp: [
      "B đúng: Item Tracing chuyên cho traceability. Trace Method: Origin → Usage (lô đi xuôi: bán cho ai, ngày nào); Usage → Origin (giao dịch ngược về Receipt/Vendor). Click kết quả mở document."
    ]},

  // ========== H. Warehouse (Mapping) ==========
  { id: 42, section: "H. Warehouse & Bin (Mapping)", q: "Kho 200m² chỉ kiểm soát số lượng nhập/xuất, không bin. Setup Location?",
    options: [
      "Directed Put-away and Pick = Yes, Bin Mandatory = Yes",
      "Tất cả flag Require Receipt/Pick/Shipment/Put-away = No (Basic – Order by Order)",
      "Bin Mandatory = Yes",
      "Tạo Bin nhưng không enforce"
    ], correct: 1, exp: [
      "B đúng: BC có 3 cấp WMS: (1) Order by Order — tất cả flag OFF, Inbound/Outbound post từ PO/SO. Phù hợp kho nhỏ. (2) Basic Warehouse — Require Receipt + Shipment hoặc Pick + Put-away. (3) Advanced — Directed Put-away and Pick + Bin Mandatory, có Wave, Cross-dock."
    ]},
  { id: 43, section: "H. Warehouse & Bin (Mapping)", q: "Đảm bảo hàng Frozen không bị put vào bin Ambient:",
    options: [
      "Warehouse Class Code: tạo class AMBIENT/CHILL/FROZEN, gán vào Bin và Item (hoặc SKU). Put-away Worksheet/Movement chỉ đề xuất bin có class trùng",
      "Đặt tên bin có prefix",
      "Tạo 3 Location riêng",
      "Comment trên Bin"
    ], correct: 0, exp: [
      "A đúng: Warehouse Class Code là field strong-typed trên Bin Card và Item Card/SKU. Function Calculate Put-away/Movement chỉ match Class. Đảm bảo cold chain integrity.",
      "B sai: Tên bin chỉ là string, không validation."
    ]},
  { id: 44, section: "H. Warehouse & Bin (Mapping)", q: "Hàng vừa receive cần Quality Hold (chờ QC). Ngăn pick ra Sales:",
    options: [
      "Xóa khỏi Item Ledger",
      "Put-away vào Bin có Block Movement = Outbound; QC pass dùng Movement Worksheet / Item Reclassification chuyển sang bin sellable",
      "Negative Adjustment",
      "Variant \"Hold\""
    ], correct: 1, exp: [
      "B đúng: Bin Card có Block Movement (None/Inbound/Outbound/All). \"Outbound\" cho QA-HOLD: nhận vào nhưng không pick ra. QC pass: Movement Worksheet hoặc Item Reclassification."
    ]},
  { id: 45, section: "H. Warehouse & Bin (Mapping)", q: "Hỗ trợ Cross-docking trong BC Advanced WH:",
    options: [
      "Không hỗ trợ",
      "Bật \"Use Cross-Docking\" + Cross-Dock Bin Code trên Location. Function \"Cross-Dock Opportunities\" trên Warehouse Receipt match qty với open SO. Put-away suggest qua Cross-Dock Bin, Pick ra Shipping",
      "Tạo bin Cross-Dock tự động",
      "Cần ISV"
    ], correct: 1, exp: [
      "B đúng: Location có nhóm cấu hình Cross-Docking (Use Cross-Docking = Yes, Cross-Dock Bin Code, Cross-Dock Due Date Calculation). Workflow: Receipt → Cross-Dock Opportunities → Put-away Cross-Dock Bin → Pick ra Shipping Bin."
    ]},

  // ========== I. Planning (Mapping) ==========
  { id: 46, section: "I. Replenishment & Planning (Mapping)", q: "Hàng nhu cầu đều, BC tự đề xuất PO khi tồn ≤ 100, mỗi lần đặt 500:",
    options: [
      "Lot-for-Lot",
      "Fixed Reorder Qty., Reorder Point = 100, Reorder Quantity = 500",
      "Maximum Qty., Minimum = 100, Maximum = 500",
      "Order"
    ], correct: 1, exp: [
      "B đúng: Fixed Reorder Qty. = khi tồn ≤ RP, đề xuất PO với qty = RQ. Đơn giản nhất cho FMCG đều.",
      "C sai: Maximum Qty. đề xuất qty = Max – tồn hiện tại, không cố định."
    ]},
  { id: 47, section: "I. Replenishment & Planning (Mapping)", q: "Cùng Item, HCM vendor V01, HN vendor V02, lead time và reorder point khác. Cấu hình:",
    options: [
      "Vendor Card",
      "Stockkeeping Unit (SKU): SKU = Item + Location, có riêng Vendor No., Lead Time, Reorder Point, Reorder Quantity",
      "Tạo 2 Item",
      "Item Variant theo location"
    ], correct: 1, exp: [
      "B đúng: SKU là phân thân Item theo Location/Variant. Mọi field replenishment override riêng cho từng kho. Planning Worksheet ưu tiên SKU nếu có."
    ]},
  { id: 48, section: "I. Replenishment & Planning (Mapping)", q: "Chạy MRP đề xuất PO/Transfer/Production cho toàn bộ Item:",
    options: [
      "Purchase Worksheet",
      "Planning Worksheet (Manufacturing/Inventory → Planning), function Calculate Regenerative Plan hoặc Calculate Net Change Plan",
      "Sales Forecast",
      "Item List"
    ], correct: 1, exp: [
      "B đúng: Planning Worksheet là engine MRP BC. Regenerative = tính lại toàn bộ. Net Change = chỉ item thay đổi (nhanh). Output: Action Message (New/Change Qty/Cancel/Reschedule) → Carry Out Action sinh PO/Transfer/Production."
    ]},
  { id: 49, section: "I. Replenishment & Planning (Mapping)", q: "Vendor V01 chỉ giao thứ Tư. Setup để Planning không đề xuất ngày khác:",
    options: [
      "Customer Card",
      "Base Calendar + Customized Calendar (chỉ working Wednesday), gán cho Vendor Card field Base Calendar Code",
      "Block Vendor",
      "Sửa Lead Time"
    ], correct: 1, exp: [
      "B đúng: BC có module Calendar (Setup → General → Base Calendars). Customized Calendar override entity cụ thể. Gán cho Vendor → Planning tự dời Order Date về ngày Vendor working.",
      "A sai: Customer Card cho lịch khách, không liên quan PO Vendor."
    ]},
  { id: 50, section: "I. Replenishment & Planning (Mapping)", q: "SO line cần đặt từ Vendor và ship trực tiếp đến Customer:",
    options: [
      "Tạo SO + Purchase Invoice riêng",
      "Setup Purchasing Code với Drop Shipment = Yes; gán vào Sales Line; tạo PO qua Requisition Worksheet → Drop Shipment → Get Sales Orders",
      "Bật Special Order",
      "Transfer Order"
    ], correct: 1, exp: [
      "B đúng: Drop Shipment workflow: (1) Purchasing Code Drop Shipment = Yes. (2) Sales Line gán Code. (3) Requisition Worksheet sinh PO với Sell-to = customer cuối. (4) Receive PO + Ship SO, BC tự link entries; không sinh ILE trong kho mình."
    ]},
  { id: 51, section: "I. Replenishment & Planning (Mapping)", q: "SO line cần PO riêng nhưng hàng về kho mình rồi mới giao, reserved riêng cho SO:",
    options: [
      "Drop Shipment",
      "Special Order: Purchasing Code Special Order = Yes, gán vào Sales Line; Requisition Worksheet → Special Order tạo PO; reservation tự sinh giữa PO và SO",
      "Tạo PO thủ công",
      "Manual reservation sau"
    ], correct: 1, exp: [
      "B đúng: Special Order khác Drop Shipment ở chỗ hàng vẫn về kho. Khi PO Receive → Item vào Inventory với Reservation trỏ thẳng SO line → picker không thể pick cho đơn khác."
    ]},

  // ========== J. Transfer & Currency (Mapping) ==========
  { id: 52, section: "J. Transfer, Item Charge, Currency (Mapping)", q: "Chuyển 500 thùng từ Kho HCM → Kho HN, đi 2 ngày:",
    options: [
      "Item Reclassification Journal",
      "Transfer Order (Inventory → Transfers): From Location HCM, To Location HN, In-Transit Code. Post Shipment HCM, post Receipt HN",
      "Sales + Purchase nội bộ",
      "Negative + Positive Adjustment"
    ], correct: 1, exp: [
      "B đúng: Transfer Order là document chính thức. Bắt buộc setup In-Transit Location (Use as In-Transit = Yes). Khi Ship: hàng vào In-Transit. Khi Receipt: vào HN. Bảo toàn lot, expiration, cost.",
      "A sai: Reclassification chỉ đổi thuộc tính trong cùng Location."
    ]},
  { id: 53, section: "J. Transfer, Item Charge, Currency (Mapping)", q: "Cước biển USD 3,500 cho lô hàng. Phân bổ vào giá vốn:",
    options: [
      "Cộng vào COGS thủ công",
      "Purchase Invoice cho vendor cước; dòng loại Charge (Item) với Item Charge Code FREIGHT; function Item Charge Assignment → assign amount vào Receipt lines theo Weight/Volume/Amount/Equally",
      "G/L Journal",
      "Bỏ qua"
    ], correct: 1, exp: [
      "B đúng: Item Charge là cơ chế landed cost. Sau post PI với Charge line, BC sinh Value Entry adjustment trên ILE của lô → cost đẩy đúng vào Inventory. Item Cost reflect đúng landed."
    ]},
  { id: 54, section: "J. Transfer, Item Charge, Currency (Mapping)", q: "PO USD, Invoice +30 ngày, Payment +60 ngày. Revalue AP còn lại cuối kỳ:",
    options: [
      "Sửa thủ công",
      "Adjust Exchange Rates (Periodic → Currency) với cutoff cuối kỳ; revalue AR/AP/Bank ngoại tệ và sinh Unrealized FX Gain/Loss",
      "Đổi tỷ giá PO",
      "Tạo lại Invoice"
    ], correct: 1, exp: [
      "B đúng: Adjust Exchange Rates duyệt ledger entries ngoại tệ open, tính lại theo Exchange Rate cuối kỳ; chênh lệch ghi Unrealized Gain/Loss (cấu hình Currency Card). Payment → Unrealized → Realized."
    ]},

  // ========== K. Pricing & Posting Group (Mapping) ==========
  { id: 55, section: "K. Pricing & Posting Group (Mapping)", q: "BC 19+ unify Sales/Purchase Prices và Discounts vào cấu trúc:",
    options: [
      "Pricing Worksheet",
      "Price Lists (Sales → Price Lists / Purchase → Price Lists): Source Type, Status (Draft → Active), Currency, Date; line là Price hoặc Discount",
      "Trade Agreement",
      "Pricing Profile"
    ], correct: 1, exp: [
      "B đúng: Price Lists thống nhất từ BC 19. 1 Price List có cả giá và % chiết khấu. Status lifecycle (Draft → Active → Inactive). Function Suggest Lines tạo dòng hàng loạt."
    ]},
  { id: 56, section: "K. Pricing & Posting Group (Mapping)", q: "Big M ≥100 thùng = 50,000/thùng, <100 thùng = 55,000:",
    options: [
      "2 Customer riêng",
      "Price List Big M, 2 dòng cùng Item: dòng 1 Minimum Quantity = 1 Unit Price = 55,000; dòng 2 Min Qty = 100 Unit Price = 50,000",
      "Sửa Item Price",
      "Sales Discount %"
    ], correct: 1, exp: [
      "B đúng: Price List Line có Minimum Quantity. BC chọn dòng có Min Qty phù hợp lớn nhất ≤ qty đang bán. 50 thùng → 55,000. 120 thùng → 50,000."
    ]},
  { id: 57, section: "K. Pricing & Posting Group (Mapping)", q: "AR riêng cho MT (45 ngày), GT (7 ngày), Online (COD). Tài khoản G/L AR khác:",
    options: [
      "COA",
      "Customer Posting Group (Setup → Receivables): tạo MT-AR, GT-AR, ONL-AR với Receivables Account khác; gán Posting Group cho Customer",
      "Dimension",
      "Customer Card → Payment Method"
    ], correct: 1, exp: [
      "B đúng: Customer Posting Group quy định tài khoản G/L cho AR liên quan (Receivables, Service Charge, Payment Disc., Interest). Customer gán Posting Group → Sales Invoice post vào tài khoản AR đúng kênh.",
      "C sai: Dimension cho chiều phân tích, không quyết định tài khoản."
    ]},
  { id: 58, section: "K. Pricing & Posting Group (Mapping)", q: "P&L theo kênh: mỗi giao dịch có gán Channel. Cơ chế BC:",
    options: [
      "Custom field",
      "Setup Global Dimension \"CHANNEL\" và Dimension Values; Default Dimension trên Customer; flow xuống Sales Header/Line → G/L Entry; Account Schedule filter theo Dimension Value",
      "Field SalespersonCode",
      "Customer Posting Group"
    ], correct: 1, exp: [
      "B đúng: Dimension là cơ chế phân tích đa chiều BC, up to 8 global dimensions. Default Dimension trên master tự flow vào giao dịch. Có thể bắt buộc (Code Mandatory)."
    ]},
  { id: 59, section: "K. Pricing & Posting Group (Mapping)", q: "Promotion bậc thang \"≥10 thùng giảm 5%, ≥20 thùng giảm 10%\":",
    options: [
      "Sales Promotion",
      "Price List (Sales) cùng Item: dòng 1 Min Qty = 10, Line Discount % = 5; dòng 2 Min Qty = 20, Line Discount % = 10. BC chọn bậc cao nhất phù hợp",
      "BOGO ISV",
      "Discount Code"
    ], correct: 1, exp: [
      "B đúng: Price List BC 19+ unify Price và Line Discount. Line Discount % theo Min Qty bậc thang. Cấu trúc native, không ISV."
    ]},

  // ========== L. Order Flow (Mapping) ==========
  { id: 60, section: "L. Order Flow & Return (Mapping)", q: "Quy trình SO chuẩn đến hóa đơn trong Advanced WH:",
    options: [
      "SO → Ship & Invoice cùng lúc",
      "SO → Release → Warehouse Shipment → Warehouse Pick → Register Pick → Post Shipment → Sales Invoice",
      "Sales Quote → Sales Invoice",
      "SO → Warehouse Receipt"
    ], correct: 1, exp: [
      "B đúng: Advanced WH: (1) SO tạo bởi sales staff → Release. (2) Warehouse Shipment từ SO (Get Source Documents). (3) Warehouse Pick assigned. (4) Picker register pick. (5) Post Shipment → ILE sinh ra. (6) Post Invoice → G/L doanh thu, AR, VAT."
    ]},
  { id: 61, section: "L. Order Flow & Return (Mapping)", q: "Khách trả 5 thùng đã invoice. BC dùng document:",
    options: [
      "Sales Order với qty âm",
      "Sales Return Order: customer, Item, qty (dương); Item Tracking Lines gán Lot trả; Apply-to Document gắn Invoice gốc. Post sinh Sales Return Receipt + Sales Credit Memo",
      "Sales Credit Memo trực tiếp",
      "Item Journal Positive Adjustment"
    ], correct: 1, exp: [
      "B đúng: Sales Return Order là document chuẩn. Workflow: nhận hàng (Return Receipt) + Credit Memo giảm AR + truy ngược về Invoice gốc qua Applies-to Doc. Hỗ trợ Item Tracking đầy đủ."
    ]},
  { id: 62, section: "L. Order Flow & Return (Mapping)", q: "Sản phẩm A đếm thực 95, hệ thống 100. Chuẩn hóa adjustment:",
    options: [
      "Sửa Item Card",
      "Physical Inventory Journal: Calculate Inventory → BC fill số hệ thống → user điền Qty (Phys. Inventory) = 95 → Post sinh Adjustment Entry với Reason Code",
      "Negative Adjustment 5",
      "Sales Order"
    ], correct: 1, exp: [
      "B đúng: Phys. Inventory Journal là quy trình audit trail. Reason Code, Document No., Counting Date. Bin-controlled: Whse. Phys. Inventory Journal. Có Counting Period (chu kỳ đếm tự động)."
    ]},
  { id: 63, section: "L. Order Flow & Return (Mapping)", q: "Lô sữa hết hạn 100 thùng cần xóa khỏi kho và ghi vào Chi phí hàng hủy:",
    options: [
      "Sales Order giá 0",
      "Item Journal Negative Adjmt., Bal. Account = TK chi phí hàng hủy (TT 78 yêu cầu biên bản hủy hợp lệ); Item Tracking Lines gán đúng Lot",
      "Xóa Item",
      "Manual GL Journal"
    ], correct: 1, exp: [
      "B đúng: Item Journal là entry point cho điều chỉnh không qua document. Negative Adjmt. giảm tồn; Bal. Account chỉ định Cost account. Item Tracking đảm bảo lô bị scrap đúng.",
      "Lưu ý VN: Biên bản hủy hàng có chữ ký các bên để được khấu trừ thuế."
    ]},

  // ========== M. VN Localization (Mapping) ==========
  { id: 64, section: "M. Localization VN & Automation (Mapping)", q: "BC core không có e-invoice VN native. Đáp ứng NĐ 123/2020:",
    options: [
      "Export Excel rồi nhập tay vào hệ thống Tổng cục Thuế",
      "Connector NCC dịch vụ (Viettel SInvoice, MISA meInvoice, VNPT, FPT eInvoice): extension đọc Posted Sales Invoice → mapping XML → ký số HSM/USB token → gửi API → nhận mã CQT",
      "Sửa template Word",
      "Print PDF gửi mail"
    ], correct: 1, exp: [
      "B đúng: Connector phải được Tổng cục Thuế chấp thuận (list T-VAN). Workflow: Post Sales Invoice → trigger event → extension đẩy data → ký số → gửi hệ thống thuế → CQT trả mã → cập nhật ngược BC."
    ]},
  { id: 65, section: "M. Localization VN & Automation (Mapping)", q: "Tự động chạy Adjust Cost – Item Entries, Post Inventory Cost to G/L, Adjust Exchange Rates mỗi đêm:",
    options: [
      "Cron OS",
      "Job Queue Entries (Admin → Job Queue Entries): entry cho mỗi report/codeunit, lịch chạy (daily/weekly), No. of Minutes Between Runs",
      "Power Automate",
      "Workflow"
    ], correct: 1, exp: [
      "B đúng: Job Queue là scheduler tích hợp BC. Mỗi entry trỏ Report ID/Codeunit ID. Chạy One-time at date hoặc Recurring (ngày trong tuần + giờ + interval). Khác Power Automate (cross-app) và Workflow (approval)."
    ]},
  { id: 66, section: "M. Localization VN & Automation (Mapping)", q: "Approval cho PO > 100 triệu yêu cầu Giám đốc duyệt:",
    options: [
      "Email manual",
      "Workflow + Approval User Setup: tạo Workflow Template, điều kiện Approval Amount > 100M, người duyệt theo Approval User Setup; user release qua Send Approval Request",
      "Comment trên PO",
      "Permission Set"
    ], correct: 1, exp: [
      "B đúng: BC có Workflow engine native. Bước: (1) Approval User Setup. (2) Workflow từ template Purchase Order Approval. (3) Enable. (4) User Send Approval Request → notifications → approver Approve/Reject."
    ]},
  { id: 67, section: "M. Localization VN & Automation (Mapping)", q: "Thanh toán chuyển khoản, đối soát sao kê tự động:",
    options: [
      "Manual reconciliation",
      "Bank Account Reconciliation (Cash Management): import sao kê (CAMT.054, MT940, CSV); function Match Automatically đề xuất matching; user xác nhận và post",
      "Excel pivot",
      "GL Journal"
    ], correct: 1, exp: [
      "B đúng: Bank Account Reconciliation chuẩn BC. Import statement → auto-match (amount, date, transaction text) → user review unmatched → post. Vietcombank, BIDV, Techcombank, VPBank có format CSV riêng — cần custom Bank Statement File extension."
    ]},

  // ========== N. Industry & ISV (Mapping) ==========
  { id: 68, section: "N. Đặc thù Ngành & ISV (Mapping)", q: "EDI từ Big C, Co.opmart, Bách Hóa Xanh tự động. BC core:",
    options: [
      "Có sẵn EDI cho VN retailer",
      "KHÔNG có native EDI cho retail VN. ISV (To-Increase EDI Studio, Lasernet, Continia) hoặc middleware (Azure Logic Apps + parser) đọc PO từ portal → API tạo SO BC",
      "Export Excel manual",
      "Print PO"
    ], correct: 1, exp: [
      "B đúng: BC core hỗ trợ PEPPOL (châu Âu), không connector sẵn cho X12/EDIFACT/CSV của siêu thị VN. Workflow: Siêu thị publish PO portal/SFTP/AS2 → middleware download/parse/map → API tạo SO → ship/invoice gửi ASN/Invoice ngược."
    ]},
  { id: 69, section: "N. Đặc thù Ngành & ISV (Mapping)", q: "Catch weight (cá 1 con 1.8–2.3kg, bán kg thực) — BC core?",
    options: [
      "Có, qua Multiple UoM",
      "KHÔNG. Cần ISV: Aptean Food & Beverage, BMS Vision Food, LS Central Food, JustFoodERP. ISV thêm \"Tracking Quantity\" (số con) và \"Catch Quantity\" (kg) độc lập trên mỗi giao dịch",
      "Có qua Item Charge",
      "Có qua Variant"
    ], correct: 1, exp: [
      "B đúng: Multiple UoM BC core là tỷ lệ cố định (1 BOX = 12 PCS). Catch weight cần 2 đại lượng độc lập variant. ISV là giải pháp duy nhất. Deal-breaker phải hỏi rõ khách hàng food trước khi cam kết BC."
    ]},
  { id: 70, section: "N. Đặc thù Ngành & ISV (Mapping)", q: "30 xe van đi bán hàng tuyến. BC core hỗ trợ Van Sales?",
    options: [
      "Có module Van Sales sẵn",
      "KHÔNG có. ISV: Naviworld FMCG/DMS for BC, Sana FMCG, LS Central Pharmacy/FMCG, Insight Works Salespad. Hoặc tự xây + mobile app (Power Apps/xPRT) qua API",
      "Dùng Inventory Pick",
      "Dùng Service Order"
    ], correct: 1, exp: [
      "B đúng: BC core không có Van Sales/Route Accounting/DMS. Mô hình cần: Location ảo mỗi xe, Transfer Order morning load, Sales Invoice từ mobile, Cash collection, end-of-day reconcile. Build qua ISV hoặc custom."
    ]},
  { id: 71, section: "N. Đặc thù Ngành & ISV (Mapping)", q: "Promotion bậc thang + Rebate cuối quý + Trade Promotion accrual — BC core đáp ứng?",
    options: [
      "Đầy đủ",
      "Promotion bậc thang đáp ứng qua Price List + Min Qty. Rebate và Trade Promotion accrual KHÔNG có native — cần ISV (Aptean Food, JustFood, Insight Works Rebate Management) hoặc custom",
      "Không có gì",
      "Cần Premium license"
    ], correct: 1, exp: [
      "B đúng: 3 loại: (1) Promotion bậc thang — Price List Min Qty đáp ứng. (2) Rebate (mua đủ doanh số hoàn tiền cuối kỳ) — không native. (3) Trade Promotion (chi phí trưng bày, marketing) — không native."
    ]},
  { id: 72, section: "N. Đặc thù Ngành & ISV (Mapping)", q: "Tích hợp Power BI với BC dashboard kho thời gian thực:",
    options: [
      "Không tích hợp được",
      "Power BI Desktop → Get Data → Online Services → Dynamics 365 Business Central → tenant → Environment + Company → API/OData endpoint hoặc Web Services published",
      "Phải export Excel",
      "Cần SQL Server"
    ], correct: 1, exp: [
      "B đúng: BC có native connector cho Power BI. Cách: (1) Built-in connector với standard datasets. (2) Published Web Services → expose OData URL. (3) APIs REST /api/v2.0/... Power BI tự refresh theo lịch (Power BI Service)."
    ]},

  // ========== O. NGHIỆP VỤ MUA HÀNG (Pure Business Knowledge) ==========
  { id: 73, section: "O. Nghiệp vụ Mua hàng (thuần)", q: "Mục đích chính của Purchase Requisition (PR) trước khi tạo Purchase Order:",
    options: [
      "Đặt hàng trực tiếp với vendor",
      "Phê duyệt nội bộ nhu cầu mua trước khi cam kết với vendor (kiểm soát budget, tránh mua trùng, kiểm tra tồn kho)",
      "Tính giá vốn cho hàng tồn kho",
      "Ghi nhận doanh thu"
    ], correct: 1, exp: [
      "B đúng: PR là tài liệu nội bộ. Người yêu cầu gửi PR cho cấp quản lý phê duyệt. PR đảm bảo: (1) nhu cầu cần thiết, (2) có ngân sách, (3) không trùng đơn đang xử lý, (4) kho không có sẵn. Sau khi PR approved mới chuyển thành PO gửi vendor. Tách PR/PO là internal control chuẩn (segregation of duties).",
      "A sai: Vendor không thấy PR — đó là internal.",
      "C/D sai: Không liên quan."
    ]},
  { id: 74, section: "O. Nghiệp vụ Mua hàng (thuần)", q: "Nguyên tắc \"3 báo giá 1 chọn\" (3-bid-1-buy) phục vụ mục đích:",
    options: [
      "Giảm giá xuống thấp nhất",
      "Đảm bảo cạnh tranh, minh bạch, có cơ sở so sánh và bảo vệ tổ chức trước rủi ro thiên vị/tham nhũng",
      "Tăng thời gian xử lý",
      "Bắt buộc theo luật cho mọi giao dịch"
    ], correct: 1, exp: [
      "B đúng: 3-bid-1-buy yêu cầu mua trên một ngưỡng giá trị phải có ≥3 báo giá từ 3 vendor khác nhau, sau đó so sánh và chọn. Mục đích: (1) minh bạch, (2) giá cạnh tranh, (3) giảm rủi ro thiên vị/tham nhũng, (4) audit trail. Internal control phổ biến.",
      "D sai: Không bắt buộc theo luật (trừ đấu thầu công)."
    ]},
  { id: 75, section: "O. Nghiệp vụ Mua hàng (thuần)", q: "Tiêu chí \"Q-C-D\" trong đánh giá nhà cung cấp viết tắt cho:",
    options: [
      "Quality - Cost - Delivery",
      "Quantity - Customer - Date",
      "Quote - Channel - Distribution",
      "Quality - Compliance - Demand"
    ], correct: 0, exp: [
      "A đúng: Q-C-D là 3 trục cốt lõi đánh giá vendor: Quality (chất lượng, defect rate, certificate), Cost (giá, payment terms, TCO), Delivery (on-time delivery %, lead time, flexibility). Mở rộng: Q-C-D-S (Service), Q-C-D-S-I (Innovation). Scorecard định kỳ hàng quý cho từng vendor giúp ra quyết định tiếp tục/dừng."
    ]},
  { id: 76, section: "O. Nghiệp vụ Mua hàng (thuần)", q: "Total Cost of Ownership (TCO) khi chọn vendor khác với chỉ nhìn giá mua ở chỗ:",
    options: [
      "Tính cả giá mua + cước + thuế + chi phí lưu kho + chi phí chất lượng + chi phí hỗ trợ + cost of money trong suốt vòng đời",
      "Tính giá thấp nhất",
      "Chỉ tính giá + cước",
      "Bằng giá list"
    ], correct: 0, exp: [
      "A đúng: Mua hàng kém kinh nghiệm chỉ nhìn giá. TCO nhìn toàn cảnh: giá mua + cước + thuế NK + phí kiểm dịch + cost of holding (vốn, kho) + cost of quality (rework, recall, complain) + cost of risk (vendor phá sản, gián đoạn). Vendor giá thấp nhưng chất lượng kém → TCO cao hơn vendor giá cao chất lượng ổn. Tư duy strategic sourcing."
    ]},
  { id: 77, section: "O. Nghiệp vụ Mua hàng (thuần)", q: "Blanket Purchase Order (BPO) khác Standard PO ở chỗ:",
    options: [
      "Là hợp đồng khung về số lượng/giá trong một khoảng thời gian, các Release Order phát hành dần khi cần",
      "Không cần phê duyệt",
      "Chỉ áp dụng cho dịch vụ",
      "Không cần vendor cụ thể"
    ], correct: 0, exp: [
      "A đúng: BPO là cam kết mua tổng số lượng X trong Y tháng với giá đã thỏa thuận. Khi cần, chỉ tạo Release Order tham chiếu BPO. Lợi ích: lock giá tốt cho volume cam kết, giảm overhead tạo PO mới mỗi lần. Phổ biến cho mặt hàng đều đặn (giấy in, vật tư văn phòng, bao bì)."
    ]},
  { id: 78, section: "O. Nghiệp vụ Mua hàng (thuần)", q: "Incoterm \"CIF\" (Cost, Insurance, Freight) phân chia trách nhiệm thế nào?",
    options: [
      "Người bán chịu phí đưa hàng + bảo hiểm đến cảng đích; người mua nhận tại cảng đích và chịu phí từ đó vào kho",
      "Người mua chịu toàn bộ",
      "Người bán giao tại kho mình",
      "Người mua giao đến cảng"
    ], correct: 0, exp: [
      "A đúng: CIF = Cost (giá hàng) + Insurance (bảo hiểm hàng hải) + Freight (cước biển). Người bán chịu đến cảng đích, mua bảo hiểm cho người mua. Người mua nhận tại cảng đích, chịu thuế NK, customs broker, vận chuyển từ cảng vào kho. So FOB (Free On Board): người bán chỉ chịu đến lúc hàng lên tàu tại cảng đi."
    ]},
  { id: 79, section: "O. Nghiệp vụ Mua hàng (thuần)", q: "Vendor lead time (tổng) là khoảng thời gian:",
    options: [
      "Từ khi đặt PO cho vendor đến khi hàng vào kho mình (gồm vendor processing + vận chuyển + customs nếu NK + receiving)",
      "Chỉ thời gian xử lý sản xuất của vendor",
      "Chỉ thời gian vận chuyển",
      "Thời gian thanh toán"
    ], correct: 0, exp: [
      "A đúng: Vendor lead time end-to-end: PO placed → Goods available in your warehouse. Gồm (1) vendor processing time (production/picking), (2) shipping time (transit), (3) customs clearance (NK), (4) receiving time tại kho mình. Quan trọng cho safety stock, reorder point, MRP planning."
    ]},
  { id: 80, section: "O. Nghiệp vụ Mua hàng (thuần)", q: "Báo cáo Open PO Aging có vai trò gì?",
    options: [
      "Theo dõi các PO đã đặt nhưng chưa receive đúng hạn → flag vendor delay, tránh tồn kho thiếu hụt",
      "Tính COGS",
      "Tính lương",
      "Đánh giá khách hàng"
    ], correct: 0, exp: [
      "A đúng: Open PO Aging liệt kê PO đã release nhưng chưa receive hết, group theo Expected Receipt Date vs Today (overdue 0-30, 31-60, >60). Buyer theo dõi PO trễ, follow-up vendor, escalate. KPI: Open PO > 30 ngày overdue (target <5% giá trị Open PO)."
    ]},

  // ========== P. NGHIỆP VỤ KHO HÀNG ==========
  { id: 81, section: "P. Nghiệp vụ Kho hàng (thuần)", q: "Quy trình nhập kho (Receiving) chuẩn theo thứ tự:",
    options: [
      "Kiểm tra cổng (chứng từ + niêm phong) → Đếm/cân thực tế → QC inspection → Put-away vào bin → Update hệ thống",
      "Put-away ngay → Đếm sau",
      "Update hệ thống trước khi nhận hàng",
      "Bỏ qua kiểm tra cổng"
    ], correct: 0, exp: [
      "A đúng: Receiving chuẩn 5 bước: (1) Gate check: niêm phong xe, đối chiếu chứng từ (Invoice, Packing List, Delivery Note) khớp PO. (2) Đếm/cân: physical count vs chứng từ. (3) QC: visual inspection + lấy mẫu test theo SOP. (4) Put-away: chuyển vào bin theo logic (FEFO, zone). (5) System: post Goods Receipt. Skip bước 1-3 → nhận sai hàng/kém chất lượng."
    ]},
  { id: 82, section: "P. Nghiệp vụ Kho hàng (thuần)", q: "ASN (Advance Shipping Notice) là:",
    options: [
      "Thông báo từ vendor về lô hàng sắp đến (ngày dự kiến, danh sách item + qty + Lot + Expiration + barcode), gửi TRƯỚC khi hàng tới",
      "Thông báo hủy đơn",
      "Hóa đơn điện tử",
      "Báo cáo tồn kho"
    ], correct: 0, exp: [
      "A đúng: ASN giúp kho chuẩn bị trước: nhân lực, không gian put-away, thiết bị. Có ASN, receiving nhanh hơn 30-50% vì có data từ trước, chỉ verify khi hàng đến. Vendor lớn thường có ASN tự động qua EDI 856 (ANSI). Quan trọng cho high-volume retail."
    ]},
  { id: 83, section: "P. Nghiệp vụ Kho hàng (thuần)", q: "Layout chuẩn của kho phân phối thực phẩm gồm các zone:",
    options: [
      "Receiving / Storage (Bulk + Reserve) / Pick face / Staging / Shipping; có thể thêm Quarantine, Returns, Damage",
      "Chỉ 1 zone duy nhất",
      "Văn phòng + kho",
      "Production + kho"
    ], correct: 0, exp: [
      "A đúng: Kho hiệu quả phân chia theo flow: Receiving (cổng nhận) → Storage Bulk (pallet đầy) → Reserve (slot dự phòng) → Pick face (picker pick lẻ) → Staging (tập kết) → Shipping (cổng xuất). Thêm: Quarantine (QC), Returns (trả về), Damage (hỏng). Layout sai → di chuyển thừa, tốn thời gian, dễ nhầm."
    ]},
  { id: 84, section: "P. Nghiệp vụ Kho hàng (thuần)", q: "Cycle Count khác Physical Inventory ở chỗ:",
    options: [
      "Cycle Count: đếm rotational hằng ngày/tuần một phần kho theo lịch ABC, không ngừng vận hành; Physical Inventory: đếm toàn bộ một lần (thường năm), phải dừng kho",
      "Giống nhau",
      "Cycle Count chính xác hơn",
      "Physical Inventory không cần"
    ], correct: 0, exp: [
      "A đúng: Cycle Count đếm liên tục: hàng A (giá trị cao) đếm hằng tháng, B đếm quý, C đếm năm. Phát hiện sai lệch sớm, không ảnh hưởng vận hành. Physical Inventory cần đóng kho 1-3 ngày, tốn kém, tìm sai lệch trễ. Best practice: kết hợp cả 2 — Cycle Count hằng ngày + Physical Inventory năm để kiểm toán."
    ]},
  { id: 85, section: "P. Nghiệp vụ Kho hàng (thuần)", q: "KPI quan trọng nhất đo độ chính xác tồn kho:",
    options: [
      "Inventory Accuracy % = (Locations với count khớp / Total locations counted) × 100",
      "Total Inventory Value",
      "SKU Count",
      "Stock Turnover Ratio"
    ], correct: 0, exp: [
      "A đúng: Inventory Accuracy đo theo location (bin), không theo dollar. Target: 95-99%. Khác Cost Accuracy (giá trị khớp G/L) và Item Accuracy (qty đúng nhưng có thể sai bin). Inventory Accuracy thấp → MRP suggest sai, picker pick sai, customer dissatisfaction."
    ]},
  { id: 86, section: "P. Nghiệp vụ Kho hàng (thuần)", q: "Khi nào dùng FIFO, khi nào dùng FEFO?",
    options: [
      "FIFO theo ngày nhập (hàng nhập trước xuất trước) — cho hàng không có HSD hoặc HSD dài; FEFO theo ngày hết hạn — bắt buộc cho hàng HSD ngắn (vendor có thể trộn lô)",
      "Giống nhau",
      "FIFO cho dược, FEFO cho công nghiệp",
      "FEFO không thực tế"
    ], correct: 0, exp: [
      "A đúng: FIFO ổn cho hàng không HSD hoặc HSD dài đều. FEFO bắt buộc cho hàng HSD ngắn: nếu nhận lô B sau lô A nhưng B có HSD sớm hơn (vendor trộn lô), phải xuất B trước. Ngành dược, F&B đều dùng FEFO."
    ]},
  { id: 87, section: "P. Nghiệp vụ Kho hàng (thuần)", q: "Pallet CHEP (màu xanh) phổ biến vì:",
    options: [
      "Là pool pallet rental — đại lý thuê, trả lại, không phải mua/quản lý; chuẩn 1.2m × 1m, tương thích kho hiện đại, 4-way entry, chịu 1.5 tấn",
      "Rẻ nhất",
      "Bằng gỗ tự nhiên",
      "Một lần dùng"
    ], correct: 0, exp: [
      "A đúng: CHEP là công ty cung cấp dịch vụ pallet pooling. Đại lý thuê CHEP, CHEP thu thập/sửa chữa/luân chuyển. Lợi ích: chất lượng đồng đều, không quản lý tồn pallet, giảm waste. Phổ biến trong FMCG. Tương tự: LOSCAN, IFCO (rổ tươi sống)."
    ]},
  { id: 88, section: "P. Nghiệp vụ Kho hàng (thuần)", q: "Batch picking khác Discrete (single order) picking ở:",
    options: [
      "Batch: 1 picker pick gom nhiều đơn 1 lượt → sort theo đơn sau (nhanh cho đơn nhỏ nhiều); Discrete: pick từng đơn 1 vòng (dễ kiểm soát accuracy nhưng chậm)",
      "Giống nhau",
      "Batch chỉ cho online",
      "Discrete chỉ cho hàng lớn"
    ], correct: 0, exp: [
      "A đúng: Batch picking phù hợp khi nhiều đơn nhỏ chia sẻ SKU (e-commerce, GT). Picker đi 1 vòng pick 10 đơn × 3 dòng = 30 dòng → sort tại station. Tăng productivity 2-3 lần. Discrete picking: 1 đơn = 1 vòng, dễ kiểm soát nhưng tốn di chuyển. Wave picking + Cluster picking là biến thể."
    ]},

  // ========== Q. QUẢN TRỊ CHẤT LƯỢNG ==========
  { id: 89, section: "Q. Quản trị Chất lượng (thuần)", q: "QC (Quality Control) khác QA (Quality Assurance) ở chỗ:",
    options: [
      "QC kiểm tra sản phẩm/lô đã làm xong, phát hiện defect — reactive; QA đảm bảo quá trình tạo ra sản phẩm tốt từ đầu (SOP, training, audit) — proactive",
      "Giống nhau",
      "QC quan trọng hơn QA",
      "QA chỉ cho dược"
    ], correct: 0, exp: [
      "A đúng: QC là hoạt động — đo, test, inspection → detect defects. QA là hệ thống — SOP, training, calibration, audit, supplier qualification → prevent defects. Cả hai cần thiết. Trong thực phẩm: QC test microbiological mỗi lô + QA xây HACCP, GMP, ISO 22000."
    ]},
  { id: 90, section: "Q. Quản trị Chất lượng (thuần)", q: "HACCP (Hazard Analysis and Critical Control Points) là:",
    options: [
      "Hệ thống quản lý an toàn thực phẩm dựa trên 7 nguyên tắc: phân tích mối nguy → xác định CCP → giới hạn → giám sát → hành động khắc phục → verification → ghi chép",
      "Hệ thống ISO khác",
      "Quy định chỉ ở Mỹ",
      "Hệ thống QC sản phẩm cuối"
    ], correct: 0, exp: [
      "A đúng: HACCP là hệ thống preventive, bắt buộc cho mọi cơ sở thực phẩm theo Codex Alimentarius. 7 nguyên tắc: (1) Phân tích mối nguy (biological/chemical/physical), (2) Xác định CCP, (3) Thiết lập giới hạn (vd: nhiệt độ < 4°C), (4) Monitor CCP, (5) Corrective action khi lệch, (6) Verification (audit), (7) Documentation. VN: ISO 22000 tích hợp HACCP + ISO 9001."
    ]},
  { id: 91, section: "Q. Quản trị Chất lượng (thuần)", q: "GMP (Good Manufacturing Practice) tập trung vào:",
    options: [
      "Cơ sở vật chất, vệ sinh, nhân sự, thiết bị, quy trình sản xuất đảm bảo sản phẩm sạch, an toàn, đồng nhất",
      "Tài chính",
      "Marketing",
      "Kế toán"
    ], correct: 0, exp: [
      "A đúng: GMP là tập hợp practices đảm bảo sản phẩm được sản xuất nhất quán theo chuẩn chất lượng. Bao gồm: thiết kế nhà xưởng (one-way flow tránh cross-contamination), vệ sinh (cleaning SOP), nhân sự (training, sức khỏe), thiết bị (calibration), vật liệu (specs, supplier qualification), quy trình (SOP từng bước). Tiền đề của HACCP, ISO 22000, BRC, IFS."
    ]},
  { id: 92, section: "Q. Quản trị Chất lượng (thuần)", q: "ISO 22000 là chuẩn quốc tế cho:",
    options: [
      "Hệ thống quản lý an toàn thực phẩm (Food Safety Management System); tích hợp HACCP + ISO 9001",
      "Sản xuất ô tô",
      "Tài chính ngân hàng",
      "CNTT"
    ], correct: 0, exp: [
      "A đúng: ISO 22000 áp dụng cho mọi tổ chức trong chuỗi cung ứng thực phẩm (farm → fork): farm, processing, distribution, retail. Yêu cầu: prerequisite programs (GMP, vệ sinh), HACCP plan, traceability, management system. Phiên bản hiện hành: ISO 22000:2018. Khác BRC/IFS (chuẩn của retailer châu Âu, audit nghiêm ngặt hơn)."
    ]},
  { id: 93, section: "Q. Quản trị Chất lượng (thuần)", q: "AQL (Acceptable Quality Level) sampling là:",
    options: [
      "Phương pháp lấy mẫu thống kê — kiểm 1 phần lô đại diện cho cả lô; AQL 2.5 = chấp nhận tối đa 2.5% defect trong mẫu để pass cả lô",
      "Kiểm tra 100% lô",
      "Không kiểm tra",
      "Kiểm tra ngẫu nhiên không có quy tắc"
    ], correct: 0, exp: [
      "A đúng: AQL dùng bảng ISO 2859-1: tùy lô size + AQL level → số mẫu cần lấy và số defect tối đa được phép. Ví dụ: lô 1000 đơn vị, AQL 2.5 → lấy 80 mẫu, pass nếu defects ≤ 5. AQL thấp = khắt khe (0.65, 1.0 cho hàng critical); AQL cao = lỏng (4.0, 6.5). Vendor agreement định AQL chuẩn cho từng nhóm hàng."
    ]},
  { id: 94, section: "Q. Quản trị Chất lượng (thuần)", q: "Non-Conformance Report (NCR) ghi nhận:",
    options: [
      "Sự kiện sản phẩm/lô không đạt chuẩn (defect, sai specs, hư hỏng); là input cho phân tích root cause và CAPA",
      "Báo cáo doanh thu",
      "Hợp đồng vendor",
      "Báo cáo tồn kho"
    ], correct: 0, exp: [
      "A đúng: NCR là document chính thức khi phát hiện non-conformance: mô tả vấn đề, ảnh hưởng, dispose (rework/scrap/use as is/return to vendor), evidence (ảnh, test result). NCR feed vào CAPA để fix root cause. KPI: NCR open > 30 ngày, NCR recurrence rate."
    ]},
  { id: 95, section: "Q. Quản trị Chất lượng (thuần)", q: "CAPA (Corrective and Preventive Action) phân biệt:",
    options: [
      "Corrective: sửa vấn đề ĐÃ xảy ra (fix root cause); Preventive: ngăn vấn đề CHƯA xảy ra (dự đoán, ngăn ngừa)",
      "Giống nhau",
      "Chỉ Corrective quan trọng",
      "Chỉ Preventive quan trọng"
    ], correct: 0, exp: [
      "A đúng: Corrective Action: phản ứng với non-conformance đã xảy ra. Tìm root cause (5-Why, Fishbone), implement fix, verify hiệu quả. Preventive Action: chủ động trước, dựa trên trend analysis, risk assessment, audit findings. Cả hai trong CAPA system đảm bảo continuous improvement. Bắt buộc trong ISO 9001, ISO 22000."
    ]},
  { id: 96, section: "Q. Quản trị Chất lượng (thuần)", q: "Cold Chain Integrity yêu cầu:",
    options: [
      "Duy trì nhiệt độ liên tục end-to-end (Receiving → Storage → Loading → Transport → Customer) trong dải an toàn; mọi temperature excursion phải được ghi nhận và đánh giá",
      "Chỉ cần lạnh trong kho",
      "Chỉ cần lạnh trong xe",
      "Không quan trọng nếu chỉ vài giờ"
    ], correct: 0, exp: [
      "A đúng: Cold Chain Integrity kiểm soát end-to-end. Bất kỳ gián đoạn nào (xe hỏng, mất điện, để ngoài) đều ảnh hưởng chất lượng và an toàn. Cần: temperature monitoring (data logger trong container/xe), threshold alert, SOP khi excursion, traceability từng lô. Dược, vaccine, frozen food bắt buộc."
    ]},

  // ========== R. NGHIỆP VỤ BÁN HÀNG ==========
  { id: 97, section: "R. Nghiệp vụ Bán hàng (thuần)", q: "Quy trình Order-to-Cash (O2C) chuẩn theo thứ tự:",
    options: [
      "Quote → Sales Order → Pick/Pack/Ship → Invoice → Cash Receipt → Reconciliation",
      "Sales Order → Quote → Invoice → Shipping",
      "Invoice → Sales Order → Payment",
      "Quote → Invoice → Order"
    ], correct: 0, exp: [
      "A đúng: O2C 6 bước: (1) Quote (báo giá), (2) SO (đơn xác nhận), (3) Fulfillment (pick/pack/ship), (4) Invoice (hóa đơn), (5) Cash Receipt (nhận tiền), (6) Reconciliation (đối soát AR). Mỗi bước có kiểm soát: credit check trước SO, QC trước ship, payment terms enforcement."
    ]},
  { id: 98, section: "R. Nghiệp vụ Bán hàng (thuần)", q: "Credit Limit là:",
    options: [
      "Mức công nợ tối đa cho khách (tổng AR outstanding ≤ Credit Limit); vượt → block SO hoặc require senior approval",
      "Hạn mức thẻ tín dụng khách dùng",
      "Số dư tài khoản ngân hàng",
      "Lương khách hàng"
    ], correct: 0, exp: [
      "A đúng: Credit Limit là kiểm soát rủi ro tín dụng. Set theo: lịch sử thanh toán khách, financial health, business size. Tạo SO → check AR outstanding + open orders + new order ≤ Credit Limit. Vượt → workflow approval (Sales Manager, Finance). Review định kỳ (hàng năm hoặc khi khách thay đổi)."
    ]},
  { id: 99, section: "R. Nghiệp vụ Bán hàng (thuần)", q: "DSO (Days Sales Outstanding) đo:",
    options: [
      "Số ngày trung bình từ khi bán đến khi thu tiền = (Average AR / Total Credit Sales) × Days; càng thấp càng tốt",
      "Số ngày sản xuất",
      "Số ngày tồn kho",
      "Số ngày khuyến mãi"
    ], correct: 0, exp: [
      "A đúng: DSO = (AR / Revenue) × 365 ngày. Đo hiệu quả thu hồi công nợ. Target tùy ngành: FMCG 20-40 ngày, MT có thể 45-60. DSO cao = vốn chôn trong AR, rủi ro bad debt. Cải thiện: enforce payment terms, early payment discount, follow-up overdue. DSO – DPO (Days Payable) = working capital gap."
    ]},
  { id: 100, section: "R. Nghiệp vụ Bán hàng (thuần)", q: "Sell-in và Sell-out trong phân phối khác nhau:",
    options: [
      "Sell-in: doanh số bán cho khách (nhà bán lẻ/distributor); Sell-out: doanh số khách bán ra cho người tiêu dùng cuối",
      "Giống nhau",
      "Sell-in cho B2C",
      "Sell-out cho B2B"
    ], correct: 0, exp: [
      "A đúng: Sell-in dễ track (ngay hóa đơn xuất). Sell-out khó hơn (cần data từ nhà bán lẻ, POS data, scan data). Sell-in cao nhưng Sell-out thấp → hàng kẹt tại nhà bán lẻ, sắp đẩy ngược (returns) hoặc giảm sell-in tiếp theo. Healthy: sell-in ≈ sell-out qua thời gian."
    ]},
  { id: 101, section: "R. Nghiệp vụ Bán hàng (thuần)", q: "Modern Trade (MT) khác General Trade (GT) ở:",
    options: [
      "MT: chuỗi bán lẻ có hệ thống (Big C, Co.opmart, Bách Hóa Xanh) — hợp đồng formal, EDI, payment 30-60 ngày, listing fee; GT: tạp hóa, chợ truyền thống — COD/credit ngắn, sale rep trực tiếp, không EDI",
      "Giống nhau",
      "MT nhỏ hơn GT",
      "GT chỉ online"
    ], correct: 0, exp: [
      "A đúng: MT đặc trưng: scale lớn, mua qua quy trình formal (PO, Listing Agreement), payment lâu, yêu cầu listing/slotting fee, promotion theo plan, EDI integration. GT: scale nhỏ rải rác, mua qua salesman/van, COD/7 ngày, không EDI. Mỗi kênh cần chiến lược pricing, promotion, sales force khác nhau."
    ]},
  { id: 102, section: "R. Nghiệp vụ Bán hàng (thuần)", q: "Trade Promotion khác Consumer Promotion:",
    options: [
      "Trade Promotion: chi phí cho trade partner (distributor, retailer) — listing fee, off-invoice discount, rebate, co-op advertising; Consumer Promotion: chi phí cho người tiêu dùng cuối — coupon, sample, giảm giá tại điểm bán",
      "Giống nhau",
      "Trade chỉ online",
      "Consumer chỉ B2B"
    ], correct: 0, exp: [
      "A đúng: Trade Promotion push hàng vào kênh: chiết khấu MT để listing, slotting fee đặt sản phẩm trên kệ tốt, rebate cuối quý theo doanh số. Consumer Promotion pull người tiêu dùng: 50% off, mua 2 tặng 1, BOGO. Phân bổ ngân sách 60/40 trade/consumer phổ biến trong FMCG."
    ]},
  { id: 103, section: "R. Nghiệp vụ Bán hàng (thuần)", q: "Phương pháp Sales Forecast cơ bản gồm:",
    options: [
      "Naive (= kỳ trước), Moving Average, Exponential Smoothing, Linear Regression, Causal Models — chọn theo độ ổn định nhu cầu và data sẵn có",
      "Đoán cảm tính",
      "Chỉ hỏi sales rep",
      "Chỉ dùng AI"
    ], correct: 0, exp: [
      "A đúng: (1) Naive: forecast = actual kỳ trước — đơn giản, ổn cho hàng đều. (2) Moving Average: trung bình N kỳ — làm phẳng biến động. (3) Exponential Smoothing: weight gần đây cao hơn — phản ứng nhanh với trend. (4) Regression: y = ax + b, hàng có trend rõ. (5) Causal: dựa trên biến độc lập (giá, promotion, mùa). Đo accuracy bằng MAPE, Bias."
    ]},
  { id: 104, section: "R. Nghiệp vụ Bán hàng (thuần)", q: "Channel conflict (xung đột kênh) xảy ra khi:",
    options: [
      "Cùng sản phẩm có giá/chính sách khác nhau giữa các kênh dẫn đến khách hàng/distributor mua kênh rẻ hơn bán lại; hoặc các kênh tranh giành cùng khách hàng",
      "Sản phẩm hết hàng",
      "Nhân viên xung đột",
      "Vendor xung đột với nhau"
    ], correct: 0, exp: [
      "A đúng: Ví dụ: giá Online (Shopee) thấp hơn giá GT → distributor GT mất khách, ép giảm giá GT, xói mòn margin. Hoặc bán hàng B2B trực tiếp cạnh tranh với reseller. Giải pháp: tách kênh (model/SKU riêng), pricing discipline, channel agreement, geographic exclusivity."
    ]},

  // ========== S. KẾ TOÁN CĂN BẢN ==========
  { id: 105, section: "S. Kế toán Căn bản (thuần)", q: "Phương trình kế toán cơ bản (Accounting Equation):",
    options: [
      "Assets = Liabilities + Equity (Tài sản = Nợ phải trả + Vốn chủ sở hữu)",
      "Revenue = Cost + Profit",
      "Cash = Income – Expense",
      "AR = Sales – Discount"
    ], correct: 0, exp: [
      "A đúng: Đây là phương trình nền tảng của double-entry bookkeeping. Mỗi giao dịch giữ thăng bằng: mua hàng tồn 10tr trả nợ → Assets (Inventory) +10tr, Liabilities (AP) +10tr. Bán hàng 15tr giá vốn 10tr → AR +15tr, Equity (Profit) +5tr, Inventory -10tr. Balance Sheet luôn balance."
    ]},
  { id: 106, section: "S. Kế toán Căn bản (thuần)", q: "Quy tắc Debit/Credit cơ bản:",
    options: [
      "Debit tăng Assets và Expenses, giảm Liabilities/Equity/Revenue; Credit ngược lại",
      "Debit luôn tăng mọi tài khoản",
      "Credit luôn giảm mọi tài khoản",
      "Tùy bookkeeper quyết định"
    ], correct: 0, exp: [
      "A đúng: Mẹo nhớ \"DEAD\" tăng khi Debit (Dividends, Expenses, Assets, Drawing); \"CLER\" tăng khi Credit (Capital, Liabilities, Equity, Revenue). Ví dụ: Mua hàng tồn 10tr trả tiền → Debit Inventory 10tr, Credit Cash 10tr. Bán hàng 15tr nợ → Debit AR 15tr, Credit Revenue 15tr. Mỗi journal entry: tổng Debit = tổng Credit."
    ]},
  { id: 107, section: "S. Kế toán Căn bản (thuần)", q: "P&L (Income Statement) khác Balance Sheet ở chỗ:",
    options: [
      "P&L: doanh thu/chi phí/lợi nhuận TRONG MỘT KỲ (tháng/quý/năm); Balance Sheet: tài sản/nợ/vốn TẠI MỘT THỜI ĐIỂM (cuối kỳ)",
      "Giống nhau",
      "P&L chỉ cho công ty nhỏ",
      "Balance Sheet không bắt buộc"
    ], correct: 0, exp: [
      "A đúng: P&L là flow statement (covering a period): Revenue – COGS = Gross Profit; – OpEx = EBIT; – Interest – Tax = Net Profit. Balance Sheet là snapshot (point in time): Assets (Current + Non-current) = Liabilities + Equity. Net Profit từ P&L flow vào Retained Earnings (Equity) trên Balance Sheet."
    ]},
  { id: 108, section: "S. Kế toán Căn bản (thuần)", q: "Công thức COGS (Cost of Goods Sold) cơ bản:",
    options: [
      "Beginning Inventory + Purchases – Ending Inventory = COGS",
      "Revenue – Profit",
      "Total Expenses",
      "AR + AP"
    ], correct: 0, exp: [
      "A đúng: COGS là giá vốn hàng ĐÃ BÁN trong kỳ. Bắt đầu có tồn X, mua thêm Y, cuối kỳ còn Z → đã bán = X + Y – Z. Chính xác hơn theo costing method: FIFO, Weighted Average, Specific Identification. COGS là dòng quan trọng trên P&L: Revenue – COGS = Gross Profit."
    ]},
  { id: 109, section: "S. Kế toán Căn bản (thuần)", q: "Accrual basis accounting khác Cash basis:",
    options: [
      "Accrual: ghi nhận doanh thu khi PHÁT SINH (giao hàng + chuyển rủi ro), chi phí khi PHÁT SINH; Cash: ghi khi nhận/chi TIỀN. Accrual phản ánh đúng kỳ hơn, là chuẩn mực kế toán bắt buộc cho hầu hết doanh nghiệp",
      "Giống nhau",
      "Cash basis chính xác hơn",
      "Accrual không hợp pháp"
    ], correct: 0, exp: [
      "A đúng: Ví dụ: bán hàng 100tr ngày 28/12 cho khách credit 30 ngày. Accrual: ghi Revenue 100tr T12, AR 100tr. Cash: chỉ ghi khi nhận tiền T1 năm sau. Accrual matching principle (revenue match cost cùng kỳ) cho ra P&L chính xác. VAS, IFRS đều yêu cầu accrual cho mọi doanh nghiệp (trừ một số trường hợp nhỏ)."
    ]},
  { id: 110, section: "S. Kế toán Căn bản (thuần)", q: "Working Capital = ?",
    options: [
      "Current Assets – Current Liabilities (Tài sản ngắn hạn – Nợ ngắn hạn); đo khả năng thanh khoản và vận hành hằng ngày",
      "Total Assets – Total Liabilities",
      "Revenue – Expenses",
      "Cash – Bank Loan"
    ], correct: 0, exp: [
      "A đúng: Working Capital phản ánh tiền có thể dùng vận hành (mua nguyên liệu, trả lương). Current Assets: Cash, AR, Inventory. Current Liabilities: AP, accrued expenses, short-term debt. WC dương = đủ tiền vận hành. WC âm = rủi ro thanh khoản. Cải thiện: giảm AR (thu nhanh), giảm Inventory (turnover), tăng AP (thương lượng payment terms dài)."
    ]},
  { id: 111, section: "S. Kế toán Căn bản (thuần)", q: "VAT đầu vào, đầu ra, VAT phải nộp:",
    options: [
      "VAT đầu vào (đã trả khi mua) khấu trừ vào VAT đầu ra (đã thu khi bán); VAT phải nộp = đầu ra – đầu vào (nếu >0); nếu âm thì hoàn hoặc treo sang kỳ sau",
      "Tự tính tùy ý",
      "Chỉ tính đầu vào",
      "Chỉ tính đầu ra"
    ], correct: 0, exp: [
      "A đúng: Ví dụ: mua hàng 100tr + VAT 10% = 110tr (Debit Inventory 100, VAT đầu vào 10, Credit Cash 110). Bán 150tr + VAT 10% = 165tr (Debit Cash 165, Credit Revenue 150, VAT đầu ra 15). VAT phải nộp = 15 – 10 = 5tr. Kê khai hàng tháng/quý theo TT 156, NĐ 209. Hóa đơn hợp pháp (e-invoice) là điều kiện khấu trừ."
    ]},
  { id: 112, section: "S. Kế toán Căn bản (thuần)", q: "Khấu hao tài sản cố định (Depreciation) là:",
    options: [
      "Phân bổ giá trị tài sản cố định (máy móc, nhà xưởng, xe) qua nhiều kỳ tương ứng thời gian sử dụng dự kiến; phương pháp: Straight Line, Declining Balance, Units of Production",
      "Giảm giá bán sản phẩm",
      "Khấu trừ thuế thu nhập",
      "Mất giá vật chất do hư hỏng"
    ], correct: 0, exp: [
      "A đúng: Tài sản cố định không feed vào COGS một lần khi mua, mà khấu hao dần. Straight Line: (Cost – Salvage) / Useful Life = Annual Depreciation. Ví dụ: máy 100tr, dùng 10 năm, residual 0 → 10tr/năm chi phí khấu hao. Quan trọng cho: P&L (chi phí), Tax (deductible), Balance Sheet (NBV = Cost – Accumulated Depreciation). VAS 03 / TT 45 quy định useful life cho từng loại tài sản tại VN."
    ]},
  { id: 113, section: "S. Kế toán Căn bản (thuần)", q: "AR Aging (Phân tích tuổi nợ) là:",
    options: [
      "Phân loại AR theo độ overdue: Current (chưa đến hạn), 1-30 ngày, 31-60, 61-90, 90+ ngày — giúp nhận diện rủi ro bad debt, ưu tiên follow-up",
      "Tuổi của khách hàng",
      "Tuổi nhân viên Sales",
      "Tuổi của hóa đơn"
    ], correct: 0, exp: [
      "A đúng: AR Aging là báo cáo critical cho Finance/Sales. Hóa đơn overdue 90+ ngày có xác suất bad debt cao (>50%). Quy trình: gửi reminder (overdue 7 ngày), call (15 ngày), Sales Manager involvement (30), block credit (45), legal action (90+). Allowance for Doubtful Accounts: dự phòng nợ khó đòi dựa trên Aging."
    ]},
  { id: 114, section: "S. Kế toán Căn bản (thuần)", q: "Đóng kỳ kế toán (Period-end closing) bao gồm:",
    options: [
      "Reconcile subledger (AR, AP, Inventory, FA) với G/L → adjusting entries (depreciation, accrual, prepaid) → trial balance → đóng tài khoản P&L về Retained Earnings (cuối năm) → chuẩn bị báo cáo",
      "Chỉ chạy Trial Balance",
      "Chỉ in báo cáo",
      "Không cần đóng nếu công ty nhỏ"
    ], correct: 0, exp: [
      "A đúng: Period-end closing chuẩn mỗi tháng/quý/năm. (1) Reconcile subledgers với G/L: AR aging vs AR account, Inventory Valuation vs Inventory account. (2) Adjusting entries: depreciation, prepaid amortization, accrued expense, accrued revenue. (3) Trial Balance cân Debit = Credit. (4) Closing entries (cuối năm): Revenue + Expense → Income Summary → Retained Earnings. (5) Lock period — không cho post backdated. (6) Báo cáo: Balance Sheet, P&L, Cash Flow."
    ]},

  // ========== O2. MUA HÀNG NÂNG CAO ==========
  { id: 115, section: "O2. Mua hàng nâng cao", q: "Kraljic Matrix phân loại item mua hàng dựa trên 2 trục:",
    options: [
      "Profit Impact (giá trị chi tiêu) vs Supply Risk (rủi ro nguồn cung) → 4 góc: Strategic, Bottleneck, Leverage, Non-critical",
      "Giá vs số lượng",
      "Quality vs Cost",
      "Local vs Import"
    ], correct: 0, exp: [
      "A đúng: Kraljic Matrix là framework strategic sourcing kinh điển. (1) Strategic (cao cả 2): partnership dài hạn, share forecast. (2) Bottleneck (rủi ro cao, giá thấp): dual sourcing, safety stock. (3) Leverage (giá trị cao, rủi ro thấp): đàm phán giá, e-auction. (4) Non-critical: tự động hóa, catalog buying. Buyer khác chiến lược cho từng góc — không 'one size fits all'."
    ]},
  { id: 116, section: "O2. Mua hàng nâng cao", q: "MOQ (Minimum Order Quantity) cao của vendor ảnh hưởng đại lý như thế nào?",
    options: [
      "Phải mua lớn hơn nhu cầu → tăng safety stock + holding cost; hoặc thương lượng giảm MOQ; hoặc mua chung consortium; trade-off: giảm giá per unit vs tăng cost of holding",
      "Không ảnh hưởng",
      "Luôn tốt cho đại lý",
      "Luôn xấu cho đại lý"
    ], correct: 0, exp: [
      "A đúng: Vendor đặt MOQ vì economies of scale (setup cost, transport). Khi MOQ > nhu cầu thực: (1) Mua đúng MOQ → tồn kho dư, holding cost cao. (2) Thương lượng giảm MOQ (trả giá cao hơn). (3) Mua chung với đại lý khác. (4) Đổi vendor có MOQ thấp. Buyer giỏi cân TCO chứ không chỉ unit price."
    ]},
  { id: 117, section: "O2. Mua hàng nâng cao", q: "Single source vs Dual/Multi source trong sourcing strategy:",
    options: [
      "Single: 1 vendor duy nhất → tiết kiệm quản lý, deeper relationship, leverage tốt nhưng rủi ro gián đoạn cao; Dual/Multi: chia khối lượng cho 2+ vendor → backup, cạnh tranh nhưng phân tán volume, tăng overhead",
      "Single luôn tốt",
      "Multi luôn tốt",
      "Tùy ý buyer"
    ], correct: 0, exp: [
      "A đúng: Quyết định dựa trên: (1) Tính critical của item (Kraljic Strategic/Bottleneck nên multi-source). (2) Vendor market (oligopoly hay competitive). (3) Quality risk. (4) Supply chain risk (vendor phá sản, thiên tai, geopolitical). Sau Covid 2020-2022, nhiều công ty chuyển từ single sang dual/multi cho hàng critical."
    ]},
  { id: 118, section: "O2. Mua hàng nâng cao", q: "Spend Analysis trả lời câu hỏi gì?",
    options: [
      "Phân tích chi tiêu mua hàng theo Category/Vendor/Region/BU để nhận diện cơ hội tiết kiệm: bulk consolidation, vendor reduction, off-contract spend, maverick spend",
      "Phân tích doanh thu",
      "Phân tích lợi nhuận",
      "Phân tích lương"
    ], correct: 0, exp: [
      "A đúng: Spend Analysis (thường annual) trả lời: chi bao nhiêu cho cái gì, với ai, ở đâu. Cubes 3 chiều: Category × Vendor × BU. Phát hiện: (1) 1 vendor chiếm 80% category → đàm phán. (2) Quá nhiều vendor cho cùng category → consolidate. (3) Off-contract spend (mua ngoài hợp đồng) → enforce compliance. (4) Maverick spend (mua không qua quy trình) → fix governance."
    ]},
  { id: 119, section: "O2. Mua hàng nâng cao", q: "Open Book Costing trong vendor relationship nghĩa là:",
    options: [
      "Vendor chia sẻ cost breakdown thực tế (raw materials, labor, overhead, margin) cho buyer; buyer dùng để đàm phán hợp lý và tìm cơ hội cải tiến chung",
      "Vendor cho xem sổ sách kế toán",
      "Mua công khai trên sàn",
      "Không có hợp đồng"
    ], correct: 0, exp: [
      "A đúng: Open Book Costing áp dụng cho strategic vendor relationship dài hạn. Vendor minh bạch cost structure, buyer minh bạch volume forecast. Lợi ích: (1) Joint cost reduction. (2) Fair margin cho vendor. (3) Tránh đối đầu zero-sum negotiation. Đòi hỏi trust 2 chiều, không phù hợp transactional sourcing."
    ]},
  { id: 120, section: "O2. Mua hàng nâng cao", q: "Approval Matrix trong mua hàng thường thiết kế theo:",
    options: [
      "Ngưỡng giá trị (<50tr - Trưởng phòng, 50-500tr - Giám đốc, >500tr - HĐQT) + loại chi tiêu (CapEx vs OpEx) + category; cao hơn cần nhiều cấp duyệt và evidence (3 báo giá, business case)",
      "Tùy ý cấp quản lý",
      "Mọi PO đều cần Giám đốc",
      "Không cần approval"
    ], correct: 0, exp: [
      "A đúng: Approval Matrix là internal control quan trọng. (1) Threshold rõ ràng phù hợp quy mô. (2) CapEx có ngưỡng thấp hơn OpEx vì impact dài hạn. (3) Category nhạy cảm (consulting, marketing) ngưỡng thấp hơn. (4) Segregation of Duties: người duyệt khác người yêu cầu. (5) Audit trail. Tránh 'approver fatigue' (duyệt quá nhiều bị nhờn)."
    ]},
  { id: 121, section: "O2. Mua hàng nâng cao", q: "Vendor Onboarding due diligence cần check gì?",
    options: [
      "KYC (giấy phép, MST, tài khoản), tài chính (BCTC 2-3 năm), năng lực (factory audit, references, certificates), pháp lý (sanction list, blacklist), bảo hiểm (product liability)",
      "Chỉ cần MST",
      "Chỉ cần báo giá",
      "Tin tưởng vendor tự khai"
    ], correct: 0, exp: [
      "A đúng: Vendor Onboarding bài bản giảm rủi ro: (1) KYC compliance. (2) Tài chính: vendor sắp phá sản → gián đoạn cung cấp. (3) Năng lực: factory audit (food vendor cần GMP/HACCP/ISO 22000 cert). (4) Pháp lý: sanction screening đặc biệt vendor nước ngoài. (5) Bảo hiểm: product liability bảo vệ buyer khi sản phẩm gây hại. Vendor approval committee (Purchasing + QA + Finance + Legal) review trước khi onboard."
    ]},
  { id: 122, section: "O2. Mua hàng nâng cao", q: "TAC (Total Acquisition Cost) khác TCO (Total Cost of Ownership):",
    options: [
      "TAC: chi phí mua sắm (giá + cước + thuế + customs) đến khi hàng vào kho; TCO: TAC + chi phí vòng đời (lưu kho, sử dụng, bảo trì, hủy bỏ) — toàn vòng đời sở hữu",
      "Giống nhau",
      "TAC bao gồm TCO",
      "TCO chỉ giá"
    ], correct: 0, exp: [
      "A đúng: TAC focus 'in the door' cost. TCO mở rộng: hàng hóa có quality issues sau khi vào kho? Defect rate? Recall risk? Storage requirements (refrigerated)? Disposal cost (chất thải nguy hại)? Switching cost (đổi vendor mất bao nhiêu)? Strategic items mua theo TCO; commodity mua theo TAC."
    ]},

  // ========== P2. KHO HÀNG NÂNG CAO ==========
  { id: 123, section: "P2. Kho hàng nâng cao", q: "Slotting optimization trong kho là:",
    options: [
      "Sắp xếp vị trí lưu trữ tối ưu dựa trên velocity (fast/medium/slow), kích thước, đặc tính (heavy, fragile), affinity (đi cùng đơn) — giảm travel time của picker",
      "Đếm tồn kho",
      "Định giá hàng tồn",
      "Thiết kế nhãn"
    ], correct: 0, exp: [
      "A đúng: Slotting quyết định item nào để bin nào. Best practice: (1) Velocity: A-items (fast) gần lối đi/khu picking, C-items xa. (2) Cube: phù hợp dimensions của bin. (3) Family: nhóm sản phẩm cùng family gần nhau. (4) Pick affinity: item thường pick chung trong 1 đơn để gần nhau. Slotting tốt giảm 20-40% travel time → tăng productivity picker."
    ]},
  { id: 124, section: "P2. Kho hàng nâng cao", q: "Cube Utilization (% sử dụng thể tích kho) tính bằng:",
    options: [
      "(Tổng thể tích hàng đang lưu / Tổng thể tích storage có thể sử dụng) × 100; target 85-90% (>90% khó vận hành, <70% lãng phí)",
      "Số pallet / tổng diện tích",
      "Doanh thu / m²",
      "Tồn kho / vendor"
    ], correct: 0, exp: [
      "A đúng: Cube Utilization đo hiệu quả không gian. Không gian 'usable' trừ aisle, dock, văn phòng. Mục tiêu 85-90%: cao quá → khó di chuyển, không có slot dự phòng. Thấp quá → lãng phí thuê kho. Cải thiện: (1) Vertical expansion. (2) Narrow aisle (VNA forklift). (3) Mezzanine. (4) Mobile racking. (5) Slotting tốt hơn."
    ]},
  { id: 125, section: "P2. Kho hàng nâng cao", q: "3PL contract loại 'Per Pallet Per Month' khác 'Cost Plus':",
    options: [
      "Per Pallet: 3PL tính phí theo số pallet × thời gian — đơn giản, dự đoán được nhưng kém linh hoạt; Cost Plus: 3PL công khai chi phí thực + margin% — phù hợp dài hạn, partnership, đòi hỏi minh bạch",
      "Giống nhau",
      "Per Pallet luôn rẻ hơn",
      "Cost Plus chỉ cho hàng đắt"
    ], correct: 0, exp: [
      "A đúng: 3PL có nhiều mô hình giá: (1) Per Pallet/Per Item/Per Carton: theo unit × thời gian. (2) Per Order (pick-pack-ship): phí theo lần xuất. (3) Cost Plus / Open Book: chi phí thực + agreed margin. (4) Gain-share: 3PL được chia nếu tiết kiệm. Per Pallet phổ biến cho SME; Cost Plus cho strategic partnership với 3PL lớn."
    ]},
  { id: 126, section: "P2. Kho hàng nâng cao", q: "VAS (Value Added Services) trong kho gồm:",
    options: [
      "Đóng gói (relabeling, repackaging), bundling, kitting, gift wrapping, ticketing, QC inspection, returns processing — dịch vụ tạo giá trị thêm, không chỉ storage",
      "Vận chuyển",
      "Bảo hiểm",
      "Cleaning"
    ], correct: 0, exp: [
      "A đúng: VAS biến kho từ cost center thành value center. Phổ biến cho phân phối FMCG/Retail: (1) Relabeling (đổi tem theo retailer requirement). (2) Repackaging (case → display unit). (3) Kitting (gộp item thành combo). (4) Gift wrapping. (5) QC final inspection. (6) Returns sorting. 3PL cung cấp VAS thường charge separately — nguồn revenue cao hơn pure storage."
    ]},
  { id: 127, section: "P2. Kho hàng nâng cao", q: "Dock Scheduling là:",
    options: [
      "Đặt lịch giờ đến/đi của xe vendor và xe giao để tránh ùn tắc dock; xe phải có appointment trước, đến đúng slot — giảm waiting time, tối ưu nhân lực dock",
      "Đếm xe",
      "Lịch nghỉ của dock worker",
      "Bảo trì dock"
    ], correct: 0, exp: [
      "A đúng: Kho FMCG có 20-50 xe vào/ra mỗi ngày. Không có scheduling: xe đến cùng lúc → ùn tắc, chờ 4-6 giờ, dock worker idle khi rảnh. Dock Scheduling: vendor book slot online (vd 9:00 AM dock 3, 30 phút). Lợi ích: (1) Smooth flow, (2) Phân bổ nhân lực đều, (3) Vendor accountability. Tools: 4Sight, C3 Solutions, Manhattan Yard Mgmt."
    ]},
  { id: 128, section: "P2. Kho hàng nâng cao", q: "Honeycombing trong kho là gì?",
    options: [
      "Lãng phí không gian khi 1 pallet location chỉ chứa 1 phần pallet (vd 5/30 case); kho có nhiều location đầy 1 phần → cube utilization thấp dù dường như 'đầy'",
      "Hình dáng bin",
      "Loại pallet",
      "Lỗi đếm"
    ], correct: 0, exp: [
      "A đúng: Honeycombing là 'hidden waste' khó nhận ra. Mỗi pallet location chiếm 1 slot fixed (1.2m × 1m × 1.5m) nhưng có thể chỉ chứa 30% hàng. Nguyên nhân: pallet bị pick lẻ nhiều. Giải pháp: (1) Bin replenishment xuống full pallet trước khi pick lẻ. (2) Consolidate (gộp 2 pallet lẻ thành 1). (3) Random storage (system gán bin trống thay vì fixed). (4) Dynamic slotting. KPI: Average Location Fill % nên >70%."
    ]},
  { id: 129, section: "P2. Kho hàng nâng cao", q: "Travel Time Analysis của picker trong kho điển hình cho thấy:",
    options: [
      "% thời gian picker đi/di chuyển (không pick) thường 50-70% thời gian; giảm travel = tăng productivity; cải thiện qua slotting, batch/cluster picking, voice picking, conveyor, goods-to-person",
      "Đo thời gian đi làm",
      "Đo thời gian dock",
      "Đo thời gian shipping"
    ], correct: 0, exp: [
      "A đúng: Picker spend phần lớn thời gian đi bộ giữa bin, không phải pick. Industry benchmark: 50-70% travel, 20-30% pick, 10-20% admin. Giảm travel = đòn bẩy lớn nhất tăng productivity. Phương pháp: (1) ABC slotting (fast item gần lối đi). (2) Batch picking. (3) Pick-to-light / Voice picking. (4) Conveyor đưa case đến packer. (5) Goods-to-person (robot mang hàng tới picker — Kiva/AutoStore)."
    ]},
  { id: 130, section: "P2. Kho hàng nâng cao", q: "KPI 'Order Cycle Time' trong kho đo:",
    options: [
      "Thời gian từ khi nhận SO đến khi hàng được ship; gồm process order + pick + pack + load; target tùy ngành (B2C eCommerce <24h, B2B FMCG <48h)",
      "Tổng thời gian sản xuất",
      "Thời gian lưu kho trung bình",
      "Tuổi hóa đơn"
    ], correct: 0, exp: [
      "A đúng: Order Cycle Time đo end-to-end fulfillment. Breakdown: (1) Order received → released to warehouse, (2) Pick wave created, (3) Pick executed, (4) Pack & label, (5) Load truck. Mỗi bước có sub-KPI: Wave Time, Pick Time, Pack Time. Cải thiện: parallel pick, automated packing, dock door auto-assign. KPI partner: OTIF (On-Time In-Full) — đo lường cuối cùng từ góc khách hàng."
    ]},

  // ========== Q2. QUẢN TRỊ CHẤT LƯỢNG NÂNG CAO ==========
  { id: 131, section: "Q2. Quản trị Chất lượng nâng cao", q: "Shelf Life Testing có 2 dạng:",
    options: [
      "Real-time (lưu sản phẩm ở điều kiện thường, đo định kỳ — chính xác nhưng lâu, vd 2 năm cho sữa UHT); Accelerated (lưu điều kiện stress: nhiệt độ/ẩm cao — nhanh hơn nhưng cần model tương quan)",
      "Chỉ real-time",
      "Đoán theo vendor",
      "Chỉ accelerated"
    ], correct: 0, exp: [
      "A đúng: Real-time là gold standard, nhưng không khả thi cho sản phẩm mới ra mắt. Accelerated dùng Arrhenius equation: ở 40°C, mỗi 10°C tăng = 2-3x degradation. Test 3 tháng ở 40°C ≈ 1 năm thực tế. Limitations: (1) Không tất cả mode degradation tăng đều theo nhiệt. (2) Cần validate model. Best practice: kết hợp accelerated cho launch + real-time để xác nhận."
    ]},
  { id: 132, section: "Q2. Quản trị Chất lượng nâng cao", q: "Mock Recall Drill là:",
    options: [
      "Diễn tập recall giả định để test traceability + thu hồi trong thời gian quy định (vd 2-4 giờ); chọn 1 lô ngẫu nhiên, yêu cầu team tìm: nhập từ vendor nào, đã bán cho ai, còn ở đâu",
      "Recall thật",
      "Đào tạo nhân viên",
      "Audit kho"
    ], correct: 0, exp: [
      "A đúng: Mock Recall là requirement của FSMA (Mỹ), GFSI scheme (BRC, IFS), ISO 22000. Tần suất: 1-2 lần/năm. Tiêu chí pass: (1) Trace ngược 100% lô trong <4 giờ. (2) Identify all customers/locations. (3) Calculate qty: sold/in transit/in stock/scrap. (4) Communication plan ready. Failure mode: master data không đầy đủ, lot không đầy đủ, communication chậm. Mock recall lộ weakness trước khi recall thật xảy ra."
    ]},
  { id: 133, section: "Q2. Quản trị Chất lượng nâng cao", q: "Allergen Cross-Contamination Control gồm:",
    options: [
      "Phân vùng allergen-containing products (peanut, milk, soy, gluten, egg...) riêng biệt; cleaning validation giữa batch; dedicated equipment hoặc cleaning kỹ; labeling 'may contain'; train nhân viên; supplier disclosure",
      "Không cần kiểm soát",
      "Chỉ label",
      "Chỉ clean"
    ], correct: 0, exp: [
      "A đúng: Allergen là rủi ro chết người (anaphylaxis). Top 8/14 allergens (FDA/EU): milk, egg, peanut, tree nuts, soy, wheat/gluten, fish, shellfish (+ sesame, mustard, celery, lupin, mollusks, sulfites). Control: (1) Segregation (rack riêng, color coding). (2) Dedicated production line nếu volume đủ. (3) Validated cleaning (swab test, ATP). (4) Schedule (allergen-free chạy đầu ca, allergen chạy cuối). (5) Vendor declaration."
    ]},
  { id: 134, section: "Q2. Quản trị Chất lượng nâng cao", q: "VACCP và TACCP khác HACCP:",
    options: [
      "HACCP: an toàn thực phẩm (unintentional hazards); VACCP (Vulnerability): chống gian lận thực phẩm (food fraud — substitution, dilution, mislabeling vì lợi ích kinh tế); TACCP (Threat): chống tấn công cố ý (sabotage, malicious contamination)",
      "Giống nhau",
      "Chỉ HACCP quan trọng",
      "VACCP là về vaccine"
    ], correct: 0, exp: [
      "A đúng: Khi food fraud thành vấn đề lớn (sữa melamine 2008, thịt ngựa châu Âu 2013), GFSI yêu cầu thêm VACCP. TACCP cho counter-terrorism. Khác biệt: HACCP unintentional + safety; VACCP intentional + economic gain; TACCP intentional + harm intent. Cả 3 framework cùng thực hiện vulnerability assessment + critical points + monitoring. Ngành dược, baby food, organic premium đặc biệt cần VACCP."
    ]},
  { id: 135, section: "Q2. Quản trị Chất lượng nâng cao", q: "Sanitation Standard Operating Procedures (SSOP) tập trung vào:",
    options: [
      "Quy trình vệ sinh chi tiết: tần suất (daily/weekly/periodic), phương pháp (CIP - Clean In Place, COP - Clean Out of Place), hóa chất, validation (visual + ATP + microbiological swab); pre-operational và operational SSOP",
      "Quy trình sản xuất",
      "Quy trình bán hàng",
      "Quy trình mua hàng"
    ], correct: 0, exp: [
      "A đúng: SSOP là tài liệu kỹ thuật của vệ sinh, theo '5 steps cleaning': (1) Dry clean (loại chất rắn). (2) Rinse. (3) Apply detergent. (4) Rinse. (5) Sanitize. Validation: visual sạch không đủ — cần ATP swab (<30 RLU pass) hoặc microbiological swab. CIP cho thiết bị có hệ thống ống (tank, pipe). COP cho thiết bị tháo rời (knife, conveyor parts)."
    ]},
  { id: 136, section: "Q2. Quản trị Chất lượng nâng cao", q: "Integrated Pest Management (IPM) Program tiếp cận:",
    options: [
      "Physical (screen, air curtain, đóng cửa kín), sanitation (loại nguồn thức ăn/nước cho pest), monitoring (bait station, sticky trap, pheromone trap), chemical là biện pháp cuối; ghi chép tất cả monitoring + treatment",
      "Phun thuốc định kỳ",
      "Đuổi pest",
      "Bẫy chuột thủ công"
    ], correct: 0, exp: [
      "A đúng: GFSI yêu cầu IPM, không phải spray định kỳ. Hierarchy: (1) Prevention (bịt khe hở, screen 32 mesh). (2) Exclusion (door sweep, air curtain). (3) Sanitation (loại food/water source). (4) Monitoring (trap stations đánh số trên map, check weekly). (5) Treatment khi cần (targeted, MSDS approved). External pest control vendor có cert + monthly inspection report. Common pests F&B: rodent, cockroach, fly, stored product insects."
    ]},
  { id: 137, section: "Q2. Quản trị Chất lượng nâng cao", q: "Customer Complaint Trend Analysis làm gì?",
    options: [
      "Phân tích complaint theo category (defect, packaging, foreign object, taste, quantity short), Item, Lot, Customer, Geographic; tìm pattern → root cause; bắt buộc theo ISO 22000 + ISO 9001",
      "Đọc complaint manual",
      "Trả lời từng complaint",
      "Ignore complaints"
    ], correct: 0, exp: [
      "A đúng: Mỗi complaint là 'free quality intelligence'. Tốt: log structured (complaint code, severity, evidence, response time). Trend analysis hàng tháng: (1) Top complaint types → focus CAPA. (2) Recurring vendor/SKU → quality issue upstream. (3) Geographic cluster → distribution issue (cold chain, handling). (4) Severity escalation → recall trigger. KPI: Complaint Rate (#/million units), Response Time (<48h), Resolution Time, Recurrence Rate."
    ]},
  { id: 138, section: "Q2. Quản trị Chất lượng nâng cao", q: "Skip-Lot Sampling (lấy mẫu nhảy lô) là:",
    options: [
      "Đối với vendor có lịch sử chất lượng tốt: thay vì kiểm 100% các lô, skip một số lô (vd 1 trong 5); vendor mới hoặc có lô fail gần đây quay lại 100% inspection",
      "Không kiểm tra",
      "Kiểm 1 mẫu mỗi lô",
      "Kiểm random"
    ], correct: 0, exp: [
      "A đúng: Skip-Lot là reward cho vendor performance. Tiết kiệm 50-80% inspection time + cost cho vendor strategic. Quy tắc (MIL-STD-1235): vendor phải có 10 lô liên tiếp pass mới đủ điều kiện skip-lot; 1 lô fail → quay về 100% inspection cho 10 lô tiếp. Dùng cho vendor có quality system mature (ISO 22000, BRC cert). Không dùng cho high-risk product (vaccine, baby food)."
    ]},

  // ========== R2. BÁN HÀNG NÂNG CAO ==========
  { id: 139, section: "R2. Bán hàng nâng cao", q: "Fill Rate khác On-Time Delivery:",
    options: [
      "Fill Rate: % đơn được giao ĐỦ qty (line fill rate hoặc order fill rate); On-Time: % đơn được giao ĐÚNG hạn; OTIF = On-Time + In-Full kết hợp cả 2 — khắt khe hơn",
      "Giống nhau",
      "Fill Rate cho B2B",
      "On-Time cho B2C"
    ], correct: 0, exp: [
      "A đúng: Fill Rate (Order hoặc Line): order 10 items mỗi 100 units, giao 9 items đủ, 1 item thiếu → Line Fill Rate = 90%, Order Fill Rate = 0% (đơn không đủ). On-Time: theo committed delivery date. OTIF (both ON time AND IN full) — best practice metric. Target FMCG: OTIF >95%; best-in-class >98%. Bị penalty từ MT retailer (Walmart, Big C) khi OTIF kém."
    ]},
  { id: 140, section: "R2. Bán hàng nâng cao", q: "SKU Rationalization là gì?",
    options: [
      "Quy trình review portfolio SKU để loại bỏ underperformer (low sales × low margin × high complexity); focus vital few — Pareto 80/20 thường thấy 20% SKU tạo 80% doanh thu",
      "Tạo nhiều SKU",
      "Đổi tên SKU",
      "Phân loại SKU"
    ], correct: 0, exp: [
      "A đúng: Portfolio SKU phình to (long tail) gây: (1) Complexity vận hành. (2) Cannibalization. (3) Working capital lock vào slow movers. Framework: 4-box matrix (Volume × Margin) → Keep / Grow / Reposition / Discontinue. Discontinue cần plan: clearance, transition customers, last-time-buy components. Review mỗi 12-18 tháng. Cẩn thận SKU 'strategic' (loss leader, halo product) không discontinue dù performance kém."
    ]},
  { id: 141, section: "R2. Bán hàng nâng cao", q: "Trade Spend ROI đo:",
    options: [
      "Hiệu quả Trade Promotion: Incremental Sales từ promo / Trade Spend cost; cần baseline forecast (sales không có promo) để tính lift; ROI <1 = lỗ, lift không bù cost",
      "Tổng doanh thu / Tổng promo",
      "Profit margin",
      "Sales growth"
    ], correct: 0, exp: [
      "A đúng: Trade Spend (15-25% revenue FMCG) thường là expense lớn thứ 2 sau COGS. Methodology: (1) Baseline forecast (statistical model loại bỏ effect promo). (2) Actual sales during promo. (3) Lift = Actual – Baseline. (4) ROI = (Lift × Gross Margin/unit) / Trade Spend. Ngành chỉ ROI 30-50% promo có positive ROI; 50% còn lại là cannibalize (forward buying — khách dự trữ, không tạo demand mới)."
    ]},
  { id: 142, section: "R2. Bán hàng nâng cao", q: "Joint Business Plan (JBP) với MT retailer gồm:",
    options: [
      "Kế hoạch hợp tác annual giữa supplier và retailer: business goals chung, assortment, pricing, promotion calendar, supply chain commitments, marketing investment; review hàng quý",
      "Tài liệu marketing",
      "Hợp đồng đơn giản",
      "Quote từng đơn"
    ], correct: 0, exp: [
      "A đúng: JBP là evolution từ adversarial buying sang strategic partnership. Components: (1) Customer Vision (3-year). (2) Annual targets. (3) Joint marketing investment. (4) Promotion calendar và mechanic. (5) Logistics SLA (OTIF, lead time). (6) Innovation pipeline (NPD). (7) Quarterly Business Review (QBR). Phổ biến với key account: Walmart, Tesco, Carrefour. VN: Big C, Co.opmart, Bách Hóa Xanh với supplier lớn."
    ]},
  { id: 143, section: "R2. Bán hàng nâng cao", q: "Account Planning cho sales rep B2B gồm:",
    options: [
      "Plan từng key account: hiểu customer business (goals, challenges), buying process, decision makers (DMU), competitive landscape, share of wallet, opportunities pipeline; review monthly với manager",
      "Lập kế hoạch nghỉ phép",
      "Plan budget cá nhân",
      "Plan training"
    ], correct: 0, exp: [
      "A đúng: Account Planning là disciplined approach cho B2B/Key Account. Document gồm: (1) Account Profile. (2) Customer's Business Strategy. (3) DMU map (Decision Making Unit — economic buyer, technical buyer, user, gatekeeper, champion). (4) Current state revenue. (5) Share of Wallet. (6) Opportunities pipeline (size, probability, timeline). (7) Action plan với date. Review monthly với Sales Manager."
    ]},
  { id: 144, section: "R2. Bán hàng nâng cao", q: "Bundle Pricing strategy:",
    options: [
      "Bán nhiều sản phẩm/services chung 1 giá thấp hơn tổng giá lẻ; mục đích: tăng order value, clear slow movers gắn với bestsellers, simplification cho khách, defensive vs competitor",
      "Sale 50%",
      "Buy 1 Get 1",
      "Coupon"
    ], correct: 0, exp: [
      "A đúng: Bundle pricing đa dạng: (1) Pure bundle (chỉ bán trong bundle). (2) Mixed bundle (bán cả riêng và bundle). (3) BOGO. (4) Cross-category bundle (sữa + bánh — tăng basket size). (5) Trial bundle. Risks: (a) Cannibalize stand-alone sales. (b) Lower per-unit margin. (c) Inventory complexity. Effective khi: sản phẩm complement, slow mover cần clear, competitor push hard."
    ]},
  { id: 145, section: "R2. Bán hàng nâng cao", q: "Forecast vs Plan vs Budget khác nhau:",
    options: [
      "Forecast: best estimate dựa trên data và assumptions hiện tại (what WILL happen); Plan: cam kết thực hiện với resources (what WE WILL do); Budget: financial allocation cho Plan (how MUCH money). Forecast updated frequently; Plan/Budget fixed cycle",
      "Giống nhau",
      "Forecast = Plan",
      "Budget = Forecast"
    ], correct: 0, exp: [
      "A đúng: Ví dụ: Sales Budget (annual): mục tiêu 1,000 tỷ — locked số financial. Sales Plan: hành động cụ thể đạt 1,000 tỷ (distribution, promotion, NPD). Sales Forecast (rolling): dựa trên actual + trend + market signal, có thể >, =, hoặc < Budget. Gap analysis (Forecast vs Budget) trigger management action. S&OP cycle: review forecast monthly, update plan if needed, budget locked annually."
    ]},
  { id: 146, section: "R2. Bán hàng nâng cao", q: "Sales Pipeline Stages cho B2B:",
    options: [
      "Lead → Qualified Lead (MQL) → Sales Qualified Lead (SQL) → Opportunity → Proposal → Negotiation → Closed Won/Lost; mỗi stage có probability và exit criteria; pipeline value = Σ (deal size × probability)",
      "Chỉ có Won/Lost",
      "Tùy sales rep",
      "Không cần stages"
    ], correct: 0, exp: [
      "A đúng: Pipeline discipline giúp forecast revenue chính xác. Marketing → Sales handoff: MQL (marketing qualified — interested) → SQL (sales qualified — fit). Stages có gating criteria rõ ràng. Pipeline value weighted: Lead 10%, Opportunity 30%, Proposal 50%, Negotiation 75%, Verbal commitment 90%, Closed 100%. Manager review pipeline weekly: aging deals (stuck >X ngày), missing data, slip risk. Tools: Salesforce, HubSpot."
    ]},

  // ========== S2. KẾ TOÁN CĂN BẢN NÂNG CAO ==========
  { id: 147, section: "S2. Kế toán Căn bản nâng cao", q: "Gross Margin khác Net Margin:",
    options: [
      "Gross Margin = (Revenue – COGS) / Revenue — đo hiệu quả pricing và cost of goods; Net Margin = Net Profit / Revenue — đo hiệu quả toàn doanh nghiệp sau ALL expenses (OpEx, interest, tax)",
      "Giống nhau",
      "Gross < Net luôn",
      "Net không bao gồm tax"
    ], correct: 0, exp: [
      "A đúng: P&L cascade margins: Gross Margin (vs COGS only) → Operating Margin (vs COGS + OpEx) → EBITDA Margin (ex D&A) → Net Margin (vs ALL expenses). Mỗi margin tell different story: Gross Margin pricing power; Operating Margin operational efficiency; Net Margin final shareholder return. FMCG: Gross 35-45%, Net 8-15%. Tech: Gross 70-80%, Net 15-25%. Retail: Gross 25-30%, Net 2-5%."
    ]},
  { id: 148, section: "S2. Kế toán Căn bản nâng cao", q: "Contribution Margin và Break-even Point:",
    options: [
      "Contribution Margin = Revenue – Variable Costs (per unit hoặc total); CM dùng để cover Fixed Costs và tạo Profit; Break-even Point = Fixed Costs / Contribution Margin per unit (số units phải bán để hòa vốn)",
      "Contribution = Net Profit",
      "Break-even không tính được",
      "Variable cost = Total cost"
    ], correct: 0, exp: [
      "A đúng: Cost behavior phân biệt Variable (varies với volume — materials, commission) và Fixed (constant — rent, salary). CM Income Statement: Revenue – Variable Cost = CM; CM – Fixed Cost = Operating Profit. Break-even units = FC / CM/unit. Ví dụ: FC 1tỷ/năm, CM 100k/unit → break-even 10,000 units. Quan trọng cho: pricing decision, product mix, scenario planning."
    ]},
  { id: 149, section: "S2. Kế toán Căn bản nâng cao", q: "EBITDA vs EBIT vs Net Income:",
    options: [
      "EBITDA = Earnings Before Interest, Tax, Depreciation, Amortization — proxy cash flow operating; EBIT = EBITDA – D&A — operating profit; Net Income = EBIT – Interest – Tax — bottom line cho shareholders",
      "Giống nhau",
      "EBITDA = Net Income",
      "EBIT > EBITDA luôn"
    ], correct: 0, exp: [
      "A đúng: Hierarchy: Revenue → COGS → Gross Profit → OpEx → EBITDA → D&A → EBIT (Operating Income) → Interest → EBT → Tax → Net Income. EBITDA hữu ích so sánh companies có capital structure (interest) hoặc tax jurisdiction hoặc CapEx (D&A) khác. Cẩn thận: EBITDA KHÔNG phải cash flow (không trừ working capital change, CapEx). M&A định giá thường dùng EV/EBITDA multiple."
    ]},
  { id: 150, section: "S2. Kế toán Căn bản nâng cao", q: "Cash Flow khác P&L Profit ở chỗ:",
    options: [
      "P&L follow accrual accounting (revenue khi earned, expense khi incurred); Cash Flow theo cash movement thực tế. Profit cao nhưng âm cash flow vì: AR tăng (chưa thu), Inventory tăng (vốn lock), Prepaid expense, CapEx, debt repayment",
      "Giống nhau",
      "Cash Flow = Net Income",
      "P&L = Cash basis"
    ], correct: 0, exp: [
      "A đúng: 'Profit is opinion, Cash is fact'. 3 sections Cash Flow Statement: (1) Operating CF: Net Income + non-cash (D&A) + Working Capital changes (∆AR, ∆Inventory, ∆AP). (2) Investing CF: CapEx, acquisition, divestment. (3) Financing CF: debt issuance/repayment, equity, dividends. Profit ↑ nhưng AR ↑ nhanh hơn → Operating CF âm → cash crunch dù P&L tốt. Nhiều profitable companies bankrupt vì cash flow."
    ]},
  { id: 151, section: "S2. Kế toán Căn bản nâng cao", q: "ROI vs ROCE vs ROE:",
    options: [
      "ROI = Return / Investment (generic); ROCE = EBIT / Capital Employed (Total Assets – Current Liabilities) — đo hiệu quả sử dụng capital long-term; ROE = Net Income / Shareholders Equity — return cho cổ đông",
      "Giống nhau",
      "ROE = ROCE",
      "ROI luôn = ROE"
    ], correct: 0, exp: [
      "A đúng: Return ratios đo profitability vs capital. ROCE bird-eye view overall capital efficiency (debt + equity). ROE focused on equity holders. ROE > ROCE có thể do financial leverage (vay nhiều). Benchmark FMCG: ROCE 15-25%, ROE 20-30%. Tech: ROCE 30%+, ROE 25%+. Utilities (cap intensive): ROCE 8-12%. ROE alone misleading (high debt = high ROE nhưng risky)."
    ]},
  { id: 152, section: "S2. Kế toán Căn bản nâng cao", q: "CapEx (Capital Expenditure) vs OpEx (Operating Expenditure):",
    options: [
      "CapEx: chi cho tài sản dài hạn (>1 năm sử dụng) — máy móc, nhà xưởng, software lớn; vào Balance Sheet và khấu hao dần qua P&L. OpEx: chi phí vận hành hằng ngày — lương, điện nước, marketing — vào P&L trực tiếp trong kỳ",
      "Giống nhau",
      "CapEx = OpEx",
      "CapEx vào P&L luôn"
    ], correct: 0, exp: [
      "A đúng: Phân biệt quan trọng cho: (1) Accounting — CapEx capitalized → depreciated; OpEx expensed. (2) Tax — both deductible nhưng timing khác. (3) Authority level — CapEx thường cần ngưỡng cao hơn. (4) ROI — CapEx project có IRR/NPV analysis. SaaS pricing model push từ CapEx (mua software) sang OpEx (subscription) — popular vì không chiếm capital budget. IFRS 16 (Leases): operating lease cũng phải capitalize on Balance Sheet now."
    ]},
  { id: 153, section: "S2. Kế toán Căn bản nâng cao", q: "Inventory Reserve / Allowance là:",
    options: [
      "Dự phòng giảm giá tồn kho theo nguyên tắc Lower of Cost or NRV (Net Realizable Value); ghi nhận khi giá thị trường hoặc giá bán dự kiến < cost; common cho hàng cận date, slow-moving, hỏng",
      "Tăng tồn kho",
      "Refund từ vendor",
      "Phí lưu kho"
    ], correct: 0, exp: [
      "A đúng: VAS 02 / IAS 2: Inventory ghi theo Lower of Cost or NRV. NRV = Estimated Selling Price – Cost to Complete – Cost to Sell. Khi NRV < Cost, ghi Allowance: Debit 'Loss on Inventory Write-down' (P&L), Credit 'Allowance for Inventory' (contra-asset). Auditor scrutinize methodology: Slow-moving (>180 days): 30-50%. Aged (>1 year): 80-100%. Damaged/Expired: 100%. Cận HSD: theo discount expected."
    ]},
  { id: 154, section: "S2. Kế toán Căn bản nâng cao", q: "Bad Debt Provision (Dự phòng nợ khó đòi) phương pháp:",
    options: [
      "Estimate AR có thể không thu được; ghi Loss on Bad Debt (P&L), credit Allowance for Doubtful Accounts (contra-AR). Methodology: % of credit sales, AR Aging với % theo bucket, hoặc specific identification of risky customers",
      "Xóa toàn bộ AR",
      "Tăng AR",
      "Không cần dự phòng"
    ], correct: 0, exp: [
      "A đúng: Matching principle — ghi nhận bad debt expense cùng kỳ revenue. 3 methodology: (1) Percentage of Credit Sales: vd 1% credit sales. (2) Aging Method: theo AR Aging, % loss tăng theo bucket (current 1%, 30-60 5%, 60-90 25%, 90+ 50%+). (3) Specific ID: khách cụ thể có dấu hiệu phá sản. Write-off: khi chắc chắn không thu — Debit Allowance, Credit AR. Recovery: nếu sau write-off khách trả lại — reverse entry."
    ]},
  { id: 155, section: "S2. Kế toán Căn bản nâng cao", q: "FX Realized vs Unrealized Gain/Loss:",
    options: [
      "Unrealized: chênh lệch tỷ giá khi revalue AR/AP/Cash ngoại tệ tại reporting date (chưa thực hiện); Realized: khi giao dịch thực hiện (payment ngoại tệ → quy đổi VND khác tỷ giá ghi sổ ban đầu)",
      "Giống nhau",
      "Realized chỉ cho cash",
      "Unrealized chỉ cho stock"
    ], correct: 0, exp: [
      "A đúng: Ví dụ: PO USD 10,000 ngày 1/1 tỷ giá 24,000 → AP 240tr. Cuối tháng tỷ giá 24,500 → AP nay 245tr. Unrealized FX Loss 5tr (P&L hoặc OCI). Payment 28/2 tỷ giá 24,300 → Realized FX Gain 2tr ((24,500 – 24,300) × 10,000 USD). Net Loss 3tr. (1) Period-end Adjust Exchange Rates revalue all open positions. (2) Currency Card define gain/loss accounts. (3) Hedging accounting nếu có forward. VN: thuế CIT phân biệt FX gain/loss theo hoạt động kinh doanh hay tài chính."
    ]},
  { id: 156, section: "S2. Kế toán Căn bản nâng cao", q: "Cost of Goods Manufactured (COGM) khác COGS:",
    options: [
      "COGM: tổng cost của hàng SẢN XUẤT XONG trong kỳ (Direct Materials + Direct Labor + Manufacturing Overhead + Beg WIP – End WIP); COGS: cost của hàng ĐÃ BÁN (Beg FG + COGM – End FG)",
      "Giống nhau",
      "COGM > COGS luôn",
      "COGM chỉ raw materials"
    ], correct: 0, exp: [
      "A đúng: Quan trọng cho manufacturing company:",
      "COGM = DM Used + DL + MOH + Beg WIP – End WIP",
      "COGS = Beg FG + COGM – End FG",
      "Direct Materials Used = Beg DM + DM Purchased – End DM",
      "Manufacturing Overhead: indirect labor, factory rent, depreciation máy móc, utilities factory, supplies.",
      "Trading company (no manufacturing): COGS = Beg Inv + Purchases – End Inv (đơn giản hơn). Cost Accounting framework: Job Order Costing (custom), Process Costing (continuous), ABC (activity-based)."
    ]},

  // ========== T. KỸ NĂNG WORKSHOP ERP CONSULTANT ==========
  { id: 157, section: "T. Kỹ năng Workshop ERP Consultant", q: "6 nhóm tiêu chí đánh giá workshop ERP consultant gồm:",
    options: [
      "Preparation, Content/Knowledge, Facilitation, Demo, Outcomes, Documentation",
      "Sales, Marketing, Technical, Support, Training, Audit",
      "PR, PO, GR, Invoice, Payment, Close",
      "Plan, Do, Check, Act, Review, Improve"
    ], correct: 0, exp: [
      "A đúng: 6 nhóm tiêu chí chuẩn đánh giá workshop ERP: (1) Chuẩn bị trước workshop (15%), (2) Kiến thức sản phẩm & nghiệp vụ (25%), (3) Kỹ năng facilitation (20%), (4) Demo & truyền tải nội dung (15%), (5) Kết quả & ra quyết định (15%), (6) Tài liệu & follow-up (10%). Đây là khung tham khảo phổ biến trong consulting practice."
    ]},
  { id: 158, section: "T. Kỹ năng Workshop ERP Consultant", q: "Nhóm tiêu chí nào có TRỌNG SỐ CAO NHẤT trong rubric đánh giá workshop?",
    options: [
      "Chuẩn bị trước workshop (15%)",
      "Kiến thức sản phẩm & nghiệp vụ (25%)",
      "Demo & truyền tải nội dung (15%)",
      "Documentation (10%)"
    ], correct: 1, exp: [
      "B đúng: Kiến thức sản phẩm & nghiệp vụ chiếm 25% — trọng số cao nhất. Lý do: consultant không có kiến thức sâu cả về module lẫn nghiệp vụ ngành sẽ mất uy tín ngay từ đầu workshop, không thể recover bằng các nhóm khác. Đây cũng là lý do consultant phải master cả 'phần mềm' lẫn 'nghiệp vụ thuần' (như key user)."
    ]},
  { id: 159, section: "T. Kỹ năng Workshop ERP Consultant", q: "Ngưỡng PASS tối thiểu của workshop tính theo điểm trung bình có trọng số:",
    options: [
      "≥1.0/4",
      "≥2.0/4",
      "≥2.7/4 (~67%) VÀ không có nhóm nào ở L1",
      "≥4.0/4"
    ], correct: 2, exp: [
      "C đúng: Ngưỡng pass có 2 điều kiện đồng thời — (1) Điểm trung bình có trọng số ≥ 2.7/4 (~67%), (2) Không có nhóm nào ở L1 (Không đạt). Điều kiện 2 quan trọng: nếu bị L1 ở Knowledge (sai về module) thì dù các nhóm khác tốt, workshop vẫn fail vì đã mất uy tín. Tránh 'compensating high scores for catastrophic failure'."
    ]},
  { id: 160, section: "T. Kỹ năng Workshop ERP Consultant", q: "Workshop được đánh giá L1 (Không đạt) ở nhóm Documentation khi:",
    options: [
      "MoM gửi trong 24h",
      "Không có MoM, hoặc gửi >5 ngày sau workshop; không cập nhật decision log/issue register",
      "MoM có decision log đầy đủ",
      "MoM gửi sau 48h"
    ], correct: 1, exp: [
      "B đúng: L1 ở Documentation = không có MoM hoặc gửi quá trễ (>5 ngày). Hậu quả: (1) Khách quên details, decisions trôi. (2) Action items không được track. (3) Project artifacts không đồng bộ → conflict trong giai đoạn sau. Khoảng thời gian gửi MoM: L4 = <24h kèm visual; L3 = 24-48h đầy đủ; L2 = 3-5 ngày sơ sài; L1 = >5 ngày hoặc không có."
    ]},
  { id: 161, section: "T. Kỹ năng Workshop ERP Consultant", q: "Demo trong workshop ở cấp L3 (Đạt) phải có đặc trưng:",
    options: [
      "Demo với generic data (Customer 001, Item ABC)",
      "Demo với data realistic mô phỏng kịch bản khách + ngôn ngữ business 100% + flow logic, có thể rewind khi cần giải thích",
      "Demo dùng nhiều thuật ngữ kỹ thuật (table name, field name)",
      "Không cần demo, chỉ cần slide"
    ], correct: 1, exp: [
      "B đúng: L3 yêu cầu demo data realistic (vd: tên item 'Sữa bột XYZ' thay vì 'Item 001', lot format giống của khách), ngôn ngữ business 100% (nói 'thiết lập theo dõi lô' thay vì 'config Item Tracking Code'). L4 cao hơn: storytelling end-to-end. L2: generic data + ngôn ngữ pha lẫn kỹ thuật. L1: demo lỗi hoặc dùng thuật ngữ kỹ thuật khiến business user không hiểu."
    ]},
  { id: 162, section: "T. Kỹ năng Workshop ERP Consultant", q: "Khi QA Manager và Production Manager bất đồng quan điểm về workflow QC, consultant L3 nên:",
    options: [
      "Đứng về phía QA Manager vì QA chủ workshop",
      "Park topic, đề xuất review riêng giữa 2 bên, ghi nhận positions, KHÔNG thiên vị bên nào",
      "Ép decision dứt khoát theo ý mình",
      "Hủy workshop"
    ], correct: 1, exp: [
      "B đúng: Xung đột nội bộ khách hàng KHÔNG phải việc consultant giải quyết. Consultant L3 xử lý chuyên nghiệp: (1) Acknowledge cả 2 quan điểm. (2) Park topic vào 'parking lot' với follow-up plan. (3) Đề xuất sub-meeting riêng giữa QA + Production để align trước khi quyết. (4) Tuyệt đối không thiên vị → mất trust 1 bên. L4: tạo môi trường an toàn để 2 bên debate, tìm common ground tự nhiên."
    ]},
  { id: 163, section: "T. Kỹ năng Workshop ERP Consultant", q: "Đặc trưng quan trọng nhất của workshop ở cấp L4 (Xuất sắc):",
    options: [
      "Đúng giờ tuyệt đối",
      "Không có lỗi technical nào",
      "Vượt mong đợi: định hướng được khách, đề xuất giải pháp cho gaps, tạo trust dài hạn, đưa best practice từ dự án khác",
      "Có MoM dài"
    ], correct: 2, exp: [
      "C đúng: L4 không chỉ là 'không lỗi' mà là 'tạo giá trị vượt mong đợi'. Đặc trưng: (1) Định hướng được khách (challenge giả định sai một cách lịch sự). (2) Đề xuất alternative cho gap (workaround, process change). (3) Đưa benchmark/case study từ dự án khác. (4) Khách cảm nhận 'đây là partner thực sự, không chỉ vendor'. Đúng giờ và không lỗi technical là yêu cầu cơ bản L3, không phải differentiator L4."
    ]},
  { id: 164, section: "T. Kỹ năng Workshop ERP Consultant", q: "Workshop bị overrun >30 phút so với agenda thuộc cấp nào ở nhóm Facilitation?",
    options: [
      "L1 - Không đạt",
      "L2 - Cần cải thiện",
      "L3 - Đạt",
      "L4 - Xuất sắc"
    ], correct: 0, exp: [
      "A đúng: Overrun >30 phút = L1 (Không đạt) vì: (1) Không tôn trọng thời gian của khách (busy people). (2) Cho thấy consultant không kiểm soát được flow. (3) Phần cuối thường rush, không chốt được decisions kỹ. Benchmark: L4 đúng giờ; L3 ±10 phút (acceptable); L2 overrun 10-20 phút; L1 >30 phút. Cách phòng ngừa: timeboxing mỗi block, có 'parking lot' cho topic ngoài scope, dry-run trước."
    ]},
  { id: 165, section: "T. Kỹ năng Workshop ERP Consultant", q: "Pre-read tài liệu gửi khách TRƯỚC workshop QC nên gồm:",
    options: [
      "Functional overview của module QC (8-10 trang) + danh sách các sub-process sẽ thảo luận để khách review trước",
      "Slide giới thiệu công ty consultant",
      "PowerPoint marketing sản phẩm",
      "Không cần pre-read"
    ], correct: 0, exp: [
      "A đúng: Pre-read tốt giúp: (1) Khách 'warm up' với chủ đề, không phải học từ đầu trong buổi. (2) Khách chuẩn bị câu hỏi trước → buổi workshop chất lượng hơn. (3) Khách có thể đọc trước phần đơn giản → tiết kiệm thời gian trong buổi cho phần quan trọng. Nội dung pre-read tối ưu: functional overview (KHÔNG marketing), list scope/agenda chi tiết, case study tương tự ngành nếu có."
    ]},
  { id: 166, section: "T. Kỹ năng Workshop ERP Consultant", q: "Action items chuẩn từ workshop phải có:",
    options: [
      "Owner (tên người chịu trách nhiệm) + Deadline (ngày cụ thể) + Specific output mong đợi (sản phẩm cuối)",
      "Chỉ tên việc cần làm",
      "Chỉ deadline",
      "1 owner duy nhất cho toàn bộ"
    ], correct: 0, exp: [
      "A đúng: Action item chuẩn SMART: Specific (rõ ràng output), Measurable (đo được), Assigned (1 owner duy nhất), Realistic, Time-bound (deadline). Ví dụ tốt: 'QC Inspector chuẩn bị AQL table cho 5 nhóm hàng — Output: file Excel template — Deadline: 24/05'. Ví dụ kém: 'Review AQL — sometime next week'. 'Owner = team' là lỗi phổ biến → không ai chịu trách nhiệm cuối cùng."
    ]},
  { id: 167, section: "T. Kỹ năng Workshop ERP Consultant", q: "Gap từ workshop fit-gap thường được phân loại thành các nhóm chính:",
    options: [
      "Chỉ 1 nhóm 'Gap'",
      "4 nhóm: In-scope (config được), Customization (cần dev), Process change (khách phải đổi cách làm), Out-of-scope (Change Request giai đoạn sau)",
      "2 nhóm: Pass / Fail",
      "Không phân loại — chỉ list ra"
    ], correct: 1, exp: [
      "B đúng: Phân loại 4 nhóm giúp ra quyết định và estimate đúng. (1) In-scope/Config: settings trong module, không tốn dev → consultant xử lý. (2) Customization: cần coding/extension → cost + timeline tăng. (3) Process change: module không đáp ứng nhưng khách có thể đổi quy trình → no cost nhưng cần change management. (4) Out-of-scope/CR: defer sang giai đoạn 2/3 → formal CR document. Mỗi nhóm có decision path riêng."
    ]},
  { id: 168, section: "T. Kỹ năng Workshop ERP Consultant", q: "Trong workshop QC Add-on cho BC, decision maker chính KHÔNG phải là:",
    options: [
      "QA Manager",
      "QC Inspector (là key user, không có authority quyết định cuối cùng về workflow)",
      "Project Manager khách (sponsor)",
      "CEO/Giám đốc (nếu có tham dự)"
    ], correct: 1, exp: [
      "B đúng: QC Inspector là key user — người làm việc hàng ngày với hệ thống, có ý kiến quan trọng về usability. Nhưng decision maker (người sign-off, quyết định cuối cùng) là QA Manager (chịu trách nhiệm process) hoặc Project Manager khách (sponsor dự án). Consultant phải xác định đúng decision maker trước workshop, không thì decisions chốt xong vẫn bị overturn sau."
    ]},
  { id: 169, section: "T. Kỹ năng Workshop ERP Consultant", q: "Dấu hiệu rõ nhất workshop bị 'deadlock' (không chốt được quyết định):",
    options: [
      "Người tham dự thiếu authority để decide",
      "Đến cuối buổi mọi thứ vẫn 'để xem lại'",
      "Không có decision sign-off",
      "Tất cả các trên đều là dấu hiệu deadlock"
    ], correct: 3, exp: [
      "D đúng: Deadlock có nhiều dấu hiệu kết hợp: (1) Wrong attendees — chỉ có người không có authority. (2) Mọi thứ 'để xem lại' = không ai dám quyết. (3) Không có sign-off chính thức. Cách phòng ngừa: (a) Confirm decision maker dự ngay từ planning. (b) Sau mỗi sub-topic, hỏi rõ 'Anh/chị quyết X, đúng không?'. (c) Có template Decision Log với cột Approved By. (d) Force timing — không kéo dài thêm hy vọng có quyết định."
    ]},
  { id: 170, section: "T. Kỹ năng Workshop ERP Consultant", q: "Dry-run (chạy thử) trước workshop quan trọng có ý nghĩa:",
    options: [
      "Lãng phí thời gian vì consultant đã biết nội dung",
      "Phát hiện gap kiến thức của team + lỗi demo data + lỗi flow + ngôn ngữ kỹ thuật chưa chuyển sang business — giảm rủi ro thật",
      "Chỉ cần cho fresher consultant",
      "Chỉ workshop lớn (>10 người) mới cần"
    ], correct: 1, exp: [
      "B đúng: Dry-run là đặc trưng L4 ở Preparation. Lợi ích: (1) Demo environment có thể fail (data missing, config sai) — phát hiện trước. (2) Flow logic chưa mượt — sửa thứ tự. (3) Câu hỏi khó có thể xuất hiện — luyện trả lời. (4) Ngôn ngữ kỹ thuật còn sót — chuyển business. (5) Team align quan điểm trước khi gặp khách. Best practice: 30-60 phút dry-run cho workshop quan trọng (>2h hoặc decision-heavy)."
    ]},
  { id: 171, section: "T. Kỹ năng Workshop ERP Consultant", q: "Storytelling trong demo (kể câu chuyện end-to-end từ pain point khách) là đặc trưng của cấp nào?",
    options: [
      "L1 - Không đạt",
      "L2 - Cần cải thiện",
      "L3 - Đạt",
      "L4 - Xuất sắc"
    ], correct: 3, exp: [
      "D đúng: L4 ở Demo có đặc trưng storytelling: bắt đầu bằng pain point của khách ('Hiện tại khi recall, mất 8 giờ truy ngược'), demo cho thấy giải pháp ('với QC Add-on, Item Tracing trace ngược trong 5 phút'), kết thúc bằng business value ('giảm 95% time, đáp ứng FSMA 4-hour rule'). L3: demo realistic nhưng không nhất thiết storytelling. L2: generic. L1: lỗi technical."
    ]},
  { id: 172, section: "T. Kỹ năng Workshop ERP Consultant", q: "Đặc thù workshop module QC so với workshop module Sales/Inventory:",
    options: [
      "Giống nhau hoàn toàn",
      "QA Manager thường có chuyên môn ngành sâu (HACCP, ISO 22000, GMP, GFSI) → consultant phải hiểu nghiệp vụ ngang/hơn họ, không thì mất uy tín ngay 30 phút đầu",
      "QC dễ hơn Sales",
      "Sales khó hơn QC về kỹ thuật"
    ], correct: 1, exp: [
      "B đúng: Đặc thù QC: (1) QA Manager thường đã làm 10+ năm trong ngành, có cert chuyên môn (HACCP Lead Auditor, ISO 22000 LA). (2) Vốn nghiệp vụ của họ rất sâu — consultant 'mới' về module sẽ bị thử thách. (3) QC là area sensitive compliance — không thể bypass quy trình. (4) Add-on khác native — phải nói rõ. So với Sales/Inventory (manager có thể là sales background không có cert chuyên môn), QC cần consultant chuẩn bị kỹ hơn về nghiệp vụ thuần (HACCP, GMP, ISO 22000, CAPA, FSMA)."
    ]},
  { id: 173, section: "T. Kỹ năng Workshop ERP Consultant", q: "Sau workshop QC ở cấp L3, deliverable BẮT BUỘC phải có gồm:",
    options: [
      "Chỉ MoM",
      "To-Be Process Flow + Gap List phân loại + Decision Log có sign-off + Action Items với owner/deadline + MoM trong 24-48h",
      "Chỉ Action Items list",
      "Demo video"
    ], correct: 1, exp: [
      "B đúng: L3 Outcomes + Documentation gồm 5 artifact: (1) To-Be Process Flow (7 sub-process QC: Inspection Plan, Sampling, Test Result, CoA, Quarantine, Release, NCR/CAPA). (2) Gap List phân loại 4 nhóm. (3) Decision Log với cột 'Approved By' điền QA Manager. (4) Action Items SMART. (5) MoM tổng hợp 4 artifact trên trong 24-48h. Thiếu bất kỳ artifact nào → workshop chỉ L2."
    ]},
  { id: 174, section: "T. Kỹ năng Workshop ERP Consultant", q: "Sai lầm phổ biến nhất của FRESHER consultant khi dẫn dắt workshop:",
    options: [
      "Độc thoại do thiếu tự tin, dùng nhiều thuật ngữ kỹ thuật, không kiểm soát người nói nhiều, hứa 'có thể làm được' khi chưa chắc",
      "Quá nhiều kinh nghiệm",
      "Quá hiểu khách hàng",
      "Không có vấn đề gì"
    ], correct: 0, exp: [
      "A đúng: 4 sai lầm phổ biến của fresher: (1) Độc thoại — nói liên tục che giấu lo lắng. Khắc phục: chuẩn bị 5-7 câu hỏi mở trước. (2) Dùng thuật ngữ kỹ thuật — 'Item Tracking Code' thay vì 'theo dõi lô'. Khắc phục: dry-run trước gương. (3) Không kiểm soát người nói nhiều. Khắc phục: chủ động hỏi tên ('Anh/chị X thấy sao?'). (4) Hứa khi chưa chắc → commitment khó rút. Khắc phục: dùng 'Tôi sẽ verify và confirm trong 24h' + parking lot."
    ]},
  { id: 175, section: "T. Kỹ năng Workshop ERP Consultant", q: "Trong workshop, khi khách hỏi về tính năng module mà consultant CHƯA chắc chắn, cách xử lý chuyên nghiệp nhất:",
    options: [
      "Đoán bừa cho đỡ ngại",
      "Trả lời 'Tôi sẽ verify và confirm chính xác trong vòng 24h', ghi vào parking lot, follow up bằng MoM",
      "Bảo khách 'không có' để khỏi commit",
      "Bảo khách 'có' rồi sau xử lý sau"
    ], correct: 1, exp: [
      "B đúng: Sai lầm chết người: hứa khi chưa chắc → commitment khó rút (option D), hoặc bảo không có khi thực ra có (option C — mất cơ hội). Cách xử lý L3: (1) Thừa nhận thẳng thắn 'Tôi cần verify để confirm chính xác'. (2) Đặt deadline rõ '24h'. (3) Ghi vào Parking Lot/Open Issues. (4) Follow up bằng MoM. Khách sẽ tin consultant trung thực hơn consultant 'biết tuốt' nhưng sai. L4: kèm theo lý do tại sao cần verify (vd: 'feature này phụ thuộc version BC, để tôi check chính xác')."
    ]},
  { id: 176, section: "T. Kỹ năng Workshop ERP Consultant", q: "Workshop QC kết thúc, khách yêu cầu một feature ngoài scope module hiện tại. Phản ứng L3 chuẩn:",
    options: [
      "Hứa làm để giữ khách hài lòng",
      "Từ chối thẳng ngay tại buổi",
      "Ghi nhận, phân loại đây là Customization hay Change Request giai đoạn sau, đề xuất alternative (workaround/process change), follow up bằng formal Change Request document",
      "Bỏ qua, không phản hồi"
    ], correct: 2, exp: [
      "C đúng: Phản ứng L3 với out-of-scope request: (1) Acknowledge — không từ chối thô lỗ, không hứa bừa. (2) Classify — Customization (cần dev, cost + timeline tăng), Process change (khách đổi cách làm), hay Out-of-scope (CR giai đoạn sau). (3) Propose alternative — workaround/process tweak nếu có. (4) Formal process — Change Request document để khách review business case + cost + timeline. (5) Update Decision Log + MoM. L4: ngoài ra đem benchmark từ dự án khác để khách tự thấy ROI của CR có đáng không."
    ]},

  // ========== U. Dạng câu hỏi nâng cao (multi/sequence/matching) ==========
  { id: 192, type: "multi", section: "U. Nâng cao — Dạng câu hỏi mới",
    q: "Setup Item Tracking Code cho mặt hàng thực phẩm cận date, các option nào BẮT BUỘC bật? (Chọn nhiều đáp án)",
    options: [
      "Lot Specific Tracking",
      "SN Specific Tracking",
      "Strict Expiration Posting",
      "Man. Expir. Date Entry Reqd.",
      "Lot Warehouse Tracking"
    ],
    correct: [0, 2, 3, 4],
    exp: [
      "Bật Lot Specific Tracking để mọi giao dịch xuất phải nhập đúng Lot.",
      "Strict Expiration Posting chặn xuất lô hết hạn — bắt buộc cho food/pharma.",
      "Man. Expir. Date Entry Reqd. bắt nhập hạn dùng tại receive.",
      "Lot Warehouse Tracking cần thiết khi dùng Advanced WH để pick theo Lot.",
      "SN Specific Tracking KHÔNG bắt buộc cho thực phẩm cận date (chỉ cần Lot là đủ; SN dành cho serialization như rượu, dược)."
    ]},
  { id: 193, type: "multi", section: "U. Nâng cao — Dạng câu hỏi mới",
    q: "Khi recall 1 lô sữa, các tài liệu BẮT BUỘC chuẩn bị cho cơ quan quản lý gồm gì? (Chọn nhiều đáp án)",
    options: [
      "Số lô, NSX, HSD, nhà sản xuất, nước xuất xứ, C/O",
      "Tổng nhập, tồn, đã bán, đã thu hồi",
      "Danh sách khách hàng + địa chỉ + số lượng",
      "Báo cáo doanh thu cả năm của công ty",
      "Hành động khắc phục và phòng ngừa (CAPA)"
    ],
    correct: [0, 1, 2, 4],
    exp: [
      "Thông tin lô là core của recall report (TT 25/2019/TT-BNNPTNT).",
      "Số lượng theo từng trạng thái — cơ quan cần đánh giá mức độ phơi nhiễm.",
      "Danh sách khách giúp cơ quan trace tiếp ra người tiêu dùng cuối.",
      "Doanh thu cả năm KHÔNG liên quan recall lô cụ thể — không yêu cầu.",
      "CAPA bắt buộc để chứng minh đã xử lý gốc rễ, tránh tái diễn."
    ]},
  { id: 194, type: "sequence", section: "U. Nâng cao — Dạng câu hỏi mới",
    q: "Sắp xếp đúng thứ tự quy trình Order-to-Cash chuẩn trong BC Advanced WH:",
    items: [
      "Tạo Sales Order, reserve Lot",
      "Tạo Warehouse Shipment + Pick",
      "Picker pick theo FEFO + scan",
      "Post Warehouse Shipment",
      "Post Sales Invoice",
      "Customer Payment, đóng AR"
    ],
    exp: [
      "Bước 1: tạo SO trước để có demand.",
      "Bước 2: WH Shipment + Pick được tạo từ SO.",
      "Bước 3: Picker thực hiện pick vật lý.",
      "Bước 4: Post WH Shipment cập nhật tồn kho và sinh Posted Whse. Shipment.",
      "Bước 5: Post Sales Invoice sinh AR + Inventory G/L Entry.",
      "Bước 6: Cash Receipt Journal đóng AR."
    ]},
  { id: 195, type: "sequence", section: "U. Nâng cao — Dạng câu hỏi mới",
    q: "Đóng kỳ kế toán cuối tháng — sắp xếp đúng thứ tự jobs:",
    items: [
      "Post tất cả Sales/Purchase Invoice của kỳ",
      "Chạy Adjust Cost – Item Entries",
      "Post Inventory Cost to G/L",
      "Chạy Adjust Exchange Rates (nếu có ngoại tệ)",
      "Reconcile AR/AP/Bank",
      "Run Account Schedule (P&L, BS)",
      "Close Income Statement → Retained Earnings"
    ],
    exp: [
      "Tất cả invoice phải post trước — không bỏ sót giao dịch.",
      "Adjust Cost phải chạy trước Post Inventory Cost to G/L để cost đã được điều chỉnh.",
      "Post Inventory Cost to G/L sync giữa Item Ledger và G/L.",
      "Adjust Exchange Rates revalue AR/AP/Bank ngoại tệ.",
      "Reconcile trước khi in báo cáo để chắc số liệu khớp.",
      "In báo cáo P&L/BS cho stakeholder.",
      "Cuối cùng mới đóng kỳ — Close Income Statement."
    ]},
  { id: 196, type: "matching", section: "U. Nâng cao — Dạng câu hỏi mới",
    q: "Ghép nghiệp vụ với cấu hình BC phù hợp:",
    pairs: [
      { left: "Hàng nhập kho cần Quality Hold chờ QC", right: "Bin QA-HOLD với Block Movement = Outbound" },
      { left: "Cùng item nhưng vendor khác nhau ở 2 kho", right: "Tạo SKU riêng cho từng Location" },
      { left: "Cước biển USD 3,500 phân bổ vào giá vốn", right: "Item Charge Assignment by Weight" },
      { left: "Vendor giao 1 lần/tuần (thứ Tư)", right: "Calendar gán vào Vendor + bật Use Vendor Calendar" },
      { left: "Bán chai (đơn vị nhỏ) khi nhập thùng", right: "Base UoM = PCS, thêm Item UoM BOX với Qty per UoM = 12" }
    ],
    exp: [
      "Bin QA-HOLD chặn outbound — chỉ release sau QC pass.",
      "SKU cho phép lead time, reorder point, vendor khác nhau theo location.",
      "Item Charge phân bổ chi phí phụ vào cost qua weight/volume/amount.",
      "Vendor Calendar quy định ngày làm việc của vendor — Planning sẽ tự offset.",
      "Đa UoM: Base luôn là đơn vị nhỏ nhất; Item UoM khác có Qty per UoM."
    ]},
  { id: 197, type: "matching", section: "U. Nâng cao — Dạng câu hỏi mới",
    q: "Ghép thuật ngữ với mô tả đúng:",
    pairs: [
      { left: "FEFO", right: "Xuất lô hạn dùng sớm trước" },
      { left: "FIFO", right: "Xuất lô nhập trước trước (theo ngày nhận)" },
      { left: "Drop Shipment", right: "Vendor giao thẳng đến Customer, không qua kho" },
      { left: "Special Order", right: "Vendor giao về kho mình, hàng reserved cho SO" },
      { left: "Cross-docking", right: "Hàng vừa receive đi thẳng outbound, không lưu kho lâu" }
    ],
    exp: [
      "FEFO ưu tiên Expiration Date — cốt lõi cho thực phẩm.",
      "FIFO theo ngày nhập — costing method cổ điển.",
      "Drop Shipment: tiết kiệm chi phí lưu kho, link SO ↔ PO.",
      "Special Order: hàng về kho mình trước, reserved 100%.",
      "Cross-docking: tăng tốc luân chuyển, giảm thời gian lưu kho."
    ]},

  // ========== V. Copilot trong Business Central ==========
  { id: 198, section: "V. Copilot & AI trong BC",
    q: "Copilot trong Business Central (từ 2024 wave 1 trở đi) hỗ trợ tính năng nào ở khu vực Sales?",
    options: [
      "Suggest Sales Lines từ mô tả văn bản (Marketing text → SO lines)",
      "Tự động duyệt PO không cần workflow",
      "Thay thế hoàn toàn vai trò Sales Person",
      "Tự động đặt giá bán mà không cần Price List"
    ], correct: 0, exp: [
      "A đúng: Copilot sales line suggestions là một trong các tính năng AI native của BC. User mô tả \"sủa cho khách Big M 100 thùng sữa và 50 thùng nước cam\" → Copilot suggest item lines tương ứng dựa trên context khách hàng, sales history.",
      "B sai: Workflow approval vẫn cần thiết — Copilot không bypass governance.",
      "C sai: Copilot là AI assistant, không thay thế con người. Vẫn cần verify trước khi commit.",
      "D sai: Pricing logic vẫn dựa trên Price List entries. Copilot có thể explain pricing nhưng không tự override."
    ]},
  { id: 199, section: "V. Copilot & AI trong BC",
    q: "Bank Account Reconciliation với Copilot trong BC làm gì?",
    options: [
      "Tự động chuyển tiền giữa các tài khoản",
      "Copilot suggest match giữa Bank Statement Lines và Open Bank Account Ledger Entries, giảm thời gian đối soát",
      "Tự động phát hành séc",
      "Đóng kỳ tự động không cần kế toán"
    ], correct: 1, exp: [
      "B đúng: Copilot phân tích pattern (số tiền, ngày, mô tả) để gợi ý matching với open entries. Kế toán vẫn duyệt cuối cùng. Có thể tiết kiệm 60-80% thời gian đối soát.",
      "A sai: Copilot không thực hiện giao dịch — chỉ gợi ý matching.",
      "C sai: Phát hành séc vẫn cần approval workflow.",
      "D sai: Đóng kỳ là quy trình tài chính nghiêm ngặt, không tự động."
    ]},
  { id: 200, section: "V. Copilot & AI trong BC",
    q: "Khách hỏi: \"Tôi muốn dùng Copilot để soạn email marketing cho khách hàng VIP\". Tư vấn chuẩn:",
    options: [
      "BC Copilot không có chức năng này — gợi ý dùng Marketing Text suggestions cho mô tả Item, hoặc tích hợp Dynamics 365 Customer Insights/Marketing",
      "BC Copilot có module Email Marketing đầy đủ",
      "Copilot tự gửi email khuyến mãi",
      "Phải nâng cấp lên BC Premium"
    ], correct: 0, exp: [
      "A đúng: BC Copilot core hỗ trợ Marketing Text cho Item Description, Sales Line Suggestions, Bank Rec assist. Cho marketing thật sự thì dùng D365 Customer Insights – Journeys (formerly Marketing) hoặc tích hợp với Microsoft 365 Copilot.",
      "B sai: BC không có module Email Marketing.",
      "C sai: AI tool không tự gửi email hàng loạt — vi phạm GDPR/compliance.",
      "D sai: Tính năng Copilot có cả Essentials và Premium."
    ]},
  { id: 201, section: "V. Copilot & AI trong BC",
    q: "Để bật Copilot trong BC, yêu cầu prerequisite chính:",
    options: [
      "Không cần gì — bật mặc định cho mọi tenant",
      "BC Online (SaaS) + Region phải có dịch vụ Azure OpenAI khả dụng + Admin enable trong Copilot Activities; BC OnPrem hiện không hỗ trợ",
      "Phải mua license Microsoft 365 Copilot cho từng user",
      "Phải có Microsoft Fabric capacity"
    ], correct: 1, exp: [
      "B đúng: Copilot trong BC chỉ hoạt động ở BC Online, phụ thuộc khả năng cung cấp Azure OpenAI ở region của tenant. Admin bật từ Copilot & AI Capabilities page. BC OnPrem (kể cả BC 2026) không có Copilot.",
      "A sai: Phải Admin opt-in, không default bật.",
      "C sai: BC Copilot dùng AI capacity riêng, không phải M365 Copilot license.",
      "D sai: Không yêu cầu Fabric — đó là yêu cầu cho Analytics Reports."
    ]},

  // ========== W. Microsoft Fabric & Analytics ==========
  { id: 202, section: "W. Microsoft Fabric & Analytics",
    q: "Microsoft Fabric là gì và liên quan thế nào tới BC?",
    options: [
      "Là tên mới của Power BI",
      "Là nền tảng dữ liệu tích hợp end-to-end (OneLake, Data Factory, Synapse, Power BI) — BC từ 2024 wave 2 có Link to Microsoft Fabric để mirror dữ liệu sang OneLake, dùng cho analytics nâng cao và AI",
      "Là module ERP mới thay BC",
      "Là phần mềm thiết kế UI cho BC"
    ], correct: 1, exp: [
      "B đúng: Fabric là một SaaS analytics platform của Microsoft, gộp các capability data engineering, data science, real-time analytics, BI vào 1 workspace với OneLake làm storage. BC tích hợp qua \"Link to Microsoft Fabric\" — auto mirror Bus. Central data sang Fabric Lakehouse để query bằng SQL/Spark/Power BI mà không impact production database.",
      "A sai: Fabric bao gồm Power BI nhưng rộng hơn nhiều.",
      "C sai: Fabric là platform dữ liệu, không phải ERP.",
      "D sai: BC UI vẫn xây bằng AL."
    ]},
  { id: 203, section: "W. Microsoft Fabric & Analytics",
    q: "Lợi ích chính của Link to Microsoft Fabric so với chỉ dùng API/OData truyền thống cho Power BI?",
    options: [
      "Không có khác biệt",
      "Mirror dữ liệu real-time sang Lakehouse, không impact BC performance, dùng SQL endpoint để query, hỗ trợ analytics nặng và cross-app (BC + Sales + ngoài)",
      "Tốc độ chậm hơn nhưng rẻ hơn",
      "Chỉ hỗ trợ Power BI Desktop, không cloud"
    ], correct: 1, exp: [
      "B đúng: API/OData query trực tiếp vào BC database → tốn resource, giới hạn rate. Fabric mirror tự động sync incremental, lưu ở OneLake/Parquet, query qua SQL endpoint không đụng BC. Hỗ trợ cross-app analytics (BC + Dataverse + ngoài).",
      "A/C/D sai."
    ]},
  { id: 204, section: "W. Microsoft Fabric & Analytics",
    q: "Khách hỏi: \"Tôi cần dashboard real-time tồn kho < 30 ngày HSD cho 5 kho, refresh mỗi 15 phút\". Kiến trúc phù hợp 2026?",
    options: [
      "Excel pivot từ Item Card",
      "BC → Link to Microsoft Fabric (Lakehouse) → SQL endpoint / Direct Lake → Power BI Dashboard với refresh schedule 15 phút; pin Dashboard vào Role Center Warehouse Manager",
      "Custom AL extension build dashboard inside BC",
      "Export CSV thủ công mỗi 15 phút"
    ], correct: 1, exp: [
      "B đúng: Pattern chuẩn 2026: Fabric mirror BC → Lakehouse → SQL Endpoint / Direct Lake mode (no refresh latency cho Power BI). Dashboard pin lên BC Role Center via Embed.",
      "A sai: Excel không real-time, không scalable.",
      "C sai: AL extension xây dashboard tốn dev, không bằng Power BI.",
      "D sai: Thủ công không phải solution."
    ]},

  // ========== X. BC 2026 Release Wave Updates ==========
  { id: 205, section: "X. BC 2026 Release Updates",
    q: "Universal Code (từ BC v22+) yêu cầu code customization như thế nào?",
    options: [
      "Không có yêu cầu đặc biệt",
      "AL extension phải tuân thủ rule: không dùng DotNet, không lock object base, không break upgrade path; bắt buộc cho BC Online; OnPrem có thể bypass nhưng không recommend",
      "Phải viết bằng C# thay AL",
      "Phải đóng tiền thêm cho Microsoft"
    ], correct: 1, exp: [
      "B đúng: Universal Code là chiến lược của MS ensure code chạy được trên BC Online (multi-tenant). Rule: không DotNet (vì sandbox), không AssertError trên base object, không break extension model. OnPrem có flag bypass nhưng MS khuyên không.",
      "A sai: Là yêu cầu chính thức từ BC v22.",
      "C sai: AL vẫn là ngôn ngữ chính.",
      "D sai: Không thu phí thêm — chỉ là code policy."
    ]},
  { id: 206, section: "X. BC 2026 Release Updates",
    q: "Sustainability Module trong BC (từ 2024 wave 1) dùng để:",
    options: [
      "Quản lý nhân sự",
      "Track ESG metrics: phát thải CO2 (Scope 1/2/3), water/energy usage, waste — gán emission factor vào Item/Vendor/Activity và post Sustainability Ledger Entries song song với G/L",
      "Backup database tự động",
      "Email marketing"
    ], correct: 1, exp: [
      "B đúng: Sustainability native trong BC từ 2024 wave 1, scale lên dần. Setup: Sustainability Account (như Chart of Account cho CO2), Emission Factor (kg CO2 per unit), gán vào item/vendor. Mỗi giao dịch sinh Sustainability Ledger Entry. Báo cáo: CO2 footprint theo Item/Customer/Vendor/Period. Cần thiết cho EU CSRD compliance, supply chain disclosure.",
      "A/C/D sai."
    ]},
  { id: 207, section: "X. BC 2026 Release Updates",
    q: "Application Areas \"Reports+\" trong BC giúp gì?",
    options: [
      "Là phiên bản miễn phí của BC",
      "Là experience mới với layout đẹp hơn cho list pages, sort/filter UX cải tiến, tăng productivity cho power user — không phải tính năng riêng mà là UI overhaul tại 2024+",
      "Tăng dung lượng database",
      "Bỏ tính năng cũ"
    ], correct: 1, exp: [
      "B đúng: Reports+ và New Lists Experience là các UX improvement, không phải feature flag riêng. Chỉ enable mặc định ở BC Online.",
      "A/C/D sai."
    ]},

  // ========== Y. E-invoice VN 2026 & Localization ==========
  { id: 208, section: "Y. E-invoice VN 2026 & Localization",
    q: "Theo TT 78/2021 và NĐ 70/2025 mới có hiệu lực 2026, hoá đơn điện tử từ máy tính tiền (HĐĐT KTT) áp dụng cho:",
    options: [
      "Mọi doanh nghiệp không phân biệt ngành",
      "Cơ sở kinh doanh dịch vụ trực tiếp đến người tiêu dùng cuối (F&B, siêu thị, bán lẻ, dịch vụ giải trí) — bắt buộc kết nối POS với hệ thống Tổng cục Thuế",
      "Chỉ doanh nghiệp xuất khẩu",
      "Chỉ áp dụng ở Hà Nội và TP HCM"
    ], correct: 1, exp: [
      "B đúng: HĐĐT từ máy tính tiền (KTT) bắt buộc cho ngành dịch vụ B2C theo NĐ 70/2025. POS tích hợp trực tiếp với Tổng cục Thuế qua nhà cung cấp giải pháp. BC tích hợp qua connector của partner được cấp phép (Viettel, Misa, VNPT, FPT, EFY).",
      "A/C/D sai."
    ]},
  { id: 209, section: "Y. E-invoice VN 2026 & Localization",
    q: "BC tích hợp e-invoice VN theo cách phổ biến 2026:",
    options: [
      "BC core có e-invoice native cho VN",
      "ISV connector tích hợp (Viettel SInvoice for BC, MISA meInvoice for BC, VNPT, FPT, EFY) — flow: post Sales Invoice trên BC → trigger gọi API connector → connector ký số + gửi Tổng cục Thuế → trả Mã CQT + IDInvoice → ghi ngược về BC",
      "Phải dùng Excel xuất XML thủ công",
      "Email PDF cho khách là đủ pháp lý"
    ], correct: 1, exp: [
      "B đúng: BC core không có e-invoice VN. Cần partner solution. Architecture: Sales Invoice post → connector subscribe event → tạo XML theo TCV/TCS schema → ký số HSM/USB Token → gửi receiver IRN → Mã CQT trả về ghi vào custom field. Lưu reference để re-print/email.",
      "A/C/D sai."
    ]},
  { id: 210, section: "Y. E-invoice VN 2026 & Localization",
    q: "Việc thay đổi số seri/ký hiệu hoá đơn (NĐ 123/2020) khi chuyển BC environment (UAT → PROD) cần lưu ý:",
    options: [
      "Không cần lưu ý gì",
      "Series HDDT phải khai báo trên hệ thống TCT trước khi phát hành; UAT dùng series test/sandbox, PROD dùng series chính thức đã đăng ký; chuyển môi trường phải reset counter và đảm bảo không duplicate IRN",
      "Mọi series đều dùng được ở mọi môi trường",
      "Series không quan trọng — TCT không kiểm tra"
    ], correct: 1, exp: [
      "B đúng: Mỗi series khai báo riêng trên hệ thống TCT, gắn với tax code công ty. UAT/PROD phải dùng series khác nhau để tránh duplicate IRN. Go-live cutover phải coordinate giữa team triển khai + tax + provider.",
      "A/C/D sai."
    ]},

  // ========== Z. Power Platform & Dataverse Integration ==========
  { id: 211, section: "Z. Power Platform & Integration",
    q: "BC tích hợp với Dataverse (D365 Sales/CRM) để làm gì?",
    options: [
      "Đồng bộ 2 chiều Customer/Item giữa BC và Sales App; Sales rep tạo Quote/Order trên Sales App → tự động đẩy SO sang BC; ERP-side handle inventory/posting",
      "Thay BC bằng Dataverse",
      "Lưu file Excel",
      "Backup BC"
    ], correct: 0, exp: [
      "A đúng: Native BC ↔ Dataverse integration setup qua Connection Setup. Map Customer, Item, Sales Order. Sales App là front-office (Lead → Opportunity → Quote → Order); BC là back-office (SO → Pick → Ship → Invoice → Cash). 1 source of truth: Customer master ở Sales, Item master ở BC.",
      "B/C/D sai."
    ]},
  { id: 212, section: "Z. Power Platform & Integration",
    q: "Power Automate flow tích hợp BC phổ biến nhất:",
    options: [
      "Approval workflow: PO/SO/Item Card > threshold → email/Teams approval; sau approve → update BC qua connector chính thức",
      "Tự động viết AL code",
      "Tự động đóng kỳ kế toán",
      "Backup database"
    ], correct: 0, exp: [
      "A đúng: Power Automate có connector chính thức cho BC (Microsoft Dynamics 365 Business Central). Pattern thường dùng: triggered when record created/modified → conditional → Teams/Outlook approval card → on approved → update BC field qua action. Thay cho native Approval Workflow khi cần UI ngoài BC (mobile).",
      "B/C/D sai."
    ]},
  { id: 213, section: "Z. Power Platform & Integration",
    q: "Power Apps Canvas App tích hợp BC cho usecase gì?",
    options: [
      "Mobile app cho Sales Rep / Delivery Driver / Warehouse Staff: hiển thị SO assigned, check-in/check-out, scan barcode, capture signature, đồng bộ qua BC connector",
      "Thay thế hoàn toàn BC web client",
      "Build Power BI report",
      "Email marketing"
    ], correct: 0, exp: [
      "A đúng: Canvas App là low-code mobile/tablet UI. Pattern phổ biến: connect to BC qua connector, query SO assigned to current sales rep, show map + customer info, capture POD (signature, photo), call action post Sales Invoice. Nhanh hơn build mobile app native bằng Xamarin/React Native.",
      "B/C/D sai."
    ]},

  // ========== AA. AL Extension & Modern Dev ==========
  { id: 214, section: "AA. AL Extension & Modern Dev",
    q: "Modern AL extension development workflow:",
    options: [
      "Viết thẳng trên BC client",
      "VS Code + AL Language Extension + AL-Go for GitHub (DevOps template) → develop local → publish to sandbox → CI/CD pipeline → publish to production via AppSource hoặc PerTenant Extension",
      "Sửa C/AL trên server",
      "Export object thành txt và edit notepad"
    ], correct: 1, exp: [
      "B đúng: Stack hiện đại: VS Code + AL ext + AL-Go template (MS official) → branch-based dev → CI/CD build .app file → publish qua Admin Center hoặc AppSource. C/AL đã deprecated từ BC 17.",
      "A/C/D sai: Đều là cách cũ hoặc không hợp lệ."
    ]},
  { id: 215, section: "AA. AL Extension & Modern Dev",
    q: "Per-Tenant Extension (PTE) khác AppSource App ở:",
    options: [
      "Không khác gì",
      "PTE: deploy riêng cho 1 tenant qua Admin Center, không public, dùng cho customization riêng khách hàng. AppSource App: published lên marketplace, mọi tenant install được, phải qua MS validation (technical + functional).",
      "PTE phải trả thêm tiền",
      "AppSource app chạy chậm hơn"
    ], correct: 1, exp: [
      "B đúng: PTE phù hợp customization khách lẻ (giá rẻ, deploy nhanh, không cần MS review). AppSource phù hợp ISV product muốn sell hàng loạt — MS validation đảm bảo chất lượng + security.",
      "A/C/D sai."
    ]}
];
