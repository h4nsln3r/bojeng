import { PlayedShow } from '@/types/global';
import Button from '../Button';
import './shows.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { FaFacebook, FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
  shows: PlayedShow[];
  emptyText?: string;
  expandable?: boolean;
}

function formatDate(dateStr: string, locale: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString(locale === 'sv' ? 'sv-SE' : 'en-GB', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
  return dateStr;
}

function hasExpandableContent(show: PlayedShow): boolean {
  return !!(
    show.time ||
    show.address ||
    show.ticketLink ||
    show.link ||
    show.facebookLink ||
    show.otherLink ||
    show.otherBands
  );
}

const GigList = ({ shows, emptyText, expandable = false }: Props) => {
  const { t, i18n } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(null);

  if (!shows || shows.length === 0) {
    return <p className="shows-list--empty">{emptyText ?? t('shows.empty')}</p>;
  }

  return (
    <ul className="shows-list">
      {shows.map((s: PlayedShow) => {
        const id = `${s.date}-${s.city}-${s.venue}`;
        const canExpand = expandable && hasExpandableContent(s);
        const isOpen = openId === id;

        const ticketUrl = s.ticketLink ?? s.link;

        return (
          <li
            key={id}
            className={`shows-list__item ${canExpand ? 'shows-list__item--expandable' : ''}`}
          >
            <div
              className="shows-list__header"
              onClick={() => canExpand && setOpenId(isOpen ? null : id)}
              role={canExpand ? 'button' : undefined}
              tabIndex={canExpand ? 0 : undefined}
              onKeyDown={(e) =>
                canExpand &&
                (e.key === 'Enter' || e.key === ' ') &&
                (e.preventDefault(), setOpenId(isOpen ? null : id))
              }
              aria-expanded={canExpand ? isOpen : undefined}
              aria-label={
                canExpand ? (isOpen ? t('shows.hideDetails') : t('shows.showDetails')) : undefined
              }
            >
              <span className="shows-list__date">{formatDate(s.date, i18n.language)}</span>
              <span className="shows-list__city">{s.city}</span>
              <span className="shows-list__venue">{s.venue}</span>
              {!canExpand && ticketUrl && ticketUrl !== '#' && (
                <Button
                  variant="ghost"
                  href={ticketUrl}
                  ariaLabel={t('shows.ticketsAria', { city: s.city, venue: s.venue })}
                >
                  {t('shows.tickets')}
                </Button>
              )}
              {canExpand && (
                <span className="shows-list__chevron">
                  {isOpen ? <SlArrowUp /> : <SlArrowDown />}
                </span>
              )}
            </div>

            <AnimatePresence initial={false}>
              {canExpand && isOpen && (
                <motion.div
                  className="shows-list__details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="shows-list__details-inner">
                    <div className="shows-list__details-content">
                      {s.time && (
                        <p className="shows-list__detail">
                          <strong>{t('shows.time')}</strong> {s.time}
                        </p>
                      )}
                      {s.address && (
                        <p className="shows-list__detail">
                          <strong>{t('shows.address')}</strong> {s.address}
                        </p>
                      )}
                      {/* {s.otherBands && (
                        <p className="shows-list__detail">
                          <strong>{t('shows.otherBands')}</strong> {s.otherBands}
                        </p>
                      )} */}
                    </div>
                    <div className="shows-list__links">
                      {ticketUrl && ticketUrl !== '#' && (
                        <Button
                          variant="solid"
                          href={ticketUrl}
                          ariaLabel={t('shows.ticketsAria', { city: s.city, venue: s.venue })}
                        >
                          {t('shows.tickets')}
                        </Button>
                      )}
                      {s.facebookLink && (
                        <a
                          href={s.facebookLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shows-list__link"
                          aria-label={`${t('shows.facebook')} – ${s.venue}`}
                        >
                          <FaFacebook className="shows-list__link-icon" />
                        </a>
                      )}
                      {s.otherLink && (
                        <a
                          href={s.otherLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shows-list__link"
                          aria-label={t('shows.otherLink')}
                        >
                          <FaExternalLinkAlt className="shows-list__link-icon" />{' '}
                          {t('shows.otherLink')}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
};

export default GigList;
