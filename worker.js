class aciklamalar{
  constructor() {
this.acik_id = -1;
this.nerde = "";
this.yazibaslik = "";
this.yaziicerik = "";
this.turu = "";
this.yaziicerik2 = "";
this.sira = -1;
this.sira2 = -1;
this.yaziicerik3 = "";
this.sira3 = -1;
this.yazibaslik2 = "";
this.yaziicerik4 = "";
this.yaziicerik5 = "";
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "acik_id") this.acik_id = parseInt(item.value) || -1;
if (item.name === "nerde") this.nerde = item.value || "";
if (item.name === "yazibaslik") this.yazibaslik = item.value || "";
if (item.name === "yaziicerik") this.yaziicerik = item.value || "";
if (item.name === "turu") this.turu = item.value || "";
if (item.name === "yaziicerik2") this.yaziicerik2 = item.value || "";
if (item.name === "sira") this.sira = parseInt(item.value) || -1;
if (item.name === "sira2") this.sira2 = parseInt(item.value) || -1;
if (item.name === "yaziicerik3") this.yaziicerik3 = item.value || "";
if (item.name === "sira3") this.sira3 = parseInt(item.value) || -1;
if (item.name === "yazibaslik2") this.yazibaslik2 = item.value || "";
if (item.name === "yaziicerik4") this.yaziicerik4 = item.value || "";
if (item.name === "yaziicerik5") this.yaziicerik5 = item.value || "";
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "acik_id") this.acik_id = parseInt(item.value) || -1;
if (item.name === "nerde") this.nerde = item.value || "";
if (item.name === "yazibaslik") this.yazibaslik = item.value || "";
if (item.name === "yaziicerik") this.yaziicerik = item.value || "";
if (item.name === "turu") this.turu = item.value || "";
if (item.name === "yaziicerik2") this.yaziicerik2 = item.value || "";
if (item.name === "sira") this.sira = parseInt(item.value) || -1;
if (item.name === "sira2") this.sira2 = parseInt(item.value) || -1;
if (item.name === "yaziicerik3") this.yaziicerik3 = item.value || "";
if (item.name === "sira3") this.sira3 = parseInt(item.value) || -1;
if (item.name === "yazibaslik2") this.yazibaslik2 = item.value || "";
if (item.name === "yaziicerik4") this.yaziicerik4 = item.value || "";
if (item.name === "yaziicerik5") this.yaziicerik5 = item.value || "";
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "acik_id", value: this.acik_id.toString() || "-1" },
{ name: "nerde", value: this.nerde || "" },
{ name: "yazibaslik", value: this.yazibaslik || "" },
{ name: "yaziicerik", value: this.yaziicerik || "" },
{ name: "turu", value: this.turu || "" },
{ name: "yaziicerik2", value: this.yaziicerik2 || "" },
{ name: "sira", value: this.sira.toString() || "-1" },
{ name: "sira2", value: this.sira2.toString() || "-1" },
{ name: "yaziicerik3", value: this.yaziicerik3 || "" },
{ name: "sira3", value: this.sira3.toString() || "-1" },
{ name: "yazibaslik2", value: this.yazibaslik2 || "" },
{ name: "yaziicerik4", value: this.yaziicerik4 || "" },
{ name: "yaziicerik5", value: this.yaziicerik5 || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "aciklamalar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "acik_id", value: this.acik_id.toString() || "-1" },
{ name: "nerde", value: this.nerde || "" },
{ name: "yazibaslik", value: this.yazibaslik || "" },
{ name: "yaziicerik", value: this.yaziicerik || "" },
{ name: "turu", value: this.turu || "" },
{ name: "yaziicerik2", value: this.yaziicerik2 || "" },
{ name: "sira", value: this.sira.toString() || "-1" },
{ name: "sira2", value: this.sira2.toString() || "-1" },
{ name: "yaziicerik3", value: this.yaziicerik3 || "" },
{ name: "sira3", value: this.sira3.toString() || "-1" },
{ name: "yazibaslik2", value: this.yazibaslik2 || "" },
{ name: "yaziicerik4", value: this.yaziicerik4 || "" },
{ name: "yaziicerik5", value: this.yaziicerik5 || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "aciklamalar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "aciklamalar",
          "Verdat": "tkm_online",
          "veris": [{"name": "acik_id", "value": this.acik_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "aciklamalar",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new aciklamalar().fromApiObject(item));
    } catch (error) {
      console.error("aciklamalar.list_cek hatası:", error);
      throw error;
    }
  }

}
class api_istekler{
  constructor() {
this.istek_id = -1;
this.kullanici_id = -1;
this.ip_adresi = "";
this.endpoint = "";
this.method = "";
this.istek_verisi = "";
this.istek_tipi = "";
this.durum = "";
this.istek_zamani = new Date();
this.islem_suresi = -1;
this.hata_mesaji = "";
this.session_id = "";
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "istek_id") this.istek_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "ip_adresi") this.ip_adresi = item.value || "";
if (item.name === "endpoint") this.endpoint = item.value || "";
if (item.name === "method") this.method = item.value || "";
if (item.name === "istek_verisi") this.istek_verisi = item.value || "";
if (item.name === "istek_tipi") this.istek_tipi = item.value || "";
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "istek_zamani") this.istek_zamani = new Date(item.value) || new Date();
if (item.name === "islem_suresi") this.islem_suresi = parseInt(item.value) || -1;
if (item.name === "hata_mesaji") this.hata_mesaji = item.value || "";
if (item.name === "session_id") this.session_id = item.value || "";
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "istek_id") this.istek_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "ip_adresi") this.ip_adresi = item.value || "";
if (item.name === "endpoint") this.endpoint = item.value || "";
if (item.name === "method") this.method = item.value || "";
if (item.name === "istek_verisi") this.istek_verisi = item.value || "";
if (item.name === "istek_tipi") this.istek_tipi = item.value || "";
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "istek_zamani") this.istek_zamani = new Date(item.value) || new Date();
if (item.name === "islem_suresi") this.islem_suresi = parseInt(item.value) || -1;
if (item.name === "hata_mesaji") this.hata_mesaji = item.value || "";
if (item.name === "session_id") this.session_id = item.value || "";
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "istek_id", value: this.istek_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "ip_adresi", value: this.ip_adresi || "" },
{ name: "endpoint", value: this.endpoint || "" },
{ name: "method", value: this.method || "" },
{ name: "istek_verisi", value: this.istek_verisi || "" },
{ name: "istek_tipi", value: this.istek_tipi || "" },
{ name: "durum", value: this.durum || "" },
{ name: "istek_zamani", value: this.istek_zamani || simdi },
{ name: "islem_suresi", value: this.islem_suresi.toString() || "-1" },
{ name: "hata_mesaji", value: this.hata_mesaji || "" },
{ name: "session_id", value: this.session_id || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "api_istekler",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "istek_id", value: this.istek_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "ip_adresi", value: this.ip_adresi || "" },
{ name: "endpoint", value: this.endpoint || "" },
{ name: "method", value: this.method || "" },
{ name: "istek_verisi", value: this.istek_verisi || "" },
{ name: "istek_tipi", value: this.istek_tipi || "" },
{ name: "durum", value: this.durum || "" },
{ name: "istek_zamani", value: this.istek_zamani || simdi },
{ name: "islem_suresi", value: this.islem_suresi.toString() || "-1" },
{ name: "hata_mesaji", value: this.hata_mesaji || "" },
{ name: "session_id", value: this.session_id || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "api_istekler",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "api_istekler",
          "Verdat": "tkm_online",
          "veris": [{"name": "istek_id", "value": this.istek_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "api_istekler",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new api_istekler().fromApiObject(item));
    } catch (error) {
      console.error("api_istekler.list_cek hatası:", error);
      throw error;
    }
  }

}
class bildirimler{
  constructor() {
this.bildirim_id = -1;
this.kullanici_id = -1;
this.baslik = "";
this.mesaj = "";
this.bildirim_tipi = "";
this.ilgili_id = -1;
this.okundu = "";
this.olusturma_zamani = new Date();
this.okunma_zamani = new Date();
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "bildirim_id") this.bildirim_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "baslik") this.baslik = item.value || "";
if (item.name === "mesaj") this.mesaj = item.value || "";
if (item.name === "bildirim_tipi") this.bildirim_tipi = item.value || "";
if (item.name === "ilgili_id") this.ilgili_id = parseInt(item.value) || -1;
if (item.name === "okundu") this.okundu = item.value || "";
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
if (item.name === "okunma_zamani") this.okunma_zamani = new Date(item.value) || new Date();
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "bildirim_id") this.bildirim_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "baslik") this.baslik = item.value || "";
if (item.name === "mesaj") this.mesaj = item.value || "";
if (item.name === "bildirim_tipi") this.bildirim_tipi = item.value || "";
if (item.name === "ilgili_id") this.ilgili_id = parseInt(item.value) || -1;
if (item.name === "okundu") this.okundu = item.value || "";
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
if (item.name === "okunma_zamani") this.okunma_zamani = new Date(item.value) || new Date();
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "bildirim_id", value: this.bildirim_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "baslik", value: this.baslik || "" },
{ name: "mesaj", value: this.mesaj || "" },
{ name: "bildirim_tipi", value: this.bildirim_tipi || "" },
{ name: "ilgili_id", value: this.ilgili_id.toString() || "-1" },
{ name: "okundu", value: this.okundu || "" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi },
{ name: "okunma_zamani", value: this.okunma_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "bildirimler",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "bildirim_id", value: this.bildirim_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "baslik", value: this.baslik || "" },
{ name: "mesaj", value: this.mesaj || "" },
{ name: "bildirim_tipi", value: this.bildirim_tipi || "" },
{ name: "ilgili_id", value: this.ilgili_id.toString() || "-1" },
{ name: "okundu", value: this.okundu || "" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi },
{ name: "okunma_zamani", value: this.okunma_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "bildirimler",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "bildirimler",
          "Verdat": "tkm_online",
          "veris": [{"name": "bildirim_id", "value": this.bildirim_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "bildirimler",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new bildirimler().fromApiObject(item));
    } catch (error) {
      console.error("bildirimler.list_cek hatası:", error);
      throw error;
    }
  }

}
class cevrimici_kullanicilar{
  constructor() {
this.c_kul_id = -1;
this.session_id = "";
this.kullanici_id = -1;
this.son_aktivite = new Date();
this.durum = "";
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "c_kul_id") this.c_kul_id = parseInt(item.value) || -1;
if (item.name === "session_id") this.session_id = item.value || "";
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "son_aktivite") this.son_aktivite = new Date(item.value) || new Date();
if (item.name === "durum") this.durum = item.value || "";
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "c_kul_id") this.c_kul_id = parseInt(item.value) || -1;
if (item.name === "session_id") this.session_id = item.value || "";
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "son_aktivite") this.son_aktivite = new Date(item.value) || new Date();
if (item.name === "durum") this.durum = item.value || "";
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "c_kul_id", value: this.c_kul_id.toString() || "-1" },
{ name: "session_id", value: this.session_id || "" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "son_aktivite", value: this.son_aktivite || simdi },
{ name: "durum", value: this.durum || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "cevrimici_kullanicilar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "c_kul_id", value: this.c_kul_id.toString() || "-1" },
{ name: "session_id", value: this.session_id || "" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "son_aktivite", value: this.son_aktivite || simdi },
{ name: "durum", value: this.durum || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "cevrimici_kullanicilar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "cevrimici_kullanicilar",
          "Verdat": "tkm_online",
          "veris": [{"name": "c_kul_id", "value": this.c_kul_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "cevrimici_kullanicilar",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new cevrimici_kullanicilar().fromApiObject(item));
    } catch (error) {
      console.error("cevrimici_kullanicilar.list_cek hatası:", error);
      throw error;
    }
  }

}
class hamleler{
  constructor() {
this.hamle_id = -1;
this.oyun_id = -1;
this.kullanici_id = -1;
this.secim = "";
this.tur = -1;
this.zaman = new Date();
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "hamle_id") this.hamle_id = parseInt(item.value) || -1;
if (item.name === "oyun_id") this.oyun_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "secim") this.secim = item.value || "";
if (item.name === "tur") this.tur = parseInt(item.value) || -1;
if (item.name === "zaman") this.zaman = new Date(item.value) || new Date();
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "hamle_id") this.hamle_id = parseInt(item.value) || -1;
if (item.name === "oyun_id") this.oyun_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "secim") this.secim = item.value || "";
if (item.name === "tur") this.tur = parseInt(item.value) || -1;
if (item.name === "zaman") this.zaman = new Date(item.value) || new Date();
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "hamle_id", value: this.hamle_id.toString() || "-1" },
{ name: "oyun_id", value: this.oyun_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "secim", value: this.secim || "" },
{ name: "tur", value: this.tur.toString() || "-1" },
{ name: "zaman", value: this.zaman || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "hamleler",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "hamle_id", value: this.hamle_id.toString() || "-1" },
{ name: "oyun_id", value: this.oyun_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "secim", value: this.secim || "" },
{ name: "tur", value: this.tur.toString() || "-1" },
{ name: "zaman", value: this.zaman || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "hamleler",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "hamleler",
          "Verdat": "tkm_online",
          "veris": [{"name": "hamle_id", "value": this.hamle_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "hamleler",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new hamleler().fromApiObject(item));
    } catch (error) {
      console.error("hamleler.list_cek hatası:", error);
      throw error;
    }
  }

}
class istatistikler{
  constructor() {
this.istatistik_id = -1;
this.kullanici_id = -1;
this.toplam_oyun = -1;
this.kazanilan = -1;
this.kaybedilen = -1;
this.berabere = -1;
this.tas_kullanim = -1;
this.kagit_kullanim = -1;
this.makas_kullanim = -1;
this.son_guncelleme = new Date();
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "istatistik_id") this.istatistik_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "toplam_oyun") this.toplam_oyun = parseInt(item.value) || -1;
if (item.name === "kazanilan") this.kazanilan = parseInt(item.value) || -1;
if (item.name === "kaybedilen") this.kaybedilen = parseInt(item.value) || -1;
if (item.name === "berabere") this.berabere = parseInt(item.value) || -1;
if (item.name === "tas_kullanim") this.tas_kullanim = parseInt(item.value) || -1;
if (item.name === "kagit_kullanim") this.kagit_kullanim = parseInt(item.value) || -1;
if (item.name === "makas_kullanim") this.makas_kullanim = parseInt(item.value) || -1;
if (item.name === "son_guncelleme") this.son_guncelleme = new Date(item.value) || new Date();
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "istatistik_id") this.istatistik_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "toplam_oyun") this.toplam_oyun = parseInt(item.value) || -1;
if (item.name === "kazanilan") this.kazanilan = parseInt(item.value) || -1;
if (item.name === "kaybedilen") this.kaybedilen = parseInt(item.value) || -1;
if (item.name === "berabere") this.berabere = parseInt(item.value) || -1;
if (item.name === "tas_kullanim") this.tas_kullanim = parseInt(item.value) || -1;
if (item.name === "kagit_kullanim") this.kagit_kullanim = parseInt(item.value) || -1;
if (item.name === "makas_kullanim") this.makas_kullanim = parseInt(item.value) || -1;
if (item.name === "son_guncelleme") this.son_guncelleme = new Date(item.value) || new Date();
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "istatistik_id", value: this.istatistik_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "toplam_oyun", value: this.toplam_oyun.toString() || "-1" },
{ name: "kazanilan", value: this.kazanilan.toString() || "-1" },
{ name: "kaybedilen", value: this.kaybedilen.toString() || "-1" },
{ name: "berabere", value: this.berabere.toString() || "-1" },
{ name: "tas_kullanim", value: this.tas_kullanim.toString() || "-1" },
{ name: "kagit_kullanim", value: this.kagit_kullanim.toString() || "-1" },
{ name: "makas_kullanim", value: this.makas_kullanim.toString() || "-1" },
{ name: "son_guncelleme", value: this.son_guncelleme || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "istatistikler",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "istatistik_id", value: this.istatistik_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "toplam_oyun", value: this.toplam_oyun.toString() || "-1" },
{ name: "kazanilan", value: this.kazanilan.toString() || "-1" },
{ name: "kaybedilen", value: this.kaybedilen.toString() || "-1" },
{ name: "berabere", value: this.berabere.toString() || "-1" },
{ name: "tas_kullanim", value: this.tas_kullanim.toString() || "-1" },
{ name: "kagit_kullanim", value: this.kagit_kullanim.toString() || "-1" },
{ name: "makas_kullanim", value: this.makas_kullanim.toString() || "-1" },
{ name: "son_guncelleme", value: this.son_guncelleme || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "istatistikler",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "istatistikler",
          "Verdat": "tkm_online",
          "veris": [{"name": "istatistik_id", "value": this.istatistik_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "istatistikler",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new istatistikler().fromApiObject(item));
    } catch (error) {
      console.error("istatistikler.list_cek hatası:", error);
      throw error;
    }
  }

}
class kullanicilar{
  constructor() {
this.kullanici_id = -1;
this.kullanici_adi = "";
this.sifre = "";
this.email = "";
this.kayit_tarihi = new Date();
this.son_giris = new Date();
this.avatar = "";
this.bakiye = -1;
this.seviye = -1;
this.toplam_tecrube = -1;
this.son_lobi_id = -1;
this.isim = "";
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "kullanici_adi") this.kullanici_adi = item.value || "";
if (item.name === "sifre") this.sifre = item.value || "";
if (item.name === "email") this.email = item.value || "";
if (item.name === "kayit_tarihi") this.kayit_tarihi = new Date(item.value) || new Date();
if (item.name === "son_giris") this.son_giris = new Date(item.value) || new Date();
if (item.name === "avatar") this.avatar = item.value || "";
if (item.name === "bakiye") this.bakiye = parseFloat(item.value) || -1;
if (item.name === "seviye") this.seviye = parseInt(item.value) || -1;
if (item.name === "toplam_tecrube") this.toplam_tecrube = parseInt(item.value) || -1;
if (item.name === "son_lobi_id") this.son_lobi_id = parseInt(item.value) || -1;
if (item.name === "isim") this.isim = item.value || "";
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "kullanici_adi") this.kullanici_adi = item.value || "";
if (item.name === "sifre") this.sifre = item.value || "";
if (item.name === "email") this.email = item.value || "";
if (item.name === "kayit_tarihi") this.kayit_tarihi = new Date(item.value) || new Date();
if (item.name === "son_giris") this.son_giris = new Date(item.value) || new Date();
if (item.name === "avatar") this.avatar = item.value || "";
if (item.name === "bakiye") this.bakiye = parseFloat(item.value) || -1;
if (item.name === "seviye") this.seviye = parseInt(item.value) || -1;
if (item.name === "toplam_tecrube") this.toplam_tecrube = parseInt(item.value) || -1;
if (item.name === "son_lobi_id") this.son_lobi_id = parseInt(item.value) || -1;
if (item.name === "isim") this.isim = item.value || "";
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "kullanici_adi", value: this.kullanici_adi || "" },
{ name: "sifre", value: this.sifre || "" },
{ name: "email", value: this.email || "" },
{ name: "kayit_tarihi", value: this.kayit_tarihi || simdi },
{ name: "son_giris", value: this.son_giris || simdi },
{ name: "avatar", value: this.avatar || "" },
{ name: "bakiye", value: this.bakiye.toString() || "-1" },
{ name: "seviye", value: this.seviye.toString() || "-1" },
{ name: "toplam_tecrube", value: this.toplam_tecrube.toString() || "-1" },
{ name: "son_lobi_id", value: this.son_lobi_id.toString() || "-1" },
{ name: "isim", value: this.isim || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "kullanicilar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "kullanici_adi", value: this.kullanici_adi || "" },
{ name: "sifre", value: this.sifre || "" },
{ name: "email", value: this.email || "" },
{ name: "kayit_tarihi", value: this.kayit_tarihi || simdi },
{ name: "son_giris", value: this.son_giris || simdi },
{ name: "avatar", value: this.avatar || "" },
{ name: "bakiye", value: this.bakiye.toString() || "-1" },
{ name: "seviye", value: this.seviye.toString() || "-1" },
{ name: "toplam_tecrube", value: this.toplam_tecrube.toString() || "-1" },
{ name: "son_lobi_id", value: this.son_lobi_id.toString() || "-1" },
{ name: "isim", value: this.isim || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "kullanicilar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "kullanicilar",
          "Verdat": "tkm_online",
          "veris": [{"name": "kullanici_id", "value": this.kullanici_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "kullanicilar",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new kullanicilar().fromApiObject(item));
    } catch (error) {
      console.error("kullanicilar.list_cek hatası:", error);
      throw error;
    }
  }

}
class lobiler{
  constructor() {
this.lobi_id = -1;
this.lobi_adi = "";
this.aciklama = "";
this.seviye_id = -1;
this.max_oyuncu_sayisi = -1;
this.mevcut_oyuncu_sayisi = -1;
this.aktif = "";
this.olusturma_zamani = new Date();
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "lobi_id") this.lobi_id = parseInt(item.value) || -1;
if (item.name === "lobi_adi") this.lobi_adi = item.value || "";
if (item.name === "aciklama") this.aciklama = item.value || "";
if (item.name === "seviye_id") this.seviye_id = parseInt(item.value) || -1;
if (item.name === "max_oyuncu_sayisi") this.max_oyuncu_sayisi = parseInt(item.value) || -1;
if (item.name === "mevcut_oyuncu_sayisi") this.mevcut_oyuncu_sayisi = parseInt(item.value) || -1;
if (item.name === "aktif") this.aktif = item.value || "";
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "lobi_id") this.lobi_id = parseInt(item.value) || -1;
if (item.name === "lobi_adi") this.lobi_adi = item.value || "";
if (item.name === "aciklama") this.aciklama = item.value || "";
if (item.name === "seviye_id") this.seviye_id = parseInt(item.value) || -1;
if (item.name === "max_oyuncu_sayisi") this.max_oyuncu_sayisi = parseInt(item.value) || -1;
if (item.name === "mevcut_oyuncu_sayisi") this.mevcut_oyuncu_sayisi = parseInt(item.value) || -1;
if (item.name === "aktif") this.aktif = item.value || "";
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "lobi_id", value: this.lobi_id.toString() || "-1" },
{ name: "lobi_adi", value: this.lobi_adi || "" },
{ name: "aciklama", value: this.aciklama || "" },
{ name: "seviye_id", value: this.seviye_id.toString() || "-1" },
{ name: "max_oyuncu_sayisi", value: this.max_oyuncu_sayisi.toString() || "-1" },
{ name: "mevcut_oyuncu_sayisi", value: this.mevcut_oyuncu_sayisi.toString() || "-1" },
{ name: "aktif", value: this.aktif || "" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "lobiler",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "lobi_id", value: this.lobi_id.toString() || "-1" },
{ name: "lobi_adi", value: this.lobi_adi || "" },
{ name: "aciklama", value: this.aciklama || "" },
{ name: "seviye_id", value: this.seviye_id.toString() || "-1" },
{ name: "max_oyuncu_sayisi", value: this.max_oyuncu_sayisi.toString() || "-1" },
{ name: "mevcut_oyuncu_sayisi", value: this.mevcut_oyuncu_sayisi.toString() || "-1" },
{ name: "aktif", value: this.aktif || "" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "lobiler",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "lobiler",
          "Verdat": "tkm_online",
          "veris": [{"name": "lobi_id", "value": this.lobi_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "lobiler",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new lobiler().fromApiObject(item));
    } catch (error) {
      console.error("lobiler.list_cek hatası:", error);
      throw error;
    }
  }

}
class masa_davetleri{
  constructor() {
this.davet_id = -1;
this.masa_id = -1;
this.davet_eden_id = -1;
this.davet_edilen_id = -1;
this.durum = "";
this.olusturma_zamani = new Date();
this.guncelleme_zamani = new Date();
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "davet_id") this.davet_id = parseInt(item.value) || -1;
if (item.name === "masa_id") this.masa_id = parseInt(item.value) || -1;
if (item.name === "davet_eden_id") this.davet_eden_id = parseInt(item.value) || -1;
if (item.name === "davet_edilen_id") this.davet_edilen_id = parseInt(item.value) || -1;
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
if (item.name === "guncelleme_zamani") this.guncelleme_zamani = new Date(item.value) || new Date();
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "davet_id") this.davet_id = parseInt(item.value) || -1;
if (item.name === "masa_id") this.masa_id = parseInt(item.value) || -1;
if (item.name === "davet_eden_id") this.davet_eden_id = parseInt(item.value) || -1;
if (item.name === "davet_edilen_id") this.davet_edilen_id = parseInt(item.value) || -1;
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
if (item.name === "guncelleme_zamani") this.guncelleme_zamani = new Date(item.value) || new Date();
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "davet_id", value: this.davet_id.toString() || "-1" },
{ name: "masa_id", value: this.masa_id.toString() || "-1" },
{ name: "davet_eden_id", value: this.davet_eden_id.toString() || "-1" },
{ name: "davet_edilen_id", value: this.davet_edilen_id.toString() || "-1" },
{ name: "durum", value: this.durum || "" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi },
{ name: "guncelleme_zamani", value: this.guncelleme_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "masa_davetleri",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "davet_id", value: this.davet_id.toString() || "-1" },
{ name: "masa_id", value: this.masa_id.toString() || "-1" },
{ name: "davet_eden_id", value: this.davet_eden_id.toString() || "-1" },
{ name: "davet_edilen_id", value: this.davet_edilen_id.toString() || "-1" },
{ name: "durum", value: this.durum || "" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi },
{ name: "guncelleme_zamani", value: this.guncelleme_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "masa_davetleri",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "masa_davetleri",
          "Verdat": "tkm_online",
          "veris": [{"name": "davet_id", "value": this.davet_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "masa_davetleri",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new masa_davetleri().fromApiObject(item));
    } catch (error) {
      console.error("masa_davetleri.list_cek hatası:", error);
      throw error;
    }
  }

}
class masa_oyunculari{
  constructor() {
this.id = -1;
this.masa_id = -1;
this.kullanici_id = -1;
this.katilma_zamani = new Date();
this.pozisyon = -1;
this.durum = "";
this.hazir = "";
this.oyuncu_adi = "";
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "id") this.id = parseInt(item.value) || -1;
if (item.name === "masa_id") this.masa_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "katilma_zamani") this.katilma_zamani = new Date(item.value) || new Date();
if (item.name === "pozisyon") this.pozisyon = parseInt(item.value) || -1;
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "hazir") this.hazir = item.value || "";
if (item.name === "oyuncu_adi") this.oyuncu_adi = item.value || "";
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "id") this.id = parseInt(item.value) || -1;
if (item.name === "masa_id") this.masa_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "katilma_zamani") this.katilma_zamani = new Date(item.value) || new Date();
if (item.name === "pozisyon") this.pozisyon = parseInt(item.value) || -1;
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "hazir") this.hazir = item.value || "";
if (item.name === "oyuncu_adi") this.oyuncu_adi = item.value || "";
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "id", value: this.id.toString() || "-1" },
{ name: "masa_id", value: this.masa_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "katilma_zamani", value: this.katilma_zamani || simdi },
{ name: "pozisyon", value: this.pozisyon.toString() || "-1" },
{ name: "durum", value: this.durum || "" },
{ name: "hazir", value: this.hazir || "" },
{ name: "oyuncu_adi", value: this.oyuncu_adi || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "masa_oyunculari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "id", value: this.id.toString() || "-1" },
{ name: "masa_id", value: this.masa_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "katilma_zamani", value: this.katilma_zamani || simdi },
{ name: "pozisyon", value: this.pozisyon.toString() || "-1" },
{ name: "durum", value: this.durum || "" },
{ name: "hazir", value: this.hazir || "" },
{ name: "oyuncu_adi", value: this.oyuncu_adi || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "masa_oyunculari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "masa_oyunculari",
          "Verdat": "tkm_online",
          "veris": [{"name": "id", "value": this.id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "masa_oyunculari",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new masa_oyunculari().fromApiObject(item));
    } catch (error) {
      console.error("masa_oyunculari.list_cek hatası:", error);
      throw error;
    }
  }

}
class masalar{
  constructor() {
this.masa_id = -1;
this.masa_adi = "";
this.lobi_id = -1;
this.olusturan_id = -1;
this.katilim_ucreti = -1;
this.min_seviye = -1;
this.max_seviye = -1;
this.tur_sayisi = -1;
this.hamle_suresi = -1;
this.ozel_masa = "";
this.sifre = "";
this.max_oyuncu = -1;
this.mevcut_oyuncu = -1;
this.durum = "";
this.olusturma_zamani = new Date();
this.guncelleme_zamani = new Date();
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "masa_id") this.masa_id = parseInt(item.value) || -1;
if (item.name === "masa_adi") this.masa_adi = item.value || "";
if (item.name === "lobi_id") this.lobi_id = parseInt(item.value) || -1;
if (item.name === "olusturan_id") this.olusturan_id = parseInt(item.value) || -1;
if (item.name === "katilim_ucreti") this.katilim_ucreti = parseFloat(item.value) || -1;
if (item.name === "min_seviye") this.min_seviye = parseInt(item.value) || -1;
if (item.name === "max_seviye") this.max_seviye = parseInt(item.value) || -1;
if (item.name === "tur_sayisi") this.tur_sayisi = parseInt(item.value) || -1;
if (item.name === "hamle_suresi") this.hamle_suresi = parseInt(item.value) || -1;
if (item.name === "ozel_masa") this.ozel_masa = item.value || "";
if (item.name === "sifre") this.sifre = item.value || "";
if (item.name === "max_oyuncu") this.max_oyuncu = parseInt(item.value) || -1;
if (item.name === "mevcut_oyuncu") this.mevcut_oyuncu = parseInt(item.value) || -1;
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
if (item.name === "guncelleme_zamani") this.guncelleme_zamani = new Date(item.value) || new Date();
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "masa_id") this.masa_id = parseInt(item.value) || -1;
if (item.name === "masa_adi") this.masa_adi = item.value || "";
if (item.name === "lobi_id") this.lobi_id = parseInt(item.value) || -1;
if (item.name === "olusturan_id") this.olusturan_id = parseInt(item.value) || -1;
if (item.name === "katilim_ucreti") this.katilim_ucreti = parseFloat(item.value) || -1;
if (item.name === "min_seviye") this.min_seviye = parseInt(item.value) || -1;
if (item.name === "max_seviye") this.max_seviye = parseInt(item.value) || -1;
if (item.name === "tur_sayisi") this.tur_sayisi = parseInt(item.value) || -1;
if (item.name === "hamle_suresi") this.hamle_suresi = parseInt(item.value) || -1;
if (item.name === "ozel_masa") this.ozel_masa = item.value || "";
if (item.name === "sifre") this.sifre = item.value || "";
if (item.name === "max_oyuncu") this.max_oyuncu = parseInt(item.value) || -1;
if (item.name === "mevcut_oyuncu") this.mevcut_oyuncu = parseInt(item.value) || -1;
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
if (item.name === "guncelleme_zamani") this.guncelleme_zamani = new Date(item.value) || new Date();
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "masa_id", value: this.masa_id.toString() || "-1" },
{ name: "masa_adi", value: this.masa_adi || "" },
{ name: "lobi_id", value: this.lobi_id.toString() || "-1" },
{ name: "olusturan_id", value: this.olusturan_id.toString() || "-1" },
{ name: "katilim_ucreti", value: this.katilim_ucreti.toString() || "-1" },
{ name: "min_seviye", value: this.min_seviye.toString() || "-1" },
{ name: "max_seviye", value: this.max_seviye.toString() || "-1" },
{ name: "tur_sayisi", value: this.tur_sayisi.toString() || "-1" },
{ name: "hamle_suresi", value: this.hamle_suresi.toString() || "-1" },
{ name: "ozel_masa", value: this.ozel_masa || "" },
{ name: "sifre", value: this.sifre || "" },
{ name: "max_oyuncu", value: this.max_oyuncu.toString() || "-1" },
{ name: "mevcut_oyuncu", value: this.mevcut_oyuncu.toString() || "-1" },
{ name: "durum", value: this.durum || "" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi },
{ name: "guncelleme_zamani", value: this.guncelleme_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "masalar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response.text();
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "masa_id", value: this.masa_id.toString() || "-1" },
{ name: "masa_adi", value: this.masa_adi || "" },
{ name: "lobi_id", value: this.lobi_id.toString() || "-1" },
{ name: "olusturan_id", value: this.olusturan_id.toString() || "-1" },
{ name: "katilim_ucreti", value: this.katilim_ucreti.toString() || "-1" },
{ name: "min_seviye", value: this.min_seviye.toString() || "-1" },
{ name: "max_seviye", value: this.max_seviye.toString() || "-1" },
{ name: "tur_sayisi", value: this.tur_sayisi.toString() || "-1" },
{ name: "hamle_suresi", value: this.hamle_suresi.toString() || "-1" },
{ name: "ozel_masa", value: this.ozel_masa || "" },
{ name: "sifre", value: this.sifre || "" },
{ name: "max_oyuncu", value: this.max_oyuncu.toString() || "-1" },
{ name: "mevcut_oyuncu", value: this.mevcut_oyuncu.toString() || "-1" },
{ name: "durum", value: this.durum || "" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi },
{ name: "guncelleme_zamani", value: this.guncelleme_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "masalar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response.json();
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "masalar",
          "Verdat": "tkm_online",
          "veris": [{"name": "masa_id", "value": this.masa_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "masalar",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new masalar().fromApiObject(item));
    } catch (error) {
      console.error("masalar.list_cek hatası:", error);
      throw error;
    }
  }

}
class oyunlar{
  constructor() {
this.oyun_id = -1;
this.baslatan_id = -1;
this.katilan_id = -1;
this.durum = "";
this.kazanan_id = -1;
this.olusturma_zamani = new Date();
this.bitis_zamani = new Date();
this.tur_sayisi = -1;
this.mevcut_tur = -1;
this.baslatan_skor = -1;
this.katilan_skor = -1;
this.sira_kimde = -1;
this.hamle_suresi = -1;
this.son_hamle_zamani = new Date();
this.katilim_ucreti = -1;
this.odul_havuzu = -1;
this.masa_id = -1;
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "oyun_id") this.oyun_id = parseInt(item.value) || -1;
if (item.name === "baslatan_id") this.baslatan_id = parseInt(item.value) || -1;
if (item.name === "katilan_id") this.katilan_id = parseInt(item.value) || -1;
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "kazanan_id") this.kazanan_id = parseInt(item.value) || -1;
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
if (item.name === "bitis_zamani") this.bitis_zamani = new Date(item.value) || new Date();
if (item.name === "tur_sayisi") this.tur_sayisi = parseInt(item.value) || -1;
if (item.name === "mevcut_tur") this.mevcut_tur = parseInt(item.value) || -1;
if (item.name === "baslatan_skor") this.baslatan_skor = parseInt(item.value) || -1;
if (item.name === "katilan_skor") this.katilan_skor = parseInt(item.value) || -1;
if (item.name === "sira_kimde") this.sira_kimde = parseInt(item.value) || -1;
if (item.name === "hamle_suresi") this.hamle_suresi = parseInt(item.value) || -1;
if (item.name === "son_hamle_zamani") this.son_hamle_zamani = new Date(item.value) || new Date();
if (item.name === "katilim_ucreti") this.katilim_ucreti = parseFloat(item.value) || -1;
if (item.name === "odul_havuzu") this.odul_havuzu = parseFloat(item.value) || -1;
if (item.name === "masa_id") this.masa_id = parseInt(item.value) || -1;
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "oyun_id") this.oyun_id = parseInt(item.value) || -1;
if (item.name === "baslatan_id") this.baslatan_id = parseInt(item.value) || -1;
if (item.name === "katilan_id") this.katilan_id = parseInt(item.value) || -1;
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "kazanan_id") this.kazanan_id = parseInt(item.value) || -1;
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
if (item.name === "bitis_zamani") this.bitis_zamani = new Date(item.value) || new Date();
if (item.name === "tur_sayisi") this.tur_sayisi = parseInt(item.value) || -1;
if (item.name === "mevcut_tur") this.mevcut_tur = parseInt(item.value) || -1;
if (item.name === "baslatan_skor") this.baslatan_skor = parseInt(item.value) || -1;
if (item.name === "katilan_skor") this.katilan_skor = parseInt(item.value) || -1;
if (item.name === "sira_kimde") this.sira_kimde = parseInt(item.value) || -1;
if (item.name === "hamle_suresi") this.hamle_suresi = parseInt(item.value) || -1;
if (item.name === "son_hamle_zamani") this.son_hamle_zamani = new Date(item.value) || new Date();
if (item.name === "katilim_ucreti") this.katilim_ucreti = parseFloat(item.value) || -1;
if (item.name === "odul_havuzu") this.odul_havuzu = parseFloat(item.value) || -1;
if (item.name === "masa_id") this.masa_id = parseInt(item.value) || -1;
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "oyun_id", value: this.oyun_id.toString() || "-1" },
{ name: "baslatan_id", value: this.baslatan_id.toString() || "-1" },
{ name: "katilan_id", value: this.katilan_id.toString() || "-1" },
{ name: "durum", value: this.durum || "" },
{ name: "kazanan_id", value: this.kazanan_id.toString() || "-1" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi },
{ name: "bitis_zamani", value: this.bitis_zamani || simdi },
{ name: "tur_sayisi", value: this.tur_sayisi.toString() || "-1" },
{ name: "mevcut_tur", value: this.mevcut_tur.toString() || "-1" },
{ name: "baslatan_skor", value: this.baslatan_skor.toString() || "-1" },
{ name: "katilan_skor", value: this.katilan_skor.toString() || "-1" },
{ name: "sira_kimde", value: this.sira_kimde.toString() || "-1" },
{ name: "hamle_suresi", value: this.hamle_suresi.toString() || "-1" },
{ name: "son_hamle_zamani", value: this.son_hamle_zamani || simdi },
{ name: "katilim_ucreti", value: this.katilim_ucreti.toString() || "-1" },
{ name: "odul_havuzu", value: this.odul_havuzu.toString() || "-1" },
{ name: "masa_id", value: this.masa_id.toString() || "-1" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "oyunlar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "oyun_id", value: this.oyun_id.toString() || "-1" },
{ name: "baslatan_id", value: this.baslatan_id.toString() || "-1" },
{ name: "katilan_id", value: this.katilan_id.toString() || "-1" },
{ name: "durum", value: this.durum || "" },
{ name: "kazanan_id", value: this.kazanan_id.toString() || "-1" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi },
{ name: "bitis_zamani", value: this.bitis_zamani || simdi },
{ name: "tur_sayisi", value: this.tur_sayisi.toString() || "-1" },
{ name: "mevcut_tur", value: this.mevcut_tur.toString() || "-1" },
{ name: "baslatan_skor", value: this.baslatan_skor.toString() || "-1" },
{ name: "katilan_skor", value: this.katilan_skor.toString() || "-1" },
{ name: "sira_kimde", value: this.sira_kimde.toString() || "-1" },
{ name: "hamle_suresi", value: this.hamle_suresi.toString() || "-1" },
{ name: "son_hamle_zamani", value: this.son_hamle_zamani || simdi },
{ name: "katilim_ucreti", value: this.katilim_ucreti.toString() || "-1" },
{ name: "odul_havuzu", value: this.odul_havuzu.toString() || "-1" },
{ name: "masa_id", value: this.masa_id.toString() || "-1" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "oyunlar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "oyunlar",
          "Verdat": "tkm_online",
          "veris": [{"name": "oyun_id", "value": this.oyun_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "oyunlar",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new oyunlar().fromApiObject(item));
    } catch (error) {
      console.error("oyunlar.list_cek hatası:", error);
      throw error;
    }
  }

}
class para_islemleri{
  constructor() {
this.islem_id = -1;
this.kullanici_id = -1;
this.islem_turu = "";
this.miktar = -1;
this.aciklama = "";
this.referans_id = -1;
this.islem_zamani = new Date();
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "islem_id") this.islem_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "islem_turu") this.islem_turu = item.value || "";
if (item.name === "miktar") this.miktar = parseFloat(item.value) || -1;
if (item.name === "aciklama") this.aciklama = item.value || "";
if (item.name === "referans_id") this.referans_id = parseInt(item.value) || -1;
if (item.name === "islem_zamani") this.islem_zamani = new Date(item.value) || new Date();
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "islem_id") this.islem_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "islem_turu") this.islem_turu = item.value || "";
if (item.name === "miktar") this.miktar = parseFloat(item.value) || -1;
if (item.name === "aciklama") this.aciklama = item.value || "";
if (item.name === "referans_id") this.referans_id = parseInt(item.value) || -1;
if (item.name === "islem_zamani") this.islem_zamani = new Date(item.value) || new Date();
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "islem_id", value: this.islem_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "islem_turu", value: this.islem_turu || "" },
{ name: "miktar", value: this.miktar.toString() || "-1" },
{ name: "aciklama", value: this.aciklama || "" },
{ name: "referans_id", value: this.referans_id.toString() || "-1" },
{ name: "islem_zamani", value: this.islem_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "para_islemleri",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "islem_id", value: this.islem_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "islem_turu", value: this.islem_turu || "" },
{ name: "miktar", value: this.miktar.toString() || "-1" },
{ name: "aciklama", value: this.aciklama || "" },
{ name: "referans_id", value: this.referans_id.toString() || "-1" },
{ name: "islem_zamani", value: this.islem_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "para_islemleri",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "para_islemleri",
          "Verdat": "tkm_online",
          "veris": [{"name": "islem_id", "value": this.islem_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "para_islemleri",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new para_islemleri().fromApiObject(item));
    } catch (error) {
      console.error("para_islemleri.list_cek hatası:", error);
      throw error;
    }
  }

}
class seviye_kategorileri{
  constructor() {
this.seviye_id = -1;
this.seviye_adi = "";
this.min_bakiye = -1;
this.max_bakiye = -1;
this.min_katilim_ucreti = -1;
this.max_katilim_ucreti = -1;
this.aciklama = "";
this.aktif = "";
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "seviye_id") this.seviye_id = parseInt(item.value) || -1;
if (item.name === "seviye_adi") this.seviye_adi = item.value || "";
if (item.name === "min_bakiye") this.min_bakiye = parseFloat(item.value) || -1;
if (item.name === "max_bakiye") this.max_bakiye = parseFloat(item.value) || -1;
if (item.name === "min_katilim_ucreti") this.min_katilim_ucreti = parseFloat(item.value) || -1;
if (item.name === "max_katilim_ucreti") this.max_katilim_ucreti = parseFloat(item.value) || -1;
if (item.name === "aciklama") this.aciklama = item.value || "";
if (item.name === "aktif") this.aktif = item.value || "";
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "seviye_id") this.seviye_id = parseInt(item.value) || -1;
if (item.name === "seviye_adi") this.seviye_adi = item.value || "";
if (item.name === "min_bakiye") this.min_bakiye = parseFloat(item.value) || -1;
if (item.name === "max_bakiye") this.max_bakiye = parseFloat(item.value) || -1;
if (item.name === "min_katilim_ucreti") this.min_katilim_ucreti = parseFloat(item.value) || -1;
if (item.name === "max_katilim_ucreti") this.max_katilim_ucreti = parseFloat(item.value) || -1;
if (item.name === "aciklama") this.aciklama = item.value || "";
if (item.name === "aktif") this.aktif = item.value || "";
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "seviye_id", value: this.seviye_id.toString() || "-1" },
{ name: "seviye_adi", value: this.seviye_adi || "" },
{ name: "min_bakiye", value: this.min_bakiye.toString() || "-1" },
{ name: "max_bakiye", value: this.max_bakiye.toString() || "-1" },
{ name: "min_katilim_ucreti", value: this.min_katilim_ucreti.toString() || "-1" },
{ name: "max_katilim_ucreti", value: this.max_katilim_ucreti.toString() || "-1" },
{ name: "aciklama", value: this.aciklama || "" },
{ name: "aktif", value: this.aktif || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "seviye_kategorileri",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "seviye_id", value: this.seviye_id.toString() || "-1" },
{ name: "seviye_adi", value: this.seviye_adi || "" },
{ name: "min_bakiye", value: this.min_bakiye.toString() || "-1" },
{ name: "max_bakiye", value: this.max_bakiye.toString() || "-1" },
{ name: "min_katilim_ucreti", value: this.min_katilim_ucreti.toString() || "-1" },
{ name: "max_katilim_ucreti", value: this.max_katilim_ucreti.toString() || "-1" },
{ name: "aciklama", value: this.aciklama || "" },
{ name: "aktif", value: this.aktif || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "seviye_kategorileri",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "seviye_kategorileri",
          "Verdat": "tkm_online",
          "veris": [{"name": "seviye_id", "value": this.seviye_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "seviye_kategorileri",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new seviye_kategorileri().fromApiObject(item));
    } catch (error) {
      console.error("seviye_kategorileri.list_cek hatası:", error);
      throw error;
    }
  }

}
class sunucu_loglari{
  constructor() {
this.log_id = -1;
this.istek_id = -1;
this.kullanici_id = -1;
this.olay_tipi = "";
this.seviye = "";
this.mesaj = "";
this.ekstra_veriler2 = "";
this.ip_adresi = "";
this.olusturma_zamani = new Date();
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "log_id") this.log_id = parseInt(item.value) || -1;
if (item.name === "istek_id") this.istek_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "olay_tipi") this.olay_tipi = item.value || "";
if (item.name === "seviye") this.seviye = item.value || "";
if (item.name === "mesaj") this.mesaj = item.value || "";
if (item.name === "ekstra_veriler2") this.ekstra_veriler2 = item.value || "";
if (item.name === "ip_adresi") this.ip_adresi = item.value || "";
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "log_id") this.log_id = parseInt(item.value) || -1;
if (item.name === "istek_id") this.istek_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "olay_tipi") this.olay_tipi = item.value || "";
if (item.name === "seviye") this.seviye = item.value || "";
if (item.name === "mesaj") this.mesaj = item.value || "";
if (item.name === "ekstra_veriler2") this.ekstra_veriler2 = item.value || "";
if (item.name === "ip_adresi") this.ip_adresi = item.value || "";
if (item.name === "olusturma_zamani") this.olusturma_zamani = new Date(item.value) || new Date();
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "log_id", value: this.log_id.toString() || "-1" },
{ name: "istek_id", value: this.istek_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "olay_tipi", value: this.olay_tipi || "" },
{ name: "seviye", value: this.seviye || "" },
{ name: "mesaj", value: this.mesaj || "" },
{ name: "ekstra_veriler2", value: this.ekstra_veriler2 || "" },
{ name: "ip_adresi", value: this.ip_adresi || "" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "sunucu_loglari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "log_id", value: this.log_id.toString() || "-1" },
{ name: "istek_id", value: this.istek_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "olay_tipi", value: this.olay_tipi || "" },
{ name: "seviye", value: this.seviye || "" },
{ name: "mesaj", value: this.mesaj || "" },
{ name: "ekstra_veriler2", value: this.ekstra_veriler2 || "" },
{ name: "ip_adresi", value: this.ip_adresi || "" },
{ name: "olusturma_zamani", value: this.olusturma_zamani || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "sunucu_loglari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "sunucu_loglari",
          "Verdat": "tkm_online",
          "veris": [{"name": "log_id", "value": this.log_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "sunucu_loglari",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new sunucu_loglari().fromApiObject(item));
    } catch (error) {
      console.error("sunucu_loglari.list_cek hatası:", error);
      throw error;
    }
  }

}
class tur_sonuclari{
  constructor() {
this.sonuc_id = -1;
this.oyun_id = -1;
this.tur_no = -1;
this.kazanan_id = -1;
this.berabere = "";
this.zaman = new Date();
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "sonuc_id") this.sonuc_id = parseInt(item.value) || -1;
if (item.name === "oyun_id") this.oyun_id = parseInt(item.value) || -1;
if (item.name === "tur_no") this.tur_no = parseInt(item.value) || -1;
if (item.name === "kazanan_id") this.kazanan_id = parseInt(item.value) || -1;
if (item.name === "berabere") this.berabere = item.value || "";
if (item.name === "zaman") this.zaman = new Date(item.value) || new Date();
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "sonuc_id") this.sonuc_id = parseInt(item.value) || -1;
if (item.name === "oyun_id") this.oyun_id = parseInt(item.value) || -1;
if (item.name === "tur_no") this.tur_no = parseInt(item.value) || -1;
if (item.name === "kazanan_id") this.kazanan_id = parseInt(item.value) || -1;
if (item.name === "berabere") this.berabere = item.value || "";
if (item.name === "zaman") this.zaman = new Date(item.value) || new Date();
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "sonuc_id", value: this.sonuc_id.toString() || "-1" },
{ name: "oyun_id", value: this.oyun_id.toString() || "-1" },
{ name: "tur_no", value: this.tur_no.toString() || "-1" },
{ name: "kazanan_id", value: this.kazanan_id.toString() || "-1" },
{ name: "berabere", value: this.berabere || "" },
{ name: "zaman", value: this.zaman || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "tur_sonuclari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "sonuc_id", value: this.sonuc_id.toString() || "-1" },
{ name: "oyun_id", value: this.oyun_id.toString() || "-1" },
{ name: "tur_no", value: this.tur_no.toString() || "-1" },
{ name: "kazanan_id", value: this.kazanan_id.toString() || "-1" },
{ name: "berabere", value: this.berabere || "" },
{ name: "zaman", value: this.zaman || simdi } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "tur_sonuclari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "tur_sonuclari",
          "Verdat": "tkm_online",
          "veris": [{"name": "sonuc_id", "value": this.sonuc_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "tur_sonuclari",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new tur_sonuclari().fromApiObject(item));
    } catch (error) {
      console.error("tur_sonuclari.list_cek hatası:", error);
      throw error;
    }
  }

}
class turnuva_asamalari{
  constructor() {
this.asama_id = -1;
this.turnuva_id = -1;
this.asama_no = -1;
this.asama_adi = "";
this.baslangic_zamani = new Date();
this.bitis_zamani = new Date();
this.durum = "";
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "asama_id") this.asama_id = parseInt(item.value) || -1;
if (item.name === "turnuva_id") this.turnuva_id = parseInt(item.value) || -1;
if (item.name === "asama_no") this.asama_no = parseInt(item.value) || -1;
if (item.name === "asama_adi") this.asama_adi = item.value || "";
if (item.name === "baslangic_zamani") this.baslangic_zamani = new Date(item.value) || new Date();
if (item.name === "bitis_zamani") this.bitis_zamani = new Date(item.value) || new Date();
if (item.name === "durum") this.durum = item.value || "";
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "asama_id") this.asama_id = parseInt(item.value) || -1;
if (item.name === "turnuva_id") this.turnuva_id = parseInt(item.value) || -1;
if (item.name === "asama_no") this.asama_no = parseInt(item.value) || -1;
if (item.name === "asama_adi") this.asama_adi = item.value || "";
if (item.name === "baslangic_zamani") this.baslangic_zamani = new Date(item.value) || new Date();
if (item.name === "bitis_zamani") this.bitis_zamani = new Date(item.value) || new Date();
if (item.name === "durum") this.durum = item.value || "";
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "asama_id", value: this.asama_id.toString() || "-1" },
{ name: "turnuva_id", value: this.turnuva_id.toString() || "-1" },
{ name: "asama_no", value: this.asama_no.toString() || "-1" },
{ name: "asama_adi", value: this.asama_adi || "" },
{ name: "baslangic_zamani", value: this.baslangic_zamani || simdi },
{ name: "bitis_zamani", value: this.bitis_zamani || simdi },
{ name: "durum", value: this.durum || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "turnuva_asamalari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "asama_id", value: this.asama_id.toString() || "-1" },
{ name: "turnuva_id", value: this.turnuva_id.toString() || "-1" },
{ name: "asama_no", value: this.asama_no.toString() || "-1" },
{ name: "asama_adi", value: this.asama_adi || "" },
{ name: "baslangic_zamani", value: this.baslangic_zamani || simdi },
{ name: "bitis_zamani", value: this.bitis_zamani || simdi },
{ name: "durum", value: this.durum || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "turnuva_asamalari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "turnuva_asamalari",
          "Verdat": "tkm_online",
          "veris": [{"name": "asama_id", "value": this.asama_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "turnuva_asamalari",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new turnuva_asamalari().fromApiObject(item));
    } catch (error) {
      console.error("turnuva_asamalari.list_cek hatası:", error);
      throw error;
    }
  }

}
class turnuva_katilimcilari{
  constructor() {
this.katilim_id = -1;
this.turnuva_id = -1;
this.kullanici_id = -1;
this.kayit_zamani = new Date();
this.elendi_mi = "";
this.siralama = -1;
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "katilim_id") this.katilim_id = parseInt(item.value) || -1;
if (item.name === "turnuva_id") this.turnuva_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "kayit_zamani") this.kayit_zamani = new Date(item.value) || new Date();
if (item.name === "elendi_mi") this.elendi_mi = item.value || "";
if (item.name === "siralama") this.siralama = parseInt(item.value) || -1;
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "katilim_id") this.katilim_id = parseInt(item.value) || -1;
if (item.name === "turnuva_id") this.turnuva_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "kayit_zamani") this.kayit_zamani = new Date(item.value) || new Date();
if (item.name === "elendi_mi") this.elendi_mi = item.value || "";
if (item.name === "siralama") this.siralama = parseInt(item.value) || -1;
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "katilim_id", value: this.katilim_id.toString() || "-1" },
{ name: "turnuva_id", value: this.turnuva_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "kayit_zamani", value: this.kayit_zamani || simdi },
{ name: "elendi_mi", value: this.elendi_mi || "" },
{ name: "siralama", value: this.siralama.toString() || "-1" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "turnuva_katilimcilari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "katilim_id", value: this.katilim_id.toString() || "-1" },
{ name: "turnuva_id", value: this.turnuva_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "kayit_zamani", value: this.kayit_zamani || simdi },
{ name: "elendi_mi", value: this.elendi_mi || "" },
{ name: "siralama", value: this.siralama.toString() || "-1" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "turnuva_katilimcilari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "turnuva_katilimcilari",
          "Verdat": "tkm_online",
          "veris": [{"name": "katilim_id", "value": this.katilim_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "turnuva_katilimcilari",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new turnuva_katilimcilari().fromApiObject(item));
    } catch (error) {
      console.error("turnuva_katilimcilari.list_cek hatası:", error);
      throw error;
    }
  }

}
class turnuva_maclari{
  constructor() {
this.t_mac_id = -1;
this.turnuva_id = -1;
this.asama_id = -1;
this.oyun_id = -1;
this.oyuncu1_id = -1;
this.oyuncu2_id = -1;
this.kazanan_id = -1;
this.mac_sirasi = -1;
this.durum = "";
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "t_mac_id") this.t_mac_id = parseInt(item.value) || -1;
if (item.name === "turnuva_id") this.turnuva_id = parseInt(item.value) || -1;
if (item.name === "asama_id") this.asama_id = parseInt(item.value) || -1;
if (item.name === "oyun_id") this.oyun_id = parseInt(item.value) || -1;
if (item.name === "oyuncu1_id") this.oyuncu1_id = parseInt(item.value) || -1;
if (item.name === "oyuncu2_id") this.oyuncu2_id = parseInt(item.value) || -1;
if (item.name === "kazanan_id") this.kazanan_id = parseInt(item.value) || -1;
if (item.name === "mac_sirasi") this.mac_sirasi = parseInt(item.value) || -1;
if (item.name === "durum") this.durum = item.value || "";
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "t_mac_id") this.t_mac_id = parseInt(item.value) || -1;
if (item.name === "turnuva_id") this.turnuva_id = parseInt(item.value) || -1;
if (item.name === "asama_id") this.asama_id = parseInt(item.value) || -1;
if (item.name === "oyun_id") this.oyun_id = parseInt(item.value) || -1;
if (item.name === "oyuncu1_id") this.oyuncu1_id = parseInt(item.value) || -1;
if (item.name === "oyuncu2_id") this.oyuncu2_id = parseInt(item.value) || -1;
if (item.name === "kazanan_id") this.kazanan_id = parseInt(item.value) || -1;
if (item.name === "mac_sirasi") this.mac_sirasi = parseInt(item.value) || -1;
if (item.name === "durum") this.durum = item.value || "";
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "t_mac_id", value: this.t_mac_id.toString() || "-1" },
{ name: "turnuva_id", value: this.turnuva_id.toString() || "-1" },
{ name: "asama_id", value: this.asama_id.toString() || "-1" },
{ name: "oyun_id", value: this.oyun_id.toString() || "-1" },
{ name: "oyuncu1_id", value: this.oyuncu1_id.toString() || "-1" },
{ name: "oyuncu2_id", value: this.oyuncu2_id.toString() || "-1" },
{ name: "kazanan_id", value: this.kazanan_id.toString() || "-1" },
{ name: "mac_sirasi", value: this.mac_sirasi.toString() || "-1" },
{ name: "durum", value: this.durum || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "turnuva_maclari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "t_mac_id", value: this.t_mac_id.toString() || "-1" },
{ name: "turnuva_id", value: this.turnuva_id.toString() || "-1" },
{ name: "asama_id", value: this.asama_id.toString() || "-1" },
{ name: "oyun_id", value: this.oyun_id.toString() || "-1" },
{ name: "oyuncu1_id", value: this.oyuncu1_id.toString() || "-1" },
{ name: "oyuncu2_id", value: this.oyuncu2_id.toString() || "-1" },
{ name: "kazanan_id", value: this.kazanan_id.toString() || "-1" },
{ name: "mac_sirasi", value: this.mac_sirasi.toString() || "-1" },
{ name: "durum", value: this.durum || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "turnuva_maclari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "turnuva_maclari",
          "Verdat": "tkm_online",
          "veris": [{"name": "t_mac_id", "value": this.t_mac_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "turnuva_maclari",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new turnuva_maclari().fromApiObject(item));
    } catch (error) {
      console.error("turnuva_maclari.list_cek hatası:", error);
      throw error;
    }
  }

}
class turnuvalar{
  constructor() {
this.turnuva_id = -1;
this.turnuva_adi = "";
this.baslangic_zamani = new Date();
this.bitis_zamani = new Date();
this.durum = "";
this.katilim_ucreti = -1;
this.odul_havuzu = -1;
this.birinci_odul_yuzdesi = -1;
this.ikinci_odul_yuzdesi = -1;
this.ucuncu_odul_yuzdesi = -1;
this.max_katilimci = -1;
this.mevcut_katilimci = -1;
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "turnuva_id") this.turnuva_id = parseInt(item.value) || -1;
if (item.name === "turnuva_adi") this.turnuva_adi = item.value || "";
if (item.name === "baslangic_zamani") this.baslangic_zamani = new Date(item.value) || new Date();
if (item.name === "bitis_zamani") this.bitis_zamani = new Date(item.value) || new Date();
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "katilim_ucreti") this.katilim_ucreti = parseFloat(item.value) || -1;
if (item.name === "odul_havuzu") this.odul_havuzu = parseFloat(item.value) || -1;
if (item.name === "birinci_odul_yuzdesi") this.birinci_odul_yuzdesi = parseInt(item.value) || -1;
if (item.name === "ikinci_odul_yuzdesi") this.ikinci_odul_yuzdesi = parseInt(item.value) || -1;
if (item.name === "ucuncu_odul_yuzdesi") this.ucuncu_odul_yuzdesi = parseInt(item.value) || -1;
if (item.name === "max_katilimci") this.max_katilimci = parseInt(item.value) || -1;
if (item.name === "mevcut_katilimci") this.mevcut_katilimci = parseInt(item.value) || -1;
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "turnuva_id") this.turnuva_id = parseInt(item.value) || -1;
if (item.name === "turnuva_adi") this.turnuva_adi = item.value || "";
if (item.name === "baslangic_zamani") this.baslangic_zamani = new Date(item.value) || new Date();
if (item.name === "bitis_zamani") this.bitis_zamani = new Date(item.value) || new Date();
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "katilim_ucreti") this.katilim_ucreti = parseFloat(item.value) || -1;
if (item.name === "odul_havuzu") this.odul_havuzu = parseFloat(item.value) || -1;
if (item.name === "birinci_odul_yuzdesi") this.birinci_odul_yuzdesi = parseInt(item.value) || -1;
if (item.name === "ikinci_odul_yuzdesi") this.ikinci_odul_yuzdesi = parseInt(item.value) || -1;
if (item.name === "ucuncu_odul_yuzdesi") this.ucuncu_odul_yuzdesi = parseInt(item.value) || -1;
if (item.name === "max_katilimci") this.max_katilimci = parseInt(item.value) || -1;
if (item.name === "mevcut_katilimci") this.mevcut_katilimci = parseInt(item.value) || -1;
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "turnuva_id", value: this.turnuva_id.toString() || "-1" },
{ name: "turnuva_adi", value: this.turnuva_adi || "" },
{ name: "baslangic_zamani", value: this.baslangic_zamani || simdi },
{ name: "bitis_zamani", value: this.bitis_zamani || simdi },
{ name: "durum", value: this.durum || "" },
{ name: "katilim_ucreti", value: this.katilim_ucreti.toString() || "-1" },
{ name: "odul_havuzu", value: this.odul_havuzu.toString() || "-1" },
{ name: "birinci_odul_yuzdesi", value: this.birinci_odul_yuzdesi.toString() || "-1" },
{ name: "ikinci_odul_yuzdesi", value: this.ikinci_odul_yuzdesi.toString() || "-1" },
{ name: "ucuncu_odul_yuzdesi", value: this.ucuncu_odul_yuzdesi.toString() || "-1" },
{ name: "max_katilimci", value: this.max_katilimci.toString() || "-1" },
{ name: "mevcut_katilimci", value: this.mevcut_katilimci.toString() || "-1" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "turnuvalar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "turnuva_id", value: this.turnuva_id.toString() || "-1" },
{ name: "turnuva_adi", value: this.turnuva_adi || "" },
{ name: "baslangic_zamani", value: this.baslangic_zamani || simdi },
{ name: "bitis_zamani", value: this.bitis_zamani || simdi },
{ name: "durum", value: this.durum || "" },
{ name: "katilim_ucreti", value: this.katilim_ucreti.toString() || "-1" },
{ name: "odul_havuzu", value: this.odul_havuzu.toString() || "-1" },
{ name: "birinci_odul_yuzdesi", value: this.birinci_odul_yuzdesi.toString() || "-1" },
{ name: "ikinci_odul_yuzdesi", value: this.ikinci_odul_yuzdesi.toString() || "-1" },
{ name: "ucuncu_odul_yuzdesi", value: this.ucuncu_odul_yuzdesi.toString() || "-1" },
{ name: "max_katilimci", value: this.max_katilimci.toString() || "-1" },
{ name: "mevcut_katilimci", value: this.mevcut_katilimci.toString() || "-1" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "turnuvalar",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "turnuvalar",
          "Verdat": "tkm_online",
          "veris": [{"name": "turnuva_id", "value": this.turnuva_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "turnuvalar",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new turnuvalar().fromApiObject(item));
    } catch (error) {
      console.error("turnuvalar.list_cek hatası:", error);
      throw error;
    }
  }

}
class websocket_baglantilari{
  constructor() {
this.baglanti_id = -1;
this.kullanici_id = -1;
this.connection_id = "";
this.baglanti_zamani = new Date();
this.son_aktivite = new Date();
this.durum = "";
this.ip_adresi = "";
this.tarayici_bilgisi = "";
}
fromApiObject(data) {
    if (!data || !data.vers) return this;
    
    for (const item of data.vers) {
      if (item.name === "baglanti_id") this.baglanti_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "connection_id") this.connection_id = item.value || "";
if (item.name === "baglanti_zamani") this.baglanti_zamani = new Date(item.value) || new Date();
if (item.name === "son_aktivite") this.son_aktivite = new Date(item.value) || new Date();
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "ip_adresi") this.ip_adresi = item.value || "";
if (item.name === "tarayici_bilgisi") this.tarayici_bilgisi = item.value || "";
 }
    
    return this;
  }
