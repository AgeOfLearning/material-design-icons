import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAdbElement
 * @class IconTwotoneAdbElement
 * @extends {AoflElement}
 */
class IconTwotoneAdbElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAdbElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-adb';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAdbElement.is, IconTwotoneAdbElement);

export default IconTwotoneAdbElement;
