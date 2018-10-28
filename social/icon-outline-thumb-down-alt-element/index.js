import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineThumbDownAltElement
 * @class IconOutlineThumbDownAltElement
 * @extends {AoflElement}
 */
class IconOutlineThumbDownAltElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineThumbDownAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-thumb-down-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineThumbDownAltElement.is, IconOutlineThumbDownAltElement);

export default IconOutlineThumbDownAltElement;
