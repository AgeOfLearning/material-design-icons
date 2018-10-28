import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneScreenRotationElement
 * @class IconTwotoneScreenRotationElement
 * @extends {AoflElement}
 */
class IconTwotoneScreenRotationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneScreenRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-screen-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneScreenRotationElement.is, IconTwotoneScreenRotationElement);

export default IconTwotoneScreenRotationElement;
