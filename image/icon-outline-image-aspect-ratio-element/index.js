import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineImageAspectRatioElement
 * @class IconOutlineImageAspectRatioElement
 * @extends {AoflElement}
 */
class IconOutlineImageAspectRatioElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineImageAspectRatioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-image-aspect-ratio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineImageAspectRatioElement.is, IconOutlineImageAspectRatioElement);

export default IconOutlineImageAspectRatioElement;
