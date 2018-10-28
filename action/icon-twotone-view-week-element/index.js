import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewWeekElement
 * @class IconTwotoneViewWeekElement
 * @extends {AoflElement}
 */
class IconTwotoneViewWeekElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewWeekElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-week';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewWeekElement.is, IconTwotoneViewWeekElement);

export default IconTwotoneViewWeekElement;
