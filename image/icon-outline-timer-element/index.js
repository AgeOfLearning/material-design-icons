import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTimerElement
 * @class IconOutlineTimerElement
 * @extends {AoflElement}
 */
class IconOutlineTimerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTimerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-timer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTimerElement.is, IconOutlineTimerElement);

export default IconOutlineTimerElement;
