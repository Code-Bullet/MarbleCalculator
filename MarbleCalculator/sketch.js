//aliases
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;


var engine;
var world;

var marbles = [];
var startingMarbles = [];
var solids = [];
var looseRects = [];

var dontLetPeopleFuckWithShit = true;

var first = true;

var clickSaveX;
var clickSaveY;
var universalThickness = 10;
var objectType = "Marble";


var full = false;
var objects = [];
var flip = false;

var recentlyDeletedObjects = [];
var recentlyDeletedSolids = [];

var entered = false;
var enterNumber = 0;
var selecting = false;
var selectedArray;
var selectNumber = 0; //from back of list

var upperHeight = 4000;
var pause = true;


var lastIsAdder = false;

var cameraX = 0;
var cameraY = 0;

var zoom = 1.0;


function setup() {
  createCanvas(1900, 1060);
  engine = Engine.create();
  world = engine.world;
  this.x = 0;
  this.y = 0;
  solids.push(new Solid(this.x + 5085, this.y + 723, this.x + 5245, this.y + 659, 10));
  solids.push(new Solid(this.x + 5051, this.y + 710, this.x + 5173, this.y + 635, 10));
  solids.push(new Solid(this.x + 4939, this.y + 678, this.x + 4925, this.y + 659, 10));
  solids.push(new Solid(this.x + 4971, this.y + 683, this.x + 4973, this.y + 595, 10));
  solids.push(new Solid(this.x + 5100, this.y + 816, this.x + 5238, this.y + 856, 10));
  solids.push(new Solid(this.x + 5308, this.y + 856, this.x + 5457, this.y + 678, 10));
  solids.push(new Solid(this.x + 5270, this.y + 861, this.x + 5273, this.y + 800, 10));
  solids.push(new Solid(this.x + 4870, this.y + 888, this.x + 4990, this.y + 885, 10));
  solids.push(new Solid(this.x + 5054, this.y + 816, this.x + 5033, this.y + 859, 10));
  solids.push(new Solid(this.x + 5036, this.y + 853, this.x + 4985, this.y + 885, 10));
  solids.push(new Solid(this.x + 4956, this.y + 888, this.x + 5006, this.y + 872, 10));
  solids.push(new Solid(this.x + 5020, this.y + 867, this.x + 5046, this.y + 832, 10));
  solids.push(new Solid(this.x + 4828, this.y + 891, this.x + 4836, this.y + 861, 5));
  solids.push(new Solid(this.x + 4718, this.y + 680, this.x + 4716, this.y + 763, 9));
  solids.push(new Solid(this.x + 4777, this.y + 645, this.x + 4758, this.y + 667, 9));
  solids.push(new Solid(this.x + 4716, this.y + 744, this.x + 4729, this.y + 784, 9));
  solids.push(new Solid(this.x + 4726, this.y + 776, this.x + 4753, this.y + 808, 9));
  solids.push(new Solid(this.x + 4745, this.y + 797, this.x + 4788, this.y + 832, 9));
  solids.push(new Solid(this.x + 4974, this.y + 595, this.x + 5033, this.y + 565, 9));
  solids.push(new Solid(this.x + 5028, this.y + 560, this.x + 5044, this.y + 488, 9));
  solids.push(new Solid(this.x + 5148, this.y + 560, this.x + 5193, this.y + 589, 9));
  solids.push(new Solid(this.x + 5140, this.y + 541, this.x + 5126, this.y + 483, 9));
  solids.push(new Solid(this.x + 4827, this.y + 889, this.x + 4843, this.y + 793, 9));
  solids.push(new Solid(this.x + 4797, this.y + 885, this.x + 4785, this.y + 827, 9));
  solids.push(new Solid(this.x + 5099, this.y + 1236, this.x + 5093, this.y + 1166, 9));
  solids.push(new Solid(this.x + 5465, this.y + 1164, this.x + 5481, this.y + 1240, 9));
  solids.push(new Solid(this.x + 5479, this.y + 1238, this.x + 5507, this.y + 1286, 9));
  solids.push(new Solid(this.x + 5507, this.y + 1286, this.x + 5561, this.y + 1318, 9));
  solids.push(new Solid(this.x + 5619, this.y + 1290, this.x + 5647, this.y + 1328, 9));
  solids.push(new Solid(this.x + 5647, this.y + 1328, this.x + 5663, this.y + 1382, 9));
  solids.push(new Solid(this.x + 5663, this.y + 1382, this.x + 5655, this.y + 1432, 9));
  solids.push(new Solid(this.x + 5655, this.y + 1428, this.x + 5621, this.y + 1472, 9));
  solids.push(new Solid(this.x + 5623, this.y + 1470, this.x + 5555, this.y + 1506, 9));
  solids.push(new Solid(this.x + 5561, this.y + 1502, this.x + 5509, this.y + 1512, 9));
  solids.push(new Solid(this.x + 5369, this.y + 1606, this.x + 5401, this.y + 1570, 9));
  solids.push(new Solid(this.x + 5537, this.y + 1508, this.x + 5597, this.y + 1486, 9));
  solids.push(new Solid(this.x + 5603, this.y + 1484, this.x + 5635, this.y + 1452, 9));
  solids.push(new Solid(this.x + 5641, this.y + 1444, this.x + 5661, this.y + 1400, 9));
  solids.push(new Solid(this.x + 5661, this.y + 1392, this.x + 5659, this.y + 1352, 9));
  solids.push(new Solid(this.x + 5475, this.y + 1222, this.x + 5495, this.y + 1268, 9));
  solids.push(new Solid(this.x + 5495, this.y + 1268, this.x + 5537, this.y + 1306, 9));
  solids.push(new Solid(this.x + 5543, this.y + 1308, this.x + 5579, this.y + 1314, 9));
  solids.push(new Solid(this.x + 5161, this.y + 1568, this.x + 5237, this.y + 1584, 9));
  solids.push(new Solid(this.x + 4895, this.y + 2029, this.x + 4913, this.y + 1997, 4));
  solids.push(new Solid(this.x + 4858, this.y + 2014, this.x + 4860, this.y + 1974, 4));
  solids.push(new Solid(this.x + 3356, this.y + 748, this.x + 3345, this.y + 690, 10));
  solids.push(new Solid(this.x + 3391, this.y + 748, this.x + 3415, this.y + 671, 10));
  solids.push(new Solid(this.x + 3503, this.y + 794, this.x + 3668, this.y + 748, 10));
  solids.push(new Solid(this.x + 3665, this.y + 748, this.x + 3663, this.y + 711, 10));
  solids.push(new Solid(this.x + 3604, this.y + 714, this.x + 3471, this.y + 756, 10));
  solids.push(new Solid(this.x + 3471, this.y + 756, this.x + 3471, this.y + 783, 10));
  solids.push(new Solid(this.x + 3565, this.y + 927, this.x + 3517, this.y + 884, 10));
  solids.push(new Solid(this.x + 3728, this.y + 844, this.x + 3885, this.y + 732, 10));
  solids.push(new Solid(this.x + 3885, this.y + 732, this.x + 3877, this.y + 697, 10));
  solids.push(new Solid(this.x + 3461, this.y + 932, this.x + 3472, this.y + 881, 10));
  solids.push(new Solid(this.x + 3197, this.y + 966, this.x + 3134, this.y + 699, 10));
  solids.push(new Solid(this.x + 3242, this.y + 978, this.x + 3191, this.y + 705, 10));
  solids.push(new Solid(this.x + 3359, this.y + 957, this.x + 3464, this.y + 924, 10));
  solids.push(new Solid(this.x + 3311, this.y + 972, this.x + 3317, this.y + 912, 10));
  solids.push(new Solid(this.x + 3710, this.y + 981, this.x + 3731, this.y + 843, 10));
  solids.push(new Solid(this.x + 3563, this.y + 924, this.x + 3638, this.y + 936, 10));
  solids.push(new Solid(this.x + 3638, this.y + 933, this.x + 3638, this.y + 975, 10));
  solids.push(new Solid(this.x + 3671, this.y + 975, this.x + 3671, this.y + 867, 6));
  solids.push(new Solid(this.x + 3239, this.y + 1986, this.x + 3242, this.y + 1956, 10));
  solids.push(new Solid(this.x + 3203, this.y + 1986, this.x + 3194, this.y + 1938, 10));
  solids.push(new Solid(this.x + 3977, this.y + 1308, this.x + 3872, this.y + 1848, 10));
  solids.push(new Solid(this.x + 3872, this.y + 1848, this.x + 3569, this.y + 1974, 10));
  solids.push(new Solid(this.x + 3569, this.y + 1977, this.x + 3350, this.y + 2031, 10));
  solids.push(new Solid(this.x + 3317, this.y + 2016, this.x + 3350, this.y + 1956, 10));
  solids.push(new Solid(this.x + 3416, this.y + 2106, this.x + 3374, this.y + 2076, 10));
  solids.push(new Solid(this.x + 3689, this.y + 2391, this.x + 3686, this.y + 2307, 10));
  solids.push(new Solid(this.x + 3650, this.y + 2384, this.x + 3640, this.y + 2344, 10));
  solids.push(new Solid(this.x + 3884, this.y + 2558, this.x + 3889, this.y + 2486, 10));
  solids.push(new Solid(this.x + 3841, this.y + 2544, this.x + 3817, this.y + 2526, 10));
  solids.push(new Solid(this.x + 4546, this.y + 914, this.x + 4378, this.y + 932, 10));
  solids.push(new Solid(this.x + 4378, this.y + 932, this.x + 4318, this.y + 1058, 10));
  solids.push(new Solid(this.x + 4318, this.y + 1058, this.x + 4312, this.y + 1214, 10));
  solids.push(new Solid(this.x + 4355, this.y + 1229, this.x + 4363, this.y + 1067, 10));
  solids.push(new Solid(this.x + 4363, this.y + 1067, this.x + 4405, this.y + 982, 10));
  solids.push(new Solid(this.x + 4405, this.y + 982, this.x + 4560, this.y + 964, 10));
  solids.push(new Solid(this.x + 3800, this.y + 2435, this.x + 4035, this.y + 2035, 10));
  solids.push(new Solid(this.x + 4030, this.y + 2047, this.x + 4083, this.y + 1485, 10));
  solids.push(new Solid(this.x + 3765, this.y + 2427, this.x + 3978, this.y + 2045, 10));
  solids.push(new Solid(this.x + 3978, this.y + 2045, this.x + 4025, this.y + 1484, 10));
  solids.push(new Solid(this.x + 3998, this.y + 2549, this.x + 4585, this.y + 2294, 10));
  solids.push(new Solid(this.x + 3955, this.y + 2566, this.x + 3955, this.y + 2489, 10));
  solids.push(new Solid(this.x + 3980, this.y + 2704, this.x + 4010, this.y + 2736, 10));
  solids.push(new Solid(this.x + 3823, this.y + 2726, this.x + 3863, this.y + 2706, 10));
  solids.push(new Solid(this.x + 3762, this.y + 2557, this.x + 3770, this.y + 2515, 10));
  solids.push(new Solid(this.x + 3475, this.y + 2615, this.x + 3427, this.y + 2395, 6));
  solids.push(new Solid(this.x + 3485, this.y + 2395, this.x + 3520, this.y + 2565, 6));
  solids.push(new Solid(this.x + 3239, this.y + 3015, this.x + 3249, this.y + 2943, 6));
  solids.push(new Solid(this.x + 3162, this.y + 3015, this.x + 3014, this.y + 2770, 13));
  solids.push(new Solid(this.x + 3376, this.y + 952, this.x + 3345, this.y + 961, 10));
  solids.push(new Solid(this.x + 2874, this.y + 1757, this.x + 2936, this.y + 1774, 10));
  solids.push(new Solid(this.x + 3512, this.y + 1783, this.x + 3577, this.y + 1761, 10));
  solids.push(new Solid(this.x + 3312, this.y + 1904, this.x + 3241, this.y + 1928, 10));
  solids.push(new Solid(this.x + 3112, this.y + 1904, this.x + 3196, this.y + 1928, 10));
  solids.push(new Solid(this.x + 3386, this.y + 2258, this.x + 3430, this.y + 2296, 10));
  solids.push(new Solid(this.x + 3619, this.y + 3348, this.x + 3694, this.y + 3377, 10));
  solids.push(new Solid(this.x + 4246, this.y + 3370, this.x + 4346, this.y + 3337, 10));
  solids.push(new Solid(this.x + 2748, this.y + 3559, this.x + 2746, this.y + 3595, 10));
  solids.push(new Solid(this.x + 2746, this.y + 3595, this.x + 2701, this.y + 3595, 10));
  solids.push(new Solid(this.x + 2701, this.y + 3595, this.x + 2714, this.y + 3537, 10));
  solids.push(new Solid(this.x + 4296, this.y + 1607, this.x + 4247, this.y + 2000, 10));
  solids.push(new Solid(this.x + 4247, this.y + 2000, this.x + 4221, this.y + 2089, 10));
  solids.push(new Solid(this.x + 4228, this.y + 2082, this.x + 4168, this.y + 2135, 10));
  solids.push(new Solid(this.x + 4174, this.y + 2128, this.x + 4107, this.y + 2140, 10));
  solids.push(new Solid(this.x + 4114, this.y + 2138, this.x + 4063, this.y + 2128, 10));
  solids.push(new Solid(this.x + 4090, this.y + 2137, this.x + 4137, this.y + 2138, 10));
  solids.push(new Solid(this.x + 4148, this.y + 2133, this.x + 4194, this.y + 2117, 10));
  solids.push(new Solid(this.x + 4194, this.y + 2117, this.x + 4232, this.y + 2068, 10));
  solids.push(new Solid(this.x + 4278, this.y + 1405, this.x + 4336, this.y + 1372, 10));
  solids.push(new Solid(this.x + 3762, this.y + 2554, this.x + 3737, this.y + 2602, 10));
  solids.push(new Solid(this.x + 3742, this.y + 2598, this.x + 3684, this.y + 2622, 10));
  solids.push(new Solid(this.x + 3687, this.y + 2622, this.x + 3634, this.y + 2614, 10));
  solids.push(new Solid(this.x + 3575, this.y + 2558, this.x + 3534, this.y + 2559, 10));
  solids.push(new Solid(this.x + 3545, this.y + 2559, this.x + 3521, this.y + 2586, 10));
  solids.push(new Solid(this.x + 3521, this.y + 2583, this.x + 3513, this.y + 2617, 10));
  solids.push(new Solid(this.x + 3636, this.y + 2614, this.x + 3606, this.y + 2604, 10));
  solids.push(new Solid(this.x + 3662, this.y + 2618, this.x + 3702, this.y + 2617, 10));
  solids.push(new Solid(this.x + 3722, this.y + 2610, this.x + 3751, this.y + 2582, 10));
  solids.push(new Solid(this.x + 3532, this.y + 2572, this.x + 3556, this.y + 2556, 10));
  solids.push(new Solid(this.x + 3516, this.y + 2599, this.x + 3530, this.y + 2572, 10));
  solids.push(new Solid(this.x + 3548, this.y + 2704, this.x + 3556, this.y + 2616, 10));
  solids.push(new Solid(this.x + 3557, this.y + 2617, this.x + 3546, this.y + 2633, 10));
  solids.push(new Solid(this.x + 3318, this.y + 2122, this.x + 3258, this.y + 2454, 10));
  solids.push(new Solid(this.x + 3262, this.y + 2448, this.x + 3214, this.y + 2504, 10));
  solids.push(new Solid(this.x + 3214, this.y + 2504, this.x + 3150, this.y + 2500, 10));
  solids.push(new Solid(this.x + 3276, this.y + 2113, this.x + 3279, this.y + 2155, 10));
  solids.push(new Solid(this.x + 3262, this.y + 2433, this.x + 3228, this.y + 2489, 10));
  solids.push(new Solid(this.x + 3235, this.y + 2483, this.x + 3183, this.y + 2504, 10));
  solids.push(new Solid(this.x + 3139, this.y + 2484, this.x + 3167, this.y + 2502, 10));
  solids.push(new Solid(this.x + 3158, this.y + 2497, this.x + 3196, this.y + 2499, 10));
  solids.push(new Solid(this.x + 3150, this.y + 2491, this.x + 3129, this.y + 2456, 10));
  solids.push(new Solid(this.x + 3131, this.y + 2460, this.x + 3175, this.y + 2504, 10));
  solids.push(new Solid(this.x + 3156, this.y + 2488, this.x + 3190, this.y + 2499, 10));
  solids.push(new Solid(this.x + 3177, this.y + 2496, this.x + 3215, this.y + 2494, 10));
  solids.push(new Solid(this.x + 3217, this.y + 2489, this.x + 3247, this.y + 2460, 10));
  solids.push(new Solid(this.x + 3026, this.y + 2786, this.x + 2990, this.y + 2650, 10));
  solids.push(new Solid(this.x + 2998, this.y + 2678, this.x + 2978, this.y + 2518, 10));
  solids.push(new Solid(this.x + 2978, this.y + 2538, this.x + 2990, this.y + 2382, 10));
  solids.push(new Solid(this.x + 2982, this.y + 2470, this.x + 2986, this.y + 2602, 10));
  solids.push(new Solid(this.x + 3563, this.y + 2558, this.x + 3603, this.y + 2556, 10));
  solids.push(new Solid(this.x + 4018, this.y + 2064, this.x + 3963, this.y + 2172, 10));
  solids.push(new Solid(this.x + 4296, this.y + 1614, this.x + 4301, this.y + 1492, 10));
  solids.push(new Solid(this.x + 4014, this.y + 2073, this.x + 3966, this.y + 2175, 10));
  solids.push(new Solid(this.x + 3954, this.y + 2490, this.x + 3840, this.y + 2364, 10));
  solids.push(new Solid(this.x + 4053, this.y + 2069, this.x + 4005, this.y + 2093, 10));
  solids.push(new Solid(this.x + 4020, this.y + 2084, this.x + 3993, this.y + 2120, 10));
  solids.push(new Solid(this.x + 3990, this.y + 2123, this.x + 3972, this.y + 2180, 10));
  solids.push(new Solid(this.x + 3972, this.y + 2168, this.x + 3981, this.y + 2243, 10));
  solids.push(new Solid(this.x + 3978, this.y + 2228, this.x + 4029, this.y + 2282, 10));
  solids.push(new Solid(this.x + 4026, this.y + 2279, this.x + 4056, this.y + 2279, 10));
  solids.push(new Solid(this.x + 4008, this.y + 2264, this.x + 4041, this.y + 2282, 10));
  solids.push(new Solid(this.x + 4050, this.y + 2084, this.x + 4002, this.y + 2102, 10));
  solids.push(new Solid(this.x + 4026, this.y + 2093, this.x + 3984, this.y + 2120, 10));
  solids.push(new Solid(this.x + 1460, this.y + 1066, this.x + 1449, this.y + 1008, 10));
  solids.push(new Solid(this.x + 1495, this.y + 1066, this.x + 1519, this.y + 989, 10));
  solids.push(new Solid(this.x + 1607, this.y + 1112, this.x + 1772, this.y + 1066, 10));
  solids.push(new Solid(this.x + 1769, this.y + 1066, this.x + 1767, this.y + 1029, 10));
  solids.push(new Solid(this.x + 1708, this.y + 1032, this.x + 1575, this.y + 1074, 10));
  solids.push(new Solid(this.x + 1575, this.y + 1074, this.x + 1575, this.y + 1101, 10));
  solids.push(new Solid(this.x + 1669, this.y + 1245, this.x + 1621, this.y + 1202, 10));
  solids.push(new Solid(this.x + 1832, this.y + 1162, this.x + 1989, this.y + 1050, 10));
  solids.push(new Solid(this.x + 1989, this.y + 1050, this.x + 1981, this.y + 1015, 10));
  solids.push(new Solid(this.x + 1565, this.y + 1250, this.x + 1576, this.y + 1199, 10));
  solids.push(new Solid(this.x + 1301, this.y + 1284, this.x + 1238, this.y + 1017, 10));
  solids.push(new Solid(this.x + 1346, this.y + 1296, this.x + 1295, this.y + 1023, 10));
  solids.push(new Solid(this.x + 1463, this.y + 1275, this.x + 1568, this.y + 1242, 10));
  solids.push(new Solid(this.x + 1415, this.y + 1290, this.x + 1421, this.y + 1230, 10));
  solids.push(new Solid(this.x + 1814, this.y + 1299, this.x + 1835, this.y + 1161, 10));
  solids.push(new Solid(this.x + 1667, this.y + 1242, this.x + 1742, this.y + 1254, 10));
  solids.push(new Solid(this.x + 1742, this.y + 1251, this.x + 1742, this.y + 1293, 10));
  solids.push(new Solid(this.x + 1775, this.y + 1293, this.x + 1775, this.y + 1185, 6));
  solids.push(new Solid(this.x + 1343, this.y + 2304, this.x + 1346, this.y + 2274, 10));
  solids.push(new Solid(this.x + 1307, this.y + 2304, this.x + 1298, this.y + 2256, 10));
  solids.push(new Solid(this.x + 2081, this.y + 1626, this.x + 1976, this.y + 2166, 10));
  solids.push(new Solid(this.x + 1976, this.y + 2166, this.x + 1673, this.y + 2292, 10));
  solids.push(new Solid(this.x + 1673, this.y + 2295, this.x + 1454, this.y + 2349, 10));
  solids.push(new Solid(this.x + 1421, this.y + 2334, this.x + 1454, this.y + 2274, 10));
  solids.push(new Solid(this.x + 1520, this.y + 2424, this.x + 1478, this.y + 2394, 10));
  solids.push(new Solid(this.x + 1793, this.y + 2709, this.x + 1790, this.y + 2625, 10));
  solids.push(new Solid(this.x + 1754, this.y + 2702, this.x + 1744, this.y + 2662, 10));
  solids.push(new Solid(this.x + 1988, this.y + 2876, this.x + 1993, this.y + 2804, 10));
  solids.push(new Solid(this.x + 1945, this.y + 2862, this.x + 1921, this.y + 2844, 10));
  solids.push(new Solid(this.x + 2650, this.y + 1232, this.x + 2482, this.y + 1250, 10));
  solids.push(new Solid(this.x + 2482, this.y + 1250, this.x + 2422, this.y + 1376, 10));
  solids.push(new Solid(this.x + 2422, this.y + 1376, this.x + 2416, this.y + 1532, 10));
  solids.push(new Solid(this.x + 2459, this.y + 1547, this.x + 2467, this.y + 1385, 10));
  solids.push(new Solid(this.x + 2467, this.y + 1385, this.x + 2509, this.y + 1300, 10));
  solids.push(new Solid(this.x + 2509, this.y + 1300, this.x + 2664, this.y + 1282, 10));
  solids.push(new Solid(this.x + 1904, this.y + 2753, this.x + 2139, this.y + 2353, 10));
  solids.push(new Solid(this.x + 2134, this.y + 2365, this.x + 2187, this.y + 1803, 10));
  solids.push(new Solid(this.x + 1869, this.y + 2745, this.x + 2082, this.y + 2363, 10));
  solids.push(new Solid(this.x + 2082, this.y + 2363, this.x + 2129, this.y + 1802, 10));
  solids.push(new Solid(this.x + 2102, this.y + 2867, this.x + 2689, this.y + 2612, 10));
  solids.push(new Solid(this.x + 2059, this.y + 2884, this.x + 2059, this.y + 2807, 10));
  solids.push(new Solid(this.x + 2084, this.y + 3022, this.x + 2114, this.y + 3054, 10));
  solids.push(new Solid(this.x + 1927, this.y + 3044, this.x + 1967, this.y + 3024, 10));
  solids.push(new Solid(this.x + 1866, this.y + 2875, this.x + 1874, this.y + 2833, 10));
  solids.push(new Solid(this.x + 1579, this.y + 2933, this.x + 1531, this.y + 2713, 6));
  solids.push(new Solid(this.x + 1589, this.y + 2713, this.x + 1624, this.y + 2883, 6));
  solids.push(new Solid(this.x + 1343, this.y + 3333, this.x + 1353, this.y + 3261, 6));
  solids.push(new Solid(this.x + 1266, this.y + 3333, this.x + 1118, this.y + 3088, 13));
  solids.push(new Solid(this.x + 1480, this.y + 1270, this.x + 1449, this.y + 1279, 10));
  solids.push(new Solid(this.x + 978, this.y + 2075, this.x + 1040, this.y + 2092, 10));
  solids.push(new Solid(this.x + 1616, this.y + 2101, this.x + 1681, this.y + 2079, 10));
  solids.push(new Solid(this.x + 1416, this.y + 2222, this.x + 1345, this.y + 2246, 10));
  solids.push(new Solid(this.x + 1216, this.y + 2222, this.x + 1300, this.y + 2246, 10));
  solids.push(new Solid(this.x + 1490, this.y + 2576, this.x + 1534, this.y + 2614, 10));
  solids.push(new Solid(this.x + 1723, this.y + 3666, this.x + 1798, this.y + 3695, 10));
  solids.push(new Solid(this.x + 2350, this.y + 3688, this.x + 2450, this.y + 3655, 10));
  solids.push(new Solid(this.x + 2400, this.y + 1925, this.x + 2351, this.y + 2318, 10));
  solids.push(new Solid(this.x + 2351, this.y + 2318, this.x + 2325, this.y + 2407, 10));
  solids.push(new Solid(this.x + 2332, this.y + 2400, this.x + 2272, this.y + 2453, 10));
  solids.push(new Solid(this.x + 2278, this.y + 2446, this.x + 2211, this.y + 2458, 10));
  solids.push(new Solid(this.x + 2218, this.y + 2456, this.x + 2167, this.y + 2446, 10));
  solids.push(new Solid(this.x + 2194, this.y + 2455, this.x + 2241, this.y + 2456, 10));
  solids.push(new Solid(this.x + 2252, this.y + 2451, this.x + 2298, this.y + 2435, 10));
  solids.push(new Solid(this.x + 2298, this.y + 2435, this.x + 2336, this.y + 2386, 10));
  solids.push(new Solid(this.x + 2382, this.y + 1723, this.x + 2440, this.y + 1690, 10));
  solids.push(new Solid(this.x + 1866, this.y + 2872, this.x + 1841, this.y + 2920, 10));
  solids.push(new Solid(this.x + 1846, this.y + 2916, this.x + 1788, this.y + 2940, 10));
  solids.push(new Solid(this.x + 1791, this.y + 2940, this.x + 1738, this.y + 2932, 10));
  solids.push(new Solid(this.x + 1679, this.y + 2876, this.x + 1638, this.y + 2877, 10));
  solids.push(new Solid(this.x + 1649, this.y + 2877, this.x + 1625, this.y + 2904, 10));
  solids.push(new Solid(this.x + 1625, this.y + 2901, this.x + 1617, this.y + 2935, 10));
  solids.push(new Solid(this.x + 1740, this.y + 2932, this.x + 1710, this.y + 2922, 10));
  solids.push(new Solid(this.x + 1766, this.y + 2936, this.x + 1806, this.y + 2935, 10));
  solids.push(new Solid(this.x + 1826, this.y + 2928, this.x + 1855, this.y + 2900, 10));
  solids.push(new Solid(this.x + 1636, this.y + 2890, this.x + 1660, this.y + 2874, 10));
  solids.push(new Solid(this.x + 1620, this.y + 2917, this.x + 1634, this.y + 2890, 10));
  solids.push(new Solid(this.x + 1652, this.y + 3022, this.x + 1660, this.y + 2934, 10));
  solids.push(new Solid(this.x + 1661, this.y + 2935, this.x + 1650, this.y + 2951, 10));
  solids.push(new Solid(this.x + 1422, this.y + 2440, this.x + 1362, this.y + 2772, 10));
  solids.push(new Solid(this.x + 1366, this.y + 2766, this.x + 1318, this.y + 2822, 10));
  solids.push(new Solid(this.x + 1318, this.y + 2822, this.x + 1254, this.y + 2818, 10));
  solids.push(new Solid(this.x + 1380, this.y + 2431, this.x + 1383, this.y + 2473, 10));
  solids.push(new Solid(this.x + 1366, this.y + 2751, this.x + 1332, this.y + 2807, 10));
  solids.push(new Solid(this.x + 1339, this.y + 2801, this.x + 1287, this.y + 2822, 10));
  solids.push(new Solid(this.x + 1243, this.y + 2802, this.x + 1271, this.y + 2820, 10));
  solids.push(new Solid(this.x + 1262, this.y + 2815, this.x + 1300, this.y + 2817, 10));
  solids.push(new Solid(this.x + 1254, this.y + 2809, this.x + 1233, this.y + 2774, 10));
  solids.push(new Solid(this.x + 1235, this.y + 2778, this.x + 1279, this.y + 2822, 10));
  solids.push(new Solid(this.x + 1260, this.y + 2806, this.x + 1294, this.y + 2817, 10));
  solids.push(new Solid(this.x + 1281, this.y + 2814, this.x + 1319, this.y + 2812, 10));
  solids.push(new Solid(this.x + 1321, this.y + 2807, this.x + 1351, this.y + 2778, 10));
  solids.push(new Solid(this.x + 1130, this.y + 3104, this.x + 1094, this.y + 2968, 10));
  solids.push(new Solid(this.x + 1102, this.y + 2996, this.x + 1082, this.y + 2836, 10));
  solids.push(new Solid(this.x + 1082, this.y + 2856, this.x + 1094, this.y + 2700, 10));
  solids.push(new Solid(this.x + 1086, this.y + 2788, this.x + 1090, this.y + 2920, 10));
  solids.push(new Solid(this.x + 1667, this.y + 2876, this.x + 1707, this.y + 2874, 10));
  solids.push(new Solid(this.x + 2122, this.y + 2382, this.x + 2067, this.y + 2490, 10));
  solids.push(new Solid(this.x + 2400, this.y + 1932, this.x + 2405, this.y + 1810, 10));
  solids.push(new Solid(this.x + 2118, this.y + 2391, this.x + 2070, this.y + 2493, 10));
  solids.push(new Solid(this.x + 2058, this.y + 2808, this.x + 1944, this.y + 2682, 10));
  solids.push(new Solid(this.x + 2157, this.y + 2387, this.x + 2109, this.y + 2411, 10));
  solids.push(new Solid(this.x + 2124, this.y + 2402, this.x + 2097, this.y + 2438, 10));
  solids.push(new Solid(this.x + 2094, this.y + 2441, this.x + 2076, this.y + 2498, 10));
  solids.push(new Solid(this.x + 2076, this.y + 2486, this.x + 2085, this.y + 2561, 10));
  solids.push(new Solid(this.x + 2082, this.y + 2546, this.x + 2133, this.y + 2600, 10));
  solids.push(new Solid(this.x + 2130, this.y + 2597, this.x + 2160, this.y + 2597, 10));
  solids.push(new Solid(this.x + 2112, this.y + 2582, this.x + 2145, this.y + 2600, 10));
  solids.push(new Solid(this.x + 2154, this.y + 2402, this.x + 2106, this.y + 2420, 10));
  solids.push(new Solid(this.x + 2130, this.y + 2411, this.x + 2088, this.y + 2438, 10));
  solids.push(new Solid(this.x + 4562, this.y + 2288, this.x + 4626, this.y + 2224, 10));
  solids.push(new Solid(this.x + 4736, this.y + -211, this.x + 4736, this.y + -118, 10));
  solids.push(new Solid(this.x + 4619, this.y + -211, this.x + 4622, this.y + -107, 10));
  solids.push(new Solid(this.x + 4454, this.y + -203, this.x + 4454, this.y + -99, 10));
  solids.push(new Solid(this.x + 4310, this.y + -195, this.x + 4318, this.y + -91, 10));
  solids.push(new Solid(this.x + 4043, this.y + -169, this.x + 4048, this.y + -67, 10));
  solids.push(new Solid(this.x + 4150, this.y + -190, this.x + 4155, this.y + -78, 10));
  solids.push(new Solid(this.x + 4627, this.y + -59, this.x + 4622, this.y + 53, 10));
  solids.push(new Solid(this.x + 4736, this.y + -67, this.x + 4726, this.y + 55, 10));
  solids.push(new Solid(this.x + 4624, this.y + -113, this.x + 4736, this.y + -62, 10));
  solids.push(new Solid(this.x + 4326, this.y + -25, this.x + 4326, this.y + 71, 10));
  solids.push(new Solid(this.x + 4448, this.y + -49, this.x + 4448, this.y + 55, 10));
  solids.push(new Solid(this.x + 4320, this.y + -22, this.x + 4454, this.y + -99, 10));
  solids.push(new Solid(this.x + 4056, this.y + -11, this.x + 4056, this.y + 106, 10));
  solids.push(new Solid(this.x + 4147, this.y + -22, this.x + 4147, this.y + 103, 10));
  solids.push(new Solid(this.x + 4056, this.y + -6, this.x + 4152, this.y + -81, 10));
  solids.push(new Solid(this.x + 4880, this.y + -163, this.x + 4987, this.y + -166, 10));
  solids.push(new Solid(this.x + 4934, this.y + -219, this.x + 4931, this.y + -99, 10));
  solids.push(new Solid(this.x + 4630, this.y + 199, this.x + 5006, this.y + 415, 10));
  solids.push(new Solid(this.x + 5048, this.y + 428, this.x + 5051, this.y + 356, 10));
  solids.push(new Solid(this.x + 4747, this.y + 122, this.x + 5128, this.y + 324, 10));
  solids.push(new Solid(this.x + 5171, this.y + 399, this.x + 5227, this.y + 287, 10));
  solids.push(new Solid(this.x + 5123, this.y + 423, this.x + 5120, this.y + 351, 10));
  solids.push(new Solid(this.x + 3545, this.y + 445, this.x + 3545, this.y + 381, 10));
  solids.push(new Solid(this.x + 3476, this.y + 349, this.x + 4310, this.y + 144, 10));
  solids.push(new Solid(this.x + 3414, this.y + 432, this.x + 3380, this.y + 301, 10));
  solids.push(new Solid(this.x + 4147, this.y + 136, this.x + 1742, this.y + 506, 10));
  solids.push(new Solid(this.x + 4022, this.y + 53, this.x + 1570, this.y + 453, 10));
  solids.push(new Solid(this.x + 1521, this.y + 754, this.x + 1129, this.y + 568, 10));
  solids.push(new Solid(this.x + 1129, this.y + 568, this.x + 1145, this.y + 512, 10));
  solids.push(new Solid(this.x + 1566, this.y + 768, this.x + 1586, this.y + 704, 10));
  solids.push(new Solid(this.x + 3466, this.y + 446, this.x + 3478, this.y + 346, 10));
  solids.push(new Solid(this.x + 5209, this.y + 1579, this.x + 5241, this.y + 1579, 10));
  solids.push(new Solid(this.x + 4351, this.y + 214, this.x + 3724, this.y + 326, 10));
  solids.push(new Solid(this.x + 3575, this.y + 328, this.x + 3732, this.y + 360, 10));
  solids.push(new Solid(this.x + 1575, this.y + 509, this.x + 2086, this.y + 625, 10));
  solids.push(new Solid(this.x + 2228, this.y + 663, this.x + 1708, this.y + 685, 10));
  solids.push(new Solid(this.x + 1648, this.y + 758, this.x + 1544, this.y + 638, 10));
  solids.push(new Solid(this.x + 2222, this.y + 660, this.x + 2226, this.y + 596, 10));
  solids.push(new Solid(this.x + 1578, this.y + 504, this.x + 1602, this.y + 448, 10));
  solids.push(new Solid(this.x + 1698, this.y + 760, this.x + 1718, this.y + 684, 10));
  solids.push(new Solid(this.x + 2657, this.y + 1288, this.x + 2678, this.y + 1258, 10));
  solids.push(new Solid(this.x + 1872, this.y + 4836, this.x + 2064, this.y + 4836, 10));
  solids.push(new Solid(this.x + 1868, this.y + 4764, this.x + 2064, this.y + 4764, 10));
  solids.push(new Solid(this.x + 2204, this.y + 4724, this.x + 2204, this.y + 4860, 10));
  solids.push(new Solid(this.x + 2204, this.y + 4860, this.x + 2320, this.y + 4860, 10));
  solids.push(new Solid(this.x + 2320, this.y + 4860, this.x + 2316, this.y + 4720, 10));
  solids.push(new Solid(this.x + 2324, this.y + 4856, this.x + 2436, this.y + 4860, 10));
  solids.push(new Solid(this.x + 2436, this.y + 4860, this.x + 2432, this.y + 4720, 10));
  solids.push(new Solid(this.x + 2436, this.y + 4868, this.x + 2660, this.y + 4872, 10));
  solids.push(new Solid(this.x + 2660, this.y + 4872, this.x + 2656, this.y + 4724, 10));
  solids.push(new Solid(this.x + 2536, this.y + 4868, this.x + 2540, this.y + 4720, 10));
  solids.push(new Solid(this.x + 4566, this.y + 2296, this.x + 4654, this.y + 2264, 10));
  solids.push(new Solid(this.x + 2054, this.y + 3870, this.x + 2310, this.y + 4534, 10));
  solids.push(new Solid(this.x + 2110, this.y + 3870, this.x + 2358, this.y + 4526, 10));
  solids.push(new Solid(this.x + 4014, this.y + 3614, this.x + 2582, this.y + 4406, 10));
  solids.push(new Solid(this.x + 2422, this.y + 4518, this.x + 2422, this.y + 4302, 10));
  solids.push(new Solid(this.x + 2422, this.y + 4510, this.x + 2422, this.y + 4590, 10));
  solids.push(new Solid(this.x + 5094, this.y + 2136, this.x + 5078, this.y + 2952, 10));
  solids.push(new Solid(this.x + 5078, this.y + 2944, this.x + 4998, this.y + 3488, 10));
  solids.push(new Solid(this.x + 4998, this.y + 3488, this.x + 4702, this.y + 3992, 10));
  solids.push(new Solid(this.x + 4702, this.y + 3992, this.x + 4046, this.y + 4408, 10));
  solids.push(new Solid(this.x + 4046, this.y + 4408, this.x + 2990, this.y + 4640, 10));
  solids.push(new Solid(this.x + 2990, this.y + 4640, this.x + 2670, this.y + 4720, 10));
  solids.push(new Solid(this.x + 1074, this.y + 3644, this.x + 1082, this.y + 3916, 10));
  solids.push(new Solid(this.x + 1082, this.y + 3916, this.x + 1178, this.y + 4116, 10));
  solids.push(new Solid(this.x + 1178, this.y + 4116, this.x + 1378, this.y + 4324, 10));
  solids.push(new Solid(this.x + 1378, this.y + 4324, this.x + 1610, this.y + 4420, 10));
  solids.push(new Solid(this.x + 1610, this.y + 4420, this.x + 2146, this.y + 4588, 10));
  solids.push(new Solid(this.x + 2194, this.y + 4568, this.x + 2274, this.y + 4624, 10));
  solids.push(new Solid(this.x + 2234, this.y + 4600, this.x + 2282, this.y + 4664, 10));
  solids.push(new Solid(this.x + 2266, this.y + 4648, this.x + 2274, this.y + 4680, 10));
  solids.push(new Solid(this.x + 2206, this.y + 4577, this.x + 2246, this.y + 4613, 10));
  solids.push(new Solid(this.x + 4938, this.y + 729, this.x + 4947, this.y + 763, 10));
  solids.push(new Solid(this.x + 4947, this.y + 763, this.x + 4977, this.y + 784, 10));
  solids.push(new Solid(this.x + 4988, this.y + 785, this.x + 5016, this.y + 792, 10));
  solids.push(new Solid(this.x + 3588, this.y + 429, this.x + 3940, this.y + 357, 10));
  solids.push(new Solid(this.x + 3940, this.y + 357, this.x + 3943, this.y + 296, 10));
  solids.push(new Solid(this.x + 4343, this.y + 216, this.x + 4473, this.y + 176, 10));
  solids.push(new Solid(this.x + 2886, this.y + 1486, this.x + 3030, this.y + 1582, 10));
  solids.push(new Solid(this.x + 3558, this.y + 1486, this.x + 3374, this.y + 1590, 10));
  solids.push(new Solid(this.x + 3398, this.y + 620, this.x + 3446, this.y + 585, 10));
  solids.push(new Solid(this.x + 3571, this.y + 585, this.x + 3603, this.y + 612, 10));
  solids.push(new Solid(this.x + 4128, this.y + 1415, this.x + 4131, this.y + 1367, 10));
  solids.push(new Solid(this.x + 2235, this.y + 1736, this.x + 2238, this.y + 1688, 10));
  solids.push(new Solid(this.x + 1111, this.y + 1977, this.x + 1035, this.y + 1751, 10));
  solids.push(new Solid(this.x + 2539, this.y + 4721, this.x + 2553, this.y + 4583, 10));
  startingMarbles.push(new StartingMarble(this.x + 5299, this.y + 1384, 20));
  objects.push(new Object(this.x + 5067, this.y + 331, false, "Duplicator"));
  objects[objects.length - 1].solids[13].removeFromWorld();
  objects[objects.length - 1].solids.splice(13, 1);
  objects[objects.length - 1].removedSolids.push(13);
  objects[objects.length - 1].solids[13].removeFromWorld();
  objects[objects.length - 1].solids.splice(13, 1);
  objects[objects.length - 1].removedSolids.push(13);
  objects[objects.length - 1].solids[14].removeFromWorld();
  objects[objects.length - 1].solids.splice(14, 1);
  objects[objects.length - 1].removedSolids.push(14);
  objects.push(new Object(this.x + 5107, this.y + 336, true, "Duplicator"));
  objects[objects.length - 1].solids[13].removeFromWorld();
  objects[objects.length - 1].solids.splice(13, 1);
  objects[objects.length - 1].removedSolids.push(13);
  objects[objects.length - 1].solids[13].removeFromWorld();
  objects[objects.length - 1].solids.splice(13, 1);
  objects[objects.length - 1].removedSolids.push(13);
  objects[objects.length - 1].solids[13].removeFromWorld();
  objects[objects.length - 1].solids.splice(13, 1);
  objects[objects.length - 1].removedSolids.push(13);
  objects[objects.length - 1].solids[13].removeFromWorld();
  objects[objects.length - 1].solids.splice(13, 1);
  objects[objects.length - 1].removedSolids.push(13);
  objects.push(new Object(this.x + 4989, this.y + 790, false, "Crossover"));
  objects.push(new Object(this.x + 5222, this.y + 798, false, "OR Gate"));
  objects.push(new Object(this.x + 4777, this.y + 851, false, "AND Gate"));
  objects.push(new Object(this.x + 5099, this.y + 1178, false, "NOT Gate"));
  objects[objects.length - 1].solids[15].removeFromWorld();
  objects[objects.length - 1].solids.splice(15, 1);
  objects[objects.length - 1].removedSolids.push(15);
  objects.push(new Object(this.x + 5385, this.y + 1570, true, "AND Gate"));
  upperHeight = 1000;
  objects.push(new Object(this.x + 5091, this.y + 689, true, "Upper"));
  objects.push(new Object(this.x + 3489, this.y + 356, false, "Duplicator"));
  objects.push(new Object(this.x + 3521, this.y + 359, true, "Duplicator"));
  objects.push(new Object(this.x + 3407, this.y + 858, false, "Crossover"));
  objects.push(new Object(this.x + 3928, this.y + 971, true, "XOR Gate"));
  objects[objects.length - 1].solids[1].removeFromWorld();
  objects[objects.length - 1].solids.splice(1, 1);
  objects[objects.length - 1].removedSolids.push(1);
  objects[objects.length - 1].solids[1].removeFromWorld();
  objects[objects.length - 1].solids.splice(1, 1);
  objects[objects.length - 1].removedSolids.push(1);
  objects[objects.length - 1].solids[1].removeFromWorld();
  objects[objects.length - 1].solids.splice(1, 1);
  objects[objects.length - 1].removedSolids.push(1);
  objects[objects.length - 1].solids[24].removeFromWorld();
  objects[objects.length - 1].solids.splice(24, 1);
  objects[objects.length - 1].removedSolids.push(24);
  objects[objects.length - 1].solids[24].removeFromWorld();
  objects[objects.length - 1].solids.splice(24, 1);
  objects[objects.length - 1].removedSolids.push(24);
  objects[objects.length - 1].solids[24].removeFromWorld();
  objects[objects.length - 1].solids.splice(24, 1);
  objects[objects.length - 1].removedSolids.push(24);
  objects[objects.length - 1].solids[25].removeFromWorld();
  objects[objects.length - 1].solids.splice(25, 1);
  objects[objects.length - 1].removedSolids.push(25);
  objects[objects.length - 1].solids[24].removeFromWorld();
  objects[objects.length - 1].solids.splice(24, 1);
  objects[objects.length - 1].removedSolids.push(24);
  objects[objects.length - 1].solids[2].removeFromWorld();
  objects[objects.length - 1].solids.splice(2, 1);
  objects[objects.length - 1].removedSolids.push(2);
  objects[objects.length - 1].solids[1].removeFromWorld();
  objects[objects.length - 1].solids.splice(1, 1);
  objects[objects.length - 1].removedSolids.push(1);
  objects.push(new Object(this.x + 3620, this.y + 939, false, "AND Gate"));
  objects.push(new Object(this.x + 3254, this.y + 2094, false, "Crossover"));
  objects.push(new Object(this.x + 3311, this.y + 2034, false, "Duplicator"));
  objects.push(new Object(this.x + 3704, this.y + 2499, false, "Crossover"));
  objects.push(new Object(this.x + 3270, this.y + 2557, false, "XOR Gate"));
  objects[objects.length - 1].solids[1].removeFromWorld();
  objects[objects.length - 1].solids.splice(1, 1);
  objects[objects.length - 1].removedSolids.push(1);
  objects[objects.length - 1].solids[1].removeFromWorld();
  objects[objects.length - 1].solids.splice(1, 1);
  objects[objects.length - 1].removedSolids.push(1);
  objects[objects.length - 1].solids[1].removeFromWorld();
  objects[objects.length - 1].solids.splice(1, 1);
  objects[objects.length - 1].removedSolids.push(1);
  objects[objects.length - 1].solids[24].removeFromWorld();
  objects[objects.length - 1].solids.splice(24, 1);
  objects[objects.length - 1].removedSolids.push(24);
  objects[objects.length - 1].solids[24].removeFromWorld();
  objects[objects.length - 1].solids.splice(24, 1);
  objects[objects.length - 1].removedSolids.push(24);
  objects[objects.length - 1].solids[24].removeFromWorld();
  objects[objects.length - 1].solids.splice(24, 1);
  objects[objects.length - 1].removedSolids.push(24);
  objects.push(new Object(this.x + 4414, this.y + 1142, true, "Duplicator"));
  objects.push(new Object(this.x + 3567, this.y + 2577, true, "AND Gate"));
  objects[objects.length - 1].solids[0].removeFromWorld();
  objects[objects.length - 1].solids.splice(0, 1);
  objects[objects.length - 1].removedSolids.push(0);
  objects[objects.length - 1].solids[0].removeFromWorld();
  objects[objects.length - 1].solids.splice(0, 1);
  objects[objects.length - 1].removedSolids.push(0);
  objects.push(new Object(this.x + 3251, this.y + 2958, true, "OR Gate"));
  upperHeight = 2000;
  objects.push(new Object(this.x + 3203, this.y + 984, true, "Upper"));
  objects.push(new Object(this.x + 1593, this.y + 674, false, "Duplicator"));
  objects.push(new Object(this.x + 1625, this.y + 677, true, "Duplicator"));
  objects.push(new Object(this.x + 1511, this.y + 1176, false, "Crossover"));
  objects.push(new Object(this.x + 2032, this.y + 1289, true, "XOR Gate"));
  objects[objects.length - 1].solids[27].removeFromWorld();
  objects[objects.length - 1].solids.splice(27, 1);
  objects[objects.length - 1].removedSolids.push(27);
  objects[objects.length - 1].solids[1].removeFromWorld();
  objects[objects.length - 1].solids.splice(1, 1);
  objects[objects.length - 1].removedSolids.push(1);
  objects[objects.length - 1].solids[27].removeFromWorld();
  objects[objects.length - 1].solids.splice(27, 1);
  objects[objects.length - 1].removedSolids.push(27);
  objects[objects.length - 1].solids[27].removeFromWorld();
  objects[objects.length - 1].solids.splice(27, 1);
  objects[objects.length - 1].removedSolids.push(27);
  objects[objects.length - 1].solids[27].removeFromWorld();
  objects[objects.length - 1].solids.splice(27, 1);
  objects[objects.length - 1].removedSolids.push(27);
  objects[objects.length - 1].solids[28].removeFromWorld();
  objects[objects.length - 1].solids.splice(28, 1);
  objects[objects.length - 1].removedSolids.push(28);
  objects.push(new Object(this.x + 1724, this.y + 1257, false, "AND Gate"));
  objects.push(new Object(this.x + 1358, this.y + 2412, false, "Crossover"));
  objects.push(new Object(this.x + 1415, this.y + 2352, false, "Duplicator"));
  objects.push(new Object(this.x + 1808, this.y + 2817, false, "Crossover"));
  objects.push(new Object(this.x + 1374, this.y + 2875, false, "XOR Gate"));
  objects.push(new Object(this.x + 2518, this.y + 1460, true, "Duplicator"));
  objects.push(new Object(this.x + 1671, this.y + 2895, true, "AND Gate"));
  objects[objects.length - 1].solids[0].removeFromWorld();
  objects[objects.length - 1].solids.splice(0, 1);
  objects[objects.length - 1].removedSolids.push(0);
  objects[objects.length - 1].solids[0].removeFromWorld();
  objects[objects.length - 1].solids.splice(0, 1);
  objects[objects.length - 1].removedSolids.push(0);
  objects.push(new Object(this.x + 1355, this.y + 3276, true, "OR Gate"));
}

