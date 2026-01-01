export type Countrys = Country[];

export interface Country {
  flags: Flags
  name: Name
  tld: string[]
  currencies: Currencies
  capital: string[]
  region: string
  subregion: string
  languages: Languages
  area: number
  population: number
  borders?: string[]; 
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  eng?: Eng
  dzo?: Dzo
  ita?: Ita
  tvl?: Tvl
  bjz?: Bjz
  spa?: Spa
  bis?: Bis
  fra?: Fra
  bel?: Bel
  rus?: Rus
  mfe?: Mfe
  lao?: Lao
  tur?: Tur
  aym?: Aym
  grn?: Grn
  que?: Que
  sin?: Sin
  tam?: Tam
  pih?: Pih
  zho?: Zho
  nld?: Nld
  pap?: Pap
  nfr?: Nfr
  ara?: Ara
  lat?: Lat
  tsn?: Tsn
  lit?: Lit
  run?: Run
  gle?: Gle
  fin?: Fin
  swe?: Swe
  ben?: Ben
  dan?: Dan
  ron?: Ron
  bul?: Bul
  afr?: Afr
  deu?: Deu
  her?: Her
  hgm?: Hgm
  kwn?: Kwn
  loz?: Loz
  ndo?: Ndo
  nor?: Nor
  ltz?: Ltz
  jpn?: Jpn
  sqi?: Sqi
  smo?: Smo
  tkl?: Tkl
  ton?: Ton
  tuk?: Tuk
  sag?: Sag
  lav?: Lav
  niu?: Niu
  srp?: Srp
  rar?: Rar
  mlg?: Mlg
  cnr?: Cnr
  kor?: Kor
  amh?: Amh
  mon?: Mon
  slk?: Slk
  nno?: Nno
  nob?: Nob
  smi?: Smi
  heb?: Heb
  mri?: Mri
  nzs?: Nzs
  kal?: Kal
  kir?: Kir
  fao?: Fao
  pau?: Pau
  mlt?: Mlt
  por?: Por
  tet?: Tet
  hrv?: Hrv
  hmo?: Hmo
  tpi?: Tpi
  som?: Som
  hat?: Hat
  cal?: Cal
  cha?: Cha
  nya?: Nya
  uzb?: Uzb
  fas?: Fas
  kaz?: Kaz
  isl?: Isl
  slv?: Slv
  aze?: Aze
  swa?: Swa
  mya?: Mya
  pol?: Pol
  kon?: Kon
  lin?: Lin
  lua?: Lua
  tir?: Tir
  gil?: Gil
  mah?: Mah
  bwg?: Bwg
  kck?: Kck
  khi?: Khi
  ndc?: Ndc
  nde?: Nde
  sna?: Sna
  sot?: Sot
  toi?: Toi
  tso?: Tso
  ven?: Ven
  xho?: Xho
  zib?: Zib
  zdj?: Zdj
  msa?: Msa
  glv?: Glv
  prs?: Prs
  pus?: Pus
  cat?: Cat
  ell?: Ell
  vie?: Vie
  arc?: Arc
  ckb?: Ckb
  urd?: Urd
  div?: Div
  ber?: Ber
  bos?: Bos
  nrf?: Nrf
  mkd?: Mkd
  est?: Est
  gsw?: Gsw
  roh?: Roh
  tgk?: Tgk
  nbl?: Nbl
  nso?: Nso
  ssw?: Ssw
  zul?: Zul
  hye?: Hye
  kat?: Kat
  ukr?: Ukr
  mey?: Mey
  ces?: Ces
  bar?: Bar
  kin?: Kin
  tha?: Tha
  pov?: Pov
  hin?: Hin
  crs?: Crs
  fij?: Fij
  hif?: Hif
  jam?: Jam
  nau?: Nau
  ind?: Ind
  fil?: Fil
  nep?: Nep
  khm?: Khm
}

export interface Eng {
  official: string
  common: string
}

export interface Dzo {
  official: string
  common: string
}

export interface Ita {
  official: string
  common: string
}

export interface Tvl {
  official: string
  common: string
}

