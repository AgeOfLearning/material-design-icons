import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLayersElement
 * @class IconOutlineLayersElement
 * @extends {AoflElement}
 */
class IconOutlineLayersElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLayersElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-layers';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLayersElement.is, IconOutlineLayersElement);

export default IconOutlineLayersElement;
