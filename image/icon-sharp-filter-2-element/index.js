import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilter2Element
 * @class IconSharpFilter2Element
 * @extends {AoflElement}
 */
class IconSharpFilter2Element extends AoflElement {
  /**
   * Creates an instance of IconSharpFilter2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilter2Element.is, IconSharpFilter2Element);

export default IconSharpFilter2Element;
