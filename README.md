# PİXEL MİNECRAFT KOLEKSİYON — Oyun Rehberi

---

## Oyun Nedir?

Pixel Minecraft Koleksiyon (PMK), Minecraft evreninden ilham alan bir **kart koleksiyon oyunudur**. Paketler açarak karakterler toplarsın, koleksiyonunu tamamlamaya ve başarıları kazanmaya çalışırsın. Her karakter gerçek bir Minecraft içerik üreticisini ya da oyun ikonunu temsil eder.

---

## Nasıl Oynanır?

### 1. Giriş
Oyuna girmeden önce iki adım vardır:
- **Cloudflare Turnstile** → Bot koruması. Kutucuğa tıkla, geç.
- **Firebase Auth** → Google ile veya e-posta + şifre ile giriş yap. E-posta ile kayıt olursan doğrulama maili gelir, mail onaylanmadan giriş yapılamaz.

Oturumun açık kaldığı sürece bir daha giriş yapman gerekmez. Çıkış yaparsan veya hesabı silersen başa dönersin.

### 2. Paket Açma
- **Ana Menü** ekranında ortadaki pakete tıkla.
- Her paketten **1 karakter** çıkar.
- Paketi açtıktan sonra **10 dakika** beklemen gerekir.
- Cooldown bar dolduğunda tekrar açabilirsin.
- Paket açıldığında bir kart açılış animasyonu gelir. Yeni karakter aldıysan konfeti yağar.

### 3. Koleksiyon
- Sol panelde ya da **KOLEKSİYON** sekmesinde tüm karakterleri görürsün.
- Henüz açılmamış karakterler **"?"** olarak görünür.
- Karaktere tıklarsan sağ panelde detayları açılır: isim, nadirlik, açıklama, kaç tane sahip olduğun.
- Filtreyle **Tümü / Toplanan / Eksik** görünümüne geçebilirsin.
- İlerleme çubuğu kaç karakteri tamamladığını gösterir.

### 4. Başarılar
- **BAŞARILAR** sekmesinde tüm başarılar listelenir.
- Koşul sağlandığında başarı otomatik kazanılır ve sağ alt köşeden bildirim çıkar.
- Kilitli başarılar **"???"** olarak görünür, kazanılınca açılır.

---

## Karakterler (13 Adet)

### Sıradan
| Karakter | Açıklama |
|----------|----------|
| Necronvo | Koleksiyonun sahibi. PvP ustası, aldatıcı görünüş. |
| Steve | Minecraft'ın ikonik varsayılan kahramanı. Her maceranın başlangıcı. |
| Alex | Steve'in yanılmaz arkadaşı. Okçuluğu ve hızıyla öne çıkar. |

### Nadir
| Karakter | Açıklama |
|----------|----------|
| Erdemoon | Türk Minecraft troll ustası. Sunuculara gizlice giren adam. |
| TheMurat | Her gün video çıkaran, köyde kral olmaya yemin etmiş Murat Can. |
| Berkay İnan | Shorts'tan uzun videoya geçen enerji dolu YouTuber. |
| MaviSlime | 2014'ten beri 610M+ izlenme toplayan Türk Minecraft efsanesi. |

### Epik
| Karakter | Açıklama |
|----------|----------|
| Doğukan Adal | Hardcore ve anarşi tarzını Türkiye'ye taşıyan Twitch/YouTube fenomeni. |
| Herobrine | Minecraft'ın en büyük urban efsanesi. Boş gözleri her yerde. |
| Yusufte | Türkiye'nin en iyi PvP oyuncularından biri. |
| Dream | Manhunt serisinin yaratıcısı. Speedrun tartışmalarına rağmen devleşti. |
| Ersin Çakı | ErsinCraft kanalıyla mod, texture ve shader paylaşan Türk YouTuber. |

### Efsane
| Karakter | Açıklama |
|----------|----------|
| Technoblade | Technoblade never dies. PvP tarihinin değişmez prensi. |

---

## Düşme Oranları

| Nadirlik | Oran  | Karakter Sayısı |
|----------|-------|-----------------|
| Sıradan  | ~%42  | 3               |
| Nadir    | ~%35  | 4               |
| Epik     | ~%20  | 5               |
| Efsane   | ~%2   | 1               |

> Oranlar ağırlık sistemine göre hesaplanır. Her karakterin kendi ağırlığı vardır, aynı nadirlik içinde de farklar olabilir.

---

## Başarılar (14 Adet)

| İsim | Koşul |
|------|-------|
| İlk Adım | 1 paket aç |
| Koleksiyoncu | 10 paket aç |
| Paket Ustası | 50 paket aç |
| İlk Karakter | İlk karakterini topla |
| Başlangıç | Tüm Sıradan karakterleri topla (3 karakter) |
| Nadir Bulucu | İlk Nadir karakterini topla |
| Epik An | İlk Epik karakterini topla |
| Efsanevi | Technoblade'i topla |
| Tam Koleksiyon | Tüm 13 karakteri topla |
| Çifte Şans | Bir karakteri 5 kez aç |
| Ev Sahibi | Necronvo'yu topla |
| Never Dies | Technoblade'i topla |
| Klasikler | Steve ve Alex'i topla |
| Türk Gücü | Tüm Türk YouTuberları topla (Erdemoon, TheMurat, Berkay, MaviSlime, Adal, Yusufte, Ersin) |

---

## İstatistikler

Sağ paneldeki istatistik kutularında şunlar görünür:

| Stat | Açıklama |
|------|----------|
| PAKET | Toplam kaç paket açtın |
| KART | Toplam kaç kart kazandın |
| TEKİL | Kaç farklı karakter topladın |
| ŞANSLI | Şimdiye kadar açtığın en nadir karakterin sembolü |

---

## Cooldown Sistemi

- Her paket açışından sonra **10 dakika** bekleme süresi başlar.
- Cooldown bar sarıdan yeşile geçer, dolunca **HAZIR** yazar.
- Buton cooldown süresince devre dışıdır, üzerinde kalan süre görünür.

---

## Kayıt Sistemi

- Tüm veriler **Firebase Firestore**'da saklanır.
- Oturumu kapatsanız bile koleksiyonunuz kaybolmaz.
- Farklı cihazdan giriş yapınca aynı koleksiyon gelir.
- Hesabı silersen tüm Firestore verisi de silinir.
- LocalStorage kullanılmaz, veriler sunucu tarafındadır.

---

## Ekranlar

| Ekran | Açıklama |
|-------|----------|
| Turnstile | Bot koruması, sayfa açılışında bir kez gösterilir |
| Giriş/Kayıt | Google veya e-posta ile hesap girişi |
| Ana Menü | Koleksiyon özeti + paket açma + karakter detay |
| Koleksiyon | Tüm 13 karakterin büyük grid görünümü |
| Başarılar | 14 başarının tümü, kazanılan/kilitli ayrımıyla |

---

## Teknik Notlar

- Görseller yüklenemezse her karakter için CSS box-shadow ile çizilmiş **pixel art sembol** gösterilir.
- Font: **Press Start 2P** (Google Fonts) — tam pixel art estetiği.
- Arka plan: 120 adet titreşen piksel yıldız (canvas animasyonu).
- Paket açılışında **konfeti** ve **sparkle** efektleri çıkar.
- Yeni karakter kazanılınca koleksiyon slotuna **"YENİ"** rozeti gelir.
- Başarı kazanılınca sağ alt köşeden kayarak bildirim çıkar.
