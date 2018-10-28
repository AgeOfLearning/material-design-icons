import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVignetteElement
 * @class IconTwotoneVignetteElement
 * @extends {AoflElement}
 */
class IconTwotoneVignetteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVignetteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-vignette';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVignetteElement.is, IconTwotoneVignetteElement);

export default IconTwotoneVignetteElement;
