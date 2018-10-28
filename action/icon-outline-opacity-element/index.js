import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineOpacityElement
 * @class IconOutlineOpacityElement
 * @extends {AoflElement}
 */
class IconOutlineOpacityElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineOpacityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-opacity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineOpacityElement.is, IconOutlineOpacityElement);

export default IconOutlineOpacityElement;
