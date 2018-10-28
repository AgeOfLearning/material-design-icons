import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSpellcheckElement
 * @class IconBaselineSpellcheckElement
 * @extends {AoflElement}
 */
class IconBaselineSpellcheckElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSpellcheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-spellcheck';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSpellcheckElement.is, IconBaselineSpellcheckElement);

export default IconBaselineSpellcheckElement;
