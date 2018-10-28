import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFaceElement
 * @class IconOutlineFaceElement
 * @extends {AoflElement}
 */
class IconOutlineFaceElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-face';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFaceElement.is, IconOutlineFaceElement);

export default IconOutlineFaceElement;
