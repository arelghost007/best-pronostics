// components/Hero.js
import { COUPON_DATA } from '@/constants/data'
import { CouponData } from '@/types/dataTypes'
import { SquareCheckBig, Users, Lock, Zap } from 'lucide-react'
import Image from 'next/image'
import CtaBtn from '../CtaBtn'
import '../../app/Hero.css'

export default function Hero() {
  const currentCoupon: CouponData = COUPON_DATA

  const odds = currentCoupon?.odds ? currentCoupon.odds.toFixed(2) : "—"
  const stake = currentCoupon?.stake ? `${currentCoupon.stake.toLocaleString('fr-FR')} FCFA` : "—"
  const gain = currentCoupon?.gain ? `${currentCoupon.gain.toLocaleString('fr-FR')} FCFA` : "—"
  const couponImage = currentCoupon?.image_url || "/assets/image.png"
  const whatsappUrl =
    currentCoupon?.whatsapp_link ||
    "https://whatsapp.com/channel/0029Vb7vQ3XId7nQtND3Vu3I";

  return (
    <section id="heroSection" className="hero-section">
      {/* Motifs de fond géométriques simples (pas de dégradés) */}
      <div className="hero-grid-bg"></div>

      {/* Logo avec contour néon bleu */}
      <div className="hero-logo-wrapper">
        <Image 
          src="/logo1.webp" 
          alt="Logo Best Pronos" 
          width={130} 
          height={130} 
          priority
          className='hero-logo'
        />
        <div className="logo-badge-icon">
          <Zap size={14} className="fill-current text-white" />
        </div>
      </div>

      {/* Badge VIP à effet Flash */}
      <div className="hero-badge">
        <span className="dot-pulse"></span>
        <span className="badge-text">COUPON VIP DISPONIBLE</span>
      </div>

      {/* Titre Impactant (Space Grotesk) */}
      <h1 className="hero-title">
        RÉCUPÈRE LE COUPON <br />
        <span className="title-accent">DU JOUR</span>
      </h1>

      <p className="hero-subtitle">
        Coupon analysé • <span className="highlight-text">Cote certifiée</span> • Accès VIP restreint
      </p>

      {/* Ticket interactif avec encoches latérales */}
      <div className="ticket-container">
        <div className="ticket-card">
          {/* Encoches physiques (cut-outs) */}
          <div className="notch notch-left"></div>
          <div className="notch notch-right"></div>

          {/* En-tête du ticket */}
          <div className="ticket-header">
            <div>
              <span className="ticket-tag">MATCH DU JOUR</span>
              <div className="ticket-date">{currentCoupon.date}</div>
            </div>
            <div className="ticket-odds-box">
              <span className="odds-label">COTE TOTALE</span>
              <span className="odds-value">{odds}</span>
            </div>
          </div>

          <div className="ticket-divider"></div>

          {/* Image verrouillée */}
          <div className="ticket-body">
            <Image 
              src={couponImage} 
              alt="Match du jour" 
              width={350} 
              height={350} 
              className="coupon-image"
              priority
            />
          </div>

          <div className="ticket-divider"></div>

          {/* Pied du ticket */}
          <div className="ticket-footer">
            <div className="footer-stat">
              <span className="stat-label">MISE</span>
              <span className="stat-val">{stake}</span>
            </div>
            <div className="footer-stat align-right">
              <span className="stat-label">GAIN POTENTIEL</span>
              <span className="stat-val-gain">{gain}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bouton d'action */}
      <div className="hero-cta">
        <CtaBtn whatsappUrl={whatsappUrl} />
      </div>

      {/* Social Proof style cyber */}
      <div className="hero-social-proof">
        <div className="proof-item">
          <SquareCheckBig className="proof-icon" size={18}/>
          <span><strong>50</strong> coupons validés</span>
        </div>
        <div className="proof-separator"></div>
        <div className="proof-item">
          <Users className="proof-icon" size={18} />
          <span><strong>+5 000</strong> membres VIP</span>
        </div>
      </div>
    </section>
  )
}