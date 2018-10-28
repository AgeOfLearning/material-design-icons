import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVisibilityOffElement
 * @class IconTwotoneVisibilityOffElement
 * @extends {AoflElement}
 */
class IconTwotoneVisibilityOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVisibilityOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-visibility-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVisibilityOffElement.is, IconTwotoneVisibilityOffElement);

export default IconTwotoneVisibilityOffElement;
