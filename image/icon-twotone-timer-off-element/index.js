import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTimerOffElement
 * @class IconTwotoneTimerOffElement
 * @extends {AoflElement}
 */
class IconTwotoneTimerOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTimerOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-timer-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTimerOffElement.is, IconTwotoneTimerOffElement);

export default IconTwotoneTimerOffElement;
