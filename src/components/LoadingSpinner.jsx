import { Spinner } from '@material-tailwind/react';
import React from 'react';

function LoadingSpinner() {
  return (
    <div className="flex items-end gap-8">
      <Spinner className="h-10 w-10" />
    </div>
  );
}

export { LoadingSpinner };