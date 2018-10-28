import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNotificationsNoneElement
 * @class IconRoundNotificationsNoneElement
 * @extends {AoflElement}
 */
class IconRoundNotificationsNoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNotificationsNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-notifications-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNotificationsNoneElement.is, IconRoundNotificationsNoneElement);

export default IconRoundNotificationsNoneElement;
