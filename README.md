<h1>High Order Functions</h1>

**HOF** - bu turdagi funksiyalar boshqa funksiyalarni o’z argumentlari sifatida qabul qilib, ular ustida boshqa amallar ham bajara oladigan funksiyalar hisoblanadi. JavaScript ichida qurilgan shunday funksiyalarga `Array.map(), Array.filter() va Array.reduce()` larni misol qilib ko’rsatishimiz mumkin. Bu funksiyalar argument sifatida array va funksiyani qabul qilib, dasturchi tomonidan arraydagi har bir elementga kiritilishi kerak bo’lgan o’zgarish yoki qandaydir saralash (filter) operatsiyalarini bajarib bizga yangi array qaytarib beradi yoki oldingisini yangilaydi.

Bu kabi funksiyalar odatda kodimizni oson o’qilishini ta’minlaydi va ulardan dasturimizda keyinchalik ham foydalana olish imkoniyatini beradi.

Biz ham o’zimizning maxsus operatsiya bajaruvchi High Order Functionimizni yaratishimiz mumkin. Tasavvur qilamiz, stringlar joylashgan array bor, va har bitta textni reverse qilishimiz kerak. Buning uchun tahminan shunday code yozishimiz kerak bo’ladi:

```javascript
function reverseEach(arr, fn) {
  let newObj = { reversed: [], original: [] };
  for (let i = 0; i < arr.length; i++) {
    newObj.original.push(arr[i]);
    newObj.reversed.push(arr[i].trim().split("").reverse().join(""));
    fn(arr[i]);
  }
  return newObj;
}
```
