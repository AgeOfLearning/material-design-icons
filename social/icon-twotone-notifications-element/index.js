import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNotificationsElement
 * @class IconTwotoneNotificationsElement
 * @extends {AoflElement}
 */
class IconTwotoneNotificationsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNotificationsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-notifications';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNotificationsElement.is, IconTwotoneNotificationsElement);

export default IconTwotoneNotificationsElement;
