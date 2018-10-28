import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNotificationsPausedElement
 * @class IconTwotoneNotificationsPausedElement
 * @extends {AoflElement}
 */
class IconTwotoneNotificationsPausedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNotificationsPausedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-notifications-paused';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNotificationsPausedElement.is, IconTwotoneNotificationsPausedElement);

export default IconTwotoneNotificationsPausedElement;
