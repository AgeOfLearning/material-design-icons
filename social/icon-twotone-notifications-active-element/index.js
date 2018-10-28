import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNotificationsActiveElement
 * @class IconTwotoneNotificationsActiveElement
 * @extends {AoflElement}
 */
class IconTwotoneNotificationsActiveElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNotificationsActiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-notifications-active';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNotificationsActiveElement.is, IconTwotoneNotificationsActiveElement);

export default IconTwotoneNotificationsActiveElement;
