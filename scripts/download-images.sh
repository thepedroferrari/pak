#!/bin/bash
# Download images from the original pakshaolin.org site
# Organized into categories for the new site

BASE="https://pakshaolin.org"
OUT="/Users/pedroferrari/D/pak/public/images"

download() {
  local url="$1"
  local dest="$2"
  if [ -f "$dest" ]; then
    echo "SKIP (exists): $dest"
    return
  fi
  echo "Downloading: $url -> $dest"
  curl -sL --max-time 15 -o "$dest" "$url"
  if [ $? -ne 0 ] || [ ! -s "$dest" ]; then
    echo "FAILED: $url"
    rm -f "$dest"
  fi
}

echo "=== INSTRUCTORS ==="
download "$BASE/layout_indice1/mestre_gilmar_dantas.jpg" "$OUT/instructors/gilmar-dantas.jpg"
download "$BASE/imagem/mestre_gilmar.jpg" "$OUT/instructors/gilmar-dantas-2.jpg"
download "$BASE/imagem/mestre%20Robson.jpg" "$OUT/instructors/robson-nobre.jpg"
download "$BASE/imagem/mestre_willians.jpg" "$OUT/instructors/willians-correia.jpg"
download "$BASE/imagem/sifu_flavio_dantas_biografia.jpg" "$OUT/instructors/flavio-dantas.jpg"
download "$BASE/imagem/sifu_egon_biogr.jpg" "$OUT/instructors/egon.jpg"
download "$BASE/imagem/sifu_giorgi_biogr.jpg" "$OUT/instructors/felipe-giorgi.jpg"
download "$BASE/imagem/sifu_novack.jpg" "$OUT/instructors/novack.jpg"
download "$BASE/imagem/sifu_erick.jpg" "$OUT/instructors/erick.jpg"
download "$BASE/imagem/sifu_naldo.jpg" "$OUT/instructors/naldo.jpg"
download "$BASE/imagem/instr_mario.jpg" "$OUT/instructors/mario.jpg"
download "$BASE/imagem/instr_santini.jpg" "$OUT/instructors/santini.jpg"
download "$BASE/imagem/instr_gustavo.jpg" "$OUT/instructors/gustavo.jpg"
download "$BASE/imagem/chan_small.jpg" "$OUT/instructors/chan-kowk-wai.jpg"

echo ""
echo "=== FAMOUS MARTIAL ARTISTS ==="
download "$BASE/bruce/brucelee4_small.jpg" "$OUT/famous/bruce-lee.jpg"
download "$BASE/layout_indice1/jackie.jpg" "$OUT/famous/jackie-chan.jpg"
download "$BASE/layout_indice1/jetli.jpg" "$OUT/famous/jet-li.jpg"
download "$BASE/layout_indice1/sammo.jpg" "$OUT/famous/sammo-hung.jpg"
download "$BASE/layout_indice1/donnie_yen.jpg" "$OUT/famous/donnie-yen.jpg"
download "$BASE/layout_indice1/cung_le.jpg" "$OUT/famous/cung-le.jpg"
download "$BASE/layout_indice1/Yi_long.jpg" "$OUT/famous/yi-long.jpg"
download "$BASE/layout_indice1/roy_nelson.jpg" "$OUT/famous/roy-nelson.jpg"

echo ""
echo "=== CULTURAL ==="
download "$BASE/layout_indice1/buda.jpg" "$OUT/cultural/buddha.jpg"
download "$BASE/medita/medit6_small.jpg" "$OUT/cultural/meditation.jpg"

echo ""
echo "=== LAYOUT / BRANDING ==="
download "$BASE/layout_indice1/logo30.jpg" "$OUT/layout/logo.jpg"
download "$BASE/layout_indice1/yinyang.gif" "$OUT/layout/yinyang.gif"
download "$BASE/layout_indice1/bandeira_associacao_pak.gif" "$OUT/layout/flag.gif"
download "$BASE/layout_indice1/dragao_associacao_pak.gif" "$OUT/layout/dragon.gif"
download "$BASE/layout_indice1/aba_centro.jpg" "$OUT/layout/center-tab.jpg"
download "$BASE/imagem/index06.jpg" "$OUT/layout/homepage-banner.jpg"
download "$BASE/imagem/fundo_index.jpg" "$OUT/layout/background.jpg"

echo ""
echo "=== GALLERY ==="
download "$BASE/imagem/arvoregenealogia.jpg" "$OUT/gallery/genealogy-tree.jpg"
download "$BASE/layout_indice1/chtlatgil1_small.jpg" "$OUT/gallery/training.jpg"
download "$BASE/videos/player_video_indice.jpg" "$OUT/gallery/video-thumb.jpg"
download "$BASE/layout_indice1/sala_atleta.jpg" "$OUT/gallery/athlete-room.jpg"
download "$BASE/imagem/pak40anos_small.jpg" "$OUT/gallery/40th-anniversary.jpg"

echo ""
echo "=== STORE ==="
download "$BASE/lojapak/lojabaner_small.jpg" "$OUT/store/store-banner.jpg"

echo ""
echo "=== COMPETITIONS ==="
download "$BASE/imagem/baner%20camp%20conquistados1.jpg" "$OUT/competitions/championships-banner.jpg"
download "$BASE/imagem/arnclass23thumb.jpg" "$OUT/competitions/arnold-classic-2023.jpg"
download "$BASE/campinterest25/camp_interest_2025%20(1)_small.jpg" "$OUT/competitions/interstate-2025.jpg"
download "$BASE/campxtreme2025/campxtreme2025_%20(1)_small.jpg" "$OUT/competitions/extreme-2025.jpg"

echo ""
echo "=== MISC ==="
download "$BASE/chen/mestre_chen_entrev_3_small.jpg" "$OUT/misc/master-chen-interview.jpg"
download "$BASE/avisosdoc/velho_mestre3.jpg" "$OUT/misc/old-master.jpg"
download "$BASE/layout_indice1/mic_entrevista.jpg" "$OUT/misc/interview-mic.jpg"
download "$BASE/layout_indice1/banner_entrevista.jpg" "$OUT/misc/interview-banner.jpg"
download "$BASE/layout_indice1/arquivo1.jpg" "$OUT/misc/archive.jpg"
download "$BASE/imagem/instagram.png" "$OUT/misc/instagram-icon.png"
download "$BASE/imagem/botao_facebook.png" "$OUT/misc/facebook-icon.png"
download "$BASE/imagem/botao_youtube.jpg" "$OUT/misc/youtube-icon.jpg"

echo ""
echo "=== DONE ==="
echo "Downloaded images summary:"
find "$OUT" -type f | wc -l
echo "total files"
