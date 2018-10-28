import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVignetteElement
 * @class IconOutlineVignetteElement
 * @extends {AoflElement}
 */
class IconOutlineVignetteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVignetteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-vignette';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVignetteElement.is, IconOutlineVignetteElement);

export default IconOutlineVignetteElement;
