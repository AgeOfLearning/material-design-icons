import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDateRangeElement
 * @class IconTwotoneDateRangeElement
 * @extends {AoflElement}
 */
class IconTwotoneDateRangeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDateRangeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-date-range';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDateRangeElement.is, IconTwotoneDateRangeElement);

export default IconTwotoneDateRangeElement;
