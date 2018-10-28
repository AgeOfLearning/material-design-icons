import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGradientElement
 * @class IconTwotoneGradientElement
 * @extends {AoflElement}
 */
class IconTwotoneGradientElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGradientElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-gradient';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGradientElement.is, IconTwotoneGradientElement);

export default IconTwotoneGradientElement;
