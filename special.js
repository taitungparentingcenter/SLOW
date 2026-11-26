/* 特殊兒少專區（獨立頁面 #special）
   網頁打開時會讀 Google 試算表的「特殊兒少專區」工作表；讀不到時，使用下面內建的資料。
   欄位：名稱、英文、也叫做、分類、是什麼、可能看到、可以這樣做、常見誤解、安置孩子提醒、去哪裡求助、參考資料、顯示
   「可能看到」「可以這樣做」「參考資料」一行一點；參考資料每行寫「標題｜網址」。「顯示」填「否」的列不會出現。 */
(()=>{
const SHEET_ID='1UikOiJIpqRepS1tbh7uL19SW960NtxA_7O0O4nwKDFY';
const EMB=[
{id:"adhd",t:"注意力不足過動症",e:"ADHD",k:"過動症、過動兒、坐不住、分心",g:"專注與行為",
w:"一種大腦發展上的差異（神經發展疾患）。孩子在「專注」「控制衝動」「活動量」這三方面，明顯比同年齡孩子困難。症狀要在家裡、學校等兩個以上的場合都出現，而且影響到生活，醫師才會考慮這個診斷。這不是孩子懶惰或故意，也不是大人教不好。",
s:"忘東忘西、常弄丟東西\n寫作業拖很久、常粗心犯錯\n坐不住，手腳一直動\n插話、搶答，很難排隊等待\n做事前沒想後果，容易受傷或和人起衝突",
d:"指令一次一個、短而具體，說完請他再說一次\n大事拆成小步驟，每完成一步就馬上具體稱讚，例如「你先把玩具收好了，做得很好」\n固定作息，用清單或圖卡提醒\n獎勵好行為優先，少用長時間說教或責罵\n安排可以動的機會，例如跑腿、當小幫手\n和老師保持聯絡，家裡和學校用一樣的方法",
m:"「長大就好了」：一半以上的孩子到成人期仍有症狀，及早協助比較好。\n「是愛吃糖、看太多電視造成的」：ADHD 和大腦發展有關，不是單一飲食或教養方式造成的。",
c:"受過傷害或剛換環境的孩子，也常出現分心、衝動、躁動。這些反應不一定是 ADHD，請把孩子的經歷告訴醫師，一起判斷。",
h:"先和老師交換觀察，再帶孩子看兒童心智科（兒童青少年精神科）。治療常是藥物、行為策略和親職訓練一起搭配；要不要用藥，請和醫師討論後決定。",
r:"ADHD孩童情緒行為及處理（高雄市臨床心理師公會，衛生福利部補助）｜https://health.tainan.gov.tw/warehouse/4D963F2E-1113-4C1A-A686-D8633C7A371F/F_1679032633246e.pdf\n注意力不足過動症兒童之教養原則與照顧策略（高雄市立凱旋醫院，莊珮琪心理師）｜https://ksph.kcg.gov.tw/1/page05-q.pdf\n注意力不足／過動症是什麼？（台灣專注力研究學會，衛生福利部贊助）｜https://health.tainan.gov.tw/warehouse/4D963F2E-1113-4C1A-A686-D8633C7A371F/F_1679032553815e.pdf\n認識注意力不足過動症（彰化縣政府教育處）｜https://newboe.chc.edu.tw/open_files_download/&6&23&726&731"},
{id:"add",t:"注意力不足（ADD）",e:"ADD",k:"注意力不足為主、不專注型、恍神、發呆、慢吞吞",g:"專注與行為",
w:"ADD 是比較舊的說法。現在的診斷手冊（DSM-5）統一叫做 ADHD，再分成三種表現：「注意力不足為主」（就是大家說的 ADD）、「過動／衝動為主」、「混合型」。注意力不足為主的孩子不一定好動，主要困難在專注和組織。",
s:"安靜、不吵鬧，但常發呆、恍神\n跟他說話，好像沒在聽\n作業做一半就忘了、常常寫不完\n東西常找不到，容易粗心\n常被說「慢吞吞」「不認真」",
d:"交代事情前先叫名字，確定他看著你\n重要的事寫下來，貼在看得到的地方\n幫他把常用物品固定放在同一個位置\n作業分段做，中間短暫休息\n多稱讚他努力的過程，不只看結果",
m:"「他很乖、不吵，應該沒問題」：這類孩子不干擾別人，常常比較晚才被發現，被誤會成懶惰或不用心。",
c:"",
h:"和 ADHD 一樣，可以帶孩子看兒童心智科評估；學校的輔導老師也能一起觀察。",
r:"注意力不足／過動症是什麼？（台灣專注力研究學會，衛生福利部贊助）｜https://health.tainan.gov.tw/warehouse/4D963F2E-1113-4C1A-A686-D8633C7A371F/F_1679032553815e.pdf\n認識注意力不足過動症（彰化縣政府教育處）｜https://newboe.chc.edu.tw/open_files_download/&6&23&726&731"},
{id:"odd",t:"對立反抗症",e:"ODD",k:"對立性反抗症、頂嘴、唱反調、愛爭辯、易怒、不服從",g:"專注與行為",
w:"孩子長期常常生氣、容易被惹毛、愛和大人爭辯、故意唱反調，甚至記仇、想報復，程度明顯超過同年齡孩子，影響家庭和學校生活。有些孩子同時有 ADHD、焦慮或憂鬱。成因和孩子的生理、氣質及環境都有關係。",
s:"常發脾氣，很容易被激怒\n愛和大人頂嘴、爭辯\n拒絕聽指令或遵守規定\n故意惹怒別人\n把錯推給別人\n對不滿的事記恨、想報復",
d:"先穩住自己的情緒，指令簡短，不和孩子爭到底\n先處理情緒，再處理行為\n事先講清楚規則和後果，執行時要一致\n規則少而重要，小事可以放手\n每天找時間正向相處，看到好行為馬上具體稱讚",
m:"「就是被寵壞、欠管教」：大人越兇，孩子越反抗，雙方容易陷入互相加碼的循環。穩定、一致、溫和而堅定的方法比較有效。",
c:"曾被傷害或常換照顧者的孩子，對大人不信任，也可能看起來像對立反抗。先建立安全、可預期的關係，比急著要求聽話更重要。",
h:"兒童心智科可以評估是否有對立反抗症或同時有其他狀況。親職訓練（教大人怎麼回應孩子）是常用的協助方法。",
r:"如何幫助有對立性反抗症的子女（香港特區政府教育局）｜https://sense.edb.gov.hk/uploads/content/parent%20resource/chi%26eng/MI_Chinese/T15_ODD_Chinese.pdf\n對立反抗症衛教單張（香港醫院管理局青山醫院精神健康學院）｜https://www3.ha.org.hk/cph/imh/Document/MentalHealthInfo_Pamphlets/2_CommonMentalProblems/1_3_1_TC.pdf\n孩子對立反抗怎麼辦？（許兆瑋醫師）｜https://www.japs.tp.edu.tw/uploads/1779855685649zyXIY5LD.pdf"},
{id:"ebd",t:"情緒行為障礙（情障）",e:"EBD",k:"情緒障礙、情障、焦慮、憂鬱、拒學、特教",g:"情緒與關係",
w:"這是「特殊教育」的類別，不是醫學上的診斷名稱。指孩子長期在情緒或行為上明顯和同年齡孩子不同，嚴重影響學校適應，而且不是智能、感官或健康問題直接造成的。可能包括焦慮、憂鬱、畏懼、ADHD 等精神或情緒方面的狀況。",
s:"長時間情緒低落，或很容易焦慮、害怕\n在學校常有激烈衝突，或不想上學\n一般輔導方法試過，仍很難改善\n除了學校，在家裡或社區也有適應困難",
d:"簡單記錄：什麼時候、發生什麼事、孩子做了什麼、後來怎麼了，給老師和醫師參考\n找出容易引爆的情境，事先預防或預告\n孩子情緒爆發時，先確保大家安全，等平靜下來再談\n和學校討論孩子的個別化教育計畫（IEP）\n照顧者也要照顧好自己，累了要找人幫忙",
m:"「情障就是壞孩子」：情緒行為障礙是需要支持的學習需求，不是品行好壞的標籤。",
c:"安置的孩子常經歷分離和失落，情緒起伏大是可以理解的。若困擾持續很久、影響上學，可以請學校評估特教需求。",
h:"向學校輔導室或特教承辦老師提出，由學校提報縣市鑑定。依規定，情障鑑定需要長時間（約半年）的觀察和輔導紀錄，也會參考就醫紀錄，所以平常的紀錄很有用。",
r:"特殊教育法第3條（全國法規資料庫）｜https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0080027\n身心障礙及資賦優異學生鑑定辦法說明手冊（教育部委託臺灣師範大學特教系）｜https://spe-girc.ntnu.edu.tw/wp-content/uploads/2021/08/jianding201608.pdf\n高危險情緒行為障礙學生輔導紀錄表填寫說明（彰化縣政府教育處）｜https://newboe.chc.edu.tw/open_files_download/&6&23&42&4258&6894"},
{id:"rad",t:"創傷與依附困難",e:"RAD",k:"反應性依附障礙、依附、創傷、安全感、不讓人抱、推開",g:"情緒與關係",
w:"孩子很小的時候如果長期被忽略、缺少穩定的照顧，就沒有機會和固定的大人建立安全的依附關係。嚴重時醫師可能診斷為「反應性依附障礙」：孩子難過時不太找大人安慰，也不太接受安慰。受過傷害的孩子也常出現專注差、衝動、易怒、躁動，看起來很像 ADHD 或對立反抗。",
s:"受傷、難過時不找大人\n被安慰時反而推開、僵住\n情緒起伏大，好像沒理由地生氣或害怕\n不太容易開心起來\n對新的照顧者特別試探、挑戰底線",
d:"穩定、可預期的照顧最重要：固定作息、說到做到\n保持冷靜，不用「不愛你了」或冷落當作處罰\n用好奇代替責備：這個行為背後，孩子需要什麼？\n每天安排一小段專心陪他玩的時間，由孩子主導\n照顧者自己也需要支持和喘息",
m:"「孩子不親人，是個性冷淡」：這通常是過去經驗讓孩子學會「不要靠近大人比較安全」。關係需要時間，一次次穩定的回應會慢慢改變他。",
c:"這是安置孩子很常見的狀況。研究發現，由寄養父母陪孩子進行親子遊戲，可以改善孩子和寄養家庭的依附關係，也能減輕照顧者壓力。",
h:"和社工討論孩子的狀況，請社工協助轉介兒童心智科，或熟悉創傷、依附議題的心理師。",
r:"反應性依附障礙症相關評估與介入策略之文獻探討（華藝線上圖書館）｜https://www.airitilibrary.com/Article/Detail/P20110718004-N202504180022-00004\n親子遊戲治療於家外安置兒童與寄養家庭之依附關係成效（張高賓，教育心理學報）｜https://epbulletin.epc.ntnu.edu.tw/BEP/upload/journal/prog/92104d52_20170913.pdf\n寄養機構兒少研究：受虐經驗對專注與情緒的影響（林口長庚兒少保護中心，健康醫療網報導）｜https://www.moneyweekly.com.tw/_Article?AID=50088"},
{id:"asd",t:"自閉症類群障礙",e:"ASD",k:"自閉症、自閉兒、亞斯伯格、泛自閉症、固執、眼神接觸",g:"發展與學習",
w:"一種大腦發展上的差異，主要特徵是社交溝通的困難，以及侷限、重複的行為或興趣。「類群」（光譜）的意思是：每個孩子的程度和樣子差很多，有的孩子不太說話，有的孩子說話流利但很難理解別人的意思。",
s:"很少眼神接觸，叫名字常沒反應\n喜歡自己玩，對同伴較沒興趣\n語言發展慢，或常重複別人的話\n堅持固定的順序、路線，一被打斷就很崩潰\n對聲音、觸感、味道特別敏感或特別遲鈍",
d:"有變化先預告，用圖片做成行程表\n說話簡短具體，少用反話、玩笑話\n從孩子喜歡的東西開始互動\n留意感官需求，準備一個安靜的角落\n孩子崩潰時先減少刺激，不急著講道理",
m:"「是父母太冷淡造成的」：這是過時的說法。目前知道是包括基因在內的多重因素，影響了神經發展。",
c:"",
h:"0–6歲可經醫師轉介兒童發展聯合評估中心；學齡孩子可看兒童心智科。行為治療是目前最有實證、能改善核心症狀的方法，越早開始越好。",
r:"自閉症類群障礙（台灣醫學，華藝線上圖書館摘要）｜https://www.airitilibrary.com/Article/Detail/18102549-201309-201311110002-201311110002-173-181\n兒童心理健康懶人包：淺談自閉症類群障礙症與注意力不足／過動症（衛生福利部）｜https://www.ycvs.tn.edu.tw/df_ufiles/sub1/懶人包.pdf"},
{id:"dd",t:"發展遲緩",e:"DD",k:"遲緩、早療、早期療育、說話慢、走路慢、聯評",g:"發展與學習",
w:"0–6歲的孩子，在動作、語言、認知、社會情緒或生活自理等方面，有一項或多項明顯比同年齡孩子慢。這是早期療育常用的名稱；有些孩子經過療育會追上，有些之後會再確診其他狀況，所以要持續追蹤。",
s:"比同年齡孩子晚會坐、走、跑，動作比較笨拙\n說話比較少、比較慢\n聽不太懂簡單的指令\n不太會和人玩、互動\n生活自理（吃飯、穿衣）明顯需要較多協助",
d:"依照兒童健康手冊，按時做兒童預防保健和發展篩檢\n每天在生活中陪孩子玩、說話、一起看書\n有疑慮就早點評估，不要只是「再等等看」\n配合治療師交代的居家練習，融入日常生活",
m:"「大隻雞慢啼，長大就會了」：0–6歲是發展最快的時候，早一點發現、早一點協助，效果比較好。",
c:"安置的孩子過去可能錯過篩檢或療育。換新的照顧環境時，可以和社工確認孩子的兒童健康手冊和療育紀錄。",
h:"醫師篩檢後可轉介到兒童發展聯合評估中心，由小兒神經、復健、心智科醫師和各類治療師、心理師、社工一起評估。也可以請社工協助了解臺東的早療服務。",
r:"兒童發展聯合評估中心增設說明（衛生福利部）｜https://www.mohw.gov.tw/cp-2704-25800-1.html\n兒童發展聯合評估中心介紹（中國醫藥大學兒童醫院）｜https://cmuch.cmu.edu.tw/Department/Detail?depid=37"},
{id:"id",t:"智能障礙",e:"ID",k:"智障、智力、學得慢、認知",g:"發展與學習",
w:"孩子的智能發展明顯比同年齡孩子慢，而且在學習和生活適應（例如生活自理、溝通、和人相處）上也有明顯困難。學校的特教鑑定會參考個別智力測驗和生活適應表現。",
s:"學得比較慢，需要很多次重複\n時間、金錢這類抽象概念比較難懂\n生活自理需要較多協助\n比較不容易察覺別人的惡意，安全需要大人多留意",
d:"一次教一個步驟，先示範再讓他做\n多用實物、圖片和生活中的真實情境\n反覆練習生活技能，例如買東西、搭車\n練習說「不要」和找大人求助，保護自己\n看見進步就稱讚，不和其他孩子比較",
m:"「智能障礙就學不會」：只要方法對、給足夠時間和練習，孩子可以學會很多生活和工作的技能。",
c:"",
h:"學齡孩子可由學校提報特教鑑定；也可以向戶籍地公所申請身心障礙證明的鑑定，取得相關福利。",
r:"身心障礙及資賦優異學生鑑定辦法說明手冊（教育部委託臺灣師範大學特教系）｜https://spe-girc.ntnu.edu.tw/wp-content/uploads/2021/08/jianding201608.pdf\n特殊教育法第3條（全國法規資料庫）｜https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0080027"},
{id:"ld",t:"學習障礙",e:"LD",k:"學障、讀寫困難、閱讀障礙、數學障礙、抄寫",g:"發展與學習",
w:"智力在正常範圍，但因為大腦處理訊息的方式不同，在聽、說、讀、寫或算的某些部分特別困難。它不是因為不努力、環境刺激不夠或教學不當造成的。",
s:"認字很慢、讀書常跳行或漏字\n寫字常顛倒、抄寫很吃力\n數學概念或計算特別困難\n用說的很聰明，紙筆表現卻差很多",
d:"不要只用分數評價孩子的努力\n用聽的、看圖、動手操作等不同方式學\n和學校討論考試調整，例如延長時間、報讀題目\n幫孩子找到擅長的事，建立自信",
m:"「他就是懶、不用心」：學習障礙的孩子常常比別人更努力，卻得不到同樣的成果，很容易失去信心。",
c:"",
h:"向學校輔導室或特教承辦老師提出，由學校提報縣市鑑定。",
r:"身心障礙及資賦優異學生鑑定辦法說明手冊（教育部委託臺灣師範大學特教系）｜https://spe-girc.ntnu.edu.tw/wp-content/uploads/2021/08/jianding201608.pdf"},
{id:"pde",t:"出生前藥物暴露（俗稱「毒寶寶」）",e:"NAS",k:"毒寶寶、毒母寶寶、新生兒戒斷症候群、藥物暴露、安非他命、海洛因",g:"出生前就開始",
w:"媽媽懷孕時使用毒品或某些藥物（例如海洛因等鴉片類、安非他命），藥物會經過胎盤進到寶寶身上。出生後臍帶剪斷，藥物來源突然中斷，有些寶寶會出現「新生兒戒斷症候群」。「毒寶寶」是社會上的俗稱，建議說「出生前藥物暴露的孩子」，避免讓孩子被貼上標籤。",
s:"新生兒時期：躁動不安、哭鬧很難安撫\n肌肉緊繃、睡不好\n吸吮或餵食困難、腹瀉\n長大後：部分孩子可能有發展較慢、注意力、情緒調節或學習上的困難，每個孩子差異很大",
d:"寶寶時期：安靜、光線柔和的環境，減少刺激\n用包巾包裹、肌膚接觸、抱著輕輕搖，幫寶寶安定\n少量多餐，耐心餵食\n按時做兒童預防保健和發展篩檢，有落後就及早評估\n長大後：固定作息、預告變化，陪孩子練習調節情緒",
m:"「這孩子以後一定有問題」：大多數有戒斷症狀的寶寶，在醫院治療幾天到幾週就會改善。之後的發展和照顧環境、早期療育都有關係，不是注定的。",
c:"不要在孩子面前或對外人用「毒寶寶」稱呼他。孩子長大後問起身世，可以和社工討論怎麼用適合年齡的方式說明。",
h:"有戒斷症狀的寶寶需要在醫院治療。出院後定期回診、做發展篩檢；有疑慮時，可請醫師或社工協助轉介兒童發展聯合評估中心。",
r:"母親藥物（毒品）濫用對嬰兒健康的影響（林口長庚新生兒科，長庚醫訊）｜https://www.cgmh.org.tw/cgmn/cgmn_file/1905007.pdf\n新生兒戒斷症候群（March of Dimes 美國出生缺陷基金會，繁體中文）｜https://www.marchofdimes.org/zh-TW/find-support/topics/planning-baby/neonatal-abstinence-syndrome-nas\n瞭解懷孕期間使用非法藥物的影響（美國 Emory 大學，中文）｜https://med.emory.edu/departments/psychiatry/msacd/_documents/chinese_drugs_pregnancy.pdf"},
{id:"fasd",t:"胎兒酒精譜系障礙",e:"FASD",k:"胎兒酒精症候群、懷孕喝酒、酒精",g:"出生前就開始",
w:"媽媽懷孕時喝酒，酒精經過胎盤傷害寶寶發育中的大腦，可能造成終身的學習、行為、記憶和社交困難。大部分孩子外表看不出來，所以常被誤會。懷孕期間沒有安全的飲酒量。",
s:"說話流利，但其實聽不太懂\n同樣的錯一犯再犯，好像學不到教訓\n時間、金錢的概念特別難\n衝動、判斷力較弱\n情緒年齡比實際年齡小",
d:"把孩子當成「比實際年齡小一些」來期待\n規則簡單、具體、常常重複，用圖片或示範\n固定作息，減少臨時變動\n由大人在旁邊提醒，不要期待他自己記住\n把「故意不聽」換成「可能是聽不懂、記不住」",
m:"「他明明聽得懂，就是故意的」：FASD 的孩子常被誤以為不守規則，其實是無法理解規則或後果。",
c:"若知道或懷疑孩子的媽媽懷孕時有喝酒，請告訴醫師，這對評估很重要。",
h:"可以請兒童心智科或發展評估團隊評估，並依結果安排療育和學校支持。",
r:"胎兒酒精譜系障礙基本知識（美國紐約州兒童與家庭委員會，中文）｜https://ccf.ny.gov/wp-content/uploads/2024/11/FASD_Chinese.pdf\n胎兒酒精譜系障礙（March of Dimes 美國出生缺陷基金會，繁體中文）｜https://www.marchofdimes.org/zh-TW/find-support/topics/planning-baby/fetal-alcohol-spectrum-disorders"},
{id:"ds",t:"唐氏症",e:"Down syndrome",k:"唐寶寶、21號染色體、三染色體",g:"出生前就開始",
w:"最常見的染色體異常，大多數是多了一條第21號染色體，多半是自然發生的。在臺灣約每1,200位新生兒中有一位。唐寶寶通常發展比較慢，也比較常有心臟、聽力、視力、甲狀腺等健康問題，需要定期追蹤。每個孩子的能力和個性都不一樣。",
s:"肌肉張力較低，身體軟軟的\n坐、走、說話都比同年齡孩子晚\n容易中耳炎，聽力或視力需要注意\n學習需要較多時間和重複",
d:"把握早期療育（物理、職能、語言治療）\n依醫師建議定期檢查心臟、聽力、眼睛、甲狀腺\n說話放慢，搭配手勢或圖片\n多給練習機會，讓孩子自己來，不急著幫他做\n看見孩子的長處，讓他在擅長的事上有成就感",
m:"「唐寶寶什麼都做不來」：早期發現、早期療育和醫療照護，對孩子的發展幫助很大，也有唐氏症者上大學、當演員、模特兒的例子。",
c:"",
h:"由小兒科或遺傳科醫師追蹤，安排早療評估。臺大醫院、中國醫藥大學附設醫院等有唐氏症整合門診；唐氏症基金會也提供家庭支持。",
r:"唐氏症寶寶的照顧（臺大醫院健康電子報）｜https://epaper.ntuh.gov.tw/health/201804/pdf/唐氏症寶寶的照顧.pdf\n唐氏症寶寶的照顧與健康監測指引（臺大醫院基因醫學部）｜https://health.ntuh.gov.tw/health/NTUH_e_Net/NTUH_e_Net_no149/%E5%94%90%E6%B0%8F%E7%97%87%E5%AF%B6%E5%AF%B6%E7%9A%84%E7%85%A7%E9%A1%A7.pdf"}
];
const GROUPS=['全部','專注與行為','情緒與關係','發展與學習','出生前就開始'];
const url=n=>`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&headers=1&sheet=${encodeURIComponent(n)}&t=${Date.now()}`;
function csv(t){const R=[];let row=[],f='',q=false;for(let i=0;i<t.length;i++){const c=t[i];if(q){if(c=='"'){if(t[i+1]=='"'){f+='"';i++}else q=false}else f+=c}else if(c=='"')q=true;else if(c==','){row.push(f);f=''}else if(c=='\n'||c=='\r'){if(c=='\r'&&t[i+1]=='\n')i++;row.push(f);R.push(row);row=[];f=''}else f+=c}if(f!==''||row.length){row.push(f);R.push(row)}return R}
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lines=s=>String(s||'').split(/\n+/).map(x=>x.trim()).filter(Boolean);
let D=EMB;const st={g:'全部',q:''};
const el=document.getElementById('spList'),ch=document.getElementById('spGroup'),cnt=document.getElementById('spCount'),qi=document.getElementById('spQ'),qc=document.getElementById('spQc');
if(!el)return;
function hl(s){s=esc(s);const q=st.q.trim();if(!q)return s;const e=esc(q).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');return s.replace(new RegExp(e,'g'),m=>`<mark>${m}</mark>`)}
function ul(s){const a=lines(s);return a.length?`<ul>${a.map(x=>`<li>${hl(x)}</li>`).join('')}</ul>`:''}
function refs(s){return lines(s).map(x=>{const p=x.split('｜');const t=p[0].trim(),u=(p[1]||'').trim();return /^https?:\/\//.test(u)?`<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a></li>`:`<li>${esc(x)}</li>`}).join('')}
function card(x,open){const fid='sp-'+(x.id||x.t);return `<details class="q spc" id="sp-${esc(x.id||'')}"${open?' open':''}><summary><span class="ic spi" aria-hidden="true">${esc((x.e||x.t).slice(0,4))}</span><span class="qt">${hl(x.t)}${x.e?` <span class="spe">${esc(x.e)}</span>`:''}<small>${esc(x.g)}${x.k?'｜也叫做：'+hl(x.k):''}</small></span><svg class="arr" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></summary><div class="body spb">
<p class="ans">${hl(x.w)}</p>
${x.s?`<div class="sps"><h4>可能會看到</h4>${ul(x.s)}</div>`:''}
${x.d?`<div class="sps spdo"><h4>照顧者可以這樣做</h4>${ul(x.d)}</div>`:''}
${x.m?`<p class="br"><b>常見誤解：</b>${lines(x.m).map(hl).join('<br>')}</p>`:''}
${x.c?`<p class="spcare"><b>安置孩子的提醒：</b>${hl(x.c)}</p>`:''}
${x.h?`<p class="sph"><b>去哪裡求助：</b>${hl(x.h)}</p>`:''}
${x.r?`<details class="src"><summary>參考資料</summary><ul>${refs(x.r)}</ul></details>`:''}
<div class="fbw" data-fbid="${esc(fid)}" data-fbt="${esc('特殊兒少：'+x.t)}"></div></div></details>`}
function match(x){const q=st.q.trim();if(!q)return true;return [x.t,x.e,x.k,x.w,x.s,x.d,x.m,x.c,x.h].join(' ').toLowerCase().includes(q.toLowerCase())}
function render(){ch.innerHTML=GROUPS.map(s=>`<button type="button" class="chip${st.g===s?' on':''}" data-g="${esc(s)}" aria-pressed="${st.g===s}">${esc(s)}</button>`).join('');
 const list=D.filter(x=>(st.g==='全部'||x.g===st.g)&&match(x));cnt.textContent=st.q.trim()?`找到 ${list.length} 項`:`共 ${list.length} 項`;
 el.innerHTML=list.map(x=>card(x,!!st.q.trim()&&list.length<=2)).join('')||'<p class="empty">找不到相關的內容，換個關鍵字試試看，例如「過動」「自閉」「唐氏」。</p>';
 if(qc)qc.hidden=!st.q}
ch.addEventListener('click',e=>{const b=e.target.closest('[data-g]');if(!b)return;st.g=b.dataset.g;render()});
if(qi)qi.addEventListener('input',()=>{st.q=qi.value;render()});
if(qc)qc.addEventListener('click',()=>{qi.value='';st.q='';render();qi.focus()});
document.addEventListener('click',e=>{const a=e.target.closest('a[data-sp]');if(!a)return;e.preventDefault();st.g='全部';st.q='';if(qi)qi.value='';render();const d=document.getElementById('sp-'+a.dataset.sp);if(d){d.open=true;d.scrollIntoView({block:'start',behavior:'smooth'})}});
render();
(async()=>{try{const ctl=new AbortController();setTimeout(()=>ctl.abort(),6000);const r=await fetch(url('特殊兒少專區'),{signal:ctl.signal,cache:'no-store'});if(!r.ok)return;const t=await r.text();if(/^\s*</.test(t))return;const rows=csv(t);const h=(rows.shift()||[]).map(s=>s.trim());
 if(!h.includes('名稱'))return;
 const m=rows.map(r=>Object.fromEntries(h.map((k,i)=>[k,(r[i]||'').trim()]))).filter(o=>o['名稱']&&o['顯示']!=='否').map((o,i)=>{const old=EMB.find(x=>x.t===o['名稱']);return {id:old?old.id:'r'+i,t:o['名稱'],e:o['英文'],k:o['也叫做'],g:o['分類'],w:o['是什麼'],s:o['可能看到'],d:o['可以這樣做'],m:o['常見誤解'],c:o['安置孩子提醒'],h:o['去哪裡求助'],r:o['參考資料']}});
 if(m.length){D=m;render()}}catch(e){}})();
})();
