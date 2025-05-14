import { Alert, Button, Input, Textarea, Typography } from '@material-tailwind/react';
import { useInput } from '../customHooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { validate } from '../utils/tambahan/validate';
import React from 'react';

function AddThreadPages() {
  const [title, onChangeJudul] = useInput();
  const [category, onChangeKategori] = useInput();
  const [body, onChangeKonten] = useInput();
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    if (authUser == null) {
      navigate('/login');
    }
  }, [authUser, navigate]);

  const onAddThread = () => {
    if (validate(title, body)) {
      dispatch(asyncAddThread({ title, category, body }));
      navigate('/');
    }
    setAlert(true);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white w-2/3 p-9 flex flex-col gap-2">
        {alert &&
                    <Alert variant="ghost">
                      <span>Judul atau kategori tidak boleh kosong</span>
                    </Alert>
        }
        <Typography variant="h4">Buat Diskusi Baru</Typography>
        <Input label="Judul" value={title} onChange={onChangeJudul} />
        <Input label="Kategori" value={category} onChange={onChangeKategori} />
        <Textarea size="lg" label="Konten" value={body} onChange={onChangeKonten} />
        <Button onClick={onAddThread}>Buat</Button>
      </div>
    </div>
  );
}

export { AddThreadPages };