export interface Bjz {
  official: string
  common: string
}

export interface Spa {
  official: string
  common: string
}

export interface Bis {
  official: string
  common: string
}

export interface Fra {
  official: string
  common: string
}

export interface Bel {
  official: string
  common: string
}

export interface Rus {
  official: string
  common: string
}

export interface Mfe {
  official: string
  common: string
}

export interface Lao {
  official: string
  common: string
}

export interface Tur {
  official: string
  common: string
}

export interface Aym {
  official: string
  common: string
}

export interface Grn {
  official: string
  common: string
}

export interface Que {
  official: string
  common: string
}

export interface Sin {
  official: string
  common: string
}

export interface Tam {
  official: string
  common: string
}

export interface Pih {
  official: string
  common: string
}

export interface Zho {
  official: string
  common: string
}

export interface Nld {
  official: string
  common: string
}

export interface Pap {
  official: string
  common: string
}

export interface Nfr {
  official: string
  common: string
}

export interface Ara {
  official: string
  common: string
}

export interface Lat {
  official: string
  common: string
}

export interface Tsn {
  official: string
  common: string
}

export interface Lit {
  official: string
  common: string
}

export interface Run {
  official: string
  common: string
}

export interface Gle {
  official: string
  common: string
}

export interface Fin {
  official: string
  common: string
}

export interface Swe {
  official: string
  common: string
}

export interface Ben {
  official: string
  common: string
}

export interface Dan {
  official: string
  common: string
}

export interface Ron {
  official: string
  common: string
}

export interface Bul {
  official: string
  common: string
}

export interface Afr {
  official: string
  common: string
}

export interface Deu {
  official: string
  common: string
}

export interface Her {
  official: string
  common: string
}

export interface Hgm {
  official: string
  common: string
}

export interface Kwn {
  official: string
  common: string
}

export interface Loz {
  official: string
  common: string
}

export interface Ndo {
  official: string
  common: string
}

export interface Nor {
  official: string
  common: string
}

export interface Ltz {
  official: string
  common: string
}

export interface Jpn {
  official: string
  common: string
}

export interface Sqi {
  official: string
  common: string
}

export interface Smo {
  official: string
  common: string
}

export interface Tkl {
  official: string
  common: string
}

export interface Ton {
  official: string
  common: string
}

export interface Tuk {
  official: string
  common: string
}

export interface Sag {
  official: string
  common: string
}

export interface Lav {
  official: string
  common: string
}

export interface Niu {
  official: string
  common: string
}

export interface Srp {
  official: string
  common: string
}

export interface Rar {
  official: string
  common: string
}

export interface Mlg {
  official: string
  common: string
}

export interface Cnr {
  official: string
  common: string
}

export interface Kor {
  official: string
  common: string
}

export interface Amh {
  official: string
  common: string
}

export interface Mon {
  official: string
  common: string
}

export interface Slk {
  official: string
  common: string
}

export interface Nno {
  official: string
  common: string
}

export interface Nob {
  official: string
  common: string
}

export interface Smi {
  official: string
  common: string
}

export interface Heb {
  official: string
  common: string
}

export interface Mri {
  official: string
  common: string
}

export interface Nzs {
  official: string
  common: string
}

export interface Kal {
  official: string
  common: string
}

export interface Kir {
  official: string
  common: string
}

export interface Fao {
  official: string
  common: string
}

export interface Pau {
  official: string
  common: string
}

export interface Mlt {
  official: string
  common: string
}

export interface Por {
  official: string
  common: string
}

export interface Tet {
  official: string
  common: string
}

export interface Hrv {
  official: string
  common: string
}

export interface Hmo {
  official: string
  common: string
}

export interface Tpi {
  official: string
  common: string
}

export interface Som {
  official: string
  common: string
}

export interface Hat {
  official: string
  common: string
}

export interface Cal {
  official: string
  common: string
}

export interface Cha {
  official: string
  common: string
}

export interface Nya {
  official: string
  common: string
}

export interface Uzb {
  official: string
  common: string
}

export interface Fas {
  official: string
  common: string
}

