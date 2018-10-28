import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSpellcheckElement
 * @class IconRoundSpellcheckElement
 * @extends {AoflElement}
 */
class IconRoundSpellcheckElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSpellcheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-spellcheck';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSpellcheckElement.is, IconRoundSpellcheckElement);

export default IconRoundSpellcheckElement;