function draw() {
  background(200);


  if(!pause) {
    Engine.update(engine);
  }

  showEverything();


  fill(0);
  stroke(0);
  strokeWeight(2);

  var camX = cameraX * (-1);
  var camY = cameraY * (-1);

  ellipse(camX, camY, 5 * zoom);
  strokeWeight(1);
  // text("Object Type:" + objectType, 10, 30);
  // text("Thickness:" + universalThickness, 200, 30);
  //
  // text("Flip: " + flip, 350, 30);
  // text("Height: " + upperHeight, 500, 30);
  // text("Full: " + full, 700, 30);
  text("Zoom: " + zoom, 10, 30);
  text("Best Played fullscreened. Controls  P: play/pause  R: Reset Calculator  Up/down arrows: zoom  Click to add marbles and move cursor to screen edges to move around", 10, canvas.height - 30);

  // zoom *= 0.999;
}

function showEverything() {

  for(var i = 0; i < marbles.length; i++) {
    marbles[i].show();
  }
  for(var i = 0; i < solids.length; i++) {
    solids[i].show();
  }
  for(var i = 0; i < startingMarbles.length; i++) {
    startingMarbles[i].show();
  }
  for(var i = 0; i < looseRects.length; i++) {
    looseRects[i].show();
  }

  for(var i = 0; i < objects.length; i++) {
    objects[i].show();
  }

  if(!first) {
    strokeWeight(universalThickness);
    stroke(0);
    strokeCap(SQUARE);
    line(clickSaveX, clickSaveY, mouseX, mouseY);
    noStroke();
  }

  if(mouseX > canvas.width) {
    cameraX += 10;
  } else if(mouseX < 10) {
    cameraX -= 10;
  }
  if(mouseY > canvas.height) {
    cameraY += 10;
  } else if(mouseY < 10) {
    cameraY -= 10;
  }
}

