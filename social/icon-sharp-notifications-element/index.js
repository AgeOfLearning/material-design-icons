import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNotificationsElement
 * @class IconSharpNotificationsElement
 * @extends {AoflElement}
 */
class IconSharpNotificationsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNotificationsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-notifications';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNotificationsElement.is, IconSharpNotificationsElement);

export default IconSharpNotificationsElement;
