import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNotificationsActiveElement
 * @class IconOutlineNotificationsActiveElement
 * @extends {AoflElement}
 */
class IconOutlineNotificationsActiveElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNotificationsActiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-notifications-active';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNotificationsActiveElement.is, IconOutlineNotificationsActiveElement);

export default IconOutlineNotificationsActiveElement;
