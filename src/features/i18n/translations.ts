import merge from 'lodash.merge';
import keysDiff from 'keys-diff';
import { error } from '@/features/utils/error';
import {
  defaultLanguage,
  supportedLanguagesArray,
} from '@/features/i18n/supportedLanguages';

const messageFiles = import.meta.globEager('/**/messages.(json|ts)');

export const translations = Object.values(messageFiles).reduce(
  (acc, { default: values }) => merge(acc, values),
  {}
);

const verifyTranslations = () => {
  supportedLanguagesArray.forEach((lang) => {
    const subject = translations[lang];

    if (!subject) {
      error(`Please provide translations for ${lang} language`);
      return;
    }

    if (lang === defaultLanguage) {
      return;
    }

    const model = translations[defaultLanguage];
    const [missingValues] = keysDiff(model, subject);

    if (missingValues.length) {
      error(
        `Language ${lang} has missing translations: ${missingValues}.`
      );
    }
  });
};

verifyTranslations();
