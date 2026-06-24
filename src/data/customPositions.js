/**
 * 自定义布局默认值 —— 拖拽调整后点击"保存布局"按钮写入此文件
 * 换浏览器/清缓存后位置不丢失
 *
 * 结构:
 *   positions: { "npc_xxx" | "item_xxx": { top, left } }  — NPC/物品位置(百分比)
 *   scales:    { "npc_xxx" | "item_xxx": number }          — NPC/物品缩放
 *   exits:     { "sceneId__target": { top, left } }        — 出口位置(百分比)
 *   exitScale: number                                       — 出口共享缩放
 *   exitRots:  { "sceneId__target": number }               — 出口旋转角度(度)
 *   puzzlesPos:{ "puzzleId": { top, left } }               — 拼图位置(百分比)
 *   puzzlesScl:{ "puzzleId": number }                      — 拼图缩放
 */

const custom = {
  positions: {
    blue_ore_a:          { top: '84.58333333333333%', left: '86.0625%' },
    blue_ore_b:          { top: '92.61111111111111%', left: '5.78125%' },
    mani_pile:           { top: '71.1388888888889%',  left: '23.125%' },
    road_sign:           { top: '71.61111111111111%', left: '73.046875%' },
    stone_well:          { top: '76.44444444444446%', left: '43.203125%' },
    npc_zhuoma:          { top: '55.138888888888886%', left: '67.390625%' },
    npc_renqing:         { top: '52.99999999999999%', left: '23.515625%' },
    golden_herb:         { top: '93.13888888888889%', left: '89.796875%' },
    green_plant:         { top: '78.19444444444444%', left: '40.671875%' },
    old_prescription:    { top: '84%',               left: '73.75%' },
    npc_baima:           { top: '60.22222222222222%', left: '51.75%' },
    song_bai:            { top: '91.47222222222223%', left: '15.1875%' },
    baima_corner:        { top: '85.33333333333333%', left: '31.046875%' },
    prayer_flags:        { top: '14.166666666666666%', left: '51.25%' },
    sang_stove:          { top: '68.19444444444446%', left: '46.640625%' },
    ye_cao:              { top: '81.72222222222223%', left: '4.65625%' },
    gesang_portfolio:    { top: '77.22222222222223%', left: '11.328125%' },
    npc_gesang:          { top: '49.22222222222222%', left: '68.328125%' },
    furnace:             { top: '51.861111111111114%', left: '56.984375%' },
    npc_danzeng:         { top: '58.833333333333336%', left: '44.53125%' },
    hematite:            { top: '67.22222222222223%', left: '89.953125%' },
    danzeng_stone:       { top: '80.05555555555556%', left: '10.65625%' },
    du_song:             { top: '62.63888888888889%', left: '71.296875%' },
    faded_mural:         { top: '42.69444444444444%', left: '10.437499999999993%' },
    torn_cloth:          { top: '93.97222222222223%', left: '36.984375%' },
    empty_frame:         { top: '49.111111111111114%', left: '42.421875%' },
    old_wood_box:        { top: '61.611111111111114%', left: '59.71875%' },
  },
  scales: {
    mani_pile:       4.3,
    road_sign:       1.68,
    npc_renqing:     2.15,
    npc_zhuoma:      2.29,
    stone_well:      4.3,
    npc_baima:       1.83,
    song_bai:        1.4,
    prayer_flags:    10.29,
    sang_stove:      12.11,
    ye_cao:          1.87,
    gesang_portfolio: 3.06,
    npc_gesang:      3.13,
    furnace:         0.97,
    npc_danzeng:     2.6,
    du_song:         1.49,
    faded_mural:     4.51,
    torn_cloth:      2.93,
    empty_frame:     4.48,
    old_wood_box:    1.48,
  },
  exits: {
    village_entrance__village_square:      { top: '58.05555555555556%', left: '45.953125%' },
    village_square__village_entrance:      { top: '92.83333333333333%', left: '38.578125%' },
    village_square__temple_exterior:       { top: '77.44444444444444%', left: '7.40625%' },
    temple_exterior__temple_interior:      { top: '67.08333333333333%', left: '61.875%' },
    mountain_peak__village_square:         { top: '93.05555555555556%', left: '59.90625%' },
    sangtai__village_square:               { top: '87.36111111111111%', left: '85.25%' },
    dangzeng_courtyard__dangzeng_bedroom:  { top: '40.27777777777778%', left: '34.453125%' },
    temple_interior__temple_exterior:      { top: '67.22222222222223%', left: '65.46875%' },
    dangzeng_bedroom__dangzeng_courtyard:  { top: '92.36111111111111%', left: '31.25%' },
  },
  exitScale: 1.5,
  exitRots: {
    village_entrance__village_square: 0,
    village_square__village_entrance: 180,
    mountain_peak__village_square:    180,
    sangtai__village_square:          180,
  },
  puzzlesPos: {
    prayer_flags: { top: '15.055555555555557%', left: '44.84375%' },
  },
  puzzlesScl: {
    prayer_flags: 2.07,
  },
};

export default custom;
