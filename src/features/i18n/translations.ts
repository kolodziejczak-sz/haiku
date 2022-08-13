import merge from 'lodash.merge';
import keysDiff from 'keys-diff';
import { clone } from '@/features/utils/clone';
import { error } from '@/features/utils/error';
import {
  defaultLanguage,
  supportedLanguagesArray,
} from '@/features/i18n/supportedLanguages';

type Translations = Record<string, string | Record<string, string>>;

export const translations: Translations = {};

export const addTranslations = (draft: Translations, prefix?: string) => {
  const draftCopy = clone(draft);

  if (prefix) {
    supportedLanguagesArray.forEach((lang) => {
      if (translations[lang][prefix]) {
        delete translations[lang][prefix];
      }

      draftCopy[lang] = {
        [prefix]: draftCopy[lang],
      } as any;
    });
  }

  const newTranslations = merge(translations, draftCopy);

  Object.assign(translations, newTranslations);

  verifyTranslations();
};

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

const messageFiles = import.meta.glob('/**/messages.(json|ts)', { eager: true });

const messageFilesTranslations = Object.values(messageFiles).reduce<Translations>(
  (acc, { default: values }) => merge(acc, values),
  {}
);

addTranslations(messageFilesTranslations);
