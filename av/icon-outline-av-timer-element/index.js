import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAvTimerElement
 * @class IconOutlineAvTimerElement
 * @extends {AoflElement}
 */
class IconOutlineAvTimerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAvTimerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-av-timer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAvTimerElement.is, IconOutlineAvTimerElement);

export default IconOutlineAvTimerElement;
