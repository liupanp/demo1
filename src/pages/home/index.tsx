import React from 'react';
import {history,useModel} from 'umi';
import { FormattedMessage,SelectLang } from 'umi';

export default function HomePage() {

  return (
    <div>
      <SelectLang />
      <FormattedMessage id="welcome" />
    </div>
  );
}
