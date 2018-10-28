import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSnoozeElement
 * @class IconTwotoneSnoozeElement
 * @extends {AoflElement}
 */
class IconTwotoneSnoozeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSnoozeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-snooze';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSnoozeElement.is, IconTwotoneSnoozeElement);

export default IconTwotoneSnoozeElement;
