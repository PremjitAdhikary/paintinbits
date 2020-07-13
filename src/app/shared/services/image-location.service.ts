import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageLocationService {

  private _imgLocations = {
    whiteboard_banner: '/whiteboard/ArtWork_02_lo.jpg',
    whiteboard_from_my_comic_hi: '/whiteboard/fromMyComic_orig.jpg',
    whiteboard_from_my_comic_lo: '/whiteboard/fromMyComic_orig.jpg',
    whiteboard_artwork_01_hi: '/whiteboard/ArtWork_01_hi.jpg',
    whiteboard_artwork_01_lo: '/whiteboard/ArtWork_01_lo.jpg',
    whiteboard_artwork_01_thumb: '/whiteboard/ArtWork_01_thumb.jpg',
    whiteboard_artwork_02_hi: '/whiteboard/ArtWork_02_hi.jpg',
    whiteboard_artwork_02_lo: '/whiteboard/ArtWork_02_lo.jpg',
    whiteboard_artwork_02_thumb: '/whiteboard/ArtWork_02_thumb.jpg',
    whiteboard_artwork_03_hi: '/whiteboard/ArtWork_03_hi.jpg',
    whiteboard_artwork_03_lo: '/whiteboard/ArtWork_03_lo.jpg',
    whiteboard_artwork_03_thumb: '/whiteboard/ArtWork_03_thumb.jpg',
    whiteboard_artwork_04_hi: '/whiteboard/ArtWork_04_hi.jpg',
    whiteboard_artwork_04_lo: '/whiteboard/ArtWork_04_lo.jpg',
    whiteboard_artwork_04_thumb: '/whiteboard/ArtWork_04_thumb.jpg',
    whiteboard_artwork_05_hi: '/whiteboard/ArtWork_05_hi.jpg',
    whiteboard_artwork_05_lo: '/whiteboard/ArtWork_05_lo.jpg',
    whiteboard_artwork_05_thumb: '/whiteboard/ArtWork_05_thumb.jpg',
    whiteboard_artwork_06_hi: '/whiteboard/ArtWork_06_hi.jpg',
    whiteboard_artwork_06_lo: '/whiteboard/ArtWork_06_lo.jpg',
    whiteboard_artwork_06_thumb: '/whiteboard/ArtWork_06_thumb.jpg',
    whiteboard_artwork_07_hi: '/whiteboard/ArtWork_07_hi.jpg',
    whiteboard_artwork_07_lo: '/whiteboard/ArtWork_07_lo.jpg',
    whiteboard_artwork_07_thumb: '/whiteboard/ArtWork_07_thumb.jpg',
    whiteboard_artwork_08_hi: '/whiteboard/ArtWork_08_hi.jpg',
    whiteboard_artwork_08_lo: '/whiteboard/ArtWork_08_lo.jpg',
    whiteboard_artwork_08_thumb: '/whiteboard/ArtWork_08_thumb.jpg',
    whiteboard_artwork_09_hi: '/whiteboard/ArtWork_09_hi.jpg',
    whiteboard_artwork_09_lo: '/whiteboard/ArtWork_09_lo.jpg',
    whiteboard_artwork_09_thumb: '/whiteboard/ArtWork_09_thumb.jpg',
    whiteboard_artwork_10_hi: '/whiteboard/ArtWork_10_hi.jpg',
    whiteboard_artwork_10_lo: '/whiteboard/ArtWork_10_lo.jpg',
    whiteboard_artwork_10_thumb: '/whiteboard/ArtWork_10_thumb.jpg',
    whiteboard_artwork_11_hi: '/whiteboard/ArtWork_11_hi.jpg',
    whiteboard_artwork_11_lo: '/whiteboard/ArtWork_11_lo.jpg',
    whiteboard_artwork_11_thumb: '/whiteboard/ArtWork_11_thumb.jpg',
    whiteboard_artwork_12_hi: '/whiteboard/ArtWork_12_hi.jpg',
    whiteboard_artwork_12_lo: '/whiteboard/ArtWork_12_lo.jpg',
    whiteboard_artwork_12_thumb: '/whiteboard/ArtWork_12_thumb.jpg',
    whiteboard_artwork_14_hi: '/whiteboard/ArtWork_14_hi.jpg',
    whiteboard_artwork_14_lo: '/whiteboard/ArtWork_14_lo.jpg',
    whiteboard_artwork_14_thumb: '/whiteboard/ArtWork_14_thumb.jpg',
    whiteboard_artwork_15_hi: '/whiteboard/ArtWork_15_hi.jpg',
    whiteboard_artwork_15_lo: '/whiteboard/ArtWork_15_lo.jpg',
    whiteboard_artwork_15_thumb: '/whiteboard/ArtWork_15_thumb.jpg',
    whiteboard_artwork_16_hi: '/whiteboard/ArtWork_16_hi.jpg',
    whiteboard_artwork_16_lo: '/whiteboard/ArtWork_16_lo.jpg',
    whiteboard_artwork_16_thumb: '/whiteboard/ArtWork_16_thumb.jpg',
    whiteboard_artwork_17_hi: '/whiteboard/ArtWork_17_hi.jpg',
    whiteboard_artwork_17_lo: '/whiteboard/ArtWork_17_lo.jpg',
    whiteboard_artwork_17_thumb: '/whiteboard/ArtWork_17_thumb.jpg',
    whiteboard_artwork_18_hi: '/whiteboard/ArtWork_18_hi.jpg',
    whiteboard_artwork_18_lo: '/whiteboard/ArtWork_18_lo.jpg',
    whiteboard_artwork_18_thumb: '/whiteboard/ArtWork_18_thumb.jpg',
    whiteboard_artwork_19_hi: '/whiteboard/ArtWork_19_hi.jpg',
    whiteboard_artwork_19_lo: '/whiteboard/ArtWork_19_lo.jpg',
    whiteboard_artwork_19_thumb: '/whiteboard/ArtWork_19_thumb.jpg',
    whiteboard_artwork_ln_01_hi: '/whiteboard/ArtWork_LN_01_orig.jpg',
    whiteboard_artwork_ln_01_lo: '/whiteboard/ArtWork_LN_01_orig.jpg',
    whiteboard_artwork_ln_01_thumb: '/whiteboard/ArtWork_LN_01_thumb.jpg',
    whiteboard_artwork_ln_02_hi: '/whiteboard/ArtWork_LN_02_hi.jpg',
    whiteboard_artwork_ln_02_lo: '/whiteboard/ArtWork_LN_02_lo.jpg',
    whiteboard_artwork_ln_02_thumb: '/whiteboard/ArtWork_LN_02_thumb.jpg',
    whiteboard_artwork_c_01_hi: '/whiteboard/ArtWork_C_01_hi.jpg',
    whiteboard_artwork_c_01_lo: '/whiteboard/ArtWork_C_01_lo.jpg',
    whiteboard_artwork_c_01_thumb: '/whiteboard/ArtWork_C_01_thumb.jpg',
    
    projectskin_banner: '/project-skin/Skin_lo.jpg',
    projectskin_skin_hi: '/project-skin/Skin_hi.jpg',
    projectskin_skin_lo: '/project-skin/Skin_lo.jpg',
    projectskin_avatar_hi: '/project-skin/avatar_orig.jpg',
    projectskin_avatar_lo: '/project-skin/avatar_orig.jpg',
    projectskin_wallpaper_hi: '/project-skin/Wallpaper_hi.jpg',
    projectskin_wallpaper_lo: '/project-skin/Wallpaper_lo.jpg',
    projectskin_vdo: '/project-skin/prjXPSSkn_theMaking.webm',

    landscapes_banner: '/landscapes/Landscape_01_lo.jpg',
    landscapes_01_hi: '/landscapes/Landscape_01_hi.jpg',
    landscapes_01_lo: '/landscapes/Landscape_01_lo.jpg',
    landscapes_02_a_hi: '/landscapes/Landscape_02_a_hi.jpg',
    landscapes_02_a_lo: '/landscapes/Landscape_02_a_lo.jpg',
    landscapes_02_a_thumb: '/landscapes/Landscape_02_a_thumb.jpg',
    landscapes_02_b_hi: '/landscapes/Landscape_02_b_hi.jpg',
    landscapes_02_b_lo: '/landscapes/Landscape_02_b_lo.jpg',
    landscapes_02_b_thumb: '/landscapes/Landscape_02_b_thumb.jpg',
    landscapes_02_c_hi: '/landscapes/Landscape_02_c_hi.jpg',
    landscapes_02_c_lo: '/landscapes/Landscape_02_c_lo.jpg',
    landscapes_02_c_thumb: '/landscapes/Landscape_02_c_thumb.jpg',
    landscapes_02_d_hi: '/landscapes/Landscape_02_d_hi.jpg',
    landscapes_02_d_lo: '/landscapes/Landscape_02_d_lo.jpg',
    landscapes_02_d_thumb: '/landscapes/Landscape_02_d_thumb.jpg',
    landscapes_02_e_hi: '/landscapes/Landscape_02_e_hi.jpg',
    landscapes_02_e_lo: '/landscapes/Landscape_02_e_lo.jpg',
    landscapes_02_e_thumb: '/landscapes/Landscape_02_e_thumb.jpg',
    landscapes_02_f_hi: '/landscapes/Landscape_02_f_hi.jpg',
    landscapes_02_f_lo: '/landscapes/Landscape_02_f_lo.jpg',
    landscapes_02_f_thumb: '/landscapes/Landscape_02_f_thumb.jpg',
    landscapes_02_g_hi: '/landscapes/Landscape_02_g_hi.jpg',
    landscapes_02_g_lo: '/landscapes/Landscape_02_g_lo.jpg',
    landscapes_02_g_thumb: '/landscapes/Landscape_02_g_thumb.jpg',
    landscapes_02_h_hi: '/landscapes/Landscape_02_h_hi.jpg',
    landscapes_02_h_lo: '/landscapes/Landscape_02_h_lo.jpg',
    landscapes_02_h_thumb: '/landscapes/Landscape_02_h_thumb.jpg',
    landscapes_03_hi: '/landscapes/Landscape_03_hi.jpg',
    landscapes_03_lo: '/landscapes/Landscape_03_lo.jpg',

    moods_banner: '/moods/together_lo.jpg',
    moods_shine_hi: '/moods/shine_hi.jpg',
    moods_shine_lo: '/moods/shine_lo.jpg',
    moods_set_hi: '/moods/set_hi.jpg',
    moods_set_lo: '/moods/set_lo.jpg',
    moods_dark_hi: '/moods/dark_hi.jpg',
    moods_dark_lo: '/moods/dark_lo.jpg',

    raise_banner: '/raise-the-dead/warcraft_banner_lo.jpg',
    raise_01_hi: '/raise-the-dead/warcraft_01_hi.jpg',
    raise_01_lo: '/raise-the-dead/warcraft_01_lo.jpg',
    raise_01_thumb: '/raise-the-dead/warcraft_01_thumb.jpg',
    raise_02_hi: '/raise-the-dead/warcraft_02_hi.jpg',
    raise_02_lo: '/raise-the-dead/warcraft_02_lo.jpg',
    raise_02_thumb: '/raise-the-dead/warcraft_02_thumb.jpg',
    raise_03_hi: '/raise-the-dead/warcraft_03_hi.jpg',
    raise_03_lo: '/raise-the-dead/warcraft_03_lo.jpg',
    raise_03_thumb: '/raise-the-dead/warcraft_03_thumb.jpg',
    raise_04_hi: '/raise-the-dead/warcraft_04_hi.jpg',
    raise_04_lo: '/raise-the-dead/warcraft_04_lo.jpg',
    raise_04_thumb: '/raise-the-dead/warcraft_04_thumb.jpg',
    raise_05_hi: '/raise-the-dead/warcraft_05_hi.jpg',
    raise_05_lo: '/raise-the-dead/warcraft_05_lo.jpg',
    raise_05_thumb: '/raise-the-dead/warcraft_05_thumb.jpg',
    raise_06_hi: '/raise-the-dead/warcraft_06_hi.jpg',
    raise_06_lo: '/raise-the-dead/warcraft_06_lo.jpg',
    raise_06_thumb: '/raise-the-dead/warcraft_06_thumb.jpg',
    raise_07_hi: '/raise-the-dead/warcraft_07_hi.jpg',
    raise_07_lo: '/raise-the-dead/warcraft_07_lo.jpg',
    raise_07_thumb: '/raise-the-dead/warcraft_07_thumb.jpg',
    raise_08_hi: '/raise-the-dead/warcraft_08_hi.jpg',
    raise_08_lo: '/raise-the-dead/warcraft_08_lo.jpg',
    raise_08_thumb: '/raise-the-dead/warcraft_08_thumb.jpg',
    raise_09_hi: '/raise-the-dead/warcraft_09_hi.jpg',
    raise_09_lo: '/raise-the-dead/warcraft_09_lo.jpg',
    raise_09_thumb: '/raise-the-dead/warcraft_09_thumb.jpg',
    raise_10_hi: '/raise-the-dead/warcraft_10_hi.jpg',
    raise_10_lo: '/raise-the-dead/warcraft_10_lo.jpg',
    raise_10_thumb: '/raise-the-dead/warcraft_10_thumb.jpg',
    raise_11_hi: '/raise-the-dead/warcraft_11_hi.jpg',
    raise_11_lo: '/raise-the-dead/warcraft_11_lo.jpg',
    raise_11_thumb: '/raise-the-dead/warcraft_11_thumb.jpg',
    raise_12_hi: '/raise-the-dead/warcraft_12_hi.jpg',
    raise_12_lo: '/raise-the-dead/warcraft_12_lo.jpg',
    raise_12_thumb: '/raise-the-dead/warcraft_12_thumb.jpg',
    raise_13_hi: '/raise-the-dead/warcraft_13_hi.jpg',
    raise_13_lo: '/raise-the-dead/warcraft_13_lo.jpg',
    raise_13_thumb: '/raise-the-dead/warcraft_13_thumb.jpg',

    avatars_banner: '/avatars/avatars_banner_lo.jpg',
    avatar_01_hi: '/avatars/avatar_01_orig.jpg',
    avatar_01_lo: '/avatars/avatar_01_orig.jpg',
    avatar_02_hi: '/avatars/avatar_02_orig.jpg',
    avatar_02_lo: '/avatars/avatar_02_orig.jpg',
    avatar_03_hi: '/avatars/avatar_03_orig.jpg',
    avatar_03_lo: '/avatars/avatar_03_orig.jpg',
    avatar_04_hi: '/avatars/avatar_04_orig.jpg',
    avatar_04_lo: '/avatars/avatar_04_lo.jpg',
    avatar_05_hi: '/avatars/avatar_05_orig.jpg',
    avatar_05_lo: '/avatars/avatar_05_orig.jpg',
    avatar_06_hi: '/avatars/avatar_06_orig.jpg',
    avatar_06_lo: '/avatars/avatar_06_orig.jpg',
    avatar_07_hi: '/avatars/avatar_07_orig.jpg',
    avatar_07_lo: '/avatars/avatar_07_orig.jpg',
    avatar_08_hi: '/avatars/avatar_08_orig.jpg',
    avatar_08_lo: '/avatars/avatar_08_orig.jpg',
    avatar_09_hi: '/avatars/avatar_09_orig.jpg',
    avatar_09_lo: '/avatars/avatar_09_orig.jpg',
    avatar_10_hi: '/avatars/avatar_10_orig.jpg',
    avatar_10_lo: '/avatars/avatar_10_orig.jpg',

    first_comic_banner: '/first-digital-comic/first_banner_lo.jpg',
    first_01_hi: '/first-digital-comic/first_01_hi.jpg',
    first_01_lo: '/first-digital-comic/first_01_lo.jpg',
    first_02_hi: '/first-digital-comic/first_02_hi.jpg',
    first_02_lo: '/first-digital-comic/first_02_lo.jpg',
    first_03_hi: '/first-digital-comic/first_03_hi.jpg',
    first_03_lo: '/first-digital-comic/first_03_lo.jpg',
    first_04_hi: '/first-digital-comic/first_04_hi.jpg',
    first_04_lo: '/first-digital-comic/first_04_lo.jpg',
    first_05_hi: '/first-digital-comic/first_05_hi.jpg',
    first_05_lo: '/first-digital-comic/first_05_lo.jpg',
    first_06_hi: '/first-digital-comic/first_06_hi.jpg',
    first_06_lo: '/first-digital-comic/first_06_lo.jpg',
    first_07_hi: '/first-digital-comic/first_07_hi.jpg',
    first_07_lo: '/first-digital-comic/first_07_lo.jpg',
    first_08_hi: '/first-digital-comic/first_08_hi.jpg',
    first_08_lo: '/first-digital-comic/first_08_lo.jpg',
    first_09_hi: '/first-digital-comic/first_09_hi.jpg',
    first_09_lo: '/first-digital-comic/first_09_lo.jpg',
    first_10_hi: '/first-digital-comic/first_10_hi.jpg',
    first_10_lo: '/first-digital-comic/first_10_lo.jpg',
    first_11_hi: '/first-digital-comic/first_11_hi.jpg',
    first_11_lo: '/first-digital-comic/first_11_lo.jpg',
    first_12_hi: '/first-digital-comic/first_12_hi.jpg',
    first_12_lo: '/first-digital-comic/first_12_lo.jpg',
    first_13_hi: '/first-digital-comic/first_13_hi.jpg',
    first_13_lo: '/first-digital-comic/first_13_lo.jpg',
    first_14_hi: '/first-digital-comic/first_14_hi.jpg',
    first_14_lo: '/first-digital-comic/first_14_lo.jpg',
    first_15_hi: '/first-digital-comic/first_15_hi.jpg',
    first_15_lo: '/first-digital-comic/first_15_lo.jpg',
    first_16_hi: '/first-digital-comic/first_16_hi.jpg',
    first_16_lo: '/first-digital-comic/first_16_lo.jpg',
    first_17_hi: '/first-digital-comic/first_17_hi.jpg',
    first_17_lo: '/first-digital-comic/first_17_lo.jpg',
    first_18_hi: '/first-digital-comic/first_18_hi.jpg',
    first_18_lo: '/first-digital-comic/first_18_lo.jpg',

    etch_banner: '/project-etch/Etch_banner.jpg',
    etch_01_hi: '/project-etch/Etch_01_hi.jpg',
    etch_01_lo: '/project-etch/Etch_01_lo.jpg',
    etch_01_thumb: '/project-etch/Etch_01_thumb.jpg',
    etch_02_hi: '/project-etch/Etch_02_hi.jpg',
    etch_02_lo: '/project-etch/Etch_02_lo.jpg',
    etch_02_thumb: '/project-etch/Etch_02_thumb.jpg',
    etch_03_hi: '/project-etch/Etch_03_hi.jpg',
    etch_03_lo: '/project-etch/Etch_03_lo.jpg',
    etch_03_thumb: '/project-etch/Etch_03_thumb.jpg',
    etch_04_hi: '/project-etch/Etch_04_hi.jpg',
    etch_04_lo: '/project-etch/Etch_04_lo.jpg',
    etch_04_thumb: '/project-etch/Etch_04_thumb.jpg',
    etch_05_hi: '/project-etch/Etch_05_hi.jpg',
    etch_05_lo: '/project-etch/Etch_05_lo.jpg',
    etch_05_thumb: '/project-etch/Etch_05_thumb.jpg',
    etch_06_hi: '/project-etch/Etch_06_hi.jpg',
    etch_06_lo: '/project-etch/Etch_06_lo.jpg',
    etch_06_thumb: '/project-etch/Etch_06_thumb.jpg',
    etch_07_hi: '/project-etch/Etch_07_hi.jpg',
    etch_07_lo: '/project-etch/Etch_07_lo.jpg',
    etch_07_thumb: '/project-etch/Etch_07_thumb.jpg',
    etch_08_hi: '/project-etch/Etch_08_hi.jpg',
    etch_08_lo: '/project-etch/Etch_08_lo.jpg',
    etch_08_thumb: '/project-etch/Etch_08_thumb.jpg',
    etch_09_hi: '/project-etch/Etch_09_hi.jpg',
    etch_09_lo: '/project-etch/Etch_09_lo.jpg',
    etch_09_thumb: '/project-etch/Etch_09_thumb.jpg',
    etch_10_hi: '/project-etch/Etch_10_hi.jpg',
    etch_10_lo: '/project-etch/Etch_10_lo.jpg',
    etch_10_thumb: '/project-etch/Etch_10_thumb.jpg',
    etch_11_hi: '/project-etch/Etch_11_hi.jpg',
    etch_11_lo: '/project-etch/Etch_11_lo.jpg',
    etch_11_thumb: '/project-etch/Etch_11_thumb.jpg',
    etch_12_hi: '/project-etch/Etch_12_hi.jpg',
    etch_12_lo: '/project-etch/Etch_12_lo.jpg',
    etch_12_thumb: '/project-etch/Etch_12_thumb.jpg',
    etch_13_hi: '/project-etch/Etch_13_hi.jpg',
    etch_13_lo: '/project-etch/Etch_13_lo.jpg',
    etch_13_thumb: '/project-etch/Etch_13_thumb.jpg',
    etch_14_hi: '/project-etch/Etch_14_hi.jpg',
    etch_14_lo: '/project-etch/Etch_14_lo.jpg',
    etch_14_thumb: '/project-etch/Etch_14_thumb.jpg',
    etch_15_hi: '/project-etch/Etch_15_hi.jpg',
    etch_15_lo: '/project-etch/Etch_15_lo.jpg',
    etch_15_thumb: '/project-etch/Etch_15_thumb.jpg',
    etch_16_hi: '/project-etch/Etch_16_hi.jpg',
    etch_16_lo: '/project-etch/Etch_16_lo.jpg',
    etch_16_thumb: '/project-etch/Etch_16_thumb.jpg',
    etch_17_hi: '/project-etch/Etch_17_hi.jpg',
    etch_17_lo: '/project-etch/Etch_17_lo.jpg',
    etch_17_thumb: '/project-etch/Etch_17_thumb.jpg',
    etch_18_hi: '/project-etch/Etch_18_hi.jpg',
    etch_18_lo: '/project-etch/Etch_18_lo.jpg',
    etch_18_thumb: '/project-etch/Etch_18_thumb.jpg',
    etch_19_hi: '/project-etch/Etch_19_hi.jpg',
    etch_19_lo: '/project-etch/Etch_19_lo.jpg',
    etch_19_thumb: '/project-etch/Etch_19_thumb.jpg',
    etch_20_hi: '/project-etch/Etch_20_hi.jpg',
    etch_20_lo: '/project-etch/Etch_20_lo.jpg',
    etch_20_thumb: '/project-etch/Etch_20_thumb.jpg',
    etch_21_hi: '/project-etch/Etch_21_hi.jpg',
    etch_21_lo: '/project-etch/Etch_21_lo.jpg',
    etch_21_thumb: '/project-etch/Etch_21_thumb.jpg',
    etch_all_hi: '/project-etch/Etch_hi.jpg',
    etch_all_lo: '/project-etch/Etch_lo.jpg',

    second_comic_banner: '/second-digital-comic/second_banner_orig.jpg',
    second_01_hi: '/second-digital-comic/MiracleDaily_Strip1_hi.jpg',
    second_01_lo: '/second-digital-comic/MiracleDaily_Strip1_lo.jpg',
    second_02_hi: '/second-digital-comic/MiracleDaily_Strip2_hi.jpg',
    second_02_lo: '/second-digital-comic/MiracleDaily_Strip2_lo.jpg',
    second_03_hi: '/second-digital-comic/MiracleDaily_Strip3_hi.jpg',
    second_03_lo: '/second-digital-comic/MiracleDaily_Strip3_lo.jpg',
    second_04_hi: '/second-digital-comic/MiracleDaily_Strip4_hi.jpg',
    second_04_lo: '/second-digital-comic/MiracleDaily_Strip4_lo.jpg',

    third_comic_banner: '/third-digital-comic/third_banner_lo.jpg',
    third_01_hi: '/third-digital-comic/strip_01_hi.jpg',
    third_01_lo: '/third-digital-comic/strip_01_lo.jpg',
    third_02a_hi: '/third-digital-comic/strip_02_a_hi.jpg',
    third_02a_lo: '/third-digital-comic/strip_02_a_lo.jpg',
    third_02b_hi: '/third-digital-comic/strip_02_b_hi.jpg',
    third_02b_lo: '/third-digital-comic/strip_02_b_lo.jpg',
    third_03_hi: '/third-digital-comic/strip_03_hi.jpg',
    third_03_lo: '/third-digital-comic/strip_03_lo.jpg',
    third_04_hi: '/third-digital-comic/strip_04_hi.jpg',
    third_04_lo: '/third-digital-comic/strip_04_lo.jpg',
    third_01_inspire_hi: '/third-digital-comic/strip_01_inspire_hi.jpg',
    third_01_inspire_lo: '/third-digital-comic/strip_01_inspire_lo.jpg',
    third_01_1_hi: '/third-digital-comic/strip_01_1_hi.jpg',
    third_01_1_lo: '/third-digital-comic/strip_01_1_lo.jpg',
    third_01_1_thumb: '/third-digital-comic/strip_01_1_thumb.jpg',
    third_01_2_hi: '/third-digital-comic/strip_01_2_hi.jpg',
    third_01_2_lo: '/third-digital-comic/strip_01_2_lo.jpg',
    third_01_2_thumb: '/third-digital-comic/strip_01_2_thumb.jpg',
    third_01_3_hi: '/third-digital-comic/strip_01_3_hi.jpg',
    third_01_3_lo: '/third-digital-comic/strip_01_3_lo.jpg',
    third_01_3_thumb: '/third-digital-comic/strip_01_3_thumb.jpg',
    third_01_4_hi: '/third-digital-comic/strip_01_4_hi.jpg',
    third_01_4_lo: '/third-digital-comic/strip_01_4_lo.jpg',
    third_01_4_thumb: '/third-digital-comic/strip_01_4_thumb.jpg',
    third_01_5_hi: '/third-digital-comic/strip_01_5_hi.jpg',
    third_01_5_lo: '/third-digital-comic/strip_01_5_lo.jpg',
    third_01_5_thumb: '/third-digital-comic/strip_01_5_thumb.jpg',
    third_01_6_hi: '/third-digital-comic/strip_01_6_hi.jpg',
    third_01_6_lo: '/third-digital-comic/strip_01_6_lo.jpg',
    third_01_6_thumb: '/third-digital-comic/strip_01_6_thumb.jpg',
    third_01_7_hi: '/third-digital-comic/strip_01_7_hi.jpg',
    third_01_7_lo: '/third-digital-comic/strip_01_7_lo.jpg',
    third_01_7_thumb: '/third-digital-comic/strip_01_7_thumb.jpg',
    third_strange_1_hi: '/third-digital-comic/strange_00_hi.jpg',
    third_strange_1_lo: '/third-digital-comic/strange_00_lo.jpg',
    third_strange_1_thumb: '/third-digital-comic/strange_00_thumb.jpg',
    third_strange_2_hi: '/third-digital-comic/strange_01_hi.jpg',
    third_strange_2_lo: '/third-digital-comic/strange_01_lo.jpg',
    third_strange_2_thumb: '/third-digital-comic/strange_01_thumb.jpg',
    third_strange_3_hi: '/third-digital-comic/strange_02_hi.jpg',
    third_strange_3_lo: '/third-digital-comic/strange_02_lo.jpg',
    third_strange_3_thumb: '/third-digital-comic/strange_02_thumb.jpg',
    third_strange_4_hi: '/third-digital-comic/strange_03_hi.jpg',
    third_strange_4_lo: '/third-digital-comic/strange_03_lo.jpg',
    third_strange_4_thumb: '/third-digital-comic/strange_03_thumb.jpg',
    third_strange_5_hi: '/third-digital-comic/strange_04_hi.jpg',
    third_strange_5_lo: '/third-digital-comic/strange_04_lo.jpg',
    third_strange_5_thumb: '/third-digital-comic/strange_04_thumb.jpg',
    third_strange_6_hi: '/third-digital-comic/strange_05_hi.jpg',
    third_strange_6_lo: '/third-digital-comic/strange_05_lo.jpg',
    third_strange_6_thumb: '/third-digital-comic/strange_05_thumb.jpg',
    third_strange_7_hi: '/third-digital-comic/strange_06_hi.jpg',
    third_strange_7_lo: '/third-digital-comic/strange_06_lo.jpg',
    third_strange_7_thumb: '/third-digital-comic/strange_06_thumb.jpg',
    third_03_inspire_hi: '/third-digital-comic/strip_03_inspire_hi.jpg',
    third_03_inspire_lo: '/third-digital-comic/strip_03_inspire_lo.jpg',
    third_04_black_hi: '/third-digital-comic/strip_04_blacks_hi.jpg',
    third_04_black_lo: '/third-digital-comic/strip_04_blacks_lo.jpg',

    doodles_banner: '/doodles/aDoodle_lo.jpg',
    doodles_reDog_hi: '/doodles/dog_residentEvil_orig.jpg',
    doodles_reDog_lo: '/doodles/dog_residentEvil_lo.jpg',
    doodles_reDog_thumb: '/doodles/dog_residentEvil_thumb.jpg',
    doodles_forest_hi: '/doodles/forest_orig.jpg',
    doodles_forest_lo: '/doodles/forest_lo.jpg',
    doodles_forest_thumb: '/doodles/forest_thumb.jpg',
    doodles_furnace_hi: '/doodles/flameFurnace_orig.jpg',
    doodles_furnace_lo: '/doodles/flameFurnace_lo.jpg',
    doodles_furnace_thumb: '/doodles/flameFurnace_thumb.jpg',
    doodles_dh_hi: '/doodles/DHobsession_hi.jpg',
    doodles_dh_lo: '/doodles/DHobsession_lo.jpg',
    doodles_dh_thumb: '/doodles/DHobsession_thumb.jpg',
    doodles_rorschach_hi: '/doodles/rorschach_orig.jpg',
    doodles_rorschach_lo: '/doodles/rorschach_lo.jpg',
    doodles_rorschach_thumb: '/doodles/rorschach_thumb.jpg',

    agent_banner: '/an-agent/an_agent_banner_lo.jpg',
    agent_01_hi: '/an-agent/agent_01_hi.jpg',
    agent_01_lo: '/an-agent/agent_01_lo.jpg',
    agent_02_hi: '/an-agent/agent_02_hi.jpg',
    agent_02_lo: '/an-agent/agent_02_lo.jpg',
    agent_03_hi: '/an-agent/agent_03_hi.jpg',
    agent_03_lo: '/an-agent/agent_03_lo.jpg',
    agent_04_hi: '/an-agent/agent_04_hi.jpg',
    agent_04_lo: '/an-agent/agent_04_lo.jpg',
    agent_05_hi: '/an-agent/agent_05_hi.jpg',
    agent_05_lo: '/an-agent/agent_05_lo.jpg',
    agent_06_hi: '/an-agent/agent_06_hi.jpg',
    agent_06_lo: '/an-agent/agent_06_lo.jpg',
    agent_07_hi: '/an-agent/agent_07_hi.jpg',
    agent_07_lo: '/an-agent/agent_07_lo.jpg',
    agent_08_hi: '/an-agent/agent_08_hi.jpg',
    agent_08_lo: '/an-agent/agent_08_lo.jpg',
    agent_09_hi: '/an-agent/agent_09_hi.jpg',
    agent_09_lo: '/an-agent/agent_09_lo.jpg',
    agent_10_hi: '/an-agent/agent_10_hi.jpg',
    agent_10_lo: '/an-agent/agent_10_lo.jpg',
    agent_11_hi: '/an-agent/agent_11_hi.jpg',
    agent_11_lo: '/an-agent/agent_11_lo.jpg',
    agent_12_hi: '/an-agent/agent_12_hi.jpg',
    agent_12_lo: '/an-agent/agent_12_lo.jpg',
    agent_13_hi: '/an-agent/agent_13_hi.jpg',
    agent_13_lo: '/an-agent/agent_13_lo.jpg',
    agent_14_hi: '/an-agent/agent_14_hi.jpg',
    agent_14_lo: '/an-agent/agent_14_lo.jpg',
    agent_15_hi: '/an-agent/agent_15_hi.jpg',
    agent_15_lo: '/an-agent/agent_15_lo.jpg',
    agent_16_hi: '/an-agent/agent_16_hi.jpg',
    agent_16_lo: '/an-agent/agent_16_lo.jpg',
    agent_17_hi: '/an-agent/agent_17_hi.jpg',
    agent_17_lo: '/an-agent/agent_17_lo.jpg',
    agent_18_hi: '/an-agent/agent_18_hi.jpg',
    agent_18_lo: '/an-agent/agent_18_lo.jpg'
  };

  private hostUrl: string = 'https://premjitadhikary.github.io/media-repo/paintinbits';
  private hostUrlSuffix: string = '';
  
  constructor() { }

  getImagePath(img: string): string {
    // return '/assets/img' + this._imgLocations[img];
    return this.hostUrl + this._imgLocations[img] + this.hostUrlSuffix;
  }

}