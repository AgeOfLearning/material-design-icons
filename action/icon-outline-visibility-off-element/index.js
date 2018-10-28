import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVisibilityOffElement
 * @class IconOutlineVisibilityOffElement
 * @extends {AoflElement}
 */
class IconOutlineVisibilityOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVisibilityOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-visibility-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVisibilityOffElement.is, IconOutlineVisibilityOffElement);

export default IconOutlineVisibilityOffElement;
