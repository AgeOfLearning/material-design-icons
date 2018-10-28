import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSpellcheckElement
 * @class IconSharpSpellcheckElement
 * @extends {AoflElement}
 */
class IconSharpSpellcheckElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSpellcheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-spellcheck';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSpellcheckElement.is, IconSharpSpellcheckElement);

export default IconSharpSpellcheckElement;
