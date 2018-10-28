import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLanguageElement
 * @class IconTwotoneLanguageElement
 * @extends {AoflElement}
 */
class IconTwotoneLanguageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLanguageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-language';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLanguageElement.is, IconTwotoneLanguageElement);

export default IconTwotoneLanguageElement;