export interface Kaz {
  official: string
  common: string
}

export interface Isl {
  official: string
  common: string
}

export interface Slv {
  official: string
  common: string
}

export interface Aze {
  official: string
  common: string
}

export interface Swa {
  official: string
  common: string
}

export interface Mya {
  official: string
  common: string
}

export interface Pol {
  official: string
  common: string
}

export interface Kon {
  official: string
  common: string
}

export interface Lin {
  official: string
  common: string
}

export interface Lua {
  official: string
  common: string
}

export interface Tir {
  official: string
  common: string
}

export interface Gil {
  official: string
  common: string
}

export interface Mah {
  official: string
  common: string
}

export interface Bwg {
  official: string
  common: string
}

export interface Kck {
  official: string
  common: string
}

export interface Khi {
  official: string
  common: string
}

export interface Ndc {
  official: string
  common: string
}

export interface Nde {
  official: string
  common: string
}

export interface Sna {
  official: string
  common: string
}

export interface Sot {
  official: string
  common: string
}

export interface Toi {
  official: string
  common: string
}

export interface Tso {
  official: string
  common: string
}

export interface Ven {
  official: string
  common: string
}

export interface Xho {
  official: string
  common: string
}

export interface Zib {
  official: string
  common: string
}

export interface Zdj {
  official: string
  common: string
}

export interface Msa {
  official: string
  common: string
}

export interface Glv {
  official: string
  common: string
}

export interface Prs {
  official: string
  common: string
}

export interface Pus {
  official: string
  common: string
}

export interface Cat {
  official: string
  common: string
}

export interface Ell {
  official: string
  common: string
}

export interface Vie {
  official: string
  common: string
}

export interface Arc {
  official: string
  common: string
}

export interface Ckb {
  official: string
  common: string
}

export interface Urd {
  official: string
  common: string
}

export interface Div {
  official: string
  common: string
}

export interface Ber {
  official: string
  common: string
}

export interface Bos {
  official: string
  common: string
}

export interface Nrf {
  official: string
  common: string
}

export interface Mkd {
  official: string
  common: string
}

export interface Est {
  official: string
  common: string
}

export interface Gsw {
  official: string
  common: string
}

export interface Roh {
  official: string
  common: string
}

export interface Tgk {
  official: string
  common: string
}

export interface Nbl {
  official: string
  common: string
}

export interface Nso {
  official: string
  common: string
}

export interface Ssw {
  official: string
  common: string
}

export interface Zul {
  official: string
  common: string
}

export interface Hye {
  official: string
  common: string
}

export interface Kat {
  official: string
  common: string
}

export interface Ukr {
  official: string
  common: string
}

export interface Mey {
  official: string
  common: string
}

export interface Ces {
  official: string
  common: string
}

export interface Bar {
  official: string
  common: string
}

export interface Kin {
  official: string
  common: string
}

export interface Tha {
  official: string
  common: string
}

export interface Pov {
  official: string
  common: string
}

export interface Hin {
  official: string
  common: string
}

export interface Crs {
  official: string
  common: string
}

export interface Fij {
  official: string
  common: string
}

export interface Hif {
  official: string
  common: string
}

export interface Jam {
  official: string
  common: string
}

export interface Nau {
  official: string
  common: string
}

export interface Ind {
  official: string
  common: string
}

export interface Fil {
  official: string
  common: string
}

export interface Hun {
  official: string
  common: string
}

export interface Nep {
  official: string
  common: string
}

export interface Khm {
  official: string
  common: string
}

