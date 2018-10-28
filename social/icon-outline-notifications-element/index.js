import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNotificationsElement
 * @class IconOutlineNotificationsElement
 * @extends {AoflElement}
 */
class IconOutlineNotificationsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNotificationsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-notifications';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNotificationsElement.is, IconOutlineNotificationsElement);

export default IconOutlineNotificationsElement;
