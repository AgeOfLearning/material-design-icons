import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineColorLensElement
 * @class IconOutlineColorLensElement
 * @extends {AoflElement}
 */
class IconOutlineColorLensElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineColorLensElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-color-lens';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineColorLensElement.is, IconOutlineColorLensElement);

export default IconOutlineColorLensElement;
