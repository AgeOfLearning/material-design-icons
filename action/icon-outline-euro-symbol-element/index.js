import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEuroSymbolElement
 * @class IconOutlineEuroSymbolElement
 * @extends {AoflElement}
 */
class IconOutlineEuroSymbolElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEuroSymbolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-euro-symbol';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEuroSymbolElement.is, IconOutlineEuroSymbolElement);

export default IconOutlineEuroSymbolElement;
