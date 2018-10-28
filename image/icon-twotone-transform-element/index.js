import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTransformElement
 * @class IconTwotoneTransformElement
 * @extends {AoflElement}
 */
class IconTwotoneTransformElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTransformElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-transform';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTransformElement.is, IconTwotoneTransformElement);

export default IconTwotoneTransformElement;
