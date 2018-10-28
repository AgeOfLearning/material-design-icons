import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWeekendElement
 * @class IconTwotoneWeekendElement
 * @extends {AoflElement}
 */
class IconTwotoneWeekendElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWeekendElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-weekend';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWeekendElement.is, IconTwotoneWeekendElement);

export default IconTwotoneWeekendElement;
