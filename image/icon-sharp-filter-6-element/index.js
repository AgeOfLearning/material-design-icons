import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilter6Element
 * @class IconSharpFilter6Element
 * @extends {AoflElement}
 */
class IconSharpFilter6Element extends AoflElement {
  /**
   * Creates an instance of IconSharpFilter6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilter6Element.is, IconSharpFilter6Element);

export default IconSharpFilter6Element;
