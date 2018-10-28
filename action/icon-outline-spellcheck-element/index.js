import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSpellcheckElement
 * @class IconOutlineSpellcheckElement
 * @extends {AoflElement}
 */
class IconOutlineSpellcheckElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSpellcheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-spellcheck';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSpellcheckElement.is, IconOutlineSpellcheckElement);

export default IconOutlineSpellcheckElement;
