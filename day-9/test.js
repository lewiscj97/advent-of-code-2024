const { createFileArray, optimiseFileArray, calculateChecksum, optimiseFileArrayNoFragmentation } = require('./day9');
const expect = require('chai').expect;

describe('Day 9', () => {
  describe('Part 1', () => {
    it('creates an expanded array representation of input', () => {
      const input = '12345';
      const expected = ['0', '.', '.', '1', '1', '1', '.', '.', '.', '.', '2', '2', '2', '2', '2'];

      const response = createFileArray(input);
      expect(response).to.deep.eq(expected);
    });

    it('creates an expanded array representation of test input', () => {
      const input = '2333133121414131402';
      const expected = ['0', '0', '.', '.', '.', '1', '1', '1', '.', '.', '.', '2', '.', '.', '.', '3', '3', '3', '.', '4', '4', '.', '5', '5', '5', '5', '.', '6', '6', '6', '6', '.', '7', '7', '7', '.', '8', '8', '8', '8', '9', '9'];

      const response = createFileArray(input);

      expect(response).to.deep.eq(expected);
    });

    it('calculates example solution', () => {
      const input = '12345';
      const expected = ['0', '2', '2', '1', '1', '1', '2', '2', '2', '.', '.', '.', '.', '.', '.'];

      const response = optimiseFileArray(input);

      expect(response).to.deep.eq(expected);
    });

    it('calculates test solution', () => {
      const input = '2333133121414131402';
      const expected = '0099811188827773336446555566..............';

      const response = optimiseFileArray(input);

      expect(response.join('')).to.deep.eq(expected);
    });

    it('calculates checksum', () => {
      const input = '2333133121414131402';
      const expected = 1928;

      const response = calculateChecksum(input);

      expect(response).to.eq(expected);
    });

    it('should calculate final solution', () => {
      const input = '2289937361462537565743654392191430243285795130435159294739821058371166572674439596984748944650114550102248505688364873372229621371122362606540477174397649912143956032765821236284479161796563703242896715613146225670757710431154401514218972769918955738355993247885853881641978164641953653673668835495411322313741486778343282298738876089766426742824494953715570396539315223643588405940756935794320308889618240773637962696225656991480607857941359647941361225474391964736562926841550728655952932856386598374142671751359412290899788354356219791102389492024564929732032669143862653312931485737164557755893818290839219543923461177327811756229235867751432339548828389256157664161627348703453629615707627382882849552449529305784316758404535105691422878697316562022191577918411422432546669231744899267699111734979896641335866854421506478733348108071964050898615677374471633544196842839885973161696776741115574499153959315286416228774931343908420721246761773496896361292549998721372826658242371868531212040981731253016339149698294501775519794176352868021286874541618161132729449353228384936983779321412763248823316113626875070813928656842499825645438136882367795242152394162167983855861745671295120305780358184734234861389148856118444307847658938976441418894619654681497833261503220885845311854739027754656574561815277356646834354138368445755518364125561524084262264802188396725861850416147479481219348317448914777708636661185508795672190279884882840545855557637996791535092648434431226984780525211849019807545467146238198183843598225439425258565905019993394893642916589276018863482907210556777705746694681181660291159639978686370599475613316543088544011375796297720635246824752203921576194757549702061653679521114967342955561197554125928194289817320757424431394238493912880298991983466759541212349378030428158229655507465621863546780601292871765769770951238725195449036609998941899855930489424649624729695244617963619553053328590833549142443423524264263813528627168845985614752185195956718218097683792375433203980142176275070717611416695636038532171747227283951391266325868965567966993975016391191849548471312231944551826662173439911149618573966869491657392962598492712554558737190436834663238224554995467837467431072727448195691192191398654144892778091367242663078187934378020464558433541744955982333203062905280828710535661366781935458167071435788398210733167403821767776892661117980448414675999723458888783183352837347257063373199933059168987324288963634807112766260919564245139716988817770113277313042762695708476394152349752892168115333641297782537812354166186192092709743673514993467311365747824137422227094231393782640601415635715251193113032724592974469882413569682244396872693682623351233915472501077856081413144209167187335929588551372327122105581712799992360324222957917109647856433908452761881588524921159583736823585666125766174554754517421449363318590918016821050439646261535438568771234464716341333923383569668726315247799168846497489906051177651869552579798329132465014878134939572618595979290681350159436637331821082704555502857693555123263607648976714753271165059927762859918152885676550812319801211882623432256819088559168709622918029937999609260282014716642413670941322317130545892303652458798404597137589237157382642204440982949192625575235785492762853243743248822392542915728368158707228892629626864545355318741501819102233385615422585311036809578775830589187682439899111784626444064656168545284696527795057969037396242808465499372716546528834746459375410883852902237585273445497417862928425762181946451164941684226597748929437659446914473279291111817729930287565673722637035526034949353929346743348141257357435903199651330526660293927498891169972384350344980116315796899983898233220146030393112961542542835743020605333214722494931582568357722652922222092607469677789824770895185968781558348412586319395951034448230337633935640181282295241586763189981982930477534233621136734131667181559209093261659771015419033338996589878157087352014293020141810312138744010645179462650766692596828799361936893647684114074705393729522139099406440811076578289813690297686224825579582581053489864807786781682886414844870479420233982573624299716422255104166965350176122974642765677226095294015869522564956671065555167216118473222507974608264498683457379768586993996914973808167723517487765448389233286458170868095479694252355749051639597185347375349357184211121169020415221887293308016684791428262448438811595142980674689679127445675449144831128797112269187215915673760676094372297898565806541405834171885536561191395658339944969554434117061924739213488238198419986588799366895787436288642748775124938971930692550315458828824186079125488732165856964794333532147863515805555468798581979168388341534547349378569983172437786373211724138259789961175868488972682582082259919182150584675782421532459901690856794378946661577757647252772581614567067497471453720433473709099845247619565435475313612667453585168742193383643497793821065654961871651326234929980335359462799771974803848106327877490975011666441638146967726827492219273509785871571992354751365296882686058746744876999195537774580412958378041344754362458864073208519843919188873958450839999496849957193462365648185395512123393546819686437374755807545522839951525875433621699647028707071212796828791434652654376569878538270859373788547177554231737911732542030209874546319936472602873476335837324714697661190148332135032302530211267285980952443677689499116699925686122632162629353812846774780328050235456393025123842549529302451375278436072471055568365167319382532583590405454401726904545669570387034682441858516949878336928189622218596436323609860995875823891942771985633208012285063614082387941744135412018758369767182455489916771666810749626662213702980437953183055513335104561148384488255316980707355939239192193863580807297774284722935515731692822507413683721506034574988686796176415797594595785824071424574952431959719483125764053653867983665778169828387668439879020416643484592703976616113808423161165739615235545214013436477569380696147229660693188916299935361246177857270726719534083116262613286533325808086624658679492384858128936383994165185373613142464258039855458953267819434468790249293688584963182981596883142618672252452832180694425864260963235494784828091589068482544284295794433671060784650288947614634809787579444931677682864801730307779263883557187239462161522791878745477427388986160524129318973234678163930415056168383429247404847941826608544331071829124618963229412298443618832686192727850398726493979153742635199913282453193839634911077907844496835985199892555523766467870888424495389148125167512544514454478288679138366585836736988877426711990247215366528969381387655446217495815789516558422412222546392124257407116362533504188914584179822516346225069383019772952268241621976991717823348736819634795879539763789579941732429788479735124514928137046139643471340718484456363734441285386416723447720436424359444883191869250285689971928465735951039121929847564852236251492824050349448902857753496177386241794362765374626466611457056729078235949586791208631886372672491151718954994609894635873158835283019481251819782714692346631148378401077249177617716687126447110464496207415413997465585386523555986857436695254719210206870936757566139121460651842675376337660594788681184879145382763168912175352378140685325136185699787569332367039404628184987352567411792704841842087889293581496362049629862438558107131452384368377774578182897785654976881527474686890209544468249762492203186584879202761143240733682482961579784606036836627782534615214411134659925432573645445312682279889322819208369185715384161457358349885208856972991778961174630707634328517701821982452236415674335311610391427304794705960807596308967922539633089275114944242538048832531485744697580641567311837819627625291102663974584775531645285494052195420517153785550332954528795271852599180358940253164139239506389488548251187639033548227229521613682618033545479658994785255824061923667478658361373789614592048949022595783979280853125504336759035852153567545118638506347898964573884581226343714857412221155191577224748377392168576832053989828624025197090532237118964834420309088759186168074261354347686488975863760889848138643692646293644455377259198513793604780479329674783182883959842955670232373819072305089171076691815994138935456989467635849676220459289552092515566826752779826239623769433398769159762877489462069286316191521627633407582973142213523501222334356516762934648125928376340892575701928873736929018963175949787447357259058343897623585104318343320685832894095652417487995318273441431378228785197641552319130619565872734227593578810308691633817688039374153518514196167779636834542979186733769934195704452811047758140154666786343903444256049384276482384457326872117421769554027894057965945735283385458636559743926634358268485121816599793324882766291857690527954188427991132557449982599234718642527847263417488247536541594529850354023543770714759735979262583766443977923592575248371594262646474938766219757683396462237233027786775485845582495629897555014728764788030748718578774545523503522181978385540742814242315958599844325373945614694568242818051791868378276841812135742537872216197702056719979569212707548684067855329129231204943552426454571901289785416921836326086582132477549364887795164951293808869616549274071567914224720291872753020847997943175244654562849226125298380912738251273795738228712467445396785526859982318949318218366952898198526353917991551769766209610744747828089868898812862672734587493532522966294273260733868918945141048163850689983518080817126269726225921788311413550869234422268558691392410971628385010756471457892289414534094727189494140155131555613433516795452818783409741218621223296813549124777982918954858592362668369712544191439212055947926908188852120428987906695331519925112802429718231164313675050653918836593432948415817238143963289685459467744464072729580917317836530362060126483891581631058891411409772153913695553477024725578571468202553486646153634684179113470643618695310698537957746162254857210489290328972304042548021501769115098853934102351425637326876588869554637827174889683871847605526972491833726247219721372905427508513363447157533271140399317598376381297943335764529245119164268555294975155702079662361669585723159292447522950609237495711143432906641406913654331242769856840272210554820901243304678901549166618255025175510446693738130836241269390655124999689427919405031206381397025787644423532526640932395198930344734486556357088275034994293922568566258229191817718505441838486613570475671923725693129354036933015134065183293562893568088196964186292254769606971847363678727773395558843376452829528815346679345419159783195763898254937948952998122702376951959648661962294853399866352198656175086266715524930416417657041132697319520871331469798884283417165369926652137486590613099556331688438225193144440341393132298565330708134442159209338462163201194116462909448996968124246463585531125481696136515708697377813388938254769243231755481588833922220713476683496812576996718526215304611874380996776545559779251268914887870503558976185889892468443337214663594859850133862674528489725675441183027128958666257582259632682977291338484472671273199245050174240894822113547998339197434887185412488735271902578558080353668821071723794122355153635786726678677751562183548204338285671513369927919562151846957605658842710423134188911935196557025793939873993485074687437805150145022587736548869112444257547268198247629684945963131187153464035431756284382318527293150165083897281569917131575199572518424976795413897673355321241345929967444506466979432253291769148354893183744441944362061187896803167883035177195305290989810641955268848713491836871801266716946453125763768222264848171606881936258971139645045913287325844442844854399831574102912195789154430258760467359504437999481624033154166629937772763314399728065734098179157303724132166262488414633187042648191208218853216413859806097362542388987124355692925146639368138232159173365609811639213743382113376367160861441317555617435227193993090603297247831284141184680846860157468612454742188469382895380888485808873409165224510269655922380558678259851757364489651829758967136904620585572213764351672659643588658651968379378941859902775169873631026294912372665721259679485141822242966585193289357896145773368884949414220964091269569507386799220883265926483606014816421784044193547984649382620649619355390156550988884985420391919907287844945538887864862609894448816822193972265845318244881506839844680213324621568979680325925988825746078258385596041279367717539705067299633886541495292734941247841782493692814194354242250338320936147734127436694533091822714243690325018336058877313633259415843386720698086475055646867684315708738788448783372723751496180836160947921188679843591762771707453335054225398741433204918878728934486842437261140188951942763365575583723541262627613229130942354663673484325848623632046282534192489686591131113186352841316446338524367672424656568628990562451546189688299682774879680995995166229604141193527751847109982842585165441931865583832598487296137926440266668286924707837139133788250424754886438325882436135115918234055509082828722415338327094742528921939442889858362617330878768494786506052398289123351253028165550399224816641308453676925253674447171535239486620534428946817313327817137364458636182271866893860393421812888401374764899638890232596709885787396353456662275608070859143461755543681322891864167747059522844856345911495618556795149179318355660827557876318341687241052709414244181881234222055328340278856353663319799472878698353193398619834486037295626632759389056453015247738726165754373571757664960282979227640214582229771371393324859242074749719999947568224331855285873899324346666177646644833935354416493529498276881829939121326425723667951875870706048848553391466885370625930364386991398388719954856323681353868254218552324839568566962563038467126866730444040388230181660671884717073764254398186978256596947409491422829282261456746982583559851679777847085692117708399282079256525325315534187262911526156549878998811686828832641642167808439875928167117285420845391658676203920509376268770827642661533401551336511177930164344756566591270248228758921729916102170266726108534785435281135829694667320521280874161383055766177848369275153303439716157258015158413356911812780131664957073369822355547764584421458185665513812748299291252405855845857326952337753766332539655388368821311552494105136426618441887463728467480163972298525672070712182669986253134822251656159619495209626858930554669583376364186978885522532662267754750949963807659877961968035177123136662646333376452963776317676113339605675173545254756874358666733865418503281592422365928194696311278997341253599783756646865262456192456517913949559498571405383736330527786784949197595414181134586794266469984357672269035744546962590965147626725942756486644594542839777413950243133911024369620318956465147235487681868569112526466489184321286707388724078222890859291181272271937731142726657429053762797546334718175119567904443518293676365303869912469203832683689898097676679212872573290884550489828105947194230429382881315188739276583314878983859475539909086711194242689515941731036451464348169686135719933424779122982896579654716678950333965924453349844359795642696394360771363353469578854561671361075597241835529793087489199781184661916496017361593376747262082943057743699193651509279726927977842617048416830708891802870902825644452107544977147592922938858928721289331807074982161419714174445663735368749804739228999804015827562106592309644269516531033478982651149985493791059482975686842716817845596601826763861654815431822948432498064935485135889503533278347175329688635369339862352408958897419879446121875232187447010579179403963801068766849235788351225604094829512142694239277814856341588929297377160768941606645926479514389599681553151207998924987708053305712152188944877162022721488969733547944267115483182466484788519998325914245529163927424886612715329284896704784834021927122788474943986606444186013805720523060623937459262459130613775138211914340891271797485827874818377278157862243188959534032952522835824986141797735214396846970332149348410537569607711727677932958128455781521487517291968544653899765128579214614559187857387594138902781526274251031829952246059595416925216331585686831166969965198151555785413764923194124893158507992652994462372558431228682446178118223767430746797239767588520954811853640233175145987498073757211908410977182566028365689227418793241139414561041464565902568628272986828447219264894656146113416816017964599279869546984145485176498813518808138137233748659192593537331162145613094251989815084857538203925397510526413192696481840366526172619282315472143347070225732489170205115251678555523755449123946352158176468196928667147339951899815166997977719492147293221717542754715179734449680735422747973643562934935662357551080571215822346985299733728597918623471482530631452908353613478611177567773231034861593779119821930724143891216932080925427218163153892762535804419746099655462172182479942596723875054247348726697694073546434303310179338618295701366214625472843251597266170529636501753268153984669865454491146335235348555842959468885888134153574576662321294879981984298133539345999311759305189935915244256182772734538868337113962856846448326171648122050112648971194977884666445298149268265739972536423868840955267842638237425928683541525802710252283123083989489387373737335819879608567502345857956976815876126295862488454526994263010174598458045825875205760396984242274746973415468599476614068762968843135383953571451746284253827606457205278809272263475421319166967318791433883374623582036175132567868962790932177679123637955749339773298717016701964764380573891841267293840534955404923413252573515915046644213597752942997268322401682248787417839874634136557403555167197722845422077441382667352753957769381617282909587522774497054446411866868392172785545313814292276704316114194861418988228294098938869158013525995505760526919369736802164298225479491856351326988173736922939349683774133979853134753528923585486844320867750548592627961568822889396379364285126308237294598133612438848421571608873821977113724574996948968869014162439503464543060117567292568488979789752993937665290469373262057373438365967768713518539251690146267385092183191483392671284287054583097561174376968656786583731115790585512507753751498776114803794913249409282167058211964435514689288159123644829246078357673419081813626437144879735235095206350326235613815681010484189998622662516892180517479724634203487643558525034632768906338671699484151692484913472805769865369258944786284224572804089674911566811875732213394839958784915869827904215538367296130493152525176951795552442582937671978119088361569599340342154765373406550589959551555243972591462538549172436822983385130765410905186787671833031142485209392388058111843582323594413544885828386538995105898394531611663805629929961661965572760184457865252895488522039971716783386737319894958425594549886826030715347404999457275838934489399176232398759624758359451464946732733137520407476701822208634844818216075634310496276967774796479607311987023692481886914463240866728627134586016601979993684337323111442532397671385231654668273692232131240648237649390284489189514569715155477496786954918422386674399512292245791716882651053294940289366182368692691402565273898666088747764442226842186944087786368306082716756163018746744708688494170393049873172742495926227245912582351662390568080494864772057522184145873785152269532851550538820372061143262934990441516817915859581797581226439165652208857507517798242173960801711655947848349865851765757717158269290711940688335209566879428682229326264563265499088205364936295413577603731515919159961885033525828946199615669963841586441779449476673521062401170926396622585323029231720194746948860187099854281643036223674401739325149982281577948879280429267366040796756289122851148714253997336771517485866492546745019421399932256138927333590759130554292106419382585297715819396574510761894551221299485407028529045846869131823388940513067791375387766813288424198671376529935807963966066237836458';
      const expected = 6519155389266;

      const response = calculateChecksum(input);
      expect(response).to.eq(expected);
    });
  });

  describe('Part 2', () => {
    it('should move files together', () => {
      const input = '2333133121414131402';
      const expected = '00992111777.44.333....5555.6666.....8888..';

      const response = optimiseFileArrayNoFragmentation(input);

      expect(response.join('')).to.eq(expected);
    });
  });
})