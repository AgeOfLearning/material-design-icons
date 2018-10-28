import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEuroSymbolElement
 * @class IconTwotoneEuroSymbolElement
 * @extends {AoflElement}
 */
class IconTwotoneEuroSymbolElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEuroSymbolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-euro-symbol';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEuroSymbolElement.is, IconTwotoneEuroSymbolElement);

export default IconTwotoneEuroSymbolElement;