export interface Currencies {
  XCD?: Xcd
  BTN?: Btn
  INR?: Inr
  EUR?: Eur
  AUD?: Aud
  TVD?: Tvd
  BZD?: Bzd
  VUV?: Vuv
  BYN?: Byn
  MUR?: Mur
  LAK?: Lak
  XOF?: Xof
  TRY?: Try
  BOB?: Bob
  LKR?: Lkr
  CNY?: Cny
  USD?: Usd
  GBP?: Gbp
  GGP?: Ggp
  SDG?: Sdg
  ANG?: Ang
  BWP?: Bwp
  BIF?: Bif
  SBD?: Sbd
  BMD?: Bmd
  PEN?: Pen
  BDT?: Bdt
  DKK?: Dkk
  DOP?: Dop
  MDL?: Mdl
  BGN?: Bgn
  CRC?: Crc
  NAD?: Nad
  ZAR?: Zar
  NOK?: Nok
  RUB?: Rub
  AED?: Aed
  BSD?: Bsd
  JPY?: Jpy
  NGN?: Ngn
  GHS?: Ghs
  SLE?: Sle
  ALL?: All
  NZD?: Nzd
  SHP?: Shp
  TOP?: Top
  TMT?: Tmt
  DJF?: Djf
  XAF?: Xaf
  LBP?: Lbp
  GMD?: Gmd
  HNL?: Hnl
  MRU?: Mru
  XPF?: Xpf
  ZMW?: Zmw
  KYD?: Kyd
  CKD?: Ckd
  MGA?: Mga
  KRW?: Krw
  ETB?: Etb
  MNT?: Mnt
  CUC?: Cuc
  CUP?: Cup
  GTQ?: Gtq
  CLP?: Clp
  COP?: Cop
  SAR?: Sar
  ILS?: Ils
  KGS?: Kgs
  FOK?: Fok
  SYP?: Syp
  PGK?: Pgk
  LRD?: Lrd
  SOS?: Sos
  VES?: Ves
  HTG?: Htg
  DZD?: Dzd
  AWG?: Awg
  EGP?: Egp
  MWK?: Mwk
  UZS?: Uzs
  SSP?: Ssp
  IRR?: Irr
  KZT?: Kzt
  NIO?: Nio
  ISK?: Isk
  ARS?: Ars
  AZN?: Azn
  UGX?: Ugx
  MMK?: Mmk
  PLN?: Pln
  JOD?: Jod
  HKD?: Hkd
  CDF?: Cdf
  ERN?: Ern
  KID?: Kid
  ZWL?: Zwl
  KES?: Kes
  KMF?: Kmf
  GIP?: Gip
  BND?: Bnd
  SGD?: Sgd
  SEK?: Sek
  LSL?: Lsl
  IMP?: Imp
  TZS?: Tzs
  CVE?: Cve
  AFN?: Afn
  VND?: Vnd
  IQD?: Iqd
  LYD?: Lyd
  PKR?: Pkr
  MVR?: Mvr
  MAD?: Mad
  BAM?: Bam
  WST?: Wst
  OMR?: Omr
  BHD?: Bhd
  JEP?: Jep
  MKD?: Mkd2
  TND?: Tnd
  TTD?: Ttd
  PAB?: Pab
  CHF?: Chf
  UYU?: Uyu
  TJS?: Tjs
  TWD?: Twd
  BRL?: Brl
  AMD?: Amd
  GEL?: Gel
  QAR?: Qar
  UAH?: Uah
  GNF?: Gnf
  MOP?: Mop
  CZK?: Czk
  YER?: Yer
  RWF?: Rwf
  STN?: Stn
  PYG?: Pyg
  MZN?: Mzn
  SZL?: Szl
  BBD?: Bbd
  THB?: Thb
  AOA?: Aoa
  SCR?: Scr
  FKP?: Fkp
  FJD?: Fjd
  CAD?: Cad
  JMD?: Jmd
  IDR?: Idr
  KWD?: Kwd
  PHP?: Php
  GYD?: Gyd
  HUF?: Huf
  MXN?: Mxn
  KPW?: Kpw
  RON?: Ron2
  SRD?: Srd
  NPR?: Npr
  RSD?: Rsd
  KHR?: Khr
  MYR?: Myr
}

export interface Xcd {
  name: string
  symbol: string
}

export interface Btn {
  name: string
  symbol: string
}

export interface Inr {
  name: string
  symbol: string
}

export interface Eur {
  name: string
  symbol: string
}

export interface Aud {
  name: string
  symbol: string
}

export interface Tvd {
  name: string
  symbol: string
}

export interface Bzd {
  name: string
  symbol: string
}

