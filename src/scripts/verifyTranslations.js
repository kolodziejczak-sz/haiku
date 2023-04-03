import keysDiff from 'keys-diff';
import { error } from '@/features/utils/error';
import {
  defaultLanguage,
  supportedLanguagesArray,
} from '@/features/i18n/supportedLanguages';
import messages from '@/features/i18n/messages.json';

export const verifyTranslations = () => {
  supportedLanguagesArray.forEach((lang) => {
    const subject = translations[lang];

    if (!subject) {
      error(`Please provide translations for ${lang} language`);
      return;
    }

    if (lang === defaultLanguage) {
      return;
    }

    const model = messages[defaultLanguage];
    const [missingValues] = keysDiff(model, subject);

    if (missingValues.length) {
      error(
        `Language ${lang} has missing translations: ${missingValues}.`
      );
    }
  });
};

