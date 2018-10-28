import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGradientElement
 * @class IconOutlineGradientElement
 * @extends {AoflElement}
 */
class IconOutlineGradientElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGradientElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-gradient';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGradientElement.is, IconOutlineGradientElement);

export default IconOutlineGradientElement;