export interface Vuv {
  name: string
  symbol: string
}

export interface Byn {
  name: string
  symbol: string
}

export interface Mur {
  name: string
  symbol: string
}

export interface Lak {
  name: string
  symbol: string
}

export interface Xof {
  name: string
  symbol: string
}

export interface Try {
  name: string
  symbol: string
}

export interface Bob {
  name: string
  symbol: string
}

export interface Lkr {
  name: string
  symbol: string
}

export interface Cny {
  name: string
  symbol: string
}

export interface Usd {
  name: string
  symbol: string
}

export interface Gbp {
  name: string
  symbol: string
}

export interface Ggp {
  name: string
  symbol: string
}

export interface Sdg {
  name: string
  symbol: string
}

export interface Ang {
  name: string
  symbol: string
}

export interface Bwp {
  name: string
  symbol: string
}

export interface Bif {
  name: string
  symbol: string
}

export interface Sbd {
  name: string
  symbol: string
}

export interface Bmd {
  name: string
  symbol: string
}

export interface Pen {
  name: string
  symbol: string
}

export interface Bdt {
  name: string
  symbol: string
}

export interface Dkk {
  name: string
  symbol: string
}

export interface Dop {
  name: string
  symbol: string
}

export interface Mdl {
  name: string
  symbol: string
}

export interface Bgn {
  name: string
  symbol: string
}

export interface Crc {
  name: string
  symbol: string
}

export interface Nad {
  name: string
  symbol: string
}

export interface Zar {
  name: string
  symbol: string
}

export interface Nok {
  name: string
  symbol: string
}

export interface Rub {
  name: string
  symbol: string
}

export interface Aed {
  name: string
  symbol: string
}

export interface Bsd {
  name: string
  symbol: string
}

export interface Jpy {
  name: string
  symbol: string
}

export interface Ngn {
  name: string
  symbol: string
}

export interface Ghs {
  name: string
  symbol: string
}

export interface Sle {
  name: string
  symbol: string
}

export interface All {
  name: string
  symbol: string
}

export interface Nzd {
  name: string
  symbol: string
}

export interface Shp {
  name: string
  symbol: string
}

export interface Top {
  name: string
  symbol: string
}

export interface Tmt {
  name: string
  symbol: string
}

export interface Djf {
  name: string
  symbol: string
}

export interface Xaf {
  name: string
  symbol: string
}

export interface Lbp {
  name: string
  symbol: string
}

export interface Gmd {
  name: string
  symbol: string
}

export interface Hnl {
  name: string
  symbol: string
}

export interface Mru {
  name: string
  symbol: string
}

export interface Xpf {
  name: string
  symbol: string
}

export interface Zmw {
  name: string
  symbol: string
}

export interface Kyd {
  name: string
  symbol: string
}

export interface Ckd {
  name: string
  symbol: string
}

export interface Mga {
  name: string
  symbol: string
}

export interface Krw {
  name: string
  symbol: string
}

export interface Etb {
  name: string
  symbol: string
}

export interface Mnt {
  name: string
  symbol: string
}

export interface Cuc {
  name: string
  symbol: string
}

export interface Cup {
  name: string
  symbol: string
}

export interface Gtq {
  name: string
  symbol: string
}

export interface Clp {
  name: string
  symbol: string
}

export interface Cop {
  name: string
  symbol: string
}

export interface Sar {
  name: string
  symbol: string
}

export interface Ils {
  name: string
  symbol: string
}

export interface Kgs {
  name: string
  symbol: string
}

export interface Fok {
  name: string
  symbol: string
}

export interface Syp {
  name: string
  symbol: string
}

export interface Pgk {
  name: string
  symbol: string
}

export interface Lrd {
  name: string
  symbol: string
}

export interface Sos {
  name: string
  symbol: string
}

export interface Ves {
  name: string
  symbol: string
}

export interface Htg {
  name: string
  symbol: string
}

export interface Dzd {
  name: string
  symbol: string
}

export interface Awg {
  name: string
  symbol: string
}

export interface Egp {
  name: string
  symbol: string
}

