import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewDayElement
 * @class IconTwotoneViewDayElement
 * @extends {AoflElement}
 */
class IconTwotoneViewDayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewDayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-day';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewDayElement.is, IconTwotoneViewDayElement);

export default IconTwotoneViewDayElement;
