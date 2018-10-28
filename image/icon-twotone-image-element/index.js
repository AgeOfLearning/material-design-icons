import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneImageElement
 * @class IconTwotoneImageElement
 * @extends {AoflElement}
 */
class IconTwotoneImageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneImageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-image';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneImageElement.is, IconTwotoneImageElement);

export default IconTwotoneImageElement;
