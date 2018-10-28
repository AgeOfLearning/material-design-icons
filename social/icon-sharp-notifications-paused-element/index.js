import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNotificationsPausedElement
 * @class IconSharpNotificationsPausedElement
 * @extends {AoflElement}
 */
class IconSharpNotificationsPausedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNotificationsPausedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-notifications-paused';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNotificationsPausedElement.is, IconSharpNotificationsPausedElement);

export default IconSharpNotificationsPausedElement;