function mousePressed() {
  // print(cameraX, cameraY);

  simulatedMouseX = (mouseX + cameraX) / zoom; // + cameraX;
  simulatedMouseY = (mouseY + cameraY) / zoom;

  switch(objectType) {

    case "Marble":
      marbles.push(new Marble(simulatedMouseX, simulatedMouseY, 20));
      break;
    case "Solid":
      if(first) {
        clickSaveX = floor(mouseX);
        clickSaveY = floor(mouseY);
      } else {
        solids.push(new Solid(clickSaveX + cameraX, clickSaveY + cameraY, floor(simulatedMouseX), floor(
          simulatedMouseY), universalThickness));
      }
      first = !first;
      break;
    case "LooseRect":
      if(first) {
        clickSaveX = floor(mouseX);
        clickSaveY = floor(mouseY);
      } else {
        looseRects.push(new LooseRect(clickSaveX + cameraX, clickSaveY + cameraY, floor(simulatedMouseX),
          floor(simulatedMouseY), universalThickness));
      }
      first = !first;
      break;
    case "StartingMarble":
      startingMarbles.push(new StartingMarble(simulatedMouseX, simulatedMouseY, 20));
      break;
    default:
      objects.push(new Object(floor(simulatedMouseX), floor(simulatedMouseY), flip, objectType));
      break;
  }
}


