import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNextWeekElement
 * @class IconOutlineNextWeekElement
 * @extends {AoflElement}
 */
class IconOutlineNextWeekElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNextWeekElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-next-week';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNextWeekElement.is, IconOutlineNextWeekElement);

export default IconOutlineNextWeekElement;
