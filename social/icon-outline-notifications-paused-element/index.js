import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNotificationsPausedElement
 * @class IconOutlineNotificationsPausedElement
 * @extends {AoflElement}
 */
class IconOutlineNotificationsPausedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNotificationsPausedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-notifications-paused';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNotificationsPausedElement.is, IconOutlineNotificationsPausedElement);

export default IconOutlineNotificationsPausedElement;
