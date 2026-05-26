# PİXEL MİNECRAFT KOLEKSİYON

## Dosya Yapısı

```
/
├── index.html          ← Ana sayfa (auth + oyun arayüzü)
├── style.css           ← Tüm stiller
├── game.js             ← Oyun motoru
├── worker.js           ← Cloudflare Worker (Turnstile backend)
├── README.md
└── pmkimage/
    ├── karakterler/
    │   ├── necronvo.png
    │   ├── erdemoon.png
    │   ├── themurat.png
    │   ├── berkayinan.png
    │   ├── mavislime.png
    │   ├── herobrine.png
    │   ├── yusufte.png
    │   ├── dream.png
    │   ├── ersincaki.png
    │   └── technoblade.png
    └── paketler/
        └── sıradanpaket.png
```

## Kurulum

1. Tüm dosyaları sunucuya yükle (`index.html`, `style.css`, `game.js`)
2. `pmkimage/` klasörlerini oluştur, görselleri ekle
3. `worker.js`'i Cloudflare Workers'a deploy et
4. Tarayıcıda `index.html`'i aç

## Giriş Akışı

```
Sayfa açılır
    ↓
Cloudflare Turnstile (bot koruması)
    ↓
Firebase Auth — Giriş / Kayıt
  ├── Google ile Giriş (tek tıkla)
  └── E-posta + Şifre
        └── Kayıt olunca doğrulama maili gider
            Mail doğrulanmadan giriş yapılamaz
    ↓
Firestore'dan kayıt yüklenir
    ↓
Oyun açılır
    ↓
Çıkış yapılırsa → Turnstile tekrar gösterilir
Hesap silinirse → Firestore kaydı da silinir, Turnstile tekrar
```

## Karakterler

| Karakter     | Nadirlik | Oran  |
|--------------|----------|-------|
| Necronvo     | Sıradan  | %37   |
| Erdemoon     | Sıradan  | %33   |
| TheMurat     | Sıradan  | %28   |
| Berkay İnan  | Nadir    | %20   |
| MaviSlime    | Nadir    | %23   |
| Herobrine    | Epik     | %9    |
| Yusufte      | Epik     | %9    |
| Dream        | Epik     | %9    |
| Ersin Çakı   | Epik     | %9    |
| Technoblade  | Efsane   | %5    |

## Başarılar

| İkon    | İsim           | Koşul                          |
|---------|----------------|--------------------------------|
| px-pack | İlk Adım       | 1 paket aç                     |
| px-box  | Koleksiyoncu   | 10 paket aç                    |
| px-chest| Paket Ustası   | 50 paket aç                    |
| px-card | İlk Karakter   | İlk karakteri topla            |
| px-pick | Başlangıç      | Tüm Sıradan karakterleri topla |
| px-gem  | Nadir Bulucu   | İlk Nadir karakteri topla      |
| px-orb  | Epik An        | İlk Epik karakteri topla       |
| px-sword| Efsanevi       | İlk Efsane karakteri topla     |
| px-trop | Tam Koleksiyon | Tüm karakterleri topla         |
| px-star | Çifte Şans     | Bir karakteri 5 kez aç         |
| px-skull| Ev Sahibi      | Necronvo'yu topla               |
| px-sword| Never Dies     | Technoblade'i topla            |

## Firebase Firestore Kuralları

Firebase Console → Firestore Database → Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /saves/{userId} {
      allow read, write: if request.auth != null
                         && request.auth.uid == userId;
    }
  }
}
```

## Cloudflare Worker

Worker URL: `https://dark-dream-9e83.necron-offical.workers.dev`

`worker.js` içeriğini Cloudflare Workers dashboard'dan deploy et.

## Notlar

- Görseller yüklenemezse CSS pixel art semboller devreye girer
- Kayıtlar Firestore'da saklanır (localStorage kullanılmaz)
- Paket cooldown: 10 dakika
- Her pakette 1 kart çıkar