function keyPressed() {
  switch(key) {
    // case ' ':
    //   //print shit
    //   for(var i = 0; i < solids.length; i++) {
    //     print("solids.push(new Solid( this.x +" +
    //       solids[i].x1 + ", this.y + " +
    //       solids[i].y1 + ", this.x +  " +
    //       solids[i].x2 + ", this.y + " +
    //       solids[i].y2 + ", " + solids[i].height + "));");
    //   }
    //
    //
    //   for(var i = 0; i < startingMarbles.length; i++) {
    //     print("startingMarbles.push(new StartingMarble(  this.x + " +
    //       startingMarbles[i].startingX + ",  this.y + " +
    //       startingMarbles[i].startingY + ", " +
    //       startingMarbles[i].diameter + "));");
    //   }
    //
    //
    //   for(var i = 0; i < looseRects.length; i++) {
    //     print("looseRects.push(new LooseRect(  this.x + " +
    //       looseRects[i].startingX1 + ", this.y +  " +
    //       looseRects[i].startingY1 + ", this.x +  " +
    //       looseRects[i].startingX2 + ", this.y + " +
    //       looseRects[i].startingY2 + ", " + looseRects[i].height + "));");
    //   }
    //
    //   for(var i = 0; i < objects.length; i++) {
    //     objects[i].print();
    //   }
    //
    //   for(var i = 0; i < objects; i++) {
    //     objects[i].print();
    //   }
    //   break;
    // case 'R':
    //   if(selecting) {
    //     removeSelectedElement();
    //   }
    //   break;
    case 'R': //clear marbles
      clearShit();
      break;
      // case '1':
      //   objectType = "Marble";
      //   break;
      // case '2':
      //   objectType = "Solid";
      //   break;
      // case '3':
      //   objectType = "LooseRect";
      //   break;
      // case '4':
      //   objectType = "StartingMarble";
      //   break;
      // case '5':
      //   objectType = "OR Gate";
      //   break;
      // case 'X':
      //   objectType = "XOR Gate";
      //   break;
      // case '6':
      //   objectType = "AND Gate";
      //   break;
      // case '7':
      //   objectType = "NOT Gate";
      //   break;
      // case '8':
      //   objectType = "Duplicator";
      //   break;
      // case '9':
      //   objectType = "Crossover";
      //   break;
      // case '0':
      //   objectType = "Upper";
      //   break;
      // case 'H':
      //   objectType = "Half Adder";
      //   break;
      // case 'N':
      //   if(objectType == "Upper") {
      //     if(upperHeight > 250) {
      //       upperHeight -= 250;
      //     }
      //   } else {
      //     if(universalThickness > 1) {
      //       universalThickness--;
      //     }
      //   }
      //   break;
      // case 'M':
      //   if(objectType == "Upper") {
      //     upperHeight += 250;
      //   } else {
      //     universalThickness++;
      //   }
      //   break;
    case 'P':
      pause = !pause;
      break;
      // case 'F':
      //   flip = !flip;
      //   break;
      // case 'S':
      //   selecting = !selecting;
      //   if(selecting) {
      //     selectNumber = 0;
      //     selectArray();
      //   } else {
      //     selectNumber = 0;
      //     for(var i = 0; i < selectedArray.length; i++) {
      //       selectedArray[i].selected = false;
      //     }
      //   }
      //   break;
      // case 'Z':
      //   if(selecting && selectedArray == objects) {
      //     entered = !entered;
      //     enterObject();
      //   } else {
      //     entered = false;
      //   }
      //   break;
      // case 'A':
      //   simulatedMouseX = mouseX + cameraX;
      //   simulatedMouseY = mouseY + cameraY;
      //   if(full) {
      //     fullAdder(simulatedMouseX, simulatedMouseY);
      //   } else {
      //     halfAdder(simulatedMouseX, simulatedMouseY);
      //   }
      //   break;
      // case 'Q':
      //   if(full) {
      //     removeFullAdder();
      //   } else {
      //     removeHalfAdder();
      //   }
      //   break;
      // case 'W':
      //   full = !full;
      //   break;
  }

  if(keyCode === UP_ARROW) {
    zoom += 0.1;

  } else if(keyCode === DOWN_ARROW) {
    if(zoom > 0.15) {
      zoom -= 0.1;
    }
  }
  // if(keyCode === LEFT_ARROW) {
  //   if(entered) {
  //     if(enterNumber < selectedArray[selectedArray.length - 1 - selectNumber].solids.length) {
  //       enterNumber += 1;
  //       enterObject();
  //     }
  //   } else {
  //     if(selecting) {
  //       if(selectNumber < selectedArray.length - 1) {
  //         selectNumber += 1;
  //       }
  //       selectElement();
  //
  //     }
  //   }
  // } else if(keyCode === RIGHT_ARROW) {
  //   if(selecting) {
  //     if(entered) {
  //       if(enterNumber > 0) {
  //         enterNumber -= 1;
  //         enterObject();
  //       }
  //     } else {
  //       if(selectNumber > 0) {
  //         selectNumber -= 1;
  //       }
  //       selectElement();
  //     }
  //   }
  // }
  return false;
}


