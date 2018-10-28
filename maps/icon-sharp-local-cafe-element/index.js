import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalCafeElement
 * @class IconSharpLocalCafeElement
 * @extends {AoflElement}
 */
class IconSharpLocalCafeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalCafeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-cafe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalCafeElement.is, IconSharpLocalCafeElement);

export default IconSharpLocalCafeElement;
