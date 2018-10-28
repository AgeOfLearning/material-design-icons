import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineImageAspectRatioElement
 * @class IconBaselineImageAspectRatioElement
 * @extends {AoflElement}
 */
class IconBaselineImageAspectRatioElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineImageAspectRatioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-image-aspect-ratio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineImageAspectRatioElement.is, IconBaselineImageAspectRatioElement);

export default IconBaselineImageAspectRatioElement;
