/*
lookup, insert, delete: O(log N) which good as O(1!

  Eg. Searching in google

Perfect Binary Tree:

    *
   /\
  * *
 /\ /\
**  **

ノード（ブロック）の数が計算し易い。設計が楽。
各段のノードの数は上のレベルの全ノードの合計＋１
下段のノードの数は今の段の全てのノードの数X2

Level 0: 2^0=1
Level 1: 2^1=2
Level 2: 2^2=4
Level 3: 2^3=8
Level 4: 2^4=16
...
# of nodes = 2^h - 1;
log nodes = height

FUll Binary Tree:
Perfectと違い、２つの子に分岐するが、規則性は無い。

*/
