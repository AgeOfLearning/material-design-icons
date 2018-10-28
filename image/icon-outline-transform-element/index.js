import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTransformElement
 * @class IconOutlineTransformElement
 * @extends {AoflElement}
 */
class IconOutlineTransformElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTransformElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-transform';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTransformElement.is, IconOutlineTransformElement);

export default IconOutlineTransformElement;