function removeSelectedElement() {
  if(entered) {
    selectedArray[selectedArray.length - 1 - selectNumber].solids[enterNumber].removeFromWorld();
    selectedArray[selectedArray.length - 1 - selectNumber].solids.splice(enterNumber, 1);
    entered = false;
    selectedArray[selectedArray.length - 1 - selectNumber].removedSolids.push(enterNumber);
    return;
  }
  if(selectedArray.length > selectNumber) {
    selectedArray[selectedArray.length - 1 - selectNumber].removeFromWorld();
    selectedArray.splice(selectedArray.length - 1 - selectNumber, 1);
    selectElement();
  }



  // selecting = false;

}

function enterObject() {
  for(var i = 0; i < objects[selectedArray.length - 1 - selectNumber].solids.length; i++) {
    objects[selectedArray.length - 1 - selectNumber].solids[i].selected = false;
  }
  if(entered) {
    if(objects[selectedArray.length - 1 - selectNumber].solids.length > enterNumber) {
      objects[selectedArray.length - 1 - selectNumber].solids[enterNumber].selected = true;
    }
  }
}

function selectElement() {
  for(var i = 0; i < selectedArray.length; i++) {
    selectedArray[i].selected = false;
  }
  if(selectedArray.length > selectedArray.length - 1 - selectNumber) {
    selectedArray[selectedArray.length - 1 - selectNumber].selected = true;
  }
}

