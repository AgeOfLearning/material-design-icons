import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVisibilityElement
 * @class IconOutlineVisibilityElement
 * @extends {AoflElement}
 */
class IconOutlineVisibilityElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVisibilityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-visibility';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVisibilityElement.is, IconOutlineVisibilityElement);

export default IconOutlineVisibilityElement;
