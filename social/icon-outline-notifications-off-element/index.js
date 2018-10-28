import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNotificationsOffElement
 * @class IconOutlineNotificationsOffElement
 * @extends {AoflElement}
 */
class IconOutlineNotificationsOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNotificationsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-notifications-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNotificationsOffElement.is, IconOutlineNotificationsOffElement);

export default IconOutlineNotificationsOffElement;
