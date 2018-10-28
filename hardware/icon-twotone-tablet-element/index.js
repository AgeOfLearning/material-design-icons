import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTabletElement
 * @class IconTwotoneTabletElement
 * @extends {AoflElement}
 */
class IconTwotoneTabletElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTabletElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tablet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTabletElement.is, IconTwotoneTabletElement);

export default IconTwotoneTabletElement;
