import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilter3Element
 * @class IconSharpFilter3Element
 * @extends {AoflElement}
 */
class IconSharpFilter3Element extends AoflElement {
  /**
   * Creates an instance of IconSharpFilter3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilter3Element.is, IconSharpFilter3Element);

export default IconSharpFilter3Element;