export interface Mwk {
  name: string
  symbol: string
}

export interface Uzs {
  name: string
  symbol: string
}

export interface Ssp {
  name: string
  symbol: string
}

export interface Irr {
  name: string
  symbol: string
}

export interface Kzt {
  name: string
  symbol: string
}

export interface Nio {
  name: string
  symbol: string
}

export interface Isk {
  name: string
  symbol: string
}

export interface Ars {
  name: string
  symbol: string
}

export interface Azn {
  name: string
  symbol: string
}

export interface Ugx {
  name: string
  symbol: string
}

export interface Mmk {
  name: string
  symbol: string
}

export interface Pln {
  name: string
  symbol: string
}

export interface Jod {
  name: string
  symbol: string
}

export interface Hkd {
  name: string
  symbol: string
}

export interface Cdf {
  name: string
  symbol: string
}

export interface Ern {
  name: string
  symbol: string
}

export interface Kid {
  name: string
  symbol: string
}

export interface Zwl {
  name: string
  symbol: string
}

export interface Kes {
  name: string
  symbol: string
}

export interface Kmf {
  name: string
  symbol: string
}

export interface Gip {
  name: string
  symbol: string
}

export interface Bnd {
  name: string
  symbol: string
}

export interface Sgd {
  name: string
  symbol: string
}

export interface Sek {
  name: string
  symbol: string
}

export interface Lsl {
  name: string
  symbol: string
}

export interface Imp {
  name: string
  symbol: string
}

export interface Tzs {
  name: string
  symbol: string
}

export interface Cve {
  name: string
  symbol: string
}

export interface Afn {
  name: string
  symbol: string
}

export interface Vnd {
  name: string
  symbol: string
}

export interface Iqd {
  name: string
  symbol: string
}

export interface Lyd {
  name: string
  symbol: string
}

export interface Pkr {
  name: string
  symbol: string
}

export interface Mvr {
  name: string
  symbol: string
}

export interface Mad {
  name: string
  symbol: string
}

export interface Bam {
  name: string
  symbol: string
}

export interface Wst {
  name: string
  symbol: string
}

export interface Omr {
  name: string
  symbol: string
}

export interface Bhd {
  name: string
  symbol: string
}

export interface Jep {
  name: string
  symbol: string
}

export interface Mkd2 {
  name: string
  symbol: string
}

export interface Tnd {
  name: string
  symbol: string
}

export interface Ttd {
  name: string
  symbol: string
}

export interface Pab {
  name: string
  symbol: string
}

export interface Chf {
  name: string
  symbol: string
}

export interface Uyu {
  name: string
  symbol: string
}

export interface Tjs {
  name: string
  symbol: string
}

export interface Twd {
  name: string
  symbol: string
}

export interface Brl {
  name: string
  symbol: string
}

export interface Amd {
  name: string
  symbol: string
}

export interface Gel {
  name: string
  symbol: string
}

export interface Qar {
  name: string
  symbol: string
}

export interface Uah {
  name: string
  symbol: string
}

export interface Gnf {
  name: string
  symbol: string
}

export interface Mop {
  name: string
  symbol: string
}

export interface Czk {
  name: string
  symbol: string
}

export interface Yer {
  name: string
  symbol: string
}

export interface Rwf {
  name: string
  symbol: string
}

export interface Stn {
  name: string
  symbol: string
}

export interface Pyg {
  name: string
  symbol: string
}

export interface Mzn {
  name: string
  symbol: string
}

export interface Szl {
  name: string
  symbol: string
}

export interface Bbd {
  name: string
  symbol: string
}

export interface Thb {
  name: string
  symbol: string
}

export interface Aoa {
  name: string
  symbol: string
}

export interface Scr {
  name: string
  symbol: string
}

export interface Fkp {
  name: string
  symbol: string
}

export interface Fjd {
  name: string
  symbol: string
}

export interface Cad {
  name: string
  symbol: string
}

export interface Jmd {
  name: string
  symbol: string
}

export interface Idr {
  name: string
  symbol: string
}

