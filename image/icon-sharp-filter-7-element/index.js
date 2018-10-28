import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilter7Element
 * @class IconSharpFilter7Element
 * @extends {AoflElement}
 */
class IconSharpFilter7Element extends AoflElement {
  /**
   * Creates an instance of IconSharpFilter7Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-7';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilter7Element.is, IconSharpFilter7Element);

export default IconSharpFilter7Element;
