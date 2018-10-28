import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSnoozeElement
 * @class IconOutlineSnoozeElement
 * @extends {AoflElement}
 */
class IconOutlineSnoozeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSnoozeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-snooze';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSnoozeElement.is, IconOutlineSnoozeElement);

export default IconOutlineSnoozeElement;
