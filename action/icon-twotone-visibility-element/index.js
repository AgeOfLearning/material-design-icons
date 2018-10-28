import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVisibilityElement
 * @class IconTwotoneVisibilityElement
 * @extends {AoflElement}
 */
class IconTwotoneVisibilityElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVisibilityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-visibility';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVisibilityElement.is, IconTwotoneVisibilityElement);

export default IconTwotoneVisibilityElement;
