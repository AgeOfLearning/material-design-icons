import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEuroSymbolElement
 * @class IconSharpEuroSymbolElement
 * @extends {AoflElement}
 */
class IconSharpEuroSymbolElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEuroSymbolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-euro-symbol';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEuroSymbolElement.is, IconSharpEuroSymbolElement);

export default IconSharpEuroSymbolElement;
