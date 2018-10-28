import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneImageAspectRatioElement
 * @class IconTwotoneImageAspectRatioElement
 * @extends {AoflElement}
 */
class IconTwotoneImageAspectRatioElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneImageAspectRatioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-image-aspect-ratio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneImageAspectRatioElement.is, IconTwotoneImageAspectRatioElement);

export default IconTwotoneImageAspectRatioElement;
