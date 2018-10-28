import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSnoozeElement
 * @class IconSharpSnoozeElement
 * @extends {AoflElement}
 */
class IconSharpSnoozeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSnoozeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-snooze';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSnoozeElement.is, IconSharpSnoozeElement);

export default IconSharpSnoozeElement;
