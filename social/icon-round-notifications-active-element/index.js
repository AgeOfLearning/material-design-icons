import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNotificationsActiveElement
 * @class IconRoundNotificationsActiveElement
 * @extends {AoflElement}
 */
class IconRoundNotificationsActiveElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNotificationsActiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-notifications-active';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNotificationsActiveElement.is, IconRoundNotificationsActiveElement);

export default IconRoundNotificationsActiveElement;
