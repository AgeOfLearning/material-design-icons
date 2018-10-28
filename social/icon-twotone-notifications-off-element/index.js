import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNotificationsOffElement
 * @class IconTwotoneNotificationsOffElement
 * @extends {AoflElement}
 */
class IconTwotoneNotificationsOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNotificationsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-notifications-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNotificationsOffElement.is, IconTwotoneNotificationsOffElement);

export default IconTwotoneNotificationsOffElement;