function selectArray() {
  first = true;
  switch(objectType) {
    case "Marble":
      selectedArray = marbles;
      break;
    case "Solid":
      selectedArray = solids;
      break;
    case "LooseRect":
      selectedArray = looseRects;
      break;
    case "StartingMarble":
      selectedArray = startingMarbles;
      break;
    default:
      selectedArray = objects;
      break;
  }
  selectNumber = 0;
  selectElement();
}

function clearShit() {
  while(marbles.length > 0) {
    marbles.pop().removeFromWorld();
  }
  for(var i = 0; i < startingMarbles.length; i++) {
    startingMarbles[i].reset();

  }
  for(var i = 0; i < looseRects.length; i++) {
    looseRects[i].reset();
  }

  for(var i = 0; i < objects.length; i++) {
    objects[i].reset();
  }
}

function removeFullAdder() {

  for(var i = 0; i < 112; i++) {
    solids.pop().removeFromWorld();
  }
  for(var i = 0; i < 0; i++) {
    startingMarbles.pop().removeFromWorld();
  }
  for(var i = 0; i < 0; i++) {
    looseRects.pop().removeFromWorld();
  }
  for(var i = 0; i < 13; i++) {
    objects.pop().removeFromWorld();
  }

}


function removeHalfAdder() {
  for(var i = 0; i < 45; i++) {
    solids.pop().removeFromWorld();
  }
  for(var i = 0; i < 1; i++) {
    startingMarbles.pop().removeFromWorld();
  }
  for(var i = 0; i < 0; i++) {
    looseRects.pop().removeFromWorld();
  }
  for(var i = 0; i < 8; i++) {
    objects.pop().removeFromWorld();
  }
}

function halfAdder(x, y) {
  this.x = x - 850;
  this.y = y - 200;
  solids.push(new Solid(this.x + 1545, this.y + 469, this.x + 1705, this.y + 405, 10));
  solids.push(new Solid(this.x + 1511, this.y + 456, this.x + 1633, this.y + 381, 10));
  solids.push(new Solid(this.x + 1399, this.y + 424, this.x + 1385, this.y + 405, 10));
  solids.push(new Solid(this.x + 1431, this.y + 429, this.x + 1433, this.y + 341, 10));
  solids.push(new Solid(this.x + 1560, this.y + 562, this.x + 1698, this.y + 602, 10));
  solids.push(new Solid(this.x + 1768, this.y + 602, this.x + 1917, this.y + 424, 10));
  solids.push(new Solid(this.x + 1730, this.y + 607, this.x + 1733, this.y + 546, 10));
  solids.push(new Solid(this.x + 1330, this.y + 634, this.x + 1450, this.y + 631, 10));
  solids.push(new Solid(this.x + 1514, this.y + 562, this.x + 1493, this.y + 605, 10));
  solids.push(new Solid(this.x + 1496, this.y + 599, this.x + 1445, this.y + 631, 10));
  solids.push(new Solid(this.x + 1416, this.y + 634, this.x + 1466, this.y + 618, 10));
  solids.push(new Solid(this.x + 1480, this.y + 613, this.x + 1506, this.y + 578, 10));
  solids.push(new Solid(this.x + 1288, this.y + 637, this.x + 1296, this.y + 607, 5));
  solids.push(new Solid(this.x + 1178, this.y + 426, this.x + 1176, this.y + 509, 9));
  solids.push(new Solid(this.x + 1237, this.y + 391, this.x + 1218, this.y + 413, 9));
  solids.push(new Solid(this.x + 1176, this.y + 490, this.x + 1189, this.y + 530, 9));
  solids.push(new Solid(this.x + 1186, this.y + 522, this.x + 1213, this.y + 554, 9));
  solids.push(new Solid(this.x + 1205, this.y + 543, this.x + 1248, this.y + 578, 9));
  solids.push(new Solid(this.x + 1434, this.y + 341, this.x + 1493, this.y + 311, 9));
  solids.push(new Solid(this.x + 1488, this.y + 306, this.x + 1504, this.y + 234, 9));
  solids.push(new Solid(this.x + 1608, this.y + 306, this.x + 1653, this.y + 335, 9));
  solids.push(new Solid(this.x + 1600, this.y + 287, this.x + 1586, this.y + 229, 9));
  solids.push(new Solid(this.x + 1287, this.y + 635, this.x + 1303, this.y + 539, 9));
  solids.push(new Solid(this.x + 1257, this.y + 631, this.x + 1245, this.y + 573, 9));
  solids.push(new Solid(this.x + 1559, this.y + 982, this.x + 1553, this.y + 912, 9));
  solids.push(new Solid(this.x + 1925, this.y + 910, this.x + 1941, this.y + 986, 9));
  solids.push(new Solid(this.x + 1939, this.y + 984, this.x + 1967, this.y + 1032, 9));
  solids.push(new Solid(this.x + 1967, this.y + 1032, this.x + 2021, this.y + 1064, 9));
  solids.push(new Solid(this.x + 2079, this.y + 1036, this.x + 2107, this.y + 1074, 9));
  solids.push(new Solid(this.x + 2107, this.y + 1074, this.x + 2123, this.y + 1128, 9));
  solids.push(new Solid(this.x + 2123, this.y + 1128, this.x + 2115, this.y + 1178, 9));
  solids.push(new Solid(this.x + 2115, this.y + 1174, this.x + 2081, this.y + 1218, 9));
  solids.push(new Solid(this.x + 2083, this.y + 1216, this.x + 2015, this.y + 1252, 9));
  solids.push(new Solid(this.x + 2021, this.y + 1248, this.x + 1969, this.y + 1258, 9));
  solids.push(new Solid(this.x + 1829, this.y + 1352, this.x + 1861, this.y + 1316, 9));
  solids.push(new Solid(this.x + 1997, this.y + 1254, this.x + 2057, this.y + 1232, 9));
  solids.push(new Solid(this.x + 2063, this.y + 1230, this.x + 2095, this.y + 1198, 9));
  solids.push(new Solid(this.x + 2101, this.y + 1190, this.x + 2121, this.y + 1146, 9));
  solids.push(new Solid(this.x + 2121, this.y + 1138, this.x + 2119, this.y + 1098, 9));
  solids.push(new Solid(this.x + 1935, this.y + 968, this.x + 1955, this.y + 1014, 9));
  solids.push(new Solid(this.x + 1955, this.y + 1014, this.x + 1997, this.y + 1052, 9));
  solids.push(new Solid(this.x + 2003, this.y + 1054, this.x + 2039, this.y + 1060, 9));
  solids.push(new Solid(this.x + 1621, this.y + 1314, this.x + 1697, this.y + 1330, 9));
  solids.push(new Solid(this.x + 1355, this.y + 1775, this.x + 1373, this.y + 1743, 4));
  solids.push(new Solid(this.x + 1318, this.y + 1760, this.x + 1320, this.y + 1720, 4));
  startingMarbles.push(new StartingMarble(this.x + 1759, this.y + 1130, 20));
  objects.push(new Object(this.x + 1527, this.y + 77, false, "Duplicator"));
  objects[objects.length - 1].solids[14].removeFromWorld();
  objects[objects.length - 1].solids.splice(14, 1);
  objects[objects.length - 1].solids[15].removeFromWorld();
  objects[objects.length - 1].solids.splice(15, 1);
  objects.push(new Object(this.x + 1567, this.y + 82, true, "Duplicator"));
  objects[objects.length - 1].solids[16].removeFromWorld();
  objects[objects.length - 1].solids.splice(16, 1);
  objects[objects.length - 1].solids[15].removeFromWorld();
  objects[objects.length - 1].solids.splice(15, 1);
  objects[objects.length - 1].solids[13].removeFromWorld();
  objects[objects.length - 1].solids.splice(13, 1);
  objects.push(new Object(this.x + 1449, this.y + 536, false, "Crossover"));
  objects.push(new Object(this.x + 1682, this.y + 544, false, "OR Gate"));
  objects.push(new Object(this.x + 1237, this.y + 597, false, "AND Gate"));
  objects.push(new Object(this.x + 1559, this.y + 924, false, "NOT Gate"));
  objects[objects.length - 1].solids[15].removeFromWorld();
  objects[objects.length - 1].solids.splice(15, 1);
  objects.push(new Object(this.x + 1845, this.y + 1316, true, "AND Gate"));
  upperHeight = 1000;
  objects.push(new Object(this.x + 1551, this.y + 435, true, "Upper"));
}

