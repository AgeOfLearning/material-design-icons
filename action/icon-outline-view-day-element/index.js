import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewDayElement
 * @class IconOutlineViewDayElement
 * @extends {AoflElement}
 */
class IconOutlineViewDayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewDayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-day';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewDayElement.is, IconOutlineViewDayElement);

export default IconOutlineViewDayElement;
