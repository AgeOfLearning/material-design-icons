import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpImageAspectRatioElement
 * @class IconSharpImageAspectRatioElement
 * @extends {AoflElement}
 */
class IconSharpImageAspectRatioElement extends AoflElement {
  /**
   * Creates an instance of IconSharpImageAspectRatioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-image-aspect-ratio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpImageAspectRatioElement.is, IconSharpImageAspectRatioElement);

export default IconSharpImageAspectRatioElement;
