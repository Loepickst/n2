# Try! N2 语法数据映射草案

## 目的

这份文档只做一件事：

把当前两套 N2 语法数据的字段差异写清楚，作为后续统一数据源时的参照。

涉及的两套数据：

- A. `test/Try！N2.html` 内嵌 `grammarData`
- B. `exam/textbook/grammar-data.js` 中的 `tryN2Data`

---

## 结论先行

这两套数据不是“谁多几个字段”的关系，而是“设计目标不同”：

- A 更偏学习视图和分类视图
- B 更偏教材正文和题库配套

因此后续不建议二选一硬替换，而建议：

- 以 B 作为 `grammar-core`
- 把 A 的分类能力拆成 `grammar-tags`

---

## 数据角色判断

### A. `test/Try！N2.html`

更适合承载：

- 分类
- 导图
- 关键词检索
- 专题整理
- 关联跳转

### B. `exam/textbook/grammar-data.js`

更适合承载：

- 正文真源
- 教材课次归属
- 题库关联
- 补充例句关联

---

## 字段映射建议

| 目标统一字段 | `Try！N2.html` | `grammar-data.js` | 归属建议 | 说明 |
| --- | --- | --- | --- | --- |
| `id` | `id` | `id` | `grammar-core` | 两侧都已有，可继续沿用 |
| `book` | `book` | `book` | `grammar-core` | 两侧都已有 |
| `lesson` | `lesson` | `lesson` | `grammar-core` | 两侧都已有，但格式要统一 |
| `title` | `point` | `title` | `grammar-core` | 后续建议统一命名为 `title` |
| `meaning` | `meaning` | `meaning` | `grammar-core` | 两侧都已有 |
| `connection` | `connection` | `connection` | `grammar-core` | 两侧都已有 |
| `desc` | `explanation` | `desc` | `grammar-core` | 后续建议统一命名为 `desc` |
| `examples` | `example` | `examples` | `grammar-core` | A 为单对象，B 为数组，后续建议统一成数组 |
| `related` | `similarGrammar` | `related` | `grammar-core` | 后续建议统一命名为 `related` |
| `keyword` | `keyword` | 无 | `grammar-tags` | 适合作为检索辅助标签 |
| `macro` | `macro` | 无 | `grammar-tags` | 一级分类 |
| `category` | `category` | 无 | `grammar-tags` | 二级分类 |
| `lessonNumber` | `lessonNumber` | 无 | `grammar-tags` | 可由 `lesson` 派生，也可保留 |
| `sourceId` | `sourceId` | 无 | `grammar-tags` | 仅在迁移对照时有价值 |
| `sourceMacro` | `sourceMacro` | 无 | `grammar-tags` | 分类迁移辅助字段 |
| `sourceCategory` | `sourceCategory` | 无 | `grammar-tags` | 分类迁移辅助字段 |
| `firstKana` | `firstKana` | 无 | `grammar-tags` | 可作为索引辅助字段 |
| `romaji` | 无 | `romaji` | `grammar-core` 或扩展字段 | 如继续显示则保留 |
| `kana` | 无 | `kana` | `grammar-core` 或扩展字段 | 如继续显示则保留 |
| `tags` | 无 | `tags` | `grammar-tags` | 可和 `keyword` 合并使用 |
| `level` | 无 | `level` | `grammar-core` | N2 项目里保留也没坏处 |

---

## 最值得统一的 5 个关键点

### 1. 标题统一

当前：

- A 用 `point`
- B 用 `title`

建议：

- 统一成 `title`

### 2. 说明统一

当前：

- A 用 `explanation`
- B 用 `desc`

建议：

- 统一成 `desc`

### 3. 例句结构统一

当前：

- A 用 `example`
- B 用 `examples`

建议：

- 统一成 `examples`
- 数据类型统一为数组

### 4. 关联语法统一

当前：

- A 用 `similarGrammar`
- B 用 `related`

建议：

- 统一成 `related`

### 5. 分类能力单独抽层

当前：

- `macro` / `category` / `keyword` 主要存在于 A

建议：

- 不把它们混进正文真源里
- 单独抽成 `grammar-tags`

---

## 推荐统一后的数据结构

```js
const grammarCore = [
  {
    id: 128,
    book: "Try! N2 文法",
    lesson: "第1課",
    title: "～につき",
    meaning: "因… / 由于…",
    connection: "N＋につき",
    desc: "主要用于书面告示、通知等正式文体中。",
    examples: [
      {
        jp: "...",
        cn: "..."
      }
    ],
    related: [132],
    kana: "につき",
    romaji: "nitsuki",
    level: "N2"
  }
];

const grammarTags = [
  {
    id: 128,
    macro: "原因与理由",
    category: "告示表达",
    keyword: ["通知", "书面语", "理由"],
    lessonNumber: 1,
    firstKana: "に"
  }
];
```

---

## 推荐迁移原则

### 原则 1

所有正文说明类字段只保留一份真源。

### 原则 2

分类字段与正文字段分层，不要混放。

### 原则 3

题库、补充例句一律通过 `id` 关联，不重复复制正文。

### 原则 4

页面读取的数据可以不同，但底层真源必须一致。

---

## 第一轮迁移时最稳的策略

### 保留

- 教材侧 `tryN2Data`
- `question-data-n2.js`
- `extra-example-data.js`

### 新增

- 一个统一的共享语法数据文件
- 一个分类元数据文件

### 改造

- `test/Try！N2.html`
  - 改为读取共享数据
- `daily/search/index.html`
  - 后续改为搜索壳层或跳转壳层

### 暂缓

- 不先大改教材正文页布局
- 不先动题库内部结构

---

## 当前阶段建议

进入正式实现前，先完成这 3 项：

1. 确认统一字段名
2. 确认哪些字段进 `grammar-core`
3. 确认哪些字段进 `grammar-tags`

只要这三项定住，后面的重构就会顺很多。
