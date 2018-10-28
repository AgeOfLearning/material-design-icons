import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTimerOffElement
 * @class IconOutlineTimerOffElement
 * @extends {AoflElement}
 */
class IconOutlineTimerOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTimerOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-timer-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTimerOffElement.is, IconOutlineTimerOffElement);

export default IconOutlineTimerOffElement;
