const expect = require('chai').expect;
const { processInput, calculateDistances } = require('./index');

describe('Day 1', () => {

  const testInput =
    "3   4\n" +
    "4   3\n" +
    "2   5\n" +
    "1   3\n" +
    "3   9\n" +
    "3   3"

  it('should process an input and store it as an object', () => {
    const output = processInput(testInput);

    expect(output.left.length).to.equal(6);
    expect(output.right.length).to.equal(6);
  });

  it('should sort the lists', () => {
    const output = processInput(testInput);

    expect(output.left).to.deep.equal([1, 2, 3, 3, 3, 4]);
    expect(output.right).to.deep.equal([3, 3, 3, 4, 5, 9]);
  });

  it('should calculate the distance', () => {
    const lists = processInput(testInput);
    const expected = 11;

    expect(calculateDistances(lists)).to.equal(expected);
  });

  it('should output the solution', () => {
    const input =
      "60236   87497\n" +
      "27507   18604\n" +
      "69810   73952\n" +
      "60448   56269\n" +
      "92139   61722\n" +
      "26802   60858\n" +
      "77131   85480\n" +
      "11665   30619\n" +
      "15622   29287\n" +
      "50472   55227\n" +
      "31601   15873\n" +
      "49999   20227\n" +
      "87160   41386\n" +
      "58198   25660\n" +
      "73480   83349\n" +
      "34374   31670\n" +
      "56594   81327\n" +
      "86225   89142\n" +
      "41024   80952\n" +
      "53973   84059\n" +
      "21336   23710\n" +
      "68229   32979\n" +
      "31907   49347\n" +
      "96121   92108\n" +
      "91843   55227\n" +
      "64469   46797\n" +
      "24945   51234\n" +
      "38171   20077\n" +
      "85337   65084\n" +
      "53614   29287\n" +
      "33205   92108\n" +
      "92278   65084\n" +
      "12348   54841\n" +
      "74217   64534\n" +
      "31880   67672\n" +
      "40671   61530\n" +
      "97622   51354\n" +
      "83858   54841\n" +
      "54900   29287\n" +
      "75694   32657\n" +
      "12808   92108\n" +
      "22110   45441\n" +
      "24842   80522\n" +
      "76019   85395\n" +
      "29801   55227\n" +
      "62119   24086\n" +
      "84085   42315\n" +
      "97633   50312\n" +
      "55735   84085\n" +
      "37423   24578\n" +
      "21883   38297\n" +
      "24725   85063\n" +
      "94882   96754\n" +
      "78917   23949\n" +
      "38963   37984\n" +
      "58484   54841\n" +
      "25045   60224\n" +
      "44549   68472\n" +
      "96565   28888\n" +
      "96544   13183\n" +
      "56476   62216\n" +
      "93786   36255\n" +
      "47385   31017\n" +
      "53003   74502\n" +
      "34763   90916\n" +
      "30965   15026\n" +
      "33970   18604\n" +
      "59311   87287\n" +
      "46656   23655\n" +
      "90690   94389\n" +
      "90916   85428\n" +
      "39888   99400\n" +
      "80325   15572\n" +
      "66759   90916\n" +
      "69011   61530\n" +
      "42661   76190\n" +
      "62994   36115\n" +
      "83076   85495\n" +
      "22038   90916\n" +
      "28058   16827\n" +
      "43772   87497\n" +
      "97469   84059\n" +
      "73587   46618\n" +
      "17373   28474\n" +
      "67819   22858\n" +
      "83212   71090\n" +
      "31111   21853\n" +
      "50655   80499\n" +
      "46790   54841\n" +
      "65893   85337\n" +
      "32657   30300\n" +
      "39263   63606\n" +
      "34654   37756\n" +
      "70982   97980\n" +
      "47054   90916\n" +
      "36308   85428\n" +
      "78055   25699\n" +
      "82921   57074\n" +
      "22806   38778\n" +
      "52324   18604\n" +
      "69119   87497\n" +
      "93821   85337\n" +
      "72610   45392\n" +
      "81035   32462\n" +
      "83645   61530\n" +
      "40083   12785\n" +
      "65512   39639\n" +
      "94178   32657\n" +
      "94616   23243\n" +
      "48110   85170\n" +
      "48871   31323\n" +
      "19056   85337\n" +
      "41244   32657\n" +
      "10055   57273\n" +
      "11393   29287\n" +
      "41282   89929\n" +
      "44215   69138\n" +
      "65273   49214\n" +
      "51527   88002\n" +
      "37756   20404\n" +
      "62112   28474\n" +
      "20891   84085\n" +
      "77160   89946\n" +
      "66205   46881\n" +
      "48418   77312\n" +
      "75464   55227\n" +
      "61530   59969\n" +
      "21267   29270\n" +
      "37370   54841\n" +
      "88644   90916\n" +
      "78623   63606\n" +
      "21706   46881\n" +
      "44144   28524\n" +
      "92794   62981\n" +
      "73104   55227\n" +
      "41050   17824\n" +
      "18975   74502\n" +
      "24323   55737\n" +
      "65877   13086\n" +
      "26231   46430\n" +
      "50875   22462\n" +
      "28235   13325\n" +
      "19413   52280\n" +
      "12895   20227\n" +
      "99917   14861\n" +
      "12606   85116\n" +
      "17157   55498\n" +
      "65577   49347\n" +
      "83633   75113\n" +
      "16385   85022\n" +
      "13523   14114\n" +
      "56269   63606\n" +
      "21797   31017\n" +
      "15276   42139\n" +
      "60621   92519\n" +
      "47097   50088\n" +
      "93922   70323\n" +
      "47866   84085\n" +
      "12491   65028\n" +
      "97496   99400\n" +
      "50622   92695\n" +
      "80936   57661\n" +
      "90350   61530\n" +
      "24297   31017\n" +
      "17654   79327\n" +
      "25402   46881\n" +
      "22077   18604\n" +
      "40903   54120\n" +
      "50315   84991\n" +
      "84107   90341\n" +
      "82297   69059\n" +
      "31420   92108\n" +
      "32948   13185\n" +
      "38573   48477\n" +
      "41469   92536\n" +
      "47687   67672\n" +
      "75858   43056\n" +
      "87492   55227\n" +
      "43146   63726\n" +
      "50630   30114\n" +
      "69070   31922\n" +
      "99400   80499\n" +
      "95819   84085\n" +
      "28688   85428\n" +
      "34161   47281\n" +
      "25281   43111\n" +
      "72346   85337\n" +
      "43428   65084\n" +
      "35269   52541\n" +
      "69977   15275\n" +
      "21657   15308\n" +
      "93149   28977\n" +
      "26372   22264\n" +
      "53919   26147\n" +
      "83653   17007\n" +
      "52437   55338\n" +
      "58577   81095\n" +
      "10669   78580\n" +
      "48716   61530\n" +
      "44555   54841\n" +
      "26276   85428\n" +
      "44928   27597\n" +
      "78761   83134\n" +
      "29197   63606\n" +
      "10381   16778\n" +
      "19398   74893\n" +
      "88620   52809\n" +
      "30433   65084\n" +
      "80557   31629\n" +
      "31479   12679\n" +
      "50801   83534\n" +
      "65484   55227\n" +
      "12778   94213\n" +
      "22907   98741\n" +
      "27492   21018\n" +
      "24335   55895\n" +
      "92027   63071\n" +
      "42748   38490\n" +
      "39736   28474\n" +
      "29251   15930\n" +
      "18312   38297\n" +
      "92108   36420\n" +
      "56841   23667\n" +
      "24134   80499\n" +
      "30573   37975\n" +
      "35062   82320\n" +
      "10140   77160\n" +
      "20132   75245\n" +
      "34245   41016\n" +
      "39368   39229\n" +
      "83603   98755\n" +
      "98047   98888\n" +
      "96938   15597\n" +
      "51784   58196\n" +
      "70081   78652\n" +
      "46881   49347\n" +
      "24066   76805\n" +
      "23023   84959\n" +
      "89425   67672\n" +
      "93763   73425\n" +
      "86478   87497\n" +
      "12302   87140\n" +
      "73930   39280\n" +
      "25718   63606\n" +
      "90416   18604\n" +
      "35786   14027\n" +
      "93942   65398\n" +
      "65754   86637\n" +
      "11744   49347\n" +
      "49585   93684\n" +
      "15897   67695\n" +
      "10695   39893\n" +
      "96173   28474\n" +
      "76947   29182\n" +
      "48784   84085\n" +
      "91121   20227\n" +
      "49311   23670\n" +
      "85372   15774\n" +
      "16681   89841\n" +
      "45260   90848\n" +
      "35560   95034\n" +
      "83401   21784\n" +
      "12219   96734\n" +
      "71067   55227\n" +
      "99026   80166\n" +
      "69983   15346\n" +
      "83934   80058\n" +
      "64979   12968\n" +
      "41092   63606\n" +
      "12308   40087\n" +
      "75169   96117\n" +
      "15784   77160\n" +
      "38824   41537\n" +
      "40870   85116\n" +
      "19711   99400\n" +
      "70507   14564\n" +
      "94676   54768\n" +
      "14777   80499\n" +
      "40418   75245\n" +
      "64438   83035\n" +
      "57843   35948\n" +
      "59713   80499\n" +
      "34140   70427\n" +
      "11775   32188\n" +
      "34406   40942\n" +
      "56896   74472\n" +
      "86220   28474\n" +
      "70476   71102\n" +
      "96477   98192\n" +
      "18922   51619\n" +
      "59519   71811\n" +
      "10789   47031\n" +
      "86572   92108\n" +
      "61550   75245\n" +
      "84059   23351\n" +
      "96041   23599\n" +
      "10215   18375\n" +
      "45040   17072\n" +
      "58869   16995\n" +
      "88390   93777\n" +
      "91416   55497\n" +
      "17847   55636\n" +
      "76901   85287\n" +
      "18097   38297\n" +
      "96115   87497\n" +
      "18055   61095\n" +
      "45533   87184\n" +
      "63882   29287\n" +
      "73200   53074\n" +
      "22109   89509\n" +
      "83241   80499\n" +
      "93489   64603\n" +
      "56777   31017\n" +
      "99138   62596\n" +
      "58373   30342\n" +
      "99202   25402\n" +
      "58133   60035\n" +
      "80500   90916\n" +
      "73469   17731\n" +
      "35801   99400\n" +
      "91384   52122\n" +
      "27573   24457\n" +
      "28721   28503\n" +
      "88538   26807\n" +
      "92971   14100\n" +
      "48598   63606\n" +
      "61286   29287\n" +
      "91745   56269\n" +
      "34448   25850\n" +
      "79106   49347\n" +
      "34898   19376\n" +
      "40111   67477\n" +
      "93372   30265\n" +
      "63851   32657\n" +
      "59546   48474\n" +
      "42335   84059\n" +
      "36277   54841\n" +
      "87127   99224\n" +
      "81168   23408\n" +
      "92976   92195\n" +
      "98032   25026\n" +
      "48696   29287\n" +
      "20385   32499\n" +
      "74076   65084\n" +
      "92372   29299\n" +
      "17059   74502\n" +
      "42532   30262\n" +
      "38449   11418\n" +
      "43881   32657\n" +
      "54403   63392\n" +
      "94721   84085\n" +
      "95152   51611\n" +
      "51782   62179\n" +
      "53025   55227\n" +
      "36643   49347\n" +
      "87706   65084\n" +
      "12976   55227\n" +
      "44534   26147\n" +
      "30917   87497\n" +
      "74502   61774\n" +
      "67952   95476\n" +
      "11806   29287\n" +
      "90030   79066\n" +
      "68902   98976\n" +
      "68040   90916\n" +
      "98301   41380\n" +
      "36051   49347\n" +
      "16026   69194\n" +
      "67357   46509\n" +
      "67306   73846\n" +
      "82448   20227\n" +
      "23641   85428\n" +
      "84634   31017\n" +
      "69185   43828\n" +
      "46097   72892\n" +
      "17794   26147\n" +
      "43848   49347\n" +
      "96312   56999\n" +
      "56019   92546\n" +
      "56919   86411\n" +
      "40237   51598\n" +
      "55120   87497\n" +
      "92755   87497\n" +
      "34906   32657\n" +
      "54889   75245\n" +
      "41064   62527\n" +
      "65738   99349\n" +
      "64355   75245\n" +
      "52805   80499\n" +
      "85428   46881\n" +
      "37626   83414\n" +
      "53792   34959\n" +
      "54369   72387\n" +
      "38094   68402\n" +
      "99008   33894\n" +
      "24058   29287\n" +
      "18736   51209\n" +
      "25865   80139\n" +
      "63486   65084\n" +
      "62108   92108\n" +
      "65689   14359\n" +
      "42333   10289\n" +
      "69333   38259\n" +
      "18491   62168\n" +
      "47310   78249\n" +
      "54570   84023\n" +
      "20551   78951\n" +
      "59475   12064\n" +
      "50311   56215\n" +
      "65474   70037\n" +
      "85663   67672\n" +
      "69259   33147\n" +
      "83117   61530\n" +
      "36840   85337\n" +
      "34169   47016\n" +
      "88946   97794\n" +
      "18112   58674\n" +
      "46551   38349\n" +
      "82216   72623\n" +
      "28051   67042\n" +
      "92921   53931\n" +
      "49329   21408\n" +
      "72000   82465\n" +
      "16291   64726\n" +
      "89421   28474\n" +
      "79147   20446\n" +
      "10763   18604\n" +
      "44616   79180\n" +
      "42112   59021\n" +
      "16110   11993\n" +
      "95856   75245\n" +
      "68250   47047\n" +
      "73900   18604\n" +
      "83070   70285\n" +
      "45039   59298\n" +
      "34384   91759\n" +
      "69096   40774\n" +
      "17871   54746\n" +
      "12711   13323\n" +
      "61219   85337\n" +
      "62596   53507\n" +
      "65641   61530\n" +
      "44822   29849\n" +
      "27694   41410\n" +
      "18316   40475\n" +
      "88264   27106\n" +
      "24559   73846\n" +
      "51165   95419\n" +
      "41966   80890\n" +
      "31980   27305\n" +
      "18954   73225\n" +
      "48469   99400\n" +
      "21431   77160\n" +
      "61521   58997\n" +
      "91768   50704\n" +
      "64691   54596\n" +
      "26116   67672\n" +
      "38956   90916\n" +
      "26542   38297\n" +
      "55188   23379\n" +
      "59315   70559\n" +
      "29191   25198\n" +
      "66379   38297\n" +
      "25324   66593\n" +
      "40836   92108\n" +
      "61397   12807\n" +
      "33898   61530\n" +
      "45415   28400\n" +
      "33802   90916\n" +
      "62390   21461\n" +
      "59153   29287\n" +
      "36034   30152\n" +
      "98520   22569\n" +
      "22195   88748\n" +
      "33327   60661\n" +
      "45322   26147\n" +
      "96822   16363\n" +
      "16125   34893\n" +
      "87248   22080\n" +
      "85116   74502\n" +
      "46038   18604\n" +
      "37571   85337\n" +
      "58238   69159\n" +
      "41500   16532\n" +
      "83727   38297\n" +
      "68575   54551\n" +
      "31681   49347\n" +
      "38631   22657\n" +
      "23561   58198\n" +
      "76931   45582\n" +
      "28565   80499\n" +
      "75538   41731\n" +
      "53316   85116\n" +
      "63565   16082\n" +
      "43704   94497\n" +
      "70404   44010\n" +
      "30526   10924\n" +
      "68736   25749\n" +
      "66570   15277\n" +
      "78906   63311\n" +
      "97695   18604\n" +
      "83519   65084\n" +
      "41333   17910\n" +
      "65117   58198\n" +
      "83816   13162\n" +
      "82827   99400\n" +
      "38854   61353\n" +
      "10453   97813\n" +
      "39642   62478\n" +
      "12432   75245\n" +
      "73646   64603\n" +
      "69031   52168\n" +
      "87888   61523\n" +
      "66253   60542\n" +
      "50475   48019\n" +
      "48201   29287\n" +
      "76179   83869\n" +
      "69129   16884\n" +
      "25515   12228\n" +
      "19375   84085\n" +
      "66375   55218\n" +
      "27327   63518\n" +
      "58580   23667\n" +
      "21807   37166\n" +
      "40268   24090\n" +
      "97745   23667\n" +
      "32093   80017\n" +
      "32735   15898\n" +
      "38297   72737\n" +
      "66743   99400\n" +
      "83349   91011\n" +
      "58316   49347\n" +
      "72291   61430\n" +
      "86837   75245\n" +
      "73810   18232\n" +
      "84307   18570\n" +
      "61747   85337\n" +
      "31550   89967\n" +
      "47416   65879\n" +
      "25093   48062\n" +
      "65307   65580\n" +
      "84094   89485\n" +
      "52515   23667\n" +
      "49044   38003\n" +
      "78523   89584\n" +
      "86184   32463\n" +
      "35308   81918\n" +
      "27716   92108\n" +
      "97833   99584\n" +
      "55235   33021\n" +
      "92138   55227\n" +
      "18414   92108\n" +
      "66833   28474\n" +
      "29162   83349\n" +
      "46906   95696\n" +
      "91988   73664\n" +
      "56574   18604\n" +
      "84481   40052\n" +
      "92467   20808\n" +
      "68595   18734\n" +
      "54857   63112\n" +
      "46447   89520\n" +
      "38937   31017\n" +
      "91755   49347\n" +
      "69591   73958\n" +
      "71215   56038\n" +
      "37212   54841\n" +
      "68160   93928\n" +
      "50127   58436\n" +
      "58834   79630\n" +
      "64554   56269\n" +
      "53994   58198\n" +
      "71503   61530\n" +
      "41132   89321\n" +
      "73137   39227\n" +
      "90473   36281\n" +
      "34280   10905\n" +
      "32327   73846\n" +
      "56962   85428\n" +
      "93849   17923\n" +
      "91613   43897\n" +
      "41600   82433\n" +
      "68548   40140\n" +
      "57540   69227\n" +
      "27024   72558\n" +
      "84038   29287\n" +
      "68797   90123\n" +
      "34585   80998\n" +
      "17224   44725\n" +
      "67565   65979\n" +
      "53439   66006\n" +
      "10746   34397\n" +
      "60407   96273\n" +
      "41402   44313\n" +
      "74625   94199\n" +
      "48717   97274\n" +
      "43053   61530\n" +
      "60079   92108\n" +
      "51815   18591\n" +
      "78297   94936\n" +
      "75363   62686\n" +
      "34845   85337\n" +
      "52300   45188\n" +
      "18321   54841\n" +
      "30997   13211\n" +
      "12201   27495\n" +
      "57013   81991\n" +
      "32067   85116\n" +
      "98986   63998\n" +
      "56366   80499\n" +
      "88571   19705\n" +
      "54841   23231\n" +
      "21485   36499\n" +
      "79031   67538\n" +
      "92188   61530\n" +
      "39376   16112\n" +
      "49347   23042\n" +
      "98452   63606\n" +
      "52132   12521\n" +
      "22842   28546\n" +
      "35826   18604\n" +
      "62218   99676\n" +
      "14172   32657\n" +
      "18364   55674\n" +
      "49002   62596\n" +
      "51392   45821\n" +
      "66873   17929\n" +
      "67156   74502\n" +
      "28175   32657\n" +
      "90671   77571\n" +
      "84511   54841\n" +
      "18862   18604\n" +
      "76865   55383\n" +
      "17699   69478\n" +
      "79215   56269\n" +
      "85442   92108\n" +
      "10959   45021\n" +
      "48776   77160\n" +
      "14892   92936\n" +
      "41140   55337\n" +
      "84764   80499\n" +
      "40023   75245\n" +
      "67389   46881\n" +
      "45778   36995\n" +
      "21318   55227\n" +
      "59744   75245\n" +
      "67409   38297\n" +
      "18164   29287\n" +
      "61584   96614\n" +
      "41358   38413\n" +
      "61352   60463\n" +
      "70015   35917\n" +
      "39628   81795\n" +
      "21915   18604\n" +
      "16171   90414\n" +
      "15423   55227\n" +
      "36716   80499\n" +
      "55056   90916\n" +
      "63466   15943\n" +
      "98203   73846\n" +
      "99741   99459\n" +
      "85505   38297\n" +
      "25032   86060\n" +
      "66980   54841\n" +
      "98311   31229\n" +
      "25350   69484\n" +
      "83835   14362\n" +
      "46839   78034\n" +
      "18604   13604\n" +
      "73846   50472\n" +
      "18269   56269\n" +
      "91727   56269\n" +
      "68873   59307\n" +
      "15175   87497\n" +
      "77802   28474\n" +
      "28913   82745\n" +
      "22215   60110\n" +
      "70059   61531\n" +
      "36612   33386\n" +
      "67672   88985\n" +
      "78181   61530\n" +
      "39317   18558\n" +
      "77810   35422\n" +
      "82429   21444\n" +
      "76561   23667\n" +
      "58649   38653\n" +
      "25363   12807\n" +
      "61473   87684\n" +
      "36559   71640\n" +
      "88918   85428\n" +
      "74396   16237\n" +
      "33853   55227\n" +
      "54850   67672\n" +
      "39779   28474\n" +
      "64336   74608\n" +
      "80980   29287\n" +
      "45483   42757\n" +
      "73198   85576\n" +
      "63606   90916\n" +
      "52630   16429\n" +
      "35416   12807\n" +
      "95544   99400\n" +
      "44801   64603\n" +
      "80281   80499\n" +
      "52182   38598\n" +
      "23258   51480\n" +
      "42093   51758\n" +
      "74897   94719\n" +
      "98978   70168\n" +
      "42208   87497\n" +
      "32037   97893\n" +
      "65966   61530\n" +
      "77038   29502\n" +
      "56448   77741\n" +
      "83791   74727\n" +
      "25720   31017\n" +
      "24543   85306\n" +
      "83743   51386\n" +
      "83607   36001\n" +
      "27371   85337\n" +
      "96010   42013\n" +
      "29241   74502\n" +
      "96301   54841\n" +
      "60646   92108\n" +
      "56101   38297\n" +
      "82779   81249\n" +
      "16670   32639\n" +
      "24164   52565\n" +
      "28474   73988\n" +
      "41717   29287\n" +
      "55403   32986\n" +
      "75739   96626\n" +
      "55398   85116\n" +
      "55227   55331\n" +
      "46733   74502\n" +
      "50659   81687\n" +
      "25155   98435\n" +
      "90938   67672\n" +
      "90142   98291\n" +
      "29740   71006\n" +
      "95852   54841\n" +
      "26912   47695\n" +
      "41728   65084\n" +
      "76264   55227\n" +
      "81182   67672\n" +
      "88932   55227\n" +
      "15524   31186\n" +
      "75333   51809\n" +
      "98264   37756\n" +
      "81912   95741\n" +
      "62285   60469\n" +
      "47664   93362\n" +
      "60019   33153\n" +
      "54501   98948\n" +
      "46192   20511\n" +
      "92628   85116\n" +
      "58318   82669\n" +
      "44457   87772\n" +
      "32136   77838\n" +
      "74012   58198\n" +
      "20227   35179\n" +
      "53716   67847\n" +
      "53411   73846\n" +
      "68876   49541\n" +
      "70125   49347\n" +
      "75562   11521\n" +
      "72306   47501\n" +
      "88484   92108\n" +
      "70619   38297\n" +
      "86166   36298\n" +
      "18487   80499\n" +
      "92524   87204\n" +
      "52742   67742\n" +
      "58671   24114\n" +
      "90475   27557\n" +
      "19915   80499\n" +
      "76602   66482\n" +
      "28497   44495\n" +
      "41756   84884\n" +
      "73642   48266\n" +
      "11516   75245\n" +
      "97800   63544\n" +
      "89184   31017\n" +
      "41929   71798\n" +
      "61689   46881\n" +
      "29287   41446\n" +
      "39444   47202\n" +
      "35248   23667\n" +
      "94851   74119\n" +
      "86784   88863\n" +
      "74864   73704\n" +
      "23002   61530\n" +
      "75245   36530\n" +
      "83133   55227\n" +
      "95285   57184\n" +
      "85832   28474\n" +
      "95588   74502\n" +
      "83915   11024\n" +
      "71644   96251\n" +
      "71313   18604\n" +
      "73235   87497\n" +
      "33469   49347\n" +
      "21867   38297\n" +
      "95267   57786\n" +
      "89935   28171\n" +
      "21251   12807\n" +
      "25478   40283\n" +
      "99474   11515\n" +
      "80499   66656\n" +
      "14837   84184\n" +
      "64729   40572\n" +
      "40809   32336\n" +
      "33236   85592\n" +
      "20441   71171\n" +
      "64603   66164\n" +
      "55291   76339\n" +
      "28881   12197\n" +
      "58350   51927\n" +
      "96845   74322\n" +
      "97597   82513\n" +
      "62008   54841\n" +
      "45790   16819\n" +
      "77813   80499\n" +
      "81381   17092\n" +
      "65519   80499\n" +
      "26031   96119\n" +
      "16212   90916\n" +
      "95140   18604\n" +
      "10312   92108\n" +
      "61438   19227\n" +
      "95084   10260\n" +
      "99043   72732\n" +
      "89491   54841\n" +
      "90269   76128\n" +
      "48016   44722\n" +
      "20288   67010\n" +
      "41063   71020\n" +
      "74315   22618\n" +
      "99142   76172\n" +
      "26666   18604\n" +
      "45041   76748\n" +
      "47713   89106\n" +
      "80657   38823\n" +
      "81404   85337\n" +
      "47976   85029\n" +
      "44477   92418\n" +
      "55367   96148\n" +
      "63834   14134\n" +
      "23382   48292\n" +
      "77597   33494\n" +
      "55880   93836\n" +
      "18367   49347\n" +
      "82262   76051\n" +
      "95008   56543\n" +
      "22783   77168\n" +
      "12807   87497\n" +
      "28138   55227\n" +
      "70523   80353\n" +
      "74070   90870\n" +
      "76864   65482\n" +
      "69003   13575\n" +
      "24843   29287\n" +
      "69768   20648\n" +
      "87497   67672\n" +
      "18271   94218\n" +
      "45836   28474\n" +
      "97769   28474\n" +
      "80076   65084\n" +
      "72050   46881\n" +
      "79328   59489\n" +
      "37514   80499\n" +
      "42555   32578\n" +
      "20199   70816\n" +
      "49460   73487\n" +
      "90204   93607\n" +
      "56298   25196\n" +
      "99974   70377\n" +
      "56276   28721\n" +
      "89189   77206\n" +
      "60768   80376\n" +
      "21319   63606\n" +
      "31997   50398\n" +
      "32416   90916\n" +
      "54694   22346\n" +
      "35088   18897\n" +
      "51752   26147\n" +
      "55308   95249\n" +
      "34420   18604\n" +
      "23667   33821\n" +
      "82510   99101\n" +
      "60857   80499\n" +
      "36607   87497\n" +
      "49184   18604\n" +
      "24850   69833\n" +
      "74238   29287\n" +
      "57022   18604\n" +
      "19800   65084\n" +
      "75401   99400\n" +
      "69619   16727\n" +
      "76302   81630\n" +
      "26599   78516\n" +
      "91798   49272\n" +
      "44256   29287\n" +
      "26147   51140\n" +
      "49429   29968\n" +
      "73408   67672\n" +
      "22299   47662\n" +
      "95945   46881\n" +
      "64434   12499\n" +
      "25710   19594\n" +
      "33442   63606\n" +
      "93780   22452\n" +
      "79459   23892\n" +
      "82288   56995\n" +
      "72573   49347\n" +
      "48719   58670\n" +
      "32164   38484\n" +
      "86403   10414\n" +
      "38984   39863\n" +
      "86164   79095\n" +
      "92712   22911\n" +
      "89181   49347\n" +
      "87082   40962\n" +
      "90401   93895\n" +
      "52697   15438\n" +
      "34642   38297\n" +
      "64004   58198\n" +
      "42756   66637\n" +
      "89884   63606\n" +
      "72848   84059\n" +
      "81971   22307\n" +
      "61080   37101\n" +
      "52293   92108\n" +
      "10451   93989\n" +
      "85724   84085\n" +
      "40006   98335\n" +
      "34725   36933\n" +
      "85585   99400\n" +
      "31017   57385\n" +
      "18673   92108\n" +
      "63900   58933\n" +
      "10042   23667\n" +
      "89735   55825\n" +
      "11855   90031\n" +
      "23358   92108\n" +
      "74765   61530\n" +
      "18606   54841\n" +
      "29355   37589\n" +
      "48513   60953\n" +
      "53374   55970\n" +
      "71218   28711\n" +
      "39215   18604\n" +
      "35955   94504\n" +
      "60316   77721\n" +
      "82523   96106\n" +
      "29011   56269\n" +
      "82545   77160\n" +
      "69538   64794\n" +
      "21067   28474\n" +
      "31600   29287\n" +
      "48638   79513\n" +
      "77490   38714\n" +
      "27808   31017\n" +
      "51472   96525\n" +
      "59950   83349\n" +
      "94201   58024\n" +
      "74719   32598\n" +
      "44779   24776\n" +
      "79697   57387\n" +
      "53766   37236\n" +
      "79207   49094\n" +
      "21981   85337\n" +
      "70180   38991\n" +
      "92776   26555\n" +
      "62229   29287\n" +
      "22837   90916\n" +
      "47999   85425\n" +
      "65084   67672\n" +
      "24224   63606\n" +
      "45488   92101\n" +
      "93347   80499\n" +
      "57265   69150\n" +
      "35677   90916\n" +
      "12235   90916\n" +
      "23634   17105\n" +
      "69570   77160\n" +
      "10364   99400\n" +
      "64953   58607\n" +
      "94336   72861\n" +
      "35805   46881\n" +
      "54374   49061\n" +
      "56695   28474\n" +
      "67989   96030\n" +
      "66652   99400\n" +
      "98664   85337\n" +
      "94703   85337\n" +
      "34924   46881\n" +
      "89844   36377\n" +
      "43375   90916\n" +
      "62268   92108"

    const processedInput = processInput(input);
    const output = calculateDistances(processedInput);
    console.log(output); // 1506483
  });
});
