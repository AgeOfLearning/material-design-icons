import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineThumbDownElement
 * @class IconOutlineThumbDownElement
 * @extends {AoflElement}
 */
class IconOutlineThumbDownElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineThumbDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-thumb-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineThumbDownElement.is, IconOutlineThumbDownElement);

export default IconOutlineThumbDownElement;
