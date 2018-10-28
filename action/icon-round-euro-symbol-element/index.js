import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEuroSymbolElement
 * @class IconRoundEuroSymbolElement
 * @extends {AoflElement}
 */
class IconRoundEuroSymbolElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEuroSymbolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-euro-symbol';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEuroSymbolElement.is, IconRoundEuroSymbolElement);

export default IconRoundEuroSymbolElement;
