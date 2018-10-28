import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNotificationsNoneElement
 * @class IconTwotoneNotificationsNoneElement
 * @extends {AoflElement}
 */
class IconTwotoneNotificationsNoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNotificationsNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-notifications-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNotificationsNoneElement.is, IconTwotoneNotificationsNoneElement);

export default IconTwotoneNotificationsNoneElement;
