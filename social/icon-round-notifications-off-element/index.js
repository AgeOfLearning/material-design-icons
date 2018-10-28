import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNotificationsOffElement
 * @class IconRoundNotificationsOffElement
 * @extends {AoflElement}
 */
class IconRoundNotificationsOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNotificationsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-notifications-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNotificationsOffElement.is, IconRoundNotificationsOffElement);

export default IconRoundNotificationsOffElement;
