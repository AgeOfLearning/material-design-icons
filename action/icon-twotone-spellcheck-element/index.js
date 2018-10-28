import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSpellcheckElement
 * @class IconTwotoneSpellcheckElement
 * @extends {AoflElement}
 */
class IconTwotoneSpellcheckElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSpellcheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-spellcheck';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSpellcheckElement.is, IconTwotoneSpellcheckElement);

export default IconTwotoneSpellcheckElement;
