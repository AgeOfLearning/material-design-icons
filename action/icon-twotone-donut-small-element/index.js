import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDonutSmallElement
 * @class IconTwotoneDonutSmallElement
 * @extends {AoflElement}
 */
class IconTwotoneDonutSmallElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDonutSmallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-donut-small';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDonutSmallElement.is, IconTwotoneDonutSmallElement);

export default IconTwotoneDonutSmallElement;
