import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAspectRatioElement
 * @class IconOutlineAspectRatioElement
 * @extends {AoflElement}
 */
class IconOutlineAspectRatioElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAspectRatioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-aspect-ratio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAspectRatioElement.is, IconOutlineAspectRatioElement);

export default IconOutlineAspectRatioElement;
