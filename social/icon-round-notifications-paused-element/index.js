import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNotificationsPausedElement
 * @class IconRoundNotificationsPausedElement
 * @extends {AoflElement}
 */
class IconRoundNotificationsPausedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNotificationsPausedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-notifications-paused';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNotificationsPausedElement.is, IconRoundNotificationsPausedElement);

export default IconRoundNotificationsPausedElement;
