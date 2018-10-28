import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalCarWashElement
 * @class IconTwotoneLocalCarWashElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalCarWashElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalCarWashElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-car-wash';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalCarWashElement.is, IconTwotoneLocalCarWashElement);

export default IconTwotoneLocalCarWashElement;
