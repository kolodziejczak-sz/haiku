import merge from 'lodash.merge';
import keysDiff from 'keys-diff';
import {
  defaultLanguage,
  supportedLanguagesArray,
} from '@/features/i18n/supportedLanguages';

const messageJsonFiles = import.meta.globEager('/**/messages.json');

export const messages = Object.values(messageJsonFiles).reduce(
  (acc, { default: values }) => merge(acc, values),
  {}
);

const verifyTranslations = () => {
  supportedLanguagesArray.forEach((lang) => {
    const subject = messages[lang];

    if (!subject) {
      console.error(`Please provide translations for ${lang} language`);
      return;
    }

    if (lang === defaultLanguage) {
      return;
    }

    const model = messages[defaultLanguage];
    const [missingValues] = keysDiff(model, subject);

    if (missingValues.length) {
      console.error(
        `Language ${lang} has missing translations: ${missingValues}.`
      );
    }
  });
};

verifyTranslations();
