import { useSelector } from 'react-redux';
import { KomentarItem } from './KomentarItem';
import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

function KomentarList({ komentars }) {
  const komentarUser = useSelector((states) => states.comments);

  const totalKomentar = useMemo(() => {
    // Pastikan threadDetail.comments dan komentar selalu berupa array
    return (komentars || []).concat(komentarUser || []);
  }, [komentars, komentarUser]);

  useEffect(() => {
    console.log(totalKomentar);
  }, [totalKomentar]);

  return (
    <div className="flex flex-col gap-y-4">
      {
        totalKomentar.map((komentar) => {
          return <KomentarItem key={komentar.id} {...komentar} />;
        })
      }
    </div>
  );
}

KomentarList.propTypes = {
  komentars: PropTypes.array
};

export { KomentarList };