/**
 * NPC 信任状态初始值
 *
 * 每个 NPC 维护：信任值（玩家不可见）、事件标记、已解锁话题
 */
export const INITIAL_NPC_TRUST = {
  danzeng: {
    npcId: 'danzeng',
    trustLevel: 0,
    flags: {
      hasDiscussedPainting: false,
      hasSeenBrokenCloth: false,
      hasGivenThangka: false,
      hasRevealedGubaiSecret: false,
      hasVisitedDanzengWall: false,
      hasShownPhoto: false,
      danzengChapter2Completed: false,
      danzengHandsCompleted: false,
    },
    unlockedDialogueTopics: [],
  },
  zhuoma: {
    npcId: 'zhuoma',
    trustLevel: 0,
    flags: {
      hasOpenedTemple: false,
      zhuomaChapter1Completed: false,
      meetingCompleted: false,
    },
    unlockedDialogueTopics: [],
  },
  gesang: {
    npcId: 'gesang',
    trustLevel: 0,
    flags: {
      hasTaughtZangjinRecipe: false,
      gesang_saw_thangka: false,
      gesangScene2Completed: false,
      gesangScene4Completed: false,
      gesangSketchCompleted: false,
    },
    unlockedDialogueTopics: [],
  },
  baima: {
    npcId: 'baima',
    trustLevel: 0,
    flags: {
      hasGivenCloth: false,
      hasAskedAboutCloth: false,
      baima_saw_thangka: false,
      hasTaughtSangOrder: false,
      hasTaughtSangChant: false,
      hasOpenedTemple: false,
      baimaChapter2Completed: false,
      baimaHunterCompleted: false,
      weisangCompleted: false,
    },
    unlockedDialogueTopics: [],
  },
  renqing: {
    npcId: 'renqing',
    trustLevel: 0,
    flags: {
      renqingChapter2Completed: false,
      renqingPhoto23Completed: false,
    },
    unlockedDialogueTopics: [],
  },
};
