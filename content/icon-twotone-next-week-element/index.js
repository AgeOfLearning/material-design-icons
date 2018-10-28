import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNextWeekElement
 * @class IconTwotoneNextWeekElement
 * @extends {AoflElement}
 */
class IconTwotoneNextWeekElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNextWeekElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-next-week';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNextWeekElement.is, IconTwotoneNextWeekElement);

export default IconTwotoneNextWeekElement;
