import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNotificationsOffElement
 * @class IconSharpNotificationsOffElement
 * @extends {AoflElement}
 */
class IconSharpNotificationsOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNotificationsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-notifications-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNotificationsOffElement.is, IconSharpNotificationsOffElement);

export default IconSharpNotificationsOffElement;
