import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilter4Element
 * @class IconSharpFilter4Element
 * @extends {AoflElement}
 */
class IconSharpFilter4Element extends AoflElement {
  /**
   * Creates an instance of IconSharpFilter4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilter4Element.is, IconSharpFilter4Element);

export default IconSharpFilter4Element;
