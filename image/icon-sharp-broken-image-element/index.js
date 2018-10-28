import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrokenImageElement
 * @class IconSharpBrokenImageElement
 * @extends {AoflElement}
 */
class IconSharpBrokenImageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBrokenImageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-broken-image';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrokenImageElement.is, IconSharpBrokenImageElement);

export default IconSharpBrokenImageElement;
