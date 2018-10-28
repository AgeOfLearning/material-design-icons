import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilter9Element
 * @class IconSharpFilter9Element
 * @extends {AoflElement}
 */
class IconSharpFilter9Element extends AoflElement {
  /**
   * Creates an instance of IconSharpFilter9Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-9';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilter9Element.is, IconSharpFilter9Element);

export default IconSharpFilter9Element;