export interface Kwd {
  name: string
  symbol: string
}

export interface Php {
  name: string
  symbol: string
}

export interface Gyd {
  name: string
  symbol: string
}

export interface Huf {
  name: string
  symbol: string
}

export interface Mxn {
  name: string
  symbol: string
}

export interface Kpw {
  name: string
  symbol: string
}

export interface Ron2 {
  name: string
  symbol: string
}

export interface Srd {
  name: string
  symbol: string
}

export interface Npr {
  name: string
  symbol: string
}

export interface Rsd {
  name: string
  symbol: string
}

export interface Khr {
  name: string
  symbol: string
}

export interface Myr {
  name: string
  symbol: string
}

export interface Languages {
  eng?: string
  dzo?: string
  ita?: string
  cat?: string
  tvl?: string
  bjz?: string
  spa?: string
  bis?: string
  fra?: string
  bel?: string
  rus?: string
  mfe?: string
  lao?: string
  tur?: string
  aym?: string
  grn?: string
  que?: string
  sin?: string
  tam?: string
  pih?: string
  zho?: string
  nld?: string
  pap?: string
  nfr?: string
  ara?: string
  lat?: string
  tsn?: string
  lit?: string
  run?: string
  gle?: string
  fin?: string
  swe?: string
  ben?: string
  dan?: string
  ron?: string
  bul?: string
  afr?: string
  deu?: string
  her?: string
  hgm?: string
  kwn?: string
  loz?: string
  ndo?: string
  nor?: string
  ltz?: string
  jpn?: string
  sqi?: string
  smo?: string
  tkl?: string
  ton?: string
  tuk?: string
  sag?: string
  lav?: string
  niu?: string
  srp?: string
  rar?: string
  mlg?: string
  cnr?: string
  kor?: string
  amh?: string
  mon?: string
  slk?: string
  nno?: string
  nob?: string
  smi?: string
  heb?: string
  mri?: string
  nzs?: string
  kal?: string
  kir?: string
  fao?: string
  pau?: string
  mlt?: string
  por?: string
  tet?: string
  hrv?: string
  hmo?: string
  tpi?: string
  som?: string
  hat?: string
  cal?: string
  cha?: string
  nya?: string
  uzb?: string
  fas?: string
  kaz?: string
  isl?: string
  slv?: string
  aze?: string
  swa?: string
  mya?: string
  pol?: string
  kon?: string
  lin?: string
  lua?: string
  tir?: string
  gil?: string
  mah?: string
  bwg?: string
  kck?: string
  khi?: string
  ndc?: string
  nde?: string
  sna?: string
  sot?: string
  toi?: string
  tso?: string
  ven?: string
  xho?: string
  zib?: string
  zdj?: string
  msa?: string
  glv?: string
  prs?: string
  pus?: string
  ell?: string
  vie?: string
  arc?: string
  ckb?: string
  urd?: string
  div?: string
  ber?: string
  bos?: string
  nrf?: string
  mkd?: string
  est?: string
  gsw?: string
  roh?: string
  tgk?: string
  nbl?: string
  nso?: string
  ssw?: string
  zul?: string
  hye?: string
  kat?: string
  ukr?: string
  mey?: string
  ces?: string
  kin?: string
  eus?: string
  glc?: string
  tha?: string
  pov?: string
  hin?: string
  crs?: string
  fij?: string
  hif?: string
  jam?: string
  nau?: string
  ind?: string
  fil?: string
  hun?: string
  nep?: string
  khm?: string
}


// article
export interface CountryInners {
  flags: Flags;
  name: Name;
  tld: string;
  currencies: string;
  capital: string;
  region: string;
  subregion: string;
  languages: string;
  area: number;
  population: number;
  countryTg?: string; 
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  hun: Hun;
}

export interface Hun {
  official: string;
  common: string;
}


export type  HeaderType =input & Select 


export interface input {
  search:()=>void
  setName:(value:string)=>void
  name: string
}

export interface Select{
  value:string
  setValue:(value:string)=>void
}

export type border = Record<string, string[]>


export type Theme = "dark" | "light"

export type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}