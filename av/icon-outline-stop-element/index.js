import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStopElement
 * @class IconOutlineStopElement
 * @extends {AoflElement}
 */
class IconOutlineStopElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-stop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStopElement.is, IconOutlineStopElement);

export default IconOutlineStopElement;
