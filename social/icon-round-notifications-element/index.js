import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNotificationsElement
 * @class IconRoundNotificationsElement
 * @extends {AoflElement}
 */
class IconRoundNotificationsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNotificationsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-notifications';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNotificationsElement.is, IconRoundNotificationsElement);

export default IconRoundNotificationsElement;
