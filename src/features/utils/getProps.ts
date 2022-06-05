import { AstroGlobal } from 'astro';
import { translateObject } from '@/features/i18n/translateObject';

export const getProps = <T>(context: AstroGlobal): T => {
  const { content = {}, ...rest } = context.props;
  const props = {
    ...content,
    ...rest,
  }

  return translateObject(props, context);
};
