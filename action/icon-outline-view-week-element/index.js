import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewWeekElement
 * @class IconOutlineViewWeekElement
 * @extends {AoflElement}
 */
class IconOutlineViewWeekElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewWeekElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-week';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewWeekElement.is, IconOutlineViewWeekElement);

export default IconOutlineViewWeekElement;