guncelle(data) {
   if (!data) return this;
    if (Array.isArray(data)) {
      for (const item of data) { if (item.name === "baglanti_id") this.baglanti_id = parseInt(item.value) || -1;
if (item.name === "kullanici_id") this.kullanici_id = parseInt(item.value) || -1;
if (item.name === "connection_id") this.connection_id = item.value || "";
if (item.name === "baglanti_zamani") this.baglanti_zamani = new Date(item.value) || new Date();
if (item.name === "son_aktivite") this.son_aktivite = new Date(item.value) || new Date();
if (item.name === "durum") this.durum = item.value || "";
if (item.name === "ip_adresi") this.ip_adresi = item.value || "";
if (item.name === "tarayici_bilgisi") this.tarayici_bilgisi = item.value || "";
  }
    }
    
    return this;
  }
async ekle() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "baglanti_id", value: this.baglanti_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "connection_id", value: this.connection_id || "" },
{ name: "baglanti_zamani", value: this.baglanti_zamani || simdi },
{ name: "son_aktivite", value: this.son_aktivite || simdi },
{ name: "durum", value: this.durum || "" },
{ name: "ip_adresi", value: this.ip_adresi || "" },
{ name: "tarayici_bilgisi", value: this.tarayici_bilgisi || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 1,
          "clmny": "websocket_baglantilari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async update() {
    try {
      // Şu anki tarih ve saati ISO formatında alıyoruz
      const simdi = new Date().toISOString();
      
      const veris = [
        { name: "baglanti_id", value: this.baglanti_id.toString() || "-1" },
{ name: "kullanici_id", value: this.kullanici_id.toString() || "-1" },
{ name: "connection_id", value: this.connection_id || "" },
{ name: "baglanti_zamani", value: this.baglanti_zamani || simdi },
{ name: "son_aktivite", value: this.son_aktivite || simdi },
{ name: "durum", value: this.durum || "" },
{ name: "ip_adresi", value: this.ip_adresi || "" },
{ name: "tarayici_bilgisi", value: this.tarayici_bilgisi || "" } 
     ];

      const apiUrl = "https://steamturkiye.com/api/Connect";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 2,
          "clmny": "websocket_baglantilari",
          "Verdat": "tkm_online",
          "veris": veris,
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}  `);
      }
      
      
      return response;
    } catch (error) {
      throw error;
    }
  }
async sil() {
    try {
      const apiUrl = "https://steamturkiye.com/api/Connect";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {  
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 6,
          "clmny": "websocket_baglantilari",
          "Verdat": "tkm_online",
          "veris": [{"name": "baglanti_id", "value": this.baglanti_id.toString() || "-1"}],
          "kim": ""
        })
      });
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
static async list_cek(sorgu) {
    try {
      const response = await fetch("https://steamturkiye.com/api/Connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "veritip": 3,
          "clmny": "websocket_baglantilari",
          "Verdat": "tkm_online",
          "veris": [{"name": "3", "value": sorgu}],
          "kim": ""
        })
      });
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error("API'den geçerli veri alınamadı");
      }
      
      return data.map(item => new websocket_baglantilari().fromApiObject(item));
    } catch (error) {
      console.error("websocket_baglantilari.list_cek hatası:", error);
      throw error;
    }
  }

}


// Veritabanı seçme yardımcı fonksiyonu
function getDatabase(env, dbName) {
  // Verdat boş ise veya belirtilmemişse varsayılan olarak dbmiz kullan
  if (!dbName || dbName.trim() === "") {
    return env.dbmiz;
  }
  
  // Verdat'ta belirtilen veritabanını kullan
  // Eğer belirtilen veritabanı yoksa ve hata önlemek istiyorsak kontrol ekleyebiliriz
  if (!env[dbName]) {
    throw new Error(`Veritabanı bulunamadı: ${dbName}`);
  }
  
  return env[dbName];
}

export default {
  async fetch(request, env, ctx) {
    try {
      if (request.method === "POST") {
        // Gönderilen JSON verisini alıyoruz
        let data;
        try {
          data = await request.json();
          console.log("Gelen istek verisi:", JSON.stringify(data));
        } catch (error) {
          console.error("JSON ayrıştırma hatası:", error);
          return new Response(JSON.stringify({
            success: false,
            message: "Geçersiz JSON formatı: " + error.message
          }), { 
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }
        
        // Root_hab yapısını kontrol ediyoruz
        if (!data.clmny) {
          return new Response(JSON.stringify({
            success: false,
            message: "clmny (tablo adı) alanı zorunludur."
          }), { 
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }
        
        if (data.veritip === undefined) {
          return new Response(JSON.stringify({
            success: false,
            message: "veritip alanı zorunludur."
          }), { 
            status: 400, 
            headers: { "Content-Type": "application/json" }
          });
        }

        // veritip değerine göre işlem yapıyoruz
        switch (data.veritip) {
          case 1: // Veri Ekleme
        switch(data.clmny)
        {
          case "api_istekler":
            const api_isteklerim = new api_istekler();
             api_isteklerim.guncelle(data.veris);
            switch(api_isteklerim.istek_tipi) 
            {
              case "kullanici_ekle":
                try {
                 
                  const kulvarmi = await kullanicilar.list_cek('kullanici_adi="'+ api_isteklerim.istek_verisi + '"');
                  
                  if(kulvarmi.length > 0) {
                    console.log("Kullanıcı zaten var:", api_isteklerim.istek_verisi);
                    return new Response("Bu kullanıcı adı zaten kullanılıyor.", { 
                      headers: { "Content-Type": "application/json" },
                      status: 400 
                    });
                  } else {
                    
                    const kkci = new kullanicilar();
                    
                    kkci.kullanici_adi = api_isteklerim.istek_verisi;
                    kkci.bakiye = 1000;
                    kkci.seviye = 1;
                    kkci.toplam_tecrube = 0;
                    kkci.avatar = "default_avatar.png";
                    kkci.durum = "aktif";
                    kkci.son_aktivite = new Date().toISOString();
                    kkci.kayit_zamani = new Date().toISOString();
                    kkci.isim = "p"+Math.random().toString(36).substring(2, 15);
                   await kkci.ekle();

                    return new Response(JSON.stringify("oke"), {
                      headers: { "Content-Type": "application/json" },
                      status: 200
                    });
                  }
                } catch (error) {
                  return new Response(JSON.stringify({ 
                    success: false, 
                    message: "Kullanıcı eklenirken hata oluştu: " + error.message
                  }), {
                    headers: { "Content-Type": "application/json" },
                    status: 500
                  });
                }
                break;
                case "masa_olustur":
                  try {
                     
           var  kkm = await kullanicilar.list_cek("kullanici_adi='"+ data.kim + "'");
                       if(kkm.length < 1)
                        {
                          return new Response("hata.", { status: 400 });
                        }
                       const istk= JSON.parse(api_isteklerim.istek_verisi);
                        if(kkm[0].bakiye < istk.katilim_ucreti)
                        {
                          return new Response("Bakiye yetersiz.", { status: 400 });
                        }
                        if(istk.katilim_ucreti < 1)
                        {
                          return new Response("Bahis miktarı 1'den küçük olamaz.", { status: 400 });
                        } 
                        if(istk.max_oyuncu < 2)
                        {
                          return new Response("Maksimum oyuncu sayısı 2'den küçük olamaz.", { status: 400 });
                        }
                        if(istk.max_oyuncu > 10)
                        {
                          return new Response("Maksimum oyuncu sayısı 10'dan büyük olamaz.", { status: 400 });
                        }
                    
                    try {
                      let yeniMasa = new masalar();
                      yeniMasa.masa_adi = "Masa " +istk.masa_adi; 
                     yeniMasa.olusturan_id = kkm[0].kullanici_id;
                     yeniMasa.oyun_turu = istk.oyun_turu || "tas_kagit_makas";
                     yeniMasa.katilim_ucreti = istk.katilim_ucreti || 0;
                     yeniMasa.ozel_masa = istk.ozel_masa || 0;
                     yeniMasa.max_oyuncu = istk.max_oyuncu || 2;
                     yeniMasa.mevcut_oyuncu = 1;
                     yeniMasa.durum = "aktif";
                     yeniMasa.olusturma_zamani = new Date().toISOString();
                 let yeniMasaId = await yeniMasa.ekle();
                     const yeniKatilimci = new masa_oyunculari();
                     yeniKatilimci.masa_id = parseInt(yeniMasaId);
                     yeniKatilimci.oyuncu_adi = kkm[0].isim;
                     yeniKatilimci.pozisyon = 1;
                     yeniKatilimci.kullanici_id = kkm[0].kullanici_id;
                     yeniKatilimci.katilim_zamani = new Date().toISOString();
                     await yeniKatilimci.ekle();
  
                    } catch (error) {
                      return new Response(JSON.stringify({ 
                        success: false, 
                        message: "Masa oluşturulurken hata oluştu2x: " + error.message
                      }), {
                        headers: { "Content-Type": "application/json" },
                        status: 500
                      });
                    }
                   
                    
                    
                    
                    return new Response(JSON.stringify({
                      success: true,
                      message: "Masa başarıyla oluşturuldu",
                      masa_id: -1
                    }), {
                      headers: { "Content-Type": "application/json" },
                      status: 200
                    });
                  } catch (error) {
                    return new Response(JSON.stringify({ 
                      success: false, 
                      message: "Masa oluşturulurken hata oluştu1: " + error.message
                    }), {
                      headers: { "Content-Type": "application/json" },
                      status: 500
                    });
                  }
                  break;
               case "masaya_katil":
                try {
                  const kkm = await kullanicilar.list_cek("kullanici_adi='"+ data.kim + "'");
                  if(kkm.length < 1)
                  {
                    return new Response("Kullanıcı bulunamadı.", { status: 400 });
                  }
                  const istk= JSON.parse(api_isteklerim.istek_verisi);
                  let masa = await masalar.list_cek("masa_id="+istk.masa_id);
                  if(masa.length < 1)
                  {
                    return new Response("Masa bulunamadı.", { status: 400 });
                  }
                  if(masa[0].mevcut_oyuncu >= masa[0].max_oyuncu)
                  {
                    return new Response("Masa dolu.", { status: 400 });
                  }
                  if(kkm[0].bakiye < masa[0].katilim_ucreti)
                  {
                    return new Response("Bakiye yetersiz.", { status: 400 });
                  }
                  const oyuncuvmi = await masa_oyunculari.list_cek("kullanici_id=" + kkm[0].kullanici_id);
                  if(oyuncuvmi.length > 0)
                  {
                    return new Response("Bu kullanıcı zaten masada var.", { status: 200 });
                  }

                  const mevcutOyuncular = await masa_oyunculari.list_cek("masa_id=" + masa[0].masa_id);
                  const yeniKatilimci = new masa_oyunculari();
                  yeniKatilimci.masa_id = masa[0].masa_id;
                  
                  // Masadaki mevcut pozisyonları kontrol et
                  const kullanilanPozisyonlar = mevcutOyuncular.map(oyuncu => oyuncu.pozisyon);
                  
                  // Boş olan ilk pozisyonu bul (1-4 arası)
                  let pozisyon = 1;
                  while (kullanilanPozisyonlar.includes(pozisyon) && pozisyon <= 4) {
                    pozisyon++;
                  }
                  yeniKatilimci.oyuncu_adi = kkm[0].isim;
                  yeniKatilimci.pozisyon = pozisyon;
                  yeniKatilimci.kullanici_id = kkm[0].kullanici_id;
                  yeniKatilimci.katilim_zamani = new Date().toISOString();
                  await yeniKatilimci.ekle();
                  
                  masa[0].mevcut_oyuncu++;
                  await masa[0].update();
                  
                  return new Response(JSON.stringify({
                    success: true,
                    message: "Masa başarıyla katıldınız",
                    masa_id: masa[0].masa_id
                  }), {
                    headers: { "Content-Type": "application/json" },
                    status: 200
                  });
                  
                  
                } catch (error) {
                  return new Response(JSON.stringify({
                    success: false,
                    message: "Masa katılımı sırasında hata oluştu: " + error.message
                  }), {
                    headers: { "Content-Type": "application/json" },
                    status: 500
                  });
                }
                break;
               case "masadan_cik":
                try {
                  const kkm = await kullanicilar.list_cek("kullanici_adi='"+ data.kim + "'");
                  if(kkm.length < 1)
                  {
                    return new Response("Kullanıcı bulunamadı.", { status: 400 });
                  }
                  const masas = await masa_oyunculari.list_cek("kullanici_id="+ kkm[0].kullanici_id);
                  if(masas.length < 1)
                  {
                    return new Response("Bu kullanıcı masada yok.", { status: 400 });
                  }
                  let masa = await masalar.list_cek("masa_id="+masas[0].masa_id);
                  if(masa.length < 1)
                  {
                    return new Response("Masa bulunamadı.", { status: 400 });
                  }

                  await masas[0].sil();
                  masa[0].mevcut_oyuncu--;
                  await masa[0].update();
                  
                  return new Response(JSON.stringify({
                    success: true,
                    message: "Masa başarıyla terk edildiniz",
                    masa_id: masa[0].masa_id
                  }), {
                    headers: { "Content-Type": "application/json" },
                    status: 200
                  });
                } catch (error) {
                  
                }
                break;
               case "masa_hazir":
                try {
                  const kkm = await kullanicilar.list_cek("kullanici_adi='"+ data.kim + "'"); 
                  if(kkm.length < 1)
                  {
                    return new Response("Kullanıcı bulunamadı.", { status: 400 });
                  }
                  const masas = await masa_oyunculari.list_cek("kullanici_id="+ kkm[0].kullanici_id);
                  if(masas.length < 1)
                  {
                    return new Response("Bu kullanıcı masada yok.", { status: 400 });
                  }
                  const masa = await masalar.list_cek("masa_id="+masas[0].masa_id);
                  if(masa.length < 1)
                  {
                    return new Response("Masa bulunamadı.", { status: 400 });
                  }
                  if(masa[0].durum === "start1")
                  {
                    masas[0].hazir = "hazir";
                    await masas[0].update();
                    return new Response(JSON.stringify({
                      success: true,
                      message: "Masa hazır durumunuz güncellendi",
                      masa_id: masa[0].masa_id
                    }), {
                      headers: { "Content-Type": "application/json" },
                      status: 200
                    });
                  }
                  
                } catch (error) {
                  
                }
                break;
               
                default:
            return new Response("istek_tipi geçersiz."+api_isteklerim.istek_tipi  , { status: 400 });
                
            }
            return new Response(JSON.stringify(api_isteklerim), {
              headers: { "Content-Type": "application/json" },
              status: 200
            });
            //return await insertData(env, data);
            break;
            
        }
          //  return await insertData(env, data);
           return new Response("Ok: " , { status: 200 });
            
          case 3: // Veri Çekme
          if(data.kim.length < 1)
          {
            return new Response("hata.", { status: 400 });
          }
          switch(data.clmny){
            case "kullanicilar":
              const    kullanicilarim = await kullanicilar.list_cek("kullanici_adi='"+ data.kim + "'");
              if(kullanicilarim.length < 1)
              {
                return new Response("hata.", { status: 400 });
              }
              
              // Verileri istenen formata dönüştür
              const formatlanmisVeri = kullanicilarim.map(kullanici => {
                const vers = [];
                for (const [key, value] of Object.entries(kullanici)) {
                  vers.push({
                    "name": key,
                    "value": value.toString()
                  });
                }
                return {
                  "vers": vers,
                  "isim": "kullanicilar"
                };
              });
              
              return new Response(JSON.stringify(formatlanmisVeri), {
                headers: { "Content-Type": "application/json" },
                status: 200
              }); 
              break;
              case "masalar":
                let masaSorgusu = "durum='aktif'";
                const masalarim = await masalar.list_cek(masaSorgusu);
                if(masalarim.length < 1)
                {
                  return new Response("Uygun masa bulunamadı.", { status: 400 });
                }
                
                // Verileri istenen formata dönüştür
                const formatlanmisMasa = masalarim.map(masa => {
                  const vers = [];
                  for (const [key, value] of Object.entries(masa)) {
                    vers.push({
                      "name": key,
                      "value": value.toString()
                    });
                  }
                  return {
                    "vers": vers,
                    "isim": "masalar"
                  };
                });
                
                return new Response(JSON.stringify(formatlanmisMasa), {
                  headers: { "Content-Type": "application/json" },
                  status: 200
                }); 
                break;
                case "masa_oyunculari":
                const masa_oyunculari_liste = await masa_oyunculari.list_cek(data.veris[0].value);
                if(masa_oyunculari_liste.length < 1)
                {
                  return new Response("Uygun masa bulunamadı.", { status: 400 });
                }
                let masam = await masalar.list_cek("masa_id="+masa_oyunculari_liste[0].masa_id);
                if(masam.length < 1)
                {
                  return new Response("Masa bulunamadı.", { status: 400 });
                }
                if(masam[0].mevcut_oyuncu == masam[0].max_oyuncu)
                  {
                    if(masam[0].durum == "aktif")
                    {
                      masam[0].guncelleme_zamani = new Date().toISOString();
                      masam[0].durum = "start1";
                      await masam[0].update();
                      for (let index = 0; index < masa_oyunculari_liste.length; index++) {
                        const element = masa_oyunculari_liste[index];
                        element.durum = "start1";
                        element.hazir = "-";
                        await element.update();
                      }
                    }
                    else if(masam[0].durum == "start1" && masa_oyunculari_liste.length === masam[0].max_oyuncu)
                    {


                      const tumuHazir = masa_oyunculari_liste.every(e => e.hazir === "hazir");
                      if(tumuHazir)
                      {
                        masam[0].durum = "start2";
                        masam[0].guncelleme_zamani = new Date().toISOString();
                        await masam[0].update();
                      }
                      else
                      {
                       if(new Date(masam[0].guncelleme_zamani).getTime() < Date.now() - 10000)  {
                        masam[0].durum = "aktif";
                        masam[0].guncelleme_zamani = new Date().toISOString();
                        await masam[0].update();
                        for (let index = masa_oyunculari_liste.length-1; index >=0; index--) {
                          const element = masa_oyunculari_liste[index];
                          if(element.hazir != "hazir")  
                          {
                            masam[0].mevcut_oyuncu--;
                            await masam[0].update();
                            await element.sil();
                          }
                          else
                          {

                            element.hazir = "-";
                            element.durum = "";
                            await element.update();
                          }
                        }
                        if(masam[0].mevcut_oyuncu == 0)
                        {
                         await masam[0].sil();
                          return new Response(JSON.stringify({
                            success: true,
                            message: "Masa başarıyla silindi",
                            masa_id: -1
                          }), {
                            headers: { "Content-Type": "application/json" },
                            status: 200
                          });
                        }
                      }
                      
                    }
                  }
                }
                const formatlanmisMasa_oyunculari = masa_oyunculari_liste.map(masa_oyuncu => {
                  const vers = [];
                  for (const [key, value] of Object.entries(masa_oyuncu)) {
                    vers.push({
                      "name": key,
                      "value": value.toString()
                    });
                  }
                  return {
                    "vers": vers,
                    "isim": "masa_oyunculari"
                  };
                });
                return new Response(JSON.stringify(formatlanmisMasa_oyunculari), {
                  headers: { "Content-Type": "application/json" },
                  status: 200
                });

                break;
                
              default:
            return new Response("hata.", { status: 400 });
          }
         
          default:
            return new Response("Geçersiz veritip değeri. 1, 2, 3 veya 6 olmalıdır.", { status: 400 });
        }
      }
       else {
        return new Response("hata", {
          headers: { "Content-Type": "application/json" },
        });
      }
    } catch (error) {
      console.error("Genel hata:", error);
      return new Response(JSON.stringify({
        success: false,
        message: "İşlem sırasında hata oluştu: " + error.message,
        stack: error.stack
      }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
};

// Veri Ekleme (veritip = 1)
async function insertData(env, data) {
  try {
    // Tablo adı ve verileri alıyoruz
    const tableName = data.clmny;
    const veris = data.veris || [];
    
    // Verdat'tan veritabanını seçiyoruz
    const db = getDatabase(env, data.Verdat);
    
    if (!veris.length) {
      return new Response("Eklenecek veri bulunamadı.", { status: 400 });
    }
    
    // Tablonun Primary Key bilgisini çekelim
    const pragmaQuery = `PRAGMA table_info(${tableName})`;
    const pragmaResult = await db.prepare(pragmaQuery).all();
    
    // Primary Key alanlarını belirleyelim
    const primaryKeyColumns = [];
    if (pragmaResult.results && pragmaResult.results.length > 0) {
      // SQLite'ta Primary Key alanları pk=1 olarak işaretlenir
      pragmaResult.results.forEach(column => {
        if (column.pk === 1) {
          primaryKeyColumns.push(column.name.toLowerCase());
        }
      });
    }
    
    // Primary Key alanlarını filtreleyelim
    const filteredVeris = veris.filter(item => {
      const lowerName = item.name.toLowerCase();
      // Gerçek Primary Key alanlarını kontrol ediyoruz
      return !primaryKeyColumns.includes(lowerName);
    });
    
    // Eğer Primary Key bilgisi alınamazsa, yaygın isimlere göre filtreleme yapalım
    if (primaryKeyColumns.length === 0) {
      return new Response("Eklenecek veri bulunamadı.", { status: 400 });
    }
    
    // Kolon adlarını ve değerlerini ayırıyoruz
    const columnNames = filteredVeris.map(item => item.name);
    const placeholders = filteredVeris.map(() => "?").join(", ");
    const values = filteredVeris.map(item => item.value);
    
    // SQL sorgusunu oluşturuyoruz
    const query = `INSERT INTO ${tableName} (${columnNames.join(", ")}) VALUES (${placeholders})`;
    
    // Sorguyu çalıştırıyoruz
    const result = await db.prepare(query).bind(...values).run();
    
    // Sadece last_row_id değerini döndürüyoruz
    return new Response(JSON.stringify(result.meta.last_row_id), {
      headers: { "Content-Type": "application/json" },
      status: 201
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      message: "Veri eklenirken hata oluştu: " + error.message
    }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}