function fullAdder(x, y) {
  this.x = x;
  this.y = y;

  solids.push(new Solid(this.x + 800, this.y + 438, this.x + 789, this.y + 380, 10));
  solids.push(new Solid(this.x + 835, this.y + 438, this.x + 859, this.y + 361, 10));
  solids.push(new Solid(this.x + 947, this.y + 484, this.x + 1112, this.y + 438, 10));
  solids.push(new Solid(this.x + 1109, this.y + 438, this.x + 1107, this.y + 401, 10));
  solids.push(new Solid(this.x + 1048, this.y + 404, this.x + 915, this.y + 446, 10));
  solids.push(new Solid(this.x + 915, this.y + 446, this.x + 915, this.y + 473, 10));
  solids.push(new Solid(this.x + 1009, this.y + 617, this.x + 961, this.y + 574, 10));
  solids.push(new Solid(this.x + 1172, this.y + 534, this.x + 1329, this.y + 422, 10));
  solids.push(new Solid(this.x + 1329, this.y + 422, this.x + 1321, this.y + 387, 10));
  solids.push(new Solid(this.x + 905, this.y + 622, this.x + 916, this.y + 571, 10));
  solids.push(new Solid(this.x + 641, this.y + 656, this.x + 578, this.y + 389, 10));
  solids.push(new Solid(this.x + 686, this.y + 668, this.x + 635, this.y + 395, 10));
  solids.push(new Solid(this.x + 803, this.y + 647, this.x + 908, this.y + 614, 10));
  solids.push(new Solid(this.x + 755, this.y + 662, this.x + 761, this.y + 602, 10));
  solids.push(new Solid(this.x + 1154, this.y + 671, this.x + 1175, this.y + 533, 10));
  solids.push(new Solid(this.x + 1007, this.y + 614, this.x + 1082, this.y + 626, 10));
  solids.push(new Solid(this.x + 1082, this.y + 623, this.x + 1082, this.y + 665, 10));
  solids.push(new Solid(this.x + 1115, this.y + 665, this.x + 1115, this.y + 557, 6));
  solids.push(new Solid(this.x + 683, this.y + 1676, this.x + 686, this.y + 1646, 10));
  solids.push(new Solid(this.x + 647, this.y + 1676, this.x + 638, this.y + 1628, 10));
  solids.push(new Solid(this.x + 1421, this.y + 998, this.x + 1316, this.y + 1538, 10));
  solids.push(new Solid(this.x + 1316, this.y + 1538, this.x + 1013, this.y + 1664, 10));
  solids.push(new Solid(this.x + 1013, this.y + 1667, this.x + 794, this.y + 1721, 10));
  solids.push(new Solid(this.x + 761, this.y + 1706, this.x + 794, this.y + 1646, 10));
  solids.push(new Solid(this.x + 860, this.y + 1796, this.x + 818, this.y + 1766, 10));
  solids.push(new Solid(this.x + 1133, this.y + 2081, this.x + 1130, this.y + 1997, 10));
  solids.push(new Solid(this.x + 1094, this.y + 2074, this.x + 1084, this.y + 2034, 10));
  solids.push(new Solid(this.x + 1328, this.y + 2248, this.x + 1333, this.y + 2176, 10));
  solids.push(new Solid(this.x + 1285, this.y + 2234, this.x + 1261, this.y + 2216, 10));
  solids.push(new Solid(this.x + 1990, this.y + 604, this.x + 1822, this.y + 622, 10));
  solids.push(new Solid(this.x + 1822, this.y + 622, this.x + 1762, this.y + 748, 10));
  solids.push(new Solid(this.x + 1762, this.y + 748, this.x + 1756, this.y + 904, 10));
  solids.push(new Solid(this.x + 1799, this.y + 919, this.x + 1807, this.y + 757, 10));
  solids.push(new Solid(this.x + 1807, this.y + 757, this.x + 1849, this.y + 672, 10));
  solids.push(new Solid(this.x + 1849, this.y + 672, this.x + 2004, this.y + 654, 10));
  solids.push(new Solid(this.x + 1244, this.y + 2125, this.x + 1479, this.y + 1725, 10));
  solids.push(new Solid(this.x + 1474, this.y + 1737, this.x + 1527, this.y + 1175, 10));
  solids.push(new Solid(this.x + 1209, this.y + 2117, this.x + 1422, this.y + 1735, 10));
  solids.push(new Solid(this.x + 1422, this.y + 1735, this.x + 1469, this.y + 1174, 10));
  solids.push(new Solid(this.x + 1442, this.y + 2239, this.x + 2029, this.y + 1984, 10));
  solids.push(new Solid(this.x + 1399, this.y + 2256, this.x + 1399, this.y + 2179, 10));
  solids.push(new Solid(this.x + 1424, this.y + 2394, this.x + 1454, this.y + 2426, 10));
  solids.push(new Solid(this.x + 1267, this.y + 2416, this.x + 1307, this.y + 2396, 10));
  solids.push(new Solid(this.x + 1206, this.y + 2247, this.x + 1214, this.y + 2205, 10));
  solids.push(new Solid(this.x + 919, this.y + 2305, this.x + 871, this.y + 2085, 6));
  solids.push(new Solid(this.x + 929, this.y + 2085, this.x + 964, this.y + 2255, 6));
  solids.push(new Solid(this.x + 683, this.y + 2705, this.x + 693, this.y + 2633, 6));
  solids.push(new Solid(this.x + 606, this.y + 2705, this.x + 458, this.y + 2460, 13));
  solids.push(new Solid(this.x + 820, this.y + 642, this.x + 789, this.y + 651, 10));
  solids.push(new Solid(this.x + 318, this.y + 1447, this.x + 380, this.y + 1464, 10));
  solids.push(new Solid(this.x + 956, this.y + 1473, this.x + 1021, this.y + 1451, 10));
  solids.push(new Solid(this.x + 756, this.y + 1594, this.x + 685, this.y + 1618, 10));
  solids.push(new Solid(this.x + 556, this.y + 1594, this.x + 640, this.y + 1618, 10));
  solids.push(new Solid(this.x + 830, this.y + 1948, this.x + 874, this.y + 1986, 10));
  solids.push(new Solid(this.x + 1063, this.y + 3038, this.x + 1138, this.y + 3067, 10));
  solids.push(new Solid(this.x + 1690, this.y + 3060, this.x + 1790, this.y + 3027, 10));
  solids.push(new Solid(this.x + 192, this.y + 3249, this.x + 190, this.y + 3285, 10));
  solids.push(new Solid(this.x + 190, this.y + 3285, this.x + 145, this.y + 3285, 10));
  solids.push(new Solid(this.x + 145, this.y + 3285, this.x + 158, this.y + 3227, 10));
  solids.push(new Solid(this.x + 1740, this.y + 1297, this.x + 1691, this.y + 1690, 10));
  solids.push(new Solid(this.x + 1691, this.y + 1690, this.x + 1665, this.y + 1779, 10));
  solids.push(new Solid(this.x + 1672, this.y + 1772, this.x + 1612, this.y + 1825, 10));
  solids.push(new Solid(this.x + 1618, this.y + 1818, this.x + 1551, this.y + 1830, 10));
  solids.push(new Solid(this.x + 1558, this.y + 1828, this.x + 1507, this.y + 1818, 10));
  solids.push(new Solid(this.x + 1534, this.y + 1827, this.x + 1581, this.y + 1828, 10));
  solids.push(new Solid(this.x + 1592, this.y + 1823, this.x + 1638, this.y + 1807, 10));
  solids.push(new Solid(this.x + 1638, this.y + 1807, this.x + 1676, this.y + 1758, 10));
  solids.push(new Solid(this.x + 1722, this.y + 1095, this.x + 1780, this.y + 1062, 10));
  solids.push(new Solid(this.x + 1206, this.y + 2244, this.x + 1181, this.y + 2292, 10));
  solids.push(new Solid(this.x + 1186, this.y + 2288, this.x + 1128, this.y + 2312, 10));
  solids.push(new Solid(this.x + 1131, this.y + 2312, this.x + 1078, this.y + 2304, 10));
  solids.push(new Solid(this.x + 1019, this.y + 2248, this.x + 978, this.y + 2249, 10));
  solids.push(new Solid(this.x + 989, this.y + 2249, this.x + 965, this.y + 2276, 10));
  solids.push(new Solid(this.x + 965, this.y + 2273, this.x + 957, this.y + 2307, 10));
  solids.push(new Solid(this.x + 1080, this.y + 2304, this.x + 1050, this.y + 2294, 10));
  solids.push(new Solid(this.x + 1106, this.y + 2308, this.x + 1146, this.y + 2307, 10));
  solids.push(new Solid(this.x + 1166, this.y + 2300, this.x + 1195, this.y + 2272, 10));
  solids.push(new Solid(this.x + 976, this.y + 2262, this.x + 1000, this.y + 2246, 10));
  solids.push(new Solid(this.x + 960, this.y + 2289, this.x + 974, this.y + 2262, 10));
  solids.push(new Solid(this.x + 992, this.y + 2394, this.x + 1000, this.y + 2306, 10));
  solids.push(new Solid(this.x + 1001, this.y + 2307, this.x + 990, this.y + 2323, 10));
  solids.push(new Solid(this.x + 762, this.y + 1812, this.x + 702, this.y + 2144, 10));
  solids.push(new Solid(this.x + 706, this.y + 2138, this.x + 658, this.y + 2194, 10));
  solids.push(new Solid(this.x + 658, this.y + 2194, this.x + 594, this.y + 2190, 10));
  solids.push(new Solid(this.x + 720, this.y + 1803, this.x + 723, this.y + 1845, 10));
  solids.push(new Solid(this.x + 706, this.y + 2123, this.x + 672, this.y + 2179, 10));
  solids.push(new Solid(this.x + 679, this.y + 2173, this.x + 627, this.y + 2194, 10));
  solids.push(new Solid(this.x + 583, this.y + 2174, this.x + 611, this.y + 2192, 10));
  solids.push(new Solid(this.x + 602, this.y + 2187, this.x + 640, this.y + 2189, 10));
  solids.push(new Solid(this.x + 594, this.y + 2181, this.x + 573, this.y + 2146, 10));
  solids.push(new Solid(this.x + 575, this.y + 2150, this.x + 619, this.y + 2194, 10));
  solids.push(new Solid(this.x + 600, this.y + 2178, this.x + 634, this.y + 2189, 10));
  solids.push(new Solid(this.x + 621, this.y + 2186, this.x + 659, this.y + 2184, 10));
  solids.push(new Solid(this.x + 661, this.y + 2179, this.x + 691, this.y + 2150, 10));
  solids.push(new Solid(this.x + 470, this.y + 2476, this.x + 434, this.y + 2340, 10));
  solids.push(new Solid(this.x + 442, this.y + 2368, this.x + 422, this.y + 2208, 10));
  solids.push(new Solid(this.x + 422, this.y + 2228, this.x + 434, this.y + 2072, 10));
  solids.push(new Solid(this.x + 426, this.y + 2160, this.x + 430, this.y + 2292, 10));
  solids.push(new Solid(this.x + 1007, this.y + 2248, this.x + 1047, this.y + 2246, 10));
  solids.push(new Solid(this.x + 1462, this.y + 1754, this.x + 1407, this.y + 1862, 10));
  solids.push(new Solid(this.x + 1740, this.y + 1304, this.x + 1745, this.y + 1182, 10));
  solids.push(new Solid(this.x + 1458, this.y + 1763, this.x + 1410, this.y + 1865, 10));
  solids.push(new Solid(this.x + 1398, this.y + 2180, this.x + 1284, this.y + 2054, 10));
  solids.push(new Solid(this.x + 1497, this.y + 1759, this.x + 1449, this.y + 1783, 10));
  solids.push(new Solid(this.x + 1464, this.y + 1774, this.x + 1437, this.y + 1810, 10));
  solids.push(new Solid(this.x + 1434, this.y + 1813, this.x + 1416, this.y + 1870, 10));
  solids.push(new Solid(this.x + 1416, this.y + 1858, this.x + 1425, this.y + 1933, 10));
  solids.push(new Solid(this.x + 1422, this.y + 1918, this.x + 1473, this.y + 1972, 10));
  solids.push(new Solid(this.x + 1470, this.y + 1969, this.x + 1500, this.y + 1969, 10));
  solids.push(new Solid(this.x + 1452, this.y + 1954, this.x + 1485, this.y + 1972, 10));
  solids.push(new Solid(this.x + 1494, this.y + 1774, this.x + 1446, this.y + 1792, 10));
  solids.push(new Solid(this.x + 1470, this.y + 1783, this.x + 1428, this.y + 1810, 10));
  objects.push(new Object(this.x + 933, this.y + 46, false, "Duplicator"));
  objects.push(new Object(this.x + 965, this.y + 49, true, "Duplicator"));
  objects.push(new Object(this.x + 851, this.y + 548, false, "Crossover"));
  objects.push(new Object(this.x + 1372, this.y + 661, true, "XOR Gate"));
  objects.push(new Object(this.x + 1064, this.y + 629, false, "AND Gate"));
  objects.push(new Object(this.x + 698, this.y + 1784, false, "Crossover"));
  objects.push(new Object(this.x + 755, this.y + 1724, false, "Duplicator"));
  objects.push(new Object(this.x + 1148, this.y + 2189, false, "Crossover"));
  objects.push(new Object(this.x + 714, this.y + 2247, false, "XOR Gate"));
  objects.push(new Object(this.x + 1858, this.y + 832, true, "Duplicator"));
  objects.push(new Object(this.x + 1011, this.y + 2267, true, "AND Gate"));
  objects[objects.length - 1].solids[0].removeFromWorld();
  objects[objects.length - 1].solids.splice(0, 1);
  objects[objects.length - 1].solids[0].removeFromWorld();
  objects[objects.length - 1].solids.splice(0, 1);
  objects.push(new Object(this.x + 695, this.y + 2648, true, "OR Gate"));
  upperHeight = 2000;
  objects.push(new Object(this.x + 647, this.y + 674, true, "Upper"));

  //
  // solids.push(new Solid(this.x + 1399, this.y + 538, this.x + 1388, this.y + 480, 10));
  // solids.push(new Solid(this.x + 1434, this.y + 538, this.x + 1458, this.y + 461, 10));
  // solids.push(new Solid(this.x + 1546, this.y + 584, this.x + 1711, this.y + 538, 10));
  // solids.push(new Solid(this.x + 1708, this.y + 538, this.x + 1706, this.y + 501, 10));
  // solids.push(new Solid(this.x + 1647, this.y + 504, this.x + 1514, this.y + 546, 10));
  // solids.push(new Solid(this.x + 1514, this.y + 546, this.x + 1514, this.y + 573, 10));
  // solids.push(new Solid(this.x + 1608, this.y + 717, this.x + 1560, this.y + 674, 10));
  // solids.push(new Solid(this.x + 1771, this.y + 634, this.x + 1928, this.y + 522, 10));
  // solids.push(new Solid(this.x + 1928, this.y + 522, this.x + 1920, this.y + 487, 10));
  // solids.push(new Solid(this.x + 1504, this.y + 722, this.x + 1515, this.y + 671, 10));
  // solids.push(new Solid(this.x + 1240, this.y + 756, this.x + 1177, this.y + 489, 10));
  // solids.push(new Solid(this.x + 1285, this.y + 768, this.x + 1234, this.y + 495, 10));
  // solids.push(new Solid(this.x + 1402, this.y + 747, this.x + 1507, this.y + 714, 10));
  // solids.push(new Solid(this.x + 1354, this.y + 762, this.x + 1360, this.y + 702, 10));
  // solids.push(new Solid(this.x + 1753, this.y + 771, this.x + 1774, this.y + 633, 10));
  // solids.push(new Solid(this.x + 1606, this.y + 714, this.x + 1681, this.y + 726, 10));
  // solids.push(new Solid(this.x + 1681, this.y + 723, this.x + 1681, this.y + 765, 10));
  // solids.push(new Solid(this.x + 1714, this.y + 765, this.x + 1714, this.y + 657, 6));
  // solids.push(new Solid(this.x + 1282, this.y + 1776, this.x + 1285, this.y + 1746, 10));
  // solids.push(new Solid(this.x + 1246, this.y + 1776, this.x + 1237, this.y + 1728, 10));
  // solids.push(new Solid(this.x + 2020, this.y + 1098, this.x + 1915, this.y + 1638, 10));
  // solids.push(new Solid(this.x + 1915, this.y + 1638, this.x + 1612, this.y + 1764, 10));
  // solids.push(new Solid(this.x + 1612, this.y + 1767, this.x + 1393, this.y + 1821, 10));
  // solids.push(new Solid(this.x + 1360, this.y + 1806, this.x + 1393, this.y + 1746, 10));
  // solids.push(new Solid(this.x + 1459, this.y + 1896, this.x + 1417, this.y + 1866, 10));
  // solids.push(new Solid(this.x + 1732, this.y + 2181, this.x + 1729, this.y + 2097, 10));
  // solids.push(new Solid(this.x + 1693, this.y + 2174, this.x + 1683, this.y + 2134, 10));
  // solids.push(new Solid(this.x + 1927, this.y + 2348, this.x + 1932, this.y + 2276, 10));
  // solids.push(new Solid(this.x + 1884, this.y + 2334, this.x + 1860, this.y + 2316, 10));
  // solids.push(new Solid(this.x + 2589, this.y + 704, this.x + 2421, this.y + 722, 10));
  // solids.push(new Solid(this.x + 2421, this.y + 722, this.x + 2361, this.y + 848, 10));
  // solids.push(new Solid(this.x + 2361, this.y + 848, this.x + 2355, this.y + 1004, 10));
  // solids.push(new Solid(this.x + 2398, this.y + 1019, this.x + 2406, this.y + 857, 10));
  // solids.push(new Solid(this.x + 2406, this.y + 857, this.x + 2448, this.y + 772, 10));
  // solids.push(new Solid(this.x + 2448, this.y + 772, this.x + 2603, this.y + 754, 10));
  // solids.push(new Solid(this.x + 1843, this.y + 2225, this.x + 2078, this.y + 1825, 10));
  // solids.push(new Solid(this.x + 2073, this.y + 1837, this.x + 2126, this.y + 1275, 10));
  // solids.push(new Solid(this.x + 1808, this.y + 2217, this.x + 2021, this.y + 1835, 10));
  // solids.push(new Solid(this.x + 2021, this.y + 1835, this.x + 2068, this.y + 1274, 10));
  // solids.push(new Solid(this.x + 2041, this.y + 2339, this.x + 2628, this.y + 2084, 10));
  // solids.push(new Solid(this.x + 1998, this.y + 2356, this.x + 1998, this.y + 2279, 10));
  // solids.push(new Solid(this.x + 2023, this.y + 2494, this.x + 2053, this.y + 2526, 10));
  // solids.push(new Solid(this.x + 1866, this.y + 2516, this.x + 1906, this.y + 2496, 10));
  // solids.push(new Solid(this.x + 1805, this.y + 2347, this.x + 1813, this.y + 2305, 10));
  // solids.push(new Solid(this.x + 1593, this.y + 2527, this.x + 1573, this.y + 2600, 10));
  // solids.push(new Solid(this.x + 1478, this.y + 2667, this.x + 1538, this.y + 2640, 10));
  // solids.push(new Solid(this.x + 1518, this.y + 2405, this.x + 1470, this.y + 2185, 6));
  // solids.push(new Solid(this.x + 1528, this.y + 2185, this.x + 1563, this.y + 2355, 6));
  // solids.push(new Solid(this.x + 1282, this.y + 2805, this.x + 1292, this.y + 2733, 6));
  // solids.push(new Solid(this.x + 1205, this.y + 2805, this.x + 1057, this.y + 2560, 13));
  // solids.push(new Solid(this.x + 1922, this.y + 3443, this.x + 1904, this.y + 3635, 13));
  // solids.push(new Solid(this.x + 1904, this.y + 3635, this.x + 2102, this.y + 3635, 13));
  // solids.push(new Solid(this.x + 2102, this.y + 3635, this.x + 2096, this.y + 3401, 13));
  // solids.push(new Solid(this.x + 2036, this.y + 3743, this.x + 1952, this.y + 3737, 13));
  // solids.push(new Solid(this.x + 1952, this.y + 3737, this.x + 1946, this.y + 3839, 13));
  // solids.push(new Solid(this.x + 1946, this.y + 3839, this.x + 2006, this.y + 3839, 13));
  // solids.push(new Solid(this.x + 2018, this.y + 3839, this.x + 2000, this.y + 3923, 13));
  // solids.push(new Solid(this.x + 2000, this.y + 3923, this.x + 1910, this.y + 3911, 13));
  // solids.push(new Solid(this.x + 1215, this.y + 939, this.x + 1262, this.y + 910, 10));
  // solids.push(new Solid(this.x + 1380, this.y + 901, this.x + 1409, this.y + 930, 10));
  // solids.push(new Solid(this.x + 1419, this.y + 742, this.x + 1388, this.y + 751, 10));
  // solids.push(new Solid(this.x + 1617, this.y + 384, this.x + 1651, this.y + 406, 10));
  // solids.push(new Solid(this.x + 1442, this.y + 410, this.x + 1484, this.y + 377, 10));
  // solids.push(new Solid(this.x + 917, this.y + 1547, this.x + 979, this.y + 1564, 10));
  // solids.push(new Solid(this.x + 1555, this.y + 1573, this.x + 1620, this.y + 1551, 10));
  // solids.push(new Solid(this.x + 1355, this.y + 1694, this.x + 1284, this.y + 1718, 10));
  // solids.push(new Solid(this.x + 1155, this.y + 1694, this.x + 1239, this.y + 1718, 10));
  // solids.push(new Solid(this.x + 1429, this.y + 2048, this.x + 1473, this.y + 2086, 10));
  // solids.push(new Solid(this.x + 1662, this.y + 3138, this.x + 1737, this.y + 3167, 10));
  // solids.push(new Solid(this.x + 2289, this.y + 3160, this.x + 2389, this.y + 3127, 10));
  // solids.push(new Solid(this.x + 791, this.y + 3349, this.x + 789, this.y + 3385, 10));
  // solids.push(new Solid(this.x + 789, this.y + 3385, this.x + 744, this.y + 3385, 10));
  // solids.push(new Solid(this.x + 744, this.y + 3385, this.x + 757, this.y + 3327, 10));
  // solids.push(new Solid(this.x + 1329, this.y + 2107, this.x + 1300, this.y + 2202, 10));
  // solids.push(new Solid(this.x + 1300, this.y + 2200, this.x + 1235, this.y + 2256, 10));
  // solids.push(new Solid(this.x + 1235, this.y + 2254, this.x + 1160, this.y + 2263, 10));
  // solids.push(new Solid(this.x + 1117, this.y + 2291, this.x + 1051, this.y + 2271, 10));
  // solids.push(new Solid(this.x + 1051, this.y + 2271, this.x + 1013, this.y + 2233, 10));
  // solids.push(new Solid(this.x + 1013, this.y + 2233, this.x + 984, this.y + 2156, 10));
  // solids.push(new Solid(this.x + 2339, this.y + 1397, this.x + 2290, this.y + 1790, 10));
  // solids.push(new Solid(this.x + 2290, this.y + 1790, this.x + 2264, this.y + 1879, 10));
  // solids.push(new Solid(this.x + 2271, this.y + 1872, this.x + 2211, this.y + 1925, 10));
  // solids.push(new Solid(this.x + 2217, this.y + 1918, this.x + 2150, this.y + 1930, 10));
  // solids.push(new Solid(this.x + 2157, this.y + 1928, this.x + 2106, this.y + 1918, 10));
  // solids.push(new Solid(this.x + 2133, this.y + 1927, this.x + 2180, this.y + 1928, 10));
  // solids.push(new Solid(this.x + 2191, this.y + 1923, this.x + 2237, this.y + 1907, 10));
  // solids.push(new Solid(this.x + 2237, this.y + 1907, this.x + 2275, this.y + 1858, 10));
  // solids.push(new Solid(this.x + 2054, this.y + 1875, this.x + 2032, this.y + 1952, 10));
  // solids.push(new Solid(this.x + 2321, this.y + 1195, this.x + 2379, this.y + 1162, 10));
  // solids.push(new Solid(this.x + 1683, this.y + 904, this.x + 1705, this.y + 962, 10));
  // solids.push(new Solid(this.x + 1745, this.y + 1001, this.x + 1799, this.y + 1026, 10));
  // solids.push(new Solid(this.x + 1805, this.y + 2344, this.x + 1780, this.y + 2392, 10));
  // solids.push(new Solid(this.x + 1785, this.y + 2388, this.x + 1727, this.y + 2412, 10));
  // solids.push(new Solid(this.x + 1730, this.y + 2412, this.x + 1677, this.y + 2404, 10));
  // solids.push(new Solid(this.x + 1618, this.y + 2348, this.x + 1577, this.y + 2349, 10));
  // solids.push(new Solid(this.x + 1588, this.y + 2349, this.x + 1564, this.y + 2376, 10));
  // solids.push(new Solid(this.x + 1564, this.y + 2373, this.x + 1556, this.y + 2407, 10));
  // solids.push(new Solid(this.x + 1679, this.y + 2404, this.x + 1649, this.y + 2394, 10));
  // solids.push(new Solid(this.x + 1705, this.y + 2408, this.x + 1745, this.y + 2407, 10));
  // solids.push(new Solid(this.x + 1765, this.y + 2400, this.x + 1794, this.y + 2372, 10));
  // solids.push(new Solid(this.x + 1575, this.y + 2362, this.x + 1599, this.y + 2346, 10));
  // solids.push(new Solid(this.x + 1559, this.y + 2389, this.x + 1573, this.y + 2362, 10));
  // objects.push(new Object(this.x + 1532, this.y + 146, false, "Duplicator"));
  // objects.push(new Object(this.x + 1564, this.y + 149, true, "Duplicator"));
  // objects.push(new Object(this.x + 1450, this.y + 648, false, "Crossover"));
  // objects.push(new Object(this.x + 1971, this.y + 761, true, "XOR Gate"));
  // objects.push(new Object(this.x + 1663, this.y + 729, false, "AND Gate"));
  // objects.push(new Object(this.x + 1297, this.y + 1884, false, "Crossover"));
  // objects.push(new Object(this.x + 1354, this.y + 1824, false, "Duplicator"));
  // objects.push(new Object(this.x + 1747, this.y + 2289, false, "Crossover"));
  // objects.push(new Object(this.x + 1313, this.y + 2347, false, "XOR Gate"));
  // objects.push(new Object(this.x + 2457, this.y + 932, true, "Duplicator"));
  // objects.push(new Object(this.x + 1610, this.y + 2367, true, "AND Gate"));
  // objects.push(new Object(this.x + 1294, this.y + 2748, true, "OR Gate"));
  // upperHeight = 2000;
  // objects.push(new Object(this.x + 1246, this.y + 774, true, "Upper"));

}
