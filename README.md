# PİXEL MİNECRAFT KOLEKSİYON — Oyun Rehberi

---

## Oyun Nedir?

Pixel Minecraft Koleksiyon (PMK), Minecraft evreninden ilham alan bir kart koleksiyon oyunudur. Paket açarak karakterler toplarsın, koleksiyonunu tamamlamaya ve başarıları kazanmaya çalışırsın. Her karakter gerçek bir Minecraft içerik üreticisini ya da oyun ikonunu temsil eder. Kayıtlar Firebase'de tutulduğu için farklı cihazlardan girsen bile koleksiyonun seni bekler.

---

## Giriş Akışı

```
Sayfa açılır
    ↓
Cloudflare Turnstile — bot koruması (8sn yüklenmezse "Devam Et" butonu çıkar)
    ↓
Firebase Auth — Google veya E-posta + Şifre
    ↓  (e-posta ile kayıtta doğrulama maili gider, mail onaylanmadan giriş olmaz)
Firestore'dan koleksiyon yüklenir
    ↓
Oyun başlar
```

Çıkış yapınca veya hesap silinince Turnstile tekrar gösterilir. Hesap silinince Firestore kaydı da tamamen silinir.

---

## Nasıl Oynanır?

**Paket Açma**
Ana Menü'de ortadaki pakete tıkla. Her paketten 1 karakter çıkar. Paket açtıktan sonra 10 dakika bekleme süresi başlar. Cooldown bar sarıdan yeşile geçince tekrar açabilirsin. Yeni karakter aldığında konfeti yağar ve karakter slotuna "YENİ" rozeti gelir.

**Koleksiyon**
Sol panelde veya KOLEKSİYON sekmesinde tüm karakterleri görürsün. Henüz açılmamış karakterler "?" olarak görünür. Karaktere tıklarsan sağ panelde detayları açılır: isim, nadirlik, açıklama, kaç tane sahip olduğun. İki satır filtre vardır; birincisi Tümü / Toplanan / Eksik, ikincisi nadirliğe göre HEPSİ / SIRADAN / NADİR / EPİK / EFSANE.

**Başarılar**
BAŞARILAR sekmesinde 22 başarının tümü listelenir. Koşul sağlandığında başarı otomatik kazanılır ve sağ alt köşeden kayarak bildirim çıkar. Filtreyle KOLAY / ORTA / ZOR / EFSANE zorluğuna göre görüntüleyebilirsin. Kilitli başarılar "???" olarak görünür, kazanınca açılır ve zorluk seviyesi rengiyle birlikte gösterilir.

---

## Karakterler (20 Adet)

### Sıradan
| Karakter | Kim? |
|----------|------|
| Steve | Minecraft'ın ikonik varsayılan kahramanı |
| Alex | Steve'in arkadaşı, okçu |
| Necronvo | Bu koleksiyonun sahibi, PvP ustası |

### Nadir
| Karakter | Kim? |
|----------|------|
| Göktuğv | Yusufte ekibinin sessiz ama güçlü üyesi |
| Poniks | Yusufte ekibinin karizmatik üyesi |
| Rwaii | Yusufte ile Bedwars ve PvP videolarında oynuyor |
| Peach | Yusufte ve Doğukan Adal ile UHC turnuvalarında |
| Koston | Yusa Bakal ile Minecraft SMP içerikleri üretiyor |
| TheMurat | Her gün video çıkaran Murat Can |
| Erdemoon | Türk Minecraft troll ustası |

### Epik
| Karakter | Kim? |
|----------|------|
| Ersin Çakı | ErsinCraft kanalıyla mod, texture, shader içerikleri |
| Berkay İnan | Shorts'tan uzun videoya geçen enerji dolu YouTuber |
| Yusa Bakal | Koston ile video çeken Kick ve YouTube içerikçisi |
| MaviSlime | 610M+ izlenme, Türk Minecraft efsanesi |
| Doğukan Adal | Hardcore ve anarşi tarzını Türkiye'ye tanıtan Twitch yayıncısı |
| Herobrine | Minecraft'ın en büyük urban efsanesi |
| Dream | Manhunt serisinin yaratıcısı |
| Yusufte | Türkiye'nin en iyi PvP oyuncularından biri, ekibin lideri |
| Canzy | Ördek skinli, kendine özgü tarzlı Türk MC YouTuber'ı |

### Efsane
| Karakter | Kim? |
|----------|------|
| Technoblade | Technoblade never dies. PvP tarihinin değişmez prensi |

---

## Düşme Oranları

| Nadirlik | Oran |
|----------|------|
| Sıradan  | ~%39 |
| Nadir    | ~%35 |
| Epik     | ~%23 |
| Efsane   | ~%2  |

Oranlar ağırlık sistemiyle hesaplanır. Aynı nadirlik içinde bile karakterler arası fark olabilir.

---

## Başarılar (22 Adet)

### Kolay
| Başarı | Koşul |
|--------|-------|
| İlk Adım | 1 paket aç |
| İlk Karakter | İlk karakterini topla |
| Ev Sahibi | Necronvo'yu topla |
| Klasikler | Steve ve Alex'i topla |
| Yarı Yolda | 10 farklı karakter topla |

### Orta
| Başarı | Koşul |
|--------|-------|
| Koleksiyoncu | 10 paket aç |
| Paket Ustası | 50 paket aç |
| Başlangıç | Tüm Sıradan karakterleri topla |
| Nadir Koleksiyon | Tüm Nadir karakterleri topla |
| Epik An | İlk Epik karakterini topla |
| Çifte Şans | Bir karakteri 5 kez aç |
| Yusufte Ekibi | 7 ekip üyesini topla (Yusufte, Yusa Bakal, Koston, Göktuğv, Poniks, Rwaii, Peach) |

### Zor
| Başarı | Koşul |
|--------|-------|
| Paket Delisi | 100 paket aç |
| Bıkmadın mı? | 250 paket aç |
| Efsanevi | Technoblade'i topla |
| Yenilmez | Bir karakteri 10 kez aç |
| Epik Koleksiyon | Tüm Epik karakterleri topla |
| Türk Gücü | Tüm Türk içerik üreticilerini topla (14 karakter) |

### Efsane
| Başarı | Koşul |
|--------|-------|
| Tam Koleksiyon | Tüm 20 karakteri topla |
| Obsidyen İrade | 500 paket aç |
| Sonsuz Döngü | Bir karakteri 25 kez aç |
| Never Dies | Technoblade'i 3 kez topla |
| Gerçek Koleksiyoncu | Tüm karakterleri en az 2'şer kez topla |

---

## İstatistikler

| Stat | Açıklama |
|------|----------|
| PAKET | Toplam açılan paket sayısı |
| KART | Toplam kazanılan kart sayısı |
| TEKİL | Kaç farklı karakter toplandı |
| ŞANSLI | Şimdiye kadar açılan en nadir karakterin sembolü |

---

## Kayıt Sistemi

Tüm veriler Firebase Firestore'da saklanır. Farklı cihazdan giriş yapsan da koleksiyonun seni bekler. LocalStorage kullanılmaz. Hesap silinirse Firestore kaydı da silinir.

---

## Yusufte Ekibi

Yusufte, Yusa Bakal, Koston, Göktuğv, Poniks, Rwaii ve Peach birlikte Minecraft videoları çekiyor. Koleksiyonda 7'sini de toplarsan **Yusufte Ekibi** başarısını kazanırsın.
