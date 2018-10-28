import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundImageAspectRatioElement
 * @class IconRoundImageAspectRatioElement
 * @extends {AoflElement}
 */
class IconRoundImageAspectRatioElement extends AoflElement {
  /**
   * Creates an instance of IconRoundImageAspectRatioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-image-aspect-ratio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundImageAspectRatioElement.is, IconRoundImageAspectRatioElement);

export default IconRoundImageAspectRatioElement;
