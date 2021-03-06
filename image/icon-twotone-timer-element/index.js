import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTimerElement
 * @class IconTwotoneTimerElement
 * @extends {AoflElement}
 */
class IconTwotoneTimerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTimerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-timer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTimerElement.is, IconTwotoneTimerElement);

export default IconTwotoneTimerElement;
