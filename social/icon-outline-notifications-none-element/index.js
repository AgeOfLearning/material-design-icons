import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNotificationsNoneElement
 * @class IconOutlineNotificationsNoneElement
 * @extends {AoflElement}
 */
class IconOutlineNotificationsNoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNotificationsNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-notifications-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNotificationsNoneElement.is, IconOutlineNotificationsNoneElement);

export default IconOutlineNotificationsNoneElement;
