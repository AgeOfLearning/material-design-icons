import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAspectRatioElement
 * @class IconSharpAspectRatioElement
 * @extends {AoflElement}
 */
class IconSharpAspectRatioElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAspectRatioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-aspect-ratio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAspectRatioElement.is, IconSharpAspectRatioElement);

export default IconSharpAspectRatioElement;
