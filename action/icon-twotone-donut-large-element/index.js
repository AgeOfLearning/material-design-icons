import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDonutLargeElement
 * @class IconTwotoneDonutLargeElement
 * @extends {AoflElement}
 */
class IconTwotoneDonutLargeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDonutLargeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-donut-large';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDonutLargeElement.is, IconTwotoneDonutLargeElement);

export default IconTwotoneDonutLargeElement;
