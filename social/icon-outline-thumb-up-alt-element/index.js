import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineThumbUpAltElement
 * @class IconOutlineThumbUpAltElement
 * @extends {AoflElement}
 */
class IconOutlineThumbUpAltElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineThumbUpAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-thumb-up-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineThumbUpAltElement.is, IconOutlineThumbUpAltElement);

export default IconOutlineThumbUpAltElement;
