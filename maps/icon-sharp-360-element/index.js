import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharp360Element
 * @class IconSharp360Element
 * @extends {AoflElement}
 */
class IconSharp360Element extends AoflElement {
  /**
   * Creates an instance of IconSharp360Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-360';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharp360Element.is, IconSharp360Element);

export default IconSharp360Element;
