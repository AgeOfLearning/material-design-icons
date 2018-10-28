import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpImageElement
 * @class IconSharpImageElement
 * @extends {AoflElement}
 */
class IconSharpImageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpImageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-image';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpImageElement.is, IconSharpImageElement);

export default IconSharpImageElement;
