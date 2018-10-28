import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilter1Element
 * @class IconSharpFilter1Element
 * @extends {AoflElement}
 */
class IconSharpFilter1Element extends AoflElement {
  /**
   * Creates an instance of IconSharpFilter1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilter1Element.is, IconSharpFilter1Element);

export default IconSharpFilter1Element;
