import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAspectRatioElement
 * @class IconTwotoneAspectRatioElement
 * @extends {AoflElement}
 */
class IconTwotoneAspectRatioElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAspectRatioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-aspect-ratio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAspectRatioElement.is, IconTwotoneAspectRatioElement);

export default IconTwotoneAspectRatioElement;
